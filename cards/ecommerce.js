/* 애플리케이션 보안 — 전자상거래 보안 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "ecash",
    "term": "전자화폐 — 정의 · 요구조건 · 종류",
    "en": "Electronic Cash / Electronic Money",
    "cat": "애플리케이션 보안",
    "tags": ["불추적성(익명성)", "이중사용 방지", "양도성·분할성·독립성", "IC 카드형=몬덱스·비자캐시", "네트워크형"],
    "oneLiner": "전자화폐=현금의 성질을 전자적으로 옮긴 지불수단 / 요구조건은 불추적성(익명성)·이중사용 방지·양도성·분할성·독립성 / IC 카드형(몬덱스·비자캐시) vs 네트워크형(사이버캐시·이캐시)",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "<b>전자화폐(Electronic Cash)</b> — 은행이 발행한 <b>현금의 가치를 전자적 정보로 바꿔</b> IC 카드나 컴퓨터에 저장했다가 지불에 쓰는 수단. 신용카드(<b>후불·기명</b>)와 달리 <b>선불·익명</b>이 원칙이라 \"디지털 현금\"이라 부른다.<p class='on-key'><span class='lbl'>핵심 난제</span>현금은 물건이라 한 번 주면 내 손을 떠나지만, 전자화폐는 <b>데이터라서 복사가 된다</b>. 그래서 <b>이중사용(Double Spending) 방지</b>가 설계의 중심에 온다.</p>"
      },
      {
        "k": "note",
        "title": "요구조건 (가장 많이 나오는 목록)",
        "d": "<ul class='klist'><li><b>불추적성(익명성, Untraceability)</b> — 누가 어디에 썼는지 <b>추적할 수 없어야</b> 한다. 현금의 가장 큰 특성 → 구현 기법이 <b>은닉서명(Blind Signature)</b></li><li><b>이중사용 방지(Double Spending 방지)</b> — 같은 화폐를 <b>두 번 쓸 수 없어야</b> 한다</li><li><b>양도성(Transferability)</b> — 사람에서 사람으로 <b>그대로 넘길 수 있어야</b> 한다</li><li><b>분할성(Divisibility)</b> — 1만원을 <b>쪼개서</b> 3천원만 지불할 수 있어야 한다</li><li><b>독립성(휴대성, Independence)</b> — 물리적 매체·장소에 <b>얽매이지 않고</b> 저장·이동 가능해야 한다</li><li><b>위조 불가능성(Unforgeability)</b> — 복제·변조가 불가능해야 한다</li></ul><p class='on-key'><span class='lbl'>은닉서명</span>메시지 내용을 <b>가린 채로</b> 서명받는 기법. 은행은 액면만 보증하고 <b>누구의 화폐인지는 모르게</b> 되어 익명성이 성립한다.</p>"
      },
      {
        "k": "note",
        "title": "저장 매체에 따른 분류",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>IC 카드형 (전자지갑형)</span><div class='row'><b>스마트카드 안의 칩</b>에 가치를 저장. 오프라인 소액 결제에 강함.<br>예) <b>몬덱스(Mondex)</b> — 영국, <b>사람 간 직접 양도(양도성) 가능</b>이 특징 / <b>비자캐시(VisaCash)</b> — 비자, 양도는 안 되고 가맹점에 지불만 / 국내 <b>K-CASH</b></div></div><div class='cmp-item'><span class='cmp-label'>네트워크형 (소프트웨어형)</span><div class='row'>PC·서버의 <b>소프트웨어</b>에 저장하고 통신망으로 주고받음. 온라인 결제용.<br>예) <b>e-Cash</b>(디지캐시, 은닉서명 사용) · <b>사이버캐시(CyberCash)</b> · <b>퍼스트버추얼</b></div></div></div><p class='on-key'><span class='lbl'>구분 요령</span><b>몬덱스=양도 가능</b>, <b>비자캐시=양도 불가</b>로 짝지어 나온다. 이캐시는 <b>은닉서명·익명성</b>과 함께 묶인다.</p>"
      }
    ],
    "finalLiner": "전자화폐=선불·익명의 디지털 현금 / 요구조건 <b>불추적성(은닉서명)·이중사용 방지·양도성·분할성·독립성·위조 불가</b> / <b>IC 카드형=몬덱스(양도 O)·비자캐시(양도 X)·K-CASH</b>, <b>네트워크형=e-Cash·사이버캐시</b>",
    "related": ["set", "ssl"]
  },
  {
    "id": "set",
    "term": "SET · 이중서명",
    "en": "Secure Electronic Transaction / Dual Signature",
    "cat": "애플리케이션 보안",
    "tags": ["신용카드 지불 표준", "이중서명", "상점은 카드번호를 못 봄", "전자봉투", "구현 복잡해 사장"],
    "oneLiner": "SET=비자·마스터카드가 만든 신용카드 지불 프로토콜 / 핵심은 이중서명 — 주문정보는 상점만, 지불정보는 PG만 보게 나누면서도 둘이 한 거래임을 증명한다",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 참여자",
        "d": "<b>SET(Secure Electronic Transaction)</b> — 1996년 <b>비자·마스터카드</b>가 공동 개발한 <b>인터넷 신용카드 결제 보안 프로토콜</b>. 참여자 전원이 <b>인증서(X.509)</b>를 갖는 것이 특징.<ul class='klist'><li><b>고객(Cardholder)</b> — 전자지갑(Electronic Wallet) 소프트웨어 사용</li><li><b>상점(Merchant)</b> — 물건을 파는 쪽</li><li><b>지불 게이트웨이(PG, Payment Gateway)</b> — 인터넷과 기존 금융망을 잇는 중계</li><li><b>발급기관(Issuer) · 매입기관(Acquirer) · 인증기관(CA)</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "이중서명(Dual Signature) — 왜 쓰는가 (최다 출제)",
        "d": "<p>문제 상황: 고객은 <b>상점에게 카드번호를 보여주기 싫고</b>, <b>은행(PG)에게는 무엇을 샀는지 알리기 싫다</b>. 그런데 두 정보가 <b>같은 하나의 거래</b>라는 건 증명돼야 한다.</p><div class='cmp two'><div class='cmp-item'><span class='cmp-label'>주문정보 OI (Order Information)</span><div class='row'><b>상점만</b> 본다. PG는 못 본다</div></div><div class='cmp-item'><span class='cmp-label'>지불정보 PI (Payment Information)</span><div class='row'>카드번호 등. <b>PG만</b> 본다. <b>상점은 못 본다</b></div></div></div><pre>이중서명 만드는 순서\n1) H(OI) = 주문정보 해시,  H(PI) = 지불정보 해시\n2) 두 해시를 이어붙여 다시 해시 → H( H(PI) || H(OI) )\n3) 그 값을 고객의 개인키로 서명 = 이중서명(Dual Signature)</pre><ul class='klist'><li>상점은 <b>OI 원문 + H(PI)</b>만 받는다 → 카드번호는 <b>해시라서 볼 수 없지만</b> 서명 검증은 된다</li><li>PG는 <b>PI 원문 + H(OI)</b>만 받는다 → 무엇을 샀는지는 모른다</li><li>양쪽 모두 <b>같은 이중서명 값을 검증</b>할 수 있어 <b>두 정보가 한 거래임</b>이 증명된다</li></ul><p class='on-key'><span class='lbl'>한 줄 이유</span><b>기밀성(서로 필요 없는 정보는 감춤)과 연결성(한 거래임을 입증)을 동시에</b> 달성하려고 쓴다.</p>"
      },
      {
        "k": "note",
        "title": "거래 절차 · 사용 기술",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 구매 요청</span><span class='es-note'>고객이 상점에 주문. 인증서를 교환해 서로 확인</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 이중서명 전송</span><span class='es-note'>고객이 OI+H(PI)는 상점에게, PI+H(OI)는 (상점을 거쳐) PG에게</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 지불 승인 요청</span><span class='es-note'>상점이 PG에 승인 요청 → PG가 금융망으로 카드사 확인</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 승인 응답 · 상품 인도</span><span class='es-note'>승인이 오면 상점이 상품·서비스를 제공</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑤ 대금 청구(Capture)</span><span class='es-note'>상점이 나중에 대금 지급을 요청</span></div></div><ul class='klist'><li><b>전자봉투(Digital Envelope)</b> — 데이터는 <b>대칭키</b>로 암호화하고, 그 <b>대칭키를 수신자 공개키</b>로 암호화해 함께 보냄. SET·PGP 공통 방식</li><li>기밀성=DES, 무결성·인증=RSA 전자서명, 신원=X.509 인증서</li></ul>"
      },
      {
        "k": "warn",
        "title": "SET의 한계 (SSL과 비교해서 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>SET</span><div class='row'><b>보안은 강하다</b>(상점이 카드번호를 못 봄, 부인방지 가능). 그러나 <b>참여자 전원이 인증서를 갖고 전자지갑을 깔아야</b> 하고 <b>처리가 느리고 복잡</b> → <b>사실상 사장</b></div></div><div class='cmp-item'><span class='cmp-label'>SSL</span><div class='row'>브라우저에 기본 내장이라 <b>추가 설치 없이 간편</b>. 단 <b>상점이 카드번호를 그대로 보게 되고</b>, 부인방지가 없다 → <b>실제로는 SSL이 승리</b></div></div></div>"
      }
    ],
    "finalLiner": "SET=비자·마스터의 신용카드 결제 프로토콜, 전원이 <b>인증서</b> 보유 / <b>이중서명 = 서명[ H( H(PI) || H(OI) ) ]</b> — <b>상점은 카드번호(PI)를, PG는 주문내역(OI)을 못 보면서</b> 같은 거래임을 증명 / <b>전자봉투</b>(대칭키 암호화 + 대칭키를 공개키로 암호화) / 안전하나 <b>복잡해서 SSL에 밀려 사장</b>",
    "related": ["ssl", "ecash", "sslimpl"]
  },
  {
    "id": "ssl",
    "term": "SSL/TLS — 보안 서비스 · 구성요소 · 핸드셰이크",
    "en": "Secure Sockets Layer / Transport Layer Security",
    "cat": "애플리케이션 보안",
    "tags": ["전송-응용 계층 사이", "기밀성·무결성·인증", "Handshake·Record·CCS·Alert", "Pre-Master Secret", "443/HTTPS"],
    "oneLiner": "SSL/TLS=전송계층과 응용계층 사이에서 동작하는 보안 프로토콜 / 서비스=기밀성·무결성·서버(선택적 클라이언트) 인증 / 상위 4개 프로토콜 중 핵심은 Handshake(키 합의)와 Record(실제 암호화)",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 위치",
        "d": "<b>SSL(Secure Sockets Layer)</b> — 넷스케이프가 만든 보안 프로토콜. 표준화되며 이름이 <b>TLS(Transport Layer Security)</b>로 바뀌었다. <b>SSL 3.0 → TLS 1.0 → 1.2 → 1.3</b>. 현재 <b>SSL 전 버전과 TLS 1.0/1.1은 취약해 사용 금지</b>, <b>TLS 1.2 이상</b>을 쓴다.<ul class='klist'><li>위치: <b>전송 계층(TCP) 위, 응용 계층(HTTP) 아래</b>. 그래서 HTTP·FTP·SMTP 등 <b>여러 응용을 그대로 감쌀 수 있다</b></li><li><b>HTTPS = HTTP over SSL/TLS</b>, 포트 <b>443</b></li></ul>"
      },
      {
        "k": "note",
        "title": "제공하는 보안 서비스 (하나가 빠져 있음에 주의)",
        "d": "<ul class='klist'><li><b>기밀성(Confidentiality)</b> — 대칭키 암호(AES 등)로 데이터 암호화</li><li><b>무결성(Integrity)</b> — <b>MAC(HMAC)</b>으로 변조 탐지</li><li><b>인증(Authentication)</b> — <b>서버 인증은 필수</b>, <b>클라이언트 인증은 선택</b>(X.509 인증서)</li></ul><p class='on-key'><span class='lbl'>함정</span>SSL은 <b>부인방지(Non-repudiation)를 제공하지 않는다</b>. 부인방지는 SET·전자서명의 몫. \"SSL이 제공하지 않는 것은?\" → <b>부인방지</b>가 정답.</p>"
      },
      {
        "k": "note",
        "title": "구성요소 — 상위 4개 + Record",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>Handshake Protocol</span><div class='row'>가장 복잡하고 중요. <b>버전·암호 방식(Cipher Suite) 합의, 인증서 교환·검증, 세션 키 생성</b>을 담당</div></div><div class='cmp-item'><span class='cmp-label'>Change Cipher Spec Protocol</span><div class='row'><b>1바이트</b>짜리 가장 단순한 프로토콜. \"<b>지금부터 합의한 암호를 적용한다</b>\"는 전환 신호</div></div><div class='cmp-item'><span class='cmp-label'>Alert Protocol</span><div class='row'>오류·경고 전달(<b>warning / fatal</b>). fatal이면 즉시 연결 종료</div></div><div class='cmp-item'><span class='cmp-label'>Handshake 계층의 응용 데이터</span><div class='row'>실제 HTTP 데이터가 위에서 내려온다</div></div><div class='cmp-item'><span class='cmp-label'>Record Protocol (하위)</span><div class='row'>위 모든 것을 받아 <b>단편화 → 압축 → MAC 부착 → 암호화 → 헤더 추가</b> 순으로 처리해 TCP로 내려보낸다. <b>실제 기밀성·무결성을 실행하는 층</b></div></div></div>"
      },
      {
        "k": "warn",
        "title": "Handshake 세부 과정 (순서 문제 단골)",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① ClientHello</span><span class='es-note'>클라이언트 → 서버. <b>SSL 버전, 클라이언트 난수, 세션 ID, 지원하는 Cipher Suite 목록</b> 제시</span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>② ServerHello</span><span class='es-note'>서버가 목록 중 <b>사용할 버전·암호 방식을 선택</b>하고 <b>서버 난수</b>를 보냄</span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>③ Certificate (+ ServerKeyExchange, CertificateRequest)</span><span class='es-note'>서버가 <b>X.509 인증서(공개키)</b> 전달. 필요하면 클라이언트 인증서를 요구</span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>④ ServerHelloDone</span><span class='es-note'>서버 쪽 인사 끝 신호</span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>⑤ ClientKeyExchange</span><span class='es-note'>클라이언트가 인증서를 검증한 뒤 <b>Pre-Master Secret을 만들어 서버 공개키로 암호화</b>해 전송. <b>여기서 키가 넘어간다</b></span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>⑥ ChangeCipherSpec → Finished (클라이언트)</span><span class='es-note'>\"이제 암호 적용\" 후 지금까지 주고받은 메시지의 해시를 담은 Finished 전송</span></div><div class='evo-arrow'>↓</div><div class='evo-step'><span class='es-name'>⑦ ChangeCipherSpec → Finished (서버)</span><span class='es-note'>서버도 같은 전환·확인 → <b>이후 응용 데이터는 암호화되어 오간다</b></span></div></div><p class='on-key'><span class='lbl'>키 유도</span><b>Pre-Master Secret + 클라이언트 난수 + 서버 난수 → Master Secret → 세션 키(암호화 키·MAC 키·IV)</b>. 난수를 섞는 이유는 <b>재전송 공격 방지</b>다.</p>"
      }
    ],
    "finalLiner": "SSL/TLS=<b>TCP 위·응용 아래</b>, HTTPS <b>443</b> / 제공: <b>기밀성·무결성(MAC)·서버 인증(클라이언트는 선택)</b>, <b>부인방지는 제공 안 함</b> / 구성: <b>Handshake(합의·인증·키) · ChangeCipherSpec(1바이트 전환) · Alert(warning·fatal) · Record(단편화→압축→MAC→암호화)</b> / 순서 <b>ClientHello→ServerHello→Certificate→ServerHelloDone→ClientKeyExchange(Pre-Master)→CCS·Finished</b>",
    "related": ["sslimpl", "set", "httpheader"]
  },
  {
    "id": "sslimpl",
    "term": "OpenSSL · S-HTTP",
    "en": "OpenSSL / Secure HTTP",
    "cat": "애플리케이션 보안",
    "tags": ["OpenSSL=오픈소스 구현체", "하트블리드", "S-HTTP=메시지 단위", "SSL=연결 단위", "S-HTTP는 HTTP 전용"],
    "oneLiner": "OpenSSL=SSL/TLS를 구현한 대표 오픈소스 라이브러리(하트블리드 취약점의 무대) / S-HTTP=HTTP 메시지 하나하나를 암호화하는 별개 방식으로, 연결 전체를 감싸는 SSL에 밀려 사라졌다",
    "blocks": [
      {
        "k": "def",
        "title": "OpenSSL",
        "d": "<b>OpenSSL</b> — SSL/TLS 프로토콜과 각종 암호 알고리즘을 구현한 <b>오픈소스 라이브러리·명령행 도구</b>. 아파치·nginx 등 대부분의 서버가 이것을 쓴다.<pre># 개인키 생성\nopenssl genrsa -out server.key 2048\n\n# 인증서 서명 요청(CSR) 생성\nopenssl req -new -key server.key -out server.csr\n\n# 자체 서명 인증서 생성\nopenssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt\n\n# 서버의 인증서·프로토콜 확인\nopenssl s_client -connect www.example.com:443</pre>"
      },
      {
        "k": "warn",
        "title": "하트블리드 (Heartbleed, CVE-2014-0160)",
        "d": "OpenSSL의 <b>하트비트(Heartbeat) 확장</b>에서, 보낸 데이터의 <b>실제 길이를 검증하지 않아</b> 발생한 <b>버퍼 오버리드(경계 검사 미비)</b> 취약점.<ul class='klist'><li>공격자가 \"1바이트 보내며 길이는 64KB\"라고 속이면 서버가 <b>인접 메모리 64KB를 그대로 응답</b></li><li>유출 대상: <b>개인키·세션 쿠키·패스워드</b> — 암호화가 뚫린 게 아니라 <b>구현 버그</b>였다는 점이 포인트</li><li>대응: OpenSSL 패치, <b>인증서·개인키 재발급</b>, 세션·패스워드 초기화</li></ul><p class='on-key'><span class='lbl'>같이 나오는 것</span><b>POODLE</b>(SSL 3.0 패딩 공격 → SSL 3.0 폐기), <b>BEAST·CRIME</b>, <b>FREAK/Logjam</b>(약한 수출용 암호 강제). 대응은 공통적으로 <b>취약 버전·취약 Cipher Suite 비활성화</b>.</p>"
      },
      {
        "k": "note",
        "title": "S-HTTP vs SSL (비교로만 출제)",
        "d": "<b>S-HTTP(Secure HTTP)</b> — HTTP <b>메시지 자체</b>를 암호화·서명해 주고받도록 만든 프로토콜.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>S-HTTP</span><div class='row'>보호 단위 = <b>HTTP 메시지 하나하나</b>. <b>HTTP 전용</b>(다른 프로토콜엔 못 씀). 응용 계층에서 동작. <b>전자서명으로 부인방지 가능</b>. 널리 안 쓰여 <b>사장</b></div></div><div class='cmp-item'><span class='cmp-label'>SSL/TLS</span><div class='row'>보호 단위 = <b>연결(세션) 전체</b>. HTTP·FTP·SMTP 등 <b>어떤 응용이든</b> 감쌀 수 있음. 전송~응용 사이에서 동작. <b>현재 표준</b></div></div></div><p class='on-key'><span class='lbl'>암기</span><b>S-HTTP=메시지 단위·HTTP 전용</b>, <b>SSL=연결 단위·범용</b>. URL도 <code>shttp://</code> vs <code>https://</code>로 달랐다.</p>"
      }
    ],
    "finalLiner": "<b>OpenSSL</b>=SSL/TLS 오픈소스 구현체(<code>genrsa</code>·<code>req</code>·<code>x509</code>·<code>s_client</code>), <b>하트블리드=하트비트 길이 미검증으로 메모리 64KB 유출 → 개인키 재발급</b> / <b>S-HTTP=메시지 단위·HTTP 전용·사장</b> vs <b>SSL=연결 단위·범용·표준</b>",
    "related": ["ssl", "set", "websec"]
  },
  {
    "id": "otp",
    "term": "OTP — 정의와 동기화 방식",
    "en": "One Time Password",
    "cat": "애플리케이션 보안",
    "tags": ["일회용 비밀번호", "시간 동기화", "이벤트(계수) 동기화", "질의응답(비동기)", "S/KEY"],
    "oneLiner": "OTP=한 번 쓰고 버리는 비밀번호로 재사용·스니핑 공격을 무력화 / 동기식은 시간 동기화·이벤트(계수) 동기화, 비동기식은 질의응답(Challenge-Response) 방식",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 필요성",
        "d": "<b>OTP(One Time Password)</b> — <b>매번 다른 값</b>이 생성되어 한 번만 유효한 비밀번호.<ul class='klist'><li>고정 패스워드는 <b>스니핑·재전송(Replay)·키로깅</b>으로 훔치면 계속 쓸 수 있다</li><li>OTP는 훔쳐도 <b>이미 만료</b>라 재사용이 불가능 → <b>재전송 공격 대응</b></li><li><b>2단계 인증(2FA)</b>의 대표 수단: 지식(패스워드) + <b>소유(OTP 토큰)</b></li></ul>"
      },
      {
        "k": "note",
        "title": "동기식 — 시간 동기화 vs 이벤트(계수) 동기화",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>시간 동기화 방식 (Time Synchronous, TOTP)</span><div class='row'><b>현재 시각 + 비밀키</b>로 값 생성. <b>보통 60초(30초)마다 자동 변경</b>.<br>장점: 사용이 간편(버튼만 보면 됨)<br>단점: <b>시간이 어긋나면 인증 실패</b>(시각 동기화 필요), 유효시간 안에는 재사용 위험</div></div><div class='cmp-item'><span class='cmp-label'>이벤트(계수) 동기화 방식 (Event/Counter, HOTP)</span><div class='row'><b>사용 횟수(카운터) + 비밀키</b>로 값 생성. <b>버튼을 누를 때마다</b> 다음 값.<br>장점: 시간 동기화가 필요 없음<br>단점: 사용자가 버튼을 헛눌러 <b>카운터가 어긋나면(비동기화) 재동기화 필요</b></div></div></div>"
      },
      {
        "k": "note",
        "title": "비동기식 — 질의응답 방식",
        "d": "<b>질의응답(Challenge-Response) 방식</b> — 서버가 <b>매번 다른 난수(Challenge)</b>를 보내면, 사용자가 그 값을 토큰에 <b>입력</b>해 나온 결과(Response)를 답한다.<ul class='klist'><li>장점: 시간·카운터 동기화가 필요 없고 <b>보안이 가장 강함</b></li><li>단점: 사용자가 <b>질의 값을 직접 입력</b>해야 해 <b>번거롭다</b></li><li><b>S/KEY</b> — 해시를 <b>여러 번 연쇄 적용</b>해 만든 패스워드 목록을 <b>역순으로</b> 하나씩 쓰는 초기 OTP 방식(사전 등록형)</li></ul><p class='on-key'><span class='lbl'>형태</span>하드웨어 토큰·카드형 · <b>휴대폰 앱(소프트 OTP)</b> · SMS. 단 <b>SMS는 심 스와핑·중간 탈취에 취약</b>해 권장도가 낮다.</p>"
      }
    ],
    "finalLiner": "OTP=일회용 비밀번호로 <b>재전송·스니핑 무력화</b>, 소유 기반 2차 인증 / <b>동기식 = 시간 동기화(TOTP, 60초마다) · 이벤트(계수) 동기화(HOTP, 버튼 누를 때)</b> / <b>비동기식 = 질의응답(Challenge-Response), 가장 안전하지만 불편</b> / <b>S/KEY=해시 연쇄를 역순 사용</b>",
    "related": ["ssl", "set"]
  },
  {
    "id": "edoc",
    "term": "전자문서 · EDI · ebXML",
    "en": "Electronic Document / EDI / ebXML",
    "cat": "애플리케이션 보안",
    "tags": ["전자문서 요건", "공인전자문서센터", "EDI=정형 전자문서 교환", "ebXML 4대 구성요소", "CPP/CPA"],
    "oneLiner": "전자문서=전자적 형태로 작성·송수신·저장된 문서로 법적 효력을 인정받는다 / EDI는 정형 서식의 기업 간 문서 교환, ebXML은 이를 XML 기반으로 표준화한 전자상거래 프레임워크",
    "blocks": [
      {
        "k": "def",
        "title": "전자문서 — 정의와 요건",
        "d": "<b>전자문서</b> — 정보처리시스템에 의해 <b>전자적 형태로 작성·변환되거나 송수신·저장된 정보</b>. 「전자문서 및 전자거래 기본법」에 따라 <b>전자적 형태라는 이유만으로 효력을 부인당하지 않는다</b>.<ul class='klist'><li><b>내용 열람 가능</b> · <b>형태 그대로 재현 가능</b>하면 서면으로 인정</li><li><b>작성자·수신자·송수신 시기</b>가 확인돼야 한다</li><li><b>공인전자문서센터(공인전자문서중계자)</b> — 전자문서를 안전하게 보관·유통해 주는 제3의 신뢰기관</li><li>보안 요소: <b>전자서명(위·변조 방지, 부인방지)</b> + <b>타임스탬프(작성 시점 증명)</b></li></ul>"
      },
      {
        "k": "note",
        "title": "EDI (전자문서교환)",
        "d": "<b>EDI(Electronic Data Interchange)</b> — 주문서·송장 같은 <b>정형화된 서식</b>을 기업 간에 <b>표준 전자 형식</b>으로 자동 교환하는 방식.<ul class='klist'><li>사람이 다시 입력할 필요가 없어 오류·시간을 줄인다</li><li>표준: <b>UN/EDIFACT</b>(국제), ANSI X.12(미국)</li><li>한계: <b>전용망(VAN)</b> 기반이라 비용이 크고 <b>중소기업이 참여하기 어렵다</b> → 그 대안이 <b>ebXML</b></li></ul>"
      },
      {
        "k": "note",
        "title": "ebXML — 4대 구성요소 (출제 포인트)",
        "d": "<b>ebXML(electronic business XML)</b> — <b>UN/CEFACT와 OASIS</b>가 만든, <b>XML 기반의 개방형 전자상거래 표준 프레임워크</b>. 인터넷 위에서 누구나 참여 가능하게 하는 것이 목표.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>① 비즈니스 프로세스 (BP)</span><div class='row'>거래 절차·주고받는 문서의 <b>순서를 정의</b></div></div><div class='cmp-item'><span class='cmp-label'>② 핵심 컴포넌트 (Core Components)</span><div class='row'>거래에 쓰이는 <b>데이터 항목을 재사용 가능한 단위</b>로 표준화</div></div><div class='cmp-item'><span class='cmp-label'>③ 등록저장소 (Registry / Repository)</span><div class='row'>위 정의와 <b>기업 프로파일을 등록·검색</b>하는 곳. 상대를 찾는 <b>노란 전화번호부</b> 역할</div></div><div class='cmp-item'><span class='cmp-label'>④ 거래 당사자 (CPP / CPA)</span><div class='row'><b>CPP(Collaboration Protocol Profile)</b>=우리 회사가 <b>할 수 있는</b> 거래 능력 명세<br><b>CPA(Collaboration Protocol Agreement)</b>=두 회사의 CPP를 맞춰 만든 <b>합의서(계약)</b></div></div><div class='cmp-item'><span class='cmp-label'>+ 전송·교환·패키징 (ebMS)</span><div class='row'>실제 메시지를 <b>SOAP 기반</b>으로 안전하게 전달</div></div></div><p class='on-key'><span class='lbl'>CPP vs CPA</span><b>P=Profile=혼자서 낸 이력서</b>, <b>A=Agreement=둘이 맺은 계약서</b>로 구분한다.</p>"
      }
    ],
    "finalLiner": "전자문서=전자적 형태여도 <b>효력 인정</b>(열람·재현 가능, 작성자·시기 확인), 보관은 <b>공인전자문서센터</b>, 보호는 <b>전자서명+타임스탬프</b> / <b>EDI=정형 서식 교환(EDIFACT), 전용망이라 비쌈</b> / <b>ebXML=XML 기반 개방형</b>, 4요소 <b>비즈니스 프로세스·핵심 컴포넌트·등록저장소·CPP(프로파일)/CPA(합의서)</b>",
    "related": ["websvc", "set"]
  },
  {
    "id": "websvc",
    "term": "웹 서비스(SOAP·WSDL·UDDI)와 XML 보안",
    "en": "Web Services / XML Security",
    "cat": "애플리케이션 보안",
    "tags": ["SOAP=메시지", "WSDL=설명서", "UDDI=등록소", "XML 서명·XML 암호화", "XKMS·SAML·XACML"],
    "oneLiner": "웹 서비스 3요소=SOAP(주고받는 메시지)·WSDL(서비스 사용설명서)·UDDI(찾는 등록소) / XML 보안은 XML 서명·XML 암호화가 기본이고, 키는 XKMS·인증정보는 SAML·접근권한은 XACML이 맡는다",
    "blocks": [
      {
        "k": "def",
        "title": "XML이란",
        "d": "<b>XML(eXtensible Markup Language)</b> — 데이터의 <b>구조와 의미를 태그로 표현</b>하는 확장 가능한 마크업 언어. HTML이 \"보여주기\"용이라면 XML은 <b>\"데이터를 주고받기\"</b>용이며, 태그를 <b>사용자가 직접 정의</b>한다.<ul class='klist'><li>플랫폼·언어에 <b>독립적</b>이라 이기종 시스템 간 데이터 교환 표준으로 쓰인다(ebXML·SOAP의 토대)</li><li>구조 정의: <b>DTD</b> 또는 <b>XML Schema(XSD)</b></li><li>취약점: <b>XXE(XML External Entity)</b> — 외부 엔티티 참조를 악용해 <b>서버 내부 파일 유출·SSRF</b>. 대응은 <b>외부 엔티티 처리 비활성화</b></li></ul>"
      },
      {
        "k": "note",
        "title": "웹 서비스 3요소 (역할 짝짓기로 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>SOAP (Simple Object Access Protocol)</span><div class='row'><b>주고받는 메시지의 형식</b>. XML로 된 봉투(Envelope=Header+Body)를 <b>HTTP 등에 실어</b> 전송. <b>\"어떻게 말할까\"</b></div></div><div class='cmp-item'><span class='cmp-label'>WSDL (Web Services Description Language)</span><div class='row'>서비스가 <b>어떤 기능·매개변수·주소를 갖는지</b> XML로 기술한 <b>사용설명서</b>. <b>\"무엇을 어떻게 부를까\"</b></div></div><div class='cmp-item'><span class='cmp-label'>UDDI (Universal Description, Discovery and Integration)</span><div class='row'>서비스를 <b>등록하고 검색</b>하는 <b>전화번호부(등록소)</b>. <b>\"어디에 있을까\"</b></div></div></div><div class='evo'><div class='evo-step'><span class='es-name'>① 등록</span><span class='es-note'>제공자가 UDDI에 서비스와 WSDL 위치를 등록</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 검색</span><span class='es-note'>이용자가 UDDI에서 찾아 WSDL을 받음</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 호출</span><span class='es-note'>WSDL대로 SOAP 메시지를 만들어 서비스를 호출</span></div></div>"
      },
      {
        "k": "safe",
        "title": "XML 보안 기술 (역할 구분이 핵심)",
        "d": "<ul class='klist'><li><b>XML 서명(XML Signature)</b> — XML 문서 <b>전체 또는 일부(요소 단위)</b>에 전자서명. <b>무결성·인증·부인방지</b></li><li><b>XML 암호화(XML Encryption)</b> — 문서 <b>일부 요소만 골라</b> 암호화 가능. <b>기밀성</b></li><li><b>XKMS(XML Key Management Specification)</b> — <b>공개키의 등록·검증·폐기</b>를 웹 서비스로 처리(PKI를 쉽게 쓰게 해 주는 <b>키 관리</b>)</li><li><b>SAML(Security Assertion Markup Language)</b> — <b>인증·인가 정보를 주고받는</b> 표준. <b>SSO(Single Sign-On)의 핵심</b>. \"이 사람은 로그인된 사람이다\"라는 <b>보증서(Assertion)</b>를 전달</li><li><b>XACML(eXtensible Access Control Markup Language)</b> — <b>접근통제 정책</b>을 기술하는 언어. \"누가 무엇에 접근 가능한가\"의 <b>규칙</b></li></ul><p class='on-key'><span class='lbl'>3형제 구분</span><b>XKMS=키</b>, <b>SAML=인증정보(누구인가·SSO)</b>, <b>XACML=권한 정책(무엇을 할 수 있나)</b>. 바꿔 내는 문제가 많다.</p>"
      }
    ],
    "finalLiner": "XML=태그를 직접 정의하는 데이터 교환 표준(취약점 <b>XXE</b>) / 웹 서비스 <b>SOAP=메시지(봉투) · WSDL=설명서 · UDDI=등록·검색 전화번호부</b> / XML 보안 <b>XML 서명(무결성·부인방지) · XML 암호화(기밀성, 일부 요소만 가능) · XKMS(키 관리) · SAML(인증정보·SSO) · XACML(접근통제 정책)</b>",
    "related": ["edoc", "ssl", "oauth"]
  }
]);
