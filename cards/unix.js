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
    "id": "boot",
    "term": "리눅스 부팅 순서 · 부트로더",
    "en": "Boot Sequence · GRUB / LILO",
    "cat": "시스템 보안",
    "tags": ["BIOS→MBR→부트로더→커널→init", "GRUB·LILO", "MBR=부트 마스터", "싱글유저 모드 위험", "GRUB 패스워드"],
    "oneLiner": "전원→BIOS/UEFI→MBR의 부트로더(GRUB)→커널 로드→init/systemd→런레벨 서비스 / 부트로더는 물리 접근 시 root 탈취 통로",
    "blocks": [
      {
        "k": "def",
        "title": "부팅 순서 (외울 흐름)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 BIOS/UEFI</div><div class='es-note'>전원 ON → 하드웨어 점검(POST) → 부팅 장치 선택.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 MBR</div><div class='es-note'>디스크 <b>첫 섹터</b>의 부트 코드 실행 = <b>부트 마스터</b> 영역.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 부트로더</div><div class='es-note'><b>GRUB</b>이 커널을 골라 메모리에 <b>적재</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 커널</div><div class='es-note'>커널 초기화·장치 인식, 루트 파일시스템 마운트.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>5 init/systemd</div><div class='es-note'><b>최초 프로세스(PID 1)</b>. 런레벨·서비스 실행 → 로그인 화면.</div></div></div>"
      },
      {
        "k": "note",
        "title": "부트로더 — GRUB vs LILO",
        "d": "<b>부트로더</b>는 커널을 찾아 메모리에 올려 실행시키는 프로그램.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>GRUB (GRand Unified Bootloader)</span><div class='row'><b>현재 표준</b>. 부팅 시 <b>메뉴로 커널 선택</b>, 설정 변경이 유연. 설정 <code>/boot/grub/grub.conf</code>(GRUB2는 <code>grub.cfg</code>).</div></div><div class='cmp-item'><span class='cmp-label'>LILO (LInux LOader)</span><div class='row'>구형. 설정을 바꾸면 <b>다시 설치해야</b> 반영됨(<code>/etc/lilo.conf</code>).</div></div></div>"
      },
      {
        "k": "warn",
        "title": "보안 — 물리 접근 시 root 탈취",
        "d": "부팅 메뉴에서 <b>싱글 유저 모드(런레벨 1)</b>로 들어가면 <b>패스워드 없이 root 셸</b>을 얻을 수 있다 → <b>물리적 접근만으로 시스템 장악</b>. 부트로더 설정을 고쳐 커널 옵션을 바꾸는 것도 가능."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "<b>GRUB 패스워드 설정</b>(부팅 메뉴·편집 잠금), <b>BIOS/UEFI 패스워드</b>와 <b>부팅 순서 고정</b>(USB·CD 부팅 차단), 서버실 <b>물리적 접근 통제</b>. 이 셋이 세트."
      }
    ],
    "finalLiner": "부팅 = <b>BIOS/UEFI → MBR → 부트로더(GRUB) → 커널 → init/systemd(PID 1)</b> / GRUB=표준(메뉴 선택) vs LILO=구형(재설치 필요) / <b>싱글유저 모드로 root 탈취</b> → GRUB·BIOS 패스워드로 방어",
    "related": ["partition", "runlevel", "linuxarch"]
  },
  {
    "id": "runlevel",
    "term": "런레벨",
    "en": "Run Level · systemd target",
    "cat": "시스템 보안",
    "tags": ["0=종료 6=재부팅", "1=싱글유저", "3=텍스트 5=GUI", "/etc/inittab", "systemd target"],
    "oneLiner": "시스템 동작 상태(0~6): 0종료·1싱글유저·3텍스트·5GUI·6재부팅 / 요즘은 systemd target으로 대체",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "리눅스가 어떤 <b>동작 상태(모드)</b>로 실행될지 나타내는 번호. <b>init</b>이 런레벨에 맞는 서비스들을 시작한다. 예전 기본 설정은 <code>/etc/inittab</code>."
      },
      {
        "k": "note",
        "title": "런레벨 0~6 (시험 단골)",
        "d": "<ul class='klist'><li><b>0</b> — 시스템 <b>종료(halt)</b></li><li><b>1</b> — <b>싱글 유저 모드</b>(단일 사용자, 관리·복구용. <b>패스워드 없이 root</b> → 보안 위험)</li><li><b>2</b> — 다중 사용자(<b>NFS 등 네트워크 서비스 제외</b>)</li><li><b>3</b> — <b>다중 사용자 + 네트워크</b>, <b>텍스트(CLI)</b> 모드 ← 서버 기본</li><li><b>4</b> — <b>사용하지 않음</b>(예약)</li><li><b>5</b> — 다중 사용자 + <b>X 윈도우(GUI)</b></li><li><b>6</b> — <b>재부팅(reboot)</b></li></ul><p class='on-key'><span class='lbl'>함정</span><b>0(종료)과 6(재부팅)</b>을 기본 런레벨로 설정하면 <b>부팅이 끝나자마자 꺼지거나 무한 재부팅</b>. 4는 미사용.</p>"
      },
      {
        "k": "note",
        "title": "명령 · systemd 시대",
        "d": "확인 <code>runlevel</code>·<code>who -r</code> / 변경 <code>init 3</code>·<code>telinit 3</code>.<br>요즘 배포판은 <b>systemd</b>가 init을 대체해 런레벨 대신 <b>target</b>을 쓴다: <code>poweroff</code>(0)·<code>rescue</code>(1)·<code>multi-user</code>(3)·<code>graphical</code>(5)·<code>reboot</code>(6). 기본값 확인·변경은 <code>systemctl get-default</code>·<code>set-default</code>."
      },
      {
        "k": "safe",
        "title": "보안 포인트",
        "d": "서버는 불필요한 GUI를 빼고 <b>런레벨 3(텍스트)</b>로 운영해 <b>공격 표면을 줄인다</b>. <b>싱글 유저 모드(1)</b>는 물리 접근자에게 root를 내주므로 <b>GRUB 패스워드</b>로 막는다."
      }
    ],
    "finalLiner": "런레벨 <b>0=종료·1=싱글유저(root 위험)·2=NFS없는 다중·3=텍스트(서버)·4=미사용·5=GUI·6=재부팅</b> / systemd에선 <code>multi-user·graphical</code> target / 서버는 3으로 최소화",
    "related": ["boot", "linuxarch"]
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
        "d": "한 프로세스는 <b>신분증을 2개</b> 갖고 다닌다 — <b>RUID=신분, EUID=권한</b>.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>RUID (Real UID, 실제)</span><div class='row'>이 프로세스를 <b>실제로 실행한 사용자</b>. '나 누구냐'.<br>🪪 <b>주민등록증</b> — 안 바뀐다.</div></div><div class='cmp-item'><span class='cmp-label'>EUID (Effective UID, 유효)</span><div class='row'><b>지금 권한 판정에 실제로 쓰이는</b> UID. '지금 뭘 할 수 있냐'.<br>🎫 <b>지금 찬 출입증</b> — 바뀔 수 있다.</div></div></div><p class='on-key'><span class='lbl'>왜 '유효(Effective)'인가</span>커널이 “이 파일 열게 해줄까?”를 판단할 때 <b>실제로 들여다보는 값이 EUID</b>라서 — <b>효력을 발휘하는</b> ID라는 뜻이다. 평소엔 RUID=EUID지만, <b>SetUID</b> 프로그램을 실행하면 <b>EUID만</b> 소유자(주로 root)로 바뀐다.</p><b>user1(1000)이 <code>passwd</code> 실행할 때</b><ul class='klist'><li>실행 전 — RUID 1000 / EUID 1000 → shadow 못 건드림</li><li><b>실행 중 — RUID 1000 / EUID 0(root)</b> → <b>shadow 수정 가능</b></li><li>종료 후 — RUID 1000 / EUID 1000 → 원래대로</li></ul><b>RUID가 1000으로 남아 있는 게 핵심</b> — 프로그램이 '권한은 root지만 실행자는 user1'임을 알아서 <b>user1의 비밀번호만</b> 바꿔준다. 확인은 <code>id -u</code>(EUID)·<code>id -ru</code>(RUID). ※ <b>Saved UID</b>는 권한을 잠깐 내렸다 되돌리려고 원래 EUID를 <b>보관</b>해두는 자리."
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
  },
  {
    "id": "fileperm",
    "term": "파일 권한 (rwx · chmod · umask)",
    "en": "File Permission",
    "cat": "시스템 보안",
    "tags": ["r4·w2·x1", "소유자/그룹/기타", "chmod 755", "umask=뺄셈", "디렉터리 x=진입"],
    "oneLiner": "권한 rwx(읽기4·쓰기2·실행1)를 소유자/그룹/기타 3자리로 / chmod로 변경 / umask는 기본권한에서 빼는 값(파일666·디렉터리777 기준)",
    "blocks": [
      {
        "k": "def",
        "title": "구조 — ls -l 읽는 법",
        "d": "<code>-rwxr-xr-x</code> → 맨 앞 <b>1글자=파일 종류</b>(<code>-</code>일반, <code>d</code>디렉터리), 그다음 <b>3자리씩 3묶음</b>.<ul class='klist'><li><b>u</b>(user/소유자) <b>rwx</b> · <b>g</b>(group/그룹) <b>r-x</b> · <b>o</b>(other/기타) <b>r-x</b></li><li>숫자 값: <b>r=4(read) · w=2(write) · x=1(execute)</b> → 더해서 표기. <code>rwx</code>=7, <code>r-x</code>=5, <code>rw-</code>=6</li></ul>"
      },
      {
        "k": "note",
        "title": "chmod — 권한 변경 (두 방식)",
        "d": "<b><code>chmod</code>(change mode)</b><ul class='klist'><li><b>8진수(숫자) 방식</b>: <code>chmod 755 file</code> → <code>rwxr-xr-x</code>. <code>644</code>=<code>rw-r--r--</code>(일반 파일 표준), <code>600</code>=소유자만.</li><li><b>기호 방식</b>: <code>chmod u+x file</code>(소유자에 실행 추가) · <code>chmod go-w file</code>(그룹·기타 쓰기 제거) · <code>a</code>=all.</li></ul>소유자 변경 <b><code>chown</code></b>(change owner), 그룹 변경 <b><code>chgrp</code></b>."
      },
      {
        "k": "warn",
        "title": "디렉터리 권한 — 함정",
        "d": "디렉터리에서는 의미가 달라진다.<ul class='klist'><li><b>r</b> — 목록 보기(<code>ls</code>)</li><li><b>w</b> — 그 안에 <b>파일 생성·삭제</b>(파일 자체 권한과 무관하게 <b>삭제 가능</b>!)</li><li><b>x</b> — 그 디렉터리로 <b>진입</b>(<code>cd</code>)·통과</li></ul><b>x 없으면 들어갈 수 없다</b>, <b>디렉터리 w가 있으면 남의 파일도 지울 수 있다</b>(→ 스티키 비트가 필요한 이유)."
      },
      {
        "k": "note",
        "title": "umask — 디폴트 권한 (계산법)",
        "d": "<b><code>umask</code></b>는 새로 만드는 파일·디렉터리의 <b>기본 권한에서 빼는(마스킹) 값</b>.<p class='on-key'><span class='lbl'>계산</span>기준값: <b>파일 666</b>(실행권한 없음)·<b>디렉터리 777</b>. 여기서 umask를 뺀다.<br>umask <b>022</b> → 파일 <b>644</b>(<code>rw-r--r--</code>), 디렉터리 <b>755</b>(<code>rwxr-xr-x</code>).<br>umask <b>077</b> → 파일 <b>600</b>, 디렉터리 <b>700</b> (가장 안전).<br>※ 파일은 처음부터 <b>실행권한이 안 붙는다</b>는 게 함정.</p>설정은 <code>umask 022</code>, 영구 적용은 <code>/etc/profile</code>·<code>~/.bashrc</code>."
      },
      {
        "k": "safe",
        "title": "보안 포인트",
        "d": "<b>최소 권한 원칙</b> — 불필요한 <b>쓰기·실행 권한 제거</b>. 특히 <b>기타(other)에 쓰기 권한</b>(<code>777</code>)은 매우 위험. 중요 설정 파일은 <code>600</code>·<code>644</code>, umask는 <b>022 이상(권장 027·077)</b>."
      }
    ],
    "finalLiner": "<b>r4·w2·x1</b>을 <b>소유자/그룹/기타</b> 3자리로(<code>755</code>=<code>rwxr-xr-x</code>) / <code>chmod</code> 변경·<code>chown</code> 소유자 / 디렉터리는 <b>x=진입·w=삭제</b> / <b>umask=뺄셈</b>(파일 666·디렉터리 777 기준, 022→644·755)",
    "related": ["specialperm", "uidgid", "linuxfs"]
  },
  {
    "id": "specialperm",
    "term": "특수 권한 (SetUID · SetGID · 스티키 비트)",
    "en": "SetUID · SetGID · Sticky Bit",
    "cat": "시스템 보안",
    "tags": ["SetUID 4000", "SetGID 2000", "스티키 1000", "passwd=4755·/tmp=1777", "find -perm -4000"],
    "oneLiner": "SetUID(4000)=실행 중 소유자 권한 / SetGID(2000)=그룹 권한·디렉터리 그룹 상속 / 스티키(1000)=자기 파일만 삭제 / 점검=find -perm -4000",
    "blocks": [
      {
        "k": "def",
        "title": "정의 — 일반 rwx 앞에 붙는 네 번째 자리",
        "d": "<code>chmod 4755</code>처럼 <b>맨 앞 한 자리</b>가 특수 권한이다. <b>SetUID=4 · SetGID=2 · 스티키 비트=1</b> (더해서 쓸 수 있음)."
      },
      {
        "k": "note",
        "title": "SetUID가 왜 필요한가 — 딜레마로 이해하기",
        "d": "비밀번호를 바꾸려면 <code>/etc/shadow</code>를 고쳐야 하는데, 그 파일은 <b>권한 400 — root만 읽기</b>다. 여기서 딜레마가 생긴다.<ul class='klist'><li>사용자에게 <code>/etc/shadow</code> <b>쓰기 권한을 주면</b> → <b>남의 비밀번호까지</b> 바꿀 수 있다 ❌</li><li><b>안 주면</b> → <b>자기 비밀번호도</b> 못 바꾼다 ❌</li></ul><p class='on-key'><span class='lbl'>SetUID의 답</span><b>권한을 '사람'이 아니라 '프로그램'에 붙인다.</b> — “이 프로그램을 <b>실행하는 동안만</b> 너는 잠깐 소유자(root)가 된다.” 그래서 <code>passwd</code>는 root 권한으로 shadow를 고치되, <b>하는 일이 정해져 있어</b> 그 이상은 못 한다.<br>🏦 비유: 금고엔 내가 못 들어가지만, <b>창구 직원</b>(=SetUID 프로그램)이 금고 권한으로 <b>내 것만</b> 꺼내준다.</p>"
      },
      {
        "k": "warn",
        "title": "오해 바로잡기 — 사용자가 root가 되는 게 아니다",
        "d": "❌ “실행하면 <b>사용자에게</b> root 권한을 준다” → ⭕ “<b>프로그램(프로세스)이</b> root 권한으로 실행된다”. 사용자는 root가 되지 않고, <b>그 프로그램이 제공하는 기능</b>만 쓸 수 있다.<p class='on-key'><span class='lbl'>🏧 ATM 비유</span>ATM은 은행 금고 권한이 있고 <b>누구나</b> 쓸 수 있다. 하지만 내가 ATM을 쓴다고 <b>내가 금고 권한을 얻는 건 아니다</b> — 나는 '출금' 버튼만 누르고, ATM이 <b>내 잔액을 확인해 내 돈만</b> 내준다.</p><div class='cmp two'><div class='cmp-item'><span class='cmp-label'>0755 (일반)</span><div class='row'><code>-rwxr-xr-x</code><br>실행 시 EUID = <b>실행한 사람</b></div></div><div class='cmp-item'><span class='cmp-label'>4755 (SetUID)</span><div class='row'><code>-rw<b>s</b>r-xr-x</code><br>실행 시 EUID = <b>파일 소유자</b></div></div></div><b>차이는 <code>s</code> 한 글자뿐</b>이고 rwx는 동일하다. 주의: <b>root 소유라고 root 권한으로 실행되는 게 아니다</b>(<code>/bin/ls</code>도 root 소유지만 SetUID가 없어 실행자 권한으로 돈다). 또한 <b>권한이 부족할 때만 발동하는 조건부 장치가 아니라</b>, 실행하면 <b>항상</b> EUID가 소유자로 바뀐다(그래서 root가 일반 사용자 소유 SetUID를 실행하면 <b>권한이 오히려 내려간다</b>). 어떤 UID가 될지는 비트가 아니라 <b><code>ls -l</code>의 소유자 칸</b>이 정한다."
      },
      {
        "k": "note",
        "title": "셋의 역할",
        "d": "<ul class='klist'><li><b>SetUID(4000)</b> — 실행하는 동안 <b>EUID가 파일 소유자</b>가 된다(주로 root). 예: <code>/usr/bin/passwd</code>가 일반 사용자도 <code>/etc/shadow</code>를 고칠 수 있는 이유. 표시: 소유자 x자리에 <b><code>s</code></b> → <code>-rw<b>s</b>r-xr-x</code>(4755)</li><li><b>SetGID(2000)</b> — 실행 중 <b>그룹 권한</b>을 얻음. <b>디렉터리</b>에 걸면 그 안에 만든 파일이 <b>디렉터리의 그룹을 상속</b>(공동 작업 디렉터리). 표시: 그룹 x자리에 <b><code>s</code></b></li><li><b>스티키 비트(1000)</b> — <b>디렉터리</b>에 설정. 그 안에서 <b>자기 소유 파일만 삭제</b> 가능. 대표: <code>/tmp</code> → <code>drwxrwxrw<b>t</b></code>(1777). 표시: 기타 x자리에 <b><code>t</code></b></li></ul><p class='on-key'><span class='lbl'>대문자 S·T의 의미</span>원래 <b>실행 권한(x)이 없는데</b> 특수 권한만 걸리면 <b>대문자 <code>S</code>·<code>T</code></b>로 표시된다(설정은 됐지만 실행 불가 상태).</p>"
      },
      {
        "k": "note",
        "title": "설정 · 점검 명령 (시험 단골)",
        "d": "설정: <code>chmod 4755 file</code>(SetUID) · <code>chmod u+s file</code> / <code>chmod 2755</code>·<code>g+s</code>(SetGID) / <code>chmod 1777 dir</code>·<code>o+t</code>(스티키)<p class='on-key'><span class='lbl'>SetUID 파일 찾기</span><code>find / -perm -4000 -print</code> — <b>SetUID가 설정된 모든 파일</b>을 찾는다(정기 점검 필수). SetGID는 <code>-perm -2000</code>.<br>※ <code>-4000</code>(앞에 <b>붙임표</b>)은 '그 비트를 <b>포함</b>하는' 것, <code>4000</code>은 '권한이 <b>정확히</b> 4000'인 것. 실무·시험 모두 <b><code>-4000</code></b>을 주로 쓴다.</p>"
      },
      {
        "k": "warn",
        "title": "보안 — 권한 상승의 온상",
        "d": "SetUID 프로그램에 <b>버퍼 오버플로·경쟁 조건(TOCTOU)·PATH 조작</b> 취약점이 있으면 <b>root 권한 탈취</b>로 직결된다. 그래서 <b>불필요한 SetUID 파일 제거</b>(<code>chmod u-s</code>)와 <b>주기적 목록 점검</b>(위 find 명령)이 리눅스 보안의 기본이다.<p class='on-key'><span class='lbl'>왜 뚫리면 끝인가</span>빌려주는 건 <b>제한 없는 소유자 열쇠(root면 전체 권한)</b>다. “김씨 칸만 여는 열쇠” 같은 건 없다. <b>'본인 것만'이라는 제한은 자물쇠가 아니라 프로그램 코드에만</b> 있어서, 프로그램이 속아 넘어가면 그 열쇠가 <b>통째로</b> 공격자에게 간다. 그래서 <b>SetUID 프로그램은 BOF 공격의 대표 표적</b>이다(일반 프로그램을 터뜨려봐야 원래 자기 권한밖에 안 나온다)."
      },
      {
        "k": "safe",
        "title": "관점 — SetUID는 '보안 기능'이 아니라 필요악",
        "d": "SetUID를 <b>보안 기능으로 이해하면 계속 헷갈린다</b>. 정확히는 <b>보안을 희생해 기능을 가능하게 하는 장치</b>다.<ul class='klist'><li><b>보안만 생각하면</b> → SetUID는 <b>하나도 없는 게 최선</b></li><li><b>없으면</b> → 사용자가 비밀번호조차 못 바꿈(기능이 성립 안 함)</li><li><b>그래서</b> → 꼭 필요한 것만 남기고 <b>최소화</b></li></ul>즉 실무·시험의 주제는 <b>“SetUID를 잘 거는 법”이 아니라 “SetUID를 줄이는 법”</b>이다. 시험에서도 늘 <b>위험 요소·점검 대상</b>으로 출제된다(방어 수단으로 나오지 않는다). 대안은 <b>sudo·Capabilities</b>(별도 카드)."
      }
    ],
    "finalLiner": "<b>SetUID 4</b>(실행 중 소유자 권한, <code>passwd</code>=4755, 표시 <code>s</code>) · <b>SetGID 2</b>(그룹 권한·디렉터리 그룹 상속) · <b>스티키 1</b>(디렉터리, <b>자기 파일만 삭제</b>, <code>/tmp</code>=1777, 표시 <code>t</code>) / 점검 <code>find / -perm -4000 -print</code>",
    "related": ["fileperm", "uidgid", "race"]
  },
  {
    "id": "passwdfile",
    "term": "계정 파일 (/etc/passwd · /etc/shadow)",
    "en": "Password & Shadow File",
    "cat": "시스템 보안",
    "tags": ["passwd 7필드", "shadow 9필드", "x=shadow로 이동", "644 vs 400", "존 더 리퍼"],
    "oneLiner": "/etc/passwd=계정 정보 7필드(누구나 읽기 가능, 패스워드 자리는 x) / /etc/shadow=암호화된 패스워드 9필드(root만) / 크래킹 대상",
    "blocks": [
      {
        "k": "note",
        "title": "/etc/passwd — 7개 필드 (순서 그대로 출제)",
        "d": "<pre>root:x:0:0:root:/root:/bin/bash</pre><ul class='klist'><li>① <b>사용자명</b> ② <b>패스워드 자리</b>(<b><code>x</code></b>=실제 해시는 shadow에 있음) ③ <b>UID</b> ④ <b>GID</b> ⑤ <b>설명(코멘트)</b> ⑥ <b>홈 디렉터리</b> ⑦ <b>로그인 셸</b></li></ul>권한은 <b>644</b> — <b>누구나 읽을 수 있다</b>(프로그램들이 UID↔이름 변환에 필요해서)."
      },
      {
        "k": "warn",
        "title": "왜 shadow로 분리했나 (핵심)",
        "d": "옛날엔 <b>암호화된 패스워드가 passwd 파일 안에</b> 있었다 → 파일이 <b>644라 누구나 읽을 수 있으니</b> 해시를 그대로 복사해 <b>오프라인 크래킹</b>이 가능했다. 그래서 해시만 <b><code>/etc/shadow</code>로 분리</b>하고 권한을 <b>400(또는 600) — root만 읽기</b>로 잠갔다. passwd의 <code>x</code>는 '해시는 shadow에 있다'는 표시."
      },
      {
        "k": "note",
        "title": "/etc/shadow — 9개 필드",
        "d": "① 사용자명 ② <b>암호화된 패스워드(해시)</b> ③ 마지막 변경일 ④ <b>최소</b> 사용일 ⑤ <b>최대</b> 사용일(만료 주기) ⑥ <b>경고</b> 일수 ⑦ <b>비활성</b> 유예일 ⑧ <b>계정 만료일</b> ⑨ 예약<p class='on-key'><span class='lbl'>해시 자리 표시</span><code>*</code>·<code>!</code>=<b>로그인 잠금</b>, 빈 칸=<b>패스워드 없음(매우 위험)</b>. 최근 해시는 <code>$6$</code>(SHA-512)로 시작.</p>"
      },
      {
        "k": "warn",
        "title": "패스워드 크래킹 · 존 더 리퍼",
        "d": "해시를 얻으면 <b>오프라인 크래킹</b>을 시도한다.<ul class='klist'><li><b>사전 공격</b>(Dictionary) — 흔한 단어 목록 대입</li><li><b>무차별 대입</b>(Brute Force) — 모든 조합</li><li><b>레인보우 테이블</b> — 미리 계산한 해시표 (→ <b>솔트(salt)</b>로 무력화)</li></ul><b>존 더 리퍼(John the Ripper)</b> — 대표적인 패스워드 크래킹 도구. <b>공격 도구이자, 관리자가 자기 시스템의 취약한 암호를 점검하는 도구</b>로도 쓴다."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "<b>shadow 분리 유지</b>·권한 확인, <b>솔트+강한 해시(SHA-512)</b>, <b>복잡도·만료 주기 정책</b>, 로그인 실패 <b>계정 잠금</b>, 불필요 계정 삭제·<code>/sbin/nologin</code> 처리."
      }
    ],
    "finalLiner": "<code>/etc/passwd</code> <b>7필드</b>(이름:<b>x</b>:UID:GID:설명:홈:셸, <b>644 누구나 읽기</b>) / <code>/etc/shadow</code> <b>9필드</b>(해시+만료 정책, <b>root만</b>) / 분리 이유=<b>오프라인 크래킹 방지</b> / 크래킹 도구=<b>존 더 리퍼</b>, 방어=솔트·SHA-512",
    "related": ["uidgid", "shelltypes", "fileperm"]
  },
  {
    "id": "linuxlog",
    "term": "리눅스 로그 파일",
    "en": "Linux Log Files (utmp·wtmp·btmp)",
    "cat": "시스템 보안",
    "tags": ["utmp=현재접속", "wtmp=접속이력", "btmp=실패기록", "바이너리→전용명령", "WORM 무결성"],
    "oneLiner": "/var/log에 기록 / utmp=현재 접속(who)·wtmp=접속 이력(last)·btmp=실패(lastb)·lastlog=마지막 로그인 / 바이너리라 전용 명령으로만 조회",
    "blocks": [
      {
        "k": "def",
        "title": "위치",
        "d": "대부분 <b><code>/var/log</code></b> 아래에 쌓인다. 침해사고 분석의 1차 증거이자, <b>공격자가 가장 먼저 지우려는 대상</b>."
      },
      {
        "k": "warn",
        "title": "3대 로그 (utmp·wtmp·btmp — 시험 핵심)",
        "d": "<ul class='klist'><li><b>utmp</b> — <b>현재 로그인 중</b>인 사용자. 조회: <b><code>who</code></b>·<code>w</code>·<code>users</code></li><li><b>wtmp</b> — <b>로그인/로그아웃 이력</b>(누가 언제 접속했다 나갔나), 재부팅 기록도. 조회: <b><code>last</code></b></li><li><b>btmp</b> — <b>실패한 로그인 시도</b>(<b>b</b>ad). <b>무차별 대입 공격 탐지</b>의 핵심. 조회: <b><code>lastb</code></b></li><li><b>lastlog</b> — 사용자별 <b>마지막 로그인</b> 시각. 조회: <code>lastlog</code></li></ul><p class='on-key'><span class='lbl'>함정</span>이 넷은 <b>바이너리 파일</b>이라 <code>cat</code>·<code>vi</code>로 열면 깨진다 → <b>반드시 전용 명령</b>으로 봐야 한다. (텍스트 로그와 구분해서 출제)</p>"
      },
      {
        "k": "note",
        "title": "그 밖의 로그 (텍스트)",
        "d": "<ul class='klist'><li><b><code>secure</code></b>(데비안 계열은 <code>auth.log</code>) — <b>인증·su·sudo·SSH 접속</b> 기록. 침입 분석 1순위</li><li><b><code>messages</code></b>(<code>syslog</code>) — 시스템 전반 메시지</li><li><code>cron</code> — 예약 작업 실행 · <code>xferlog</code> — FTP 전송 · <code>sulog</code> — su 사용 · <code>dmesg</code> — 부팅·커널</li><li><b>acct/pacct</b> — 사용자가 실행한 <b>명령어</b> 기록(<code>lastcomm</code>)</li></ul>수집·관리는 <b><code>syslog</code>/<code>rsyslog</code></b> 데몬이 담당(<code>/etc/rsyslog.conf</code>)."
      },
      {
        "k": "safe",
        "title": "로그 무결성 — WORM · 원격 로그",
        "d": "공격자는 흔적을 지우려 로그를 <b>삭제·변조</b>한다. 그래서:<ul class='klist'><li><b>WORM(Write Once Read Many)</b> — <b>한 번 기록하면 수정·삭제할 수 없는</b> 저장 매체·방식. 로그를 여기 보관하면 <b>위·변조 자체가 불가능</b>해 증거 능력이 생긴다.</li><li><b>원격 로그 서버</b>로 실시간 전송(로컬을 지워도 사본이 남음)</li><li>로그 파일 <b>권한 최소화</b>, <b>정기 백업·보존 기간</b> 준수, 무결성 점검(해시)</li></ul>"
      }
    ],
    "finalLiner": "<code>/var/log</code>: <b>utmp</b>=현재접속(<code>who</code>)·<b>wtmp</b>=접속이력(<code>last</code>)·<b>btmp</b>=<b>실패</b>(<code>lastb</code>)·<b>lastlog</b>=마지막로그인 → <b>바이너리라 전용 명령</b> / <code>secure</code>=인증 / 무결성=<b>WORM</b>·원격 로그 서버",
    "related": ["passwdfile", "linuxfs", "cron"]
  },
  {
    "id": "cron",
    "term": "cron · crontab (예약 작업)",
    "en": "cron · crontab · at",
    "cat": "시스템 보안",
    "tags": ["분 시 일 월 요일", "crontab -e/-l/-r", "at=1회성", "cron.allow/deny", "백도어 지속성"],
    "oneLiner": "정해진 시각에 작업을 자동 실행하는 데몬 / crontab 5필드=분 시 일 월 요일 / at은 1회성 / 공격자의 백도어 지속성 수단",
    "blocks": [
      {
        "k": "def",
        "title": "정의 (어원)",
        "d": "<b>cron</b>은 그리스어 <b>chronos(시간)</b>에서 온 이름. <b>주기적으로</b> 명령을 실행하는 데몬(<code>crond</code>)이고, 그 일정표가 <b>crontab</b>(cron table)이다. <b><code>at</code></b>은 <b>1회성</b> 예약(한 번만 실행) — 이 둘의 구분이 자주 나온다."
      },
      {
        "k": "note",
        "title": "crontab 형식 — 5개 필드 (순서 암기)",
        "d": "<pre>분  시  일  월  요일   명령\n *   *   *   *    *</pre><ul class='klist'><li><b>분</b> 0–59 · <b>시</b> 0–23 · <b>일</b> 1–31 · <b>월</b> 1–12 · <b>요일</b> 0–7(<b>0과 7 모두 일요일</b>)</li><li>예) <code>30 2 * * *</code> = 매일 <b>새벽 2시 30분</b> · <code>0 */6 * * *</code> = 6시간마다</li></ul>※ <b>시·분 순서가 아니라 분·시 순서</b>인 게 함정."
      },
      {
        "k": "note",
        "title": "명령 · 파일 위치",
        "d": "<code>crontab -e</code>(편집) · <code>crontab -l</code>(목록) · <code>crontab -r</code>(<b>전체 삭제 — 주의</b>) · <code>crontab -u 사용자</code>(관리자가 지정)<br>사용자별 파일 <code>/var/spool/cron/</code>, 시스템 전역 <code>/etc/crontab</code>·<code>/etc/cron.d/</code>·<code>cron.daily</code> 등."
      },
      {
        "k": "warn",
        "title": "보안 — 지속성(persistence) 수단",
        "d": "공격자는 침투 후 <b>cron에 악성 스크립트를 등록</b>해 <b>재부팅·시간이 지나도 반복 실행</b>되게 만든다(백도어 <b>지속성</b> 확보, 역방향 셸 주기적 접속 등). 그래서 침해사고 조사 때 <b>crontab 목록은 필수 점검 대상</b>이다."
      },
      {
        "k": "safe",
        "title": "방어 — cron.allow / cron.deny",
        "d": "<b><code>/etc/cron.allow</code></b>에 적힌 사용자만 cron 사용 허용, <b><code>/etc/cron.deny</code></b>는 차단 목록. <b>allow가 있으면 allow 우선</b>(거기 없는 사람은 전부 차단)이라 <b>allow 방식이 더 안전</b>하다. 그 외: crontab 정기 점검, cron 로그(<code>/var/log/cron</code>) 확인, 등록 스크립트 <b>권한·소유자 확인</b>.(<code>at</code>도 <code>at.allow</code>·<code>at.deny</code>로 동일하게 제어)"
      }
    ],
    "finalLiner": "cron=<b>주기</b> 실행(chronos), <b>at=1회성</b> / crontab <b>분 시 일 월 요일</b>(요일 0·7=일요일) / <code>-e</code>편집·<code>-l</code>목록·<code>-r</code>전체삭제 / <b>백도어 지속성</b> 표적 → <code>cron.allow</code>로 통제·정기 점검",
    "related": ["linuxlog", "bashfiles", "apt"]
  },
  {
    "id": "sectools",
    "term": "리눅스 보안 도구 · 점검 명령",
    "en": "Security Tools · Kali Linux",
    "cat": "시스템 보안",
    "tags": ["칼리 리눅스=모의해킹 배포판", "목적별 분류", "Tripwire 무결성", "chkrootkit 루트킷", "find로 이상 파일 탐지"],
    "oneLiner": "목적별 분류가 핵심(스캔·취약점·패킷·크래킹·무결성·탐지) / 칼리 리눅스=도구 내장 모의해킹 배포판 / find로 SetUID·소유자 없는 파일 점검",
    "blocks": [
      {
        "k": "def",
        "title": "칼리 리눅스 (Kali Linux)",
        "d": "<b>모의 해킹·취약점 점검용 도구를 미리 모아 놓은 리눅스 배포판</b>(데비안 기반, 옛 BackTrack의 후속). 수백 개 도구가 기본 탑재돼 <b>침투 테스트·보안 진단</b>에 쓰인다. <b>도구 자체는 중립</b>이고, <b>허가받은 대상에만</b> 사용해야 한다(무단 사용은 불법)."
      },
      {
        "k": "note",
        "title": "도구 — 목적별 분류 (이렇게 외우기)",
        "d": "<ul class='klist'><li><b>포트·네트워크 스캔</b> — <b>Nmap</b>(Network Mapper)</li><li><b>취약점 점검</b> — <b>Nessus</b>·<b>OpenVAS</b></li><li><b>패킷 캡처·분석</b> — <b>Wireshark</b>·<b>tcpdump</b></li><li><b>패스워드 크래킹</b> — <b>John the Ripper</b>·<b>Hydra</b></li><li><b>파일 무결성 점검</b> — <b>Tripwire</b>·<b>AIDE</b> (해시로 변조 탐지)</li><li><b>침입 탐지(IDS)</b> — <b>Snort</b></li><li><b>루트킷 탐지</b> — <b>chkrootkit</b>·<b>rkhunter</b></li><li><b>접근 통제</b> — <b>TCP Wrapper</b>(<code>hosts.allow</code>/<code>hosts.deny</code>)</li></ul>"
      },
      {
        "k": "note",
        "title": "find로 이상 파일 탐지 (점검 실무)",
        "d": "<ul class='klist'><li><code>find / -perm -4000 -print</code> — <b>SetUID 파일</b>(권한 상승 통로) 점검</li><li><code>find / -nouser -o -nogroup</code> — <b>소유자·그룹이 없는 파일</b>(삭제된 계정의 잔존물, 침입 흔적)</li><li><code>find / -name &quot;...&quot; -o -name &quot;.. &quot;</code> — <b>은닉을 노린 수상한 이름</b>의 파일</li><li><code>find / -mtime -1</code> — <b>최근 변경된 파일</b>(침해 직후 변경 추적)</li><li><code>find / -size +100M</code> — 비정상적으로 큰 파일(수집된 데이터 은닉)</li></ul>"
      },
      {
        "k": "safe",
        "title": "정리 관점",
        "d": "시험은 <b>'이 도구가 무슨 용도인가'</b>를 묻는다. <b>Nmap=스캔 · Nessus=취약점 · Wireshark=패킷 · John the Ripper=패스워드 · Tripwire=무결성 · Snort=침입탐지 · chkrootkit=루트킷</b> — 이 대응 관계만 확실히 하면 대부분 풀린다."
      }
    ],
    "finalLiner": "<b>칼리 리눅스</b>=모의해킹 도구 내장 배포판 / 용도 대응: <b>Nmap</b>스캔·<b>Nessus</b>취약점·<b>Wireshark</b>패킷·<b>John the Ripper</b>크래킹·<b>Tripwire</b>무결성·<b>Snort</b>IDS·<b>chkrootkit</b>루트킷 / 점검 <code>find / -perm -4000</code>·<code>-nouser</code>",
    "related": ["specialperm", "passwdfile", "linuxlog"]
  },
  {
    "id": "sudocap",
    "term": "권한 위임의 대안 (sudo · Capabilities)",
    "en": "sudo · POSIX Capabilities · MAC",
    "cat": "시스템 보안",
    "tags": ["SetUID는 1970년대 유산", "sudo=정책+감사로그", "Capability=root 분할", "SELinux/AppArmor=MAC", "ping은 이제 SetUID 아님"],
    "oneLiner": "SetUID는 권한을 통째로 빌려줘 위험 / 현대는 sudo(정책·로그)·Capabilities(root를 40여 조각으로)·MAC으로 잘게 위임 / 강화 원칙=SetUID를 이들로 대체",
    "blocks": [
      {
        "k": "def",
        "title": "왜 대안이 나왔나",
        "d": "SetUID는 <b>1970년대</b> 설계다. 당시 유닉스는 <b>서로 신뢰하는 소수</b>가 쓰던 환경이었고(인터넷도 원격 공격자도 없었다), 권한 모델이 <b><code>UID/GID + rwx</code>뿐</b>이라 표현력이 낮았다. 그 안에서 짜낸 해법이라 <b>권한을 통째로(root면 전권) 빌려주는</b> 방식이 됐다.<p class='on-key'><span class='lbl'>문제</span>필요한 건 “포트 하나 열기”뿐인데 <b>root 전체</b>를 줘야 한다 → 그 프로그램이 뚫리면 <b>시스템 전체</b>가 넘어간다. 그래서 이후 <b>“필요한 만큼만 쪼개서 위임”</b>하는 방식들이 개발됐다.</p>"
      },
      {
        "k": "safe",
        "title": "① sudo — 정책으로 위임 + 감사 로그",
        "d": "<b>sudo(superuser do)</b>: <b>누가 / 어느 호스트에서 / 무슨 명령을</b> 실행할 수 있는지 <b><code>/etc/sudoers</code></b> 정책으로 지정한다(편집은 문법 검사가 되는 <code>visudo</code>).<ul class='klist'><li><b>명령 단위로 좁게</b> 허용 가능 — root 셸을 통째로 주지 않는다</li><li><b>누가 언제 무엇을 실행했는지 로그가 남는다</b>(<code>/var/log/secure</code>) → <b>책임 추적성</b></li><li>확인 <code>sudo -l</code>. <b><code>su</code>와 비교</b>: <code>su</code>는 <b>root 비밀번호로 root가 되어 무엇이든</b> 가능하지만, <code>sudo</code>는 <b>자기 비밀번호로 허용된 명령만</b> + 로그가 남는다 → <b>sudo 권장</b></li></ul>"
      },
      {
        "k": "safe",
        "title": "② Capabilities — root를 잘게 쪼갬",
        "d": "리눅스는 root의 전능한 권한을 <b>40여 개의 능력(capability)</b>으로 분할했다. 필요한 <b>조각만</b> 프로그램에 부여한다.<ul class='klist'><li><b>CAP_NET_RAW</b> — 원시 소켓 사용 · <b>CAP_NET_BIND_SERVICE</b> — 1024 미만 포트 열기 · <b>CAP_DAC_OVERRIDE</b> — 파일 권한 검사 무시</li><li>부여·확인: <code>setcap</code> · <code>getcap</code></li></ul><p class='on-key'><span class='lbl'>대표 사례</span><code>ping</code>은 예전엔 <b>SetUID root</b>였다(원시 소켓이 필요해서). 지금은 대부분 <b><code>cap_net_raw</code> 하나만</b> 갖는다 → <b>뚫려도 root가 나오지 않는다</b>.</p>"
      },
      {
        "k": "note",
        "title": "③ 더 강한 통제 — MAC · seccomp",
        "d": "<ul class='klist'><li><b>SELinux · AppArmor</b> — <b>강제 접근 통제(MAC)</b>. 관리자가 정한 정책이 우선이라 <b>root라도 정책 밖 행동은 불가</b>. (기존 rwx 방식은 소유자가 마음대로 바꿀 수 있는 <b>임의 접근 통제(DAC)</b>)</li><li><b>seccomp</b> — 프로세스가 쓸 수 있는 <b>시스템 콜 자체를 제한</b> → 뚫려도 할 수 있는 게 없다</li><li><b>PolicyKit</b> — 권한이 필요한 작업을 <b>별도 데몬에 요청</b>하고 정책으로 판단(프로그램이 권한을 직접 갖지 않음)</li></ul>"
      },
      {
        "k": "warn",
        "title": "그럼 SetUID는 왜 아직 남아 있나",
        "d": "① <b>하위 호환성</b> — 수십 년 된 프로그램이 이를 전제로 동작 ② <b>단순함</b> — capabilities는 설정이 복잡하고 잘못 쓰면 오히려 위험. 다만 배포판들이 <b>SetUID 바이너리 수를 계속 줄이는 추세</b>다.<br><b>시험 포인트:</b> 리눅스 보안 강화의 기본 원칙은 <b>“불필요한 SetUID 제거 → sudo·Capabilities로 대체”</b>."
      }
    ],
    "finalLiner": "SetUID=권한을 <b>통째로</b> 빌려주는 1970년대 방식 → 현대 대안: <b>sudo</b>(<code>/etc/sudoers</code> 정책+<b>감사 로그</b>, <code>su</code>보다 권장) · <b>Capabilities</b>(root를 40여 조각으로, <code>ping</code>=<code>cap_net_raw</code>) · <b>SELinux/AppArmor</b>(MAC, root도 정책 밖 불가) / 강화 원칙=<b>SetUID 제거 후 대체</b>",
    "related": ["specialperm", "uidgid", "passwdfile"]
  }
]
);
