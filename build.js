/* build.js — cards/*.js(단일 소스)에서 주제별 읽기용 notes/*.md 를 생성한다.
   사용법:  node build.js
   새 카드를 cards/<주제>.js 에 추가한 뒤 이 스크립트를 돌리면 노트가 갱신된다. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

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

let total = 0;
const indexLines = [
  '# 정보보안기사 학습노트',
  '',
  '> `cards/*.js`(원본 데이터)에서 `build.js`로 자동 생성됩니다. **이 폴더의 .md는 직접 수정하지 마세요.**',
  '',
  '| 주제 | 카드 수 | 파일 |',
  '|------|--------|------|',
];
fs.mkdirSync(path.join(ROOT, 'notes'), {recursive:true});
for (const t of TOPICS) {
  const cards = loadCards(t.file);
  if (!cards || !cards.length) continue;
  total += cards.length;
  let md = `# ${t.title}\n\n> 자동 생성 — 원본은 \`cards/${t.file}.js\`. 직접 수정 금지.\n\n`;
  md += cards.map(cardMd).join('');
  fs.writeFileSync(path.join(ROOT, 'notes', t.file + '.md'), md);
  indexLines.push(`| ${t.title} | ${cards.length} | [${t.file}.md](${t.file}.md) |`);
}
indexLines.push('', `**총 ${total}개 카드.**`, '');
fs.writeFileSync(path.join(ROOT, 'notes', 'README.md'), indexLines.join('\n'));
console.log('notes 생성 완료:', total, '개 카드');
