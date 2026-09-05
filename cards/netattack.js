/* 네트워크 기반 공격 기술 — 스캐닝·스니핑·스푸핑·하이재킹·원격접속 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "portscan",
    "term": "포트 스캐닝",
    "en": "Port Scanning",
    "cat": "네트워크 보안",
    "tags": ["정찰 단계", "SYN=스텔스 스캔", "SYN+ACK 열림·RST 닫힘", "FIN·NULL·XMAS", "무응답=필터링"],
    "oneLiner": "열린 포트·서비스를 찾는 정찰 / TCP Connect(완전)·SYN(스텔스)·FIN/NULL/XMAS(우회)·UDP / SYN+ACK=열림, RST=닫힘, 무응답=필터링",
    "blocks": [
      {
        "k": "def",
        "title": "목적 — 공격의 첫 단계",
        "d": "대상 시스템의 <b>열린 포트·동작 중인 서비스·버전·OS</b>를 알아내는 행위. 킬체인의 <b>①정찰(Reconnaissance)</b> 단계에 해당하며, 여기서 얻은 정보로 <b>어느 취약점을 쓸지</b> 정한다. 대표 도구는 <b>Nmap</b>."
      },
      {
        "k": "note",
        "title": "응답으로 판정하는 법 (시험 핵심)",
        "d": "<ul class='klist'><li><b>SYN+ACK</b> 응답 → <b>포트 열림(Open)</b></li><li><b>RST</b> 응답 → <b>포트 닫힘(Closed)</b></li><li><b>무응답</b> → <b>방화벽에 의해 필터링(Filtered)</b></li></ul>이 세 가지 대응이 그대로 문제로 나온다."
      },
      {
        "k": "note",
        "title": "스캔 종류",
        "d": "<ul class='klist'><li><b>TCP Connect 스캔</b> — <b>3-way handshake를 완전히 맺는다</b>. 정확하지만 <b>연결 로그가 남아</b> 탐지되기 쉽다</li><li><b>TCP SYN 스캔(Half-Open · 스텔스)</b> — SYN을 보내 <b>SYN+ACK가 오면 RST로 끊어</b> 연결을 완성하지 않는다 → <b>로그에 덜 남아</b> 가장 널리 쓰인다</li><li><b>FIN · NULL · XMAS 스캔</b> — 비정상 플래그로 보내 <b>방화벽·IDS를 우회</b>. 규격상 <b>닫힌 포트만 RST로 응답</b>하고 열린 포트는 <b>무응답</b>이다<br>→ <b>NULL</b>=플래그 전부 0 · <b>FIN</b>=FIN만 · <b>XMAS</b>=<b>FIN+PSH+URG</b>(불 켜진 트리처럼)</li><li><b>ACK 스캔</b> — 포트 개폐가 아니라 <b>방화벽 필터링 여부</b>를 확인</li><li><b>UDP 스캔</b> — 응답이 없으면 열림으로 추정, <b>ICMP Port Unreachable</b>이 오면 닫힘. <b>느리고 부정확</b></li></ul>"
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<b>불필요한 포트·서비스 차단</b>(가장 근본) · 방화벽에서 <b>필요한 것만 허용</b> · <b>IDS/IPS의 임계치 탐지</b>(짧은 시간에 많은 포트 접근 = 스캔 징후) · <b>배너 숨기기</b>로 버전 노출 차단 · 로그 모니터링."
      }
    ],
    "finalLiner": "포트 스캔=<b>정찰 단계</b>(Nmap) / 판정 <b>SYN+ACK=열림 · RST=닫힘 · 무응답=필터링</b> / 종류 <b>Connect(완전·로그남음)</b> · <b>SYN(스텔스·Half-Open)</b> · <b>FIN/NULL/XMAS(우회, 열림=무응답)</b> · ACK(방화벽 확인) · UDP(느림) / 대응=불필요 포트 차단·IPS 임계치",
    "related": ["sniffing", "killchain", "translayer"]
  },
  {
    "id": "sniffing",
    "term": "스니핑",
    "en": "Sniffing",
    "cat": "네트워크 보안",
    "tags": ["수동적 공격", "무차별 모드", "허브=쉬움", "스위치는 ARP 스푸핑 필요", "암호화가 근본 대응"],
    "oneLiner": "네트워크를 지나는 패킷을 몰래 들여다보는 수동적 공격(기밀성 침해) / 랜카드를 무차별 모드로 / 스위치 환경에선 MAC 플러딩·ARP 스푸핑을 곁들여야 가능",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 수동적 공격",
        "d": "네트워크를 오가는 <b>패킷을 가로채 들여다보는</b> 행위. 데이터를 <b>바꾸지 않고 훔쳐보기만</b> 하므로 <b>수동적(Passive) 공격</b>이며 <b>기밀성</b>을 침해한다.<p class='on-key'><span class='lbl'>무차별 모드(Promiscuous Mode)</span>랜카드는 원래 <b>자기 MAC 주소로 온 프레임만</b> 위로 올린다. 이 모드를 켜면 <b>자기 것이 아닌 프레임까지 전부</b> 받아들여 분석할 수 있다. 도구: <b>Wireshark·tcpdump</b>.</p><b>탐지가 어렵다</b> — 조용히 듣기만 하므로 트래픽을 만들지 않는다."
      },
      {
        "k": "warn",
        "title": "허브 vs 스위치 — 스위치에서 스니핑하는 법",
        "d": "<b>허브</b>는 받은 프레임을 <b>모든 포트에 복사</b>하므로 무차별 모드만 켜면 바로 도청된다. <b>스위치</b>는 <b>목적지 포트로만</b> 보내므로 그냥은 안 된다. 그래서 다음 기법을 함께 쓴다.<ul class='klist'><li><b>MAC 플러딩(스위치 재밍)</b> — 가짜 MAC을 대량으로 보내 <b>MAC 테이블을 넘치게</b> 하면 스위치가 <b>허브처럼 모든 포트로 뿌린다</b></li><li><b>ARP 스푸핑</b> — IP↔MAC을 속여 <b>트래픽이 공격자를 거쳐</b> 가게 한다(가장 대표적)</li><li><b>ARP 리다이렉트</b> — 자신이 <b>게이트웨이인 것처럼</b> 속인다</li><li><b>ICMP 리다이렉트</b> — 경로 변경 메시지를 위조해 우회시킨다</li><li><b>포트 미러링(SPAN) 악용</b> — 관리용 미러 포트를 이용</li></ul>"
      },
      {
        "k": "note",
        "title": "스니퍼 탐지 방법",
        "d": "<ul class='klist'><li><b>ping 테스트</b> — <b>존재하지 않는 MAC</b>으로 ping을 보낸다. 정상 호스트는 무시하지만 <b>무차별 모드면 응답</b>한다</li><li><b>ARP 테스트</b> — 위조 ARP 요청에 반응하는지 확인</li><li><b>DNS 테스트</b> — 스니퍼가 IP를 이름으로 바꾸려 <b>역방향 DNS 조회</b>를 일으키는 것을 관찰</li><li><b>유인(Decoy)</b> — 가짜 계정·비밀번호를 흘려보내 <b>그것으로 접속을 시도</b>하는지 본다</li></ul>"
      },
      {
        "k": "safe",
        "title": "대응 — 암호화가 근본",
        "d": "스니핑 자체를 완전히 막기는 어렵다. 그래서 <b>가로채도 못 읽게</b> 만드는 것이 정답이다.<ul class='klist'><li><b>암호화 통신</b> — <b>SSL/TLS(HTTPS)·SSH·VPN</b>. Telnet·FTP 같은 <b>평문 프로토콜 폐기</b></li><li><b>스위치 사용</b> + <b>포트 보안</b>(포트당 MAC 수 제한)으로 MAC 플러딩 차단</li><li><b>정적 ARP</b>·<b>DAI</b>로 ARP 스푸핑 차단</li></ul>"
      }
    ],
    "finalLiner": "스니핑=<b>수동적</b> 공격(기밀성), 랜카드 <b>무차별 모드</b> / 허브=바로 가능, <b>스위치는 MAC 플러딩·ARP 스푸핑</b> 필요 / 탐지=<b>ping·ARP·DNS·유인</b> 테스트 / 대응=<b>암호화(SSL·SSH·VPN)</b>가 근본",
    "related": ["arpspoof", "netdevice", "hijacking"]
  },
  {
    "id": "ipspoof",
    "term": "IP 스푸핑",
    "en": "IP Spoofing",
    "cat": "네트워크 보안",
    "tags": ["출발지 IP 위조", "신뢰관계 악용", "r 계열 서비스", "순서번호 예측 필요", "인그레스 필터링"],
    "oneLiner": "출발지 IP를 위조해 신원을 숨기거나 신뢰관계를 악용 / 응답이 공격자에게 안 오므로 순서번호 예측이 필요(blind) / 대응=인그레스 필터링·신뢰관계 제거",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 왜 가능한가",
        "d": "IP 패킷의 <b>출발지 주소를 다른 IP로 위조</b>해 보내는 것. IP 프로토콜은 <b>출발지를 검증하지 않기</b> 때문에 원리적으로 막을 수 없다.<p class='on-key'><span class='lbl'>핵심 제약</span>응답은 <b>위조한 IP의 주인에게</b> 가지 <b>공격자에게 오지 않는다</b>. 그래서 응답을 못 보고 하는 <b>블라인드(blind) 공격</b>이 되며, TCP라면 <b>순서번호를 예측</b>해야 연결을 이어갈 수 있다.</p>"
      },
      {
        "k": "warn",
        "title": "어디에 쓰이나",
        "d": "<ul class='klist'><li><b>신뢰관계 악용</b> — 유닉스의 <b>r 계열 서비스</b>(<code>rlogin</code>·<code>rsh</code>·<code>rexec</code>)는 <code>.rhosts</code>·<code>/etc/hosts.equiv</code>에 등록된 <b>IP만 보고 비밀번호 없이</b> 접속을 허용한다 → <b>그 IP로 위조</b>하면 인증 통과(고전적 공격)</li><li><b>접근 제어 우회</b> — IP 기반 <b>ACL·방화벽 규칙</b>을 속인다</li><li><b>신원 은폐·추적 회피</b> — 공격 근원을 감춘다</li><li><b>반사·증폭 공격의 전제</b> — <b>스머프·DRDoS</b>는 출발지를 <b>피해자로</b> 위조하는 것이 핵심</li><li><b>Land Attack</b> — 출발지를 <b>목적지와 동일하게</b> 위조</li></ul>"
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<ul class='klist'><li><b>인그레스 필터링(Ingress Filtering)</b> — 외부에서 들어오는 패킷의 출발지가 <b>내부 IP로 위조</b>돼 있으면 차단. <b>이그레스 필터링</b>은 나가는 패킷의 출발지가 내부 대역이 맞는지 검사</li><li><b>uRPF</b> — 들어온 <b>경로가 그 출발지에 맞는지</b> 라우터가 역방향으로 검증</li><li><b>r 계열 서비스 제거</b> → <b>SSH</b>로 대체(IP가 아니라 <b>키·비밀번호로 인증</b>)</li><li><b>초기 순서번호(ISN) 난수화</b>로 예측 차단</li><li>IP가 아닌 <b>암호학적 인증</b>에 의존하도록 설계</li></ul>"
      }
    ],
    "finalLiner": "IP 스푸핑=<b>출발지 IP 위조</b>(IP는 출발지를 검증 안 함) / 응답이 안 와서 <b>블라인드</b> → <b>순서번호 예측</b> 필요 / 용도=<b>신뢰관계(r 서비스) 악용</b>·ACL 우회·<b>스머프/DRDoS 전제</b>·Land / 대응=<b>인그레스 필터링·uRPF·r서비스 제거·ISN 난수화</b>",
    "related": ["arpspoof", "hijacking", "dos"]
  },
  {
    "id": "arpspoof",
    "term": "ARP 스푸핑 (ARP 캐시 포이즈닝)",
    "en": "ARP Spoofing / Cache Poisoning",
    "cat": "네트워크 보안",
    "tags": ["ARP에 인증 없음", "IP↔MAC 위조", "중간자(MITM)", "스위치에서도 스니핑", "정적 ARP·DAI"],
    "oneLiner": "ARP에 인증이 없다는 점을 악용해 IP↔MAC 매핑을 속임 / 피해자 ARP 캐시를 오염시켜 트래픽이 공격자를 거치게 함(중간자) / 대응=정적 ARP·DAI",
    "blocks": [
      {
        "k": "def",
        "title": "왜 통하나 — ARP의 구조적 결함",
        "d": "ARP는 <b>인증이 전혀 없다</b>. “그 IP는 내 MAC이야”라는 응답이 오면 <b>요청한 적이 없어도 그대로 믿고</b> 캐시에 저장한다(gratuitous ARP). 설계 당시 <b>신뢰된 내부망</b>을 전제했기 때문이다."
      },
      {
        "k": "warn",
        "title": "동작 원리",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 위조 응답</div><div class='es-note'>피해자에게 “<b>게이트웨이 IP = 공격자 MAC</b>”, 게이트웨이에는 “<b>피해자 IP = 공격자 MAC</b>”</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 캐시 오염</div><div class='es-note'>양쪽 ARP 캐시가 <b>공격자 MAC</b>으로 바뀜</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 중간자</div><div class='es-note'>모든 트래픽이 <b>공격자를 거쳐</b> 흐름(MITM)</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 전달·조작</div><div class='es-note'>훔쳐보고 <b>그대로 넘겨줘</b> 눈치채지 못하게(안 넘기면 DoS)</div></div></div><b>스위치 환경에서도 스니핑을 가능하게 만드는</b> 대표 기법이며, <b>세션 하이재킹·중간자 공격의 발판</b>이 된다."
      },
      {
        "k": "note",
        "title": "탐지",
        "d": "<code>arp -a</code>로 ARP 캐시를 확인해 <b>서로 다른 IP가 같은 MAC</b>을 가리키면 의심한다(특히 <b>게이트웨이 MAC이 바뀐 경우</b>). 그 밖에 <b>ARP 응답이 비정상적으로 자주</b> 오가는지, 전용 탐지 도구(arpwatch)로 <b>MAC 변경 이력</b>을 감시한다."
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<ul class='klist'><li><b>정적 ARP 등록</b> — <code>arp -s</code>로 <b>게이트웨이 MAC을 고정</b>(가장 확실하지만 관리 부담)</li><li><b>DAI(Dynamic ARP Inspection)</b> — 스위치가 <b>DHCP 스누핑 정보와 대조</b>해 위조 ARP를 차단</li><li><b>포트 보안</b>(포트당 MAC 제한), <b>VLAN 분리</b>로 피해 범위 축소</li><li><b>암호화 통신(HTTPS·SSH·VPN)</b> — 가로채도 <b>못 읽게</b></li></ul>"
      }
    ],
    "finalLiner": "ARP 스푸핑=<b>인증 없는 ARP</b>를 악용해 <b>IP↔MAC 위조</b> → 캐시 오염 → <b>중간자(MITM)</b> / <b>스위치에서도 스니핑</b> 가능하게 만드는 핵심 기법 / 탐지=<code>arp -a</code>에 <b>같은 MAC이 여러 IP</b> / 대응=<b>정적 ARP·DAI</b>·포트보안·암호화",
    "related": ["sniffing", "netproto", "hijacking"]
  },
  {
    "id": "hijacking",
    "term": "세션 하이재킹",
    "en": "Session Hijacking",
    "cat": "네트워크 보안",
    "tags": ["인증 이후를 노림", "순서번호 예측", "ACK 스톰", "세션 ID 탈취", "암호화·재발급"],
    "oneLiner": "이미 인증된 세션을 가로채 그 사용자로 행세 / 인증 과정을 통째로 우회하므로 비밀번호가 강해도 소용없음 / TCP는 순서번호 예측, 웹은 세션 ID 탈취",
    "blocks": [
      {
        "k": "def",
        "title": "핵심 — 인증 '이후'를 노린다",
        "d": "비밀번호를 깨는 게 아니라, <b>정상적으로 인증이 끝난 세션에 끼어드는</b> 공격이다.<p class='on-key'><span class='lbl'>그래서 무서운 점</span><b>아무리 강한 비밀번호·MFA를 써도 무력화</b>된다. 인증은 이미 통과된 상태이기 때문이다. 이것이 세션 하이재킹의 가장 큰 특징으로 출제된다.</p>"
      },
      {
        "k": "warn",
        "title": "TCP 세션 하이재킹",
        "d": "<ul class='klist'><li>스니핑이나 <b>순서번호 예측</b>으로 진행 중인 연결의 <b>순서번호·확인응답번호</b>를 알아낸다</li><li>그 값으로 <b>위조 패킷을 주입</b>해 서버가 공격자를 정상 클라이언트로 착각하게 만든다</li><li>원래 클라이언트와 서버의 순서번호가 <b>어긋나</b>, 서로 ACK를 주고받으며 <b>ACK 스톰(ACK Storm)</b>이 발생한다 → <b>탐지 단서</b></li></ul><b>ARP 스푸핑과 결합</b>하면 중간자 위치를 확보해 훨씬 쉬워진다."
      },
      {
        "k": "warn",
        "title": "웹 세션 하이재킹",
        "d": "<b>세션 ID(쿠키)</b>를 훔치면 그대로 로그인된 상태가 된다.<ul class='klist'><li><b>스니핑</b> — 평문 HTTP 구간에서 쿠키 탈취</li><li><b>XSS</b> — <code>document.cookie</code>를 빼돌림</li><li><b>세션 고정(Session Fixation)</b> — 공격자가 정한 세션 ID를 쓰게 만든 뒤 그대로 사용</li><li>예측 가능한 세션 ID</li></ul>"
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<ul class='klist'><li><b>암호화</b> — <b>SSL/TLS·SSH·VPN</b>. 가로채도 순서번호·쿠키를 못 읽게(가장 근본)</li><li><b>ISN(초기 순서번호) 난수화</b> — 예측 차단</li><li><b>세션 ID</b>: 충분히 긴 난수, <b>로그인 성공 시 재발급</b>(세션 고정 대응), <b>타임아웃</b>, 쿠키에 <b>Secure·HttpOnly·SameSite</b></li><li>비정상 <b>ACK 스톰·RST</b> 모니터링, 지속적 재인증</li></ul>"
      }
    ],
    "finalLiner": "세션 하이재킹=<b>인증 끝난 세션</b>을 가로챔 → <b>강한 비밀번호·MFA도 무력화</b> / TCP=<b>순서번호 예측</b>+위조 주입 → <b>ACK 스톰</b>이 단서 / 웹=<b>세션 ID 탈취</b>(스니핑·XSS·세션고정) / 대응=<b>암호화·ISN 난수화·세션ID 재발급·HttpOnly</b>",
    "related": ["arpspoof", "cookiesession", "ipspoof"]
  },
  {
    "id": "remoteattack",
    "term": "원격 접속 공격 · 대응",
    "en": "Remote Access Attacks",
    "cat": "네트워크 보안",
    "tags": ["Telnet 23·SSH 22·RDP 3389", "무차별 대입·크리덴셜 스터핑", "평문 프로토콜 도청", "랜섬웨어 초기 침투", "키 인증·IP 제한·MFA"],
    "oneLiner": "인터넷에 열린 원격 관리 포트를 노림(Telnet·SSH·RDP·VNC) / 무차별 대입·유출 계정 재사용·평문 도청·취약점 / 성공하면 곧바로 시스템 장악",
    "blocks": [
      {
        "k": "def",
        "title": "표적이 되는 서비스",
        "d": "<b>Telnet(23) · SSH(22) · RDP(3389) · VNC(5900) · FTP(21)</b> 등 <b>원격에서 시스템을 조작하는 통로</b>가 대상이다. 이런 포트가 인터넷에 열려 있으면 <b>자동화된 봇이 24시간 로그인을 시도</b>한다."
      },
      {
        "k": "warn",
        "title": "동작 원리 · 특징",
        "d": "<ul class='klist'><li><b>무차별 대입·사전 공격</b> — 약한 비밀번호를 자동으로 반복 시도(가장 흔함)</li><li><b>크리덴셜 스터핑</b> — 다른 곳에서 <b>유출된 계정</b>을 그대로 대입(비밀번호 재사용을 노림)</li><li><b>평문 프로토콜 도청</b> — <b>Telnet·FTP는 ID·비밀번호가 평문</b>이라 스니핑 한 번이면 끝</li><li><b>취약점 익스플로잇</b> — 원격 서비스의 원격 코드 실행 취약점</li><li><b>중간자·세션 하이재킹</b> — 인증된 세션을 가로챔</li></ul><p class='on-key'><span class='lbl'>특징</span>성공하면 <b>곧바로 시스템 제어권</b>이 넘어간다(권한 상승을 거칠 필요도 없이). 특히 <b>RDP는 랜섬웨어의 대표적인 초기 침투 경로</b>다.</p>"
      },
      {
        "k": "safe",
        "title": "대응 (출제 포인트)",
        "d": "<ul class='klist'><li><b>Telnet 폐기 → SSH 사용</b>(암호화). FTP도 <b>SFTP·FTPS</b>로</li><li><b>키 기반 인증</b>으로 전환하고 <b>비밀번호 인증 비활성화</b>, <b>root 직접 로그인 금지</b>(<code>PermitRootLogin no</code>)</li><li><b>접근 IP 제한</b> — 방화벽·ACL·<b>TCP Wrapper</b>(<code>hosts.allow</code>/<code>hosts.deny</code>)</li><li><b>기본 포트 변경</b>(자동 스캔 회피 — 보조 수단일 뿐)</li><li><b>계정 잠금·시도 횟수 제한</b>(fail2ban 등), <b>MFA</b> 적용</li><li><b>VPN·점프 서버(배스천 호스트)를 거치게</b> 하고 인터넷 직접 노출을 없앤다 ← 가장 확실</li><li><b>로그 감사</b>(<code>/var/log/secure</code>·<code>btmp</code>로 실패 로그인 확인)</li></ul>"
      }
    ],
    "finalLiner": "원격 접속 공격=<b>Telnet 23·SSH 22·RDP 3389·VNC 5900</b> 표적 / 수법=<b>무차별 대입·크리덴셜 스터핑·평문 도청(Telnet·FTP)·취약점</b> / 성공 시 <b>즉시 장악</b>(RDP=랜섬웨어 초기 침투) / 대응=<b>SSH·키 인증·root 로그인 금지·IP 제한·계정 잠금·MFA·VPN 경유</b>",
    "related": ["hijacking", "sniffing", "passwdfile"]
  }
]
);
