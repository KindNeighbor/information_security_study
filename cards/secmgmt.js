/* 정보보안 관리 및 법률 — 정보보호 관리(연속성·평가인증·GDPR·표준) 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "bcp",
    "term": "재해 · BCP · DRP",
    "en": "Business Continuity Planning / Disaster Recovery Planning",
    "cat": "정보보안 관리 및 법률",
    "tags": ["BCP=업무 전체의 연속성", "DRP=IT 시스템 복구", "DRP는 BCP의 부분집합", "BCP 5단계", "정기 테스트·유지보수"],
    "oneLiner": "BCP는 재해가 나도 핵심 업무를 계속하기 위한 조직 전체의 계획, DRP는 그중 IT 시스템·데이터를 복구하는 계획 / DRP는 BCP의 일부이며 둘 다 BIA에서 출발하고 정기적으로 테스트해야 한다",
    "blocks": [
      {
        "k": "def",
        "title": "재해의 개념과 특성",
        "d": "<b>재해(Disaster)</b> — 조직의 정상적인 업무 수행을 <b>중단시키는 예기치 못한 사건</b>.<ul class='klist'><li>종류: <b>자연 재해</b>(지진·홍수·화재·태풍) · <b>인적 재해</b>(테러·파업·실수·내부자 파괴) · <b>기술적 재해</b>(정전·장비 고장·사이버 공격·랜섬웨어)</li><li>특성: <b>예측이 어렵다</b> · <b>피해가 광범위</b>하다 · <b>연쇄적으로 파급</b>된다(한 시스템 장애가 전체 업무로 번짐) · <b>복구에 오랜 시간과 비용</b>이 든다</li><li>그래서 <b>\"막는 것\"만으로는 부족하고 \"멈춰도 다시 돌아가게\"</b> 준비해야 한다 — 이것이 BCP·DRP의 출발점</li></ul>"
      },
      {
        "k": "warn",
        "title": "BCP vs DRP (차이점과 공통점 — 최다 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>BCP (업무 연속성 계획)</span><div class='row'>대상 = <b>조직 전체의 핵심 업무</b>(사람·시설·절차·공급망·IT 전부)<br>목적 = 재해 중에도 <b>업무를 계속</b>하는 것<br>관점 = <b>비즈니스 중심</b>, 경영진 주도<br>범위 = <b>넓다</b> — DRP를 <b>포함</b>한다</div></div><div class='cmp-item'><span class='cmp-label'>DRP (재해 복구 계획)</span><div class='row'>대상 = <b>IT 시스템·데이터·네트워크</b><br>목적 = 중단된 정보시스템을 <b>정상 상태로 복구</b>하는 것<br>관점 = <b>기술(IT) 중심</b>, IT 부서 주도<br>범위 = <b>좁다</b> — BCP의 <b>부분집합</b></div></div></div><ul class='klist'><li><b>공통점</b> — 둘 다 <b>BIA(사업영향분석)에서 출발</b>한다 · <b>RTO·RPO</b>를 기준으로 삼는다 · <b>문서화·교육·정기 테스트·유지보수</b>가 필수 · <b>경영진의 승인과 지원</b>이 필요</li></ul><p class='on-key'><span class='lbl'>한 줄</span><b>BCP = 회사가 계속 돌아가게</b>, <b>DRP = 전산을 다시 살리게</b>. <b>DRP ⊂ BCP</b>.</p>"
      },
      {
        "k": "note",
        "title": "BCP의 주요 활동과 5단계 절차",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 프로젝트 범위 설정 및 기획</span><span class='es-note'>경영진 승인, 조직 구성, <b>범위·목표·예산</b> 결정</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 사업영향평가 (BIA)</span><span class='es-note'>핵심 업무 식별, 중단 시 영향 분석, <b>MTD·RTO·RPO 산정</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 복구 전략 개발</span><span class='es-note'>BIA 결과로 <b>복구 방식·대체 사이트·자원</b>을 결정(비용 대비 효과)</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 복구 계획 수립</span><span class='es-note'>누가·무엇을·어떤 순서로 할지 <b>상세 절차를 문서화</b>, 비상 연락망</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑤ 프로젝트 수행 테스트 및 유지보수</span><span class='es-note'><b>모의 훈련</b>, 교육, 변경 사항 반영, <b>주기적 갱신</b></span></div></div><ul class='klist'><li><b>테스트 방법</b>(쉬운 것 → 실제에 가까운 것): <b>체크리스트</b> → <b>구조적 검토(Walk-through, 탁상 훈련)</b> → <b>시뮬레이션</b> → <b>병렬 테스트</b>(실제 사이트를 가동하되 원 시스템도 유지) → <b>완전 중단 테스트</b>(Full Interruption, 가장 확실하지만 위험)</li><li><b>테스트하지 않은 BCP는 없는 것과 같다</b> — 조직·시스템이 바뀌면 계획이 금방 낡는다</li></ul>"
      }
    ],
    "finalLiner": "재해=<b>예측 불가·광범위·연쇄 파급·복구 장기화</b>(자연·인적·기술적) / <b>BCP=조직 전체 업무의 연속성(비즈니스 중심, 넓음)</b> vs <b>DRP=IT 시스템 복구(기술 중심, BCP의 부분집합)</b>, 공통점은 <b>BIA 출발·RTO/RPO 기준·정기 테스트</b> / BCP 5단계 <b>범위 설정·기획 → BIA → 복구 전략 개발 → 복구 계획 수립 → 테스트·유지보수</b> / 테스트는 <b>체크리스트 → 탁상 → 시뮬레이션 → 병렬 → 완전 중단</b>",
    "related": ["bia", "drsite", "dbbackup"]
  },
  {
    "id": "bia",
    "term": "사업영향분석(BIA)과 MTD · RTO · RPO",
    "en": "Business Impact Analysis / MTD · RTO · RPO",
    "cat": "정보보안 관리 및 법률",
    "tags": ["BIA=업무 중단 시 영향 분석", "MTD=최대 허용 중단 시간", "RTO=복구 목표 시간", "RPO=복구 목표 시점(데이터 손실 허용)", "MTD ≥ RTO + WRT"],
    "oneLiner": "BIA=업무가 멈췄을 때 얼마나 피해가 나는지 분석해 복구 우선순위와 목표를 정하는 단계 / 결과물이 MTD(버틸 수 있는 최대 시간)·RTO(복구 목표 시간)·RPO(되살릴 데이터 시점)이며 RTO는 MTD보다 짧아야 한다",
    "blocks": [
      {
        "k": "def",
        "title": "BIA — 정의와 주요 활동",
        "d": "<b>사업영향분석(BIA, Business Impact Analysis)</b> — 재해로 업무가 중단될 때 <b>재무적·비재무적 영향이 얼마나 되는지</b> 분석해, <b>어떤 업무를 먼저, 얼마나 빨리</b> 복구해야 하는지 정하는 활동. <b>BCP의 핵심이자 출발점</b>.<ul class='klist'><li><b>핵심 업무 프로세스 식별</b> — 조직의 존속에 필수적인 업무와 그 업무가 의존하는 자원(IT·인력·시설)</li><li><b>영향 분석</b> — 중단 시간에 따른 손실: <b>재무적</b>(매출 손실·벌금·배상) + <b>비재무적</b>(평판·고객 신뢰·법규 위반)</li><li><b>복구 목표 설정</b> — 업무별 <b>MTD·RTO·RPO</b> 결정</li><li><b>우선순위 결정</b> — 복구 순서와 필요 자원 산정</li></ul><p class='on-key'><span class='lbl'>위험분석과의 차이</span><b>위험분석=\"무슨 일이 일어날 수 있나(가능성)\"</b>, <b>BIA=\"일어나면 얼마나 아픈가(영향)\"</b>. BIA는 <b>원인이 무엇이든</b> 업무가 멈춘 결과에 집중한다.</p>"
      },
      {
        "k": "note",
        "title": "BIA 단계",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 핵심 업무 식별</span><span class='es-note'>인터뷰·설문으로 업무 목록과 <b>중요도</b> 파악</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 의존 자원 식별</span><span class='es-note'>각 업무가 필요로 하는 <b>시스템·데이터·인력·외부 업체</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 중단 영향 분석</span><span class='es-note'>시간 경과에 따른 <b>손실 곡선</b>(1시간·1일·1주 멈추면?)</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 복구 목표 결정</span><span class='es-note'><b>MTD → RTO·RPO</b> 산정, 복구 우선순위 확정</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑤ 결과 보고 · 승인</span><span class='es-note'>경영진 승인 후 <b>복구 전략 수립</b>의 입력으로 사용</span></div></div>"
      },
      {
        "k": "warn",
        "title": "MTD · RTO · RPO · WRT (용어와 관계)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>MTD (Maximum Tolerable Downtime) — 최대 허용 중단 시간</span><div class='row'>업무가 <b>이 시간 이상 멈추면 조직이 회복 불가능한 피해</b>를 입는 한계선. <b>비즈니스 관점</b>의 상한. MAO·MTPD라고도 한다</div></div><div class='cmp-item'><span class='cmp-label'>RTO (Recovery Time Objective) — 복구 목표 시간</span><div class='row'>재해 발생 후 <b>시스템을 복구하기까지 허용되는 목표 시간</b>. \"<b>얼마나 빨리</b> 되살릴 것인가\". <b>짧을수록 비용이 크다</b></div></div><div class='cmp-item'><span class='cmp-label'>RPO (Recovery Point Objective) — 복구 목표 시점</span><div class='row'>복구했을 때 <b>어느 시점의 데이터까지</b> 되살릴 것인가 = <b>허용 가능한 데이터 손실량</b>. \"<b>얼마나 최근까지</b>\". <b>백업 주기</b>를 결정한다(RPO 1시간 → 최소 1시간마다 백업)</div></div><div class='cmp-item'><span class='cmp-label'>WRT (Work Recovery Time) — 업무 복구 시간</span><div class='row'>시스템이 살아난 뒤 <b>데이터 검증·누락분 재입력</b> 등으로 <b>업무가 실제로 정상화</b>되기까지 걸리는 시간</div></div></div><pre>재해 발생 시점을 기준으로\n\n    ←── RPO ──┤               ├── RTO ──→├── WRT ──→\n  마지막 백업    재해 발생                시스템 복구     업무 정상화\n              ├──────────────── MTD ────────────────┤\n\n  관계:  MTD ≥ RTO + WRT      (RTO는 반드시 MTD보다 짧아야 한다)</pre><p class='on-key'><span class='lbl'>구분 요령</span><b>RTO는 \"시간(얼마나 빨리)\"</b>, <b>RPO는 \"시점(데이터를 어디까지)\"</b>. <b>RTO는 재해 이후 방향</b>, <b>RPO는 재해 이전 방향</b>을 본다. <b>RPO가 0이면 실시간 복제</b>가 필요하다.</p>"
      },
      {
        "k": "note",
        "title": "복구 전략 수립",
        "d": "<ul class='klist'><li>BIA에서 정한 <b>RTO·RPO를 만족하면서 비용이 가장 합리적인</b> 방법을 고른다 — 목표가 엄격할수록 비용은 급격히 커진다</li><li>고려 대상: <b>대체 사이트(미러·핫·웜·콜드)</b> · <b>백업 방식과 주기</b> · <b>데이터 복제(동기/비동기)</b> · <b>인력·통신·공급업체</b> · <b>상호 지원 협약</b></li><li><b>복구 우선순위</b> — MTD가 짧은 업무부터. 모든 업무를 즉시 복구하려는 전략은 비용상 불가능하다</li></ul>"
      }
    ],
    "finalLiner": "BIA=<b>업무 중단 시 영향(재무·비재무)을 분석해 복구 우선순위와 목표를 정함</b>, 위험분석은 가능성·BIA는 영향 / <b>MTD=버틸 수 있는 최대 중단 시간</b>, <b>RTO=복구 목표 시간(얼마나 빨리)</b>, <b>RPO=복구 목표 시점(데이터를 어디까지, 백업 주기 결정)</b>, <b>WRT=업무 정상화까지 추가 시간</b> / 관계 <b>MTD ≥ RTO + WRT</b>, <b>RPO 0이면 실시간 복제</b>",
    "related": ["bcp", "drsite", "riskanalysis"]
  },
  {
    "id": "drsite",
    "term": "재해 복구 시스템(DRS)의 종류",
    "en": "Disaster Recovery Site — Mirror / Hot / Warm / Cold",
    "cat": "정보보안 관리 및 법률",
    "tags": ["미러=즉시·액티브-액티브", "핫=수 시간 이내", "웜=수 일~수 주", "콜드=수 주~수 개월", "RTO가 짧을수록 비쌈"],
    "oneLiner": "RTO·RPO가 짧을수록 미러 → 핫 → 웜 → 콜드 순으로 비싼 사이트를 고른다 / 미러는 실시간 동시 가동, 핫은 장비·데이터 대기, 웜은 일부 장비만, 콜드는 공간과 전원만 준비",
    "blocks": [
      {
        "k": "warn",
        "title": "재해 복구 사이트 4가지 (RTO 순서로 외운다)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>미러 사이트 (Mirror Site)</span><div class='row'>주 센터와 <b>똑같은 시스템을 동시에 가동</b>(Active-Active)하며 <b>실시간 동기 복제</b>.<br>RTO <b>즉시(0에 가까움)</b> · RPO <b>0</b> / 비용 <b>가장 높음</b> / 금융권 핵심 시스템</div></div><div class='cmp-item'><span class='cmp-label'>핫 사이트 (Hot Site)</span><div class='row'><b>동일한 장비와 최신 데이터</b>를 갖추고 <b>대기</b>(Active-Standby). 비동기 복제 또는 짧은 주기 백업.<br>RTO <b>수 시간 이내</b>(보통 4시간 이내) / 비용 높음</div></div><div class='cmp-item'><span class='cmp-label'>웜 사이트 (Warm Site)</span><div class='row'><b>핵심 장비 일부</b>와 네트워크만 준비, 데이터는 <b>주기적 백업본</b>으로 복원.<br>RTO <b>수 일 ~ 수 주</b> / 비용 중간 / 가장 흔한 절충안</div></div><div class='cmp-item'><span class='cmp-label'>콜드 사이트 (Cold Site)</span><div class='row'><b>공간·전원·항온항습 같은 기본 시설만</b> 확보. 재해 후 장비를 들여와 설치·복원.<br>RTO <b>수 주 ~ 수 개월</b> / 비용 <b>가장 낮음</b> / 복구 가능성 검증이 어렵다</div></div></div><p class='on-key'><span class='lbl'>선택 원리</span><b>RTO·RPO가 짧을수록 → 미러·핫(비쌈)</b>, <b>길어도 되면 → 웜·콜드(저렴)</b>. BIA에서 나온 목표에 맞춰 <b>업무별로 다른 사이트</b>를 쓰는 것이 일반적이다.</p>"
      },
      {
        "k": "note",
        "title": "그 밖의 복구 방식",
        "d": "<ul class='klist'><li><b>상호 지원 협정(Reciprocal Agreement)</b> — 비슷한 환경의 <b>다른 조직과 서로 설비를 빌려 쓰기로 약속</b>. 비용은 거의 없지만 <b>실제로 여유 용량이 있을지 보장이 안 되고</b>, 보안·기밀 유지가 어렵다</li><li><b>이동식 사이트(Mobile Site)</b> — 트레일러 등에 장비를 싣고 이동</li><li><b>클라우드 DR(DRaaS)</b> — 클라우드에 복구 환경을 두고 필요할 때 확장. 초기 비용을 크게 줄인다</li><li><b>복제 방식</b> — <b>동기(Synchronous)</b>=양쪽에 동시에 써서 RPO 0이지만 거리·성능 제약 / <b>비동기(Asynchronous)</b>=나중에 복제해 원거리 가능하지만 약간의 데이터 손실</li><li>원격지는 <b>같은 재해 영향권 밖</b>(지리적으로 충분히 떨어진 곳)에 두어야 한다</li></ul>"
      }
    ],
    "finalLiner": "<b>미러(실시간 동시 가동, RTO≈0·RPO 0, 최고가) → 핫(장비·데이터 대기, 수 시간) → 웜(일부 장비·백업 복원, 수 일~수 주) → 콜드(공간·전원만, 수 주~수 개월, 최저가)</b> / <b>RTO가 짧을수록 비싼 사이트</b> / 그 밖에 <b>상호 지원 협정(저렴하나 보장 없음)</b>·이동식·클라우드 DR / 복제 <b>동기(RPO 0, 근거리)</b> vs <b>비동기(원거리, 약간 손실)</b>",
    "related": ["bia", "bcp", "dbbackup"]
  },
  {
    "id": "evalcert",
    "term": "정보보호 제품 평가·인증 — TCSEC · ITSEC · CC · KCMVP",
    "en": "TCSEC / ITSEC / Common Criteria / KCMVP",
    "cat": "정보보안 관리 및 법률",
    "tags": ["TCSEC=미국·오렌지북", "ITSEC=유럽·기능과 보증 분리", "CC=국제 공통(ISO 15408)", "EAL1~EAL7", "KCMVP=국내 암호모듈 검증"],
    "oneLiner": "TCSEC(미국, 기밀성 중심) → ITSEC(유럽, 기능·보증 분리) → CC(국제 공통 기준, ISO/IEC 15408, EAL1~7)로 발전 / 국내 CC 인증기관은 IT보안인증사무국, 암호모듈은 KCMVP로 따로 검증한다",
    "blocks": [
      {
        "k": "note",
        "title": "TCSEC와 ITSEC",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>TCSEC (미국, 1985, 오렌지북)</span><div class='row'>미 국방부가 만든 <b>최초의 평가 기준</b>. <b>기밀성</b>에만 초점.<br>등급 <b>D → C1 → C2 → B1 → B2 → B3 → A1</b>(7단계, A1이 최고)<br><b>D</b>=최소 보호 / <b>C</b>=임의적 보호(<b>DAC</b>) / <b>B</b>=강제적 보호(<b>MAC</b>, <b>B1부터 보안 레이블</b>) / <b>A</b>=검증된 보호(<b>정형적 검증</b>)<br>한계: <b>무결성·가용성 미고려</b>, 네트워크 환경 미반영</div></div><div class='cmp-item'><span class='cmp-label'>ITSEC (유럽, 1991)</span><div class='row'>영국·독일·프랑스·네덜란드의 공동 기준. TCSEC와 달리 <b>기밀성·무결성·가용성</b>을 모두 다룬다.<br>핵심 차이: <b>기능(F)과 보증(E)을 분리</b>해서 평가<br>보증 등급 <b>E0 ~ E6</b>(E6가 최고)</div></div></div>"
      },
      {
        "k": "warn",
        "title": "CC (Common Criteria) — 용어와 구성",
        "d": "<b>CC(공통평가기준)</b> — TCSEC·ITSEC·캐나다 CTCPEC 등을 <b>통합한 국제 표준</b>(<b>ISO/IEC 15408</b>). <b>CCRA</b>(국제상호인정협정) 가입국끼리는 <b>인증서를 서로 인정</b>한다(한국은 2006년 가입).<ul class='klist'><li><b>TOE (Target of Evaluation)</b> — <b>평가 대상</b> 제품·시스템</li><li><b>PP (Protection Profile, 보호 프로파일)</b> — <b>제품군 공통</b>의 보안 요구사항 명세. <b>사용자·수요자 관점</b>, <b>구현과 무관</b>(\"방화벽이라면 이 정도는 해야 한다\")</li><li><b>ST (Security Target, 보안 목표 명세서)</b> — <b>특정 제품</b>의 보안 기능 명세. <b>개발자 관점</b>, <b>구현에 종속</b>. PP를 준수해 작성할 수 있다</li><li><b>SFR (Security Functional Requirements)</b> — <b>보안 기능 요구사항</b>(무엇을 하는가)</li><li><b>SAR (Security Assurance Requirements)</b> — <b>보증 요구사항</b>(얼마나 믿을 수 있게 만들었는가)</li><li><b>EAL (Evaluation Assurance Level)</b> — 보증 등급</li></ul><p class='on-key'><span class='lbl'>PP vs ST</span><b>PP=수요자가 쓰는 \"공통 요구서\"(구현 독립)</b>, <b>ST=개발자가 쓰는 \"우리 제품 명세서\"(구현 종속)</b>. 바꿔 내는 문항이 매우 많다.</p>"
      },
      {
        "k": "note",
        "title": "CC의 구성 · 평가 등급 (EAL)",
        "d": "<ul class='klist'><li>구성: <b>1부 소개 및 일반 모델</b> · <b>2부 보안 기능 요구사항(SFR)</b> · <b>3부 보증 요구사항(SAR)</b> — 평가 방법론은 별도 문서 <b>CEM</b></li></ul><div class='evo'><div class='evo-step'><span class='es-name'>EAL1</span><span class='es-note'>기능 시험</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>EAL2</span><span class='es-note'>구조 시험</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>EAL3</span><span class='es-note'>방법론적 시험·점검</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>EAL4</span><span class='es-note'>방법론적 설계·시험·검토 (<b>상용 제품이 현실적으로 도달하는 최고 수준</b>)</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>EAL5</span><span class='es-note'>준정형적 설계·시험</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>EAL6</span><span class='es-note'>준정형적 검증된 설계·시험</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>EAL7</span><span class='es-note'><b>정형적</b> 검증된 설계·시험 (최고)</span></div></div><p class='on-key'><span class='lbl'>주의</span>EAL은 <b>\"기능이 얼마나 강한가\"가 아니라 \"얼마나 철저하게 검증했는가\"</b>를 뜻한다. EAL이 높다고 보안 기능이 더 많은 것은 아니다.</p>"
      },
      {
        "k": "note",
        "title": "국내 CC 인증 · KCMVP",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>국내 CC 인증 (정보보호제품 평가·인증)</span><div class='row'><b>인증기관 = IT보안인증사무국</b>(국가보안기술연구소 소속, 국정원 산하)<br><b>평가기관</b> = KISA·TTA·한국시스템보증 등 지정기관이 평가하고, 인증기관이 인증서를 발급<br>유형: <b>국제용 CC</b>(CCRA 상호 인정) / <b>국내용 CC</b><br>국내용 인증서 효력 <b>5년</b><br>공공기관에 도입하려면 <b>CC 인증 + 보안기능 확인서·보안적합성 검증</b>이 요구된다</div></div><div class='cmp-item'><span class='cmp-label'>KCMVP (암호모듈 검증제도)</span><div class='row'><b>Korea Cryptographic Module Validation Program</b><br>국가·공공기관 정보통신망에서 <b>비밀이 아닌 중요 자료</b>를 보호하는 <b>암호모듈의 안전성·구현 적합성</b>을 검증<br>운영 = <b>국가정보원</b>, 시험 = <b>국가보안기술연구소</b> 등<br>검증 대상 = <b>국내 검증 대상 알고리즘</b>(ARIA·SEED·LEA·SHA-2·KCDSA 등)을 올바르게 구현했는가<br>2005년 시작. 미국의 <b>CMVP(FIPS 140)</b>에 대응</div></div></div>"
      }
    ],
    "finalLiner": "<b>TCSEC(미국·오렌지북·기밀성만, D→C1→C2→B1→B2→B3→A1, B부터 MAC)</b> → <b>ITSEC(유럽, 기능F·보증E 분리, E0~E6)</b> → <b>CC(ISO/IEC 15408, CCRA 상호인정, 한국 2006 가입)</b> / CC 용어 <b>TOE(평가 대상)·PP(수요자, 구현 독립)·ST(개발자, 구현 종속)·SFR(기능)·SAR(보증)</b> / <b>EAL1~7</b>은 검증의 철저함(<b>EAL4=상용 현실적 최고, EAL7=정형적 검증</b>) / 국내 CC 인증기관 <b>IT보안인증사무국</b>(효력 5년), 암호모듈은 <b>KCMVP(국정원)</b>",
    "related": ["secureos", "symkey", "cloudpia"]
  },
  {
    "id": "gdpr",
    "term": "GDPR — 원칙 · 정보주체 권리 · 기업 책임 · 역외이전",
    "en": "General Data Protection Regulation (EU)",
    "cat": "정보보안 관리 및 법률",
    "tags": ["EU 일반 개인정보보호법(2018.5 시행)", "7대 원칙·책임성", "잊힐 권리·이동권", "72시간 내 신고", "과징금 2천만 유로 또는 매출 4%"],
    "oneLiner": "GDPR=EU 시민의 개인정보를 다루면 EU 밖 기업에도 적용되는 규정(2018.5 시행) / 원칙은 적법·공정·투명 등 6가지 + 책임성, 위반 시 2천만 유로 또는 전 세계 매출 4% 중 큰 금액 / 한국은 2021년 적정성 결정을 받았다",
    "blocks": [
      {
        "k": "def",
        "title": "개요와 적용 범위",
        "d": "<b>GDPR(General Data Protection Regulation, 일반 개인정보보호법)</b> — EU의 개인정보 보호 규정. <b>2016년 제정, 2018년 5월 25일 시행</b>. 지침(Directive)이 아닌 <b>규정(Regulation)</b>이라 <b>회원국에 바로 적용</b>된다.<ul class='klist'><li><b>역외 적용</b> — EU에 사업장이 없어도 <b>EU 거주자에게 재화·서비스를 제공</b>하거나 <b>EU 거주자의 행동을 모니터링</b>하면 적용된다(한국 기업도 대상)</li><li><b>컨트롤러(Controller)</b> = 처리의 목적·수단을 정하는 자 / <b>프로세서(Processor)</b> = 컨트롤러를 대신해 처리하는 자(수탁자)</li><li><b>제재</b> — 중대 위반 시 <b>최대 2천만 유로 또는 전 세계 연 매출의 4% 중 더 큰 금액</b>(일반 위반은 1천만 유로 또는 2%)</li></ul>"
      },
      {
        "k": "warn",
        "title": "GDPR 주요 원칙 (제5조)",
        "d": "<ul class='klist'><li><b>① 적법성·공정성·투명성</b> — 적법한 근거로, 공정하게, 정보주체가 알 수 있게 처리</li><li><b>② 목적 제한</b> — <b>명확한 목적</b>으로만 수집하고 그 외 용도로 쓰지 않는다</li><li><b>③ 데이터 최소화</b> — 목적에 <b>필요한 만큼만</b> 수집</li><li><b>④ 정확성</b> — 정확하고 최신 상태로 유지</li><li><b>⑤ 보관 기간 제한</b> — 목적 달성에 필요한 기간만 보관</li><li><b>⑥ 무결성·기밀성</b> — 적절한 보안 조치로 보호</li><li><b>⑦ 책임성(Accountability)</b> — 위 원칙을 <b>지키고 있음을 컨트롤러가 증명</b>할 수 있어야 한다</li></ul><p class='on-key'><span class='lbl'>포인트</span>6개 원칙에 <b>책임성</b>이 덧붙은 구조. 특히 <b>\"준수했음을 입증할 책임\"이 기업에 있다</b>는 점이 GDPR의 핵심 철학이다.</p>"
      },
      {
        "k": "note",
        "title": "정보주체의 권리",
        "d": "<ul class='klist'><li><b>정보를 받을 권리(고지받을 권리)</b> · <b>열람권</b> · <b>정정권</b></li><li><b>삭제권 = 잊힐 권리(Right to be Forgotten)</b> — 더 이상 필요 없거나 동의를 철회하면 <b>삭제를 요구</b>할 수 있다</li><li><b>처리 제한권</b> — 분쟁 중 등에 처리를 <b>일시 중단</b>시킬 권리</li><li><b>개인정보 이동권(Data Portability)</b> — 자기 데이터를 <b>기계가 읽을 수 있는 형식으로 받아 다른 사업자에게 옮길</b> 권리</li><li><b>반대권(Right to Object)</b> — 마케팅 등 처리에 <b>반대</b>할 권리</li><li><b>자동화된 의사결정·프로파일링 거부권</b> — 사람의 개입 없이 <b>알고리즘만으로 중대한 결정</b>을 받지 않을 권리</li></ul>"
      },
      {
        "k": "note",
        "title": "기업 책임성 강화 조치 · 개인정보 역외이전",
        "d": "<ul class='klist'><li><b>DPO(Data Protection Officer) 지정</b> — 대규모 민감정보·상시 모니터링을 하는 경우 <b>개인정보 보호 책임자</b> 지정 의무</li><li><b>DPIA(Data Protection Impact Assessment)</b> — 고위험 처리 전에 <b>개인정보 영향평가</b> 수행</li><li><b>Privacy by Design & by Default</b> — <b>설계 단계부터</b>, 그리고 <b>기본 설정값으로</b> 개인정보 보호를 적용</li><li><b>처리 활동 기록 의무</b> · <b>가명처리·암호화</b> 등 보호조치</li><li><b>침해 통지</b> — 유출을 알게 된 때로부터 <b>72시간 이내</b>에 감독기관에 신고, 고위험이면 <b>정보주체에게도 지체 없이</b> 통지</li><li><b>EU 역외 대리인 지정</b> — EU에 사업장이 없는 기업은 EU 내 대리인을 둬야 한다</li></ul><div class='cmp'><div class='cmp-item'><span class='cmp-label'>개인정보 역외이전 (EU 밖으로 옮길 때)</span><div class='row'>원칙적으로 <b>제한</b>되며, 아래 중 하나가 있어야 한다<br>① <b>적정성 결정(Adequacy Decision)</b> — EU가 \"그 나라의 보호 수준이 충분하다\"고 인정. <b>한국은 2021년 12월 최종 결정</b>을 받아 별도 절차 없이 이전 가능<br>② <b>표준계약조항(SCC)</b> — EU가 만든 표준 계약서 사용<br>③ <b>구속력 있는 기업 규칙(BCR)</b> — 다국적 그룹 내부 이전용<br>④ 정보주체의 <b>명시적 동의</b> 등 예외</div></div></div>"
      }
    ],
    "finalLiner": "GDPR=<b>EU 규정(2018.5 시행), 역외 적용</b>, 컨트롤러(목적 결정)·프로세서(수탁) / 원칙 <b>적법·공정·투명 · 목적 제한 · 최소화 · 정확성 · 보관기간 제한 · 무결성·기밀성 + 책임성(입증 책임)</b> / 권리 <b>열람·정정·삭제(잊힐 권리)·처리 제한·이동권·반대권·자동화 결정 거부</b> / 책임 <b>DPO·DPIA·Privacy by Design·72시간 내 신고</b> / 과징금 <b>2천만 유로 또는 매출 4%</b> / 역외이전 <b>적정성 결정(한국 2021.12)·SCC·BCR</b>",
    "related": ["cloudpia", "ismscriteria", "iso27000"]
  },
  {
    "id": "cloudpia",
    "term": "클라우드 보안 인증(CSAP) · 개인정보 영향평가 · SECaaS",
    "en": "CSAP / Privacy Impact Assessment / Security as a Service",
    "cat": "정보보안 관리 및 법률",
    "tags": ["CSAP=공공 클라우드 보안인증", "IaaS·SaaS·DaaS, 유효기간 5년", "2027.7 국정원 검증으로 전환 예정", "영향평가=공공기관 의무", "5만·50만·100만 명"],
    "oneLiner": "CSAP=공공기관에 클라우드를 공급하려면 받아야 했던 KISA 보안인증(유효기간 5년)으로, 2027년 7월 국정원 검증 체계로 전환 예정 / 개인정보 영향평가는 공공기관이 대규모 개인정보파일을 구축·변경할 때 의무",
    "blocks": [
      {
        "k": "def",
        "title": "클라우드 컴퓨팅 서비스 보안 인증 (CSAP)",
        "d": "<b>CSAP(Cloud Security Assurance Program)</b> — 공공기관에 클라우드 서비스를 공급하려는 사업자가 <b>보안 요구사항을 충족하는지</b> 평가하는 인증. 근거는 <b>「클라우드컴퓨팅법」</b>, 운영은 <b>KISA</b>.<ul class='klist'><li>유형: <b>IaaS</b>(2016 시작) · <b>SaaS</b>(2018, <b>표준등급·간편등급</b>) · <b>DaaS</b>(가상 데스크톱)</li><li>유효기간: <b>5년</b></li><li>2023년 데이터 중요도에 따른 <b>상·중·하 등급제</b>를 도입(하 등급은 물리적 망분리 요건 완화)</li><li>대상 요건의 핵심: <b>공공기관 전용 존의 물리적 분리</b>, 국내 소재 데이터센터, 관리적·물리적·기술적 보호조치</li></ul><p class='on-key'><span class='lbl'>2026 변화 (중요)</span>CSAP는 <b>폐지 수순</b>이다. 2026년 지침 개정을 거쳐 <b>2027년 7월부터 \"국정원 클라우드 보안검증\"으로 일원화</b>될 예정이며, 기존 요건 일부는 <b>ISMS(자율)</b>로 통합된다. <b>2027년 6월까지 받은 CSAP는 유효기간 5년을 그대로 인정</b>하는 경과조치가 발표됐다. 시험에서는 <b>제도의 기본 개념(대상·유형·유효기간)</b> 위주로 대비하면 된다.</p>"
      },
      {
        "k": "warn",
        "title": "개인정보 영향평가 (PIA) 제도",
        "d": "<b>개인정보 영향평가</b> — 개인정보파일을 <b>구축·변경할 때</b> 그 처리가 정보주체에게 미칠 <b>위험을 미리 조사·분석</b>하고 개선하는 제도. 근거는 <b>개인정보보호법 제33조</b>.<ul class='klist'><li><b>공공기관은 의무</b>, 민간은 자율(권장)</li><li><b>의무 대상</b>(아래 중 하나에 해당하는 개인정보파일을 구축·운용·변경할 때)<br>· <b>민감정보 또는 고유식별정보</b>가 포함된 <b>5만 명 이상</b><br>· 다른 파일과 <b>연계</b>한 결과 <b>50만 명 이상</b><br>· <b>100만 명 이상</b><br>· 영향평가 이후 운용체계를 <b>변경</b>하는 경우</li><li><b>평가기관</b> — <b>개인정보보호위원회가 지정</b>한 기관이 수행</li><li>절차: 공공기관이 평가기관에 의뢰 → 평가 수행 → 결과를 공공기관에 제출 → 공공기관이 <b>개인정보보호위원회에 제출</b></li><li>수행 단계: <b>사전 준비 → 평가 수행(위험 분석) → 개선 계획 수립 → 이행 점검</b></li></ul><p class='on-key'><span class='lbl'>숫자 암기</span><b>민감·고유 5만 / 연계 50만 / 전체 100만</b>. GDPR의 <b>DPIA</b>가 이에 대응하는 제도다.</p>"
      },
      {
        "k": "note",
        "title": "SECaaS (Security as a Service)",
        "d": "<b>SECaaS(서비스형 보안)</b> — 보안 기능을 <b>장비를 사서 설치하는 대신 클라우드로 구독</b>해서 쓰는 방식.<ul class='klist'><li>예: <b>이메일 보안</b> · <b>웹 보안(웹 필터링·WAF)</b> · <b>DDoS 방어</b> · <b>IAM·SSO</b> · <b>백신·EDR</b> · <b>SIEM·보안 관제</b> · <b>취약점 진단</b> · 암호화·키 관리</li><li><b>장점</b> — 초기 투자비가 적고, <b>전문 인력이 부족한 중소기업</b>도 최신 보안을 쓸 수 있으며, 확장이 쉽고 업데이트가 자동</li><li><b>단점</b> — <b>외부 사업자에 대한 의존</b>, 데이터가 외부로 나가는 문제, 서비스 장애 시 영향, 규제 준수 확인 필요</li><li>관련 개념: <b>SASE</b>(네트워크와 보안을 클라우드에서 통합) · <b>MSSP</b>(보안 관제 위탁)</li></ul>"
      }
    ],
    "finalLiner": "<b>CSAP=공공기관 클라우드 공급용 KISA 보안인증(클라우드컴퓨팅법), IaaS·SaaS(표준·간편)·DaaS, 유효기간 5년, 2023년 상·중·하 등급제</b> → <b>2027.7 국정원 클라우드 보안검증으로 전환 예정</b> / <b>개인정보 영향평가=개보법 제33조, 공공기관 의무, 민감·고유식별 5만 · 연계 50만 · 100만 명, 평가기관은 개보위 지정</b> / <b>SECaaS=보안 기능을 클라우드로 구독(중소기업에 유리, 외부 의존이 단점)</b>",
    "related": ["gdpr", "evalcert", "iso27000"]
  },
  {
    "id": "iso27000",
    "term": "ISO/IEC 27000 표준 시리즈",
    "en": "ISO/IEC 27000 Family",
    "cat": "정보보안 관리 및 법률",
    "tags": ["27001=ISMS 요구사항(인증)", "27002=통제 가이드", "2022판 93개·4개 테마", "27005=위험관리", "27701=개인정보"],
    "oneLiner": "ISO/IEC 27000은 정보보호 관리체계 국제 표준군 / 인증을 받는 것은 27001(요구사항)뿐이고 27002는 통제 실무 가이드 / 2022년 개정으로 통제가 114개·14영역에서 93개·4개 테마로 바뀌었다",
    "blocks": [
      {
        "k": "def",
        "title": "주요 표준 (번호와 역할 짝짓기)",
        "d": "<ul class='klist'><li><b>27000</b> — 개요 및 <b>용어 정의</b></li><li><b>27001</b> — <b>ISMS 요구사항</b>. <b>유일하게 인증을 받을 수 있는 표준</b>. PDCA 기반</li><li><b>27002</b> — <b>정보보호 통제 실무 지침</b>(구현 가이드). 인증 대상이 아니다</li><li><b>27003</b> — ISMS <b>구현</b> 가이드</li><li><b>27004</b> — ISMS <b>측정·모니터링</b>(성과 평가)</li><li><b>27005</b> — <b>정보보호 위험관리</b></li><li><b>27006</b> — <b>인증기관</b>에 대한 요구사항</li><li><b>27014</b> — <b>정보보호 거버넌스</b></li><li><b>27017</b> — <b>클라우드</b> 보안 통제</li><li><b>27018</b> — <b>퍼블릭 클라우드의 개인정보(PII)</b> 보호</li><li><b>27701</b> — <b>개인정보 관리체계(PIMS)</b> 확장. 27001에 개인정보를 더한 것</li></ul><p class='on-key'><span class='lbl'>함정</span><b>\"인증을 받는 표준은?\" → 27001</b>. <b>27002는 인증 대상이 아니다</b>(가이드일 뿐). 바꿔 내는 문항이 흔하다.</p>"
      },
      {
        "k": "warn",
        "title": "27001/27002의 2022년 개정",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>2013년판</span><div class='row'>부속서 A 통제 <b>114개</b>, <b>14개 영역</b>(A.5 ~ A.18)</div></div><div class='cmp-item'><span class='cmp-label'>2022년판 (현행)</span><div class='row'>통제 <b>93개</b>, <b>4개 테마</b>로 재편<br>· <b>조직적 통제 37개</b><br>· <b>인적 통제 8개</b><br>· <b>물리적 통제 14개</b><br>· <b>기술적 통제 34개</b><br><b>신규 통제 11개</b> 추가 — 위협 인텔리전스, <b>클라우드 서비스 이용 보안</b>, ICT 업무 연속성 준비, 물리적 보안 모니터링, 설정 관리, 정보 삭제, 데이터 마스킹, 데이터 유출 방지(DLP), 모니터링 활동, 웹 필터링, <b>시큐어 코딩</b></div></div></div><p class='on-key'><span class='lbl'>교재 주의</span>교재가 오래된 판이면 <b>114개·14영역</b>으로 나올 수 있다. 현행은 <b>93개·4개 테마</b>.</p>"
      },
      {
        "k": "note",
        "title": "ISMS-P와의 관계",
        "d": "<ul class='klist'><li><b>ISO 27001</b> = <b>국제</b> 인증, <b>민간 자율</b>, 해외 거래·글로벌 신뢰에 유리</li><li><b>ISMS-P</b> = <b>국내</b> 인증, 국내 <b>법적 근거</b>가 있고 <b>ISMS는 의무 대상</b>이 존재, 개인정보 처리 단계를 더 구체적으로 본다</li><li>두 제도 모두 <b>PDCA 기반 관리체계 + 위험관리 + 보호대책</b>이라는 같은 뼈대를 가진다</li><li>관련 표준: <b>ISO 22301</b>(업무 연속성 관리, BCMS) · <b>ISO 31000</b>(일반 위험관리) · <b>ISO 20000</b>(IT 서비스 관리)</li></ul>"
      }
    ],
    "finalLiner": "<b>27000 용어 · 27001 ISMS 요구사항(유일한 인증 대상) · 27002 통제 실무 지침(인증 X) · 27005 위험관리 · 27014 거버넌스 · 27017 클라우드 · 27018 클라우드 개인정보 · 27701 개인정보 관리체계</b> / 2022년 개정 <b>114개·14영역 → 93개·4테마(조직 37·인적 8·물리 14·기술 34)</b>, 신규 11개 / 관련 <b>ISO 22301(업무 연속성)·31000(위험관리)</b>",
    "related": ["ismsp", "governance", "bcp"]
  }
]);
