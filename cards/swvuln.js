/* 소프트웨어 취약점 (개발 보안) — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "race",
    "term": "경쟁 조건",
    "en": "Race Condition · TOCTOU",
    "cat": "시스템 보안",
    "tags": ["동시 접근·타이밍", "TOCTOU", "심볼릭 링크 공격", "SetUID 권한상승", "원자적 연산·락"],
    "oneLiner": "공유 자원에 동시 접근 시 실행 순서(타이밍)에 따라 결과가 갈리는 취약점 / 대표=TOCTOU / SetUID·임시파일 표적",
    "blocks": [
      {
        "k": "def",
        "title": "정의 (어원으로 기억)",
        "d": "둘 이상의 프로세스·스레드가 <b>공유 자원</b>(파일·변수·메모리)에 <b>동시에 접근</b>할 때, <b>누가 먼저 실행되느냐(타이밍)에 따라 결과가 달라지는</b> 상황. 이름 그대로 자원을 두고 <b>경주(race)</b>를 벌이는 것 — 공격자는 그 <b>찰나의 틈</b>을 파고든다."
      },
      {
        "k": "warn",
        "title": "TOCTOU — 대표 공격",
        "d": "<b>TOCTOU(Time-Of-Check to Time-Of-Use, 검사 시점~사용 시점)</b>: 프로그램이 자원을 <b>검사한 뒤</b> 실제로 <b>사용하기 직전</b>의 틈에, 공격자가 그 자원을 <b>바꿔치기</b>한다.<p class='on-key'><span class='lbl'>전형적 시나리오</span>권한을 검사한 파일을 그 순간 <b>심볼릭 링크</b>로 바꿔 <b>다른 파일(예: <code>/etc/passwd</code>)</b>을 가리키게 만든다 → 검사는 통과했는데 실제로는 엉뚱한 파일을 건드림 → <b>권한 상승·파일 훼손</b>.</p>"
      },
      {
        "k": "note",
        "title": "왜 위험한가 — SetUID·임시파일",
        "d": "특히 유닉스 <b>SetUID(Set User ID)</b> 프로그램(실행되는 동안 <b>root 권한</b>을 가짐)에서 치명적이다. 검사~사용 틈에 파일을 바꿔치기하면 <b>root 권한으로 엉뚱한 파일을 쓰게</b> 되어 권한 상승으로 이어진다. 여러 프로그램이 공유하는 <code>/tmp</code> <b>임시파일 경쟁</b>도 단골 표적."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "핵심은 <b>검사와 사용을 하나로(원자적, atomic)</b> 묶어 틈을 없애는 것. 파일명 대신 <b>파일 디스크립터</b>로 먼저 열고(open) 그 핸들로 검사(fstat) — 이름이 바뀌어도 이미 연 파일을 본다. 임시파일은 <b>안전하게 생성</b>(<code>mkstemp</code>, <code>O_EXCL</code>). 공유 자원엔 <b>락(lock)·뮤텍스·세마포어</b>로 <b>동기화</b>. <b>SetUID 최소화</b>·권한 낮추기."
      }
    ],
    "finalLiner": "경쟁 조건 = 공유 자원 동시 접근 시 <b>타이밍</b>으로 결과가 갈림 / 대표 <b>TOCTOU</b>(검사~사용 틈에 심볼릭 링크 바꿔치기) / <b>SetUID</b>·<code>/tmp</code> 표적 / 방어=원자적 연산·<code>mkstemp</code>·락",
    "related": ["cfunc", "bof", "process"]
  }
]
);
