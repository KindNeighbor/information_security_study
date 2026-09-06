/* build.js — cards/*.js(단일 소스)에서 주제별 읽기용 notes/*.md 를 생성한다.
   사용법:  node build.js
   새 카드를 cards/<주제>.js 에 추가한 뒤 이 스크립트를 돌리면 노트가 갱신된다.
   notes/README.md 와 notes/index.md 는 같은 내용의 인덱스(raw 주소·수록 개념 포함)다. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const REPO_RAW = 'https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/';
const RAW_BASE = REPO_RAW + 'notes/';

// 파일 → 표시 제목 (index.html의 GROUPS와 맞춤)
const TOPICS = [
  {file:'shares',     title:'공유·프로토콜 (SMB 계열)'},
  {file:'winauth',    title:'윈도우 인증·로그온'},
  {file:'ntfs',       title:'파일시스템 (NTFS)'},
  {file:'sysrecord',  title:'레지스트리·이벤트 로그'},
  {file:'malware',    title:'악성코드'},
  {file:'memexploit', title:'메모리 익스플로잇'},
  {file:'unix',       title:'유닉스·리눅스 보안 기초'},
  {file:'swvuln',     title:'소프트웨어 취약점 (개발 보안)'},
  {file:'threat',     title:'고급 위협 (APT·킬체인·DLL)'},
  {file:'webapp',     title:'애플리케이션·웹 보안'},
  {file:'forensics',  title:'포렌식·리버싱'},
  {file:'network',    title:'네트워크 일반 (PART 02)'},
  {file:'http',       title:'네트워크 활용(TCP/IP) — HTTP'},
  {file:'appsvc',     title:'네트워크 활용(TCP/IP) — 메일·네트워크 관리'},
  {file:'translayer', title:'네트워크 활용(TCP/IP) — 전송 계층'},
  {file:'netlayer',   title:'네트워크 활용(TCP/IP) — 인터넷 계층'},
  {file:'netaccess',  title:'네트워크 활용(TCP/IP) — 네트워크 접근 계층'},
  {file:'dosattack',  title:'네트워크 기반 공격 — DoS·DDoS'},
  {file:'netattack',  title:'네트워크 기반 공격 — 스캐닝·스니핑·스푸핑·하이재킹'},
  {file:'firewall',   title:'네트워크 보안 기술 — 침입차단·침입탐지'},
  {file:'vpnetc',     title:'네트워크 보안 기술 — VPN·통합관리·무선·RFID'},
  {file:'netthreat',  title:'네트워크 위협 및 대응 기술'},
  {file:'appsec',     title:'인터넷 응용 보안 (PART 03) — FTP·메일·웹·DNS'},
  {file:'dbsec',      title:'데이터베이스 보안 (PART 03) — DB·SQL·위협·백업'},
  {file:'ecommerce',  title:'전자상거래 보안 (PART 03) — 전자화폐·SET·SSL·OTP·XML'},
  {file:'etc',        title:'기타'},
];

function loadCards(file){
  const p = path.join(ROOT, 'cards', file + '.js');
  if (!fs.existsSync(p)) return null;
  const w = {};
  new Function('window', fs.readFileSync(p, 'utf8'))(w);
  return w.DATA || [];
}

// HTML 조각 → 읽기 쉬운 마크다운
function toMd(h){
  if (!h) return '';
  let s = h;
  s = s.replace(/<pre>([\s\S]*?)<\/pre>/g, (m,c)=>'\n\n```\n'+strip(c).trim()+'\n```\n\n');
  s = s.replace(/<br\s*\/?>/g, '\n');
  s = s.replace(/<li>([\s\S]*?)<\/li>/g, (m,c)=>'\n- '+c.trim());
  s = s.replace(/<span class='lbl'>([\s\S]*?)<\/span>/g, '**[$1]** ');
  s = s.replace(/<span class='cmp-label'>([\s\S]*?)<\/span>/g, '\n- **$1**: ');
  s = s.replace(/<div class='es-name'>([\s\S]*?)<\/div>/g, '\n- **$1** — ');
  s = s.replace(/<div class='es-note'>([\s\S]*?)<\/div>/g, '$1');
  s = s.replace(/<span class='evo-arrow'>[\s\S]*?<\/span>/g, '');
  s = s.replace(/<b>([\s\S]*?)<\/b>/g, '**$1**');
  s = s.replace(/<code>([\s\S]*?)<\/code>/g, '`$1`');
  s = s.replace(/<\/(p|div|ul)>/g, '\n');
  s = strip(s);
  s = decode(s);
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return s;
}
function strip(s){ return s.replace(/<[^>]+>/g, ''); }
function decode(s){
  return s.replace(/&times;/g,'×').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
          .replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
}

function cardMd(c){
  let o = `## ${c.term}${c.en ? ' — ' + c.en : ''}\n\n`;
  if (c.cat) o += `\`${c.cat}\`  `;
  if (c.tags && c.tags.length) o += c.tags.map(t=>`\`${t}\``).join(' ');
  o += '\n\n';
  if (c.oneLiner) o += `**한줄:** ${toMd(c.oneLiner)}\n\n`;
  for (const b of (c.blocks||[])) {
    o += `**${b.title}**\n\n${toMd(b.d)}\n\n`;
  }
  if (c.finalLiner) o += `> **시험 한줄정리:** ${toMd(c.finalLiner)}\n\n`;
  if (c.related && c.related.length) o += `_관련 개념: ${c.related.join(' · ')}_\n\n`;
  return o + '---\n\n';
}

/* ---------- 주제별 노트 생성 ---------- */
const today = new Date().toISOString().slice(0, 10);
let total = 0;
const rows = [];   // {title, file, count, terms[]}

