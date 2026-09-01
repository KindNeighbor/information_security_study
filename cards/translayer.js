/* 네트워크 활용(TCP/IP) — 전송 계층 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "translayer",
    "term": "전송 계층 · 세그먼트 · 포트",
    "en": "Transport Layer · Segment · Port",
    "cat": "네트워크 보안",
    "tags": ["PDU=세그먼트", "포트로 프로세스 구분", "well-known 0~1023", "흐름·혼잡 제어", "주요 포트 암기"],
    "oneLiner": "종단 간(end-to-end) 전달을 책임지는 4계층 / PDU=세그먼트 / 포트 번호로 프로세스를 구분(0~1023 well-known)",
    "blocks": [
      {
        "k": "def",
        "title": "역할 · 세그먼트",
        "d": "3계층(IP)이 <b>호스트까지</b> 데이터를 보내준다면, 전송 계층은 <b>그 안의 어느 프로그램에게</b> 줄지까지 책임진다(<b>종단 간·end-to-end</b>).<ul class='klist'><li><b>세그먼트(Segment)</b> — 전송 계층의 <b>PDU</b>. 상위 데이터를 <b>전송 가능한 크기로 쪼개고</b> TCP 헤더를 붙인 단위(UDP는 <b>데이터그램</b>이라 부른다)</li><li><b>포트 번호</b> — 같은 컴퓨터 안의 <b>프로세스를 구분</b>하는 번호. IP=집 주소, <b>포트=몇 호</b></li><li><b>신뢰성·흐름 제어·혼잡 제어</b>(TCP만) — 순서 보장, 재전송, 속도 조절</li></ul>"
      },
      {
        "k": "note",
        "title": "포트 번호 범위 (시험 단골)",
        "d": "<ul class='klist'><li><b>0 ~ 1023 — 잘 알려진 포트(Well-known)</b>: 표준 서비스용. 서버가 사용</li><li><b>1024 ~ 49151 — 등록 포트(Registered)</b>: 특정 업체·응용에 등록</li><li><b>49152 ~ 65535 — 동적/사설 포트(Dynamic)</b>: 클라이언트가 접속할 때마다 <b>임시로</b> 받는 번호</li></ul>포트는 <b>16비트</b>라 <b>0~65535</b>까지 존재한다."
      },
      {
        "k": "note",
        "title": "주요 포트 (그대로 출제)",
        "d": "<ul class='klist'><li><b>20/21 FTP</b>(20=데이터, 21=제어) · <b>22 SSH</b> · <b>23 Telnet</b> · <b>25 SMTP</b></li><li><b>53 DNS</b>(질의 UDP·존 전송 TCP) · <b>67/68 DHCP</b> · <b>69 TFTP</b>(UDP)</li><li><b>80 HTTP</b> · <b>110 POP3</b> · <b>143 IMAP</b> · <b>161/162 SNMP</b> · <b>389 LDAP</b></li><li><b>443 HTTPS</b> · <b>445 SMB</b> · <b>514 syslog</b> · <b>3306 MySQL</b> · <b>3389 RDP</b></li></ul><b>UDP를 쓰는 대표</b>: DNS(질의)·DHCP·TFTP·SNMP·syslog. <b>암기 짝</b>: 22 SSH ↔ 23 Telnet(평문), 80 HTTP ↔ 443 HTTPS."
      },
      {
        "k": "safe",
        "title": "보안 관점",
        "d": "열린 포트는 곧 <b>공격 표면</b>이다. <b>포트 스캔</b>(nmap)으로 어떤 서비스가 도는지 파악하는 것이 침투의 첫 단계이므로, <b>불필요한 포트·서비스를 닫고</b> 방화벽에서 <b>필요한 것만 허용</b>한다. 확인은 <code>netstat -an</code>·<code>ss -tuln</code>."
      }
    ],
    "finalLiner": "전송 계층=<b>종단 간</b> 전달, PDU=<b>세그먼트</b>, <b>포트로 프로세스 구분</b>(16비트, 0~65535) / <b>0~1023 well-known · 1024~49151 등록 · 49152~ 동적</b> / 22 SSH·23 Telnet·25 SMTP·53 DNS·80 HTTP·443 HTTPS·161 SNMP",
    "related": ["tcpheader", "udpheader", "tcpudp"]
  },
  {
    "id": "tcpheader",
    "term": "TCP 헤더 구조",
    "en": "TCP Header",
    "cat": "네트워크 보안",
    "tags": ["기본 20바이트", "순서번호·확인응답번호", "플래그 6종", "윈도우=흐름제어", "옵션 가변"],
    "oneLiner": "기본 20바이트 / 포트(각16bit)·순서번호(32)·확인응답번호(32)·헤더길이·플래그6·윈도우크기·체크섬·긴급포인터·옵션",
    "blocks": [
      {
        "k": "note",
        "title": "필드 (순서대로)",
        "d": "<ul class='klist'><li><b>출발지 포트 / 목적지 포트</b> — 각 <b>16비트</b></li><li><b>순서 번호(Sequence Number, 32비트)</b> — 이 세그먼트 데이터의 <b>첫 바이트 번호</b>. <b>순서 보장·재조립</b>에 사용</li><li><b>확인 응답 번호(Acknowledgment Number, 32비트)</b> — <b>다음에 받기를 기대하는</b> 바이트 번호(여기까지 잘 받았다는 뜻)</li><li><b>데이터 오프셋(헤더 길이, 4비트)</b> — 헤더가 몇 워드인지(옵션 때문에 가변)</li><li><b>예약(Reserved)</b> — 미사용</li><li><b>제어 플래그(6비트)</b> — <b>URG·ACK·PSH·RST·SYN·FIN</b></li><li><b>윈도우 크기(16비트)</b> — 한 번에 받을 수 있는 양 → <b>흐름 제어</b></li><li><b>체크섬(16비트)</b> — 오류 검출 · <b>긴급 포인터</b> — URG와 함께 사용</li><li><b>옵션(가변)</b> — MSS·윈도우 스케일 등</li></ul><b>기본 크기 20바이트</b>(옵션 없을 때). UDP(8바이트)와의 대비가 자주 나온다."
      },
      {
        "k": "note",
        "title": "순서번호 · 확인응답번호가 하는 일",
        "d": "TCP가 <b>신뢰성</b>을 갖는 근거다. 보낸 쪽은 <b>순서 번호</b>로 조각에 번호를 매기고, 받은 쪽은 <b>확인 응답 번호</b>로 '여기까지 받았다'를 알린다. <b>ACK가 안 오면 재전송</b>하고, 도착 순서가 뒤바뀌어도 <b>번호로 재조립</b>한다."
      },
      {
        "k": "warn",
        "title": "보안 — 헤더를 노리는 공격",
        "d": "<ul class='klist'><li><b>세션 하이재킹</b> — <b>순서 번호를 예측</b>해 정상 연결에 끼어든다 → 대응은 <b>초기 순서번호(ISN) 난수화</b></li><li><b>플래그 조작 스캔</b> — SYN·FIN·NULL·XMAS 스캔으로 <b>방화벽·IDS 우회</b>를 시도</li><li><b>RST 공격</b> — 위조한 RST로 <b>연결을 강제 종료</b>시킨다</li></ul>"
      }
    ],
    "finalLiner": "TCP 헤더 <b>기본 20바이트</b> — 포트(16×2)·<b>순서번호(32)</b>·<b>확인응답번호(32)</b>·헤더길이·<b>플래그 6(URG·ACK·PSH·RST·SYN·FIN)</b>·<b>윈도우(흐름제어)</b>·체크섬·긴급포인터·옵션 / 순서번호 예측=<b>세션 하이재킹</b>",
    "related": ["tcpstate", "udpheader", "tcpudp"]
  },
  {
    "id": "tcpstate",
    "term": "3-way Handshake · TCP 연결 상태",
    "en": "3-way Handshake · TCP States",
    "cat": "네트워크 보안",
    "tags": ["SYN→SYN+ACK→ACK", "4-way 종료", "LISTEN·ESTABLISHED", "TIME_WAIT·CLOSE_WAIT", "netstat -an"],
    "oneLiner": "연결 수립=3-way(SYN→SYN+ACK→ACK), 종료=4-way(FIN→ACK→FIN→ACK) / 상태는 netstat으로 확인(SYN_RECEIVED 폭증=SYN 플러딩)",
    "blocks": [
      {
        "k": "note",
        "title": "3-way handshake — 왜 3번인가",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 SYN</div><div class='es-note'>클라이언트: '연결하자' + <b>내 순서번호</b> 알림</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 SYN+ACK</div><div class='es-note'>서버: '알겠다'(ACK) + <b>내 순서번호도</b> 알림(SYN)</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 ACK</div><div class='es-note'>클라이언트: '확인' → <b>양쪽 모두</b> 준비 완료</div></div></div><b>양방향</b> 통신이라 <b>서로의 순서번호를 교환·확인</b>해야 해서 3번이 필요하다. 종료가 <b>4-way</b>인 이유는, 한쪽이 끝나도 <b>반대 방향은 남아 있을 수 있어</b> 각자 따로 닫기 때문이다(FIN → ACK → FIN → ACK)."
      },
      {
        "k": "note",
        "title": "주요 연결 상태 (netstat으로 확인)",
        "d": "<ul class='klist'><li><b>LISTEN</b> — 서버가 <b>연결을 기다리는</b> 중(포트 열림)</li><li><b>SYN_SENT</b> — 클라이언트가 SYN을 보내고 응답 대기</li><li><b>SYN_RECEIVED</b> — SYN을 받고 <b>마지막 ACK를 기다리는</b> 중</li><li><b>ESTABLISHED</b> — <b>연결 완료</b>, 데이터 송수신 중</li><li><b>FIN_WAIT_1 / FIN_WAIT_2</b> — 내가 먼저 종료 요청한 뒤</li><li><b>CLOSE_WAIT</b> — <b>상대가 끊자고 했고 내가 닫기를 기다리는</b> 상태</li><li><b>TIME_WAIT</b> — 마지막 ACK를 보낸 뒤 <b>일정 시간 대기</b>(지연 패킷 정리·ACK 유실 대비)</li><li><b>CLOSED</b> — 연결 없음</li></ul>확인 명령: <code>netstat -an</code> · <code>netstat -ant</code>(TCP만) · <code>ss -tan</code>"
      },
      {
        "k": "warn",
        "title": "상태로 읽는 이상 징후 (실무·시험)",
        "d": "<ul class='klist'><li><b>SYN_RECEIVED가 대량</b> → <b>SYN 플러딩</b> 공격 징후(3-way의 마지막 ACK를 안 보내 <b>백로그 큐 고갈</b>)</li><li><b>CLOSE_WAIT가 계속 쌓임</b> → <b>애플리케이션이 소켓을 닫지 않는 버그</b>(자원 누수)</li><li><b>ESTABLISHED가 비정상적으로 많음</b> → 과부하 또는 <b>백도어·비인가 연결</b> 의심</li></ul><b>대응</b>: SYN 쿠키, 백로그 큐 확대, 타임아웃 단축, 방화벽·IPS."
      }
    ],
    "finalLiner": "수립 <b>3-way(SYN→SYN+ACK→ACK)</b> — 양방향이라 순서번호를 서로 확인 / 종료 <b>4-way(FIN→ACK→FIN→ACK)</b> / 상태 <b>LISTEN·ESTABLISHED·TIME_WAIT·CLOSE_WAIT</b>, 확인은 <code>netstat -an</code> / <b>SYN_RECEIVED 폭증=SYN 플러딩</b>",
    "related": ["tcpheader", "tcpudp", "translayer"]
  },
  {
    "id": "udpheader",
    "term": "UDP 헤더 구조",
    "en": "UDP Header",
    "cat": "네트워크 보안",
    "tags": ["8바이트 고정", "필드 4개뿐", "포트·길이·체크섬", "비연결·무보장", "출발지 위조 쉬움"],
    "oneLiner": "8바이트 고정, 필드는 출발지 포트·목적지 포트·길이·체크섬 4개뿐 / 순서번호·확인응답·윈도우가 없어 신뢰성·제어 기능이 없음",
    "blocks": [
      {
        "k": "note",
        "title": "필드 4개가 전부",
        "d": "<ul class='klist'><li><b>출발지 포트(16비트)</b> · <b>목적지 포트(16비트)</b></li><li><b>길이(16비트)</b> — 헤더+데이터 전체 길이</li><li><b>체크섬(16비트)</b> — 오류 검출(선택적)</li></ul><b>총 8바이트 고정.</b> TCP의 20바이트와 비교해 <b>훨씬 가볍다</b>."
      },
      {
        "k": "note",
        "title": "TCP 헤더에 있고 UDP엔 없는 것 (이게 곧 특징)",
        "d": "<b>순서 번호 · 확인 응답 번호 · 제어 플래그 · 윈도우 크기</b>가 <b>전부 없다</b>.<p class='on-key'><span class='lbl'>그래서</span>순서 보장·재전송·흐름 제어·혼잡 제어가 <b>불가능</b>하다 = <b>비신뢰성</b>. 대신 <b>헤더가 작고 연결 절차가 없어 빠르다</b> → <b>DNS·DHCP·SNMP·TFTP·실시간 스트리밍·VoIP</b>에 적합.</p>"
      },
      {
        "k": "warn",
        "title": "보안 — 위조와 증폭",
        "d": "연결 과정(핸드셰이크)이 없어 <b>출발지 IP를 위조하기 쉽다</b>. 이 성질 때문에 <b>UDP 기반 증폭 DDoS</b>(DNS·NTP·SNMP·memcached 증폭)에 악용된다 — 작은 요청에 <b>큰 응답</b>이 피해자에게 쏟아지게 만든다. 대응은 <b>출발지 검증(uRPF)</b>·불필요 UDP 서비스 차단·응답 속도 제한."
      }
    ],
    "finalLiner": "UDP 헤더 <b>8바이트 고정</b> — <b>출발지 포트·목적지 포트·길이·체크섬</b> 4개뿐 / 순서번호·ACK·윈도우가 <b>없어</b> 신뢰성·제어 불가(대신 빠름) / 핸드셰이크가 없어 <b>출발지 위조·증폭 DDoS</b>에 악용",
    "related": ["tcpheader", "tcpudp", "translayer"]
  }
]
);
