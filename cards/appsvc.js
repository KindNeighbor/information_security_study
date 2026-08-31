/* 네트워크 활용(TCP/IP) — 응용 계층 서비스: 메일·네트워크 관리 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "smtp",
    "term": "SMTP · 메일 프로토콜",
    "en": "Simple Mail Transfer Protocol",
    "cat": "네트워크 보안",
    "tags": ["SMTP 25=송신", "POP3 110·IMAP 143=수신", "MUA→MTA→MDA", "오픈 릴레이", "SPF·DKIM·DMARC"],
    "oneLiner": "SMTP(25)=메일 송신·서버 간 전달 / 수신은 POP3(110, 받고 삭제)·IMAP(143, 서버 보관·동기화) / 평문·발신자 위조에 취약",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 역할 분담",
        "d": "<b>SMTP(Simple Mail Transfer Protocol)</b> — 메일을 <b>보내고(송신)</b> 서버끼리 <b>전달</b>하는 프로토콜. 포트 <b>25</b>(TCP).<p class='on-key'><span class='lbl'>핵심 구분</span><b>SMTP는 '보내기 전용'</b>이다. 사용자가 메일함에서 <b>받아 보는 것</b>은 <b>POP3·IMAP</b>이 담당한다. '메일 수신 프로토콜은?'에 SMTP를 고르면 오답.</p>"
      },
      {
        "k": "note",
        "title": "전달 경로 (MUA → MTA → MDA)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>MUA</div><div class='es-note'>Mail <b>User</b> Agent — 사용자가 쓰는 메일 프로그램(아웃룩 등).</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>MTA</div><div class='es-note'>Mail <b>Transfer</b> Agent — 메일 서버. <b>SMTP로 서버 간 전달</b>(sendmail·postfix).</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>MDA</div><div class='es-note'>Mail <b>Delivery</b> Agent — 수신자 <b>사서함에 저장</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>수신</div><div class='es-note'>사용자가 <b>POP3/IMAP</b>으로 가져감.</div></div></div>"
      },
      {
        "k": "note",
        "title": "POP3 vs IMAP · 포트 정리",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>POP3 (110)</span><div class='row'>서버에서 <b>내려받고 서버에선 삭제</b>(기본). 기기 <b>한 대</b>에서 쓰기 적합, 서버 용량 절약. 오프라인 열람 편함.</div></div><div class='cmp-item'><span class='cmp-label'>IMAP (143)</span><div class='row'>메일을 <b>서버에 그대로 두고</b> 목록만 동기화. <b>여러 기기</b>에서 같은 상태로 확인 가능(요즘 방식).</div></div></div><b>포트 암기</b>: SMTP <b>25</b> · POP3 <b>110</b> · IMAP <b>143</b> / 보안(TLS) 버전 <b>SMTPS 465·submission 587 · POP3S 995 · IMAPS 993</b>.<br><b>MIME</b>(Multipurpose Internet Mail Extensions) — 원래 SMTP는 <b>ASCII 텍스트만</b> 보낼 수 있어서, <b>한글·이미지·첨부파일</b>을 담기 위해 만든 확장 규격."
      },
      {
        "k": "warn",
        "title": "보안 취약점",
        "d": "<ul class='klist'><li><b>평문 전송</b> — 본문과 인증 정보가 그대로 흘러 <b>스니핑</b>에 노출</li><li><b>오픈 릴레이(Open Relay)</b> — <b>아무나 중계</b>해 주도록 열린 메일 서버. <b>스팸 발송지로 악용</b>되어 IP가 차단당한다 → <b>반드시 릴레이 제한</b></li><li><b>발신자 위조(스푸핑)</b> — SMTP는 <b>보내는 사람을 검증하지 않는다</b> → 피싱·<b>스피어 피싱</b>의 출발점</li><li><b>첨부파일</b>을 통한 악성코드 유포</li></ul>"
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<ul class='klist'><li><b>SMTP 인증(SMTP-AUTH)</b> + <b>릴레이 제한</b>(허용 대역만)</li><li><b>전송 구간 암호화</b> — STARTTLS·SMTPS(465/587)</li><li><b>발신자 검증 3종</b>: <b>SPF</b>(허용된 <b>발송 IP</b> 목록을 DNS에 공개) · <b>DKIM</b>(메일에 <b>전자서명</b>) · <b>DMARC</b>(SPF·DKIM 실패 시 <b>처리 정책</b>과 리포트)</li><li><b>본문 자체 암호화·서명</b> — <b>S/MIME</b>·<b>PGP</b></li><li>스팸 필터·첨부 확장자 차단·백신 연동</li></ul>"
      }
    ],
    "finalLiner": "<b>SMTP 25=송신·서버간 전달</b>(수신 아님!) / 수신 <b>POP3 110</b>(받고 삭제) vs <b>IMAP 143</b>(서버 보관·동기화) / 경로 <b>MUA→MTA→MDA</b> / 취약=평문·<b>오픈 릴레이</b>·발신자 위조 → <b>SMTP-AUTH·SPF·DKIM·DMARC·S/MIME</b>",
    "related": ["snmp", "http", "apt"]
  },
  {
    "id": "snmp",
    "term": "SNMP (네트워크 관리 프로토콜)",
    "en": "Simple Network Management Protocol",
    "cat": "네트워크 보안",
    "tags": ["161 요청·162 Trap", "매니저·에이전트·MIB·OID", "Trap=능동 통보", "v1/v2c 커뮤니티 평문", "v3 인증·암호화"],
    "oneLiner": "장비 상태를 수집·제어하는 관리 프로토콜(UDP 161, Trap 162) / 매니저·에이전트·MIB·OID / v1·v2c는 커뮤니티 스트링 평문, v3는 인증·암호화",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 구성 요소",
        "d": "<b>SNMP</b> — 라우터·스위치·서버 등의 <b>상태를 수집하고 설정을 제어</b>하는 표준 관리 프로토콜. <b>UDP</b>를 쓴다.<ul class='klist'><li><b>매니저(Manager)</b> — 관리하는 쪽. 보통 <b>NMS</b>가 담당</li><li><b>에이전트(Agent)</b> — 관리 <b>대상 장비</b>에 올라가 정보를 제공</li><li><b>MIB</b>(Management Information Base) — 관리 정보를 <b>트리 구조로 정의한 DB</b></li><li><b>OID</b>(Object Identifier) — MIB 안의 <b>개별 항목을 가리키는 번호</b>(예: 1.3.6.1.2.1…)</li></ul>"
      },
      {
        "k": "note",
        "title": "포트 · 동작 방식 (시험 포인트)",
        "d": "<b>포트 161</b> — 매니저가 <b>에이전트에게 질의</b>할 때(에이전트가 161에서 수신). <b>포트 162</b> — 에이전트가 <b>Trap을 보낼 때</b>(매니저가 162에서 수신).<p class='on-key'><span class='lbl'>폴링 vs Trap</span>기본은 매니저가 주기적으로 물어보는 <b>폴링</b>(<code>GetRequest</code>·<code>GetNextRequest</code>·<code>SetRequest</code>). 반대로 <b>Trap</b>은 <b>사건이 생겼을 때 에이전트가 먼저</b> 매니저에게 알리는 <b>능동 통보</b>다. '누가 먼저 보내느냐'로 구분한다.</p>주요 메시지: <b>Get</b>(조회)·<b>GetNext</b>(다음 항목)·<b>Set</b>(설정 변경)·<b>Response</b>·<b>Trap</b>(통보). v2에서 <b>GetBulk·Inform</b> 추가."
      },
      {
        "k": "warn",
        "title": "버전별 보안 (핵심)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>v1 / v2c</span><div class='row'>인증 수단이 <b>커뮤니티 스트링</b>(문자열 비밀번호)뿐이고 <b>평문</b>으로 오간다. 기본값이 <b>public(읽기)·private(쓰기)</b>라 <b>안 바꾸면 그대로 뚫린다</b>. v2c는 성능만 개선.</div></div><div class='cmp-item'><span class='cmp-label'>v3</span><div class='row'><b>인증(무결성)·암호화</b> 지원(USM). <b>실무·시험 모두 v3 사용을 권장</b>.</div></div></div>"
      },
      {
        "k": "warn",
        "title": "공격에 어떻게 쓰이나",
        "d": "<ul class='klist'><li><b>정보 수집(정찰)</b> — 커뮤니티 스트링만 알면 <b>장비 종류·OS·인터페이스·라우팅·연결 목록</b>까지 읽어낸다(킬체인 <b>1단계 정찰</b>의 노다지)</li><li><b>설정 변경</b> — 쓰기 권한(private)이 열려 있으면 <b>장비 설정 변경·서비스 중단</b>까지 가능</li><li><b>UDP 기반</b>이라 <b>출발지 위조가 쉽고</b>, <b>증폭 DDoS</b>에 악용된다</li></ul>"
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<b>SNMPv3 사용</b>(인증·암호화) · 기본 <b>커뮤니티 스트링 반드시 변경</b>하고 복잡하게 · <b>읽기 전용</b>으로 제한 · <b>접근 ACL</b>로 관리 서버 IP만 허용 · <b>불필요하면 비활성화</b> · 관리 트래픽은 <b>분리된 관리망</b>으로."
      }
    ],
    "finalLiner": "SNMP=장비 관리(UDP) / <b>161=질의·162=Trap</b> / 구성 <b>매니저·에이전트·MIB·OID</b> / <b>Trap만 에이전트가 먼저</b> 보냄 / <b>v1·v2c=커뮤니티 스트링 평문(public·private)</b> → <b>v3=인증·암호화</b> / 정찰·설정변경·증폭DDoS에 악용",
    "related": ["nms", "netdevice", "killchain"]
  },
  {
    "id": "nms",
    "term": "NMS · 네트워크 관리 (FCAPS)",
    "en": "Network Management System",
    "cat": "네트워크 보안",
    "tags": ["SNMP로 감시·제어", "FCAPS 5대 기능", "장애·구성·계정·성능·보안", "관리망 분리", "NMS 장악=전체 위험"],
    "oneLiner": "SNMP 등을 이용해 네트워크 장비를 감시·제어하는 관리 시스템 / ISO 관리 5대 기능=FCAPS(장애·구성·계정·성능·보안)",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "<b>NMS(Network Management System)</b> — 네트워크 장비의 <b>상태를 한곳에서 감시하고 제어</b>하는 시스템. 주로 <b>SNMP</b>로 정보를 수집하며, SNMP 구조에서 <b>매니저(Manager)</b> 역할을 한다. 장애 알람·트래픽 그래프·구성 백업 등을 제공."
      },
      {
        "k": "note",
        "title": "FCAPS — 네트워크 관리 5대 기능 (ISO, 시험 단골)",
        "d": "<ul class='klist'><li><b>F — 장애 관리(Fault)</b>: 장애를 <b>탐지·격리·복구</b>하고 기록. 알람·Trap 처리</li><li><b>C — 구성 관리(Configuration)</b>: 장비 <b>설정·자산·버전</b> 파악과 변경 이력</li><li><b>A — 계정/과금 관리(Accounting)</b>: 사용자별 <b>자원 사용량 측정</b>·과금·할당</li><li><b>P — 성능 관리(Performance)</b>: <b>처리량·응답시간·가용성·이용률</b> 측정과 임계치 관리</li><li><b>S — 보안 관리(Security)</b>: <b>접근 통제·인증·키 관리·로그</b></li></ul><b>앞글자 FCAPS</b>로 외운다. '5대 기능이 아닌 것은?' 형태로 자주 나온다."
      },
      {
        "k": "warn",
        "title": "보안 관점 — NMS 자체가 표적",
        "d": "NMS는 <b>모든 장비의 계정·설정·구조를 알고 있고, 설정을 바꿀 권한</b>까지 갖는다. 그래서 <b>NMS 한 대가 장악되면 네트워크 전체 통제권</b>이 넘어간다. 공격자에게는 <b>최고 가치의 표적</b>이다."
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<b>관리망 분리</b>(Out-of-Band — 서비스망과 분리된 별도 관리 네트워크) · NMS 접근에 <b>강한 인증·MFA</b>와 <b>IP 제한</b> · <b>SNMPv3</b> 사용 · 관리자 행위 <b>로그 감사</b> · 설정 <b>변경 이력 관리</b>와 백업."
      }
    ],
    "finalLiner": "NMS=SNMP로 장비를 <b>감시·제어</b>하는 시스템(SNMP의 <b>매니저</b> 역할) / ISO 5대 기능 <b>FCAPS = 장애(Fault)·구성(Configuration)·계정(Accounting)·성능(Performance)·보안(Security)</b> / NMS 장악=<b>전체 네트워크 통제권 상실</b> → 관리망 분리·강한 인증",
    "related": ["snmp", "netdevice", "eventlog"]
  }
]
);
