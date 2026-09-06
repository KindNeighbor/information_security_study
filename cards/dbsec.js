/* 애플리케이션 보안 — 데이터베이스 보안 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "db",
    "term": "데이터베이스 · DBMS 개요와 구성요소",
    "en": "Database / Database Management System",
    "cat": "애플리케이션 보안",
    "tags": ["공용 데이터의 통합 집합", "DBMS=정의·조작·제어", "3단계 스키마(외부·개념·내부)", "논리적/물리적 독립성", "DBA"],
    "oneLiner": "DB=여러 사용자가 공용으로 쓰는 통합·저장된 운영 데이터 / DBMS의 3대 기능=정의·조작·제어 / 3단계 스키마(외부·개념·내부)로 데이터 독립성 확보",
    "blocks": [
      {
        "k": "def",
        "title": "데이터베이스 정의 (4가지 성질로 출제)",
        "d": "<b>데이터베이스(Database)</b> — 여러 응용 시스템이 <b>공용</b>으로 쓰기 위해 <b>통합·저장</b>한 <b>운영 데이터</b>의 집합.<ul class='klist'><li><b>통합 데이터(Integrated)</b> — 같은 자료의 중복을 최소화</li><li><b>저장 데이터(Stored)</b> — 컴퓨터가 접근 가능한 매체에 저장</li><li><b>운영 데이터(Operational)</b> — 조직의 업무 수행에 반드시 필요한 자료(임시 자료가 아님)</li><li><b>공용 데이터(Shared)</b> — 여러 사용자가 동시에 함께 사용</li></ul>"
      },
      {
        "k": "note",
        "title": "DBMS의 3대 기능 — 정의 · 조작 · 제어",
        "d": "<b>DBMS(DataBase Management System)</b> = 사용자와 DB 사이에서 데이터를 관리해 주는 소프트웨어. 응용 프로그램이 파일을 직접 다루지 않게 해 준다.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>정의 기능 (Definition)</span><div class='row'>데이터의 <b>구조·형식·제약조건</b>을 정한다 → <b>DDL</b>(CREATE·ALTER·DROP)</div></div><div class='cmp-item'><span class='cmp-label'>조작 기능 (Manipulation)</span><div class='row'>데이터를 <b>넣고·읽고·고치고·지운다</b> → <b>DML</b>(INSERT·SELECT·UPDATE·DELETE)</div></div><div class='cmp-item'><span class='cmp-label'>제어 기능 (Control)</span><div class='row'><b>무결성·보안(권한)·병행 제어·회복</b>을 담당 → <b>DCL</b>(GRANT·REVOKE·COMMIT·ROLLBACK)</div></div></div><p class='on-key'><span class='lbl'>보안 포인트</span><b>보안·권한 관리는 세 번째 '제어 기능'</b>에 속한다. \"DBMS의 어느 기능이냐\"로 자주 물어본다.</p>"
      },
      {
        "k": "note",
        "title": "구성요소 · 3단계 스키마",
        "d": "<b>스키마(Schema)</b> = DB의 구조와 제약조건을 적어 둔 <b>설계도</b>. ANSI/SPARC는 이를 3단계로 나눈다.<div class='evo'><div class='evo-step'><span class='es-name'>외부 스키마 (External)</span><span class='es-note'>사용자·응용 프로그램이 보는 관점. 여러 개 존재. = 서브스키마·뷰</span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>개념 스키마 (Conceptual)</span><span class='es-note'>조직 전체가 보는 통합 관점. <b>DB당 하나</b>. 그냥 \"스키마\"라 하면 이것</span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>내부 스키마 (Internal)</span><span class='es-note'>실제 저장 구조·인덱스·접근 경로. 물리적 저장 관점</span></div></div><ul class='klist'><li><b>논리적 독립성</b> — 개념 스키마가 바뀌어도 외부 스키마(응용 프로그램)는 영향 없음</li><li><b>물리적 독립성</b> — 내부 스키마(저장 장치)가 바뀌어도 개념 스키마는 영향 없음</li><li><b>인스턴스(Instance)</b> — 스키마에 실제로 채워진 그 순간의 데이터 값</li><li><b>DBA(DataBase Administrator)</b> — 스키마 정의, <b>권한 부여·회수</b>, 백업·회복, 성능 관리를 맡는 사람</li></ul>"
      },
      {
        "k": "safe",
        "title": "DB를 쓰면 좋은 점 / 나쁜 점",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>장점</span><div class='row'>중복 최소화 · 데이터 <b>일관성·무결성</b> 유지 · <b>공용 사용</b> · 보안(권한) 통제 · 데이터 독립성</div></div><div class='cmp-item'><span class='cmp-label'>단점</span><div class='row'>전문가(DBA) 필요 · 비용 큼 · <b>백업/회복이 어려움</b> · 시스템이 복잡 · <b>한 곳이 무너지면 전체가 마비</b></div></div></div>"
      }
    ],
    "finalLiner": "DB=<b>통합·저장·운영·공용</b> 데이터 / DBMS 3대 기능=<b>정의(DDL)·조작(DML)·제어(DCL)</b>이고 <b>보안은 제어 기능</b> / 3단계 스키마=<b>외부(사용자·뷰)→개념(DB당 1개)→내부(저장 구조)</b>, 여기서 <b>논리적·물리적 데이터 독립성</b>이 나온다",
    "related": ["dbmodel", "sqlcmd", "dbsecway"]
  },
  {
    "id": "dbmodel",
    "term": "데이터 모델 · 관계형 모델 · ERD",
    "en": "Data Model / Entity-Relationship Diagram",
    "cat": "애플리케이션 보안",
    "tags": ["계층·망·관계형", "릴레이션=행(튜플)+열(속성)", "기본키·외래키", "ERD=개체·속성·관계", "무결성 제약"],
    "oneLiner": "데이터 모델=계층형·망형·관계형(현재 주류) / 관계형은 릴레이션(표)로, 행=튜플·열=속성, 기본키·외래키로 연결 / ERD는 개체(□)·속성(○)·관계(◇)로 그린 설계도",
    "blocks": [
      {
        "k": "def",
        "title": "데이터 모델의 종류",
        "d": "<b>데이터 모델</b> = 현실 세계의 자료를 DB에 어떤 <b>구조</b>로 담을지 정한 틀.<div class='evo'><div class='evo-step'><span class='es-name'>계층형 (Hierarchical)</span><span class='es-note'>트리 구조. 부모-자식 <b>1:N</b>만 가능. 검색은 빠르나 구조 변경이 어렵다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>망형 (Network)</span><span class='es-note'>그래프 구조. <b>N:M</b> 표현 가능하나 구조가 복잡</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>관계형 (Relational)</span><span class='es-note'><b>표(테이블)</b>로 표현. 구조가 단순하고 SQL로 다룬다. <b>현재 대부분</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>객체지향 / NoSQL</span><span class='es-note'>객체·문서·키값 형태로 저장. 대용량·비정형에 사용</span></div></div>"
      },
      {
        "k": "note",
        "title": "관계형 모델 용어 (표 기준으로 외우기)",
        "d": "관계형 DB의 표 하나 = <b>릴레이션(Relation)</b>.<ul class='klist'><li><b>튜플(Tuple)</b> = <b>행(Row)·레코드</b>. 튜플의 개수 = <b>카디널리티(Cardinality)</b></li><li><b>속성(Attribute)</b> = <b>열(Column)·필드</b>. 속성의 개수 = <b>차수(Degree)</b></li><li><b>도메인(Domain)</b> = 한 속성이 가질 수 있는 값의 범위(예: 성별 = 남/여)</li></ul><div class='cmp'><div class='cmp-item'><span class='cmp-label'>기본키 (Primary Key)</span><div class='row'>튜플을 <b>유일하게 구분</b>하는 속성. <b>중복 불가 · NULL 불가</b></div></div><div class='cmp-item'><span class='cmp-label'>후보키 / 대체키</span><div class='row'>기본키가 될 자격이 있는 키가 <b>후보키</b>, 그중 안 뽑힌 나머지가 <b>대체키</b></div></div><div class='cmp-item'><span class='cmp-label'>외래키 (Foreign Key)</span><div class='row'>다른 릴레이션의 기본키를 참조하는 속성. <b>테이블끼리 연결하는 고리</b></div></div></div>"
      },
      {
        "k": "note",
        "title": "무결성 제약조건 (3가지)",
        "d": "<ul class='klist'><li><b>개체 무결성(Entity Integrity)</b> — 기본키는 <b>NULL이 될 수 없고 중복될 수 없다</b></li><li><b>참조 무결성(Referential Integrity)</b> — 외래키 값은 <b>참조하는 릴레이션의 기본키에 실제로 있는 값</b>이거나 NULL이어야 한다</li><li><b>도메인 무결성(Domain Integrity)</b> — 속성 값은 <b>정해진 도메인(자료형·범위)</b> 안에 있어야 한다</li></ul><p class='on-key'><span class='lbl'>보안 연결</span>무결성 제약은 <b>DB 보안 3요소 중 무결성</b>을 DBMS가 스스로 지켜 주는 장치다.</p>"
      },
      {
        "k": "note",
        "title": "ERD (개체-관계 다이어그램)",
        "d": "<b>ERD(Entity-Relationship Diagram)</b> — 현실의 대상과 그 사이의 관계를 그림으로 그린 <b>DB 설계도</b>. 피터 첸(Peter Chen) 표기법 기준.<ul class='klist'><li><b>□ 사각형 = 개체(Entity)</b> — 관리 대상(학생·상품)</li><li><b>○ 타원 = 속성(Attribute)</b> — 개체가 가진 정보(이름·가격). 기본키 속성은 <b>밑줄</b></li><li><b>◇ 마름모 = 관계(Relationship)</b> — 개체 사이의 연관(수강·주문)</li><li><b>― 선</b> — 개체와 속성·관계를 연결. 선 위에 <b>1:1 · 1:N · N:M</b>(관계 차수, 카디널리티)를 적는다</li></ul><p class='on-key'><span class='lbl'>정규화</span>중복·이상현상(삽입·삭제·갱신 이상)을 없애려고 테이블을 쪼개는 작업. <b>1NF(원자값) → 2NF(부분 함수 종속 제거) → 3NF(이행 함수 종속 제거) → BCNF</b> 순서로만 기억해도 충분하다.</p>"
      }
    ],
    "finalLiner": "모델=<b>계층형(1:N 트리) → 망형(N:M) → 관계형(표, 현재 주류)</b> / 릴레이션: <b>행=튜플(카디널리티)·열=속성(차수)</b>, <b>기본키=중복·NULL 불가</b>, <b>외래키=다른 테이블 기본키 참조</b> / 무결성=<b>개체·참조·도메인</b> / ERD=<b>□개체 ○속성 ◇관계</b> / 정규화 <b>1NF→2NF→3NF→BCNF</b>",
    "related": ["db", "sqlcmd", "dbthreat"]
  },
  {
    "id": "sqlcmd",
    "term": "MySQL · Oracle과 SQL 명령 (권한 부여)",
    "en": "SQL / GRANT / REVOKE",
    "cat": "애플리케이션 보안",
    "tags": ["DDL·DML·DCL", "GRANT ... TO ...", "REVOKE ... FROM ...", "WITH GRANT OPTION", "CASCADE"],
    "oneLiner": "SQL은 DDL(구조)·DML(데이터)·DCL(권한·트랜잭션)로 나뉘며, 보안에서 핵심은 DCL의 GRANT(부여)·REVOKE(회수) / MySQL=오픈소스·웹, Oracle=상용·대규모",
    "blocks": [
      {
        "k": "def",
        "title": "MySQL vs Oracle",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>MySQL (현 MariaDB 계열)</span><div class='row'>오픈소스·경량. <b>웹 서비스(LAMP)</b>에서 널리 사용. 기본 포트 <b>3306</b>. 관리 정보는 <b><code>mysql</code> 데이터베이스</b>(user 테이블 등)에 저장</div></div><div class='cmp-item'><span class='cmp-label'>Oracle</span><div class='row'>상용·대규모 기업용. 안정성·기능이 강함. 기본 포트 <b>1521</b>(리스너). 관리 뷰는 <b><code>DBA_USERS</code>·<code>DBA_ROLES</code></b> 등</div></div></div><p class='on-key'><span class='lbl'>DB별 기본 계정</span>설치 직후 남는 <b>기본 계정·기본 패스워드</b>(Oracle의 <code>scott/tiger</code>, <code>system</code> 등)를 그대로 두는 것이 대표적 취약점이다. <b>불필요 계정 삭제·패스워드 변경</b>이 첫 조치.</p>"
      },
      {
        "k": "note",
        "title": "SQL 3분류 — DDL · DML · DCL",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>DDL — 정의어 (Data Definition Language)</span><div class='row'><b>CREATE</b>(생성) · <b>ALTER</b>(변경) · <b>DROP</b>(삭제) · TRUNCATE. 테이블·뷰·인덱스 등 <b>구조</b>를 다룬다</div></div><div class='cmp-item'><span class='cmp-label'>DML — 조작어 (Data Manipulation Language)</span><div class='row'><b>SELECT</b>(조회) · <b>INSERT</b>(삽입) · <b>UPDATE</b>(수정) · <b>DELETE</b>(삭제). 안에 든 <b>데이터</b>를 다룬다</div></div><div class='cmp-item'><span class='cmp-label'>DCL — 제어어 (Data Control Language)</span><div class='row'><b>GRANT</b>(권한 부여) · <b>REVOKE</b>(권한 회수) · <b>COMMIT</b>(확정) · <b>ROLLBACK</b>(취소). <b>보안과 트랜잭션</b>을 다룬다</div></div></div><p class='on-key'><span class='lbl'>함정</span><b>DELETE는 DML, DROP·TRUNCATE는 DDL</b>이다. DELETE는 행을 지우고 롤백 가능, DROP은 테이블 자체를 없앤다.</p>"
      },
      {
        "k": "note",
        "title": "권한 부여 · 회수 (GRANT / REVOKE)",
        "d": "<pre>-- 권한 부여: GRANT 권한 ON 대상 TO 사용자\nGRANT SELECT, INSERT ON student TO user1;\n\n-- 받은 권한을 남에게 또 줄 수 있게 하려면\nGRANT SELECT ON student TO user1 WITH GRANT OPTION;\n\n-- 권한 회수: REVOKE 권한 ON 대상 FROM 사용자\nREVOKE INSERT ON student FROM user1;\n\n-- 그 사용자가 남에게 넘긴 권한까지 연쇄 회수\nREVOKE SELECT ON student FROM user1 CASCADE;</pre><ul class='klist'><li><b>GRANT … <u>TO</u></b> / <b>REVOKE … <u>FROM</u></b> — 전치사를 바꿔 내는 함정 문제가 흔하다</li><li><b>WITH GRANT OPTION</b> — 권한을 <b>재부여</b>할 수 있는 옵션. 남발하면 권한이 퍼져 통제 불가</li><li><b>CASCADE</b> — 그 사람이 뿌린 권한까지 <b>연쇄 회수</b>. <b>RESTRICT</b>는 남에게 준 게 있으면 회수를 <b>거부</b></li><li><b>ROLE(역할)</b> — 권한을 묶어 이름을 붙인 것. 사람마다 권한을 주는 대신 역할을 부여 → <b>RBAC</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "권한 관리에서 지켜야 할 원칙",
        "d": "<ul class='klist'><li><b>최소 권한(Least Privilege)</b> — 업무에 꼭 필요한 권한만. 응용 프로그램 계정에 <b>DBA/root 권한을 주지 않는다</b></li><li><b>PUBLIC 권한 회수</b> — 모든 사용자에게 열린 권한(<code>PUBLIC</code>)은 위험하니 제거</li><li><b>계정 분리</b> — 관리자용 · 응용 프로그램용 · 조회 전용을 나눈다</li><li><b>불필요한 저장 프로시저·기본 계정 제거</b> — SQL 인젝션이 성공했을 때 피해 범위를 줄인다</li></ul>"
      }
    ],
    "finalLiner": "<b>DDL=CREATE·ALTER·DROP(구조)</b> / <b>DML=SELECT·INSERT·UPDATE·DELETE(데이터)</b> / <b>DCL=GRANT·REVOKE·COMMIT·ROLLBACK(권한·트랜잭션)</b> / <b>GRANT 권한 ON 대상 TO 사용자</b>, <b>REVOKE … FROM 사용자</b>, 재부여는 <b>WITH GRANT OPTION</b>, 연쇄 회수는 <b>CASCADE</b> / 원칙은 <b>최소 권한</b>",
    "related": ["db", "dbsecway", "dbthreat"]
  },
  {
    "id": "dbthreat",
    "term": "DB 보안 위협 요소와 보안 요구사항",
    "en": "Database Security Threats & Requirements",
    "cat": "애플리케이션 보안",
    "tags": ["집성(Aggregation)", "추론(Inference)", "부적절한 접근 방지", "SQL 인젝션", "내부자 위협"],
    "oneLiner": "DB 고유 위협의 핵심은 집성(조각을 모아 민감 정보 완성)과 추론(허용된 값에서 금지된 값을 유도) / 요구사항은 기밀성·무결성·가용성에 부적절 접근 방지·추론 방지·사용자 인증·감사가 더해진다",
    "blocks": [
      {
        "k": "warn",
        "title": "DB만의 위협 — 집성 vs 추론 (최다 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>집성 (Aggregation)</span><div class='row'>낱개로는 <b>등급이 낮은 정보들을 모아</b> 더 <b>높은 등급의 정보</b>를 만들어 내는 것.<br>예) 직원 개개인의 이름·부서·전화번호는 공개지만, <b>전부 모으면 조직 전체 인력 구조</b>가 드러남</div></div><div class='cmp-item'><span class='cmp-label'>추론 (Inference)</span><div class='row'>접근이 <b>허용된 데이터로부터 논리적으로 유추</b>해 <b>허용되지 않은 데이터</b>를 알아내는 것.<br>예) \"부서 평균 연봉\"과 \"부서원 수 1명\"을 알면 <b>그 사람의 연봉</b>이 그대로 나옴</div></div></div><p class='on-key'><span class='lbl'>구분 요령</span><b>집성=조각을 모아 큰 그림</b>(더하기), <b>추론=아는 값에서 모르는 값을 논리로 끌어냄</b>(빼기·나누기). 대응은 <b>다중 인스턴스화(Polyinstantiation)·분할(Partitioning)·잡음 삽입·질의 제한</b>.</p>"
      },
      {
        "k": "warn",
        "title": "일반적인 DB 보안 위협",
        "d": "<ul class='klist'><li><b>SQL 인젝션</b> — 입력값에 SQL을 섞어 인증 우회·데이터 유출. <b>가장 대표적인 공격</b></li><li><b>권한 오·남용</b> — 과도한 권한을 받은 계정, 퇴사자 계정 미삭제, <b>내부자에 의한 대량 유출</b></li><li><b>기본 계정·약한 패스워드</b> — 설치 시 기본값 방치, 리스너 패스워드 미설정</li><li><b>미패치 취약점</b> — DBMS 자체 버그를 노린 원격 공격</li><li><b>백업 매체 유출</b> — 백업본은 <b>대개 평문</b>이라 통째로 유출되면 DB를 여는 것과 같다</li><li><b>감사 기록 부재·삭제</b> — 누가 무엇을 봤는지 추적 불가</li><li><b>가용성 위협</b> — 삭제·랜섬웨어 암호화·과부하 질의</li></ul>"
      },
      {
        "k": "note",
        "title": "DB 보안 요구사항",
        "d": "<ul class='klist'><li><b>기밀성(Confidentiality)</b> — 인가된 사람만 볼 수 있어야 한다 → 접근통제·암호화</li><li><b>무결성(Integrity)</b> — 데이터가 <b>정확·일관</b>해야 한다 → 무결성 제약, 트랜잭션, 병행 제어</li><li><b>가용성(Availability)</b> — 필요할 때 쓸 수 있어야 한다 → 백업·이중화</li><li><b>부적절한 접근 방지</b> — 인가된 사용자에게도 <b>인가된 데이터만</b> 열어야 한다(뷰·컬럼 단위)</li><li><b>추론 방지</b> — 허용된 질의로 <b>금지된 값이 유도되지 않게</b> 한다</li><li><b>사용자 인증</b> — OS 인증과 <b>별도로</b> DBMS가 다시 확인해야 한다</li><li><b>감사 기능(Audit)</b> — 누가·언제·무엇을 했는지 기록하고 그 기록을 보호</li><li><b>다단계 보호</b> — 데이터마다 <b>등급(민감도)</b>을 매겨 등급별로 통제</li></ul>"
      }
    ],
    "finalLiner": "<b>집성=낮은 등급 조각을 모아 높은 등급 정보 완성</b> / <b>추론=허용된 값에서 금지된 값을 논리로 유도</b>, 대응은 <b>다중 인스턴스화·분할·잡음·질의 제한</b> / 요구사항=<b>기밀·무결·가용 + 부적절한 접근 방지 · 추론 방지 · 사용자 인증 · 감사 · 다단계 보호</b>",
    "related": ["dbsecway", "db", "dbmodel"]
  },
  {
    "id": "dbsecway",
    "term": "데이터베이스 보안 기법 (접근통제·암호화·감사)",
    "en": "Database Security Controls",
    "cat": "애플리케이션 보안",
    "tags": ["DAC·MAC·RBAC", "뷰(View) 기반 통제", "TDE·컬럼 암호화", "마스킹·비식별화", "DB 감사·DAM"],
    "oneLiner": "DB 보안은 접근통제(DAC·MAC·RBAC)+뷰로 볼 범위를 자르고, 암호화(TDE·컬럼·API)로 저장 데이터를 지키며, 감사 로그로 누가 무엇을 봤는지 남기는 3층 구조",
    "blocks": [
      {
        "k": "note",
        "title": "① 접근통제 — 누가 어디까지",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>DAC (임의적 접근통제)</span><div class='row'><b>소유자</b>가 자기 데이터의 권한을 직접 준다. SQL의 <b>GRANT·REVOKE</b>가 바로 DAC. 유연하지만 권한이 퍼지기 쉬움</div></div><div class='cmp-item'><span class='cmp-label'>MAC (강제적 접근통제)</span><div class='row'>데이터에 <b>보안 등급</b>, 사용자에게 <b>인가 등급</b>을 매겨 <b>시스템이 강제</b>. 소유자도 못 바꾼다. 군·정부용</div></div><div class='cmp-item'><span class='cmp-label'>RBAC (역할 기반 접근통제)</span><div class='row'>권한을 <b>역할(ROLE)</b>에 주고 사람에게 역할을 부여. 인사이동에 강해 <b>기업에서 가장 현실적</b></div></div></div>"
      },
      {
        "k": "note",
        "title": "② 뷰(View) · 다중 인스턴스화",
        "d": "<ul class='klist'><li><b>뷰(View)</b> — 원본 테이블에서 <b>필요한 행·열만 보이게 만든 가상 테이블</b>. 사용자에게 테이블 대신 뷰만 주면 <b>주민번호 컬럼은 아예 안 보인다</b> → 부적절한 접근 방지의 대표 수단</li><li><b>다중 인스턴스화(Polyinstantiation)</b> — 같은 키에 대해 <b>등급별로 서로 다른 내용</b>의 행을 여러 개 둔다. 낮은 등급 사용자는 위장된 값을 보게 되어 <b>추론·존재 자체의 노출을 차단</b></li><li><b>분할(Partitioning)</b> — 민감한 데이터를 별도 테이블·DB로 떼어 놓아 집성을 어렵게 한다</li></ul>"
      },
      {
        "k": "safe",
        "title": "③ 암호화 방식 (적용 지점으로 구분)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>TDE (Transparent Data Encryption) — DBMS 내장</span><div class='row'>DBMS가 저장 파일 단위로 <b>알아서</b> 암·복호화. <b>응용 프로그램 수정이 거의 없다</b>(투명). 단, 정상 권한으로 접속한 사람에게는 평문으로 보임</div></div><div class='cmp-item'><span class='cmp-label'>API(플러그인) 방식 — 응용 프로그램에서</span><div class='row'>애플리케이션이 암호화 모듈을 호출해 넣고 뺀다. <b>보안은 강하나 소스 수정이 필요</b></div></div><div class='cmp-item'><span class='cmp-label'>게이트웨이(어플라이언스) 방식</span><div class='row'>DB 앞단 장비가 대신 암·복호화. DB 부하가 적음</div></div></div><ul class='klist'><li><b>일방향 해시</b> — <b>패스워드</b>는 복호화할 필요가 없으므로 <b>해시+솔트</b>로 저장(암호화 아님)</li><li><b>마스킹·비식별화</b> — 화면·개발/테스트용 데이터에서 <code>010-****-1234</code>처럼 가린다. 가명처리·총계처리·범주화</li><li><b>키 관리</b>가 실질적 관건 — 키를 DB 안에 같이 두면 암호화 의미가 사라진다</li></ul>"
      },
      {
        "k": "note",
        "title": "④ 감사(Audit) · DB 접근제어 솔루션",
        "d": "<ul class='klist'><li><b>DB 감사 로그</b> — 접속 계정·시각·실행 SQL·결과 건수를 기록. <b>대량 SELECT·업무 외 시간 접속</b>이 유출 탐지의 핵심 지표</li><li><b>DAM(DB Activity Monitoring)</b> — 네트워크·에이전트로 DB 질의를 실시간 감시·차단</li><li><b>로그 보호</b> — 감사 로그를 <b>DBA도 못 지우게</b> 별도 서버로 분리 저장해야 의미가 있다</li><li><b>DB 방화벽</b> — 허용된 응용 서버·계정·SQL 패턴만 통과시켜 <b>SQL 인젝션·비인가 도구 접속</b> 차단</li></ul><p class='on-key'><span class='lbl'>기본 대책</span>기본 계정·기본 포트 변경, 최소 권한, <b>주기적 패치</b>, 개발·운영 DB 분리, 백업본 암호화.</p>"
      }
    ],
    "finalLiner": "접근통제 <b>DAC(GRANT·소유자)·MAC(등급·시스템 강제)·RBAC(역할)</b> / <b>뷰=볼 범위를 잘라 보여주는 가상 테이블</b>, <b>다중 인스턴스화=등급별 다른 행으로 추론 차단</b> / 암호화 <b>TDE(투명·앱 수정 최소)·API(강하나 소스 수정)·게이트웨이</b>, 패스워드는 <b>해시+솔트</b> / <b>감사 로그는 DBA도 못 지우게 분리 보관</b>",
    "related": ["dbthreat", "sqlcmd", "dbbackup"]
  },
  {
    "id": "dbbackup",
    "term": "데이터베이스 백업과 회복",
    "en": "Database Backup & Recovery",
    "cat": "애플리케이션 보안",
    "tags": ["전체·차등·증분", "핫 백업 vs 콜드 백업", "REDO·UNDO", "RTO·RPO", "3-2-1 규칙"],
    "oneLiner": "백업은 범위로 전체·차등·증분, 서비스 중단 여부로 핫·콜드로 나뉜다 / 회복은 로그를 이용해 완료된 트랜잭션은 REDO, 미완료는 UNDO / 목표치는 RTO(얼마나 빨리)·RPO(얼마나 최근까지)",
    "blocks": [
      {
        "k": "def",
        "title": "범위에 따른 백업 3종 (비교 문제 단골)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>전체 백업 (Full)</span><div class='row'>매번 <b>전부</b> 복사. 백업은 가장 느리고 용량이 크지만 <b>복구가 가장 단순·빠름</b>(전체본 1개만 필요)</div></div><div class='cmp-item'><span class='cmp-label'>차등 백업 (Differential)</span><div class='row'><b>마지막 전체 백업 이후</b> 변경분을 매번 누적해 복사. 복구 = <b>전체 1개 + 최신 차등 1개</b></div></div><div class='cmp-item'><span class='cmp-label'>증분 백업 (Incremental)</span><div class='row'><b>마지막 백업(어떤 것이든) 이후</b> 변경분만. <b>백업이 가장 빠르고 작지만</b>, 복구 = <b>전체 1개 + 그 뒤 증분 전부</b>라 가장 느리고 하나만 손상돼도 위험</div></div></div><p class='on-key'><span class='lbl'>한 줄 정리</span><b>증분=백업이 편하고 복구가 고생</b>, <b>차등=백업이 무겁고 복구가 편함</b>. 기준점이 <b>전체 백업(차등)</b>이냐 <b>직전 백업(증분)</b>이냐가 갈림길.</p>"
      },
      {
        "k": "note",
        "title": "운영 방식·대상에 따른 구분",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>콜드 백업 (Cold / 오프라인)</span><div class='row'>DB를 <b>정지</b>시키고 복사. 일관성이 완벽하나 <b>서비스 중단</b> 필요</div></div><div class='cmp-item'><span class='cmp-label'>핫 백업 (Hot / 온라인)</span><div class='row'>DB를 <b>가동한 채</b> 백업. 중단이 없어 실무 표준이지만 <b>로그(아카이브)와 함께</b>해야 일관성이 맞는다</div></div></div><ul class='klist'><li><b>물리 백업</b> — 데이터 파일·로그 파일을 통째로 복사. 빠르고 대용량에 적합</li><li><b>논리 백업</b> — <code>mysqldump</code>·Oracle <code>expdp</code>처럼 <b>SQL 문/논리 단위</b>로 추출. 이식성이 좋으나 느림</li><li><b>3-2-1 규칙</b> — 사본 <b>3</b>개, 서로 다른 매체 <b>2</b>종, <b>1</b>개는 <b>물리적으로 떨어진 곳</b>(랜섬웨어 대비 오프라인 사본 필수)</li><li><b>복구 훈련</b> — 백업은 <b>복원 테스트를 해봐야</b> 백업이다. 무결성 검증·주기적 리허설</li></ul>"
      },
      {
        "k": "note",
        "title": "회복(Recovery) 기법 — REDO · UNDO",
        "d": "DBMS는 모든 변경을 <b>로그(저널)</b>에 먼저 적고 데이터에 반영한다.<ul class='klist'><li><b>REDO(재실행)</b> — <b>COMMIT까지 끝난</b> 트랜잭션인데 디스크에 반영이 안 됐으면 <b>다시 실행</b>해 반영 → 지속성 보장</li><li><b>UNDO(취소)</b> — <b>COMMIT 못 하고 중단된</b> 트랜잭션은 <b>되돌려</b> 없던 일로 → 원자성 보장</li><li><b>체크포인트(Checkpoint)</b> — 특정 시점 상태를 저장해 두어 회복 시 <b>거기서부터만</b> 검사 → 복구 시간 단축</li><li><b>그림자 페이징(Shadow Paging)</b> — 원본 페이지를 남겨 두고 사본에 작업, 실패 시 원본으로 되돌림</li><li><b>미디어 회복</b> — 디스크 자체가 깨지면 <b>백업본 복원 + 이후 로그 REDO</b></li></ul>"
      },
      {
        "k": "safe",
        "title": "가용성 지표와 이중화",
        "d": "<ul class='klist'><li><b>RTO(Recovery Time Objective)</b> — <b>얼마나 빨리</b> 복구할 것인가(목표 복구 <b>시간</b>)</li><li><b>RPO(Recovery Point Objective)</b> — <b>얼마나 최근 시점까지</b> 살릴 것인가(허용 가능한 <b>데이터 손실량</b>). RPO 0에 가까우려면 실시간 이중화가 필요</li><li><b>RAID</b> — 디스크 장애 대비(1=미러링, 5=패리티 분산). <b>RAID는 백업이 아니다</b> — 실수로 지운 데이터는 그대로 지워진다</li><li><b>이중화</b> — 스탠바이 DB·클러스터·원격지 <b>DRS(재해복구시스템, Mirror·Hot·Warm·Cold Site)</b></li></ul>"
      }
    ],
    "finalLiner": "<b>전체·차등(전체 이후 누적)·증분(직전 이후만)</b> — <b>증분=백업 빠르고 복구 느림</b> / <b>콜드=정지 후, 핫=가동 중</b>, 논리(<code>mysqldump</code>)·물리 / 회복=로그로 <b>완료 트랜잭션 REDO · 미완료 UNDO</b> + <b>체크포인트</b> / <b>RTO=복구 시간 · RPO=손실 허용 시점</b>, <b>RAID는 백업이 아니다</b>",
    "related": ["dbsecway", "db", "netsep"]
  }
]);
