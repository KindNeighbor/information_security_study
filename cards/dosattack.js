/* 네트워크 기반 공격 기술 — DoS·DDoS 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "dos",
    "term": "DoS · DDoS 개요",
    "en": "Denial of Service · Distributed DoS",
    "cat": "네트워크 보안",
    "tags": ["가용성 침해", "DDoS=봇넷·좀비PC", "DRDoS=반사·증폭", "대역폭·자원·애플리케이션", "출발지 위조"],
    "oneLiner": "정상 서비스를 못 하게 만드는 가용성 공격 / DoS=단일, DDoS=다수 좀비PC(봇넷), DRDoS=출발지를 피해자로 위조해 제3자가 대신 때리게 함",
    "blocks": [
      {
        "k": "def",
        "title": "정의 — 보안 3요소 중 '가용성'",
        "d": "<b>DoS(Denial of Service)</b> — 시스템 자원을 고갈시켜 <b>정상 사용자가 서비스를 받지 못하게</b> 만드는 공격. 정보를 훔치거나(기밀성) 바꾸는(무결성) 게 아니라 <b>가용성(Availability)</b>을 노린다.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>DoS</span><div class='row'><b>한 대</b>에서 공격. 차단이 비교적 쉽다.</div></div><div class='cmp-item'><span class='cmp-label'>DDoS (Distributed)</span><div class='row'>악성코드에 감염된 <b>좀비 PC(봇넷)</b> 수천~수만 대를 <b>C&amp;C 서버</b>로 조종해 동시에 공격. <b>출발지가 분산돼</b> 차단이 어렵다.</div></div><div class='cmp-item'><span class='cmp-label'>DRDoS (Distributed Reflection)</span><div class='row'>출발지 IP를 <b>피해자로 위조</b>해 아무 죄 없는 <b>제3의 서버들이 응답을 피해자에게</b> 보내게 함. <b>반사 + 증폭</b>으로 위력이 커지고 <b>진짜 공격자를 추적하기 어렵다</b>.</div></div></div>"
      },
      {
        "k": "note",
        "title": "공격 유형 3분류 (어디를 고갈시키나)",
        "d": "<ul class='klist'><li><b>① 대역폭 소진형(볼류메트릭)</b> — 회선 자체를 채워버림. <b>UDP·ICMP Flooding, 스머프, DRDoS 증폭</b></li><li><b>② 자원 고갈형(프로토콜)</b> — 서버의 <b>연결 테이블·메모리</b>를 고갈. <b>SYN Flooding, Land Attack</b></li><li><b>③ 애플리케이션 계층형</b> — 적은 트래픽으로 <b>웹 서버 처리 능력</b>을 고갈. <b>HTTP GET Flooding, Slowloris, Hash DoS</b> — <b>정상 요청과 구분이 어려워</b> 탐지가 가장 까다롭다</li></ul>"
      },
      {
        "k": "safe",
        "title": "공통 대응",
        "d": "<ul class='klist'><li><b>임계치 기반 차단</b>(초당 요청·연결 수 제한, Rate Limit)</li><li><b>출발지 IP 위조 차단</b> — <b>인그레스 필터링</b>·uRPF(들어온 경로가 맞는지 검증)</li><li><b>DDoS 대응 장비·클린존</b>, ISP·CDN 단에서 흡수</li><li><b>불필요한 서비스·포트 차단</b>, 패치, 이중화·확장성 확보</li></ul><b>핵심 한계</b>: 대역폭 자체가 가득 차면 <b>서버에서 막을 수 없다</b> → <b>상위(ISP·CDN)에서 걸러야</b> 한다."
      }
    ],
    "finalLiner": "DoS=<b>가용성</b> 침해 / <b>DDoS</b>=좀비PC(봇넷)+<b>C&amp;C</b> 조종 / <b>DRDoS</b>=출발지를 피해자로 위조해 <b>제3자가 반사·증폭</b> / 유형 <b>①대역폭(UDP·ICMP·스머프) ②자원(SYN·Land) ③애플리케이션(HTTP GET·Slow·Hash)</b> / 대응=임계치·인그레스 필터링·상위 차단",
    "related": ["synflood", "icmpattack", "httpflood"]
  },
  {
    "id": "synflood",
    "term": "TCP SYN Flooding · Land Attack",
    "en": "SYN Flooding · Land Attack",
    "cat": "네트워크 보안",
    "tags": ["3-way 마지막 ACK 안 보냄", "백로그 큐 고갈", "SYN 쿠키", "Land=출발지·목적지 동일", "netstat SYN_RECEIVED"],
    "oneLiner": "SYN Flooding=3-way의 마지막 ACK를 안 보내 연결 대기 큐(백로그)를 고갈 / Land Attack=출발지와 목적지를 같게 위조해 자기 자신에게 응답하게 만듦",
    "blocks": [
      {
        "k": "warn",
        "title": "TCP SYN Flooding — 원리",
        "d": "3-way handshake의 <b>빈틈</b>을 노린다.<div class='evo'><div class='evo-step'><div class='es-name'>1 SYN 폭주</div><div class='es-note'>공격자가 <b>출발지 IP를 위조</b>한 SYN을 대량 전송</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 서버 대기</div><div class='es-note'>서버는 SYN+ACK를 보내고 <b>백로그 큐</b>에 자리를 잡아 둠(<b>SYN_RECEIVED</b>)</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 ACK 안 옴</div><div class='es-note'>위조된 IP라 <b>마지막 ACK가 오지 않음</b> → 자리가 계속 점유됨</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 큐 고갈</div><div class='es-note'>큐가 가득 차 <b>정상 사용자의 연결이 거부</b>됨</div></div></div><b>탐지</b>: <code>netstat -an</code>에 <b>SYN_RECEIVED가 대량</b>으로 보인다. 트래픽 양은 적어도 효과가 크다."
      },
      {
        "k": "safe",
        "title": "SYN Flooding 대응 (시험 단골)",
        "d": "<ul class='klist'><li><b>SYN 쿠키(SYN Cookie)</b> — <b>큐에 저장하지 않고</b> 필요한 정보를 순서번호에 암호화해 담아 보냈다가, <b>ACK가 오면 검증</b>해 그때 연결을 만든다 → <b>큐가 고갈되지 않는다</b>(가장 대표적인 대응)</li><li><b>백로그 큐 크기 확대</b></li><li><b>SYN_RECEIVED 타임아웃 단축</b> — 오래 붙잡지 않고 빨리 정리</li><li><b>First SYN Drop</b> — 첫 SYN을 일부러 버리고, <b>정상 클라이언트는 재전송</b>한다는 성질을 이용해 걸러낸다</li><li>방화벽·IPS의 <b>임계치 기반 차단</b>, 인그레스 필터링</li></ul>"
      },
      {
        "k": "warn",
        "title": "Land Attack",
        "d": "<b>출발지 IP·포트를 목적지와 똑같이</b> 위조한 SYN 패킷을 보낸다. 받은 시스템은 <b>자기 자신에게 응답</b>을 보내며 무한히 맴돌아 <b>자원을 소모</b>한다(이름은 Local Area Network Denial).<p class='on-key'><span class='lbl'>대응</span><b>출발지 IP = 목적지 IP인 패킷을 차단</b>(라우터·방화벽 필터링). 요즘 OS는 대부분 <b>패치</b>되어 있어 실제 위협은 낮지만 <b>개념 문제로는 자주</b> 나온다.</p>"
      }
    ],
    "finalLiner": "<b>SYN Flooding</b>=위조 SYN 폭주 → <b>백로그 큐 고갈</b>(netstat에 <b>SYN_RECEIVED</b> 대량) → 대응 <b>SYN 쿠키</b>·큐 확대·타임아웃 단축·First SYN Drop / <b>Land Attack</b>=<b>출발지=목적지</b>로 위조해 자기 자신에게 응답 → 동일 IP 패킷 차단",
    "related": ["dos", "tcpstate", "tcpudp"]
  },
  {
    "id": "icmpattack",
    "term": "ICMP 공격 · 스머프 · UDP Flooding",
    "en": "Smurf · ICMP / UDP Flooding · Fraggle",
    "cat": "네트워크 보안",
    "tags": ["Echo Request/Reply 악용", "스머프=브로드캐스트 증폭", "Fraggle=UDP판", "디렉티드 브로드캐스트 차단", "임계치·인그레스 필터링"],
    "oneLiner": "스머프=출발지를 피해자로 위조한 ICMP를 브로드캐스트로 뿌려 모든 응답이 피해자에게 몰리게 함 / Fraggle은 UDP판 / 대응=디렉티드 브로드캐스트 차단",
    "blocks": [
      {
        "k": "note",
        "title": "공격에 쓰이는 ICMP 메시지",
        "d": "<ul class='klist'><li><b>Echo Request(8) / Echo Reply(0)</b> — <b>ping</b>. <b>스캐닝(ping 스윕)·ICMP Flooding·스머프</b>에 사용되는 <b>대표 메시지</b></li><li><b>Destination Unreachable(3)</b> — 위조해 보내면 <b>정상 연결을 끊게</b> 만들 수 있다</li><li><b>Redirect(5)</b> — 위조하면 <b>경로를 공격자 쪽으로 변조</b>(중간자 공격)</li><li><b>Time Exceeded(11)</b> — TTL 소진 통지. <b>traceroute</b>가 이용 → <b>내부 구조 정찰</b>에 악용</li><li><b>Source Quench(4)</b> — 속도를 늦추라는 메시지. 위조 시 <b>성능 저하</b> 유발(현재는 폐기)</li></ul>"
      },
      {
        "k": "warn",
        "title": "스머프 공격 (Smurf) — 반사·증폭의 원형",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 위조</div><div class='es-note'>출발지 IP를 <b>피해자</b>로 위조한 <b>ICMP Echo Request</b> 생성</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 브로드캐스트</div><div class='es-note'>중계 네트워크의 <b>브로드캐스트 주소</b>로 전송</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 증폭</div><div class='es-note'>그 네트워크의 <b>모든 호스트가 Echo Reply</b>를 보냄</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 집중</div><div class='es-note'>응답이 전부 <b>피해자에게</b> 쏟아짐(수백 배 증폭)</div></div></div>중계로 이용당하는 네트워크를 <b>증폭 네트워크(Amplifier)</b>라 한다.<br><b>Fraggle 공격</b> — <b>똑같은 원리를 UDP로</b> 수행(echo·chargen 서비스 이용). <b>스머프=ICMP, Fraggle=UDP</b>로 짝지어 외운다."
      },
      {
        "k": "safe",
        "title": "대응 (ICMP · UDP Flooding 공통)",
        "d": "<ul class='klist'><li><b>디렉티드 브로드캐스트 차단</b> — 라우터에서 <code>no ip directed-broadcast</code>. <b>스머프의 근본 대응</b></li><li><b>브로드캐스트로 온 ICMP에 응답하지 않도록</b> 호스트 설정</li><li><b>인그레스 필터링</b>(출발지 IP 위조 차단) — 반사 공격 자체를 막는 근본 대책</li><li><b>불필요한 ICMP·UDP 서비스 차단</b>(echo·chargen 등 비활성화)</li><li><b>임계치 기반 제한</b>(Rate Limit)과 <b>ISP·DDoS 대응 장비</b>에서의 상위 차단</li></ul>"
      }
    ],
    "finalLiner": "ICMP 악용 메시지 = <b>Echo Request(8)/Reply(0)</b>·Unreachable(3)·<b>Redirect(5)</b>·Time Exceeded(11) / <b>스머프</b>=출발지를 피해자로 위조 + <b>브로드캐스트</b> → 모든 응답이 피해자에게(<b>Fraggle=UDP판</b>) / 대응=<b>디렉티드 브로드캐스트 차단</b>·인그레스 필터링·임계치",
    "related": ["dos", "netproto", "fragattack"]
  },
  {
    "id": "fragattack",
    "term": "IP 단편화 공격 (Ping of Death · Teardrop)",
    "en": "IP Fragmentation Attacks",
    "cat": "네트워크 보안",
    "tags": ["재조립 취약점", "PoD=규격 초과", "Teardrop=오프셋 조작", "Bonk·Boink 변종", "패치가 근본 대응"],
    "oneLiner": "IP 재조립 과정을 노림 / Ping of Death=규격(65535) 넘는 큰 패킷으로 오버플로 / Teardrop=단편 오프셋을 겹치거나 어긋나게 조작해 재조립 오류 유발",
    "blocks": [
      {
        "k": "def",
        "title": "공통 원리 — 재조립이 약점",
        "d": "IP는 MTU보다 큰 패킷을 <b>단편(fragment)</b>으로 쪼개고, <b>최종 목적지에서 재조립</b>한다. 이때 <b>식별자·플래그·오프셋</b>을 믿고 합치는데, 이 값을 <b>비정상적으로 조작</b>하면 재조립 코드가 오작동해 <b>시스템이 다운</b>된다."
      },
      {
        "k": "warn",
        "title": "Ping of Death (죽음의 핑)",
        "d": "IP 패킷의 <b>최대 크기는 65,535바이트</b>인데, 이를 <b>초과하는 크기</b>의 ICMP 패킷을 <b>여러 단편으로 쪼개</b> 보낸다. 받는 쪽이 <b>재조립할 때 버퍼를 넘겨</b>(오버플로) 시스템이 다운된다.<p class='on-key'><span class='lbl'>대응</span><b>OS 패치</b>(현대 OS는 대부분 방어됨) · 방화벽에서 <b>비정상적으로 크거나 단편화된 ICMP 차단</b> · 불필요한 ICMP 차단.</p>"
      },
      {
        "k": "warn",
        "title": "Teardrop · 변종들",
        "d": "<b>Teardrop</b> — 단편의 <b>오프셋 값을 겹치게(overlap)</b> 조작해 보낸다. 재조립 시 계산이 음수가 되거나 꼬여 <b>커널이 멈추거나 다운</b>된다.<p class='on-key'><span class='lbl'>변종 (종류 문제로 출제)</span><b>Bonk</b> — 단편 <b>순서 번호(오프셋)를 모두 같게</b> 보내 혼란을 준다.<br><b>Boink</b> — Bonk의 변형으로, 오프셋을 <b>일정하게 어긋나도록</b> 조작한다.<br><b>NewTear·SynDrop</b> 등도 같은 계열의 변종이다.</p><b>대응</b>: <b>OS 패치</b>가 근본 · 방화벽·IPS에서 <b>비정상 단편 차단</b> 및 <b>재조립 후 검사</b>."
      }
    ],
    "finalLiner": "재조립 취약점 공격 / <b>Ping of Death</b>=<b>65,535바이트 초과</b> 패킷을 단편화 → 재조립 시 <b>오버플로</b> / <b>Teardrop</b>=<b>오프셋을 겹치게</b> 조작 → 재조립 오류(변종 <b>Bonk</b>=오프셋 동일, <b>Boink</b>=일정하게 어긋남) / 대응=<b>패치</b>·비정상 단편 차단",
    "related": ["ipheader", "icmpattack", "dos"]
  },
  {
    "id": "httpflood",
    "term": "HTTP GET Flooding · Cache Control · HULK",
    "en": "HTTP GET Flooding · CC Attack · HULK DoS",
    "cat": "네트워크 보안",
    "tags": ["애플리케이션 계층 DDoS", "3-way 완성 필요", "no-cache로 캐시 우회", "HULK=URL 랜덤화", "임계치·캡차"],
    "oneLiner": "대량 HTTP GET으로 웹서버 자원 고갈 / Cache Control 공격=no-cache 헤더로 캐시를 우회해 원 서버 직접 타격 / HULK=URL을 매번 바꿔 캐시·탐지 회피",
    "blocks": [
      {
        "k": "warn",
        "title": "HTTP GET Flooding",
        "d": "대량의 <b>HTTP GET 요청</b>을 보내 웹 서버의 <b>처리 능력·DB 연결</b>을 고갈시킨다.<p class='on-key'><span class='lbl'>특징 — 왜 막기 어려운가</span>① <b>3-way handshake를 정상적으로 완료</b>해야 요청이 가능하므로 <b>출발지 IP를 위조할 수 없다</b> → 대신 <b>실제 좀비 PC</b>가 필요하다.<br>② 요청 자체는 <b>문법적으로 정상</b>이라 패킷만 봐서는 <b>정상 사용자와 구분이 어렵다</b>.<br>③ DB 조회처럼 <b>무거운 페이지</b>를 노리면 적은 요청으로도 큰 효과.</p>"
      },
      {
        "k": "warn",
        "title": "Cache Control 공격 (CC Attack)",
        "d": "보통 반복 요청은 <b>웹 캐시·CDN</b>이 대신 응답해 원 서버 부하를 줄여 준다. 공격자는 요청 헤더에 <b><code>Cache-Control: no-cache</code></b>(또는 <code>no-store</code>)를 넣어 <b>캐시를 쓰지 말라고 지시</b>한다 → 모든 요청이 <b>원 서버까지 도달</b>해 부하가 그대로 걸린다.<p class='on-key'><span class='lbl'>대응</span>중간 캐시·CDN이 <b>클라이언트의 Cache-Control 헤더를 무시</b>하고 캐시된 콘텐츠를 제공하도록 설정한다. 비정상적으로 <b>no-cache가 반복되는 요청</b>을 차단.</p>"
      },
      {
        "k": "warn",
        "title": "HULK DoS",
        "d": "<b>HULK(HTTP Unbearable Load King)</b> — 요청할 때마다 <b>URL 뒤 파라미터를 임의의 값으로 계속 바꾼다</b>(예: <code>/page?abc=랜덤값</code>).<ul class='klist'><li>URL이 매번 달라 <b>캐시가 전혀 듣지 않고</b> 항상 원 서버가 처리</li><li><b>User-Agent·Referer도 랜덤화</b>해 패턴 기반 탐지를 회피</li></ul><b>대응</b>: <b>동일 IP·세션의 요청 수 임계치</b> 제한, 비정상적으로 다양한 <b>URL 파라미터 패턴 탐지</b>, 웹 방화벽(WAF)."
      },
      {
        "k": "safe",
        "title": "공통 대응",
        "d": "<ul class='klist'><li><b>임계치 기반 차단</b> — 같은 IP·세션의 <b>초당 요청 수</b> 제한</li><li><b>캡차(CAPTCHA)·자바스크립트 검증</b> — <b>실제 브라우저인지</b> 확인(봇 걸러내기)</li><li><b>웹 캐시·CDN 활용</b>과 클라이언트 캐시 헤더 무시 설정</li><li><b>WAF</b>로 비정상 패턴 차단, 서버 <b>이중화·오토스케일링</b></li></ul>"
      }
    ],
    "finalLiner": "<b>HTTP GET Flooding</b>=대량 GET으로 웹서버 고갈(<b>3-way 완성 필요 → IP 위조 불가·좀비PC</b>, 정상 요청과 구분 어려움) / <b>Cache Control 공격</b>=<code>no-cache</code>로 캐시 우회 → 캐시가 헤더를 <b>무시</b>하게 설정 / <b>HULK</b>=<b>URL 랜덤화</b>로 캐시·탐지 회피 → 임계치·캡차·WAF",
    "related": ["slowdos", "dos", "http"]
  },
  {
    "id": "slowdos",
    "term": "Slow HTTP 공격 · Hash DoS",
    "en": "Slowloris · RUDY · Slow Read · Hash DoS",
    "cat": "네트워크 보안",
    "tags": ["적은 트래픽·큰 효과", "Slow Header=Slowloris", "Slow POST=RUDY", "Slow Read", "Hash 충돌로 CPU 고갈"],
    "oneLiner": "연결을 느리게 오래 붙잡아 동시 연결 수를 고갈(Slowloris·RUDY·Slow Read) / Hash DoS=해시 충돌을 유발하는 파라미터로 CPU를 고갈 / 둘 다 적은 트래픽으로 가능",
    "blocks": [
      {
        "k": "def",
        "title": "공통 특징 — 조용한 DoS",
        "d": "대량 트래픽을 쏟아붓는 방식과 정반대다. <b>아주 적은 트래픽</b>으로 서버의 <b>동시 연결 수나 CPU</b>를 고갈시킨다.<ul class='klist'><li>트래픽이 적어 <b>대역폭 기반 탐지에 걸리지 않는다</b></li><li>요청 형식이 <b>규격에 맞아</b> 비정상으로 보이지 않는다</li><li><b>공격자 한 대로도</b> 서버를 마비시킬 수 있다</li></ul>"
      },
      {
        "k": "warn",
        "title": "Slow HTTP 3종",
        "d": "<ul class='klist'><li><b>Slow HTTP Header DoS (Slowloris)</b> — HTTP <b>헤더를 완성하지 않는다</b>. 헤더의 끝을 알리는 <b>빈 줄(CRLF)을 보내지 않고</b> 조금씩 계속 이어 보내 <b>서버가 계속 기다리게</b> 만든다 → <b>동시 연결 수 고갈</b></li><li><b>Slow HTTP POST DoS (RUDY, R-U-Dead-Yet)</b> — <code>Content-Length</code>를 <b>아주 크게 선언</b>해 놓고 본문을 <b>1바이트씩 아주 천천히</b> 보낸다 → 서버는 다 받을 때까지 <b>연결을 유지</b></li><li><b>Slow Read</b> — 요청은 정상적으로 보내되, <b>응답을 아주 느리게 읽는다</b>(TCP 윈도우 크기를 매우 작게 광고) → 서버가 <b>다 보낼 때까지 연결 유지</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "Hash DoS",
        "d": "웹 애플리케이션은 <b>POST 파라미터를 해시 테이블</b>에 저장한다. 해시 테이블은 보통 <b>O(1)</b>로 빠르지만, <b>같은 해시값이 나오도록 계산된 키</b>를 대량으로 보내면 <b>충돌이 몰려 O(n²)</b>로 느려진다.<p class='on-key'><span class='lbl'>효과</span>단 <b>몇 개의 요청</b>만으로 <b>CPU 사용률 100%</b>를 만들 수 있다. 네트워크 부하가 거의 없어 <b>탐지가 매우 어렵다</b>.</p><b>대응</b>: <b>POST 파라미터 개수·요청 본문 크기 제한</b>, <b>해시 함수에 난수(seed) 적용</b>(같은 충돌을 재현 못 하게), 언어·프레임워크 <b>패치</b>."
      },
      {
        "k": "safe",
        "title": "Slow 계열 대응",
        "d": "<ul class='klist'><li><b>연결 타임아웃 설정</b> — 헤더·본문 수신에 <b>시간 제한</b>을 둔다(가장 직접적)</li><li><b>최소 전송 속도 요구</b> — 너무 느린 연결은 끊는다</li><li><b>IP당 동시 연결 수 제한</b></li><li><b>Content-Length 상한</b> 설정, 웹서버 모듈 활용(예: <code>mod_reqtimeout</code>)</li></ul>"
      }
    ],
    "finalLiner": "<b>적은 트래픽·큰 효과</b>형 / <b>Slowloris</b>=헤더를 끝내지 않음(<b>CRLF 미전송</b>) · <b>RUDY</b>=Content-Length 크게 잡고 <b>본문 찔끔찔끔</b> · <b>Slow Read</b>=응답을 <b>느리게 읽음</b>(윈도우 작게) → 대응 <b>타임아웃·최소속도·동시연결 제한</b> / <b>Hash DoS</b>=해시 <b>충돌</b> 유발로 <b>CPU 고갈</b> → 파라미터 수 제한·해시 난수화",
    "related": ["httpflood", "dos", "httpmsg"]
  }
]
);
