/* 고급 위협 (APT·킬체인·DLL) — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "apt",
    "term": "APT 공격",
    "en": "Advanced Persistent Threat",
    "cat": "시스템 보안",
    "tags": ["지능형 지속 위협", "표적형·장기 잠복", "스피어 피싱 시작", "국가·조직 배후", "킬체인 따라 진행"],
    "oneLiner": "특정 표적을 겨냥해 장기간 은밀히 지속 침투하는 고도화 공격 / 조직적·목적 뚜렷 / 사이버 킬체인 단계를 따름",
    "blocks": [
      {
        "k": "def",
        "title": "정의 (어원=세 단어가 곧 특징)",
        "d": "<b>APT = Advanced(고도·지능형) + Persistent(지속·장기 잠복) + Threat(위협)</b>. 세 단어가 그대로 특징이다. 불특정 다수가 아니라 <b>특정 대상</b>을 노려, <b>오랜 기간 은밀히</b> 머물며 목적(정보 탈취·감시·파괴)을 이루는 공격."
      },
      {
        "k": "note",
        "title": "특징",
        "d": "<ul class='klist'><li>단발성 아님 — <b>표적형</b>. 대개 <b>스피어 피싱</b>(특정인 겨냥 이메일)으로 침투를 시작.</li><li><b>장기 잠복</b>(수개월~수년) 하며 서서히 확산.</li><li><b>제로데이</b> 등 고급 기법 사용.</li><li>배후가 <b>국가·조직</b>인 경우가 많음(예: 스턱스넷).</li></ul>"
      },
      {
        "k": "warn",
        "title": "어떻게 진행되나",
        "d": "APT는 대개 <b>사이버 킬체인</b> 단계(정찰→무기화→전달→악용→설치→C2→목적달성)를 밟아 진행한다. 그래서 방어도 <b>킬체인 관점</b>에서 단계별로 끊는다(킬체인 카드 연결)."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "단일 솔루션으로 못 막는다 → <b>다층 방어(Defense in Depth)</b>, <b>이상 행위 탐지(EDR)</b>, <b>위협 인텔리전스</b>, 로그·이벤트 상시 분석. 핵심은 <b>킬체인의 어느 단계든 끊는 것</b>(앞 단계일수록 좋음)."
      }
    ],
    "finalLiner": "APT = <b>지능형(Advanced)·지속(Persistent)·위협(Threat)</b> / 특정 표적을 장기간 은밀히(스피어 피싱 시작) / 킬체인 단계를 밟음 / 방어=다층·이상행위 탐지",
    "related": ["killchain", "dll"]
  },
  {
    "id": "killchain",
    "term": "사이버 킬체인",
    "en": "Cyber Kill Chain (Lockheed Martin)",
    "cat": "시스템 보안",
    "tags": ["7단계", "정찰→목적달성", "한 단계만 끊어도 차단", "C2", "APT 대응 틀"],
    "oneLiner": "공격을 7단계로 나눈 모델(정찰→무기화→전달→악용→설치→C2→목적달성) / 사슬 중 한 단계만 끊어도 공격 무력화",
    "blocks": [
      {
        "k": "def",
        "title": "정의 (어원으로 기억)",
        "d": "군사 용어 <b>킬체인(표적 타격 절차)</b>을 사이버 공격에 적용한 모델(록히드 마틴). 공격을 <b>연쇄된 단계</b>로 보고, <b>사슬(chain) 중 하나만 끊으면(kill)</b> 전체 공격이 무력화된다는 <b>방어 관점</b>의 틀이다."
      },
      {
        "k": "note",
        "title": "7단계 (순서 암기 — 시험 단골)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 정찰</div><div class='es-note'>Reconnaissance — 표적 정보 수집.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 무기화</div><div class='es-note'>Weaponization — 익스플로잇+백도어 결합(악성 문서 제작).</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 전달</div><div class='es-note'>Delivery — 이메일·USB·웹으로 전달.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 악용</div><div class='es-note'>Exploitation — 취약점 실행.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>5 설치</div><div class='es-note'>Installation — 백도어 설치(지속성 확보).</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>6 C2</div><div class='es-note'>Command &amp; Control — 외부 서버와 통신·원격 조종.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>7 목적 달성</div><div class='es-note'>Actions on Objectives — 데이터 탈취·파괴 등.</div></div></div>"
      },
      {
        "k": "safe",
        "title": "방어 관점",
        "d": "각 단계마다 탐지·차단 수단을 배치하고, <b>가능한 앞 단계에서 끊을수록</b> 피해가 작다. APT처럼 단계적으로 진행하는 공격을 <b>구조적으로 대응</b>하는 기본 틀. (유사 모델: MITRE ATT&amp;CK)"
      }
    ],
    "finalLiner": "사이버 킬체인 = 공격 <b>7단계</b>(정찰·무기화·전달·악용·설치·C2·목적달성) / <b>한 단계만 끊어도 무력화</b> / APT 대응의 기본 틀",
    "related": ["apt", "dll"]
  },
  {
    "id": "dll",
    "term": "DLL · DLL 공격",
    "en": "Dynamic Link Library",
    "cat": "시스템 보안",
    "tags": ["동적 링크 라이브러리", "공유 코드 .dll", "DLL 인젝션", "DLL 하이재킹(검색순서)", "정상 프로세스 악용"],
    "oneLiner": "여러 프로그램이 공유하며 실행 시 불러 쓰는 코드 묶음(.dll) / 인젝션·하이재킹으로 정상 프로세스에 악성코드 실행",
    "blocks": [
      {
        "k": "def",
        "title": "정의 (어원으로 기억)",
        "d": "<b>DLL = Dynamic Link Library(동적 링크 라이브러리)</b>. 여러 프로그램이 <b>공유</b>하는 함수·코드 묶음을 실행할 때 <b>동적으로 불러(link)</b> 쓰는 파일(<code>.dll</code>). 컴파일 때 합치는 <b>정적 링크</b>와 달리 <b>실행 시 로드</b> → 메모리 절약·모듈화. (윈도우 로그인의 옛 GINA도 DLL)"
      },
      {
        "k": "warn",
        "title": "DLL 인젝션 (Injection)",
        "d": "다른 <b>정상 프로세스에 강제로 악성 DLL을 로드</b>시켜, 그 프로세스의 <b>권한·신분으로 악성코드를 실행</b>한다. 정상 프로세스 안에서 도니 <b>백신·방화벽을 우회</b>하고 은닉하기 좋다."
      },
      {
        "k": "warn",
        "title": "DLL 하이재킹 · 사이드로딩 (검색 순서 악용)",
        "d": "프로그램이 필요한 DLL을 찾는 <b>검색 순서(search order)</b>를 악용한다. 정상 <code>.exe</code>가 먼저 뒤지는 위치(예: 실행 폴더)에 <b>같은 이름의 악성 DLL</b>을 놓아 두면, <b>정상 프로그램이 악성 DLL을 로드</b>한다. 신뢰된 exe가 실행하므로 은닉·지속성에 유리."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "DLL을 <b>전체 경로로 명시</b>해 로드하고 검색 경로를 고정, <b>SafeDllSearchMode</b> 활성화, DLL <b>디지털 서명 검증</b>, 알려진 DLL 보호(KnownDLLs). 실행 폴더에 낯선 DLL이 없는지 점검."
      }
    ],
    "finalLiner": "DLL = 여러 프로그램이 공유하는 <b>동적 로드 코드 묶음(.dll)</b> / <b>인젝션</b>(정상 프로세스에 악성 DLL 주입) · <b>하이재킹</b>(검색 순서 악용해 악성 DLL 로드) / 방어=전체경로·서명검증",
    "related": ["killchain", "process", "logon"]
  }
]
);
