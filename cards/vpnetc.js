/* 네트워크 보안 기술 — VPN·NAC·ESM/SIEM·무선랜·RFID 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "vpn",
    "term": "가상사설망 (VPN) · SSL VPN · PPTP · L2TP",
    "en": "VPN · SSL VPN · PPTP · L2TP",
    "cat": "네트워크 보안",
    "tags": ["터널링+암호화+인증", "2계층 PPTP·L2TP", "3계층 IPSec", "SSL VPN=브라우저", "L2TP는 암호화 없음"],
    "oneLiner": "공중망을 사설망처럼 쓰는 기술(터널링·암호화·인증) / 계층별 2계층 PPTP·L2TP, 3계층 IPSec, 응용 SSL VPN / L2TP는 자체 암호화가 없어 IPSec과 함께 씀",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 3요소",
        "d": "<b>VPN(Virtual Private Network)</b> — 공중망(인터넷) 위에 <b>가상의 전용선</b>을 만들어 사설망처럼 안전하게 쓰는 기술. 전용선보다 <b>훨씬 저렴</b>하다.<ul class='klist'><li><b>터널링(Tunneling)</b> — 패킷을 <b>다른 패킷으로 감싸</b> 통과시킴</li><li><b>암호화</b> — 내용을 못 읽게 (기밀성)</li><li><b>인증·무결성</b> — 상대가 맞는지, 변조되지 않았는지</li></ul>"
      },
      {
        "k": "note",
        "title": "터널링 프로토콜 — 계층별 정리 (출제)",
        "d": "<ul class='klist'><li><b>2계층(데이터링크)</b>: <b>PPTP · L2F · L2TP</b></li><li><b>3계층(네트워크)</b>: <b>IPSec</b></li><li><b>4계층 이상(응용)</b>: <b>SSL/TLS VPN</b></li></ul><b>PPTP</b>(Point-to-Point Tunneling Protocol) — 마이크로소프트 주도, 구현이 <b>간단</b>하지만 <b>보안이 취약</b>해 현재는 권장되지 않는다.<br><b>L2TP</b>(Layer 2 Tunneling Protocol) — PPTP와 L2F를 결합. <b>자체 암호화 기능이 없다</b> → 실무에서는 반드시 <b>IPSec과 결합(L2TP/IPSec)</b>해서 쓴다. <b>이 점이 시험 함정</b>."
      },
      {
        "k": "note",
        "title": "SSL VPN vs IPSec VPN",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>SSL VPN</span><div class='row'>응용 계층. <b>웹 브라우저만 있으면 되어</b> 별도 클라이언트 설치가 거의 필요 없다. <b>재택·이동 근무자</b>의 원격 접속에 적합하고 방화벽 통과가 쉽다(443).<br>➖ 보호 범위가 <b>특정 응용 중심</b>.</div></div><div class='cmp-item'><span class='cmp-label'>IPSec VPN</span><div class='row'>3계층. <b>모든 IP 트래픽을 통째로</b> 보호한다. <b>본사–지사 간 상시 연결(Site-to-Site)</b>에 적합.<br>➖ <b>전용 클라이언트·설정</b>이 필요하고 NAT 통과에 제약이 있다.</div></div></div>"
      }
    ],
    "finalLiner": "VPN=터널링+암호화+인증으로 공중망을 사설망처럼 / 계층 <b>2계층 PPTP·L2F·L2TP</b> · <b>3계층 IPSec</b> · <b>응용 SSL VPN</b> / <b>PPTP=간단하나 취약</b>, <b>L2TP=자체 암호화 없음 → IPSec과 결합</b> / <b>SSL VPN=브라우저·원격 사용자</b> vs <b>IPSec VPN=전체 IP 보호·지사 간</b>",
    "related": ["ipsec", "firewall", "http"]
  },
  {
    "id": "ipsec",
    "term": "IPSec VPN (AH · ESP · IKE)",
    "en": "IPSec · AH · ESP · IKE",
    "cat": "네트워크 보안",
    "tags": ["AH=인증만·암호화 없음", "ESP=암호화+인증", "IKE=키 관리", "전송 모드 vs 터널 모드", "SA·SPI"],
    "oneLiner": "3계층 보안 표준 / AH=인증·무결성만(암호화 X), ESP=암호화+인증 / 키 관리는 IKE(UDP 500) / 전송 모드=페이로드만, 터널 모드=IP 패킷 전체 캡슐화",
    "blocks": [
      {
        "k": "warn",
        "title": "두 개의 보안 헤더 — AH vs ESP (최다 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>AH (Authentication Header)</span><div class='row'><b>인증·무결성·재전송 방지</b>만 제공.<br><b>❌ 암호화는 제공하지 않는다</b> → 내용이 그대로 보인다.<br>프로토콜 번호 <b>51</b>.</div></div><div class='cmp-item'><span class='cmp-label'>ESP (Encapsulating Security Payload)</span><div class='row'><b>암호화 + 인증·무결성</b>을 모두 제공(기밀성까지).<br>실무에서 주로 쓰인다.<br>프로토콜 번호 <b>50</b>.</div></div></div><p class='on-key'><span class='lbl'>시험 함정</span>“AH가 기밀성(암호화)을 제공하는가?” → <b>아니오</b>. 암호화가 필요하면 <b>ESP</b>다. 헷갈리면 <b>A=Authentication(인증만)</b>으로 기억.</p>"
      },
      {
        "k": "note",
        "title": "키 관리 = IKE",
        "d": "<b>IKE(Internet Key Exchange)</b>가 <b>키 교환과 관리</b>를 담당한다 — “IPSec의 키 관리 담당은?” 하면 <b>IKE</b>가 답.<ul class='klist'><li><b>Diffie-Hellman</b> 방식으로 <b>안전하게 세션 키를 합의</b></li><li>양쪽의 보안 정책 묶음인 <b>SA(Security Association)</b>를 설정. SA를 구분하는 번호가 <b>SPI</b></li><li><b>UDP 500</b>번 사용(NAT 통과 시 4500). ISAKMP·Oakley를 기반으로 함</li><li>1단계에서 <b>안전한 통로</b>를 만들고, 2단계에서 <b>실제 데이터용 SA</b>를 만든다</li></ul>"
      },
      {
        "k": "note",
        "title": "동작 모드 — 전송 vs 터널",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>전송 모드 (Transport)</span><div class='row'><b>페이로드(데이터)만</b> 보호하고 <b>원래 IP 헤더는 그대로</b> 둔다.<br>→ <b>종단 간(호스트 ↔ 호스트)</b> 통신에 사용. 출발지·목적지가 <b>노출</b>된다.</div></div><div class='cmp-item'><span class='cmp-label'>터널 모드 (Tunnel)</span><div class='row'><b>IP 헤더를 포함한 패킷 전체를 캡슐화</b>하고 <b>새 IP 헤더</b>를 붙인다.<br>→ <b>게이트웨이 간(VPN 장비 ↔ VPN 장비)</b>에 사용. <b>원래 주소가 숨겨져</b> 더 안전. <b>VPN의 기본 모드</b>.</div></div></div>"
      }
    ],
    "finalLiner": "IPSec=3계층 보안 / <b>AH=인증·무결성만(암호화 ❌, 프로토콜 51)</b> vs <b>ESP=암호화+인증(50)</b> / <b>키 관리=IKE</b>(Diffie-Hellman·<b>SA</b>·SPI·<b>UDP 500</b>) / <b>전송 모드=페이로드만(종단 간)</b> vs <b>터널 모드=패킷 전체 캡슐화+새 IP 헤더(게이트웨이 간·VPN 기본)</b>",
    "related": ["vpn", "netlayer", "firewall"]
  },
  {
    "id": "nac",
    "term": "NAC (네트워크 접근 제어)",
    "en": "Network Access Control",
    "cat": "네트워크 보안",
    "tags": ["단말 보안상태 검사", "정책서버·차단서버·에이전트", "802.1X 인증", "치료(Remediation)", "비인가 단말 차단"],
    "oneLiner": "네트워크에 붙으려는 단말의 신원과 보안 상태(백신·패치)를 검사해 접속을 통제 / 구성=정책서버·차단(인증)서버·에이전트·콘솔",
    "blocks": [
      {
        "k": "def",
        "title": "정의 — 방화벽과 무엇이 다른가",
        "d": "방화벽이 <b>경계를 지나는 트래픽</b>을 통제한다면, <b>NAC</b>은 <b>네트워크에 접속하려는 단말 자체</b>를 통제한다.<p class='on-key'><span class='lbl'>핵심 발상</span>“<b>누구인지(인증)</b>”뿐 아니라 “<b>이 PC가 안전한 상태인가(백신·패치·설정)</b>”까지 확인하고, 기준에 못 미치면 <b>격리·치료 후에</b> 들여보낸다. 내부망으로 <b>웜·랜섬웨어가 유입되는 것을 막는</b> 것이 목적.</p>"
      },
      {
        "k": "note",
        "title": "구성 요소",
        "d": "<ul class='klist'><li><b>정책 관리 서버</b> — 접근·보안 <b>정책을 수립·배포</b>하고 이력을 관리(두뇌)</li><li><b>차단·인증 서버(집행 장치)</b> — 정책에 따라 <b>실제로 허용·격리·차단</b>을 수행</li><li><b>에이전트</b> — 단말에 설치되어 <b>보안 상태를 점검·보고</b>하고 치료를 수행(에이전트 없는 방식도 있음)</li><li><b>콘솔</b> — 관리자용 모니터링·설정 화면</li></ul>"
      },
      {
        "k": "note",
        "title": "주요 기능 · 통제 방식",
        "d": "<b>주요 기능</b><ul class='klist'><li><b>사용자·단말 인증</b>과 <b>비인가 단말 차단</b></li><li><b>무결성 점검</b> — 백신 설치·최신 여부, OS 보안 패치, 필수 프로그램</li><li><b>격리·치료(Remediation)</b> — 미흡한 단말을 <b>치료 전용망으로 보내</b> 패치·업데이트 후 재검사</li><li><b>IP·자산 관리</b>, 접속 이력 로그</li></ul><b>통제 방식(발전 흐름)</b> — 초기 <b>VLAN 분리</b> 방식과 <b>ARP 제어</b> 방식에서, 표준 인증 기반인 <b>IEEE 802.1X</b>(스위치 포트 단계에서 인증) 방식으로 발전했고, 여기에 <b>에이전트</b>를 더해 단말 상태까지 검사하는 형태가 일반적이다."
      }
    ],
    "finalLiner": "NAC=<b>접속하려는 단말</b>을 통제(방화벽=트래픽) / 인증 + <b>보안 상태 검사(백신·패치)</b> → 미흡하면 <b>격리·치료 후 재검사</b> / 구성 <b>정책관리서버·차단(인증)서버·에이전트·콘솔</b> / 표준 인증은 <b>IEEE 802.1X</b> / 목적=웜·비인가 단말의 내부망 유입 차단",
    "related": ["esm", "wlan", "firewall"]
  },
  {
    "id": "esm",
    "term": "ESM · SIEM",
    "en": "Enterprise Security Management · SIEM",
    "cat": "네트워크 보안",
    "tags": ["에이전트·매니저·콘솔", "보안장비 통합관제", "SIEM=전사 로그·빅데이터", "상관분석", "장기보관·컴플라이언스"],
    "oneLiner": "ESM=방화벽·IDS 등 보안장비 로그를 통합해 실시간 관제(에이전트·매니저·콘솔) / SIEM=보안장비를 넘어 전사 IT 로그를 빅데이터로 수집·장기 분석",
    "blocks": [
      {
        "k": "def",
        "title": "ESM — 왜 필요한가",
        "d": "방화벽·IDS·IPS·백신·VPN이 <b>각자 따로 경보</b>를 쏟아내면 관리자가 감당할 수 없다. <b>ESM(Enterprise Security Management)</b>은 이 <b>보안 장비들의 로그·이벤트를 한곳에 모아</b> 통합 관제한다.<p class='on-key'><span class='lbl'>핵심 가치 — 상관 분석</span>개별 장비에서는 사소해 보이는 이벤트도 <b>모아서 연관지으면</b> 하나의 공격 흐름이 드러난다(예: 포트 스캔 → 로그인 실패 반복 → 성공 → 대용량 전송). 이것이 <b>상관 분석(Correlation)</b>이다.</p>"
      },
      {
        "k": "note",
        "title": "ESM 구성 요소",
        "d": "<ul class='klist'><li><b>에이전트(Agent)</b> — 각 보안 장비에 붙어 <b>로그를 수집·정규화해 전송</b></li><li><b>매니저(Manager)</b> — 수집한 이벤트를 <b>저장·분석·상관분석</b>하고 정책에 따라 경보 발생(핵심 엔진)</li><li><b>콘솔(Console)</b> — 관리자가 보는 <b>모니터링·대응 화면</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "ESM vs SIEM (차이점 — 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>ESM</span><div class='row'>대상 = <b>보안 장비</b> 중심(방화벽·IDS·백신…)<br>초점 = <b>실시간 관제·경보 대응</b><br>데이터 = 비교적 <b>정형화된 보안 이벤트</b>, 보관 기간 짧음</div></div><div class='cmp-item'><span class='cmp-label'>SIEM</span><div class='row'>대상 = <b>보안 장비 + 서버·네트워크·애플리케이션·DB 등 전사 IT</b><br>초점 = <b>빅데이터 기반 장기 분석·포렌식·컴플라이언스</b><br>데이터 = 비정형 포함 <b>방대한 로그</b>, <b>장기 보관</b></div></div></div><b>한 줄 정리</b>: <b>ESM은 '보안 장비 실시간 관제', SIEM은 '전사 로그 통합·장기 분석'</b>. SIEM이 ESM보다 <b>범위가 넓고 분석 지향</b>이다."
      }
    ],
    "finalLiner": "<b>ESM</b>=보안장비 로그 통합 <b>실시간 관제</b>, 구성 <b>에이전트·매니저·콘솔</b>, 핵심=<b>상관 분석</b> / <b>SIEM</b>=보안장비를 넘어 <b>전사 IT 로그</b>를 <b>빅데이터</b>로 수집·<b>장기 보관·분석</b>(포렌식·컴플라이언스) → <b>SIEM이 범위가 더 넓다</b>",
    "related": ["nac", "ids", "linuxlog"]
  },
  {
    "id": "wlan",
    "term": "무선 LAN 보안 (WEP · WPA · WPA2)",
    "en": "Wireless LAN Security",
    "cat": "네트워크 보안",
    "tags": ["WEP=RC4·IV 취약", "WPA=TKIP", "WPA2=AES-CCMP·802.11i", "개인(PSK) vs 기업(802.1X)", "Rogue AP"],
    "oneLiner": "전파라 도청이 쉬움 / WEP(RC4·IV 짧아 취약) → WPA(TKIP) → WPA2(AES-CCMP·802.11i) → WPA3 / 운영모드 개인(PSK) vs 엔터프라이즈(802.1X+RADIUS)",
    "blocks": [
      {
        "k": "warn",
        "title": "무선의 근본 취약점",
        "d": "유선은 <b>선에 물려야</b> 하지만 무선은 <b>전파가 닿는 곳이면 누구나</b> 수신할 수 있다.<ul class='klist'><li><b>도청(스니핑)</b>이 매우 쉽다 — 물리적 침입 없이 주차장에서도 가능(<b>워 드라이빙</b>)</li><li><b>Rogue AP(비인가 AP)</b> — 몰래 설치한 AP로 내부망 우회 침투</li><li><b>이블 트윈(Evil Twin)</b> — 정상 AP와 <b>같은 SSID</b>의 가짜 AP로 유인해 중간자 공격</li><li><b>재밍</b>(전파 방해)으로 서비스 거부</li></ul><b>SSID 숨김·MAC 주소 필터링</b>은 <b>보조 수단일 뿐</b>이다 — 둘 다 쉽게 우회된다(시험 포인트)."
      },
      {
        "k": "note",
        "title": "보안 기술의 진화",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>WEP</div><div class='es-note'><b>RC4</b> 사용. <b>정적 키</b>를 공유하고 <b>IV(초기벡터)가 24비트로 짧아 재사용</b>됨 → <b>단시간에 크랙</b>. 사용 금지.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>WPA</div><div class='es-note'><b>TKIP</b>(RC4 기반이나 <b>키를 동적으로 변경</b>) + <b>MIC</b>로 무결성 보강. WEP 장비를 쓰면서 급히 보완한 <b>과도기</b> 규격.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>WPA2</div><div class='es-note'><b>AES-CCMP</b> 채택. <b>IEEE 802.11i</b> 표준을 온전히 구현한 <b>사실상의 표준</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>WPA3</div><div class='es-note'><b>SAE</b> 방식으로 사전 대입 공격에 강해지고 순방향 비밀성 제공.</div></div></div><b>암기 짝</b>: <b>WEP=RC4 · WPA=TKIP · WPA2=AES(CCMP)</b>."
      },
      {
        "k": "note",
        "title": "운영 모드 — 개인 vs 엔터프라이즈",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>개인 모드 (Personal · PSK)</span><div class='row'><b>사전 공유 키(비밀번호)</b>를 모두가 나눠 쓴다. 가정·소규모용.<br>➖ 키가 <b>한 명만 유출돼도</b> 전체가 위험하고, 약한 비밀번호는 <b>사전 공격</b>에 뚫린다.</div></div><div class='cmp-item'><span class='cmp-label'>엔터프라이즈 모드 (Enterprise)</span><div class='row'><b>IEEE 802.1X + RADIUS 인증 서버</b>로 <b>사용자마다 개별 인증</b>. 기업용.<br>➕ 퇴사자 계정만 막으면 되고, 사용자별 키가 달라 훨씬 안전.</div></div></div>"
      }
    ],
    "finalLiner": "무선=전파라 <b>도청 쉬움</b>(워드라이빙·<b>Rogue AP</b>·이블트윈), <b>SSID 숨김·MAC 필터링은 보조 수단</b> / <b>WEP(RC4·IV 짧아 취약) → WPA(TKIP) → WPA2(AES-CCMP·802.11i) → WPA3(SAE)</b> / 모드 <b>개인=PSK 공유키</b> vs <b>엔터프라이즈=802.1X+RADIUS 개별 인증</b>",
    "related": ["rfid", "nac", "sniffing"]
  },
  {
    "id": "rfid",
    "term": "RFID · USN 보안",
    "en": "RFID · USN Security",
    "cat": "네트워크 보안",
    "tags": ["태그·리더·서버", "능동형 vs 수동형", "복제·추적 위협", "Kill 명령·패러데이 우리", "블로커 태그"],
    "oneLiner": "RFID=전파로 태그 정보를 읽는 기술(태그·리더·서버) / 위협=도청·복제·추적(프라이버시) / 대책=Kill 명령·패러데이 우리·블로커 태그·재암호화·인증",
    "blocks": [
      {
        "k": "def",
        "title": "RFID · USN이란",
        "d": "<b>RFID(Radio Frequency IDentification)</b> — 무선 주파수로 <b>태그에 담긴 정보를 접촉 없이 읽는</b> 기술(교통카드·물류·출입증).<ul class='klist'><li>구성: <b>태그(Tag)</b> + <b>리더(Reader)</b> + <b>미들웨어·서버</b></li><li><b>능동형</b> — 자체 <b>배터리</b>가 있어 인식 거리가 길다 / <b>수동형</b> — 배터리 없이 <b>리더의 전파로 동작</b>, 싸고 반영구적이나 거리가 짧다</li></ul><b>USN(Ubiquitous Sensor Network)</b> — 여기저기 배치한 <b>센서</b>가 정보를 수집해 네트워크로 전달하는 체계. RFID가 그 입구 역할을 한다."
      },
      {
        "k": "warn",
        "title": "보안 위협",
        "d": "<ul class='klist'><li><b>도청(스니핑)</b> — 태그·리더 사이 무선 구간을 가로챔</li><li><b>복제·위조(Cloning)</b> — 읽은 정보로 <b>똑같은 태그를 만들어</b> 출입·결제에 악용</li><li><b>스푸핑</b> — 정상 태그·리더인 척 속임</li><li><b>재전송(Replay) 공격</b> — 가로챈 응답을 <b>그대로 다시 보내</b> 인증 통과</li><li><b>프라이버시 침해·위치 추적</b> — 소지품의 태그가 계속 응답해 <b>사람의 동선이 추적</b>된다(RFID 고유의 문제)</li><li><b>DoS·재밍</b> — 전파 방해로 인식 불가</li></ul>"
      },
      {
        "k": "safe",
        "title": "보안 기술 (대책)",
        "d": "<ul class='klist'><li><b>Kill 명령어</b> — 구매·사용 후 태그를 <b>영구 비활성화</b>(가장 확실하지만 재사용 불가)</li><li><b>패러데이 우리(Faraday Cage)</b> — <b>전파를 차단하는 금속 용기·지갑</b>에 넣어 읽히지 않게</li><li><b>블로커 태그(Blocker Tag)</b> — 리더에 <b>혼란스러운 응답을 흘려</b> 특정 태그를 읽지 못하게 방해</li><li><b>능동 방해(Active Jamming)</b> — 방해 전파 발생(주변 영향이 커 제한적)</li><li><b>재암호화(Re-encryption)</b> — 태그 값을 <b>주기적으로 바꿔</b> 추적을 막음</li><li><b>해시 기반 접근 제어·상호 인증 프로토콜</b> — 태그 ID를 그대로 노출하지 않고 <b>매번 다른 값</b>으로 응답</li></ul>"
      }
    ],
    "finalLiner": "RFID=<b>태그·리더·서버</b>, <b>능동형(배터리·장거리)</b> vs <b>수동형(무배터리·단거리)</b> / 위협=도청·<b>복제</b>·스푸핑·재전송·<b>위치 추적(프라이버시)</b> / 대책=<b>Kill 명령·패러데이 우리·블로커 태그</b>·재암호화·해시 기반 인증",
    "related": ["wlan", "nac", "sniffing"]
  }
]
);
