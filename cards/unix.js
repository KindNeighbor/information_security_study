/* 유닉스·리눅스 보안 기초 — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
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
