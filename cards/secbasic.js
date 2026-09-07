/* 정보보안 일반 — 보안 요소 기술 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "secgoal",
    "term": "정보보호 목표 — 기밀성 · 무결성 · 가용성",
    "en": "Confidentiality, Integrity, Availability (CIA Triad)",
    "cat": "정보보안 일반",
    "tags": ["CIA 3대 목표", "인증·부인방지·책임추적성", "자산·위협·취약점·위험", "위험=자산×위협×취약점", "DAD(반대 개념)"],
    "oneLiner": "정보보호의 3대 목표는 기밀성·무결성·가용성(CIA) / 여기에 인증·부인방지·책임추적성이 추가 목표로 붙는다 / 위험은 자산·위협·취약점이 함께 있을 때 생긴다",
    "blocks": [
      {
        "k": "def",
        "title": "3대 목표 (CIA Triad)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>기밀성 (Confidentiality)</span><div class='row'><b>인가된 사람만</b> 정보에 접근할 수 있어야 한다.<br>수단: <b>암호화 · 접근통제 · 인증</b> / 침해 예: <b>도청·스니핑·유출</b></div></div><div class='cmp-item'><span class='cmp-label'>무결성 (Integrity)</span><div class='row'>정보가 <b>인가되지 않은 방법으로 변경·삭제되지 않아야</b> 한다.<br>수단: <b>해시·MAC·전자서명 · 접근통제 · 형상관리</b> / 침해 예: <b>변조·위조</b></div></div><div class='cmp-item'><span class='cmp-label'>가용성 (Availability)</span><div class='row'>인가된 사용자가 <b>필요할 때 쓸 수 있어야</b> 한다.<br>수단: <b>백업·이중화·클러스터링 · DDoS 대응 · BCP/DRS</b> / 침해 예: <b>DoS·랜섬웨어·시스템 파괴</b></div></div></div><p class='on-key'><span class='lbl'>반대 개념 DAD</span>세 목표를 깨뜨리는 것이 <b>D</b>isclosure(노출) · <b>A</b>lteration(변조) · <b>D</b>estruction(파괴). 어떤 사고가 <b>어느 목표를 깬 것인지</b> 짝짓는 문항이 흔하다.</p>"
      },
      {
        "k": "note",
        "title": "추가 목표 (CIA 외에 자주 나오는 3가지)",
        "d": "<ul class='klist'><li><b>인증(Authentication)</b> — 상대가 <b>진짜 그 사람인지</b> 확인. 메시지 출처 확인도 포함</li><li><b>부인방지(Non-repudiation)</b> — <b>\"난 안 보냈다\"고 발뺌할 수 없게</b> 함. 수단은 <b>전자서명</b>(대칭키 MAC으로는 불가능 — 둘 다 키를 갖고 있어 제3자에게 증명이 안 되기 때문)</li><li><b>책임추적성(Accountability)</b> — 행위를 <b>특정 주체까지 되짚을 수 있어야</b> 함. 수단은 <b>로그·감사 기록</b>. 계정 공유가 금지되는 이유</li><li>부수적으로 <b>신뢰성(Reliability)</b>·<b>인가(Authorization)</b>가 함께 언급된다</li></ul>"
      },
      {
        "k": "note",
        "title": "자산 · 위협 · 취약점 · 위험의 관계",
        "d": "<ul class='klist'><li><b>자산(Asset)</b> — 지켜야 할 가치 있는 것(데이터·시스템·인력·평판)</li><li><b>위협(Threat)</b> — 손실을 일으킬 수 있는 <b>잠재적 원인</b>(해커·화재·내부자). <b>없앨 수 없다</b></li><li><b>취약점(Vulnerability)</b> — 위협이 파고들 수 있는 <b>약점</b>(미패치·약한 패스워드). <b>우리가 줄일 수 있는 유일한 항목</b></li><li><b>위험(Risk)</b> — 위협이 취약점을 이용해 자산에 <b>손실을 끼칠 가능성</b>. <b>위험 ≒ 자산 × 위협 × 취약점</b></li><li><b>대책(Control/Safeguard)</b> — 취약점을 줄여 위험을 낮추는 수단. 위험 처리는 <b>감소·회피·전가(보험)·수용</b> 네 가지</li></ul><p class='on-key'><span class='lbl'>핵심</span>보안 활동의 실체는 <b>위협을 없애는 게 아니라 취약점을 줄이는 것</b>이다.</p>"
      }
    ],
    "finalLiner": "3대 목표 <b>기밀성(암호화·접근통제) · 무결성(해시·전자서명) · 가용성(백업·이중화)</b>, 깨뜨리면 <b>노출·변조·파괴(DAD)</b> / 추가로 <b>인증·부인방지(전자서명만 가능)·책임추적성(로그)</b> / <b>위험=자산×위협×취약점</b>이고 우리가 줄일 수 있는 건 <b>취약점</b>뿐, 위험 처리는 <b>감소·회피·전가·수용</b>",
    "related": ["attacktype", "control", "authtype"]
  },
  {
    "id": "attacktype",
    "term": "정보보호 공격 유형 4가지와 보호대책",
    "en": "Interruption, Interception, Modification, Fabrication",
    "cat": "정보보안 일반",
    "tags": ["차단=가용성", "가로채기=기밀성", "변조=무결성", "위조=무결성·인증", "소극적 vs 적극적 공격"],
    "oneLiner": "정보 흐름을 기준으로 차단(가용성)·가로채기(기밀성)·변조(무결성)·위조(무결성·인증) 네 가지로 나눈다 / 가로채기만 소극적 공격이고 나머지 셋은 적극적 공격",
    "blocks": [
      {
        "k": "warn",
        "title": "4가지 공격 유형 — 깨지는 목표와 함께 외운다",
        "d": "정상 흐름은 <b>송신자 → 수신자</b>. 여기에 무슨 짓을 하느냐로 나눈다.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>① 차단 · 가로막기 (Interruption)</span><div class='row'>흐름을 <b>끊는다</b>. 수신자에게 <b>도달하지 못함</b>.<br>깨지는 목표 = <b>가용성</b> / 예: <b>DoS·DDoS</b>, 회선 절단, 파일 삭제</div></div><div class='cmp-item'><span class='cmp-label'>② 가로채기 (Interception)</span><div class='row'>흐름은 그대로 두고 <b>몰래 훔쳐본다</b>. 수신자는 <b>정상 수신</b>.<br>깨지는 목표 = <b>기밀성</b> / 예: <b>스니핑·도청·불법 복사</b></div></div><div class='cmp-item'><span class='cmp-label'>③ 변조 · 수정 (Modification)</span><div class='row'>중간에서 <b>내용을 바꿔</b> 전달한다.<br>깨지는 목표 = <b>무결성</b> / 예: <b>중간자 공격(MITM)</b>, 데이터 변조, 웹 페이지 위·변조</div></div><div class='cmp-item'><span class='cmp-label'>④ 위조 · 조작 (Fabrication)</span><div class='row'>송신자가 보내지도 않은 것을 <b>가짜로 만들어</b> 보낸다.<br>깨지는 목표 = <b>무결성·인증</b> / 예: <b>스푸핑</b>, 재전송(Replay), 가짜 메시지 삽입</div></div></div><p class='on-key'><span class='lbl'>구분 요령</span><b>변조=원래 있던 것을 고침</b>, <b>위조=없던 것을 새로 만듦</b>. 이 둘을 바꿔 내는 문항이 가장 많다.</p>"
      },
      {
        "k": "note",
        "title": "소극적 공격 vs 적극적 공격",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>소극적(수동적) 공격 — Passive</span><div class='row'>데이터를 <b>건드리지 않고 관찰만</b> 한다. <b>가로채기</b>가 여기 해당(도청·트래픽 분석).<br><b>탐지가 매우 어렵다</b> → 대응은 <b>탐지가 아니라 예방(암호화)</b></div></div><div class='cmp-item'><span class='cmp-label'>적극적(능동적) 공격 — Active</span><div class='row'>데이터·시스템을 <b>실제로 바꾸거나 방해</b>한다. <b>차단·변조·위조</b>가 여기 해당.<br><b>완전한 예방은 어렵다</b> → 대응은 <b>탐지와 복구</b>에 무게</div></div></div><p class='on-key'><span class='lbl'>단골 문장</span>\"소극적 공격은 <b>예방</b>에, 적극적 공격은 <b>탐지·복구</b>에 중점을 둔다\"가 그대로 지문으로 나온다.</p>"
      },
      {
        "k": "safe",
        "title": "유형별 보호대책",
        "d": "<ul class='klist'><li><b>차단(가용성)</b> → 이중화·부하분산·<b>DDoS 대응 장비</b>·백업·BCP/DRS</li><li><b>가로채기(기밀성)</b> → <b>암호화(SSL/TLS·VPN)</b>·스위칭 환경·접근통제·물리 보안</li><li><b>변조(무결성)</b> → <b>해시·MAC·전자서명</b>·무결성 검사 도구(트립와이어)·전송 구간 암호화</li><li><b>위조(무결성·인증)</b> → <b>전자서명·인증서</b>·상호 인증·<b>타임스탬프/난스(재전송 방지)</b></li></ul>"
      }
    ],
    "finalLiner": "<b>차단=가용성(DoS) · 가로채기=기밀성(스니핑) · 변조=무결성(MITM, 있던 걸 고침) · 위조=무결성·인증(스푸핑, 없던 걸 만듦)</b> / <b>가로채기만 소극적</b>이고 나머지 셋은 적극적 / <b>소극적은 예방(암호화), 적극적은 탐지·복구</b>",
    "related": ["secgoal", "control", "fds"]
  },
  {
    "id": "control",
    "term": "통제 — 일반통제와 응용통제 · 시점별 분류",
    "en": "IT General Control (ITGC) / Application Control (ITAC)",
    "cat": "정보보안 일반",
    "tags": ["일반통제=조직 전반 환경", "응용통제=개별 업무 처리", "예방·탐지·교정", "관리적·물리적·기술적", "입력·처리·출력 통제"],
    "oneLiner": "일반통제는 조직 전체 IT 환경에 걸린 통제, 응용통제는 개별 업무 시스템의 입력·처리·출력에 대한 통제 / 시점으로는 예방(사전)·탐지(진행 중)·교정(사후)으로 나뉜다",
    "blocks": [
      {
        "k": "def",
        "title": "일반통제 vs 응용통제 (적용 범위로 구분)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>일반통제 (ITGC, General Control)</span><div class='row'><b>여러 시스템에 공통으로</b> 걸리는 조직 전반의 통제. <b>토대</b>에 해당.<br>예: <b>접근 권한 관리</b>, <b>프로그램 변경 관리</b>, 프로그램 개발·도입 통제, <b>운영 관리(백업·장애·job 스케줄링)</b>, 물리적 보안, 조직·인사 정책</div></div><div class='cmp-item'><span class='cmp-label'>응용통제 (ITAC, Application Control)</span><div class='row'><b>개별 업무 처리 하나하나</b>에 걸리는 통제. 거래가 <b>정확·완전하게</b> 처리되게 한다.<br>예: <b>입력 통제</b>(입력값 유효성 검사·중복 확인), <b>처리 통제</b>(계산 검증·대사), <b>출력 통제</b>(보고서 배포 제한)</div></div></div><p class='on-key'><span class='lbl'>관계</span><b>일반통제가 무너지면 응용통제도 신뢰할 수 없다.</b> 응용통제가 아무리 잘 짜여 있어도, 개발자가 운영 DB를 직접 고칠 수 있으면(일반통제 실패) 의미가 없기 때문. 감사에서 <b>일반통제를 먼저 보는 이유</b>다.</p>"
      },
      {
        "k": "note",
        "title": "시점별 분류 (가장 많이 나오는 분류)",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>예방 통제 (Preventive)</span><span class='es-note'><b>사고 발생 전</b>에 막는다. 방화벽·접근통제·암호화·<b>직무 분리</b>·보안 교육</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>탐지 통제 (Detective)</span><span class='es-note'><b>발생했음을 알아챈다</b>. IDS·<b>로그 감시·CCTV</b>·무결성 검사·감사</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>교정 통제 (Corrective)</span><span class='es-note'><b>발생 후 원인을 고치고 복구</b>한다. 백업 복구·패치·<b>BCP/DRP</b>·사고 대응</span></div></div><ul class='klist'><li>함께 언급되는 것: <b>억제(저지) 통제(Deterrent)</b> — 경고문·처벌 규정처럼 <b>시도 자체를 단념</b>시킴 / <b>보완(대응) 통제(Compensating)</b> — 원래 통제를 못 쓸 때 <b>대신 두는</b> 통제 / <b>복구 통제(Recovery)</b></li><li>예시가 <b>어느 통제인지</b> 고르는 문항이 대부분: <b>방화벽=예방, IDS·CCTV·로그=탐지, 백업 복구=교정</b></li></ul>"
      },
      {
        "k": "note",
        "title": "성격별 분류 (3가지 — 관·물·기)",
        "d": "<ul class='klist'><li><b>관리적(행정적) 통제</b> — <b>정책·지침·절차·교육·인사(직무 분리·최소 권한)·감사</b>. 사람과 규정</li><li><b>물리적 통제</b> — <b>출입 통제·잠금장치·CCTV·경비·소화 설비·항온항습</b></li><li><b>기술적(논리적) 통제</b> — <b>접근통제·암호화·방화벽·백신·인증 시스템·로그</b></li></ul><p class='on-key'><span class='lbl'>주의</span><b>CCTV는 물리적 통제이면서 시점으로는 탐지 통제</b>다. 성격별 분류와 시점별 분류는 <b>서로 다른 축</b>이므로 한 대책이 양쪽에 동시에 속한다.</p>"
      }
    ],
    "finalLiner": "<b>일반통제=조직 전반(접근권한·변경관리·운영·물리보안)</b> vs <b>응용통제=개별 업무의 입력·처리·출력</b>, <b>일반통제가 무너지면 응용통제도 무의미</b> / 시점별 <b>예방(방화벽·직무분리) → 탐지(IDS·로그·CCTV) → 교정(백업복구·BCP)</b> + 억제·보완 / 성격별 <b>관리적·물리적·기술적</b>",
    "related": ["secgoal", "fds", "attacktype"]
  },
  {
    "id": "fds",
    "term": "FDS (이상금융거래 탐지 시스템)",
    "en": "Fraud Detection System",
    "cat": "정보보안 일반",
    "tags": ["정보수집·분석탐지·대응·모니터링", "규칙 기반 vs 이상행위 기반", "단말·접속 정보 수집", "오탐과 미탐의 균형", "탐지 통제"],
    "oneLiner": "FDS=평소 거래 패턴에서 벗어난 이상 거래를 실시간으로 탐지·차단하는 시스템 / 구성은 정보수집·분석탐지·대응·모니터링(감사) 4단계 / 규칙 기반과 이상행위(프로파일링) 기반을 함께 쓴다",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 등장 배경",
        "d": "<b>FDS(Fraud Detection System, 이상금융거래 탐지 시스템)</b> — 전자금융거래에서 <b>사용자의 평소 패턴을 학습</b>해 두고, 거래가 들어올 때 <b>단말·위치·금액·시간 등을 종합 분석</b>해 <b>이상 거래를 실시간으로 탐지·차단</b>하는 시스템.<ul class='klist'><li>배경: 계정 탈취·<b>메모리 해킹</b>·파밍·보이스피싱처럼 <b>정상 인증을 통과한 부정 거래</b>가 늘었기 때문. 인증만으로는 막을 수 없다</li><li>성격상 <b>탐지 통제</b>에 속하며, 차단까지 연동하면 예방 효과도 낸다</li></ul>"
      },
      {
        "k": "note",
        "title": "구성 요소 4단계 (순서째로 출제)",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 정보 수집</span><span class='es-note'>거래 정보 + <b>매체·단말 정보(기기 고유값·IP·위치·OS)</b>, 접속 시간·경로를 모은다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 분석 및 탐지</span><span class='es-note'>수집 정보를 <b>평소 프로파일과 대조</b>해 이상 여부와 위험 점수를 산출</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 대응</span><span class='es-note'>위험도에 따라 <b>거래 차단·보류·추가 인증(ARS·OTP) 요구</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 모니터링 및 감사</span><span class='es-note'>탐지 결과를 <b>지속 감시하고 규칙을 갱신</b>. 오탐 사례를 반영해 정확도를 높인다</span></div></div>"
      },
      {
        "k": "note",
        "title": "탐지 방식 · 한계",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>규칙(Rule) 기반</span><div class='row'>\"해외 IP + 1천만 원 이상 + 심야\"처럼 <b>미리 정한 조건</b>에 걸리면 탐지. 이해가 쉽고 빠르나 <b>새로운 수법을 못 잡는다</b></div></div><div class='cmp-item'><span class='cmp-label'>이상행위(프로파일링·머신러닝) 기반</span><div class='row'>사용자별 <b>평소 패턴에서 벗어난 정도</b>로 판단. <b>알려지지 않은 수법도 탐지</b>하지만 <b>오탐(정상을 차단)</b>이 늘 수 있다</div></div></div><ul class='klist'><li><b>오탐(False Positive)</b>이 많으면 고객 불편, <b>미탐(False Negative)</b>이 많으면 피해 발생 → <b>둘의 균형</b>이 운영의 핵심</li><li>IDS의 <b>지식(오용) 기반 vs 행위(이상) 기반</b>과 정확히 같은 구도다</li><li>관련 개념: <b>랜섬웨어</b>·APT는 별도 카드 참조 — 금전 탈취 흐름을 막는다는 점에서 FDS와 함께 묶여 출제된다</li></ul>"
      }
    ],
    "finalLiner": "FDS=평소 패턴과 대조해 <b>이상 금융거래를 실시간 탐지·차단</b>(정상 인증을 통과한 부정 거래를 막는 장치) / 구성 <b>정보수집(단말·접속정보) → 분석·탐지 → 대응(차단·추가인증) → 모니터링·감사</b> / <b>규칙 기반(빠르나 신종에 취약)</b> vs <b>이상행위 기반(신종 탐지하나 오탐)</b>, <b>오탐·미탐의 균형</b>이 핵심",
    "related": ["control", "ransomware", "ids"]
  },
  {
    "id": "authtype",
    "term": "사용자 인증 유형 — 지식 · 소유 · 존재 · 행위",
    "en": "Authentication Factors",
    "cat": "정보보안 일반",
    "tags": ["아는 것·가진 것·자신·행위", "2요소 인증(2FA)", "패스워드 정책", "스마트카드·OTP", "커버로스는 지식+티켓"],
    "oneLiner": "인증 요소는 아는 것(지식)·가진 것(소유)·자신인 것(존재)·행위 네 가지 / 서로 다른 종류를 둘 이상 조합하면 2요소 인증 / 지식기반의 대표가 패스워드, 소유기반의 대표가 스마트카드·OTP",
    "blocks": [
      {
        "k": "def",
        "title": "인증의 4가지 요소",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>① 지식 기반 — 알고 있는 것 (Something you know)</span><div class='row'><b>패스워드·PIN·패턴·보안 질문</b>. 가장 흔하고 비용이 싸지만 <b>추측·유출·재사용</b>에 취약</div></div><div class='cmp-item'><span class='cmp-label'>② 소유 기반 — 가지고 있는 것 (Something you have)</span><div class='row'><b>스마트카드·OTP 토큰·보안카드·공인인증서(파일)·휴대폰(SMS·앱)</b>. <b>분실·도난·복제</b>가 위험 요소</div></div><div class='cmp-item'><span class='cmp-label'>③ 존재(생체) 기반 — 자신인 것 (Something you are)</span><div class='row'><b>지문·홍채·얼굴·정맥·망막</b>. 분실 위험이 없으나 <b>변경이 불가능</b>(유출되면 영구적 피해)</div></div><div class='cmp-item'><span class='cmp-label'>④ 행위 기반 — 하는 행동 (Something you do)</span><div class='row'><b>서명 필적·걸음걸이·타이핑 리듬(키스트로크)·음성</b>. 별도 카드에서 상세히</div></div></div><p class='on-key'><span class='lbl'>2요소 인증(2FA)</span><b>서로 다른 종류</b>를 두 개 써야 2요소다. <b>패스워드 + 보안 질문은 둘 다 지식 기반이라 2요소가 아니다</b>(단골 함정). <b>패스워드 + OTP</b>가 정석.</p>"
      },
      {
        "k": "warn",
        "title": "지식 기반 — 패스워드 정책",
        "d": "<ul class='klist'><li><b>복잡성</b> — 영문 대소문자·숫자·특수문자 조합, <b>충분한 길이</b>(길이가 복잡도보다 효과적)</li><li><b>주기적 변경 · 재사용 금지</b>(직전 N개 금지). 다만 최근 국제 지침(NIST)은 <b>유출 정황이 없으면 강제 주기 변경을 권하지 않는</b> 방향으로 바뀌었다</li><li><b>계정 잠금(Lockout)</b> — 연속 실패 N회 시 잠금 → <b>무차별 대입(Brute Force)·사전 공격 대응</b></li><li><b>저장은 암호화가 아니라 <u>해시 + 솔트(Salt)</u></b> — 복호화할 필요가 없기 때문. 솔트는 <b>레인보우 테이블</b>을 무력화</li><li>금지: <b>기본 패스워드 방치, 하드코딩, 평문 저장·전송, 공유 계정</b>(책임추적성 상실)</li><li>관련 공격: 무차별 대입 · <b>사전 공격</b> · <b>크리덴셜 스터핑</b>(다른 사이트 유출본 대입) · 사회공학</li></ul>"
      },
      {
        "k": "note",
        "title": "소유 기반 — 매체별 특징",
        "d": "<ul class='klist'><li><b>메모리 카드</b> — 정보를 <b>저장만</b> 한다(마그네틱 카드). <b>연산 능력 없음</b> → 복제가 쉽다</li><li><b>스마트카드(IC 카드)</b> — <b>CPU와 보안 메모리를 내장</b>해 <b>카드 안에서 연산·암호 처리</b>. 개인키가 밖으로 안 나와 복제가 어렵다. <b>PIN과 함께 쓰면 2요소</b></li><li><b>OTP 토큰</b> — 시간·이벤트 동기식, 질의응답 비동기식(별도 카드)</li><li><b>인증서(파일형)</b> — 소유 기반이지만 <b>PC에 파일로 있어 복사 위험</b> → 보안 토큰(HSM)에 보관하면 안전</li><li><b>커버로스(Kerberos)</b> — 지식(패스워드)으로 인증받아 <b>티켓(소유)</b>을 얻어 쓰는 방식. 동작 원리는 <b>PART 01 「커버로스 인증」 카드</b>에 상세히 있다(KDC=AS+TGS, TGT→서비스 티켓)</li></ul>"
      }
    ],
    "finalLiner": "인증 4요소 <b>지식(알고 있는 것)·소유(가진 것)·존재(생체)·행위</b> / <b>서로 다른 종류를 조합해야 2요소</b> — 패스워드+보안질문은 2요소가 아니다 / 패스워드는 <b>해시+솔트로 저장</b>, <b>계정 잠금</b>으로 무차별 대입 대응 / <b>메모리 카드=저장만, 스마트카드=CPU 내장으로 카드 안에서 연산</b> / 커버로스는 <b>티켓 기반</b>",
    "related": ["biometric", "otp", "kerberos"]
  },
  {
    "id": "biometric",
    "term": "생체 인증 — 평가항목과 FAR · FRR · CER",
    "en": "Biometrics / Behavioral Authentication",
    "cat": "정보보안 일반",
    "tags": ["보편성·유일성·지속성·획득성", "성능·수용성·기만성", "FAR=오인식(타인 허용)", "FRR=오거부(본인 거부)", "CER 낮을수록 우수"],
    "oneLiner": "생체 인증 기술은 보편성·유일성·지속성·획득성·성능·수용성·기만성 7가지로 평가한다 / 성능 지표는 FAR(타인을 통과시킴)·FRR(본인을 거부함)이며 두 값이 같아지는 CER이 낮을수록 우수한 시스템",
    "blocks": [
      {
        "k": "note",
        "title": "생체 인증 기술 평가항목 7가지",
        "d": "<ul class='klist'><li><b>보편성(Universality)</b> — <b>누구나 가지고 있는가</b>(지문이 없는 사람도 있다)</li><li><b>유일성(Uniqueness)</b> — <b>사람마다 다른가</b>(구별이 되는가)</li><li><b>지속성(영구성, Permanence)</b> — <b>시간이 지나도 변하지 않는가</b></li><li><b>획득성(수집성, Collectability)</b> — <b>정량적으로 측정·수집이 쉬운가</b></li><li><b>성능(Performance)</b> — 환경이 달라져도 <b>정확하고 빠르게</b> 인식되는가</li><li><b>수용성(Acceptability)</b> — 사용자가 <b>거부감 없이 받아들이는가</b>(홍채·망막은 거부감이 큰 편)</li><li><b>기만성(반기만성, Circumvention)</b> — <b>위조(가짜 지문 등)에 견디는가</b></li></ul><p class='on-key'><span class='lbl'>암기</span>앞 넷 <b>보·유·지·획</b>이 \"생체 정보로 쓸 자격이 있는가\", 뒤 셋 <b>성·수·기</b>가 \"실제 시스템으로 쓸 만한가\"를 본다.</p>"
      },
      {
        "k": "warn",
        "title": "정확도 지표 — FAR · FRR · CER (최다 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>FAR (False Acceptance Rate, 오인식률·부정 허용률)</span><div class='row'><b>타인을 본인으로 잘못 받아들이는</b> 비율. <b>보안상 더 위험</b>한 오류 → 높은 보안이 필요한 곳은 <b>FAR을 낮게</b> 설정</div></div><div class='cmp-item'><span class='cmp-label'>FRR (False Rejection Rate, 오거부율·부정 거부율)</span><div class='row'><b>본인을 타인으로 잘못 거부하는</b> 비율. <b>사용자 불편</b>을 유발 → 편의성이 중요한 곳은 FRR을 낮게</div></div><div class='cmp-item'><span class='cmp-label'>CER (Crossover Error Rate, 교차 오류율) = EER</span><div class='row'>임계값을 조절하다 보면 <b>FAR과 FRR이 같아지는 지점</b>. 그 값이 <b>CER</b>이며 <b>낮을수록 우수한 시스템</b>. 서로 다른 생체 기술을 <b>객관적으로 비교</b>하는 기준</div></div></div><p class='on-key'><span class='lbl'>트레이드오프</span>기준(임계값)을 <b>엄격하게</b> 하면 FAR↓ FRR↑, <b>느슨하게</b> 하면 FAR↑ FRR↓. <b>둘을 동시에 낮출 수는 없다</b>는 것이 핵심 문장.</p>"
      },
      {
        "k": "note",
        "title": "생체 정보 종류와 행위 기반 인증",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>신체적 특징 (존재 기반)</span><div class='row'><b>지문</b>(가장 보편·저렴) · <b>홍채</b>(정확도 최고 수준, 거부감 있음) · 망막 · <b>얼굴</b>(비접촉·수용성 높으나 조명·변장에 약함) · <b>정맥</b>(위조가 어려움) · 손 모양 · DNA</div></div><div class='cmp-item'><span class='cmp-label'>행위(행동) 기반</span><div class='row'><b>서명 필적(속도·필압)</b> · <b>키스트로크 다이내믹스(타이핑 리듬)</b> · <b>음성</b> · 걸음걸이 · 마우스 사용 패턴.<br>보통 정확도는 낮지만 <b>사용자가 의식하지 않아도 계속 인증</b>할 수 있어(지속 인증) <b>이상거래 탐지·FDS</b>와 결합된다</div></div></div><ul class='klist'><li><b>생체 정보의 근본 한계</b> — <b>변경·폐기가 불가능</b>하다. 유출되면 패스워드처럼 바꿀 수 없으므로 <b>원본이 아닌 특징점(템플릿)만 암호화 저장</b>하는 것이 원칙</li><li><b>다중 생체 인증(Multi-modal)</b> — 완벽한 단일 기술이 없어 <b>두 가지 이상을 결합</b>해 정확도를 높인다</li></ul>"
      }
    ],
    "finalLiner": "평가항목 <b>보편성·유일성·지속성·획득성 + 성능·수용성·기만성</b> / <b>FAR=타인을 통과(보안 위험)</b>, <b>FRR=본인을 거부(불편)</b>, <b>둘이 같아지는 CER은 낮을수록 우수</b>이며 <b>동시에 낮출 수 없다</b> / 행위 기반=<b>서명·키스트로크·음성·걸음걸이</b>로 지속 인증 / 생체 정보는 <b>변경 불가</b>라 템플릿만 암호화 저장",
    "related": ["authtype", "fds", "secgoal"]
  }
]);
