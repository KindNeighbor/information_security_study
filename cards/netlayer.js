/* 네트워크 활용(TCP/IP) — 인터넷 계층 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "ipheader",
    "term": "IP 헤더 구조 · TTL · MTU/단편화",
    "en": "IP Header · TTL · MTU / Fragmentation",
    "cat": "네트워크 보안",
    "tags": ["기본 20바이트", "TTL=루프 방지", "프로토콜 1·6·17", "MTU 1500", "단편화 공격"],
    "oneLiner": "IP 헤더 기본 20바이트(버전·길이·식별자·플래그·오프셋·TTL·프로토콜·체크섬·출발지/목적지 IP) / MTU 초과 시 단편화, TTL은 라우터마다 1 감소",
    "blocks": [
      {
        "k": "note",
        "title": "주요 필드",
        "d": "<ul class='klist'><li><b>버전(4비트)</b> — IPv4=4 · <b>헤더 길이(IHL, 4비트)</b> · <b>서비스 타입(TOS)</b> — 우선순위</li><li><b>전체 길이(16비트)</b> — 헤더+데이터</li><li><b>식별자(Identification)</b>·<b>플래그</b>·<b>단편 오프셋</b> — <b>단편화·재조립</b>에 사용(같은 식별자끼리 다시 합침)</li><li><b>TTL(Time To Live, 8비트)</b> — <b>라우터를 지날 때마다 1씩 감소</b>, <b>0이 되면 폐기</b> → <b>무한 루프 방지</b></li><li><b>프로토콜(8비트)</b> — 상위 프로토콜 번호: <b>1=ICMP · 6=TCP · 17=UDP</b></li><li><b>헤더 체크섬</b> — <b>헤더만</b> 검사(데이터는 검사 안 함)</li><li><b>출발지 IP(32비트) · 목적지 IP(32비트)</b> · 옵션(가변)</li></ul><b>기본 20바이트</b>(옵션 없을 때)."
      },
      {
        "k": "note",
        "title": "TTL이 쓰이는 곳",
        "d": "라우터를 하나 지날 때마다(<b>1홉</b>) 1씩 줄고 0이면 버려지면서 <b>ICMP Time Exceeded</b>가 발신자에게 돌아온다.<p class='on-key'><span class='lbl'>traceroute 원리</span>TTL을 <b>1, 2, 3…</b>으로 올려가며 보내면 <b>각 라우터가 차례로</b> Time Exceeded를 되돌려준다 → <b>경로에 있는 라우터 목록</b>을 알아낼 수 있다. 공격자에게는 <b>내부 구조 정찰</b> 수단이기도 하다.</p>OS마다 초기 TTL이 달라(윈도우 128, 리눅스 64 등) <b>운영체제 추정</b>에도 쓰인다."
      },
      {
        "k": "note",
        "title": "MTU · 단편화(Fragmentation)",
        "d": "<b>MTU(Maximum Transmission Unit)</b> — 한 번에 보낼 수 있는 <b>최대 프레임 크기</b>. 이더넷은 <b>1500바이트</b>.<ul class='klist'><li>MTU보다 큰 패킷은 <b>여러 조각으로 쪼갠다(단편화)</b> → 식별자·플래그(<b>MF</b>=더 있음)·오프셋으로 순서를 표시</li><li><b>재조립은 최종 목적지</b>에서 한다(중간 라우터가 아님)</li><li><b>DF(Don't Fragment)</b> 비트가 켜져 있으면 쪼개지 못하고 <b>폐기</b>되며 ICMP로 알린다</li></ul>"
      },
      {
        "k": "warn",
        "title": "보안 — 단편화 악용",
        "d": "<ul class='klist'><li><b>Tiny Fragment</b> — 헤더를 아주 잘게 쪼개 <b>방화벽·IDS의 검사(포트 번호 등)를 회피</b></li><li><b>Teardrop</b> — <b>오프셋을 겹치게</b> 조작해 재조립 시 시스템을 다운시킴</li><li><b>Ping of Death</b> — 규격을 넘는 큰 ICMP를 단편화해 보내 <b>재조립 중 오버플로</b> 유발</li></ul><b>대응</b>: 방화벽에서 <b>재조립 후 검사</b>, 비정상 단편 차단, OS 패치."
      }
    ],
    "finalLiner": "IP 헤더 <b>기본 20바이트</b> — 식별자·플래그·오프셋(<b>단편화</b>), <b>TTL</b>(홉마다 −1, 0이면 폐기 → 루프 방지·traceroute), <b>프로토콜 1=ICMP·6=TCP·17=UDP</b>, 체크섬은 <b>헤더만</b> / <b>MTU 1500</b> 초과 시 단편화, <b>재조립은 목적지</b> / 악용=Tiny Fragment·Teardrop",
    "related": ["subnet", "netproto", "tcpheader"]
  },
  {
    "id": "subnet",
    "term": "IP 주소 체계 · 서브네팅 · 전송 방식",
    "en": "IP Address · Subnetting · Cast Types",
    "cat": "네트워크 보안",
    "tags": ["A/B/C/D/E 클래스", "사설 IP 3대역", "서브넷 마스크·CIDR", "호스트 수 2^n-2", "유니·브로드·멀티·애니캐스트"],
    "oneLiner": "IPv4=32비트, 클래스 A/B/C(D=멀티캐스트) / 서브넷 마스크로 네트워크·호스트 구분, 쓸 수 있는 호스트=2^n−2 / 전송 방식 4가지",
    "blocks": [
      {
        "k": "note",
        "title": "클래스 · 사설 IP",
        "d": "IPv4는 <b>32비트</b>(8비트씩 4묶음).<ul class='klist'><li><b>A</b> 1~126(<code>/8</code>) · <b>B</b> 128~191(<code>/16</code>) · <b>C</b> 192~223(<code>/24</code>)</li><li><b>D</b> 224~239 — <b>멀티캐스트 전용</b> · <b>E</b> 240~255 — 연구·예약</li><li><b>127.x.x.x</b> — <b>루프백</b>(자기 자신), 그래서 A클래스에서 127이 빠진다</li></ul><b>사설 IP(내부용, 인터넷에 직접 못 나감)</b>: <b>10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16</b> → 나갈 때 <b>NAT</b>로 공인 IP로 변환."
      },
      {
        "k": "note",
        "title": "서브네팅 (계산법)",
        "d": "<b>서브넷 마스크</b>는 IP에서 <b>어디까지가 네트워크</b>인지 표시한다(1=네트워크, 0=호스트). 표기는 <code>255.255.255.0</code> 또는 <b>CIDR</b> <code>/24</code>.<ul class='klist'><li><b>네트워크 주소</b> = 호스트 비트가 <b>전부 0</b> · <b>브로드캐스트 주소</b> = <b>전부 1</b></li><li><b>쓸 수 있는 호스트 수 = 2ⁿ − 2</b> (n=호스트 비트 수). <b>−2</b>는 네트워크·브로드캐스트 주소를 빼기 때문</li><li>예) <code>/24</code> → 호스트 8비트 → 2⁸−2 = <b>254대</b> / <code>/26</code> → 6비트 → <b>62대</b></li></ul><b>서브네팅을 하는 이유</b>: 주소 낭비를 줄이고, <b>브로드캐스트 도메인을 나눠</b> 트래픽·보안 영역을 분리하기 위해."
      },
      {
        "k": "note",
        "title": "데이터 전송 방식 4가지 (시험 단골)",
        "d": "<ul class='klist'><li><b>유니캐스트(Unicast)</b> — <b>1 : 1</b>, 특정 대상 하나에게</li><li><b>브로드캐스트(Broadcast)</b> — <b>1 : 전체</b>, 같은 네트워크 <b>모두</b>에게(라우터는 통과 못 함)</li><li><b>멀티캐스트(Multicast)</b> — <b>1 : 그룹</b>, 가입한 대상에게만. <b>D 클래스(224~239)</b>, 관리는 <b>IGMP</b></li><li><b>애니캐스트(Anycast)</b> — <b>1 : 가장 가까운 하나</b>. 같은 주소를 여러 곳에 두고 최단 경로의 하나가 응답(<b>IPv6</b>에서 도입, CDN·DNS에 활용)</li></ul>"
      },
      {
        "k": "safe",
        "title": "보안 관점",
        "d": "<b>브로드캐스트</b>는 증폭 공격(<b>스머프</b>)에 악용되므로 <b>디렉티드 브로드캐스트를 차단</b>한다. <b>사설 IP</b>와 NAT는 내부 구조를 숨기는 효과가 있고, <b>서브넷 분리 + ACL</b>로 부서·서버망을 격리하는 것이 기본 설계다."
      }
    ],
    "finalLiner": "IPv4 32비트 / <b>A 1~126·B 128~191·C 192~223·D 224~239(멀티캐스트)·E</b>, <b>127=루프백</b> / 사설 <b>10·172.16·192.168</b>(→NAT) / 호스트 수 <b>2ⁿ−2</b>(네트워크·브로드캐스트 제외) / 전송 <b>유니(1:1)·브로드(1:전체)·멀티(1:그룹, D클래스·IGMP)·애니(1:최근접)</b>",
    "related": ["ipheader", "routing", "netproto"]
  },
  {
    "id": "routing",
    "term": "라우팅 · 라우팅 프로토콜 분류",
    "en": "Routing · Static/Dynamic · IGP/EGP",
    "cat": "네트워크 보안",
    "tags": ["경로 결정", "정적 vs 동적", "IGP vs EGP", "거리벡터 vs 링크상태", "라우팅 테이블"],
    "oneLiner": "라우팅=목적지까지 최적 경로 결정 / 정적 vs 동적, AS 내부 IGP vs AS 간 EGP, 거리 벡터 vs 링크 상태로 분류",
    "blocks": [
      {
        "k": "def",
        "title": "라우팅이란 · 라우팅 테이블",
        "d": "<b>라우팅(Routing)</b> — 목적지 IP까지 <b>어느 경로로 보낼지 결정</b>하는 것(3계층 라우터의 역할). 결정된 대로 실제로 내보내는 것은 <b>포워딩</b>이라 구분한다.<br><b>라우팅 테이블</b>에는 <b>목적지 네트워크 · 넥스트 홉(다음 라우터) · 인터페이스 · 메트릭</b>이 들어 있고, 갈 곳을 못 찾으면 <b>기본 경로(Default Route, 0.0.0.0/0)</b>로 보낸다. 확인은 <code>route -n</code>·<code>netstat -r</code>·<code>ip route</code>."
      },
      {
        "k": "note",
        "title": "① 정적 vs 동적",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>정적 라우팅 (Static)</span><div class='row'>관리자가 <b>수동으로</b> 경로 입력. <b>소규모·단순망</b>에 적합. 부하가 없고 <b>보안상 안전</b>(경로 정보를 뿌리지 않음)하지만, <b>장애·변경에 자동 대응 못 한다</b>.</div></div><div class='cmp-item'><span class='cmp-label'>동적 라우팅 (Dynamic)</span><div class='row'>라우터끼리 <b>경로 정보를 주고받아 자동 학습</b>. 장애 시 <b>우회 경로를 스스로</b> 찾음. 대규모에 적합하나 <b>대역폭·CPU를 쓰고</b>, 경로 정보가 <b>위조되면 공격</b>에 노출된다.</div></div></div>"
      },
      {
        "k": "note",
        "title": "② IGP vs EGP · ③ 거리벡터 vs 링크상태",
        "d": "<b>AS(Autonomous System, 자율 시스템)</b> = 하나의 관리 주체가 운영하는 네트워크 집단.<ul class='klist'><li><b>IGP(내부 게이트웨이 프로토콜)</b> — <b>AS 내부</b>용: <b>RIP · OSPF · EIGRP</b></li><li><b>EGP(외부 게이트웨이 프로토콜)</b> — <b>AS 간</b>: <b>BGP</b></li></ul><div class='cmp two'><div class='cmp-item'><span class='cmp-label'>거리 벡터 (Distance Vector)</span><div class='row'><b>이웃에게 자기 라우팅 테이블 전체</b>를 주기적으로 알려줌. 구현이 단순하지만 <b>수렴이 느리고</b> 루프가 생길 수 있다. 예: <b>RIP</b></div></div><div class='cmp-item'><span class='cmp-label'>링크 상태 (Link State)</span><div class='row'>각자 <b>전체 네트워크 지도</b>를 갖고 <b>최단 경로를 직접 계산</b>(다익스트라). <b>수렴이 빠르고</b> 대규모에 적합하나 <b>메모리·CPU를 더 쓴다</b>. 예: <b>OSPF</b></div></div></div>"
      },
      {
        "k": "warn",
        "title": "보안 — 라우팅 공격",
        "d": "동적 라우팅은 <b>이웃 라우터의 말을 믿는다</b>는 전제 위에 있다. 그래서 <b>위조된 경로 정보</b>를 주입하면 트래픽을 공격자 쪽으로 끌어올 수 있다(<b>라우팅 테이블 변조·중간자 공격</b>). <b>ICMP Redirect</b>를 위조해 경로를 바꾸는 공격도 있다.<br><b>대응</b>: 라우팅 프로토콜 <b>인증</b>(MD5 등) 적용, 수신 경로 <b>필터링</b>, 불필요한 인터페이스에서 라우팅 <b>비활성화</b>, ICMP Redirect 무시 설정."
      }
    ],
    "finalLiner": "라우팅=<b>경로 결정</b>(테이블: 목적지·넥스트홉·메트릭, 기본경로 <code>0.0.0.0/0</code>) / <b>정적</b>(수동·안전·대응 못함) vs <b>동적</b>(자동·유연·위조 위험) / <b>IGP(RIP·OSPF)</b> vs <b>EGP(BGP)</b> / <b>거리벡터(RIP)</b> vs <b>링크상태(OSPF)</b> / 대응=라우팅 <b>인증</b>",
    "related": ["ripospf", "routersec", "netdevice"]
  },
  {
    "id": "ripospf",
    "term": "RIP · OSPF · BGP",
    "en": "RIP · OSPF · BGP",
    "cat": "네트워크 보안",
    "tags": ["RIP=거리벡터·홉", "최대 15홉", "OSPF=링크상태·다익스트라", "OSPF 메트릭=Cost", "BGP=AS 간"],
    "oneLiner": "RIP=거리 벡터·메트릭 홉 수·최대 15홉(소규모) / OSPF=링크 상태·다익스트라·메트릭 Cost·Area(대규모) / BGP=AS 간 경로 벡터",
    "blocks": [
      {
        "k": "note",
        "title": "RIP (Routing Information Protocol)",
        "d": "<ul class='klist'><li><b>거리 벡터</b> 방식, 메트릭은 <b>홉 수(hop count)</b> — 라우터를 몇 개 거치는가</li><li><b>최대 15홉</b>, <b>16이면 도달 불가</b>로 간주 → <b>소규모 네트워크</b>에만 적합</li><li><b>30초마다</b> 라우팅 테이블 전체를 알림 → 대역폭 낭비·<b>느린 수렴</b></li><li><b>RIPv1</b>=클래스풀·브로드캐스트 / <b>RIPv2</b>=클래스리스(VLSM 지원)·멀티캐스트·<b>인증 지원</b></li><li>UDP <b>520</b> 사용</li></ul>"
      },
      {
        "k": "note",
        "title": "OSPF (Open Shortest Path First)",
        "d": "<ul class='klist'><li><b>링크 상태</b> 방식, <b>다익스트라(SPF) 알고리즘</b>으로 최단 경로 계산</li><li>메트릭은 <b>Cost</b>(주로 <b>대역폭</b> 기반) → 홉 수만 세는 RIP보다 <b>현실적인 경로</b> 선택</li><li><b>홉 수 제한이 없고</b>, <b>Area</b>로 나눠 관리(중심이 <b>백본 Area 0</b>) → <b>대규모</b>에 적합</li><li><b>변화가 있을 때만</b> 갱신 정보를 보냄 → 효율적, <b>수렴이 빠름</b></li><li><b>인증 지원</b>(평문·MD5)</li></ul>"
      },
      {
        "k": "note",
        "title": "BGP · 비교 정리",
        "d": "<b>BGP(Border Gateway Protocol)</b> — <b>AS와 AS 사이</b>를 잇는 <b>EGP</b>. <b>경로 벡터</b> 방식으로 <b>거쳐 온 AS 목록</b>을 보고 판단하며, <b>TCP 179</b>를 사용한다. <b>인터넷 전체의 근간</b>.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>RIP</span><div class='row'>거리 벡터 · <b>홉 수</b> · <b>최대 15홉</b> · 30초 주기 · 소규모</div></div><div class='cmp-item'><span class='cmp-label'>OSPF</span><div class='row'>링크 상태 · <b>Cost(대역폭)</b> · 제한 없음 · 변경 시 갱신 · <b>Area</b> · 대규모</div></div><div class='cmp-item'><span class='cmp-label'>BGP</span><div class='row'>경로 벡터 · <b>AS 경로</b> · EGP · <b>TCP 179</b> · 인터넷 백본</div></div></div>"
      },
      {
        "k": "warn",
        "title": "보안",
        "d": "<b>RIP</b>은 v1에 인증이 없어 <b>가짜 경로 주입</b>이 쉽다 → <b>RIPv2 인증</b>이나 OSPF로 전환. <b>BGP 하이재킹</b>은 잘못된/악의적 경로 광고로 <b>대규모 트래픽을 가로채는</b> 사고로 이어진다(실제 인터넷 장애 사례 다수) → <b>RPKI·경로 필터링</b>으로 대응."
      }
    ],
    "finalLiner": "<b>RIP</b>=거리벡터·<b>홉 수</b>·<b>최대 15홉</b>·30초 주기·소규모(UDP 520) / <b>OSPF</b>=링크상태·<b>다익스트라</b>·메트릭 <b>Cost</b>·<b>Area 0</b>·대규모·변경시 갱신 / <b>BGP</b>=AS 간 <b>EGP</b>·경로 벡터·<b>TCP 179</b>",
    "related": ["routing", "routersec", "netdevice"]
  },
  {
    "id": "routersec",
    "term": "라우터 보안 · 패스워드 설정",
    "en": "Router Security & Passwords",
    "cat": "네트워크 보안",
    "tags": ["enable secret > password", "console·vty 접근", "Telnet 금지·SSH", "service password-encryption", "ACL로 관리 제한"],
    "oneLiner": "라우터는 접근 경로(콘솔·VTY·AUX)마다 패스워드를 걸고, enable password 대신 암호화되는 enable secret 사용 / 원격 접속은 Telnet 대신 SSH",
    "blocks": [
      {
        "k": "note",
        "title": "접근 경로별 패스워드",
        "d": "<ul class='klist'><li><b>콘솔(Console)</b> — 장비에 직접 케이블로 접속(<code>line console 0</code>)</li><li><b>VTY(가상 터미널)</b> — <b>원격 접속</b>(Telnet/SSH) 경로(<code>line vty 0 4</code>)</li><li><b>AUX</b> — 모뎀 등 보조 포트. <b>안 쓰면 비활성화</b></li><li><b>Enable</b> — 설정을 바꿀 수 있는 <b>관리자(특권) 모드</b> 진입 패스워드</li></ul><b>경로마다 각각</b> 설정해야 한다 — 하나라도 비어 있으면 그쪽으로 뚫린다."
      },
      {
        "k": "warn",
        "title": "enable password vs enable secret (핵심)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>enable password</span><div class='row'>설정 파일에 <b>평문으로 저장</b>되어 <code>show running-config</code>만 봐도 <b>그대로 노출</b>된다.</div></div><div class='cmp-item'><span class='cmp-label'>enable secret</span><div class='row'><b>해시로 저장</b>되어 되돌릴 수 없다. <b>둘 다 설정하면 secret이 우선</b> 적용된다 → <b>secret을 써야 한다</b>.</div></div></div><b><code>service password-encryption</code></b> — 설정 파일 안의 <b>다른 평문 패스워드들을 가려주는</b> 명령. 다만 <b>암호화 강도가 약해 복호화가 가능</b>하므로 <b>어깨너머 보기 방지 수준</b>으로만 여겨야 한다."
      },
      {
        "k": "safe",
        "title": "라우터 보안 기본 수칙",
        "d": "<ul class='klist'><li><b>Telnet 금지 → SSH 사용</b>(Telnet은 <b>패스워드까지 평문</b>)</li><li><b>ACL</b>로 <b>관리 접속 가능한 IP를 제한</b>하고, 관리는 <b>분리된 관리망</b>에서</li><li><b>기본 계정·패스워드 변경</b>, 계정별 권한(권한 레벨) 분리</li><li><b>불필요한 서비스 차단</b> — 소스 라우팅, 디렉티드 브로드캐스트, 불필요한 ICMP, CDP 등</li><li><b>로깅(syslog)·시간 동기화(NTP)</b>로 감사 추적 확보</li><li>라우팅 프로토콜 <b>인증</b> 적용, 펌웨어 <b>패치</b></li></ul>"
      }
    ],
    "finalLiner": "접근 경로 <b>콘솔·VTY(원격)·AUX·Enable</b> 각각 패스워드 / <b>enable password=평문 노출</b> vs <b>enable secret=해시(우선 적용, 권장)</b> / <code>service password-encryption</code>은 <b>약한 보호</b> / <b>Telnet 대신 SSH</b>·ACL로 관리 IP 제한·불필요 서비스 차단",
    "related": ["routing", "ripospf", "sudocap"]
  }
]
);
