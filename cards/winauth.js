/* 윈도우 인증·로그온 — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "logon",
    "term": "윈도우 대화형 로그온 (winlogon·GINA)",
    "en": "winlogon / GINA / Credential Provider",
    "cat": "시스템 보안",
    "tags": [
      "winlogon",
      "SAS=Ctrl+Alt+Del",
      "GINA(구식)",
      "Credential Provider(신식)",
      "신뢰 경로"
    ],
    "oneLiner": "로그온 총괄=winlogon / 자격증명 수집 UI: 구식 GINA→신식 Credential Provider / Ctrl+Alt+Del=신뢰 경로",
    "blocks": [
      {
        "k": "def",
        "title": "핵심 — 처리 흐름",
        "d": "사용자 로그인은 다음 순서로 처리된다.<div class='evo'><div class='evo-step'><div class='es-name'>① Ctrl+Alt+Del</div><div class='es-note'><b>SAS</b> — 로그인 화면을 부르는 신뢰된 신호.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>② winlogon.exe</div><div class='es-note'>로그온 과정 <b>총괄</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>③ 자격증명 수집 UI</div><div class='es-note'><b>GINA</b> 또는 <b>Credential Provider</b>가 아이디·비번을 입력받음.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>④ lsass.exe (LSA)</div><div class='es-note'>받은 자격증명을 <b>실제 검증</b>(NTLM·Kerberos).</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>⑤ 액세스 토큰</div><div class='es-note'>검증 성공 시 사용자 토큰 <b>생성</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>⑥ SRM 판정</div><div class='es-note'>이후 모든 접근을 그 토큰으로 <b>최종 판정</b>.</div></div></div><p class='on-key'><span class='lbl'>포인트</span>'누가 <b>UI를 띄워 수집</b>하고(③ GINA/CP), 누가 <b>실제로 검증</b>하나(④ LSA)'를 구분하는 게 핵심.</p>"
      },
      {
        "k": "note",
        "title": "프로세스별 역할 (표로 정리)",
        "d": "<b>winlogon.exe</b>=로그온·로그오프 세션 <b>총괄</b>(항상 이 이름, 구·신 공통) · <b>SAS(Secure Attention Sequence)=Ctrl+Alt+Del</b>=로그인 화면 호출 신호 · <b>GINA/Credential Provider</b>=아이디·비번을 <b>입력받는 UI</b> · <b>lsass(LSA)</b>=받은 자격증명을 <b>실제 검증</b>·토큰 생성. UI(수집)와 LSA(검증)는 <b>다른 역할</b>."
      },
      {
        "k": "note",
        "title": "구식 vs 신식 (교체 — 시험 단골)",
        "d": "<div class='oldnew'><div class='on-item old'><span class='on-label'>구식 · GINA</span><div class='row'><b>GINA(Graphical Identification and Authentication)</b> — 파일 이름은 <code>msgina.dll</code>, 쓰이던 시기는 <b>Windows NT부터 XP·Server 2003까지</b>.</div><div class='row'>winlogon이 이 DLL을 불러와 로그인 화면(자격증명 입력 UI)을 띄운다. 그래서 스마트카드·지문 같은 다른 인증 방식을 넣으려면 이 <b>GINA DLL 자체를 통째로 바꿔야</b> 했다.</div><div class='row'><b>단점</b> — 로그인 UI 전체를 DLL 하나가 책임지는 구조라, <b>이 GINA 하나만 잘못돼도 로그온 과정 전체가 깨진다.</b> 또 여러 인증 수단을 동시에 쓰기 어렵고, 그만큼 보안·안정성이 취약했다.</div></div><div class='on-sep'>▼ Windows Vista에서 대체됨 ▼</div><div class='on-item new'><span class='on-label'>신식 · Credential Provider</span><div class='row'><b>Credential Provider(자격증명 공급자)</b> — 쓰이는 시기는 <b>Windows Vista 이후부터 현재까지</b>.</div><div class='row'><b>모듈형</b> 구조라, 비밀번호·PIN·지문·얼굴 인식 같은 인증 수단이 <b>각각 별도의 모듈</b>로 나뉘어 있고 <b>여러 개가 동시에 공존</b>한다. 그래서 하나에 문제가 생겨도 나머지 인증은 그대로 동작한다.</div><div class='row'><b>장점</b> — 구식보다 안전하고 유연하며, 새로운 인증 수단을 덧붙이기(확장하기)도 쉽다.</div></div></div><p class='on-key'><span class='lbl'>시험 포인트</span><b>'GINA는 Windows Vista에서 Credential Provider로 대체됐다.'</b> — 무엇이 무엇으로, 어느 버전에서 바뀌었는지가 그대로 출제된다.</p>"
      },
      {
        "k": "warn",
        "title": "Ctrl+Alt+Del을 왜? — 신뢰 경로(Trusted Path)",
        "d": "<b>SAS(Ctrl+Alt+Del)</b>는 <b>winlogon만</b> 가로챌 수 있는 특수 신호. 악성코드가 <b>가짜 로그인 화면</b>을 띄워 비번을 훔치는 <b>로그온 스푸핑</b>을 막아, '지금 이 화면은 진짜 OS'임을 보장하는 <b>신뢰 경로</b>. '로그인 시 Ctrl+Alt+Del을 누르는 이유는?'이 전형적 출제."
      }
    ],
    "finalLiner": "winlogon=로그온 총괄 / UI 수집: <b>구식 GINA→신식 Credential Provider(Vista~)</b> / 검증=lsass(LSA) / <b>Ctrl+Alt+Del(SAS)=신뢰 경로</b>(스푸핑 방지)",
    "related": [
      "winauth",
      "process",
      "srm"
    ]
  },
  {
    "id": "winauth",
    "term": "윈도우 인증 체계",
    "en": "SAM / LSA / LM·NTLM·Kerberos",
    "cat": "시스템 보안",
    "tags": [
      "SAM",
      "lsass=LSA",
      "LM→NTLM→Kerberos",
      "Pass-the-Hash"
    ],
    "oneLiner": "로컬=SAM에 해시 저장 / 처리=lsass(LSA) / 프로토콜 진화 LM→NTLM→Kerberos / 도메인=AD·Kerberos",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "윈도우가 사용자를 확인하는 체계. 자격증명을 처리하는 핵심 프로세스가 <code>lsass.exe</code>=<b>LSA(Local Security Authority, 로컬 보안 인증)</b>. '정상 프로세스' 카드의 lsass가 바로 이 인증 담당이라 자격증명 탈취 표적."
      },
      {
        "k": "note",
        "title": "로컬 vs 도메인 (저장 위치)",
        "d": "계정을 어디에 저장하고 무엇으로 인증하는지가 다르다.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>로컬 계정</span><div class='row'>비밀번호 해시를 그 PC의 <b>SAM(Security Account Manager, 보안 계정 관리자)</b> 파일에 저장.</div><div class='row'>경로: <code>C:\\Windows\\System32\\config\\SAM</code></div></div><div class='cmp-item'><span class='cmp-label'>도메인 계정</span><div class='row'><b>AD(Active Directory)</b>가 계정을 <b>중앙에서</b> 관리.</div><div class='row'>인증은 <b>Kerberos</b>로 처리.</div></div></div>"
      },
      {
        "k": "note",
        "title": "인증 프로토콜 진화 (세트 암기)",
        "d": "인증 프로토콜은 세대가 뒤로 갈수록 안전해진다.<div class='evo'><div class='evo-step'><div class='es-name'>LM</div><div class='es-note'>LAN Manager. <b>아주 취약</b>(대소문자 무시·짧은 해시). 구식.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>NTLM</div><div class='es-note'>NT LAN Manager. <b>챌린지-리스폰스</b> 방식.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>Kerberos</div><div class='es-note'>도메인 <b>표준</b>. 티켓 기반.</div></div></div><p class='on-key'><span class='lbl'>포인트</span>'세대(버전)로 안전성을 판단'하는 논리는 SMB 카드와 같다.</p>"
      },
      {
        "k": "warn",
        "title": "자격증명 탈취",
        "d": "<b>lsass 메모리</b>에서 해시·때론 평문을 추출(<b>mimikatz</b>), <b>SAM 덤프</b>. 해시만 있어도 <b>Pass-the-Hash</b>로 로그인 가능(NTLM 카드 참고). 관리자 해시가 PC마다 같으면 옆 PC로 번짐(관리 공유 카드의 측면이동)."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "<b>LM 해시 저장 비활성화</b>, 최신 프로토콜(Kerberos) 사용, <b>Credential Guard</b>로 lsass 격리, <b>LAPS(Local Administrator Password Solution)</b>로 로컬관리자 암호 분산. 강한 암호·다단계 인증."
      }
    ],
    "finalLiner": "로컬=<b>SAM</b>에 해시 / 처리=<b>lsass(LSA)</b> / 진화 <b>LM→NTLM→Kerberos</b> / 탈취=mimikatz·Pass-the-Hash",
    "related": [
      "process",
      "ntlm",
      "kerberos",
      "adminshares"
    ]
  },
  {
    "id": "ntlm",
    "term": "NTLM 인증",
    "en": "NT LAN Manager",
    "cat": "시스템 보안",
    "tags": [
      "챌린지-리스폰스",
      "NT 해시",
      "Pass-the-Hash",
      "NTLM Relay"
    ],
    "oneLiner": "윈도우 챌린지-리스폰스 인증 / 비번은 안 보냄 / 해시만 있으면 뚫리는 Pass-the-Hash 취약",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "<b>NTLM(NT LAN Manager)</b> = 윈도우 <b>챌린지-리스폰스(Challenge-Response)</b> 인증. 비밀번호를 네트워크로 <b>직접 보내지 않는</b> 게 핵심 발상. <b>NT=New Technology</b>(Windows NT 계열) — 구식 <b>LM(LAN Manager)</b>의 후속. NTFS의 'NT'와 같은 뿌리라 <b>NT 해시</b>도 같은 작명."
      },
      {
        "k": "note",
        "title": "동작 흐름",
        "d": "비밀번호를 보내지 않고 '해시를 안다는 증거'만 주고받는다.<div class='evo'><div class='evo-step'><div class='es-name'>① 챌린지</div><div class='es-note'>서버가 랜덤값 <b>챌린지(nonce)</b>를 보냄.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>② 리스폰스</div><div class='es-note'>클라이언트가 <b>NT 해시로 그 챌린지를 암호화한 응답</b>을 반환.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>③ 검증</div><div class='es-note'>서버가 같은 계산을 해서 응답이 맞는지 확인.</div></div></div>비밀번호·해시 <b>원본은 네트워크에 오가지 않는다.</b>"
      },
      {
        "k": "warn",
        "title": "취약점 — Pass-the-Hash",
        "d": "챌린지 응답을 <b>해시로 만들기 때문에, 평문 비번 없이 해시만 탈취해도 인증</b>이 됨 = <b>PtH(Pass-the-Hash)</b>. 또 인증을 가로채 다른 서버에 그대로 넘기는 <b>NTLM Relay</b>. <b>LM 해시</b>는 더 심각(약한 구조)."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "가능하면 <b>Kerberos로 전환</b>, NTLM(특히 <b>NTLMv1·LM</b>) 비활성화·제한, <b>SMB 서명</b>으로 릴레이 차단, <b>LAPS</b>로 해시 재사용 차단, Credential Guard."
      }
    ],
    "finalLiner": "NTLM = 챌린지-리스폰스(비번 안 보냄) / <b>해시=자격증명 → Pass-the-Hash</b> / 릴레이 취약 → Kerberos 권장",
    "related": [
      "winauth",
      "kerberos",
      "adminshares"
    ]
  },
  {
    "id": "kerberos",
    "term": "커버로스 인증",
    "en": "Kerberos",
    "cat": "시스템 보안",
    "tags": [
      "KDC",
      "TGT",
      "티켓",
      "SSO",
      "타임스탬프",
      "Golden Ticket"
    ],
    "oneLiner": "도메인(AD) 표준 인증 / KDC가 티켓 발급(TGT→서비스티켓) / 대칭키·타임스탬프 / SSO",
    "blocks": [
      {
        "k": "def",
        "title": "정의 (어원으로 기억)",
        "d": "도메인(AD) 기본 인증. 이름은 <b>그리스 신화의 머리 셋 달린 지옥문 개 '케르베로스'</b> — 인증에 <b>3 주체(클라이언트·서버·KDC)</b>가 얽힌 걸 상징. 비번을 네트워크로 안 보내고 <b>티켓</b>으로 신원 증명."
      },
      {
        "k": "note",
        "title": "구성 — KDC",
        "d": "핵심은 <b>KDC(Key Distribution Center, 키 배포 센터)</b>. 그 안에 <b>AS(Authentication Server, 인증 서버)</b> + <b>TGS(Ticket Granting Server, 티켓 발급 서버)</b>. 도메인에선 AD 도메인 컨트롤러가 KDC 역할."
      },
      {
        "k": "note",
        "title": "인증 흐름 (티켓 2단계 — 시험 단골)",
        "d": "티켓을 두 단계로 받아 서비스에 접속한다.<div class='evo'><div class='evo-step'><div class='es-name'>① 로그인</div><div class='es-note'><b>AS</b>가 <b>TGT</b>(Ticket Granting Ticket, 티켓 발급용 티켓)를 발급 = '신분증'.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>② 티켓 교환</div><div class='es-note'>그 TGT를 <b>TGS</b>에 제출해 <b>서비스 티켓(ST)</b>을 받음.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>③ 서비스 접속</div><div class='es-note'>서비스 티켓으로 실제 서버에 접속.</div></div></div><p class='on-key'><span class='lbl'>포인트</span>한 번 로그인으로 여러 서비스 이용 = <b>SSO(Single Sign-On)</b>. 'TGT → 서비스 티켓' 2단계가 시험 단골.</p>"
      },
      {
        "k": "note",
        "title": "특징",
        "d": "<b>대칭키</b> 기반 · <b>타임스탬프</b>로 <b>재전송(replay) 공격 방지</b> → 그래서 <b>시간 동기화가 필수</b>(기본 5분 오차 허용). 이 '타임스탬프=리플레이 방지' 포인트가 자주 출제."
      },
      {
        "k": "warn",
        "title": "공격",
        "d": "<b>Golden Ticket</b>: KDC의 <code>krbtgt</code> 계정 해시를 훔치면 <b>위조 TGT</b>를 무제한 발급 → 도메인 전체 장악. <b>Pass-the-Ticket</b>(티켓 탈취 재사용), <b>Kerberoasting</b>(서비스 티켓 오프라인 크래킹)."
      }
    ],
    "finalLiner": "Kerberos=도메인 표준(머리 셋 개=3주체) / <b>KDC(AS+TGS)</b>가 <b>TGT→서비스티켓</b> 발급 / 대칭키·타임스탬프(리플레이 방지)·SSO / 공격=Golden Ticket",
    "related": [
      "winauth",
      "ntlm"
    ]
  },
  {
    "id": "srm",
    "term": "보안 참조 모니터 (SRM) · 참조 모니터",
    "en": "Security Reference Monitor / Reference Monitor",
    "cat": "시스템 보안",
    "tags": [
      "참조 모니터 3요건",
      "액세스 토큰",
      "SID",
      "DACL",
      "보안 커널",
      "접근통제"
    ],
    "oneLiner": "모든 접근을 최종 판정하는 경비원 / 토큰(SID) vs 객체 ACL 비교 / 참조모니터 3요건(항상호출·변조불가·검증가능)",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "<b>SRM(Security Reference Monitor, 보안 참조 모니터)</b> = 윈도우 <b>커널 모드</b>에서 '이 주체가 이 객체에 접근해도 되나'를 <b>최종 판정</b>하는 문지기. 주체의 <b>액세스 토큰</b>과 객체의 <b>ACL</b>을 비교해 허용/거부하고 <b>감사(audit) 로그</b>를 남김."
      },
      {
        "k": "note",
        "title": "판정 재료 (윈도우)",
        "d": "SRM은 두 가지를 맞대어 접근을 판정한다.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>주체측 · 액세스 토큰</span><div class='row'>사용자 <b>SID(Security Identifier, 보안 식별자)</b> + 그룹 SID + 권한(privileges).</div></div><div class='cmp-item'><span class='cmp-label'>객체측 · ACL</span><div class='row'><b>DACL(Discretionary ACL, 임의 접근제어 목록)</b> — 누가 무엇을 할 수 있나.</div><div class='row'>감사(접근 기록)는 <b>SACL(System ACL)</b>이 담당.</div></div></div>로그인 때 <b>LSA</b>가 토큰을 만들고, 이후 <b>SRM</b>이 그 토큰과 객체의 ACL을 비교해 매 접근을 검사한다."
      },
      {
        "k": "note",
        "title": "원류 개념 — 참조 모니터 3요건 (시험 핵심·접근통제 PART4)",
        "d": "<b>참조 모니터(Reference Monitor)</b>는 주체와 객체 사이의 <b>모든 접근을 중재</b>하는 추상 개념이다. 갖춰야 할 3대 요건:<ul class='klist'><li>① <b>항상 호출</b> (완전성) — 어떤 접근도 <b>우회할 수 없다</b>(bypass 불가).</li><li>② <b>변조 불가·격리</b> (tamperproof / isolation) — 공격자가 <b>손댈 수 없게</b> 보호·분리된다.</li><li>③ <b>검증 가능</b> (verifiable) — 충분히 <b>작고 단순</b>해서 올바름을 검증할 수 있다.</li></ul>이 개념을 실제로 구현한 것이 <b>보안 커널(Security Kernel)</b>이고, 그 윈도우판이 바로 <b>SRM</b>이다."
      },
      {
        "k": "warn",
        "title": "공격 관점",
        "d": "판정의 근거가 <b>액세스 토큰</b>이므로, 토큰을 훔치거나 조작하면 권한 상승·우회 가능(<b>토큰 탈취/사칭, SID 위조</b>). 그래서 참조모니터의 '변조 불가·격리' 요건이 실무에서 중요."
      }
    ],
    "finalLiner": "SRM = 접근을 최종 판정하는 문지기(토큰 SID ↔ 객체 DACL) / 원류=<b>참조 모니터 3요건: 항상호출·변조불가·검증가능</b> / 구현=보안 커널",
    "related": [
      "winauth",
      "adminshares"
    ]
  },
  {
    "id": "process",
    "term": "정상 프로세스 판별",
    "en": "csrss / svchost / lsass ...",
    "cat": "시스템 보안",
    "tags": [
      "이름 위장",
      "System32 경로",
      "부모 프로세스"
    ],
    "oneLiner": "이름 암기 ❌ / '정상 이름+정상 경로'로 위장 악성 프로세스 판별 ⭕",
    "blocks": [
      {
        "k": "def",
        "title": "핵심",
        "d": "개별 이름을 달달 외우는 게 아니라, <b>정상 프로세스를 사칭하는 악성 프로세스를 골라내는 법</b>을 아는 것. 그래서 '진짜'가 뭔지 알아야 가짜가 보임."
      },
      {
        "k": "warn",
        "title": "판별 ① 이름 위장",
        "d": "한 글자만 비틀어 사칭: 정상 <code>svchost.exe</code> ↔ 악성 <code>scvhost.exe</code>(c·v 뒤바꿈), <code>csrss.exe</code> ↔ <code>csrsss.exe</code>. '다음 중 정상 프로세스는?' 함정 단골."
      },
      {
        "k": "warn",
        "title": "판별 ② 실행 경로 (이름보다 중요)",
        "d": "정상 시스템 프로세스는 <code>C:\\Windows\\System32\\</code>에서 실행. 이름이 같아도 경로가 <code>...\\Temp\\</code>·사용자 폴더면 거의 악성. 시스템 파일은 임시·사용자 폴더에서 안 돎."
      },
      {
        "k": "note",
        "title": "판별 ③ 부모 프로세스",
        "d": "정상 프로세스는 부모가 정해져 있음(예: svchost의 부모는 services.exe). 엉뚱한 부모면 의심. 1순위는 ①·②, 이건 여유 있을 때."
      },
      {
        "k": "note",
        "title": "자주 나오는 6개 (경로+역할만 눈에 익히기)",
        "d": "이름을 외우기보다 <b>경로와 역할</b>만 눈에 익혀 두면 된다.<ul class='klist'><li><code>csrss.exe</code> — 콘솔/스레드 관리.</li><li><code>smss.exe</code> — 세션 관리자(부팅 초반).</li><li><code>services.exe</code> — 서비스 제어.</li><li><code>svchost.exe</code> — 서비스 호스트(<b>여러 개가 떠 있는 게 정상</b>).</li><li><code>lsass.exe</code> — 인증·보안정책. <b>자격증명 탈취 표적</b>(예: 미미캐츠).</li><li><code>winlogon.exe</code> — 로그온 담당.</li></ul>"
      }
    ],
    "finalLiner": "이름 암기 ❌ / <b>정상 이름 + 정상 경로(System32)</b>로 위장 프로세스 판별 ⭕ — 시험은 '위장된 악성은?'을 물음",
    "related": []
  }
]
);
