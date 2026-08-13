/* 네트워크 일반 (PART 02) — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "netbasic",
    "term": "네트워크 기초 (프로토콜 · 유형 · 토폴로지)",
    "en": "Protocol · LAN/WAN · Topology",
    "cat": "네트워크 보안",
    "tags": ["프로토콜 3요소", "구문·의미·순서", "PAN<LAN<MAN<WAN", "버스·스타·링·메시", "스타=가장 널리"],
    "oneLiner": "프로토콜=통신 규약(3요소 구문·의미·순서) / 거리별 PAN<LAN<MAN<WAN / 토폴로지=연결 모양(버스·스타·링·메시·트리)",
    "blocks": [
      {
        "k": "def",
        "title": "네트워크 · 프로토콜",
        "d": "<b>네트워크</b>=둘 이상의 장치를 연결해 <b>자원·정보를 주고받는 체계</b>. <b>프로토콜(Protocol)</b>=서로 다른 장치가 통신하기 위해 미리 약속한 <b>통신 규약</b>. 사람으로 치면 '같은 언어와 대화 예절'."
      },
      {
        "k": "note",
        "title": "프로토콜 3요소 (시험 단골)",
        "d": "<ul class='klist'><li><b>구문(Syntax)</b> — 데이터의 <b>형식·구조</b>(어떤 순서로 몇 비트씩)</li><li><b>의미(Semantics)</b> — 각 비트가 <b>무엇을 뜻하는지</b>, 어떻게 처리·제어할지</li><li><b>순서(Timing)</b> — <b>언제·얼마나 빠르게</b> 보낼지(송신 시점·속도 조절)</li></ul><b>구·의·순</b>으로 외우면 편하다. '3요소가 아닌 것?'으로 자주 나온다."
      },
      {
        "k": "note",
        "title": "거리에 따른 유형 (좁은 → 넓은)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>PAN</div><div class='es-note'>Personal — 개인 주변 수 m(블루투스).</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>LAN</div><div class='es-note'>Local — <b>건물·사무실</b> 단위. 속도 빠르고 오류 적음.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>MAN</div><div class='es-note'>Metropolitan — <b>도시</b> 규모.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>WAN</div><div class='es-note'>Wide — <b>국가·대륙</b> 간(인터넷). 느리고 오류율↑.</div></div></div>"
      },
      {
        "k": "note",
        "title": "토폴로지 — 연결 모양",
        "d": "<ul class='klist'><li><b>버스(Bus)</b> — 하나의 <b>공통 케이블</b>에 모두 연결. 설치 쉽고 저렴하지만 <b>충돌 많고</b> 백본이 끊기면 <b>전체 마비</b>.</li><li><b>스타(Star)</b> — <b>중앙 장비(허브·스위치)</b>에 각자 연결. <b>가장 널리 쓰임</b>. 관리·장애 파악 쉬움. 단 <b>중앙 장비가 고장나면 전체 마비</b>.</li><li><b>링(Ring)</b> — 원형으로 연결해 <b>한 방향</b> 전달(토큰 링). 충돌은 없지만 <b>한 노드 장애가 전체에 영향</b>.</li><li><b>메시(Mesh)</b> — <b>모두가 서로</b> 연결. <b>신뢰성 최고</b>지만 <b>비용·회선 수 폭증</b>(완전 연결 시 <b>n(n-1)/2</b>개).</li><li><b>트리(Tree)</b> — 계층적 확장 구조(스타를 여러 단으로).</li></ul>"
      }
    ],
    "finalLiner": "프로토콜 <b>3요소=구문(Syntax)·의미(Semantics)·순서(Timing)</b> / 거리 <b>PAN<LAN<MAN<WAN</b> / 토폴로지: 버스(저렴·충돌), <b>스타(가장 널리·중앙 고장 취약)</b>, 링(단방향), <b>메시(신뢰성 최고·회선 n(n-1)/2)</b>, 트리",
    "related": ["osi", "netdevice"]
  },
  {
    "id": "osi",
    "term": "OSI 7계층",
    "en": "OSI 7 Layer Model",
    "cat": "네트워크 보안",
    "tags": ["물데네전세표응", "PDU 비트·프레임·패킷·세그먼트", "2계층 MAC·3계층 IP", "4계층 포트", "표준 참조 모델"],
    "oneLiner": "통신 과정을 7단계로 나눈 표준 참조 모델 / 1물리·2데이터링크·3네트워크·4전송·5세션·6표현·7응용 / 계층별 PDU와 주소가 다름",
    "blocks": [
      {
        "k": "def",
        "title": "왜 나누나",
        "d": "국제표준화기구(ISO)가 만든 <b>참조 모델</b>. 복잡한 통신을 <b>기능별로 쪼개</b> 각 계층이 <b>독립적</b>으로 동작하게 한다 → 한 계층을 바꿔도 <b>다른 계층에 영향이 없고</b>(모듈화), 문제 발생 시 <b>어느 계층인지 좁혀서</b> 진단할 수 있다. 실제 인터넷은 TCP/IP를 쓰지만, <b>설명·시험의 기준</b>은 OSI다."
      },
      {
        "k": "note",
        "title": "7계층 (아래 → 위)",
        "d": "<ul class='klist'><li><b>1 물리(Physical)</b> — 비트를 <b>전기·광 신호</b>로. 케이블·리피터·허브. PDU=<b>비트</b></li><li><b>2 데이터링크(Data Link)</b> — <b>인접 장비</b> 간 전달, <b>오류 검출</b>, <b>MAC 주소</b>. 스위치·브리지. PDU=<b>프레임</b></li><li><b>3 네트워크(Network)</b> — <b>종단 간 경로 결정(라우팅)</b>, <b>IP 주소</b>. 라우터. PDU=<b>패킷</b></li><li><b>4 전송(Transport)</b> — <b>종단 간 신뢰성</b>·흐름 제어, <b>포트 번호</b>. TCP·UDP. PDU=<b>세그먼트</b></li><li><b>5 세션(Session)</b> — 연결의 <b>설정·유지·종료</b>, 동기점</li><li><b>6 표현(Presentation)</b> — <b>암호화·압축·인코딩</b>(형식 변환)</li><li><b>7 응용(Application)</b> — 사용자 서비스. HTTP·FTP·SMTP·DNS</li></ul>"
      },
      {
        "k": "note",
        "title": "암기법 · 자주 묻는 대응",
        "d": "아래부터 <b>물–데–네–전–세–표–응</b>.<p class='on-key'><span class='lbl'>계층별 주소·PDU (표 형태로 출제)</span><b>2계층=MAC 주소·프레임</b> · <b>3계층=IP 주소·패킷</b> · <b>4계층=포트 번호·세그먼트</b>.<br><b>암호화는 6계층(표현)</b>, <b>라우팅은 3계층</b>, <b>오류 검출(인접 구간)은 2계층</b>, <b>흐름 제어·재전송은 4계층</b>.</p>"
      },
      {
        "k": "warn",
        "title": "시험 함정",
        "d": "① <b>순서 뒤집기</b> — 표현↔세션, 네트워크↔전송을 바꿔 낸다. ② <b>역할 바꿔치기</b> — '라우팅=2계층'(X, 3계층), '암호화=7계층'(X, 6계층). ③ <b>오류 제어</b>는 <b>2계층(인접 구간)</b>과 <b>4계층(종단 간)</b> 둘 다 있으나 <b>범위가 다르다</b>."
      }
    ],
    "finalLiner": "<b>물–데–네–전–세–표–응</b> / PDU <b>비트–프레임–패킷–세그먼트–데이터</b> / 주소 <b>2계층 MAC · 3계층 IP · 4계층 포트</b> / <b>라우팅=3</b>, <b>암호화=6</b>, 흐름제어·재전송=4",
    "related": ["tcpip", "netdevice", "netbasic"]
  },
  {
    "id": "tcpip",
    "term": "TCP/IP 4계층",
    "en": "TCP/IP Model",
    "cat": "네트워크 보안",
    "tags": ["실제 인터넷 표준", "네트워크액세스·인터넷·전송·응용", "OSI 대응", "캡슐화", "헤더 추가"],
    "oneLiner": "실제 인터넷이 쓰는 4계층 모델 / 네트워크 액세스(OSI 1·2)·인터넷(3)·전송(4)·응용(5·6·7) / 내려갈수록 헤더가 붙는 캡슐화",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "OSI가 <b>이론적 참조 모델</b>이라면, TCP/IP는 <b>실제로 인터넷이 돌아가는 방식</b>(사실상 표준). 계층이 <b>4개</b>로 더 단순하다."
      },
      {
        "k": "note",
        "title": "OSI ↔ TCP/IP 대응 (그대로 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>4 응용 (Application)</span><div class='row'>OSI <b>5·6·7</b>(세션+표현+응용)을 <b>하나로</b>. HTTP·FTP·SMTP·DNS·SNMP</div></div><div class='cmp-item'><span class='cmp-label'>3 전송 (Transport)</span><div class='row'>OSI <b>4</b>와 동일. <b>TCP·UDP</b>, 포트 번호</div></div><div class='cmp-item'><span class='cmp-label'>2 인터넷 (Internet)</span><div class='row'>OSI <b>3</b>과 동일. <b>IP·ARP·ICMP·IGMP</b>, 라우팅</div></div><div class='cmp-item'><span class='cmp-label'>1 네트워크 액세스 (Network Access)</span><div class='row'>OSI <b>1·2</b>(물리+데이터링크)를 <b>하나로</b>. 이더넷, MAC 주소</div></div></div><b>핵심: 위아래 양 끝이 합쳐졌다</b> — 응용에서 3개(5·6·7), 맨 아래에서 2개(1·2)."
      },
      {
        "k": "note",
        "title": "캡슐화 (Encapsulation)",
        "d": "데이터가 <b>아래 계층으로 내려갈 때마다 그 계층의 헤더가 덧붙는다</b>.<pre>데이터 → [TCP헤더|데이터] → [IP헤더|TCP헤더|데이터] → [프레임헤더|IP헤더|TCP헤더|데이터|트레일러]</pre>받는 쪽은 반대로 <b>헤더를 하나씩 벗기며(역캡슐화)</b> 위로 올린다. 그래서 <b>패킷을 분석하면 계층별 헤더가 겹겹이</b> 보인다."
      }
    ],
    "finalLiner": "TCP/IP 4계층 = <b>네트워크액세스(OSI 1·2) · 인터넷(3) · 전송(4) · 응용(5·6·7)</b> / 인터넷 계층=<b>IP·ARP·ICMP</b>, 전송=<b>TCP·UDP</b> / 내려갈 때 <b>헤더가 붙는 캡슐화</b>",
    "related": ["osi", "tcpudp", "netproto"]
  },
  {
    "id": "netdevice",
    "term": "OSI 계층별 네트워크 장비",
    "en": "Repeater · Switch · Router · Gateway",
    "cat": "네트워크 보안",
    "tags": ["1계층 리피터·허브", "2계층 브리지·스위치", "3계층 라우터", "L4 스위치", "콜리전/브로드캐스트 도메인"],
    "oneLiner": "1계층 리피터·허브(신호) / 2계층 브리지·스위치(MAC) / 3계층 라우터(IP·경로) / 4계층 L4스위치(포트) / 7계층 게이트웨이(프로토콜 변환)",
    "blocks": [
      {
        "k": "note",
        "title": "계층별 장비 (그대로 출제)",
        "d": "<ul class='klist'><li><b>1 물리 — 리피터(Repeater)</b>: 약해진 <b>신호를 증폭·재생</b>해 거리 연장. <b>허브(Hub)</b>: 멀티포트 리피터, <b>받은 걸 모든 포트로 그냥 복사</b></li><li><b>2 데이터링크 — 브리지(Bridge)</b>: <b>MAC 주소</b>를 보고 필요한 쪽으로만 전달(소프트웨어 처리). <b>스위치(Switch)</b>: 브리지를 <b>하드웨어(ASIC)</b>로 구현해 빠름. <b>MAC 주소 테이블</b>로 포트 결정</li><li><b>3 네트워크 — 라우터(Router)</b>: <b>IP 주소</b>로 <b>다른 네트워크 간 최적 경로 결정(라우팅)</b>. L3 스위치도 여기</li><li><b>4 전송 — L4 스위치</b>: <b>포트 번호</b>까지 보고 분배 → <b>부하 분산(로드밸런싱)</b></li><li><b>7 응용 — 게이트웨이(Gateway)</b>: <b>서로 다른 프로토콜 간 변환</b>. L7 스위치</li></ul>"
      },
      {
        "k": "warn",
        "title": "허브 vs 스위치 — 보안 차이 (중요)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>허브 (1계층)</span><div class='row'>받은 데이터를 <b>모든 포트에 복사</b> → 남의 트래픽도 내 포트로 온다 → <b>스니핑(도청)에 취약</b>. 모두가 <b>하나의 콜리전 도메인</b> → 충돌 많음</div></div><div class='cmp-item'><span class='cmp-label'>스위치 (2계층)</span><div class='row'><b>목적지 MAC의 포트로만</b> 전달 → 기본적으로 <b>스니핑이 어렵다</b>. <b>포트마다 콜리전 도메인 분리</b></div></div></div><p class='on-key'><span class='lbl'>단, 스위치도 안전하지 않다</span><b>MAC 플러딩</b>(주소 테이블을 가짜로 채워 허브처럼 동작시킴)·<b>ARP 스푸핑</b>으로 스위치 환경에서도 스니핑이 가능하다.</p>"
      },
      {
        "k": "note",
        "title": "도메인 정리 (자주 나옴)",
        "d": "<ul class='klist'><li><b>콜리전(충돌) 도메인</b> — 충돌이 일어나는 범위. <b>허브</b>는 전체가 하나, <b>스위치</b>는 <b>포트별로 분리</b></li><li><b>브로드캐스트 도메인</b> — 브로드캐스트가 퍼지는 범위. <b>라우터가 분리</b>한다(스위치는 못 나눔, 단 <b>VLAN</b>으로는 가능)</li></ul>"
      }
    ],
    "finalLiner": "<b>1 리피터·허브</b>(신호) · <b>2 브리지·스위치</b>(MAC) · <b>3 라우터</b>(IP·라우팅) · <b>4 L4스위치</b>(포트·부하분산) · <b>7 게이트웨이</b>(프로토콜 변환) / <b>허브=스니핑 취약</b>, 스위치=포트별 전달 / 콜리전은 <b>스위치</b>가, 브로드캐스트는 <b>라우터</b>가 분리",
    "related": ["osi", "netbasic", "tcpip"]
  },
  {
    "id": "tcpudp",
    "term": "TCP vs UDP",
    "en": "Transmission Control / User Datagram Protocol",
    "cat": "네트워크 보안",
    "tags": ["TCP=연결형·신뢰성", "UDP=비연결·빠름", "3-way handshake", "헤더 20 vs 8바이트", "SYN·ACK·FIN·RST"],
    "oneLiner": "TCP=연결형·신뢰성 보장(3-way handshake·재전송·흐름제어, 헤더 20B) / UDP=비연결·빠르고 가벼움(헤더 8B, 실시간·DNS)",
    "blocks": [
      {
        "k": "note",
        "title": "비교 (표째로 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>TCP (전송 제어)</span><div class='row'><b>연결형</b>(3-way handshake) · <b>신뢰성 보장</b>(순서 보장·확인응답·<b>재전송</b>) · <b>흐름 제어·혼잡 제어</b> · 헤더 <b>20바이트</b> · 느리지만 정확<br>용도: <b>HTTP·FTP·SMTP</b> 등 정확해야 하는 것</div></div><div class='cmp-item'><span class='cmp-label'>UDP (사용자 데이터그램)</span><div class='row'><b>비연결형</b> · <b>신뢰성 없음</b>(순서·도착 보장 X) · 제어 기능 없음 · 헤더 <b>8바이트</b> · <b>빠르고 가벼움</b><br>용도: <b>DNS·DHCP·SNMP·TFTP</b>, 실시간 <b>스트리밍·VoIP</b></div></div></div>"
      },
      {
        "k": "note",
        "title": "3-way handshake (연결 수립)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 SYN</div><div class='es-note'>클라이언트 → 서버: “연결하자”</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 SYN+ACK</div><div class='es-note'>서버 → 클라이언트: “좋다, 나도 연결하자”</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 ACK</div><div class='es-note'>클라이언트 → 서버: “확인”</div></div></div><b>종료는 4-way</b>: <b>FIN → ACK → FIN → ACK</b>(양쪽이 각자 끊어야 해서 한 단계 더 많다).<p class='on-key'><span class='lbl'>보안 연결</span><b>SYN 플러딩</b>=①만 잔뜩 보내고 ③을 안 보내 서버의 <b>연결 대기 자원(백로그)을 고갈</b>시키는 DoS. 그래서 3-way handshake는 <b>공격과 세트로</b> 나온다.</p>"
      },
      {
        "k": "note",
        "title": "TCP 제어 플래그 6가지",
        "d": "<b>URG</b>(긴급) · <b>ACK</b>(확인응답) · <b>PSH</b>(즉시 전달) · <b>RST</b>(연결 강제 종료·거부) · <b>SYN</b>(연결 요청) · <b>FIN</b>(정상 종료).<br>포트 스캔이 이 플래그를 조합해 이뤄진다(<b>SYN 스캔</b>·FIN 스캔 등) — 응답이 <b>SYN+ACK면 열림</b>, <b>RST면 닫힘</b>."
      }
    ],
    "finalLiner": "<b>TCP</b>=연결형·신뢰성(3-way <b>SYN→SYN+ACK→ACK</b>, 종료 <b>4-way</b>)·흐름/혼잡제어·헤더 <b>20B</b> / <b>UDP</b>=비연결·무보장·헤더 <b>8B</b>·빠름(DNS·스트리밍) / 플래그 <b>URG·ACK·PSH·RST·SYN·FIN</b>",
    "related": ["tcpip", "netproto", "osi"]
  },
  {
    "id": "netproto",
    "term": "주요 프로토콜 (IP · ARP · ICMP)",
    "en": "IP · ARP/RARP · ICMP · IGMP",
    "cat": "네트워크 보안",
    "tags": ["IP=비연결·비신뢰", "ARP: IP→MAC", "RARP: MAC→IP", "ICMP=오류·제어(ping)", "ARP 스푸핑"],
    "oneLiner": "IP=주소지정·라우팅(비연결·비신뢰) / ARP=IP를 MAC으로 변환(RARP는 반대) / ICMP=오류·상태 메시지(ping) / IGMP=멀티캐스트",
    "blocks": [
      {
        "k": "note",
        "title": "인터넷 계층 4총사",
        "d": "<ul class='klist'><li><b>IP</b>(Internet Protocol) — <b>주소 지정과 경로 배정(라우팅)</b>. <b>비연결형·비신뢰성</b>(도착·순서를 보장하지 않음 → 신뢰성은 <b>TCP가 담당</b>)</li><li><b>ARP</b>(Address Resolution Protocol) — <b>IP 주소 → MAC 주소</b> 변환. 실제 전송은 MAC으로 하므로 반드시 필요</li><li><b>RARP</b>(Reverse ARP) — <b>MAC → IP</b>(반대). 자기 IP를 모르는 장비가 사용</li><li><b>ICMP</b>(Internet Control Message Protocol) — <b>오류 보고·상태 확인</b> 메시지. <b><code>ping</code>·<code>traceroute</code></b>가 이걸 씀</li><li><b>IGMP</b>(Internet Group Management Protocol) — <b>멀티캐스트</b> 그룹 관리</li></ul>"
      },
      {
        "k": "warn",
        "title": "ARP 스푸핑 (매우 자주 출제)",
        "d": "ARP에는 <b>인증이 없다</b> — 누가 “그 IP는 내 MAC이야”라고 응답해도 <b>그대로 믿는다</b>. 공격자가 <b>위조 ARP 응답</b>을 뿌려 피해자의 ARP 캐시를 오염시키면, 트래픽이 <b>공격자를 거쳐</b> 흐른다(<b>중간자 공격·스니핑</b>). <b>스위치 환경에서도 도청이 가능해지는</b> 대표 기법.<p class='on-key'><span class='lbl'>대응</span><b>정적(static) ARP 등록</b>, ARP 캐시 <b>모니터링</b>(<code>arp -a</code>), <b>동적 ARP 검사(DAI)</b>·포트 보안, 암호화 통신(HTTPS)으로 <b>가로채도 못 읽게</b>.</p>"
      },
      {
        "k": "warn",
        "title": "ICMP 악용",
        "d": "<b>스캐닝</b>(ping 스윕으로 살아있는 호스트 탐색) · <b>ICMP 플러딩</b>(대량 전송으로 마비) · <b>스머프(Smurf) 공격</b>(출발지를 피해자로 위조해 <b>브로드캐스트</b>로 ping → 모든 응답이 피해자에게 몰림) · <b>터널링</b>(ICMP 페이로드에 데이터를 숨겨 유출).<br>그래서 방화벽에서 <b>불필요한 ICMP를 차단</b>하고, <b>디렉티드 브로드캐스트를 비활성화</b>한다."
      }
    ],
    "finalLiner": "<b>IP</b>=주소·라우팅(<b>비연결·비신뢰</b>) / <b>ARP</b>=IP→MAC, <b>RARP</b>=MAC→IP / <b>ICMP</b>=오류·제어(ping·traceroute) / <b>IGMP</b>=멀티캐스트 / <b>ARP는 인증이 없어 스푸핑</b>→중간자·스니핑, 대응=정적 ARP·DAI",
    "related": ["tcpip", "tcpudp", "netdevice"]
  }
]
);
