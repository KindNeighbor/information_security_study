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
    "id": "linuxfs",
    "term": "리눅스 파일시스템 구조",
    "en": "Linux File System (FHS)",
    "cat": "시스템 보안",
    "tags": ["/ 루트부터 트리", "FHS 표준", "/etc·/var·/tmp·/bin", "파일 종류(ls -l 첫 문자)", "ext4·저널링"],
    "oneLiner": "최상위 /(루트)부터 하나의 트리(FHS) / 드라이브 문자 없이 마운트 / 주요 디렉터리 용도(/etc 설정·/var 로그·/tmp 임시) / 모든 게 파일",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "리눅스는 최상위 <code>/</code>(루트) 하나에서 시작하는 <b>계층적 트리</b>다. 표준 배치를 <b>FHS(Filesystem Hierarchy Standard)</b>라 한다. 윈도우의 <code>C:</code>·<code>D:</code> 같은 <b>드라이브 문자가 없고</b>, 디스크·장치는 트리의 한 지점에 <b>마운트</b>해 붙인다."
      },
      {
        "k": "note",
        "title": "주요 디렉터리 (보안 핵심 굵게)",
        "d": "<ul class='klist'><li><code>/bin</code>·<code>/sbin</code> — 필수 명령(바이너리), <code>sbin</code>=관리자용</li><li><b><code>/etc</code></b> — <b>환경설정 파일</b>(<code>passwd</code>·<code>shadow</code>·<code>fstab</code> 등). 보안의 핵심</li><li><code>/home</code> 일반 사용자 홈 · <code>/root</code> root의 홈</li><li><b><code>/var</code></b> 가변 데이터, 특히 <b><code>/var/log</code>(로그)</b></li><li><b><code>/tmp</code></b> 임시파일, <b>누구나 쓰기 가능</b>(스티키 비트) → 경쟁조건·심링크 공격 표적</li><li><code>/dev</code> 장치파일 · <code>/proc</code> 프로세스·커널 정보(가상) · <code>/usr</code> 응용 · <code>/boot</code> 부팅 커널 · <code>/lib</code> 라이브러리</li></ul>"
      },
      {
        "k": "note",
        "title": "파일 종류 (ls -l 첫 문자)",
        "d": "리눅스는 <b>모든 것을 파일로</b> 취급한다. <code>ls -l</code> 맨 앞 한 글자로 구분: <code>-</code> 일반파일 · <code>d</code> 디렉터리 · <code>l</code> 심볼릭 링크 · <code>b</code> 블록장치 · <code>c</code> 문자장치 · <code>p</code> 파이프 · <code>s</code> 소켓."
      },
      {
        "k": "note",
        "title": "파일시스템 종류",
        "d": "<b>ext2 → ext3 → ext4</b>(리눅스 표준), <code>xfs</code> 등. <b>ext3부터 저널링(journaling)</b>: 변경 내용을 먼저 기록해 <b>비정상 종료 시 빠른 복구·무결성</b>을 보장."
      },
      {
        "k": "safe",
        "title": "보안 포인트",
        "d": "<code>/etc</code>(설정)·<code>/var/log</code>(로그)·<code>/tmp</code>(공용 쓰기)가 보안 관점의 급소. 로그 <b>위·변조 방지</b>, <code>/tmp</code> <b>스티키 비트</b> 유지, 중요 영역은 별도 파티션으로 <b>분리 마운트</b>(<code>noexec</code>·<code>nosuid</code> 옵션)."
      }
    ],
    "finalLiner": "리눅스 FS = <code>/</code>부터 하나의 트리(<b>FHS</b>), 드라이브 문자 없이 <b>마운트</b> / 급소 디렉터리 <code>/etc</code>설정·<code>/var/log</code>로그·<code>/tmp</code>공용쓰기 / 파일종류 <code>ls -l</code> 첫 문자(<code>d</code>·<code>l</code>·<code>-</code>) / <b>ext4·저널링</b>",
    "related": ["linuxarch", "symlink", "race"]
  },
  {
    "id": "fsinternal",
    "term": "파일시스템 내부 구조 (부트·슈퍼·아이노드·데이터)",
    "en": "Boot / Super / Inode / Data Block",
    "cat": "시스템 보안",
    "tags": ["부트 블록", "슈퍼 블록", "아이노드 블록", "데이터 블록", "이름은 디렉터리에"],
    "oneLiner": "유닉스 FS = 부트+슈퍼+아이노드+데이터 블록 / 아이노드=파일 메타데이터(이름은 없음, 디렉터리가 이름↔아이노드 매핑)",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "하나의 유닉스 파일시스템(파티션)은 <b>4가지 블록 영역</b>으로 구성된다. 순서: <b>부트 → 슈퍼 → 아이노드 리스트 → 데이터</b>."
      },
      {
        "k": "note",
        "title": "4개 블록 (역할)",
        "d": "<ul class='klist'><li><b>부트 블록(Boot Block)</b> — 파일시스템 맨 앞. <b>부팅에 필요한 부트스트랩 코드</b> 영역.</li><li><b>슈퍼 블록(Super Block)</b> — <b>파일시스템 전체 정보</b>(크기, 총 블록·아이노드 수, 빈 블록·아이노드 목록, 마운트 상태). <b>손상되면 치명적</b>이라 백업본을 둔다.</li><li><b>아이노드 블록/리스트(Inode List)</b> — 파일마다 하나씩 <b>아이노드(inode)</b>. 파일의 <b>메타데이터</b>를 담는다.</li><li><b>데이터 블록(Data Block)</b> — <b>실제 파일 내용</b> 저장.</li></ul>"
      },
      {
        "k": "warn",
        "title": "아이노드 — 핵심 함정",
        "d": "아이노드는 파일의 <b>주민등록</b> 같은 것. 담기는 것: 파일 <b>종류·권한(rwx)·소유자(UID/GID)·크기·시간(atime·mtime·ctime)·링크 수·데이터 블록 위치 포인터</b>.<p class='on-key'><span class='lbl'>담기지 않는 것 = 파일 이름</span><b>이름↔아이노드 번호 매핑은 '디렉터리'</b>가 갖는다(디렉터리 = 이름·아이노드번호 목록). 그래서 <b>하드 링크</b>는 이름 여러 개가 한 아이노드를 공유하는 것. '아이노드에 파일 이름이 있다'는 <b>틀린 보기</b>로 자주 나온다.</p>"
      },
      {
        "k": "safe",
        "title": "보안·복구 포인트",
        "d": "슈퍼 블록·아이노드 손상은 파일시스템 붕괴로 이어져 <code>fsck</code>(File System Check)로 검사·복구한다. 파일을 삭제해도 아이노드·데이터 블록이 <b>즉시 덮이지 않아</b> 포렌식으로 <b>복구가 가능</b>한 경우가 있다(디스크 완전 삭제 필요)."
      }
    ],
    "finalLiner": "유닉스 FS 4영역 = <b>부트</b>(부팅코드)·<b>슈퍼</b>(FS 전체정보)·<b>아이노드</b>(파일 메타데이터, <b>이름 없음</b>)·<b>데이터</b>(실제 내용) / 이름↔아이노드는 <b>디렉터리</b>가 매핑 / 손상 복구=<code>fsck</code>",
    "related": ["linuxfs", "symlink", "uidgid"]
  },
  {
    "id": "partition",
    "term": "디스크 파티션",
    "en": "Disk Partition",
    "cat": "시스템 보안",
    "tags": ["물리 디스크 논리 분할", "마운트·/etc/fstab", "swap=가상메모리", "MBR vs GPT", "/dev/sda1"],
    "oneLiner": "하나의 물리 디스크를 논리 영역으로 분할 / 마운트로 트리에 연결(/etc/fstab) / 중요 영역 분리로 보안·장애 격리",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "하나의 물리 디스크를 <b>여러 논리 영역으로 나눈 것</b>. 각 파티션에 파일시스템을 만들어 <b>마운트</b>해 쓴다. 장치명은 <code>/dev/sda</code>(첫 디스크)·<code>/dev/sda1</code>(그 첫 파티션), <code>sdb</code>…"
      },
      {
        "k": "note",
        "title": "왜 나누나 (보안·관리)",
        "d": "<ul class='klist'><li><b>장애 격리</b> — <code>/var</code>(로그) 폭주·<code>/home</code> 과다 사용이 나도 <b>루트(<code>/</code>) 시스템은 보호</b>.</li><li><b>보안 강화</b> — 분리 파티션에 <b><code>nosuid</code>·<code>noexec</code>·<code>nodev</code></b> 마운트 옵션 → SetUID·실행 차단.</li><li><b>백업·복구</b>가 쉽고 손상 범위가 좁아진다.</li></ul>"
      },
      {
        "k": "note",
        "title": "주요 파티션 · swap",
        "d": "<code>/</code>(루트, 필수) · <code>/boot</code>(부팅 커널) · <code>/home</code> · <code>/var</code> · <code>/tmp</code> · <b><code>swap</code>(스왑)</b>=<b>가상 메모리</b>(물리 메모리가 부족할 때 디스크를 메모리처럼 사용)."
      },
      {
        "k": "note",
        "title": "파티션 테이블 — MBR vs GPT",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>MBR (구방식)</span><div class='row'>디스크 첫 섹터에 부트코드+파티션 테이블. 최대 <b>2TB</b>, <b>주 파티션 4개</b> 제한.</div></div><div class='cmp-item'><span class='cmp-label'>GPT (신방식)</span><div class='row'><b>대용량·많은 파티션</b> 지원, <b>UEFI</b>와 함께 사용. 요즘 표준.</div></div></div>"
      },
      {
        "k": "note",
        "title": "마운트 · /etc/fstab",
        "d": "파티션을 디렉터리에 연결하는 것이 <b>마운트</b>(<code>mount</code> 명령). 부팅 시 <b>자동 마운트</b> 설정은 <code>/etc/fstab</code>에 적는다(마운트 옵션도 여기서)."
      }
    ],
    "finalLiner": "파티션 = 물리 디스크를 <b>논리 분할</b>(<code>/dev/sda1</code>) / <b>마운트</b>로 트리에 연결(<code>/etc/fstab</code>) / <b>swap</b>=가상메모리 / <b>MBR</b>(2TB·4개) vs <b>GPT</b>(대용량) / 중요영역 분리+<code>nosuid·noexec</code>로 보안",
    "related": ["linuxfs", "fsinternal"]
  },
  {
    "id": "fsadmin",
    "term": "파일시스템 관리 (생성·검사·마운트)",
    "en": "mkfs · fsck · mount",
    "cat": "시스템 보안",
    "tags": ["mkfs=생성(포맷)", "fsck=무결성 검사·복구", "mount/umount", "언마운트 후 fsck", "/etc/fstab 자동"],
    "oneLiner": "파티션 생애주기: mkfs로 생성(포맷) → mount로 연결 → fsck로 검사·복구 / fsck는 마운트 해제 후 실행",
    "blocks": [
      {
        "k": "def",
        "title": "흐름으로 기억",
        "d": "파티션을 나눈 뒤 <b>①파일시스템 생성(<code>mkfs</code>) → ②마운트(<code>mount</code>)해서 사용 → ③문제 생기면 검사·복구(<code>fsck</code>)</b>. 세 명령이 한 세트다."
      },
      {
        "k": "note",
        "title": "① 생성 — mkfs",
        "d": "<b><code>mkfs</code>(Make File System)</b> — 파티션에 파일시스템을 <b>만든다(포맷)</b>. 이때 <b>슈퍼 블록·아이노드 리스트·데이터 블록</b> 구조가 잡힌다. 예: <code>mkfs -t ext4 /dev/sdb1</code> 또는 <code>mkfs.ext4 /dev/sdb1</code>.<br><b>주의:</b> 기존 데이터가 <b>지워진다</b>."
      },
      {
        "k": "note",
        "title": "② 마운트 — mount · umount",
        "d": "<b><code>mount</code></b>로 파일시스템을 디렉터리(마운트 포인트)에 <b>연결</b>, <b><code>umount</code></b>로 해제. 예: <code>mount /dev/sdb1 /data</code>. 부팅 시 <b>자동 마운트</b>는 <code>/etc/fstab</code>에 등록.<p class='on-key'><span class='lbl'>보안 옵션</span><code>nosuid</code>(SetUID 무시)·<code>noexec</code>(실행 금지)·<code>nodev</code>(장치파일 무시)·<code>ro</code>(읽기 전용) — <code>/tmp</code>·<code>/home</code> 등에 적용해 공격 표면을 줄인다.</p>"
      },
      {
        "k": "warn",
        "title": "③ 무결성 검사 — fsck (함정 주의)",
        "d": "<b><code>fsck</code>(File System Check)</b> — 슈퍼 블록·아이노드·연결 상태 등 <b>파일시스템 구조의 이상을 검사·복구</b>한다. 비정상 종료·전원 장애 후 사용.<p class='on-key'><span class='lbl'>시험 함정</span>반드시 <b>마운트 해제(umount) 상태</b>에서 실행해야 한다 — 마운트된 채로 돌리면 <b>오히려 손상</b>될 수 있다. 복구된 소유자 불명 파일은 <b><code>lost+found</code></b> 디렉터리에 들어간다.</p>"
      },
      {
        "k": "note",
        "title": "헷갈리지 말 것 — 두 가지 '무결성'",
        "d": "<b><code>fsck</code></b>=<b>파일시스템 구조</b>의 무결성(디스크가 깨졌나). <b>Tripwire</b> 같은 <b>무결성 점검 도구</b>=<b>파일 내용 변조</b> 여부(해시 비교로 침입자가 파일을 바꿨나). 이름은 비슷하지만 <b>목적이 다르다.</b>"
      }
    ],
    "finalLiner": "<b><code>mkfs</code></b> 생성(포맷) → <b><code>mount</code></b> 연결(<code>/etc/fstab</code>, 옵션 <code>nosuid·noexec</code>) → <b><code>fsck</code></b> 구조 검사·복구(<b>반드시 언마운트 후</b>, 복구본은 <code>lost+found</code>) / fsck≠Tripwire(파일 변조 점검)",
    "related": ["partition", "fsinternal", "linuxfs"]
  },
  {
    "id": "fstypes",
    "term": "파일시스템 종류",
    "en": "ext2/3/4 · XFS · NFS · procfs",
    "cat": "시스템 보안",
    "tags": ["ext2=저널링 없음", "ext3부터 저널링", "ext4=리눅스 표준", "XFS=RHEL7+ 기본", "NFS=네트워크"],
    "oneLiner": "리눅스 로컬=ext2→ext3(저널링)→ext4·XFS / 네트워크=NFS·CIFS / 가상=proc·tmpfs / 타 OS=FAT·NTFS",
    "blocks": [
      {
        "k": "def",
        "title": "정리하는 법 — 3그룹",
        "d": "종류가 많아 보이지만 <b>①로컬(디스크) ②네트워크 ③가상(메모리)</b> 세 갈래로 묶으면 간단하다. 시험은 주로 <b>①의 계보(저널링 여부)</b>를 묻는다."
      },
      {
        "k": "note",
        "title": "① 로컬 — ext 계보 (핵심)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>ext2</div><div class='es-note'><b>저널링 없음</b>. 비정상 종료 시 <code>fsck</code> 전체 검사로 <b>복구가 느림</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>ext3</div><div class='es-note'><b>저널링 도입</b>. 빠른 복구·무결성.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>ext4</div><div class='es-note'><b>리눅스 표준</b>. 대용량·성능 개선(extent 방식).</div></div></div><p class='on-key'><span class='lbl'>저널링(journaling)이란</span>변경 내용을 <b>먼저 저널(로그)에 기록</b>한 뒤 실제 반영 → 정전·비정상 종료 때 저널만 보고 <b>빠르게 복구</b>. <b>ext2만 저널링이 없다</b>(시험 단골).</p>"
      },
      {
        "k": "note",
        "title": "① 로컬 — 그 외",
        "d": "<ul class='klist'><li><b>XFS</b> — 대용량·고성능 저널링. <b>RHEL/CentOS 7 이후 기본</b>.</li><li><b>Btrfs</b> — 스냅샷·체크섬 등 최신 기능.</li><li><b>JFS</b>(IBM)·<b>ReiserFS</b> — 저널링 계열(구형).</li><li><b>swap</b> — 파일시스템은 아니지만 <b>가상 메모리</b>용 전용 영역.</li></ul>"
      },
      {
        "k": "note",
        "title": "② 네트워크 · ③ 가상 · 타 OS",
        "d": "<ul class='klist'><li><b>네트워크</b>: <b>NFS</b>(Network File System, 유닉스 표준 원격 공유) · <b>CIFS/SMB</b>(윈도우 공유 마운트).</li><li><b>가상(메모리)</b>: <b><code>/proc</code></b>(procfs — 프로세스·커널 정보) · <code>sysfs</code> · <b><code>tmpfs</code></b>(메모리에 올리는 임시 저장, 재부팅 시 사라짐).</li><li><b>타 OS</b>: <b>FAT/FAT32·exFAT</b>(호환성 좋음, 권한 없음) · <b>NTFS</b>(윈도우) · <b>ISO9660</b>(CD/DVD).</li></ul>"
      },
      {
        "k": "safe",
        "title": "보안 포인트",
        "d": "<b>FAT 계열은 파일 권한·소유자 개념이 없어</b> 보안이 약하다(USB 등). <b>NFS</b>는 잘못 설정하면(<code>/etc/exports</code>에 <code>no_root_squash</code>·전체 공개) <b>원격에서 파일 접근·권한 상승</b>으로 이어진다. 확인은 <code>df -T</code>·<code>mount</code>·<code>/etc/fstab</code>."
      }
    ],
    "finalLiner": "<b>ext2(저널링 X) → ext3(저널링 O) → ext4(표준)</b>, <b>XFS</b>(RHEL7+ 기본) / 네트워크 <b>NFS</b>·CIFS / 가상 <code>proc</code>·<code>tmpfs</code> / 타OS FAT(권한 없음·취약)·NTFS",
    "related": ["linuxfs", "fsadmin", "fsinternal"]
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
    "id": "shellshock",
    "term": "셸쇼크",
    "en": "Shellshock (CVE-2014-6271, Bashdoor)",
    "cat": "시스템 보안",
    "tags": ["bash 취약점", "환경변수로 명령 주입", "CGI 원격 실행(RCE)", "2014년 발견", "패치로 방어"],
    "oneLiner": "bash가 환경변수 속 함수 정의 뒤에 붙은 추가 명령까지 실행하는 취약점 / CGI 웹서버로 원격 명령 실행 / 패치로 방어",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "2014년 발견된 <b>bash</b>의 치명적 취약점(별명 Bashdoor). bash가 <b>환경변수에 담긴 함수 정의</b>를 불러올 때, 함수 뒤에 붙은 <b>추가 명령까지 실행</b>해버린다 → 환경변수만 조작하면 <b>임의 명령 실행</b>. 20여 년간 잠복해 있었다."
      },
      {
        "k": "note",
        "title": "원리 · 테스트 페이로드",
        "d": "환경변수 값이 <code>() { :;}; 악성명령</code> 형태면, bash가 앞부분을 함수로 해석하다 <b>뒤의 악성명령을 실행</b>한다.<p class='on-key'><span class='lbl'>취약 여부 테스트</span><code>env x='() { :;}; echo vulnerable' bash -c \"echo test\"</code> → <b>vulnerable</b>이 출력되면 취약한 bash."
      },
      {
        "k": "warn",
        "title": "왜 위험 — CGI 원격 실행",
        "d": "HTTP 요청 헤더(User-Agent 등)가 <b>환경변수로 전달</b>되는 <b>CGI 웹서버</b>(Apache <code>mod_cgi</code>)에서, 원격 공격자가 헤더에 페이로드를 넣어 <b>서버에서 원격 명령 실행(RCE)</b>이 가능하다. DHCP 클라이언트·SSH ForceCommand 등도 벡터. <b>인증 없이 원격</b>이라 파급력이 컸다."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "근본 대책은 <b>bash를 최신으로 패치·업데이트</b>. WAF로 페이로드 차단은 임시방편이고, 불필요한 <b>CGI 비활성화</b>·서버 최소화가 함께 필요."
      }
    ],
    "finalLiner": "셸쇼크 = bash가 <b>환경변수 속 함수 정의 뒤 추가 명령까지 실행</b>(2014, CVE-2014-6271) / <b>CGI 웹서버로 원격 명령 실행(RCE)</b> / 방어=<b>bash 패치</b>",
    "related": ["shellenv", "shelltypes", "bashfiles"]
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
