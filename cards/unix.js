/* 유닉스·리눅스 보안 기초 — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "linuxfeat",
    "term": "리눅스·유닉스 특징",
    "en": "OS Characteristics",
    "cat": "시스템 보안",
    "tags": ["다중 사용자", "다중 작업", "계층적 파일시스템", "이식성", "오픈소스"],
    "oneLiner": "다중 사용자·다중 작업·계층적 파일시스템·이식성·오픈소스 / 보안 관점=여러 사용자·프로세스가 공유하니 권한·접근통제·격리가 필수",
    "blocks": [
      {
        "k": "def",
        "title": "정의 (특징→보안으로 연결해 기억)",
        "d": "유닉스 계열 OS의 기본 특징들. 시험엔 '특징이 <b>아닌</b> 것?' 정도로 가볍게 나오지만, 진짜 핵심은 <b>이 특징들이 왜 보안을 필요하게 만드는지</b>다. 아래처럼 특징마다 '그래서 무엇이 필요한가'로 엮어 외운다."
      },
      {
        "k": "note",
        "title": "핵심 특징 + 보안 연결",
        "d": "<ul class='klist'><li><b>다중 사용자(Multi-user)</b> — 여러 사용자가 한 시스템을 공유 → 그래서 <b>UID/GID·파일 소유권·접근통제(rwx)</b>가 필수. <b>리눅스 보안의 출발점.</b></li><li><b>다중 작업(Multi-tasking)</b> — 여러 프로세스 동시 실행 → <b>프로세스 격리·자원 통제</b> 필요.</li><li><b>계층적(트리) 파일시스템</b> — 최상위 <code>/</code>(루트)부터 아래로 가지치기. 하나의 트리.</li><li><b>이식성(Portability)</b> — 대부분 <b>C 언어</b>로 작성 → 다양한 하드웨어로 옮기기 쉬움.</li><li><b>오픈소스·공개</b> — 소스가 공개 → 다수가 검증(장점)이자 <b>취약점도 공개</b>되는 양날의 검.</li><li><b>셸(Shell)</b> — 명령 해석기 + 스크립트로 자동화.</li></ul>"
      },
      {
        "k": "safe",
        "title": "왜 시험에서 중요한가",
        "d": "<b>다중 사용자·다중 작업</b>이라서, 한 사용자·한 프로세스의 침해가 <b>시스템 전체로 번질 수 있다</b>. 그래서 <b>최소 권한·격리·접근통제</b>가 리눅스 보안의 뼈대이며, 뒤에 배울 <b>파일 권한(rwx)·SetUID·PAM·로그</b>가 전부 이 특징에서 파생된다."
      }
    ],
    "finalLiner": "리눅스 특징 = <b>다중 사용자·다중 작업</b>·계층적 파일시스템·이식성(C)·오픈소스 / 보안 관점: 여러 사용자·프로세스가 <b>공유</b> → 권한·접근통제·격리가 필수(그래서 UID/GID·rwx가 존재)",
    "related": ["uidgid", "symlink"]
  },
  {
    "id": "linuxarch",
    "term": "리눅스 구조 (커널·셸·파일시스템)",
    "en": "Kernel · Shell · File System",
    "cat": "시스템 보안",
    "tags": ["커널=자원관리 핵심", "셸=명령 해석기", "사용자→셸→커널→HW", "시스템 콜", "파일시스템=/ 트리"],
    "oneLiner": "안쪽부터 하드웨어→커널(자원관리 핵심)→셸(명령 해석기)→사용자 / 커널이 핵심, 셸은 사용자와 커널을 잇는 다리",
    "blocks": [
      {
        "k": "def",
        "title": "계층 구조 (양파처럼)",
        "d": "리눅스는 안쪽부터 <b>하드웨어 → 커널 → 셸 → 사용자·응용</b>의 계층 구조. 안으로 갈수록 핵심·강력하고, 바깥일수록 사용자와 가깝다."
      },
      {
        "k": "note",
        "title": "각 층의 역할 (어원으로 기억)",
        "d": "<ul class='klist'><li><b>커널(Kernel, 알맹이·핵)</b> — OS의 <b>핵심</b>. 프로세스·메모리·파일시스템·장치(하드웨어)·네트워크를 <b>직접 관리</b>. 부팅 시 메모리에 올라와 상주.</li><li><b>셸(Shell, 껍데기)</b> — 사용자 명령을 받아 <b>해석해 커널에 전달</b>하는 <b>명령 해석기</b>. 커널을 감싼 껍데기라 이 이름. 스크립트로 자동화.</li><li><b>파일시스템(File System)</b> — 데이터를 <b>계층적 트리</b>로 관리. 최상위 <code>/</code>(루트) 하나에서 시작하며, <b>모든 것을 '파일'로 취급</b>(장치도 파일).</li></ul>"
      },
      {
        "k": "warn",
        "title": "함정 · 보안 연결",
        "d": "사용자 프로그램은 하드웨어에 직접 못 대고 <b>시스템 콜</b>로만 커널에 요청한다. 셸은 사용자↔커널의 <b>다리</b>라, 셸 접근·셸 스크립트가 곧 <b>공격 표면</b>(웹셸·셸쇼크 등).<p class='on-key'><span class='lbl'>시험 함정</span>'<b>커널</b>=명령 해석기'(X, 그건 셸) · '<b>셸</b>=자원 관리'(X, 그건 커널)처럼 <b>둘의 역할을 뒤바꿔</b> 낸다.</p>"
      }
    ],
    "finalLiner": "안쪽→바깥: 하드웨어→<b>커널</b>(자원관리 핵심)→<b>셸</b>(명령 해석기=커널의 껍데기)→사용자 / 파일시스템=<code>/</code>부터 트리, 모든 게 파일 / 함정: 커널↔셸 역할 바꿔치기",
    "related": ["linuxfeat", "shelltypes", "process"]
  },
  {
    "id": "shelltypes",
    "term": "셸 종류 (bash·sh·csh·ksh)",
    "en": "Shell Types",
    "cat": "시스템 보안",
    "tags": ["sh=본셸(원조)", "bash=리눅스 기본", "csh=C 문법", "ksh=콘셸", "로그인 셸=/etc/passwd"],
    "oneLiner": "sh(본셸 원조)→bash(리눅스 표준)·csh(C 문법)·ksh(콘셸)·zsh / 사용자 로그인 셸은 /etc/passwd 마지막 필드",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "<b>셸(Shell)</b>은 사용자가 입력한 명령을 <b>해석해 커널에 전달</b>하고 그 결과를 돌려주는 <b>명령어 해석기(command interpreter)</b>다. 사용자와 운영체제(커널) 사이의 <b>대화 창구</b> — 프롬프트에 <code>ls</code>를 치면 셸이 해석 → 커널이 실행 → 결과를 화면에 표시. 명령을 모아 <b>셸 스크립트</b>로 자동화도 한다.<p class='on-key'><span class='lbl'>왜 종류가 여럿?</span>이 명령 해석기가 여러 개 만들어졌고 문법·기능이 조금씩 다르다. 시험엔 <b>약자 풀네임</b>과 '리눅스 기본 셸이 무엇인가'가 잘 나온다.</p>"
      },
      {
        "k": "note",
        "title": "종류 (풀네임=곧 유래)",
        "d": "<ul class='klist'><li><b>sh</b> = <b>Bourne Shell</b>(본 셸) — 스티브 본이 만든 <b>최초의 표준</b> 유닉스 셸. 다른 셸의 뿌리.</li><li><b>bash</b> = <b>Bourne Again SHell</b> — sh를 확장·개선. <b>리눅스의 기본 셸</b>, 가장 널리 쓰임.</li><li><b>csh</b> = <b>C Shell</b> — <b>C 언어 문법</b> 스타일. 빌 조이 작.</li><li><b>ksh</b> = <b>Korn Shell</b>(콘 셸) — sh 호환 + csh 기능. 데이비드 콘 작.</li><li><b>tcsh</b>(csh 개선), <b>zsh</b>(강력한 기능, 요즘 macOS 기본).</li></ul>"
      },
      {
        "k": "note",
        "title": "확인·설정 (실무/시험)",
        "d": "현재 셸 확인 <code>echo $SHELL</code> · 사용 가능한 셸 목록 <code>/etc/shells</code> · 사용자별 <b>로그인 셸</b>은 <code>/etc/passwd</code>의 <b>마지막 필드</b>(예: <code>/bin/bash</code>)."
      },
      {
        "k": "safe",
        "title": "보안 포인트",
        "d": "로그인이 필요 없는 <b>서비스·시스템 계정</b>은 로그인 셸을 <code>/sbin/nologin</code>이나 <code>/bin/false</code>로 지정해 <b>셸 접근을 차단</b>한다(계정 잠금·공격 표면 축소)."
      }
    ],
    "finalLiner": "sh=원조 본셸 / <b>bash=리눅스 기본</b>(Bourne Again SHell) / csh=C 문법 / ksh=콘셸(sh+csh) / 로그인 셸=<code>/etc/passwd</code> 마지막 필드, 차단은 <code>nologin</code>",
    "related": ["linuxarch", "uidgid"]
  },
  {
    "id": "bashfiles",
    "term": "bash 환경 설정 파일",
    "en": ".bash_profile · .bashrc · .bash_logout",
    "cat": "시스템 보안",
    "tags": ["로그인 시 .bash_profile", "셸마다 .bashrc", "로그아웃 .bash_logout", "전역 /etc/profile", "자동실행=지속성 표적"],
    "oneLiner": ".bash_profile=로그인 시 1회 / .bashrc=셸 열 때마다 / .bash_logout=로그아웃 시 / 자동 실행이라 백도어 지속성 표적",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "사용자 홈 디렉터리(<code>~</code>)에 있는 <b>숨김 파일</b>(이름이 <code>.</code>으로 시작=닷파일). 셸이 <b>시작·종료할 때 자동으로 읽어</b> 환경(변수·alias·함수)을 설정한다."
      },
      {
        "k": "note",
        "title": "언제 실행되나 (핵심)",
        "d": "<ul class='klist'><li><code>~/.bash_profile</code> — <b>로그인 시 1회</b> 실행(login shell). 환경변수·<code>PATH</code> 설정. (없으면 <code>.bash_login</code>→<code>.profile</code> 순으로 대체)</li><li><code>~/.bashrc</code> — <b>셸을 열 때마다</b> 실행(새 터미널·서브셸 등 비로그인 인터랙티브). alias·함수·프롬프트. 보통 <code>.bash_profile</code>이 <code>.bashrc</code>를 불러 준다.</li><li><code>~/.bash_logout</code> — <b>로그아웃 시</b> 실행. 정리 작업(임시파일 삭제·<code>clear</code> 등).</li><li>전역: <code>/etc/profile</code>(시스템 전체 로그인), <code>/etc/bashrc</code>(전체 셸).</li></ul>"
      },
      {
        "k": "note",
        "title": "시험 함정 — 로그인 vs 비로그인",
        "d": "<b>로그인 셸</b>이 읽는 건 <code>.bash_profile</code>, <b>인터랙티브 비로그인 셸</b>(터미널 새 창 등)이 읽는 건 <code>.bashrc</code>. 이 둘을 뒤바꿔 내는 문제가 많다."
      },
      {
        "k": "warn",
        "title": "보안 — 지속성(persistence) 표적",
        "d": "로그인·셸 시작 때 <b>자동 실행</b>되므로, 공격자가 <code>.bashrc</code>·<code>.bash_profile</code>에 악성 명령을 심으면 <b>재접속·셸 실행 때마다 다시 실행</b>된다(백도어 <b>지속성</b> 확보). 그래서 이 파일들의 <b>무결성·이상 항목</b>이 점검 대상이다."
      }
    ],
    "finalLiner": "<code>.bash_profile</code>=<b>로그인 1회</b> / <code>.bashrc</code>=<b>셸 열 때마다</b> / <code>.bash_logout</code>=<b>로그아웃 시</b> / 전역=<code>/etc/profile</code> / 자동실행이라 백도어 <b>지속성</b> 표적",
    "related": ["shelltypes", "uidgid"]
  },
  {
    "id": "shellenv",
    "term": "셸 환경 변수",
    "en": "Shell Environment Variables",
    "cat": "시스템 보안",
    "tags": ["환경변수 vs 셸변수", "PATH·HOME·SHELL", "export로 승격", "env·printenv·set", "PATH 조작 공격"],
    "oneLiner": "셸·프로그램이 참조하는 설정값 / 환경변수=자식 프로세스로 상속(export) vs 셸변수=현재 셸만 / PATH 조작은 권한상승 공격",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "셸과 프로그램이 동작에 참조하는 <b>이름=값</b> 형태의 설정값. <code>$이름</code>으로 참조한다(예: <code>echo $HOME</code>). 로그인·셸 시작 시 <code>.bash_profile</code>·<code>.bashrc</code>에서 설정된다."
      },
      {
        "k": "note",
        "title": "환경 변수 vs 셸 변수 (핵심 구분)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>셸 변수 (지역)</span><div class='row'><code>이름=값</code>으로 지정. <b>현재 셸에서만</b> 유효, <b>자식 프로세스엔 상속 안 됨.</b></div></div><div class='cmp-item'><span class='cmp-label'>환경 변수 (전역)</span><div class='row'><code>export 이름</code>으로 <b>승격</b>하면 <b>자식 프로세스에도 상속</b>. 시스템 전반 동작에 영향.</div></div></div>"
      },
      {
        "k": "note",
        "title": "주요 변수 · 조회 명령",
        "d": "<ul class='klist'><li><b>PATH</b> — 실행 파일을 찾는 <b>검색 경로</b> 목록</li><li><b>HOME</b> 홈 디렉터리 · <b>SHELL</b> 로그인 셸 · <b>USER/LOGNAME</b> 사용자명 · <b>PWD</b> 현재 경로 · <b>LANG</b> 언어 · <b>PS1</b> 프롬프트 모양</li></ul>조회: <code>env</code>·<code>printenv</code>(환경변수 목록) · <code>set</code>(셸변수+환경변수) · <code>echo $PATH</code>(값) · <code>export</code>(승격) · <code>unset</code>(삭제)."
      },
      {
        "k": "warn",
        "title": "보안 — PATH 조작 공격",
        "d": "<b>PATH</b>에 현재 디렉터리(<code>.</code>)나 쓰기 가능한 경로가 <b>앞쪽</b>에 있으면, 공격자가 정상 명령 이름(예: <code>ls</code>)의 <b>악성 파일</b>을 심어 그게 대신 실행되게 만든다. <b>SetUID 프로그램</b>과 결합하면 <b>권한 상승</b>.<p class='on-key'><span class='lbl'>방어</span>PATH에 <code>.</code>을 넣지 말고, 중요한 명령은 <b>절대 경로</b>로 실행. (로더 변수 <code>LD_PRELOAD</code>·<code>LD_LIBRARY_PATH</code> 조작으로 악성 라이브러리를 주입하는 공격도 같은 맥락)</p>"
      }
    ],
    "finalLiner": "<b>환경변수</b>(<code>export</code>→자식 상속) vs <b>셸변수</b>(현재 셸만) / 주요=<code>PATH·HOME·SHELL</code> / 조회 <code>env·printenv·set</code> / <b>PATH에 <code>.</code> 넣으면 권한상승 공격</b>(절대경로·<code>.</code> 제거로 방어)",
    "related": ["bashfiles", "shelltypes", "uidgid"]
  },
  {
    "id": "symlink",
    "term": "심볼릭 링크 · 하드 링크",
    "en": "Symbolic / Hard Link",
    "cat": "시스템 보안",
    "tags": ["바로가기=경로", "ln -s", "inode", "하드=같은 실데이터", "심링크 공격(TOCTOU)"],
    "oneLiner": "심볼릭 링크=경로를 가리키는 바로가기 파일(원본 삭제 시 깨짐) / 하드 링크=같은 inode(실데이터) 별칭 / 심링크는 TOCTOU 공격 도구",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "하나의 파일을 다른 이름으로 가리키게 하는 <b>링크</b>에는 두 종류가 있다. 보안에서는 <b>심볼릭 링크</b>가 자주 문제된다(경쟁 조건 공격의 도구)."
      },
      {
        "k": "note",
        "title": "심볼릭 vs 하드 (구분해서 암기)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>심볼릭 링크 (소프트 링크)</span><div class='row'><b>다른 파일의 경로(path)를 적어 둔 별도의 작은 파일</b> = 윈도우 '바로가기'. <code>ln -s 원본 링크</code>로 생성. 원본이 지워지면 <b>깨진 링크(dangling)</b>가 됨. 다른 디스크·디렉터리도 가리킬 수 있다.</div></div><div class='cmp-item'><span class='cmp-label'>하드 링크</span><div class='row'><b>같은 <code>inode</code>(실제 데이터)를 가리키는 또 다른 이름</b>. 원본을 지워도 데이터는 남는다(연결 수가 0이 될 때 실제 삭제). <b>같은 파일시스템 안</b>에서만 가능.</div></div></div><p class='on-key'><span class='lbl'>inode란</span>파일의 <b>메타데이터·데이터 위치</b>를 담은 관리 구조. 파일 '이름'(디렉터리 항목)과 '실체(inode)'는 별개 — 하드 링크는 여러 이름이 한 inode를 공유하는 것.</p>"
      },
      {
        "k": "warn",
        "title": "보안 — 심볼릭 링크 공격",
        "d": "<b>경쟁 조건(TOCTOU)</b>에서, 권한 있는 프로그램이 파일을 <b>검사한 뒤 사용하기 직전</b>에 공격자가 그 파일을 <b>심볼릭 링크로 바꿔치기</b>해 엉뚱한 파일(예: <code>/etc/passwd</code>)을 가리키게 만든다 → 권한 상승·파일 훼손. (경쟁 조건 카드와 연결)"
      }
    ],
    "finalLiner": "심볼릭 링크=경로를 가리키는 바로가기(<code>ln -s</code>, 원본 삭제 시 깨짐) / 하드 링크=같은 <code>inode</code> 별칭(같은 FS) / 심링크는 <b>TOCTOU 바꿔치기</b> 공격 도구",
    "related": ["race", "uidgid"]
  },
  {
    "id": "uidgid",
    "term": "UID · GID (사용자·그룹 식별)",
    "en": "User ID / Group ID · RUID/EUID",
    "cat": "시스템 보안",
    "tags": ["root=UID 0", "RUID(실제)·EUID(유효)", "/etc/passwd", "SetUID로 EUID 변경", "권한 판정"],
    "oneLiner": "유닉스는 사용자=UID·그룹=GID 숫자로 식별(root=0) / 권한 판정은 EUID(유효)로 / SetUID 실행 시 EUID가 소유자로 바뀜",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "유닉스·리눅스는 사용자를 이름이 아니라 <b>숫자 ID</b>로 관리한다. <b>UID(User ID)</b>=사용자 번호, <b>GID(Group ID)</b>=그룹 번호. <b>root=UID 0</b>(슈퍼유저). 계정 정보는 <code>/etc/passwd</code>, 그룹은 <code>/etc/group</code>, 비밀번호 해시는 <code>/etc/shadow</code>."
      },
      {
        "k": "note",
        "title": "RUID vs EUID (시험 핵심)",
        "d": "한 프로세스는 여러 UID를 가진다.<p class='on-key'><span class='lbl'>구분</span><b>RUID(Real UID, 실제)</b>=이 프로세스를 <b>실제로 실행한 사용자</b>('나 누구냐'). <b>EUID(Effective UID, 유효)</b>=<b>지금 권한 판정에 실제로 쓰이는</b> UID('지금 뭘 할 수 있냐'). 평소엔 둘이 같지만, <b>SetUID</b> 프로그램을 실행하면 <b>EUID가 파일 소유자(주로 root)로 바뀐다</b> → 일반 사용자가 잠깐 root 권한. (Saved UID도 있음)</p>"
      },
      {
        "k": "note",
        "title": "SetUID/SetGID와의 연결",
        "d": "<b>SetUID(Set User ID)</b> 비트가 붙은 실행 파일은 실행되는 동안 <b>EUID = 파일 소유자</b>가 된다. 예: <code>passwd</code>는 일반 사용자가 실행해도 <code>/etc/shadow</code>를 고쳐야 하므로 <b>root 소유 SetUID</b>로 설정돼 있다. 이 '잠깐 올라간 권한'이 <b>권한 상승·경쟁 조건</b>의 무대다."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "<b>SetUID 프로그램을 최소화</b>(공격 표면 축소)하고, 권한이 필요한 작업이 끝나면 <b>EUID를 원래대로 낮춘다(drop privileges)</b>. 불필요한 SetUID 비트 제거, 권한은 <b>최소 권한 원칙</b>으로."
      }
    ],
    "finalLiner": "유닉스는 사용자=<b>UID</b>·그룹=<b>GID</b> 숫자로 식별(root=0) / 권한 판정은 <b>EUID(유효)</b> / <b>SetUID 실행 → EUID=소유자</b>(잠깐 root) → 권한 상승·경쟁조건의 무대",
    "related": ["race", "symlink"]
  }
]
);
