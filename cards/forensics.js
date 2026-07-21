/* 포렌식·리버싱 — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "webartifact",
    "term": "웹 브라우저 아티팩트",
    "en": "Web Browser Artifacts",
    "cat": "포렌식·리버싱",
    "tags": [
      "방문기록·캐시·쿠키",
      "다운로드 목록",
      "브라우저별 저장방식",
      "SQLite vs index.dat",
      "사용자 행위 재구성"
    ],
    "oneLiner": "브라우저 사용 흔적 분석 / 공통 항목: 방문기록·캐시·쿠키·다운로드 / 브라우저마다 저장 형식 다름 / 지운 기록도 복구 가능",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "웹 브라우저가 남긴 사용 흔적(아티팩트)을 분석해 <b>사용자가 언제·어디서·무엇을 했는지</b> 인터넷 사용 행위를 재구성하는 포렌식 분야. Edge·Internet Explorer·Chrome·Firefox 등이 대상이며, 브라우저는 달라도 <b>분석하는 항목은 대체로 공통</b>이다."
      },
      {
        "k": "note",
        "title": "공통 분석 항목 (시험 포인트)",
        "d": "어떤 브라우저든 아래를 본다.<ul class='klist'><li><b>방문 기록(History)</b> — 접속한 URL과 시각. 행위 재구성의 뼈대.</li><li><b>캐시(Cache)</b> — 방문 페이지의 이미지·리소스를 임시 저장. 지운 뒤에도 남아 '무엇을 봤는지' 증거가 됨.</li><li><b>쿠키(Cookie)</b> — 로그인·세션·사이트 설정.</li><li><b>다운로드 목록(Download List)</b> — 내려받은 파일 이력.</li><li>그 밖에 <b>북마크·자동완성·검색어</b>도 흔적으로 남는다.</li></ul>"
      },
      {
        "k": "note",
        "title": "브라우저별 저장 방식",
        "d": "같은 항목이라도 <b>저장하는 파일 형식은 브라우저마다 다르다.</b><ul class='klist'><li><b>Chrome · Firefox</b> — <b>SQLite</b> 데이터베이스 파일.</li><li><b>Internet Explorer ~9</b> — <code>index.dat</code>.</li><li><b>IE 10·11 · 구 Edge</b> — <code>WebCacheV01.dat</code>(ESE DB).</li></ul><p class='on-key'><span class='lbl'>연결</span>IE 계열의 <code>index.dat</code>·<code>WebCacheV01.dat</code>는 다음 'IE 아티팩트' 카드에서 자세히.</p>"
      },
      {
        "k": "note",
        "title": "포렌식 포인트 — 삭제 복구·시크릿 모드",
        "d": "사용자가 <b>브라우저에서 지운 기록</b>도 DB에 레코드가 남아 <b>복구되는 경우가 많다.</b> 반대로 <b>프라이빗(시크릿) 모드</b>는 이런 흔적을 디스크에 거의 남기지 않아, 그 시간대 행위는 웹 아티팩트만으로 파악하기 어렵다."
      }
    ],
    "finalLiner": "웹 아티팩트 = 브라우저 사용 흔적 분석 / 공통 항목 <b>방문기록·캐시·쿠키·다운로드</b> / 저장: Chrome·FF=SQLite, IE=<code>index.dat</code>/<code>WebCacheV01.dat</code> / 지운 기록도 복구 가능",
    "related": [
      "ieartifact",
      "eventlog",
      "registry"
    ]
  },
  {
    "id": "ieartifact",
    "term": "인터넷 익스플로러(IE) 아티팩트",
    "en": "Internet Explorer Artifacts",
    "cat": "포렌식·리버싱",
    "tags": [
      "index.dat",
      "WebCacheV01.dat",
      "ESE DB",
      "TypedURLs",
      "IE10Analyzer",
      "esentutl"
    ],
    "oneLiner": "IE 사용 흔적 / 구버전=index.dat → IE10·11·구Edge=WebCacheV01.dat(ESE DB) / 주소창 입력 URL=레지스트리 TypedURLs",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "인터넷 익스플로러(IE)가 남기는 방문 기록·캐시·쿠키 등의 아티팩트. <b>IE 버전에 따라 저장 파일이 바뀌는 것</b>이 핵심 포인트다."
      },
      {
        "k": "note",
        "title": "저장 파일의 변화 (버전별 — 시험 단골)",
        "d": "버전이 올라가며 저장 방식이 바뀌었다.<div class='evo'><div class='evo-step'><div class='es-name'>IE ~9</div><div class='es-note'><code>index.dat</code> — History·임시 인터넷 파일(캐시)·Cookies 폴더마다 각각 존재.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>IE 10·11 · 구 Edge</div><div class='es-note'><code>WebCacheV01.dat</code> — <b>ESE 데이터베이스</b>. History·Cache·Cookie를 컨테이너로 통합.</div></div></div>WebCacheV01.dat 위치: <code>C:\\Users\\사용자\\AppData\\Local\\Microsoft\\Windows\\WebCache</code>"
      },
      {
        "k": "note",
        "title": "TypedURLs — 레지스트리에도 남는다",
        "d": "브라우저 기록과 별개로, 사용자가 <b>주소창에 직접 입력</b>한 URL은 <b>레지스트리</b>에 남는다.<pre>HKCU\\Software\\Microsoft\\Internet Explorer\\TypedURLs</pre>즉 IE 흔적은 파일(WebCache)뿐 아니라 <b>레지스트리에도 분산</b>돼 있다(레지스트리 카드와 연결)."
      },
      {
        "k": "note",
        "title": "수집·복구 (실무 포인트)",
        "d": "<code>WebCacheV01.dat</code>는 사용 중 <b>잠겨 있어</b> 바로 못 여는 경우가 많다. 정상 종료된 <b>Clean Shutdown</b> 상태로 수집하거나, Dirty 상태면 <code>esentutl</code>로 복구해 연다. <b>삭제된 레코드도 복구</b> 가능. 분석 도구: <b>IE10Analyzer</b>, ESEDatabaseView, IEHistoryView."
      }
    ],
    "finalLiner": "IE 아티팩트: 구버전 <code>index.dat</code> → IE10·11·구Edge <b><code>WebCacheV01.dat</code>(ESE DB)</b> @WebCache / 주소창 입력 URL=레지스트리 <b>TypedURLs</b> / 삭제·Dirty도 복구(<code>esentutl</code>·IE10Analyzer)",
    "related": [
      "webartifact",
      "registry",
      "eventlog"
    ]
  },
  {
    "id": "diffing",
    "term": "디핑 · 바이너리 디핑",
    "en": "Diffing / Binary Diffing",
    "cat": "포렌식·리버싱",
    "tags": [
      "patch diffing",
      "1-day",
      "BinDiff"
    ],
    "oneLiner": "두 대상의 '차이' 찾기 / 바이너리에 적용=바이너리 디핑 / 패치 전후 비교로 취약점 역추적=패치 디핑",
    "blocks": [
      {
        "k": "def",
        "title": "디핑",
        "d": "두 대상을 비교해 <b>차이(difference)</b>를 찾는 기술. <code>git diff</code>가 바로 그것 — 커밋 전후로 뭐가 바뀌었는지 보여주는 것."
      },
      {
        "k": "def",
        "title": "바이너리 디핑",
        "d": "비교 대상이 소스가 아니라 <b>컴파일된 실행 파일</b>인 경우. 바이트 1:1이 아니라 디스어셈블/디컴파일해 <b>함수·코드 흐름 단위</b>로 변경점을 찾음. 도구: BinDiff(구글), Diaphora + IDA Pro / Ghidra."
      },
      {
        "k": "warn",
        "title": "패치 디핑 → 1-day 공격",
        "d": "벤더가 보안 패치를 내면 '무엇을 고쳤는지'는 잘 안 알림. 공격자가 <b>패치 전·후 바이너리를 디핑</b>해 바뀐 부분(=원래 취약했던 지점)을 찾고, 거꾸로 익스플로잇을 만들어 아직 패치 안 한 대상을 노림 = <b>1-day 공격</b>."
      },
      {
        "k": "safe",
        "title": "방어 쪽 활용",
        "d": "악성코드 변종 두 개를 디핑해 '백신 회피를 위해 뭘 바꿨나' 분석하거나 멀웨어 패밀리를 분류하는 데도 사용."
      }
    ],
    "finalLiner": "디핑=차이 찾기 · 바이너리 디핑=실행파일에 적용 · <b>패치 디핑=패치 전후 비교로 취약점 역추적(1-day)</b>",
    "related": []
  }
]
);
