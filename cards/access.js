/* 정보보안 일반 — 접근 통제 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "accessctl",
    "term": "접근 통제 개요 — 식별 · 인증 · 인가",
    "en": "Access Control / Identification, Authentication, Authorization",
    "cat": "정보보안 일반",
    "tags": ["주체·객체·접근", "식별→인증→인가→책임추적", "최소 권한", "직무 분리", "알 필요성"],
    "oneLiner": "접근 통제=주체가 객체에 접근하는 것을 정책에 따라 허용·거부하는 것 / 단계는 식별(주장)→인증(증명)→인가(권한 부여)→책임추적성(기록) / 원칙은 최소 권한·직무 분리·알 필요성",
    "blocks": [
      {
        "k": "def",
        "title": "기본 용어 — 주체 · 객체 · 접근",
        "d": "<ul class='klist'><li><b>주체(Subject)</b> — 접근을 <b>요구하는 능동적 존재</b>. 사용자·프로세스·프로그램</li><li><b>객체(Object)</b> — 접근 <b>대상이 되는 수동적 자원</b>. 파일·DB·프린터·메모리</li><li><b>접근(Access)</b> — 주체가 객체에 하는 행위. <b>읽기(R)·쓰기(W)·실행(X)·삭제·생성</b></li><li><b>접근 통제(Access Control)</b> — 인가되지 않은 주체의 접근을 막고, 인가된 주체에게도 <b>허용된 범위만</b> 열어 주는 것. <b>기밀성·무결성·가용성을 모두 떠받치는 기본 수단</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "정보 접근의 단계 (순서 문제 단골)",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 식별 (Identification)</span><span class='es-note'>\"나는 홍길동이다\"라고 <b>주장</b>. 사용자 ID·계정. <b>고유해야 하며 공유하면 안 된다</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 인증 (Authentication)</span><span class='es-note'>그 주장이 맞음을 <b>증명</b>. 패스워드·OTP·생체. <b>식별과 인증은 다른 단계</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 인가 (Authorization)</span><span class='es-note'>인증된 주체에게 <b>어디까지 할 수 있는지</b> 권한을 부여. \"권한 확인\"이 여기</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 책임추적성 (Accountability)</span><span class='es-note'>한 행위를 <b>로그로 남겨 주체까지 되짚는다</b>. 감사(Audit)</span></div></div><p class='on-key'><span class='lbl'>구분 요령</span><b>식별=누구라고 말하기(ID) · 인증=그게 맞음을 증명(PW) · 인가=무엇을 할 수 있는지(권한)</b>. 셋을 바꿔 내는 문항이 매우 흔하다.</p>"
      },
      {
        "k": "note",
        "title": "접근 통제의 3대 원칙",
        "d": "<ul class='klist'><li><b>최소 권한(Least Privilege)</b> — 업무 수행에 <b>꼭 필요한 최소한</b>의 권한만. 반대 개념이 <b>최대 권한(편의 위주)</b></li><li><b>직무 분리(Separation of Duties)</b> — <b>한 사람이 처음부터 끝까지</b> 처리하지 못하게 나눔(요청자와 승인자 분리, 개발자와 운영자 분리). <b>내부자 부정·공모 없이는 사고가 어렵게</b> 만든다</li><li><b>알 필요성(Need to Know)</b> — 등급이 충분해도 <b>업무상 알 필요가 없으면 접근 불가</b>. 기밀성과 직결</li><li>보조 원칙: <b>직무 순환(Job Rotation)</b>·<b>강제 휴가</b> — 부정을 드러나게 하는 관리적 통제</li></ul>"
      },
      {
        "k": "note",
        "title": "참조 모니터 (Reference Monitor)",
        "d": "주체가 객체에 접근할 때마다 <b>반드시 거쳐야 하는 검사 지점</b>이라는 <b>추상 개념</b>. 이를 구현한 소프트웨어가 <b>보안 커널(Security Kernel)</b>이다.<ul class='klist'><li><b>완전성(Completeness)</b> — <b>우회가 불가능</b>해야 한다(모든 접근이 반드시 통과)</li><li><b>격리성(Isolation)</b> — 변조로부터 <b>보호</b>되어야 한다</li><li><b>검증가능성(Verifiability)</b> — <b>충분히 작아서</b> 분석·검증이 가능해야 한다</li></ul><p class='on-key'><span class='lbl'>연결</span>윈도우의 구현체가 <b>SRM(Security Reference Monitor)</b> — 상세 내용은 <b>PART 01 「보안 참조 모니터(SRM)」 카드</b>에 있다.</p>"
      }
    ],
    "finalLiner": "주체(능동)→객체(수동) / <b>식별(ID 주장) → 인증(증명) → 인가(권한 부여) → 책임추적성(로그)</b> / 원칙 <b>최소 권한 · 직무 분리 · 알 필요성</b> / 참조 모니터의 3요건 = <b>완전성(우회 불가)·격리성(변조 불가)·검증가능성(작아서 검증 가능)</b>, 구현체가 <b>보안 커널</b>",
    "related": ["macdac", "accessmatrix", "srm"]
  },
  {
    "id": "macdac",
    "term": "접근 통제 기술 — MAC · DAC · RBAC",
    "en": "Mandatory / Discretionary / Role-Based Access Control",
    "cat": "정보보안 일반",
    "tags": ["MAC=관리자·보안등급 강제", "DAC=소유자 재량", "RBAC=역할 기반", "규칙 기반 vs 신분 기반", "RBAC은 Non-DAC"],
    "oneLiner": "MAC은 관리자가 정한 보안등급으로 시스템이 강제하고, DAC은 소유자가 재량으로 권한을 주며, RBAC은 역할에 권한을 묶어 사람에게 역할을 부여한다",
    "blocks": [
      {
        "k": "warn",
        "title": "세 방식 한눈에 비교 (최다 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>MAC — 강제적 접근통제 (Mandatory)</span><div class='row'>권한 결정 주체 = <b>시스템(관리자 정책)</b>. <b>객체의 보안 등급(Label)</b>과 <b>주체의 취급 인가(Clearance)</b>를 비교해 <b>자동 결정</b>. <b>소유자도 바꿀 수 없다</b><br>= <b>규칙 기반(Rule-based)</b> / 군·정부 등 <b>기밀성이 최우선</b>인 환경. 대표 구현 <b>SELinux</b></div></div><div class='cmp-item'><span class='cmp-label'>DAC — 임의적 접근통제 (Discretionary)</span><div class='row'>권한 결정 주체 = <b>객체의 소유자</b>. 소유자가 <b>자기 재량으로</b> 남에게 권한을 준다<br>= <b>신분 기반(Identity-based)</b> / 리눅스 <b>rwx 퍼미션</b>, SQL의 <b>GRANT</b>, 윈도우 <b>DACL</b>이 전부 DAC</div></div><div class='cmp-item'><span class='cmp-label'>RBAC — 역할 기반 접근통제 (Role-Based)</span><div class='row'>권한 결정 주체 = <b>조직의 역할·직무</b>. 권한을 <b>역할</b>에 주고 사람에게 <b>역할을 부여</b><br>= <b>비임의적(Non-DAC)</b> / <b>인사이동·퇴사에 강해 기업에서 가장 현실적</b></div></div></div>"
      },
      {
        "k": "note",
        "title": "MAC의 주요 특징과 종류",
        "d": "<ul class='klist'><li>모든 객체에 <b>보안 레이블(등급 + 카테고리)</b>을 붙인다. 예: <b>1급비밀 &gt; 2급비밀 &gt; 3급비밀 &gt; 대외비 &gt; 일반</b></li><li>주체의 <b>인가 등급이 객체 등급 이상</b>이고 <b>알 필요성(카테고리)까지 맞아야</b> 접근 허용</li><li><b>장점</b> — 중앙에서 일관되게 통제, <b>보안성이 가장 강함</b>, 사용자 실수로 정보가 새지 않음</li><li><b>단점</b> — <b>구현·운영이 복잡하고 비용이 크며 유연성이 떨어진다</b>(성능 저하)</li><li>종류: <b>다중 수준 보안(MLS)</b>·<b>다중 등급 보안</b> 기반의 <b>규칙 기반 접근통제</b>, 등급 격자를 쓰는 <b>격자(Lattice) 기반 모델</b></li></ul>"
      },
      {
        "k": "note",
        "title": "DAC의 종류 · RBAC의 구조",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>DAC의 종류</span><div class='row'><b>신분 기반</b>: <b>개별 사용자 단위</b>(User-directed) / <b>그룹 단위</b><br><b>혼합 방식</b>: 사용자+그룹을 함께 지정<br>단점 = <b>권한이 전파되어 통제가 어렵다</b>(받은 사람이 또 줄 수 있음), <b>트로이 목마에 취약</b> — 사용자가 실행한 악성 프로그램이 <b>그 사용자의 권한을 그대로</b> 쓰기 때문</div></div><div class='cmp-item'><span class='cmp-label'>RBAC의 구조</span><div class='row'><b>사용자 – 역할 – 권한</b> 3단 구조. 여기에 <b>세션</b>이 붙는다<br>제약: <b>역할 계층(상위 역할이 하위 권한 상속)</b>, <b>직무 분리(상충되는 두 역할 동시 보유 금지)</b>, <b>기수 제약(한 역할의 인원 수 제한)</b><br>장점 = <b>관리 부담이 크게 줄고 최소 권한·직무 분리를 자연스럽게 구현</b></div></div></div><p class='on-key'><span class='lbl'>암기</span><b>MAC=규칙(등급)·시스템 강제</b>, <b>DAC=신분·소유자 재량</b>, <b>RBAC=역할·조직 구조</b>. \"누가 권한을 정하는가\"만 물으면 다 풀린다.</p>"
      }
    ],
    "finalLiner": "<b>MAC=관리자가 정한 보안등급으로 시스템이 강제(규칙 기반, 보안 최강·복잡, SELinux)</b> / <b>DAC=소유자 재량(신분 기반, rwx·GRANT·DACL, 권한 전파와 트로이 목마에 취약)</b> / <b>RBAC=역할에 권한을 묶는 Non-DAC(역할 계층·직무 분리·기수 제약, 기업에 가장 현실적)</b>",
    "related": ["accessctl", "accessmatrix", "accessmodel"]
  },
  {
    "id": "accessmatrix",
    "term": "접근 통제 매트릭스 — ACL과 자격 목록",
    "en": "Access Control Matrix / ACL / Capability List",
    "cat": "정보보안 일반",
    "tags": ["행=주체·열=객체", "ACL=객체(열) 기준", "CL=주체(행) 기준", "희소 행렬이라 비효율", "능력(Capability)=티켓"],
    "oneLiner": "접근 통제 매트릭스는 행에 주체·열에 객체를 놓고 권한을 적은 표 / 이 표를 열(객체) 기준으로 쪼개면 ACL, 행(주체) 기준으로 쪼개면 자격 목록(Capability List)",
    "blocks": [
      {
        "k": "def",
        "title": "접근 통제 매트릭스",
        "d": "<b>접근 통제 행렬(Access Control Matrix)</b> — <b>행(가로)에 주체</b>, <b>열(세로)에 객체</b>를 놓고 칸마다 <b>허용된 접근 권한</b>을 적은 표. 접근 통제를 표현하는 <b>가장 기본적인 개념 모델</b>.<pre>            파일A      파일B      프린터\n홍길동      R, W       R          -\n김철수      R          R, W, X    W\n관리자      R, W, X    R, W, X    W</pre><p class='on-key'><span class='lbl'>한계</span>주체와 객체가 늘면 <b>표가 폭발적으로 커지고 대부분의 칸이 비어(희소 행렬)</b> 그대로 저장하기엔 비효율적이다. 그래서 <b>행 단위·열 단위로 쪼개서</b> 구현한다.</p>"
      },
      {
        "k": "warn",
        "title": "ACL vs 자격 목록 (쪼개는 방향이 핵심)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>ACL (Access Control List) — 열(객체) 기준</span><div class='row'><b>객체마다</b> \"누가 나에게 무엇을 할 수 있는지\" 목록을 붙인다.<br>예: 파일A → {홍길동: RW, 김철수: R}<br>장점 <b>\"이 파일에 누가 접근 가능한가\"를 바로 알 수 있다</b><br>단점 <b>\"이 사용자가 접근 가능한 자원 전체\"를 알려면 모든 객체를 뒤져야</b> 한다<br>구현: <b>리눅스 퍼미션·윈도우 DACL·방화벽 룰</b></div></div><div class='cmp-item'><span class='cmp-label'>자격(능력) 목록 — Capability List, 행(주체) 기준</span><div class='row'><b>주체마다</b> \"내가 무엇에 무엇을 할 수 있는지\" 목록(<b>티켓</b>)을 들려 준다.<br>예: 홍길동 → {파일A: RW, 파일B: R}<br>장점 <b>주체별 권한 파악·이양이 쉽다</b>, 분산 환경에 적합<br>단점 <b>객체 기준으로 누가 접근하는지 파악이 어렵고, 티켓 위조·회수(폐기)가 까다롭다</b><br>구현: <b>커버로스 티켓</b>, 케이퍼빌리티 기반 OS</div></div></div><p class='on-key'><span class='lbl'>한 줄</span><b>ACL=문에 붙인 출입 명단(객체 중심)</b>, <b>Capability=손에 쥔 출입증(주체 중심)</b>.</p>"
      }
    ],
    "finalLiner": "접근 통제 행렬 = <b>행(주체) × 열(객체)</b>, 희소해서 쪼개 구현 / <b>ACL=열(객체) 기준 — 문에 붙인 명단</b>(리눅스 퍼미션·DACL·방화벽 룰), \"이 자원에 누가?\"에 강함 / <b>Capability List=행(주체) 기준 — 손에 쥔 출입증</b>(커버로스 티켓), \"이 사람이 무엇을?\"에 강하지만 <b>회수·위조 관리가 어렵다</b>",
    "related": ["macdac", "accessctl", "kerberos"]
  },
  {
    "id": "accessmodel",
    "term": "접근 통제 모델 — BLP · Biba · 클락-윌슨 · 만리장성",
    "en": "Bell-LaPadula / Biba / Clark-Wilson / Chinese Wall",
    "cat": "정보보안 일반",
    "tags": ["BLP=기밀성", "No Read Up·No Write Down", "Biba=무결성", "No Read Down·No Write Up", "만리장성=이해충돌 방지"],
    "oneLiner": "BLP는 기밀성 모델로 위를 못 읽고 아래로 못 쓰며(NRU·NWD), Biba는 무결성 모델로 아래를 못 읽고 위로 못 쓴다(NRD·NWU) / 클락-윌슨은 상용 무결성, 만리장성은 이해충돌 방지 모델",
    "blocks": [
      {
        "k": "warn",
        "title": "벨-라파듈라 모델 (BLP) — 기밀성",
        "d": "미 국방부용으로 만들어진 <b>최초의 수학적 보안 모델</b>. 목표는 오직 <b>기밀성</b>(정보가 아래로 새지 않게).<ul class='klist'><li><b>단순 보안 규칙(ss-property) = No Read Up</b> — 자기 등급보다 <b>높은 등급을 읽을 수 없다</b></li><li><b>성형 규칙(*-property) = No Write Down</b> — 자기 등급보다 <b>낮은 등급에 쓸 수 없다</b>(높은 등급자가 기밀을 아래로 흘리는 것을 막음)</li><li><b>강제 접근통제(MAC)</b>의 이론적 토대</li><li>한계: <b>무결성을 전혀 보장하지 못한다</b> — 낮은 등급자가 <b>높은 등급 문서에 쓰는 것(Write Up)은 허용</b>되어 오염될 수 있다(Blind Write 문제)</li></ul>"
      },
      {
        "k": "warn",
        "title": "비바 모델 (Biba) — 무결성",
        "d": "BLP를 <b>거꾸로 뒤집은</b> 모델. 목표는 <b>무결성</b>(더러운 정보가 위로 올라오지 않게).<ul class='klist'><li><b>단순 무결성 규칙 = No Read Down</b> — 자기보다 <b>낮은 무결성 등급을 읽을 수 없다</b>(신뢰도 낮은 정보에 오염되지 않게)</li><li><b>성형 무결성 규칙 = No Write Up</b> — 자기보다 <b>높은 무결성 등급에 쓸 수 없다</b></li><li>기밀성은 고려하지 않는다</li></ul><div class='cmp two'><div class='cmp-item'><span class='cmp-label'>BLP (기밀성)</span><div class='row'><b>NRU + NWD</b> — \"위를 못 읽고, 아래로 못 쓴다\"</div></div><div class='cmp-item'><span class='cmp-label'>Biba (무결성)</span><div class='row'><b>NRD + NWU</b> — \"아래를 못 읽고, 위로 못 쓴다\"</div></div></div><p class='on-key'><span class='lbl'>암기</span><b>기밀성은 새 나가는 게 문제라 \"아래로 쓰기\" 금지</b>, <b>무결성은 오염이 문제라 \"위로 쓰기\" 금지</b>. 이 한 줄만 잡으면 네 규칙이 다 따라온다.</p>"
      },
      {
        "k": "note",
        "title": "클락-윌슨 · 만리장성 모델",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>클락-윌슨 (Clark-Wilson) — 상업용 무결성</span><div class='row'>금융·회계 등 <b>상업 환경의 무결성</b>에 초점. 사용자가 데이터를 <b>직접 건드리지 못하게</b> 하고 <b>검증된 프로그램(Well-formed Transaction)</b>을 통해서만 변경하게 한다. <b>직무 분리</b>를 모델에 명시적으로 포함</div></div><div class='cmp-item'><span class='cmp-label'>만리장성 (Chinese Wall / Brewer-Nash)</span><div class='row'><b>이해 충돌(Conflict of Interest) 방지</b> 모델. 컨설팅·법률 회사에서 <b>A사 자료를 본 사람은 경쟁사인 B사 자료를 볼 수 없게</b> 벽을 세운다. <b>이전에 접근한 이력에 따라 권한이 동적으로 바뀌는</b> 것이 특징</div></div><div class='cmp-item'><span class='cmp-label'>기타</span><div class='row'><b>접근 통제 행렬 모델</b>(HRU) · <b>격자(Lattice) 모델</b>(등급 격자로 상·하한 결정) · <b>정보 흐름 모델</b></div></div></div>"
      }
    ],
    "finalLiner": "<b>BLP=기밀성: No Read Up + No Write Down</b>(무결성 미보장) / <b>Biba=무결성: No Read Down + No Write Up</b> / <b>클락-윌슨=상업용 무결성, 검증된 프로그램으로만 변경 + 직무 분리</b> / <b>만리장성(Brewer-Nash)=이해충돌 방지, 접근 이력에 따라 권한이 동적으로 변함</b>",
    "related": ["macdac", "secureos", "accessctl"]
  },
  {
    "id": "secureos",
    "term": "Secure OS와 Secure DBMS",
    "en": "Secure OS / Trusted Computing Base",
    "cat": "정보보안 일반",
    "tags": ["보안 커널·TCB", "참조 모니터 구현", "커널 레벨 강제 통제", "TCSEC 등급", "다중 등급 DBMS"],
    "oneLiner": "Secure OS=기존 OS 커널에 보안 커널(참조 모니터)을 심어 강제 접근통제를 적용한 운영체제 / TCB는 보안을 책임지는 신뢰 구성요소 전체 / Secure DBMS는 여기에 다중 등급·추론 방지를 더한 DBMS",
    "blocks": [
      {
        "k": "def",
        "title": "Secure OS (보안 운영체제)",
        "d": "기존 OS의 <b>커널 수준에 보안 기능을 내장</b>해, 응용 프로그램이나 root조차 <b>정책을 우회할 수 없게</b> 만든 운영체제.<ul class='klist'><li>핵심 구성 = <b>참조 모니터 개념 + 이를 구현한 보안 커널</b></li><li><b>TCB(Trusted Computing Base, 신뢰 컴퓨팅 기반)</b> — 시스템의 보안을 책임지는 <b>하드웨어·펌웨어·소프트웨어의 총합</b>. <b>작을수록 검증이 쉬워 안전</b>하다</li><li>주요 기능: <b>강제적 접근통제(MAC)</b> · 사용자 식별·인증 · <b>해킹 방어(루트 권한 제한)</b> · <b>감사 기록</b> · 객체 재사용 방지 · 침입 탐지</li><li>대표: <b>SELinux</b>, AppArmor, Trusted Solaris</li></ul><p class='on-key'><span class='lbl'>가치</span>애플리케이션이 뚫려도 <b>커널이 정책으로 막아 피해 확산을 차단</b>한다. 방화벽·백신이 못 하는 \"마지막 방어선\" 역할.</p>"
      },
      {
        "k": "note",
        "title": "평가 기준 (TCSEC · CC)",
        "d": "<ul class='klist'><li><b>TCSEC(오렌지북)</b> — 미국의 옛 기준. <b>D(최소) → C(임의적 보호, C1·C2) → B(강제적 보호, B1·B2·B3) → A(검증된 보호)</b>. <b>B등급부터 MAC 적용</b>이 포인트</li><li><b>ITSEC</b> — 유럽 기준. 기능과 <b>보증(Assurance)</b>을 분리해 평가</li><li><b>CC(Common Criteria, ISO/IEC 15408)</b> — <b>현재의 국제 공통 평가 기준</b>. 보증 등급 <b>EAL1~EAL7</b>(숫자가 클수록 엄격). 용어 <b>PP(보호 프로파일)</b>·<b>ST(보안 목표명세서)</b>·<b>TOE(평가 대상)</b></li></ul>"
      },
      {
        "k": "note",
        "title": "Secure DBMS (보안 DBMS)",
        "d": "일반 DBMS의 접근통제(DAC)에 더해 <b>등급 기반 강제 통제</b>를 적용한 DBMS.<ul class='klist'><li><b>다중 등급 보안(MLS)</b> — 테이블·행·<b>컬럼(셀) 단위</b>까지 보안 등급을 매겨 통제</li><li><b>다중 인스턴스화(Polyinstantiation)</b> — 같은 키에 등급별로 다른 행을 두어 <b>추론·존재 노출 차단</b></li><li><b>추론·집성 방지</b>, <b>감사 기록 보호</b>, 저장 데이터 암호화</li><li>상세 기법은 <b>PART 03 「데이터베이스 보안 기법」 카드</b>와 이어진다</li></ul>"
      }
    ],
    "finalLiner": "Secure OS=<b>커널에 보안 커널(참조 모니터)을 심어 root도 못 뚫는 MAC 적용</b>, <b>TCB는 작을수록 안전</b>, 대표 <b>SELinux</b> / 평가 <b>TCSEC(D→C→B→A, B등급부터 MAC) · CC(EAL1~7, PP·ST·TOE)</b> / Secure DBMS=<b>다중 등급 보안 + 다중 인스턴스화로 추론 차단</b>",
    "related": ["accessmodel", "dbsecway", "macdac"]
  },
  {
    "id": "symkey",
    "term": "대칭키 암호 — 정의와 종류",
    "en": "Symmetric Key Cryptography",
    "cat": "정보보안 일반",
    "tags": ["암호화·복호화 키가 같음", "빠르다·키 분배가 문제", "블록 vs 스트림", "DES·AES·SEED·ARIA", "n(n-1)/2개의 키"],
    "oneLiner": "대칭키=암호화와 복호화에 같은 키를 쓰는 방식 / 빠르고 대용량에 적합하지만 키 분배와 키 개수(n(n-1)/2)가 근본 문제 / 블록 암호(DES·AES·SEED·ARIA)와 스트림 암호(RC4)로 나뉜다",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 장단점",
        "d": "<b>대칭키(비밀키·관용) 암호</b> — <b>암호화 키와 복호화 키가 같다</b>. 송·수신자가 <b>미리 같은 키를 공유</b>해야 한다.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>장점</span><div class='row'><b>속도가 매우 빠르다</b>(공개키보다 수백~수천 배) → <b>대용량 데이터 암호화에 적합</b>, 키 길이가 짧아도 안전</div></div><div class='cmp-item'><span class='cmp-label'>단점</span><div class='row'><b>키 분배(교환) 문제</b> — 키를 안전하게 전달할 방법이 없다<br><b>키 관리 문제</b> — n명이 서로 통신하려면 <b>n(n-1)/2개</b>의 키가 필요(100명이면 4,950개)<br><b>부인방지 불가</b> — 둘 다 같은 키를 가져 제3자에게 증명이 안 된다</div></div></div><p class='on-key'><span class='lbl'>계산</span>키 개수 문제는 계산으로 출제된다. <b>대칭키 = n(n−1)/2</b>, <b>공개키 = 2n</b>(각자 한 쌍씩).</p>"
      },
      {
        "k": "note",
        "title": "블록 암호 vs 스트림 암호",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>블록 암호 (Block Cipher)</span><div class='row'>평문을 <b>일정 길이 블록(64·128비트)으로 잘라</b> 암호화. <b>혼돈(Confusion)과 확산(Diffusion)</b>을 반복.<br>운용 모드 <b>ECB·CBC·CFB·OFB·CTR</b>(ECB는 같은 평문이 같은 암호문이 되어 <b>사용 금지</b>)</div></div><div class='cmp-item'><span class='cmp-label'>스트림 암호 (Stream Cipher)</span><div class='row'>키 스트림을 만들어 평문과 <b>비트 단위 XOR</b>. <b>매우 빠르고 하드웨어 구현이 간단</b>해 <b>실시간·무선 통신</b>에 적합.<br>예: <b>RC4</b>(취약해 폐기), A5(GSM), LFSR 기반. 이론적 완전 비밀은 <b>일회용 패드(OTP)</b></div></div></div>"
      },
      {
        "k": "warn",
        "title": "주요 대칭키 알고리즘 (숫자로 외운다)",
        "d": "<ul class='klist'><li><b>DES</b> — 블록 <b>64비트</b>, 키 <b>56비트</b>(패리티 포함 64), <b>Feistel 구조 16라운드</b>. <b>키가 짧아 전수조사로 깨짐</b></li><li><b>3DES</b> — DES를 <b>3번</b> 적용(EDE). 안전하지만 <b>느리다</b></li><li><b>AES</b> — <b>DES를 대체한 현재 표준</b>. 원래 이름 <b>Rijndael</b>, 블록 <b>128비트</b>, 키 <b>128·192·256비트</b>, <b>SPN 구조</b>(Feistel 아님)</li><li><b>SEED</b> — <b>한국(KISA)</b> 개발, 블록 128비트, 키 128/256비트</li><li><b>ARIA</b> — <b>한국 국가 표준</b>, 블록 128비트, 키 128/192/256, <b>ISPN 구조</b>. 이름은 학·연·관(Academy·Research Institute·Agency)에서 유래</li><li><b>HIGHT</b> — 한국, <b>경량</b>(RFID·센서용), 블록 64비트</li><li>기타: <b>IDEA</b>(PGP에 사용) · <b>Blowfish·Twofish</b> · <b>RC5</b> · <b>LEA</b>(한국 경량 고속)</li></ul><p class='on-key'><span class='lbl'>구조 구분</span><b>Feistel 구조 = DES·3DES·SEED</b>(암·복호화 구조가 같음), <b>SPN 구조 = AES·ARIA</b>. 이 짝을 바꿔 내는 문항이 흔하다.</p>"
      }
    ],
    "finalLiner": "대칭키=<b>같은 키</b>, <b>빠르지만 키 분배·키 개수 n(n−1)/2·부인방지 불가</b> / <b>블록(ECB·CBC·CTR)</b> vs <b>스트림(XOR, RC4)</b> / <b>DES=블록64·키56·Feistel16 → AES=Rijndael·블록128·키128/192/256·SPN</b> / 한국 <b>SEED(Feistel)·ARIA(ISPN)·HIGHT·LEA</b>",
    "related": ["pubkey", "accessctl"]
  },
  {
    "id": "pubkey",
    "term": "공개키 암호 — 키 분배 원리와 종류",
    "en": "Public Key (Asymmetric) Cryptography",
    "cat": "정보보안 일반",
    "tags": ["공개키로 암호화·개인키로 복호화", "키 분배 문제 해결", "RSA=소인수분해", "ECC=타원곡선·짧은 키", "디피-헬만=키 교환"],
    "oneLiner": "공개키 암호=키를 공개키·개인키 한 쌍으로 나눠 공개키로 암호화하고 개인키로 복호화 / 대칭키의 키 분배 문제를 풀었고 전자서명이 가능해졌지만 속도가 느려 실제로는 하이브리드로 쓴다",
    "blocks": [
      {
        "k": "def",
        "title": "원리 — 왜 키 분배 문제가 풀리는가",
        "d": "<b>공개키(비대칭) 암호</b> — 수학적으로 연결된 <b>공개키(누구나 알아도 됨)</b>와 <b>개인키(절대 비공개)</b> 한 쌍을 쓴다. <b>한쪽으로 잠그면 다른 쪽으로만 열린다.</b><div class='cmp two'><div class='cmp-item'><span class='cmp-label'>기밀성 — 수신자의 공개키로 암호화</span><div class='row'>누구나 <b>수신자의 공개키</b>로 암호화할 수 있지만, <b>수신자의 개인키를 가진 본인만</b> 열 수 있다 → <b>키를 미리 나눠 가질 필요가 없다</b></div></div><div class='cmp-item'><span class='cmp-label'>인증·부인방지 — 송신자의 개인키로 서명</span><div class='row'><b>송신자의 개인키</b>로 서명하면 <b>송신자의 공개키</b>로 누구나 검증 가능 → <b>전자서명</b>이 성립(대칭키로는 불가능했던 것)</div></div></div><p class='on-key'><span class='lbl'>함정</span><b>\"무엇으로 암호화하나\"가 목적에 따라 다르다.</b> 기밀성=<b>수신자 공개키</b>, 서명=<b>송신자 개인키</b>. 이걸 바꿔 내는 문항이 가장 많다.</p>"
      },
      {
        "k": "note",
        "title": "주요 알고리즘 (근거가 되는 수학 문제로 구분)",
        "d": "<ul class='klist'><li><b>RSA</b> — <b>소인수분해의 어려움</b>에 기반. <b>암호화와 전자서명 모두 가능</b>한 가장 대표적인 알고리즘. 키 길이 <b>2048비트 이상</b> 권장</li><li><b>디피-헬만(Diffie-Hellman)</b> — <b>이산대수 문제</b> 기반. <b>암호화가 아니라 \"키 교환(공유)\" 전용</b>. 공개된 채널에서 서로 비밀 키를 만들어 낸다. <b>인증 기능이 없어 중간자 공격에 취약</b> → 서명과 함께 써야 함</li><li><b>ElGamal</b> — 이산대수 기반. <b>암호화와 서명 모두</b> 가능</li><li><b>DSA</b> — 이산대수 기반. <b>전자서명 전용</b>(암호화 불가)</li><li><b>ECC(타원곡선)</b> — <b>타원곡선 이산대수</b> 기반. <b>훨씬 짧은 키로 같은 안전성</b>(ECC 256비트 ≈ RSA 3072비트) → <b>모바일·IoT에 유리</b></li><li><b>Rabin</b>(소인수분해) · <b>배낭(Knapsack)</b>(부분합 문제, 깨짐)</li></ul>"
      },
      {
        "k": "warn",
        "title": "대칭키 vs 공개키 비교 (표로 통째 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>대칭키</span><div class='row'>키: <b>암·복호화 동일</b> / 속도 <b>매우 빠름</b> / 키 개수 <b>n(n−1)/2</b> / <b>키 분배가 어렵다</b> / <b>부인방지 불가</b> / 용도: <b>대용량 데이터 암호화</b></div></div><div class='cmp-item'><span class='cmp-label'>공개키</span><div class='row'>키: <b>공개키·개인키 쌍</b> / 속도 <b>느림</b>(수백~수천 배) / 키 개수 <b>2n</b> / <b>키 분배 문제 해결</b> / <b>부인방지 가능(전자서명)</b> / 용도: <b>키 교환·전자서명·인증</b></div></div></div><p class='on-key'><span class='lbl'>실제 사용 — 하이브리드</span>둘 중 하나만 쓰지 않는다. <b>데이터는 빠른 대칭키로 암호화하고, 그 대칭키만 공개키로 암호화해</b> 함께 보낸다. 이것이 <b>전자봉투</b>이며 <b>SSL/TLS·PGP·SET</b>가 모두 이 방식이다.</p>"
      }
    ],
    "finalLiner": "공개키=<b>기밀성은 수신자 공개키로 암호화, 서명은 송신자 개인키로</b> / <b>RSA=소인수분해(암호화+서명)</b>, <b>디피-헬만=이산대수·키 교환 전용(중간자 취약)</b>, <b>DSA=서명 전용</b>, <b>ECC=짧은 키로 같은 안전성(모바일)</b> / 대칭키는 <b>빠름·n(n−1)/2·부인방지 불가</b>, 공개키는 <b>느림·2n·부인방지 가능</b> → 실제로는 <b>하이브리드(전자봉투)</b>",
    "related": ["symkey", "ssl", "set"]
  }
]);
