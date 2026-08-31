/* 네트워크 활용(TCP/IP) — 응용 계층: HTTP 계열 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "http",
    "term": "HTTP 개요 · 버전",
    "en": "HyperText Transfer Protocol",
    "cat": "네트워크 보안",
    "tags": ["요청-응답", "비연결성·무상태", "1.0 비지속 → 1.1 지속", "1.1 Host 필수", "2 멀티플렉싱 · 3 QUIC"],
    "oneLiner": "웹 문서를 주고받는 응용 계층 프로토콜(80) / 요청-응답·비연결성·무상태 / 1.0=요청마다 연결, 1.1=지속 연결·Host 필수",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 3대 특징",
        "d": "<b>HTTP(HyperText Transfer Protocol)</b> — 웹에서 하이퍼텍스트(HTML)를 주고받는 <b>응용 계층</b> 프로토콜. 기본 포트 <b>80</b>(HTTPS는 <b>443</b>), 전송은 <b>TCP</b> 사용.<ul class='klist'><li><b>요청-응답(Request-Response)</b> — 클라이언트가 요청해야 서버가 답한다(서버가 먼저 못 보냄)</li><li><b>비연결성(Connectionless)</b> — 응답을 주면 <b>연결을 끊는다</b>(자원 절약)</li><li><b>무상태(Stateless)</b> — <b>이전 요청을 기억하지 않는다</b> → 로그인 상태 유지가 안 됨 → 그래서 <b>쿠키·세션</b>이 필요해졌다</li></ul>"
      },
      {
        "k": "note",
        "title": "버전별 차이 (핵심은 '연결을 어떻게 쓰나')",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>0.9</div><div class='es-note'><b>GET만</b> 존재. 헤더·상태코드 없음.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>1.0</div><div class='es-note'><b>헤더·상태코드</b> 도입. <b>비지속 연결</b> — 요청 1건마다 TCP 연결·해제 반복(비효율).</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>1.1</div><div class='es-note'><b>지속 연결(Keep-Alive) 기본</b>, 파이프라이닝, <b>Host 헤더 필수</b>, 청크 전송.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2</div><div class='es-note'><b>바이너리</b> 프레이밍, <b>멀티플렉싱</b>(한 연결로 동시 처리), 헤더 압축.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3</div><div class='es-note'><b>QUIC</b> 기반 = <b>UDP</b> 위에서 동작. 연결 수립이 빠름.</div></div></div>"
      },
      {
        "k": "warn",
        "title": "시험 포인트 · 함정",
        "d": "<b>1.0 vs 1.1의 차이</b>가 가장 많이 나온다 → <b>비지속 vs 지속 연결</b>.<p class='on-key'><span class='lbl'>1.1에서 Host 헤더가 필수가 된 이유</span>IP 하나에 <b>여러 도메인</b>을 올리는 <b>가상 호스팅</b>이 가능해지려면, 서버가 <b>어느 사이트를 요청했는지</b> 알아야 한다. 그 정보를 담는 게 <code>Host</code> 헤더다.</p><b>함정</b>: HTTP/3이 <b>UDP(QUIC)</b> 기반이라는 점('HTTP는 무조건 TCP'로 착각하기 쉬움)."
      },
      {
        "k": "safe",
        "title": "보안 관점",
        "d": "HTTP는 <b>평문 전송</b>이라 도청·변조에 취약 → <b>HTTPS(HTTP over TLS, 443)</b>로 암호화한다. 무상태라서 인증 상태를 <b>쿠키·세션</b>에 의존하는데, 그래서 <b>세션 하이재킹·쿠키 탈취</b>가 웹 공격의 핵심이 된다."
      }
    ],
    "finalLiner": "HTTP=웹 문서 전송(80, TCP) / <b>요청-응답·비연결성·무상태</b>(→쿠키·세션 필요) / <b>1.0 비지속 → 1.1 지속 연결·Host 필수</b> → 2 멀티플렉싱 → <b>3 QUIC(UDP)</b> / 평문이라 HTTPS(443)로 보완",
    "related": ["httpsession", "httpmsg", "cookiesession"]
  },
  {
    "id": "httpsession",
    "term": "HTTP 세션 연결 과정",
    "en": "HTTP Connection Process",
    "cat": "네트워크 보안",
    "tags": ["DNS→TCP 3-way→요청→응답", "비지속 vs 지속", "Keep-Alive", "HTTPS는 TLS 추가", "4-way 종료"],
    "oneLiner": "DNS 조회 → TCP 3-way handshake → HTTP 요청 → 응답 → 연결 종료(4-way) / 1.0은 매 요청마다 반복, 1.1은 연결 유지",
    "blocks": [
      {
        "k": "note",
        "title": "한 페이지를 여는 전체 흐름",
        "d": "<ul class='klist'><li><b>① DNS 조회</b> — 도메인 이름을 <b>IP 주소</b>로 변환</li><li><b>② TCP 3-way handshake</b> — <b>SYN → SYN+ACK → ACK</b>로 연결 수립</li><li><b>②-1 (HTTPS면) TLS handshake</b> — 인증서 검증·<b>대칭키 교환</b> 후 암호화 채널 생성</li><li><b>③ HTTP 요청</b> — 요청줄+헤더 전송(예: <code>GET /index.html HTTP/1.1</code>)</li><li><b>④ HTTP 응답</b> — 상태줄+헤더+본문(HTML) 수신</li><li><b>⑤ 연결 종료</b> — <b>FIN → ACK → FIN → ACK</b>(4-way handshake)</li></ul>HTML 안에 이미지·CSS·JS가 있으면 그만큼 <b>요청이 추가로</b> 발생한다."
      },
      {
        "k": "warn",
        "title": "비지속 연결 vs 지속 연결 (핵심 비교)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>비지속 (HTTP/1.0)</span><div class='row'><b>요청 1건 = 연결 1회</b>. 이미지가 10개면 <b>TCP 연결·해제를 11번</b> 반복 → 3-way handshake 비용이 계속 발생해 <b>느리고 서버 부하가 크다</b>.</div></div><div class='cmp-item'><span class='cmp-label'>지속 (HTTP/1.1, Keep-Alive)</span><div class='row'>한 번 맺은 연결로 <b>여러 요청·응답을 연달아</b> 처리 → 연결 비용 절감. 헤더 <code>Connection: keep-alive</code>. 1.1은 <b>기본값</b>이라 끊으려면 <code>Connection: close</code>.</div></div></div>"
      },
      {
        "k": "safe",
        "title": "보안 연결",
        "d": "연결을 오래 유지하면 편하지만, <b>유휴 연결을 방치</b>하면 자원이 묶인다 → <b>Keep-Alive 타임아웃</b> 설정이 필요. 연결 수립 단계를 악용하는 것이 <b>SYN 플러딩</b>(3-way의 마지막 ACK를 안 보내 대기 자원 고갈)이고, 응용 계층에서 연결을 느리게 유지해 고갈시키는 것이 <b>Slowloris</b> 공격이다."
      }
    ],
    "finalLiner": "<b>DNS → TCP 3-way(SYN·SYN+ACK·ACK) → (HTTPS면 TLS) → 요청 → 응답 → 4-way 종료</b> / <b>1.0=요청마다 연결(비지속)</b>, <b>1.1=Keep-Alive로 연결 재사용(지속)</b> / 연결 고갈 공격=SYN 플러딩·Slowloris",
    "related": ["http", "tcpudp", "httpmsg"]
  },
  {
    "id": "httpmsg",
    "term": "HTTP 프로토콜 구조 (메시지 형식)",
    "en": "HTTP Message Structure",
    "cat": "네트워크 보안",
    "tags": ["시작줄·헤더·빈줄·바디", "요청줄=메서드 URI 버전", "상태줄=버전 코드 사유", "CRLF 빈 줄로 구분", "텍스트 기반"],
    "oneLiner": "요청·응답 모두 [시작줄 → 헤더 → 빈 줄(CRLF) → 바디] 4부분 / 요청줄=메서드+URI+버전, 상태줄=버전+상태코드+사유",
    "blocks": [
      {
        "k": "def",
        "title": "공통 구조 4부분",
        "d": "HTTP 메시지는 <b>텍스트 기반</b>이며 요청·응답 모두 같은 뼈대를 갖는다.<ul class='klist'><li><b>① 시작줄</b> — 요청이면 <b>요청줄</b>, 응답이면 <b>상태줄</b></li><li><b>② 헤더</b> — <code>이름: 값</code> 형식으로 여러 줄</li><li><b>③ 빈 줄(CRLF)</b> — <b>헤더의 끝을 알리는 구분자</b>(반드시 존재)</li><li><b>④ 바디(본문)</b> — 실제 데이터(없을 수도 있음)</li></ul><b>헤더와 바디는 '빈 줄' 하나로 구분된다</b>는 게 시험 포인트."
      },
      {
        "k": "note",
        "title": "요청 메시지 예",
        "d": "<pre>GET /index.html HTTP/1.1     ← 요청줄: 메서드 + URI + 버전\nHost: www.example.com        ← 헤더\nUser-Agent: Mozilla/5.0\nAccept: text/html\n                             ← 빈 줄(CRLF)\n(바디: GET은 보통 없음)</pre>"
      },
      {
        "k": "note",
        "title": "응답 메시지 예",
        "d": "<pre>HTTP/1.1 200 OK              ← 상태줄: 버전 + 상태코드 + 사유구\nServer: Apache               ← 헤더\nContent-Type: text/html\nContent-Length: 1234\n                             ← 빈 줄(CRLF)\n&lt;html&gt; ... &lt;/html&gt;           ← 바디</pre>"
      },
      {
        "k": "warn",
        "title": "보안 — 구조를 악용하는 공격",
        "d": "메시지 구조가 <b>줄바꿈(CRLF)으로 구분</b>되기 때문에, 입력값에 <b>CRLF를 주입</b>하면 <b>헤더를 위조하거나 응답을 쪼갤</b> 수 있다 → <b>CRLF 인젝션 · HTTP 응답 분할(Response Splitting)</b>. 대응은 입력값의 <b>개행 문자 검증·제거</b>."
      }
    ],
    "finalLiner": "HTTP 메시지 = <b>시작줄 → 헤더 → 빈 줄(CRLF) → 바디</b> / 요청줄=<b>메서드+URI+버전</b>(<code>GET /a HTTP/1.1</code>), 상태줄=<b>버전+상태코드+사유</b>(<code>HTTP/1.1 200 OK</code>) / 개행 주입 시 <b>CRLF 인젝션·응답 분할</b>",
    "related": ["httpmethod", "httpheader", "http"]
  },
  {
    "id": "httpmethod",
    "term": "HTTP 요청 방식 (메서드)",
    "en": "HTTP Request Methods",
    "cat": "네트워크 보안",
    "tags": ["GET=URL 노출", "POST=바디", "PUT·DELETE 위험", "TRACE→XST", "OPTIONS로 메서드 조회"],
    "oneLiner": "GET(조회·URL에 노출)·POST(바디 전송)가 기본 / PUT·DELETE·TRACE 등 불필요 메서드는 차단해야 함",
    "blocks": [
      {
        "k": "note",
        "title": "주요 메서드",
        "d": "<ul class='klist'><li><b>GET</b> — 자원 <b>조회</b>. 파라미터가 <b>URL 쿼리스트링에 노출</b>되고 길이 제한이 있으며 <b>캐시·로그·북마크에 남는다</b></li><li><b>POST</b> — 데이터를 <b>바디에 담아</b> 전송. 길이 제한이 사실상 없음</li><li><b>HEAD</b> — GET과 같지만 <b>헤더만</b> 받음(바디 없음). 존재·크기 확인용</li><li><b>PUT</b> — 자원 <b>생성·전체 수정</b>(업로드) / <b>PATCH</b> — 부분 수정</li><li><b>DELETE</b> — 자원 <b>삭제</b></li><li><b>OPTIONS</b> — 서버가 <b>지원하는 메서드 조회</b></li><li><b>TRACE</b> — 요청을 <b>그대로 되돌려줌</b>(경로 추적용)</li><li><b>CONNECT</b> — 프록시 <b>터널</b> 생성</li></ul>"
      },
      {
        "k": "warn",
        "title": "GET vs POST — 보안 차이",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>GET</span><div class='row'><code>/login?id=kim&amp;pw=1234</code>처럼 <b>URL에 그대로 보인다</b> → <b>브라우저 기록·서버 로그·Referer</b>에 남는다. <b>비밀번호 등 민감정보에 부적합</b>.</div></div><div class='cmp-item'><span class='cmp-label'>POST</span><div class='row'>바디에 담기므로 URL에는 안 보인다. 다만 <b>암호화는 아니다</b> — 평문 HTTP면 <b>패킷을 보면 그대로 노출</b>된다. <b>안전하려면 HTTPS 필수</b>.</div></div></div><b>함정</b>: 'POST면 안전하다'는 <b>틀린 말</b>. 노출 위치만 다를 뿐 암호화가 아니다."
      },
      {
        "k": "warn",
        "title": "위험 메서드 · XST",
        "d": "<b>PUT·DELETE</b>가 열려 있으면 공격자가 <b>웹셸 업로드·파일 삭제</b>를 할 수 있다. <b>OPTIONS</b>는 어떤 메서드가 열렸는지 <b>정찰</b>에 이용된다.<p class='on-key'><span class='lbl'>TRACE와 XST</span><b>TRACE</b>는 요청을 그대로 돌려주므로, <b>XST(Cross-Site Tracing)</b> 공격에서 <b>HttpOnly로 보호된 쿠키까지 탈취</b>하는 데 악용될 수 있다 → <b>TRACE는 반드시 비활성화</b>.</p><b>대응</b>: 웹 서버에서 <b>GET·POST 외 불필요 메서드 차단</b>(허용 목록 방식)."
      }
    ],
    "finalLiner": "<b>GET</b>=조회·<b>URL에 노출</b>(민감정보 금지) vs <b>POST</b>=바디 전송(<b>암호화 아님</b>, HTTPS 필요) / HEAD·PUT·DELETE·OPTIONS·<b>TRACE(→XST)</b>·CONNECT / 대응=<b>불필요 메서드 차단</b>",
    "related": ["httpmsg", "httpheader", "cookiesession"]
  },
  {
    "id": "httpheader",
    "term": "HTTP 헤더 (요청 · 응답) · 상태 코드",
    "en": "HTTP Headers & Status Codes",
    "cat": "네트워크 보안",
    "tags": ["Host·Referer·Cookie", "Set-Cookie·Location", "2xx·3xx·4xx·5xx", "401 인증 vs 403 권한", "보안 헤더 CSP·HSTS"],
    "oneLiner": "요청 헤더=Host·User-Agent·Cookie·Referer / 응답 헤더=Server·Set-Cookie·Location·Content-Type / 상태코드 2xx성공·3xx이동·4xx클라이언트·5xx서버",
    "blocks": [
      {
        "k": "note",
        "title": "요청 헤더 (클라이언트 → 서버)",
        "d": "<ul class='klist'><li><b>Host</b> — 접속할 <b>도메인</b>. <b>HTTP/1.1 필수</b>(가상 호스팅)</li><li><b>User-Agent</b> — 브라우저·OS 정보</li><li><b>Accept / Accept-Language / Accept-Encoding</b> — 받을 수 있는 형식·언어·압축</li><li><b>Cookie</b> — 서버가 준 쿠키를 <b>되돌려 보냄</b></li><li><b>Referer</b> — <b>어느 페이지에서 넘어왔는지</b>(표준 철자가 오타로 굳어짐). <b>CSRF 방어에 참고</b>하지만 위조 가능</li><li><b>Authorization</b> — 인증 정보 · <b>Content-Type / Content-Length</b> — 바디 형식·길이</li><li><b>Connection</b> — <code>keep-alive</code>/<code>close</code></li></ul>"
      },
      {
        "k": "note",
        "title": "응답 헤더 (서버 → 클라이언트)",
        "d": "<ul class='klist'><li><b>Server</b> — 웹 서버 종류·버전 → <b>정보 노출이라 숨기는 게 좋다</b></li><li><b>Set-Cookie</b> — 클라이언트에 <b>쿠키 발급</b>(보안 옵션을 여기서 지정)</li><li><b>Location</b> — <b>리다이렉트</b> 목적지(3xx와 함께)</li><li><b>Content-Type / Content-Length</b> — 본문 형식(MIME)·길이</li><li><b>Cache-Control</b> — 캐시 정책(민감 페이지는 <code>no-store</code>)</li><li><b>WWW-Authenticate</b> — 401과 함께 인증 방식 안내</li></ul>"
      },
      {
        "k": "note",
        "title": "상태 코드 (첫 자리로 분류)",
        "d": "<ul class='klist'><li><b>1xx</b> 정보 · <b>2xx 성공</b> — <b>200 OK</b>, 201 Created, 204 No Content</li><li><b>3xx 리다이렉션</b> — <b>301</b> 영구 이동, <b>302</b> 임시 이동, <b>304</b> Not Modified(캐시 사용)</li><li><b>4xx 클라이언트 오류</b> — 400 Bad Request, <b>401 Unauthorized</b>(<b>인증 필요</b>), <b>403 Forbidden</b>(<b>인증했지만 권한 없음</b>), <b>404</b> Not Found, 405 Method Not Allowed</li><li><b>5xx 서버 오류</b> — <b>500</b> Internal Server Error, 502 Bad Gateway, <b>503</b> Service Unavailable</li></ul><b>401 vs 403 구분</b>이 단골이다: <b>401=너 누구냐(인증), 403=누군지 알지만 안 된다(인가)</b>."
      },
      {
        "k": "safe",
        "title": "보안 헤더 (응답에 붙여 방어)",
        "d": "<ul class='klist'><li><b>Content-Security-Policy(CSP)</b> — 실행 가능한 스크립트 출처 제한 → <b>XSS 완화</b></li><li><b>Strict-Transport-Security(HSTS)</b> — 이후 접속을 <b>HTTPS로 강제</b> → 다운그레이드 방지</li><li><b>X-Frame-Options</b> — 프레임 삽입 금지 → <b>클릭재킹 방어</b></li><li><b>X-Content-Type-Options: nosniff</b> — MIME 스니핑 차단</li></ul>반대로 <b>Server·X-Powered-By</b>처럼 버전을 알려주는 헤더는 <b>제거</b>한다."
      }
    ],
    "finalLiner": "요청=<b>Host(1.1 필수)·Cookie·Referer·User-Agent</b> / 응답=<b>Set-Cookie·Location·Server·Content-Type</b> / 상태 <b>2xx성공·3xx이동(301영구·302임시·304캐시)·4xx클라(401인증·403인가·404없음)·5xx서버(500·503)</b> / 보안헤더 <b>CSP·HSTS·X-Frame-Options·nosniff</b>",
    "related": ["httpmsg", "cookiesession", "httpmethod"]
  },
  {
    "id": "cookiesession",
    "term": "쿠키와 세션 · 쿠키 보안 옵션",
    "en": "Cookie & Session",
    "cat": "네트워크 보안",
    "tags": ["무상태 보완", "쿠키=클라이언트 저장", "세션=서버 저장", "Secure·HttpOnly·SameSite", "세션 하이재킹"],
    "oneLiner": "HTTP 무상태를 보완하는 상태 유지 수단 / 쿠키=브라우저 저장(위변조 쉬움), 세션=서버 저장(세션ID만 쿠키로) / 옵션 Secure·HttpOnly·SameSite",
    "blocks": [
      {
        "k": "def",
        "title": "왜 필요한가",
        "d": "HTTP는 <b>무상태(Stateless)</b>라 이전 요청을 기억하지 못한다. 그러면 <b>로그인 상태를 유지할 수 없다</b>. 그래서 상태를 따로 들고 다니는 장치가 <b>쿠키</b>와 <b>세션</b>이다."
      },
      {
        "k": "note",
        "title": "쿠키 vs 세션 (비교)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>쿠키 (Cookie)</span><div class='row'>저장 위치 = <b>클라이언트(브라우저)</b>. 서버가 <code>Set-Cookie</code>로 발급하면 이후 요청마다 <code>Cookie</code> 헤더로 <b>자동 전송</b>. 용량 제한(약 4KB). <b>사용자가 열어보고 위·변조할 수 있어</b> 민감정보를 담으면 안 된다.</div></div><div class='cmp-item'><span class='cmp-label'>세션 (Session)</span><div class='row'>실제 데이터는 <b>서버에 저장</b>하고, 클라이언트에는 <b>세션 ID만</b> 쿠키로 준다. <b>상대적으로 안전</b>하지만 <b>서버 자원을 소모</b>한다. 세션 ID가 털리면 <b>그대로 로그인된 것과 같다</b>.</div></div></div>"
      },
      {
        "k": "safe",
        "title": "쿠키 보안 옵션 (Set-Cookie에 지정)",
        "d": "<ul class='klist'><li><b>Secure</b> — <b>HTTPS 연결에서만</b> 전송 → 평문 구간 도청 방지</li><li><b>HttpOnly</b> — <b>자바스크립트에서 접근 불가</b>(<code>document.cookie</code> 차단) → <b>XSS로 쿠키 탈취 방어</b></li><li><b>SameSite</b> — 다른 사이트에서 온 요청에 쿠키를 붙일지 제한(<b>Strict / Lax / None</b>) → <b>CSRF 방어</b></li><li><b>Domain · Path</b> — 쿠키가 전송될 <b>범위</b> 제한(넓게 잡지 말 것)</li><li><b>Expires · Max-Age</b> — 만료 시각. 지정하지 않으면 <b>세션 쿠키</b>(브라우저 종료 시 삭제)</li></ul><b>Secure=도청 방어 · HttpOnly=XSS 방어 · SameSite=CSRF 방어</b> — 이 대응 관계가 시험에 나온다."
      },
      {
        "k": "warn",
        "title": "관련 공격",
        "d": "<ul class='klist'><li><b>세션 하이재킹</b> — 세션 ID를 <b>훔쳐</b> 그 사용자로 행세(스니핑·XSS로 탈취)</li><li><b>세션 고정(Session Fixation)</b> — 공격자가 <b>미리 정한 세션 ID</b>를 피해자가 쓰게 만든 뒤 그대로 사용 → 대응은 <b>로그인 성공 시 세션 ID 재발급</b></li><li><b>XSS</b>로 <code>document.cookie</code> 탈취 → <b>HttpOnly</b>로 방어</li><li><b>CSRF</b> — 쿠키가 <b>자동 전송</b>되는 성질을 악용 → <b>SameSite·CSRF 토큰</b>으로 방어</li></ul>그 밖에 <b>세션 타임아웃</b> 설정, <b>충분히 긴 난수</b> 세션 ID 사용이 기본이다."
      }
    ],
    "finalLiner": "무상태 보완: <b>쿠키=브라우저 저장(위변조 가능)</b> vs <b>세션=서버 저장·세션ID만 전달</b> / 옵션 <b>Secure(도청)·HttpOnly(XSS)·SameSite(CSRF)</b>·Domain/Path/Expires / 공격=<b>세션 하이재킹·세션 고정</b>(대응: 로그인 시 <b>세션ID 재발급</b>)",
    "related": ["httpheader", "http", "oauth"]
  }
]
);