fs.mkdirSync(path.join(ROOT, 'notes'), {recursive:true});
for (const t of TOPICS) {
  const cards = loadCards(t.file);
  if (!cards || !cards.length) continue;
  total += cards.length;
  let md = `# ${t.title}\n\n> 자동 생성 — 원본은 \`cards/${t.file}.js\`. 직접 수정 금지.\n\n`;
  md += cards.map(cardMd).join('');
  fs.writeFileSync(path.join(ROOT, 'notes', t.file + '.md'), md);
  rows.push({ title:t.title, file:t.file, count:cards.length, terms:cards.map(c=>c.term) });
}

/* ---------- 인덱스 생성 (README.md = index.md) ---------- */
const L = [];
L.push('# 정보보안기사 학습노트 — 인덱스');
L.push('');
L.push('> `cards/*.js`가 원본이고 `node build.js`로 이 폴더가 자동 생성됩니다. **이 폴더의 .md는 직접 수정하지 마세요.**');
L.push(`> 마지막 갱신 **${today}** · 총 **${total}장**`);
L.push('');
L.push('## 주제 목록');
L.push('');
L.push('| 주제 | 카드 수 | 파일 |');
L.push('|------|--------|------|');
rows.forEach(r => L.push(`| ${r.title} | ${r.count} | [${r.file}.md](${r.file}.md) |`));
L.push('');
L.push('## 전체 raw 주소 (다른 세션에 그대로 주면 읽힙니다)');
L.push('');
L.push('```');
rows.forEach(r => L.push(RAW_BASE + r.file + '.md'));
L.push('```');
L.push('');
L.push('## 오답 노트 (손으로 관리 — 자동 생성 아님)');
L.push('');
L.push('`review/wrong.md` — 인출 연습에서 **틀린 것만 누적**한 파일. 문제를 낼 때 **이걸 먼저 읽으면 약한 곳부터** 출제할 수 있습니다.');
L.push('');
L.push('```');
L.push(REPO_RAW + 'review/wrong.md');
L.push('```');
L.push('');
L.push('## 새 세션에서 문제 받는 법');
L.push('');
L.push('아래처럼 요청하세요. 주소만 위 목록에서 원하는 주제로 바꾸면 됩니다.');
L.push('');
L.push('```');
L.push('정보보안기사 필기 준비 중이야(시험 10/8). 아래 오답 노트를 먼저 읽고,');
L.push('거기서 약한 것 위주로 학습노트를 참고해 서술형 5문제만 내줘.');
L.push('보기는 주지 말고, 내가 답하면 채점하고 틀린 부분만 짚어줘.');
L.push(REPO_RAW + 'review/wrong.md');
L.push(RAW_BASE + 'dosattack.md');
L.push('```');
L.push('');
L.push('## 파일별 수록 개념');
L.push('');
rows.forEach(r => {
  L.push(`**${r.file}.md** (${r.count}장) — ${r.terms.join(' · ')}`);
  L.push('');
});

const index = L.join('\n');
fs.writeFileSync(path.join(ROOT, 'notes', 'README.md'), index);
fs.writeFileSync(path.join(ROOT, 'notes', 'index.md'), index);

console.log('notes 생성 완료:', total, '개 카드 · 인덱스 2종(README.md, index.md)');
