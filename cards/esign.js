/* 정보보안 일반 — 전자서명 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "esign",
    "term": "전자서명 — 정의 · 특징 · 과정",
    "en": "Digital Signature",
    "cat": "정보보안 일반",
    "tags": ["개인키로 서명·공개키로 검증", "해시값에 서명한다", "부인방지", "기밀성은 제공 안 함", "위조·변경·재사용 불가"],
    "oneLiner": "전자서명=메시지의 해시값을 송신자의 개인키로 암호화한 것 / 공개키로 누구나 검증할 수 있어 무결성·인증·부인방지를 제공하지만 기밀성은 제공하지 않는다",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 왜 해시에 서명하는가",
        "d": "<b>전자서명(Digital Signature)</b> — 서명자만이 만들 수 있고 <b>누구나 검증할 수 있는</b> 전자적 정보. <b>공개키 암호를 거꾸로</b> 쓴 것이다.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>암호화(기밀성)</span><div class='row'><b>수신자의 공개키</b>로 잠그고 <b>수신자의 개인키</b>로 연다</div></div><div class='cmp-item'><span class='cmp-label'>전자서명(인증·부인방지)</span><div class='row'><b>송신자의 개인키</b>로 서명하고 <b>송신자의 공개키</b>로 검증한다</div></div></div><p class='on-key'><span class='lbl'>왜 메시지 전체가 아니라 해시에 서명하나</span>① 공개키 연산은 <b>매우 느려서</b> 긴 문서를 통째로 서명하면 비현실적이고, ② 해시는 <b>고정 길이</b>라 서명 크기가 일정하며, ③ 해시만으로도 <b>무결성 검증이 충분</b>하기 때문. \"전자서명은 <b>메시지 다이제스트에 대해</b> 수행한다\"가 그대로 지문으로 나온다.</p>"
      },
      {
        "k": "warn",
        "title": "전자서명의 5대 요건 (통째 출제)",
        "d": "<ul class='klist'><li><b>위조 불가(Unforgeable)</b> — <b>서명자 본인만</b> 만들 수 있어야 한다(개인키를 가진 사람만)</li><li><b>서명자 인증(Authentic)</b> — <b>누구나 서명자를 확인</b>할 수 있어야 한다</li><li><b>부인 불가(Non-repudiation)</b> — 서명한 뒤 <b>\"내가 안 했다\"고 부인할 수 없어야</b> 한다</li><li><b>변경 불가(Unalterable)</b> — 서명한 문서의 <b>내용을 바꿀 수 없어야</b> 한다(바꾸면 검증 실패)</li><li><b>재사용 불가(Not reusable)</b> — 한 문서의 서명을 <b>다른 문서에 옮겨 쓸 수 없어야</b> 한다</li></ul><p class='on-key'><span class='lbl'>제공하지 않는 것</span><b>기밀성</b>. 서명은 원문을 감추지 않는다 — 기밀성이 필요하면 <b>암호화를 따로</b> 해야 한다. \"전자서명이 제공하는 것이 아닌 것은?\" → <b>기밀성</b>이 정답.</p>"
      },
      {
        "k": "note",
        "title": "서명 · 검증 과정",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 해시 생성</span><span class='es-note'>송신자가 메시지를 해시해 <b>다이제스트</b>를 만든다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 서명</span><span class='es-note'>다이제스트를 <b>송신자의 개인키</b>로 암호화 = <b>전자서명</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 전송</span><span class='es-note'><b>원문 + 서명</b>을 함께 보낸다(기밀성이 필요하면 여기에 암호화를 덧붙임)</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 검증 준비</span><span class='es-note'>수신자가 <b>받은 원문을 직접 해시</b>해 다이제스트 A를 만든다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑤ 검증</span><span class='es-note'>서명을 <b>송신자의 공개키</b>로 풀어 다이제스트 B를 얻는다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑥ 비교</span><span class='es-note'><b>A = B이면</b> 위·변조 없음 + 송신자 확인 완료</span></div></div><ul class='klist'><li><b>이중서명(SET)</b>·<b>전자봉투</b>는 이 구조의 응용 — PART 03 카드와 이어진다</li><li><b>은닉서명(Blind Signature)</b> — 내용을 <b>가린 채</b> 서명받는 방식. <b>전자화폐의 익명성</b>에 사용</li><li><b>이중서명·다중서명·수신자 지정 서명·부인방지 서명</b> 등 변형이 있다</li></ul>"
      },
      {
        "k": "warn",
        "title": "MAC과의 결정적 차이",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>MAC (메시지 인증 코드)</span><div class='row'><b>대칭키(공유 비밀)</b>로 만든다. <b>무결성·인증은 제공하지만 부인방지는 불가능</b> — 송·수신자가 <b>같은 키</b>를 갖고 있어 <b>수신자도 똑같이 만들 수 있으므로</b> 제3자에게 증명할 수 없다</div></div><div class='cmp-item'><span class='cmp-label'>전자서명</span><div class='row'><b>개인키</b>로 만든다. 개인키는 <b>서명자만</b> 가지므로 <b>부인방지가 성립</b>한다</div></div></div><p class='on-key'><span class='lbl'>한 줄</span><b>부인방지는 오직 전자서명(공개키)만 가능</b>하다. 이 문장 하나가 여러 문항의 정답이 된다.</p>"
      }
    ],
    "finalLiner": "전자서명=<b>메시지 해시를 송신자 개인키로 암호화</b>, 검증은 <b>송신자 공개키</b> / 5대 요건 <b>위조 불가·서명자 인증·부인 불가·변경 불가·재사용 불가</b>, <b>기밀성은 제공하지 않음</b> / 과정 <b>해시→개인키 서명→전송→수신자가 직접 해시한 값과 비교</b> / <b>부인방지는 MAC으로는 불가, 전자서명만 가능</b>",
    "related": ["esignalg", "pki", "pubkey"]
  },
  {
    "id": "esignalg",
    "term": "전자서명 알고리즘 — RSA · ElGamal · Schnorr · DSS · KCDSA · ECDSA",
    "en": "Digital Signature Algorithms",
    "cat": "정보보안 일반",
    "tags": ["RSA=소인수분해·양방향", "ElGamal=이산대수", "Schnorr=짧은 서명", "DSS/DSA=서명 전용", "KCDSA=국내 표준"],
    "oneLiner": "RSA만 암호화와 서명을 모두 하고 나머지(ElGamal·Schnorr·DSA·KCDSA·ECDSA)는 서명 전용 / 근거는 RSA=소인수분해, 나머지=이산대수(ECDSA는 타원곡선 이산대수)",
    "blocks": [
      {
        "k": "warn",
        "title": "알고리즘별 특징 (근거 문제와 용도로 구분)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>RSA 전자서명</span><div class='row'>근거 = <b>소인수분해</b>. <b>암호화와 서명을 모두 할 수 있는 유일한 대표 알고리즘</b>. 서명은 <b>해시를 개인키로 암호화</b>하는 형태라 직관적이고 검증이 빠르다. 서명 길이가 <b>키 길이와 같아 길다</b>(2048비트)</div></div><div class='cmp-item'><span class='cmp-label'>ElGamal 전자서명</span><div class='row'>근거 = <b>이산대수</b>. 서명할 때마다 <b>난수를 써서 같은 문서라도 서명이 매번 달라진다</b>. 서명 길이가 길고, <b>난수를 재사용하면 개인키가 노출</b>된다</div></div><div class='cmp-item'><span class='cmp-label'>Schnorr 전자서명</span><div class='row'>근거 = 이산대수. ElGamal을 개선해 <b>서명 길이가 짧고 계산이 빠르다</b>. <b>스마트카드 등 자원이 적은 환경</b>에 적합. DSA의 이론적 바탕</div></div><div class='cmp-item'><span class='cmp-label'>DSS / DSA</span><div class='row'><b>DSS(Digital Signature Standard)</b>=미국 <b>표준(규격)</b>의 이름, <b>DSA</b>=그 안에서 쓰는 <b>알고리즘</b>. 근거 = 이산대수. <b>서명 전용(암호화 불가)</b>. 해시는 SHA 사용. <b>서명은 빠르지만 검증이 느리다</b></div></div><div class='cmp-item'><span class='cmp-label'>KCDSA</span><div class='row'><b>한국(Korea Certificate-based DSA) 국내 표준</b> 전자서명. DSA 계열이며 <b>인증서 기반</b>으로 설계. 국산 해시 <b>HAS-160</b>과 함께 쓰였다</div></div><div class='cmp-item'><span class='cmp-label'>ECDSA (ECC 전자서명)</span><div class='row'>근거 = <b>타원곡선 이산대수</b>. <b>훨씬 짧은 키·짧은 서명으로 같은 안전성</b> → <b>모바일·IoT·블록체인</b>에서 표준처럼 쓰인다. 국내판이 <b>EC-KCDSA</b></div></div></div>"
      },
      {
        "k": "note",
        "title": "정리 표 · 시험 포인트",
        "d": "<ul class='klist'><li><b>암호화도 되는가</b> — <b>RSA·ElGamal만 가능</b>, <b>DSA·KCDSA·ECDSA·Schnorr는 서명 전용</b></li><li><b>수학적 근거</b> — <b>RSA=소인수분해</b>, <b>ElGamal·Schnorr·DSA·KCDSA=이산대수</b>, <b>ECDSA=타원곡선 이산대수</b></li><li><b>난수(k)의 중요성</b> — 이산대수 계열은 서명마다 <b>새로운 난수</b>가 필요하고, <b>같은 난수를 두 번 쓰면 개인키가 계산되어 버린다</b>(실제 사고 사례 다수)</li><li>전자서명은 늘 <b>해시 알고리즘과 짝</b>으로 명시된다: <b>SHA-256 + RSA</b>, <b>SHA + DSA</b>, <b>HAS-160 + KCDSA</b></li></ul>"
      }
    ],
    "finalLiner": "<b>RSA=소인수분해, 암호화+서명 모두</b> / <b>ElGamal=이산대수·난수마다 서명이 달라짐</b> / <b>Schnorr=짧고 빠름(스마트카드)</b> / <b>DSS=표준명, DSA=알고리즘, 서명 전용</b> / <b>KCDSA=국내 표준(HAS-160)</b> / <b>ECDSA=타원곡선, 짧은 키(모바일·블록체인)</b> — 이산대수 계열은 <b>난수 재사용 시 개인키 노출</b>",
    "related": ["esign", "pubkey", "pki"]
  },
  {
    "id": "pki",
    "term": "PKI — 공개키 기반구조와 구성요소",
    "en": "Public Key Infrastructure",
    "cat": "정보보안 일반",
    "tags": ["CA=인증서 발급", "RA=신원 확인 대행", "CRL=폐지 목록", "OCSP=실시간 확인", "CPS=인증 업무 준칙"],
    "oneLiner": "PKI=공개키가 진짜 그 사람 것임을 신뢰할 수 있게 해 주는 기반구조 / CA가 인증서를 발급하고 RA가 신원 확인을 대행하며, 폐지 정보는 CRL(목록)이나 OCSP(실시간)로 확인한다",
    "blocks": [
      {
        "k": "def",
        "title": "왜 필요한가 — 공개키의 근본 문제",
        "d": "공개키는 <b>누구나 가져갈 수 있다</b>. 그런데 <b>\"이 공개키가 정말 홍길동의 것인가\"</b>는 공개키 자체로는 알 수 없다. 공격자가 자기 공개키를 홍길동 것이라고 올려두면 <b>중간자 공격</b>이 성립한다.<p class='on-key'><span class='lbl'>PKI의 해답</span><b>믿을 수 있는 제3자(CA)가 \"이 공개키는 홍길동의 것\"이라고 <u>전자서명해 준 문서</u></b>를 만든다 — 그것이 <b>인증서(Certificate)</b>다. PKI는 이 인증서를 <b>발급·관리·폐지</b>하는 체계 전체를 말한다.</p>"
      },
      {
        "k": "warn",
        "title": "구성요소 (역할 짝짓기로 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>CA (Certification Authority, 인증기관)</span><div class='row'><b>인증서를 발급·갱신·폐지</b>하고 <b>CRL을 관리</b>한다. <b>자신의 개인키로 인증서에 서명</b>하는 최종 신뢰의 근원.<br>계층: <b>최상위 인증기관(Root CA)</b> — 국내는 <b>KISA</b>가 담당하며 <b>자기 자신을 서명(자체 서명 인증서)</b> / 그 아래 <b>공인인증기관·중간 CA</b></div></div><div class='cmp-item'><span class='cmp-label'>RA (Registration Authority, 등록기관)</span><div class='row'><b>신원 확인과 신청 접수를 대행</b>하는 창구(은행 지점 등). <b>인증서를 직접 발급하지는 않는다</b> — 확인 결과를 CA에 넘길 뿐. <b>이 구분이 함정으로 자주 나온다</b></div></div><div class='cmp-item'><span class='cmp-label'>저장소 / 디렉터리 (Repository, Directory)</span><div class='row'>발급된 <b>인증서와 CRL을 보관·공개</b>해 누구나 조회하게 한다. <b>X.500 디렉터리</b> 표준을 경량화한 <b>LDAP</b>으로 접근하는 것이 일반적</div></div><div class='cmp-item'><span class='cmp-label'>사용자 (가입자 · 검증자)</span><div class='row'>인증서를 발급받아 쓰는 주체와, 그 인증서를 <b>검증해 신뢰하는 상대방</b></div></div><div class='cmp-item'><span class='cmp-label'>CPS (Certification Practice Statement, 인증 업무 준칙)</span><div class='row'>CA가 <b>어떤 절차와 기준으로</b> 인증서를 발급·관리하는지 <b>공표한 문서</b>. \"이 CA를 얼마나 믿을 수 있는가\"의 근거가 된다</div></div></div>"
      },
      {
        "k": "warn",
        "title": "인증서 폐지 — CRL vs OCSP",
        "d": "개인키 유출·소속 변경·정보 오류가 생기면 인증서를 <b>유효기간 전에 폐지</b>해야 한다. 문제는 <b>\"이 인증서가 폐지됐는지\"를 검증자가 어떻게 아느냐</b>.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>CRL (Certificate Revocation List, 인증서 폐지 목록)</span><div class='row'>CA가 <b>폐지된 인증서의 일련번호 목록</b>을 만들어 <b>주기적으로 배포</b>. 검증자가 통째로 받아서 확인.<br>단점 <b>목록이 계속 커지고</b>, <b>발행 주기 사이에는 최신 상태가 아니다</b>(시차 존재)<br>보완: <b>Delta CRL</b>(변경분만 배포)</div></div><div class='cmp-item'><span class='cmp-label'>OCSP (Online Certificate Status Protocol)</span><div class='row'>검증자가 <b>인증서 하나의 상태를 실시간으로 질의</b>하고 응답(<b>good · revoked · unknown</b>)을 받는다.<br>장점 <b>즉시성·트래픽 절감</b> / 단점 <b>응답 서버에 부하가 몰리고, 서버가 죽으면 검증이 막힌다</b><br>보완: <b>OCSP Stapling</b>(서버가 미리 받아 둔 응답을 대신 제시)</div></div></div><p class='on-key'><span class='lbl'>한 줄</span><b>CRL=명단을 통째로 받아 대조(주기적)</b>, <b>OCSP=한 건씩 물어봄(실시간)</b>.</p>"
      },
      {
        "k": "note",
        "title": "인증서 생명주기와 신뢰 모델",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>신청·신원확인</span><span class='es-note'>사용자가 RA에 신청 → RA가 신원 확인</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>발급</span><span class='es-note'>CA가 공개키에 정보를 담아 <b>자신의 개인키로 서명</b>해 발급</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>사용·검증</span><span class='es-note'>상대가 <b>CA의 공개키</b>로 서명을 검증하고 <b>유효기간·폐지 여부</b> 확인</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>갱신 / 폐지</span><span class='es-note'>기간 만료 전 갱신, 키 유출 시 <b>폐지(CRL 등재)</b></span></div></div><ul class='klist'><li><b>계층 모델</b> — Root CA를 정점으로 하는 트리. 검증은 <b>인증서 체인</b>을 따라 Root까지 올라간다(국내 공인인증 구조)</li><li><b>상호 인증(Cross-Certification)</b> — 서로 다른 CA가 상대를 인정해 신뢰를 연결</li><li><b>신뢰의 웹(Web of Trust)</b> — CA 없이 사용자끼리 서로 서명해 주는 <b>PGP 방식</b>(분산형)</li><li><b>Root CA의 개인키가 유출되면 전체 신뢰가 무너진다</b> — 그래서 오프라인 보관·HSM 사용</li></ul>"
      }
    ],
    "finalLiner": "PKI=<b>CA가 서명해 준 인증서</b>로 \"이 공개키는 이 사람 것\"을 보증하는 기반구조 / <b>CA=발급·폐지, RA=신원 확인만 대행(발급 X), 저장소=인증서·CRL 공개(X.500·LDAP), CPS=인증 업무 준칙</b> / 폐지 확인은 <b>CRL(주기적 목록, 시차 있음)</b> vs <b>OCSP(실시간 질의, good/revoked/unknown)</b> / 국내 최상위는 <b>KISA(자체 서명)</b>",
    "related": ["x509", "pmi", "esign"]
  },
  {
    "id": "x509",
    "term": "X.509 공개키 인증서 구조",
    "en": "X.509 Certificate / ASN.1",
    "cat": "정보보안 일반",
    "tags": ["ITU-T 표준·현재 v3", "발급자·주체·유효기간·공개키", "서명 알고리즘과 서명값", "v3 확장 필드", "ASN.1·DER·PEM"],
    "oneLiner": "X.509는 공개키 인증서의 국제 표준으로 현재 v3 / 구조는 버전·일련번호·서명알고리즘·발급자·유효기간·주체·주체 공개키 + v3 확장 필드, 그리고 마지막에 CA의 서명값 / 표현 문법은 ASN.1이고 인코딩은 DER·PEM",
    "blocks": [
      {
        "k": "def",
        "title": "X.509 인증서 구조 (필드 순서로 출제)",
        "d": "<b>X.509</b> — ITU-T가 정한 공개키 인증서 표준. <b>v1 → v2 → v3</b>로 발전했고 <b>현재는 v3</b>(확장 필드 도입).<ul class='klist'><li><b>버전(Version)</b> — v1·v2·v3</li><li><b>일련번호(Serial Number)</b> — <b>발급 CA 안에서 유일한</b> 번호. <b>CRL에 올릴 때 이 번호로 지목</b>한다</li><li><b>서명 알고리즘 식별자</b> — CA가 서명에 쓴 알고리즘(예: sha256WithRSAEncryption)</li><li><b>발급자(Issuer)</b> — <b>CA의 이름</b>(X.500 DN 형식)</li><li><b>유효기간(Validity)</b> — <b>시작(Not Before) · 종료(Not After)</b></li><li><b>주체(Subject)</b> — <b>인증서 소유자의 이름</b>(DN)</li><li><b>주체 공개키 정보</b> — <b>소유자의 공개키 + 알고리즘</b>. <b>인증서의 핵심 내용</b></li><li><b>v2 추가</b>: 발급자 고유 식별자 · 주체 고유 식별자</li><li><b>v3 확장(Extensions)</b> — <b>키 용도(Key Usage)</b>, <b>주체 대체 이름(SAN, 도메인 목록)</b>, <b>기본 제약(CA 여부)</b>, <b>CRL 배포점</b>, <b>OCSP 주소(AIA)</b>, 인증서 정책</li><li><b>CA의 전자서명값</b> — <b>위 전체 내용에 대한 CA의 서명</b>. 이것이 인증서를 위조 불가능하게 만든다</li></ul><p class='on-key'><span class='lbl'>주의</span>인증서에는 <b>공개키만</b> 들어간다. <b>개인키는 절대 들어가지 않는다</b>(단골 함정).</p>"
      },
      {
        "k": "note",
        "title": "ASN.1과 인코딩 (DER · PEM)",
        "d": "<ul class='klist'><li><b>ASN.1(Abstract Syntax Notation One)</b> — 데이터 구조를 <b>플랫폼과 무관하게 추상적으로 기술</b>하는 표기법. X.509 인증서의 <b>구조가 ASN.1로 정의</b>돼 있다(SEQUENCE·INTEGER·OID 등)</li><li><b>OID(Object Identifier)</b> — 알고리즘·정책을 <b>점으로 구분된 숫자</b>로 식별(예: 1.2.840.113549.1.1.11 = sha256WithRSA)</li><li><b>인코딩 규칙</b>: <b>BER</b>(기본) → <b>DER</b>(Distinguished, <b>표현 방법이 유일하게 정해져</b> 서명 검증에 필수) → 실제 인증서는 대부분 <b>DER</b></li><li><b>PEM</b> — DER를 <b>Base64로 바꾸고</b> <code>-----BEGIN CERTIFICATE-----</code> 머리말을 붙인 <b>텍스트 형식</b>. 메일·설정 파일에 붙여 넣기 위해 쓴다</li><li>파일 확장자: <b>.der·.cer</b>(바이너리) / <b>.pem·.crt</b>(텍스트) / <b>.pfx·.p12</b>(<b>개인키까지 함께</b> 담은 PKCS#12, 비밀번호 필요)</li></ul>"
      },
      {
        "k": "note",
        "title": "인증서 검증 절차와 체인",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 서명 검증</span><span class='es-note'><b>발급 CA의 공개키</b>로 인증서의 서명값을 확인 → 위·변조 여부</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 유효기간 확인</span><span class='es-note'>현재 시각이 Not Before ~ Not After 안인가</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 폐지 여부 확인</span><span class='es-note'><b>CRL 또는 OCSP</b>로 취소되지 않았는지 확인</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 체인 추적</span><span class='es-note'>발급 CA의 인증서에 대해 <b>같은 검사를 반복</b>하며 <b>Root CA까지</b> 올라간다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑤ 용도·이름 확인</span><span class='es-note'>Key Usage가 맞는지, <b>접속한 도메인이 SAN에 있는지</b></span></div></div><p class='on-key'><span class='lbl'>신뢰의 출발점</span><b>Root CA 인증서는 브라우저·OS에 미리 내장</b>돼 있고 <b>자기 자신이 서명(Self-signed)</b>한다. 여기서 신뢰가 시작되므로, 공격자의 루트 인증서가 설치되면 <b>모든 HTTPS가 무력화</b>된다.</p>"
      }
    ],
    "finalLiner": "X.509 <b>현재 v3</b> / 구조 <b>버전·일련번호(CRL 지목용)·서명알고리즘·발급자(CA)·유효기간·주체·주체 공개키 + v3 확장(Key Usage·SAN·CRL 배포점) + CA 서명값</b>, <b>개인키는 들어가지 않는다</b> / 구조 정의는 <b>ASN.1</b>, 인코딩 <b>DER(바이너리·유일 표현)</b> vs <b>PEM(Base64 텍스트)</b> / 검증 = <b>서명→유효기간→폐지(CRL·OCSP)→체인→용도·도메인</b>",
    "related": ["pki", "pmi", "ssl"]
  },
  {
    "id": "pmi",
    "term": "PMI와 속성 인증서",
    "en": "Privilege Management Infrastructure / Attribute Certificate",
    "cat": "정보보안 일반",
    "tags": ["PKI=신원(인증)", "PMI=권한(인가)", "속성 인증서(AC)", "SOA·AA·AC 보유자", "유효기간이 짧다"],
    "oneLiner": "PKI가 \"누구인가(신원·인증)\"를 다룬다면 PMI는 \"무엇을 할 수 있는가(권한·인가)\"를 다루는 기반구조 / 수단은 공개키가 아닌 권한 정보를 담은 속성 인증서(AC)",
    "blocks": [
      {
        "k": "def",
        "title": "PKI와 PMI의 관계 (비교로 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>PKI (공개키 기반구조)</span><div class='row'>다루는 것 = <b>신원(Identity)</b> → <b>인증(Authentication)</b><br>발급물 = <b>공개키 인증서(PKC)</b> — <b>공개키</b>를 담는다<br>발급 주체 = <b>CA(인증기관)</b><br>유효기간 = <b>길다</b>(1~3년)<br>비유 = <b>여권·주민등록증</b></div></div><div class='cmp-item'><span class='cmp-label'>PMI (권한 관리 기반구조)</span><div class='row'>다루는 것 = <b>권한·자격(Privilege)</b> → <b>인가(Authorization)</b><br>발급물 = <b>속성 인증서(AC, Attribute Certificate)</b> — <b>역할·직책·자격</b>을 담는다<br>발급 주체 = <b>AA(속성기관)</b><br>유효기간 = <b>짧다</b>(권한은 자주 바뀌므로)<br>비유 = <b>탑승권·출입증·회원등급</b></div></div></div><p class='on-key'><span class='lbl'>핵심 문장</span><b>PKI는 인증(누구인가), PMI는 인가(무엇을 할 수 있는가).</b> PMI는 PKI 위에서 동작하며 <b>PKI를 대체하는 것이 아니라 보완</b>한다.</p>"
      },
      {
        "k": "note",
        "title": "속성 인증서 (AC)와 구성요소",
        "d": "<ul class='klist'><li><b>속성 인증서(Attribute Certificate)</b> — <b>공개키를 담지 않고</b> \"이 사람은 <b>부장이다·의사다·관리자 역할이다</b>\" 같은 <b>속성(권한)</b>을 담아 서명한 인증서. <b>공개키 인증서와 연결</b>되어 사용된다</li></ul><div class='cmp'><div class='cmp-item'><span class='cmp-label'>SOA (Source of Authority, 최상위 속성기관)</span><div class='row'>권한 체계의 <b>최종 근원</b>. PKI의 <b>Root CA에 대응</b>하며 권한 정책을 정한다</div></div><div class='cmp-item'><span class='cmp-label'>AA (Attribute Authority, 속성기관)</span><div class='row'><b>속성 인증서를 발급·폐지</b>한다. PKI의 <b>CA에 대응</b></div></div><div class='cmp-item'><span class='cmp-label'>AC 보유자 (Holder) / 검증자 (Verifier)</span><div class='row'>권한을 받은 주체와, 그 권한을 확인해 접근을 허용하는 쪽</div></div><div class='cmp-item'><span class='cmp-label'>저장소 · ACRL</span><div class='row'>속성 인증서와 <b>속성 인증서 폐지 목록(ACRL)</b>을 보관·공개</div></div></div>"
      },
      {
        "k": "note",
        "title": "왜 신원과 권한을 분리하는가",
        "d": "<ul class='klist'><li><b>변경 주기가 다르다</b> — 신원은 잘 안 바뀌지만 <b>직책·권한은 자주 바뀐다</b>. 인사이동 때마다 공개키 인증서를 재발급하는 것은 낭비</li><li><b>관리 주체가 다르다</b> — 신원 확인은 CA가, <b>권한 부여는 소속 조직</b>이 하는 것이 자연스럽다</li><li><b>RBAC과 잘 맞는다</b> — 속성 인증서에 <b>역할(Role)</b>을 담으면 그대로 역할 기반 접근통제로 연결된다</li><li>실제 활용 예: 병원의 <b>의사 자격</b>, 기업의 <b>결재 권한</b>, <b>SAML의 속성(Attribute) 전달</b>도 같은 발상</li></ul>"
      }
    ],
    "finalLiner": "<b>PKI=신원·인증·공개키 인증서·CA·긴 유효기간(여권)</b> / <b>PMI=권한·인가·속성 인증서(AC)·AA·짧은 유효기간(탑승권)</b> / PMI 구성 <b>SOA(최상위, Root CA 대응) · AA(발급, CA 대응) · AC 보유자 · 검증자 · ACRL</b> / <b>속성 인증서에는 공개키가 없다</b>",
    "related": ["pki", "x509", "macdac"]
  },
  {
    "id": "evote",
    "term": "전자투표 — 개념과 요구사항",
    "en": "Electronic Voting",
    "cat": "정보보안 일반",
    "tags": ["완전성·비밀성·불변성", "이중투표 방지", "비강제성(영수증 없음)", "PSEV·REV·키오스크", "은닉서명·믹스넷"],
    "oneLiner": "전자투표=투표와 개표를 전자적으로 처리하는 방식 / 요구사항은 완전성·익명성(비밀성)·이중투표 방지·검증 가능성·비강제성이며, 익명성과 검증 가능성을 동시에 만족시키는 것이 가장 어렵다",
    "blocks": [
      {
        "k": "def",
        "title": "전자투표의 방식",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>PSEV (Poll Site E-Voting) — 지정 투표소</span><div class='row'>정해진 투표소의 <b>전용 단말</b>로 투표. 신원 확인이 확실하고 통제가 쉬워 <b>가장 안전</b>. 국내 <b>터치스크린 투표</b>가 이 형태</div></div><div class='cmp-item'><span class='cmp-label'>키오스크 (Kiosk)</span><div class='row'>공공장소에 둔 무인 단말로 투표. 편의성은 높지만 <b>물리적 통제가 약하다</b></div></div><div class='cmp-item'><span class='cmp-label'>REV (Remote E-Voting) — 원격 인터넷 투표</span><div class='row'>집·직장의 <b>개인 PC·모바일</b>로 투표. <b>가장 편리하지만 가장 위험</b> — 단말 감염, <b>대리 투표·매표(강요)를 막을 수 없다</b></div></div></div>"
      },
      {
        "k": "warn",
        "title": "요구사항 (목록 통째 출제)",
        "d": "<ul class='klist'><li><b>완전성(Completeness)</b> — 모든 투표가 <b>정확하게 집계</b>되어야 한다(누락·중복 없음)</li><li><b>비밀성·익명성(Privacy)</b> — <b>누가 누구를 찍었는지 알 수 없어야</b> 한다</li><li><b>이중투표 방지(Unreusability)</b> — 한 사람이 <b>두 번 투표할 수 없어야</b> 한다</li><li><b>적격성(Eligibility)</b> — <b>자격 있는 유권자만</b> 투표할 수 있어야 한다</li><li><b>공정성(Fairness)</b> — <b>개표 전에 중간 결과가 새어 나가면 안 된다</b>(남은 투표에 영향)</li><li><b>검증 가능성(Verifiability)</b> — 자신의 표가 제대로 반영됐는지, 집계가 옳은지 <b>확인할 수 있어야</b> 한다</li><li><b>비강제성·무영수증(Receipt-freeness)</b> — <b>자신이 누구를 찍었는지 남에게 증명할 수 없어야</b> 한다. 증명이 가능하면 <b>매표·강요</b>가 성립하기 때문</li><li><b>건전성(Soundness)</b> — 부정한 투표가 <b>전체 결과를 왜곡할 수 없어야</b> 한다</li></ul><p class='on-key'><span class='lbl'>가장 어려운 지점</span><b>검증 가능성과 비강제성이 서로 충돌</b>한다. \"내 표가 제대로 들어갔는지 확인하고 싶다\"는 요구와 \"내가 누구를 찍었는지 증명할 수 없어야 한다\"는 요구가 정반대이기 때문. 이 긴장이 전자투표의 핵심 난제로 출제된다.</p>"
      },
      {
        "k": "note",
        "title": "사용되는 보안 기술",
        "d": "<ul class='klist'><li><b>은닉서명(Blind Signature)</b> — 투표 내용을 <b>가린 채</b> 선관위의 서명을 받아 <b>적격성과 익명성을 동시에</b> 확보. 전자화폐와 같은 원리</li><li><b>믹스넷(Mix-net)</b> — 투표를 여러 서버가 <b>순서를 섞어 가며</b> 전달해 <b>투표자와 표의 연결을 끊는다</b></li><li><b>동형암호(Homomorphic Encryption)</b> — <b>암호문 상태 그대로 더해서</b> 집계. <b>개별 표를 열지 않고도 총합</b>을 구할 수 있다</li><li><b>전자서명·PKI</b>(유권자 인증), <b>영지식 증명</b>(내용을 밝히지 않고 정당함만 증명), <b>블록체인</b>(변경 불가 기록)</li><li>국내 <b>K-Voting</b>(온라인 투표 시스템) — 공공·민간 선거에 사용</li></ul>"
      }
    ],
    "finalLiner": "방식 <b>PSEV(투표소, 가장 안전) · 키오스크 · REV(인터넷, 편하지만 대리·매표 위험)</b> / 요구사항 <b>완전성·비밀성·이중투표 방지·적격성·공정성(중간결과 비공개)·검증 가능성·비강제성(영수증 없음)·건전성</b> — <b>검증 가능성과 비강제성이 충돌</b>하는 것이 핵심 난제 / 기술은 <b>은닉서명·믹스넷·동형암호·영지식 증명</b>",
    "related": ["esign", "pki", "ecash"]
  }
]);
