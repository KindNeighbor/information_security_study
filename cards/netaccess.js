/* 네트워크 활용(TCP/IP) — 네트워크 접근 계층 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "netaccess",
    "term": "네트워크 접근 계층 · 주요 기능",
    "en": "Network Access Layer",
    "cat": "네트워크 보안",
    "tags": ["OSI 1·2 통합", "PDU=프레임", "MAC 48비트", "프레이밍·오류검출(CRC)", "LLC + MAC 부계층"],
    "oneLiner": "TCP/IP 최하위 계층(OSI 물리+데이터링크) / PDU=프레임, 주소=MAC(48비트) / 프레이밍·물리주소지정·매체접근제어·오류검출(CRC)",
    "blocks": [
      {
        "k": "def",
        "title": "위치 · 역할",
        "d": "TCP/IP의 <b>1계층(맨 아래)</b>으로 OSI의 <b>물리 계층 + 데이터링크 계층</b>을 합친 것. <b>같은 네트워크 안에서 인접 장비끼리</b> 실제로 데이터를 주고받는 일을 담당한다(멀리 보내는 것은 상위 IP의 몫).<ul class='klist'><li>PDU = <b>프레임(Frame)</b> · 주소 = <b>MAC 주소</b> · 대표 기술 = <b>이더넷(Ethernet)</b>·Wi-Fi</li><li>데이터링크는 두 부계층으로 나뉜다 — <b>LLC</b>(Logical Link Control, 상위와의 인터페이스·흐름/오류 제어)와 <b>MAC</b>(Media Access Control, <b>매체 접근 제어</b>)</li></ul>"
      },
      {
        "k": "note",
        "title": "주요 기능 (시험 출제 포인트)",
        "d": "<ul class='klist'><li><b>프레이밍(Framing)</b> — 상위 패킷에 헤더·트레일러를 붙여 <b>프레임</b>으로 만들고, 시작·끝을 구분</li><li><b>물리 주소 지정</b> — 출발지·목적지 <b>MAC 주소</b> 표기</li><li><b>매체 접근 제어(MAC)</b> — 여러 장치가 <b>하나의 회선을 공유</b>할 때 <b>누가 언제 보낼지</b> 조정 → <b>CSMA/CD·CSMA/CA·토큰 패싱</b></li><li><b>오류 검출</b> — 프레임 끝의 <b>FCS</b>에 <b>CRC</b> 값을 넣어 <b>훼손 여부를 검사</b>. <b>검출만 하고 버린다</b>(재전송은 상위 TCP의 몫)</li><li><b>흐름 제어</b> — 인접 구간의 전송 속도 조절</li><li><b>물리 계층 몫</b> — 비트를 <b>전기·광 신호로 변환</b>, 케이블·커넥터 규격</li></ul>"
      },
      {
        "k": "note",
        "title": "MAC 주소 · 이더넷 프레임",
        "d": "<b>MAC 주소</b> = <b>48비트(6바이트)</b>, 16진수 12자리(<code>00-1A-2B-3C-4D-5E</code>). 앞 <b>3바이트=제조사 식별(OUI)</b>, 뒤 3바이트=일련번호. <b>랜카드에 새겨진 고유 주소</b>지만 <b>소프트웨어로 변경(MAC 스푸핑) 가능</b>하다.<br><b>브로드캐스트 주소</b> = <code>FF:FF:FF:FF:FF:FF</code>.<pre>[프리앰블][목적지 MAC 6][출발지 MAC 6][타입 2][데이터 46~1500][FCS 4]</pre>데이터 최대 <b>1500바이트 = MTU</b>."
      },
      {
        "k": "warn",
        "title": "보안 — 이 계층의 공격",
        "d": "<ul class='klist'><li><b>MAC 스푸핑</b> — MAC 주소를 위조해 <b>MAC 기반 인증·필터링 우회</b></li><li><b>MAC 플러딩</b> — 스위치의 MAC 테이블을 가짜로 채워 <b>허브처럼 만들어 스니핑</b></li><li><b>ARP 스푸핑</b> — IP↔MAC 매핑을 속여 <b>중간자 공격</b></li></ul><b>대응</b>: 스위치 <b>포트 보안</b>(포트당 MAC 수 제한·고정), <b>동적 ARP 검사(DAI)</b>, <b>802.1X 인증</b>, 미사용 포트 비활성화."
      }
    ],
    "finalLiner": "네트워크 접근 계층 = <b>OSI 1·2 통합</b>(TCP/IP 최하위), PDU=<b>프레임</b>, 주소=<b>MAC 48비트</b>(앞 3바이트 제조사) / 기능=<b>프레이밍·물리주소·매체접근제어·오류검출(CRC/FCS, 검출만)</b> / 부계층 <b>LLC + MAC</b> / 공격=MAC 스푸핑·플러딩 → 포트 보안·802.1X",
    "related": ["csma", "vlan", "netdevice"]
  },
  {
    "id": "csma",
    "term": "CSMA/CD · CSMA/CA",
    "en": "Collision Detection / Collision Avoidance",
    "cat": "네트워크 보안",
    "tags": ["CD=유선 이더넷", "CA=무선 Wi-Fi", "감지 vs 회피", "JAM·백오프", "RTS/CTS·숨은 노드"],
    "oneLiner": "회선을 공유할 때 충돌을 다루는 방식 / CD=유선, 충돌을 감지하고 재전송 / CA=무선, 충돌을 미리 회피(감지가 불가능해서)",
    "blocks": [
      {
        "k": "def",
        "title": "공통 — CSMA란",
        "d": "<b>CSMA(Carrier Sense Multiple Access)</b> = <b>반송파 감지 다중 접근</b>. 여러 장치가 하나의 회선을 공유할 때, <b>보내기 전에 먼저 회선이 비었는지 엿듣고(Carrier Sense)</b> 비어 있으면 전송하는 방식. 그래도 <b>동시에</b> 보내면 충돌이 나므로, 그 뒤 처리가 <b>CD냐 CA냐</b>로 갈린다."
      },
      {
        "k": "note",
        "title": "CSMA/CD — 유선 이더넷 (Collision Detection)",
        "d": "<b>충돌을 감지</b>해서 수습하는 방식.<div class='evo'><div class='evo-step'><div class='es-name'>1 감지</div><div class='es-note'>회선이 비었는지 확인</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 전송</div><div class='es-note'>비었으면 전송 시작</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 충돌 감지</div><div class='es-note'>전송 중에도 계속 감시</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 JAM 신호</div><div class='es-note'>충돌을 모두에게 알림</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>5 백오프 후 재전송</div><div class='es-note'><b>임의 시간</b> 대기(이진 지수 백오프)</div></div></div><b>랜덤 대기</b>가 핵심 — 같은 시간을 기다리면 또 부딪히기 때문이다.<p class='on-key'><span class='lbl'>지금은?</span>충돌은 <b>반이중(half-duplex)·허브</b> 환경의 문제다. <b>스위치 + 전이중(full-duplex)</b>에서는 <b>충돌 자체가 발생하지 않아</b> CSMA/CD가 사실상 필요 없다.</p>"
      },
      {
        "k": "note",
        "title": "CSMA/CA — 무선 LAN (Collision Avoidance)",
        "d": "<b>충돌을 미리 피하는</b> 방식. Wi-Fi(<b>IEEE 802.11</b>)가 사용.<p class='on-key'><span class='lbl'>왜 무선은 '감지'를 못 하나 (핵심 이유)</span>① 전송 중에는 <b>자기 신호가 너무 강해</b> 남의 신호를 들을 수 없다. ② <b>숨은 노드 문제</b> — A와 C가 서로의 신호는 못 듣지만 가운데 B에게는 둘 다 닿아, 서로 비었다고 착각하고 동시에 보낸다.</p><b>동작</b>: 회선이 빈 것을 확인 → <b>일정 시간(IFS) 대기 + 랜덤 백오프</b> → 전송 → 받은 쪽이 <b>ACK로 확인</b>(ACK가 없으면 충돌로 보고 재전송).<br><b>RTS/CTS</b>(전송 요청/허가) 교환을 쓰면 <b>숨은 노드 문제</b>를 완화할 수 있다."
      },
      {
        "k": "warn",
        "title": "비교 · 함정",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>CSMA/CD</span><div class='row'><b>유선</b>(이더넷) · 충돌 <b>감지</b>(사후 처리) · JAM + 백오프 재전송</div></div><div class='cmp-item'><span class='cmp-label'>CSMA/CA</span><div class='row'><b>무선</b>(Wi-Fi) · 충돌 <b>회피</b>(사전 예방) · IFS+백오프, <b>ACK 확인</b>, RTS/CTS</div></div></div><b>함정</b>: '무선은 CSMA/CD를 쓴다'(X) — <b>무선은 충돌 감지가 불가능</b>해서 CA를 쓴다. <b>D=Detection(감지), A=Avoidance(회피)</b>로 구분."
      }
    ],
    "finalLiner": "<b>CSMA</b>=보내기 전 회선을 엿듣는 방식 / <b>CSMA/CD=유선(이더넷)·충돌 감지</b> → JAM 신호 + <b>랜덤 백오프</b> 재전송(스위치·전이중이면 불필요) / <b>CSMA/CA=무선(Wi-Fi)·충돌 회피</b> → 감지가 <b>불가능</b>(자기 신호·숨은 노드)해서, IFS+백오프·<b>ACK</b>·RTS/CTS",
    "related": ["netaccess", "netdevice", "vlan"]
  },
  {
    "id": "vlan",
    "term": "VLAN (가상 랜)",
    "en": "Virtual LAN · IEEE 802.1Q",
    "cat": "네트워크 보안",
    "tags": ["논리적 분할", "브로드캐스트 도메인 분리", "802.1Q 태깅", "트렁크 포트", "VLAN 홉핑"],
    "oneLiner": "물리적 위치와 무관하게 스위치를 논리적으로 분할 / 브로드캐스트 도메인을 나눠 트래픽·보안 영역 분리 / 802.1Q 태그로 여러 VLAN을 한 회선(트렁크)에 실음",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 왜 쓰나",
        "d": "<b>VLAN(Virtual LAN)</b> — 하나의 물리 스위치를 <b>여러 개의 논리적 네트워크로 나누는</b> 기술. 원래 <b>브로드캐스트 도메인은 라우터만</b> 나눌 수 있었는데, VLAN을 쓰면 <b>스위치에서도</b> 나눌 수 있다.<ul class='klist'><li><b>브로드캐스트 트래픽 감소</b> — 불필요한 전파 범위를 줄여 성능 향상</li><li><b>보안·격리</b> — 부서·용도별로 나눠 <b>서로 직접 통신하지 못하게</b>(예: 사무망 / 서버망 / 게스트망)</li><li><b>유연성</b> — 자리를 옮겨도 <b>케이블 공사 없이</b> 설정만으로 같은 그룹 유지</li></ul><b>다른 VLAN끼리 통신하려면 반드시 <b>라우터·L3 스위치</b>를 거쳐야 한다</b> → 그 지점에서 <b>ACL로 통제</b>할 수 있다는 것이 보안상 장점."
      },
      {
        "k": "note",
        "title": "구성 방식 · 802.1Q 태깅",
        "d": "<ul class='klist'><li><b>포트 기반(정적)</b> — 스위치 포트마다 VLAN 지정. 가장 일반적</li><li><b>MAC 기반·프로토콜 기반(동적)</b> — 장비 MAC이나 프로토콜로 자동 할당</li></ul><p class='on-key'><span class='lbl'>802.1Q 태그와 트렁크</span>스위치를 넘어갈 때 <b>어느 VLAN 소속인지</b> 표시하려고 프레임에 <b>VLAN ID(12비트, 1~4094)</b>를 삽입하는 것이 <b>IEEE 802.1Q 태깅</b>. 이렇게 <b>여러 VLAN을 한 회선에 실어 나르는 포트</b>를 <b>트렁크(Trunk) 포트</b>라 하고, 단말이 붙는 일반 포트는 <b>액세스(Access) 포트</b>다. 태그 없이 다니는 VLAN이 <b>네이티브 VLAN</b>(기본은 VLAN 1).</p>"
      },
      {
        "k": "warn",
        "title": "VLAN 홉핑 (보안 위협)",
        "d": "VLAN으로 나눠도 <b>완벽한 격리는 아니다</b>. <b>VLAN 홉핑(Hopping)</b>은 다른 VLAN으로 <b>넘어가는</b> 공격이다.<ul class='klist'><li><b>스위치 스푸핑</b> — 공격자가 자기 포트를 <b>트렁크인 것처럼 협상(DTP)</b>시켜 <b>모든 VLAN 트래픽</b>을 받아본다</li><li><b>더블 태깅(이중 태깅)</b> — 태그를 <b>두 개</b> 붙여 보내면 첫 스위치가 바깥 태그만 떼고 넘겨, 안쪽 태그로 <b>다른 VLAN에 도달</b>한다(네이티브 VLAN을 악용)</li></ul>"
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<ul class='klist'><li><b>DTP(트렁크 자동 협상) 비활성화</b> — 트렁크는 <b>수동으로만</b> 지정</li><li><b>네이티브 VLAN을 기본값(1)에서 변경</b>하고, 사용하지 않는 전용 VLAN으로 둘 것</li><li><b>미사용 포트는 셧다운</b>하고 사용하지 않는 VLAN에 격리</li><li><b>포트 보안</b>(MAC 수 제한)·<b>802.1X 인증</b>·VLAN 간 <b>ACL</b> 적용</li></ul>"
      }
    ],
    "finalLiner": "VLAN=물리 위치와 무관하게 <b>스위치를 논리 분할</b> → <b>브로드캐스트 도메인 분리</b>(원래 라우터만 가능) / <b>802.1Q 태그(VLAN ID 12비트)</b>·<b>트렁크</b> vs 액세스 포트 / <b>VLAN 간 통신은 라우터·L3</b> 필요 / 위협=<b>VLAN 홉핑</b>(스위치 스푸핑·더블 태깅) → DTP 끄기·네이티브 VLAN 변경",
    "related": ["netaccess", "netdevice", "subnet"]
  }
]
);
