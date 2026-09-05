/* 네트워크 보안 기술 — 침입차단(방화벽)·침입탐지·대응 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "firewall",
    "term": "침입차단 시스템 (방화벽) · 유형",
    "en": "Firewall Types",
    "cat": "네트워크 보안",
    "tags": ["패킷필터링 3·4계층", "애플리케이션 게이트웨이 7계층", "회선 게이트웨이 5계층", "상태기반=현재 주류", "혼합형"],
    "oneLiner": "내부·외부 경계에서 정책에 따라 트래픽을 허용·차단 / 패킷필터링(3·4)·애플리케이션 게이트웨이(7)·회선 게이트웨이(5)·상태기반 검사·혼합형",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 기본 원칙",
        "d": "신뢰하는 내부망과 신뢰할 수 없는 외부망 <b>경계</b>에 두고, <b>정해진 정책(규칙)에 따라 트래픽을 허용·차단</b>하는 시스템.<p class='on-key'><span class='lbl'>기본 정책</span><b>Deny All(모두 차단) 후 필요한 것만 허용</b>하는 것이 원칙이다(화이트리스트). 반대로 Permit All은 위험하다.</p><b>한계</b>: 경계를 지나가는 것만 본다 → <b>내부자 공격·우회 경로(모뎀·USB)·암호화된 악성 트래픽</b>은 막지 못한다."
      },
      {
        "k": "note",
        "title": "① 패킷 필터링 (3·4계층)",
        "d": "<b>IP 주소·포트 번호·프로토콜·TCP 플래그</b>만 보고 판단한다(라우터 ACL이 대표).<ul class='klist'><li><b>장점</b>: <b>속도가 빠르고</b> 부하가 적으며 구현이 단순, 사용자에게 투명</li><li><b>단점</b>: <b>데이터(페이로드) 내용을 못 본다</b>, <b>연결 상태를 기억하지 않는다</b>, 로깅·<b>사용자 인증이 어렵다</b>, IP 스푸핑에 취약</li></ul>"
      },
      {
        "k": "note",
        "title": "② 애플리케이션 게이트웨이 · ③ 회선 게이트웨이",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>애플리케이션 게이트웨이 (7계층·프록시)</span><div class='row'>서비스마다 <b>프록시 데몬</b>을 두고 <b>내용까지 검사</b>. <b>강력한 인증·상세 로깅</b> 가능.<br><b>단점</b>: <b>느리고</b> 서비스마다 <b>프록시가 필요</b>해 확장성이 떨어진다.</div></div><div class='cmp-item'><span class='cmp-label'>회선 게이트웨이 (5계층·세션)</span><div class='row'>클라이언트와 프록시 사이에 <b>가상 회선</b>을 만들어 중계(<b>SOCKS</b>가 대표). <b>응용에 독립적</b>이라 여러 서비스를 한 번에 지원.<br><b>단점</b>: 클라이언트에 <b>전용(수정된) 프로그램</b>이 필요.</div></div></div>"
      },
      {
        "k": "warn",
        "title": "④ 상태 기반 패킷 검사 (현재 주류)",
        "d": "<b>Stateful Inspection</b> — 패킷 하나만 보지 않고 <b>연결(세션)의 상태를 테이블로 기억</b>해, 그 문맥에 맞는 패킷인지 판단한다.<p class='on-key'><span class='lbl'>왜 좋은가</span>내가 요청해서 <b>돌아오는 응답</b>인지, 아니면 <b>난데없이 들어온 패킷</b>인지 구분할 수 있다 → 패킷 필터링의 최대 약점을 해결. <b>속도와 보안을 절충</b>해 현재 방화벽의 표준이 됐다.</p><b>⑤ 혼합형(Hybrid)</b> — 위 방식들을 <b>조합</b>해 장점을 취한 형태."
      }
    ],
    "finalLiner": "방화벽=경계에서 정책대로 허용·차단(<b>Deny All 후 필요한 것만</b>) / <b>패킷필터링(3·4계층·빠름·내용 못봄)</b> · <b>애플리케이션 게이트웨이(7계층·프록시·정밀하나 느림)</b> · <b>회선 게이트웨이(5계층·SOCKS)</b> · <b>상태기반 검사(세션 상태 기억·현재 주류)</b> · 혼합형 / 한계=내부자·우회경로",
    "related": ["fwarch", "ids", "netdevice"]
  },
  {
    "id": "fwarch",
    "term": "방화벽 구축 형태",
    "en": "Firewall Architectures",
    "cat": "네트워크 보안",
    "tags": ["스크리닝 라우터", "듀얼 홈드 호스트", "스크린드 호스트", "스크린드 서브넷=DMZ", "베스천 호스트"],
    "oneLiner": "스크리닝 라우터(라우터만) → 듀얼 홈드 호스트(NIC 2개·라우팅 차단) → 스크린드 호스트(라우터+베스천) → 스크린드 서브넷(라우터 2개·DMZ, 가장 안전)",
    "blocks": [
      {
        "k": "def",
        "title": "베스천 호스트 (공통 개념)",
        "d": "<b>베스천 호스트(Bastion Host)</b> — 내부망을 지키는 <b>요새</b>라는 뜻. 외부에 직접 노출되는 <b>최전방 방어 호스트</b>로, 불필요한 서비스·계정을 모두 제거하고 <b>철저히 강화(하드닝)</b>한 뒤 로그를 집중 감시한다. 아래 구조들의 핵심 부품이다."
      },
      {
        "k": "note",
        "title": "구축 형태 4가지 (안전도 순)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 스크리닝 라우터</div><div class='es-note'><b>라우터가 패킷 필터링</b>만 수행. <b>저렴·빠름</b>. 3·4계층만 보고 <b>로깅·세밀한 제어가 약함</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 듀얼 홈드 호스트</div><div class='es-note'><b>네트워크 카드(NIC) 2개</b>(내부/외부)를 단 호스트. <b>라우팅 기능을 꺼서</b> 직접 통과가 불가능 → <b>반드시 프록시를 거쳐야</b> 한다.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 스크린드 호스트</div><div class='es-note'><b>스크리닝 라우터 + 베스천 호스트</b> 조합. 라우터가 1차, 베스천이 2차 → <b>2단계 방어</b>. 라우터가 뚫리면 내부가 노출.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 스크린드 서브넷</div><div class='es-note'><b>라우터 2개 사이에 완충지대(DMZ)</b>를 두고 그 안에 베스천 호스트를 배치. <b>가장 안전</b>하지만 <b>비용·구축이 복잡하고 느리다</b>.</div></div></div>"
      },
      {
        "k": "note",
        "title": "DMZ — 왜 필요한가",
        "d": "<b>DMZ(비무장지대)</b>는 외부에 공개해야 하는 서버(<b>웹·메일·DNS</b>)를 두는 <b>완충 구역</b>이다. 이들을 내부망에 두면 <b>서버가 뚫렸을 때 내부 전체가 노출</b>되므로, <b>외부↔DMZ는 허용하되 DMZ↔내부는 엄격히 제한</b>한다. 스크린드 서브넷이 바로 이 구조다."
      }
    ],
    "finalLiner": "<b>베스천 호스트</b>=강화한 최전방 요새 / <b>스크리닝 라우터</b>(라우터만·저렴) → <b>듀얼 홈드</b>(NIC 2개·<b>라우팅 차단</b>) → <b>스크린드 호스트</b>(라우터+베스천·2단계) → <b>스크린드 서브넷</b>(라우터 2개·<b>DMZ</b>·<b>가장 안전</b>·복잡) / DMZ=공개 서버 완충지대",
    "related": ["firewall", "ids", "subnet"]
  },
  {
    "id": "ids",
    "term": "침입탐지 시스템 (IDS) · 탐지 기법",
    "en": "Intrusion Detection System",
    "cat": "네트워크 보안",
    "tags": ["HIDS vs NIDS", "지식기반=오용탐지", "행위기반=이상탐지", "오탐 vs 미탐", "제로데이는 행위기반만"],
    "oneLiner": "침입 시도를 탐지해 경보 / 수집원별 HIDS·NIDS / 탐지법 지식기반(시그니처, 오탐 낮음·제로데이 못잡음) vs 행위기반(이상, 제로데이 가능·오탐 높음)",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 동작 순서",
        "d": "네트워크나 시스템의 활동을 감시해 <b>침입 시도를 탐지하고 관리자에게 경보</b>하는 시스템. <b>탐지·경보가 본분</b>이고 <b>차단은 IPS의 몫</b>이다.<br>동작: <b>데이터 수집 → 데이터 가공·축약 → 분석·탐지 → 보고·대응</b>."
      },
      {
        "k": "note",
        "title": "① 데이터 수집원에 따른 분류",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>HIDS (호스트 기반)</span><div class='row'>특정 서버에 설치해 <b>시스템 로그·파일 무결성·프로세스</b>를 감시.<br>➕ <b>암호화된 트래픽도 복호화 후</b> 볼 수 있고, 내부자 행위 탐지에 강함<br>➖ <b>서버마다 설치·부하</b>, 그 호스트만 봄</div></div><div class='cmp-item'><span class='cmp-label'>NIDS (네트워크 기반)</span><div class='row'>네트워크 구간의 <b>패킷</b>을 수집해 감시(스니핑 방식).<br>➕ <b>여러 시스템을 한 번에</b>, 대상 시스템에 부하 없음<br>➖ <b>암호화된 트래픽은 못 봄</b>, 고속 구간에서 <b>패킷 누락</b></div></div></div>"
      },
      {
        "k": "warn",
        "title": "② 탐지 기법 — 최다 출제 지점",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>지식 기반 = 오용 탐지 (Misuse · Signature)</span><div class='row'><b>알려진 공격 패턴(시그니처)</b>과 비교해 일치하면 경보.<br>➕ <b>오탐(False Positive)이 낮고</b> 빠르며 결과가 명확<br>➖ <b>알려지지 않은 공격(제로데이)을 못 잡는다</b> → <b>미탐이 높다</b>, 시그니처를 계속 갱신해야</div></div><div class='cmp-item'><span class='cmp-label'>행위 기반 = 이상 탐지 (Anomaly)</span><div class='row'><b>평소 정상 상태(프로파일)</b>를 만들어 두고 <b>통계적 편차</b>가 크면 경보.<br>➕ <b>알려지지 않은 새로운 공격도 탐지 가능</b><br>➖ <b>오탐(False Positive)이 높고</b> 정상 프로파일 학습이 필요</div></div></div><p class='on-key'><span class='lbl'>용어 짝</span><b>오탐(False Positive)</b> = 정상을 공격이라고 <b>잘못 경보</b> · <b>미탐(False Negative)</b> = 공격을 정상으로 보고 <b>놓침</b>. “제로데이를 탐지할 수 있는 것은?” → <b>행위 기반</b>이 정답.</p>"
      },
      {
        "k": "safe",
        "title": "한계",
        "d": "IDS는 <b>탐지만</b> 하므로 경보 후 <b>사람이 대응</b>해야 한다(그래서 IPS가 나옴). <b>오탐이 많으면 경보 피로</b>로 진짜 공격을 놓치게 되고, <b>암호화 트래픽 증가</b>로 NIDS의 가시성이 계속 줄고 있다."
      }
    ],
    "finalLiner": "IDS=탐지·경보(차단은 IPS) / 수집원 <b>HIDS</b>(호스트·암호화도 봄·부하) vs <b>NIDS</b>(패킷·광범위·암호화 못봄) / 탐지법 <b>지식기반=오용(시그니처, 오탐↓·제로데이 X)</b> vs <b>행위기반=이상(프로파일, 제로데이 O·오탐↑)</b> / 오탐=정상을 공격으로, 미탐=공격을 놓침",
    "related": ["snort", "ips", "firewall"]
  },
  {
    "id": "snort",
    "term": "Snort · Suricata · YARA",
    "en": "Snort Rules · Suricata · YARA",
    "cat": "네트워크 보안",
    "tags": ["룰 헤더+룰 옵션", "msg·content·sid·rev", "nocase·offset·depth", "수리카타=멀티스레드", "YARA=악성코드 식별"],
    "oneLiner": "Snort=오픈소스 룰 기반 NIDS/IPS(룰 헤더+옵션) / Suricata=멀티스레드로 고속, Snort 룰 호환 / YARA는 네트워크가 아니라 파일·메모리의 악성코드 식별용",
    "blocks": [
      {
        "k": "def",
        "title": "Snort — 룰 구조",
        "d": "대표적인 <b>오픈소스 NIDS/IPS</b>. 탐지 규칙(룰)은 <b>룰 헤더 + 룰 옵션</b>으로 구성된다.<pre>alert tcp any any -> 192.168.0.0/24 80 (msg:\"Web Attack\"; content:\"/etc/passwd\"; nocase; sid:1000001; rev:1;)\n└──────── 룰 헤더 ────────┘ └──────────── 룰 옵션 ────────────┘</pre><b>룰 헤더</b> = <code>동작 프로토콜 출발지IP 출발지포트 -&gt; 목적지IP 목적지포트</code><br><b>동작(action)</b>: <b>alert</b>(경보+로그) · <b>log</b>(로그만) · <b>pass</b>(무시) · <b>drop</b>(차단+로그) · <b>reject</b>(차단+거부응답) · sdrop(조용히 차단)"
      },
      {
        "k": "note",
        "title": "Snort 주요 옵션 (출제 포인트)",
        "d": "<ul class='klist'><li><b>msg</b> — 경보에 출력할 <b>메시지</b></li><li><b>content</b> — <b>페이로드에서 찾을 문자열·바이트</b>(핵심 옵션)</li><li><b>nocase</b> — content 검사 시 <b>대소문자 무시</b></li><li><b>offset / depth</b> — 검사 <b>시작 위치</b> / 검사할 <b>범위</b></li><li><b>sid</b> — 룰의 <b>고유 번호</b>(사용자 정의는 1,000,000 이상) · <b>rev</b> — 룰 <b>개정 번호</b></li><li><b>flags</b> — <b>TCP 플래그</b> 조건(예: <code>flags:S;</code> = SYN) </li><li><b>threshold</b> — 임계치(횟수·시간)로 과도한 경보 억제</li><li><b>classtype / priority</b> — 공격 분류·우선순위 · <b>pcre</b> — 정규식 검사</li></ul>"
      },
      {
        "k": "note",
        "title": "Suricata · YARA — 무엇이 다른가",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>Suricata (수리카타)</span><div class='row'>오픈소스 IDS/IPS. <b>멀티스레드</b>로 동작해 <b>고속·대용량 처리</b>에 유리(Snort의 대표적 한계를 보완). <b>Snort 룰과 호환</b>되고 파일 추출·TLS 로깅 등 기능이 풍부.</div></div><div class='cmp-item'><span class='cmp-label'>YARA</span><div class='row'><b>목적이 다르다</b> — 네트워크 패킷이 아니라 <b>파일·메모리</b>를 대상으로 <b>악성코드를 식별·분류</b>하는 룰 엔진. 문자열·바이트 패턴으로 “이 파일이 어떤 악성코드 계열인가”를 판단한다. 룰은 <b>meta·strings·condition</b> 세 부분.</div></div></div><b>정리</b>: <b>Snort·Suricata = 네트워크 트래픽</b>, <b>YARA = 파일·악성코드</b>."
      }
    ],
    "finalLiner": "Snort 룰 = <b>룰 헤더</b>(<code>action proto 출발지 -&gt; 목적지</code>) + <b>룰 옵션</b> / 옵션 <b>msg·content·nocase·offset/depth·sid·rev·flags·threshold·pcre</b> / <b>Suricata=멀티스레드 고속·Snort 룰 호환</b> / <b>YARA=파일·메모리의 악성코드 식별</b>(네트워크 아님)",
    "related": ["ids", "ips", "sectools"]
  },
  {
    "id": "ips",
    "term": "침입대응 시스템 (IPS) · 허니팟",
    "en": "IPS · Honeypot",
    "cat": "네트워크 보안",
    "tags": ["IDS=탐지 IPS=차단", "인라인 vs 미러링", "오탐 시 정상 차단", "허니팟=미끼", "허니넷"],
    "oneLiner": "IPS=탐지에서 그치지 않고 실시간 차단(인라인 배치) / 허니팟=일부러 취약하게 만든 미끼로 공격을 유인·분석하고 실제 시스템을 보호",
    "blocks": [
      {
        "k": "warn",
        "title": "IDS vs IPS (비교로 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>IDS</span><div class='row'><b>탐지·경보</b>까지. 트래픽 <b>복사본</b>을 보는 <b>미러링(수동)</b> 배치라 통신에 영향이 없다. 대응은 <b>사람이</b>.</div></div><div class='cmp-item'><span class='cmp-label'>IPS</span><div class='row'><b>탐지 + 실시간 차단</b>. 트래픽이 <b>통과하는 경로에 놓는 인라인</b> 배치.<br>➖ <b>오탐이 나면 정상 트래픽까지 차단</b>되고, 장비 장애·지연이 <b>통신 전체에 영향</b>을 준다.</div></div></div><b>핵심 한 줄</b>: <b>IDS는 CCTV, IPS는 자동문 잠금장치.</b>"
      },
      {
        "k": "note",
        "title": "허니팟 (Honeypot)",
        "d": "<b>일부러 취약하게 만들어 공격자를 끌어들이는 미끼 시스템</b>. 실제 자산이 아니므로 <b>여기 들어온 트래픽은 곧 공격</b>으로 볼 수 있다(오탐이 거의 없다).<ul class='klist'><li><b>목적</b>: 공격 <b>유인·지연</b>(실제 시스템에서 시선 돌리기), 공격 <b>기법·도구 수집·분석</b>, 조기 경보</li><li><b>갖춰야 할 조건</b>: <b>쉽게 발견·접근</b>될 수 있어야 하고, 실제처럼 <b>시스템 구성요소를 갖춰야</b> 하며, <b>지속적으로 감시·기록</b>되어야 한다</li><li><b>허니넷(Honeynet)</b> — 허니팟 여러 대로 구성한 <b>네트워크</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "허니팟의 위험",
        "d": "공격자가 허니팟을 <b>장악해 다른 시스템을 공격하는 발판(경유지)</b>으로 쓸 수 있다. 그래서 반드시 <b>실제 내부망과 격리</b>하고, <b>나가는 트래픽을 통제</b>하며 상시 모니터링해야 한다. 법적 문제(유인 논란)도 고려 대상이다."
      }
    ],
    "finalLiner": "<b>IDS=탐지·경보(미러링·수동)</b> vs <b>IPS=탐지+실시간 차단(인라인)</b> — IPS는 <b>오탐 시 정상 트래픽까지 차단</b> / <b>허니팟</b>=미끼로 유인·지연·기법 수집(들어오면 곧 공격), 조건=<b>쉽게 발견·실제처럼·지속 감시</b>, <b>허니넷</b>=허니팟 네트워크 / 위험=경유지 악용 → <b>격리</b>",
    "related": ["ids", "snort", "firewall"]
  }
]
);
