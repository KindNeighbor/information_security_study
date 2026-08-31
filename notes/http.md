# 네트워크 활용(TCP/IP) — HTTP

> 자동 생성 — 원본은 `cards/http.js`. 직접 수정 금지.

## HTTP 개요 · 버전 — HyperText Transfer Protocol

`네트워크 보안`  `요청-응답` `비연결성·무상태` `1.0 비지속 → 1.1 지속` `1.1 Host 필수` `2 멀티플렉싱 · 3 QUIC`

**한줄:** 웹 문서를 주고받는 응용 계층 프로토콜(80) / 요청-응답·비연결성·무상태 / 1.0=요청마다 연결, 1.1=지속 연결·Host 필수

**정의 · 3대 특징**

**HTTP(HyperText Transfer Protocol)** — 웹에서 하이퍼텍스트(HTML)를 주고받는 **응용 계층** 프로토콜. 기본 포트 **80**(HTTPS는 **443**), 전송은 **TCP** 사용.
- **요청-응답(Request-Response)** — 클라이언트가 요청해야 서버가 답한다(서버가 먼저 못 보냄)
- **비연결성(Connectionless)** — 응답을 주면 **연결을 끊는다**(자원 절약)
- **무상태(Stateless)** — **이전 요청을 기억하지 않는다** → 로그인 상태 유지가 안 됨 → 그래서 **쿠키·세션**이 필요해졌다

**버전별 차이 (핵심은 '연결을 어떻게 쓰나')**

- **0.9** — **GET만** 존재. 헤더·상태코드 없음.

- **1.0** — **헤더·상태코드** 도입. **비지속 연결** — 요청 1건마다 TCP 연결·해제 반복(비효율).

- **1.1** — **지속 연결(Keep-Alive) 기본**, 파이프라이닝, **Host 헤더 필수**, 청크 전송.

- **2** — **바이너리** 프레이밍, **멀티플렉싱**(한 연결로 동시 처리), 헤더 압축.

- **3** — **QUIC** 기반 = **UDP** 위에서 동작. 연결 수립이 빠름.

**시험 포인트 · 함정**

**1.0 vs 1.1의 차이**가 가장 많이 나온다 → **비지속 vs 지속 연결**.**[1.1에서 Host 헤더가 필수가 된 이유]** IP 하나에 **여러 도메인**을 올리는 **가상 호스팅**이 가능해지려면, 서버가 **어느 사이트를 요청했는지** 알아야 한다. 그 정보를 담는 게 `Host` 헤더다.
**함정**: HTTP/3이 **UDP(QUIC)** 기반이라는 점('HTTP는 무조건 TCP'로 착각하기 쉬움).

**보안 관점**

HTTP는 **평문 전송**이라 도청·변조에 취약 → **HTTPS(HTTP over TLS, 443)**로 암호화한다. 무상태라서 인증 상태를 **쿠키·세션**에 의존하는데, 그래서 **세션 하이재킹·쿠키 탈취**가 웹 공격의 핵심이 된다.

> **시험 한줄정리:** HTTP=웹 문서 전송(80, TCP) / **요청-응답·비연결성·무상태**(→쿠키·세션 필요) / **1.0 비지속 → 1.1 지속 연결·Host 필수** → 2 멀티플렉싱 → **3 QUIC(UDP)** / 평문이라 HTTPS(443)로 보완

_관련 개념: httpsession · httpmsg · cookiesession_

---

## HTTP 세션 연결 과정 — HTTP Connection Process

`네트워크 보안`  `DNS→TCP 3-way→요청→응답` `비지속 vs 지속` `Keep-Alive` `HTTPS는 TLS 추가` `4-way 종료`

**한줄:** DNS 조회 → TCP 3-way handshake → HTTP 요청 → 응답 → 연결 종료(4-way) / 1.0은 매 요청마다 반복, 1.1은 연결 유지

**한 페이지를 여는 전체 흐름**

- **① DNS 조회** — 도메인 이름을 **IP 주소**로 변환
- **② TCP 3-way handshake** — **SYN → SYN+ACK → ACK**로 연결 수립
- **②-1 (HTTPS면) TLS handshake** — 인증서 검증·**대칭키 교환** 후 암호화 채널 생성
- **③ HTTP 요청** — 요청줄+헤더 전송(예: `GET /index.html HTTP/1.1`)
- **④ HTTP 응답** — 상태줄+헤더+본문(HTML) 수신
- **⑤ 연결 종료** — **FIN → ACK → FIN → ACK**(4-way handshake)
HTML 안에 이미지·CSS·JS가 있으면 그만큼 **요청이 추가로** 발생한다.

**비지속 연결 vs 지속 연결 (핵심 비교)**

- **비지속 (HTTP/1.0)**: **요청 1건 = 연결 1회**. 이미지가 10개면 **TCP 연결·해제를 11번** 반복 → 3-way handshake 비용이 계속 발생해 **느리고 서버 부하가 크다**.

- **지속 (HTTP/1.1, Keep-Alive)**: 한 번 맺은 연결로 **여러 요청·응답을 연달아** 처리 → 연결 비용 절감. 헤더 `Connection: keep-alive`. 1.1은 **기본값**이라 끊으려면 `Connection: close`.

**보안 연결**

연결을 오래 유지하면 편하지만, **유휴 연결을 방치**하면 자원이 묶인다 → **Keep-Alive 타임아웃** 설정이 필요. 연결 수립 단계를 악용하는 것이 **SYN 플러딩**(3-way의 마지막 ACK를 안 보내 대기 자원 고갈)이고, 응용 계층에서 연결을 느리게 유지해 고갈시키는 것이 **Slowloris** 공격이다.

> **시험 한줄정리:** **DNS → TCP 3-way(SYN·SYN+ACK·ACK) → (HTTPS면 TLS) → 요청 → 응답 → 4-way 종료** / **1.0=요청마다 연결(비지속)**, **1.1=Keep-Alive로 연결 재사용(지속)** / 연결 고갈 공격=SYN 플러딩·Slowloris

_관련 개념: http · tcpudp · httpmsg_

---

## HTTP 프로토콜 구조 (메시지 형식) — HTTP Message Structure

`네트워크 보안`  `시작줄·헤더·빈줄·바디` `요청줄=메서드 URI 버전` `상태줄=버전 코드 사유` `CRLF 빈 줄로 구분` `텍스트 기반`

**한줄:** 요청·응답 모두 [시작줄 → 헤더 → 빈 줄(CRLF) → 바디] 4부분 / 요청줄=메서드+URI+버전, 상태줄=버전+상태코드+사유

**공통 구조 4부분**

HTTP 메시지는 **텍스트 기반**이며 요청·응답 모두 같은 뼈대를 갖는다.
- **① 시작줄** — 요청이면 **요청줄**, 응답이면 **상태줄**
- **② 헤더** — `이름: 값` 형식으로 여러 줄
- **③ 빈 줄(CRLF)** — **헤더의 끝을 알리는 구분자**(반드시 존재)
- **④ 바디(본문)** — 실제 데이터(없을 수도 있음)
**헤더와 바디는 '빈 줄' 하나로 구분된다**는 게 시험 포인트.

**요청 메시지 예**

```
GET /index.html HTTP/1.1     ← 요청줄: 메서드 + URI + 버전
Host: www.example.com        ← 헤더
User-Agent: Mozilla/5.0
Accept: text/html
                             ← 빈 줄(CRLF)
(바디: GET은 보통 없음)
```

**응답 메시지 예**

```
HTTP/1.1 200 OK              ← 상태줄: 버전 + 상태코드 + 사유구
Server: Apache               ← 헤더
Content-Type: text/html
Content-Length: 1234
                             ← 빈 줄(CRLF)
<html> ... </html>           ← 바디
```

**보안 — 구조를 악용하는 공격**

메시지 구조가 **줄바꿈(CRLF)으로 구분**되기 때문에, 입력값에 **CRLF를 주입**하면 **헤더를 위조하거나 응답을 쪼갤** 수 있다 → **CRLF 인젝션 · HTTP 응답 분할(Response Splitting)**. 대응은 입력값의 **개행 문자 검증·제거**.

> **시험 한줄정리:** HTTP 메시지 = **시작줄 → 헤더 → 빈 줄(CRLF) → 바디** / 요청줄=**메서드+URI+버전**(`GET /a HTTP/1.1`), 상태줄=**버전+상태코드+사유**(`HTTP/1.1 200 OK`) / 개행 주입 시 **CRLF 인젝션·응답 분할**

_관련 개념: httpmethod · httpheader · http_

---

## HTTP 요청 방식 (메서드) — HTTP Request Methods

`네트워크 보안`  `GET=URL 노출` `POST=바디` `PUT·DELETE 위험` `TRACE→XST` `OPTIONS로 메서드 조회`

**한줄:** GET(조회·URL에 노출)·POST(바디 전송)가 기본 / PUT·DELETE·TRACE 등 불필요 메서드는 차단해야 함

**주요 메서드**

- **GET** — 자원 **조회**. 파라미터가 **URL 쿼리스트링에 노출**되고 길이 제한이 있으며 **캐시·로그·북마크에 남는다**
- **POST** — 데이터를 **바디에 담아** 전송. 길이 제한이 사실상 없음
- **HEAD** — GET과 같지만 **헤더만** 받음(바디 없음). 존재·크기 확인용
- **PUT** — 자원 **생성·전체 수정**(업로드) / **PATCH** — 부분 수정
- **DELETE** — 자원 **삭제**
- **OPTIONS** — 서버가 **지원하는 메서드 조회**
- **TRACE** — 요청을 **그대로 되돌려줌**(경로 추적용)
- **CONNECT** — 프록시 **터널** 생성

**GET vs POST — 보안 차이**

- **GET**: `/login?id=kim&pw=1234`처럼 **URL에 그대로 보인다** → **브라우저 기록·서버 로그·Referer**에 남는다. **비밀번호 등 민감정보에 부적합**.

- **POST**: 바디에 담기므로 URL에는 안 보인다. 다만 **암호화는 아니다** — 평문 HTTP면 **패킷을 보면 그대로 노출**된다. **안전하려면 HTTPS 필수**.

**함정**: 'POST면 안전하다'는 **틀린 말**. 노출 위치만 다를 뿐 암호화가 아니다.

**위험 메서드 · XST**

**PUT·DELETE**가 열려 있으면 공격자가 **웹셸 업로드·파일 삭제**를 할 수 있다. **OPTIONS**는 어떤 메서드가 열렸는지 **정찰**에 이용된다.**[TRACE와 XST]** **TRACE**는 요청을 그대로 돌려주므로, **XST(Cross-Site Tracing)** 공격에서 **HttpOnly로 보호된 쿠키까지 탈취**하는 데 악용될 수 있다 → **TRACE는 반드시 비활성화**.
**대응**: 웹 서버에서 **GET·POST 외 불필요 메서드 차단**(허용 목록 방식).

> **시험 한줄정리:** **GET**=조회·**URL에 노출**(민감정보 금지) vs **POST**=바디 전송(**암호화 아님**, HTTPS 필요) / HEAD·PUT·DELETE·OPTIONS·**TRACE(→XST)**·CONNECT / 대응=**불필요 메서드 차단**

_관련 개념: httpmsg · httpheader · cookiesession_

---

## HTTP 헤더 (요청 · 응답) · 상태 코드 — HTTP Headers & Status Codes

`네트워크 보안`  `Host·Referer·Cookie` `Set-Cookie·Location` `2xx·3xx·4xx·5xx` `401 인증 vs 403 권한` `보안 헤더 CSP·HSTS`

**한줄:** 요청 헤더=Host·User-Agent·Cookie·Referer / 응답 헤더=Server·Set-Cookie·Location·Content-Type / 상태코드 2xx성공·3xx이동·4xx클라이언트·5xx서버

**요청 헤더 (클라이언트 → 서버)**

- **Host** — 접속할 **도메인**. **HTTP/1.1 필수**(가상 호스팅)
- **User-Agent** — 브라우저·OS 정보
- **Accept / Accept-Language / Accept-Encoding** — 받을 수 있는 형식·언어·압축
- **Cookie** — 서버가 준 쿠키를 **되돌려 보냄**
- **Referer** — **어느 페이지에서 넘어왔는지**(표준 철자가 오타로 굳어짐). **CSRF 방어에 참고**하지만 위조 가능
- **Authorization** — 인증 정보 · **Content-Type / Content-Length** — 바디 형식·길이
- **Connection** — `keep-alive`/`close`

**응답 헤더 (서버 → 클라이언트)**

- **Server** — 웹 서버 종류·버전 → **정보 노출이라 숨기는 게 좋다**
- **Set-Cookie** — 클라이언트에 **쿠키 발급**(보안 옵션을 여기서 지정)
- **Location** — **리다이렉트** 목적지(3xx와 함께)
- **Content-Type / Content-Length** — 본문 형식(MIME)·길이
- **Cache-Control** — 캐시 정책(민감 페이지는 `no-store`)
- **WWW-Authenticate** — 401과 함께 인증 방식 안내

**상태 코드 (첫 자리로 분류)**

- **1xx** 정보 · **2xx 성공** — **200 OK**, 201 Created, 204 No Content
- **3xx 리다이렉션** — **301** 영구 이동, **302** 임시 이동, **304** Not Modified(캐시 사용)
- **4xx 클라이언트 오류** — 400 Bad Request, **401 Unauthorized**(**인증 필요**), **403 Forbidden**(**인증했지만 권한 없음**), **404** Not Found, 405 Method Not Allowed
- **5xx 서버 오류** — **500** Internal Server Error, 502 Bad Gateway, **503** Service Unavailable
**401 vs 403 구분**이 단골이다: **401=너 누구냐(인증), 403=누군지 알지만 안 된다(인가)**.

**보안 헤더 (응답에 붙여 방어)**

- **Content-Security-Policy(CSP)** — 실행 가능한 스크립트 출처 제한 → **XSS 완화**
- **Strict-Transport-Security(HSTS)** — 이후 접속을 **HTTPS로 강제** → 다운그레이드 방지
- **X-Frame-Options** — 프레임 삽입 금지 → **클릭재킹 방어**
- **X-Content-Type-Options: nosniff** — MIME 스니핑 차단
반대로 **Server·X-Powered-By**처럼 버전을 알려주는 헤더는 **제거**한다.

> **시험 한줄정리:** 요청=**Host(1.1 필수)·Cookie·Referer·User-Agent** / 응답=**Set-Cookie·Location·Server·Content-Type** / 상태 **2xx성공·3xx이동(301영구·302임시·304캐시)·4xx클라(401인증·403인가·404없음)·5xx서버(500·503)** / 보안헤더 **CSP·HSTS·X-Frame-Options·nosniff**

_관련 개념: httpmsg · cookiesession · httpmethod_

---

## 쿠키와 세션 · 쿠키 보안 옵션 — Cookie & Session

`네트워크 보안`  `무상태 보완` `쿠키=클라이언트 저장` `세션=서버 저장` `Secure·HttpOnly·SameSite` `세션 하이재킹`

**한줄:** HTTP 무상태를 보완하는 상태 유지 수단 / 쿠키=브라우저 저장(위변조 쉬움), 세션=서버 저장(세션ID만 쿠키로) / 옵션 Secure·HttpOnly·SameSite

**왜 필요한가**

HTTP는 **무상태(Stateless)**라 이전 요청을 기억하지 못한다. 그러면 **로그인 상태를 유지할 수 없다**. 그래서 상태를 따로 들고 다니는 장치가 **쿠키**와 **세션**이다.

**쿠키 vs 세션 (비교)**

- **쿠키 (Cookie)**: 저장 위치 = **클라이언트(브라우저)**. 서버가 `Set-Cookie`로 발급하면 이후 요청마다 `Cookie` 헤더로 **자동 전송**. 용량 제한(약 4KB). **사용자가 열어보고 위·변조할 수 있어** 민감정보를 담으면 안 된다.

- **세션 (Session)**: 실제 데이터는 **서버에 저장**하고, 클라이언트에는 **세션 ID만** 쿠키로 준다. **상대적으로 안전**하지만 **서버 자원을 소모**한다. 세션 ID가 털리면 **그대로 로그인된 것과 같다**.

**쿠키 보안 옵션 (Set-Cookie에 지정)**

- **Secure** — **HTTPS 연결에서만** 전송 → 평문 구간 도청 방지
- **HttpOnly** — **자바스크립트에서 접근 불가**(`document.cookie` 차단) → **XSS로 쿠키 탈취 방어**
- **SameSite** — 다른 사이트에서 온 요청에 쿠키를 붙일지 제한(**Strict / Lax / None**) → **CSRF 방어**
- **Domain · Path** — 쿠키가 전송될 **범위** 제한(넓게 잡지 말 것)
- **Expires · Max-Age** — 만료 시각. 지정하지 않으면 **세션 쿠키**(브라우저 종료 시 삭제)
**Secure=도청 방어 · HttpOnly=XSS 방어 · SameSite=CSRF 방어** — 이 대응 관계가 시험에 나온다.

**관련 공격**

- **세션 하이재킹** — 세션 ID를 **훔쳐** 그 사용자로 행세(스니핑·XSS로 탈취)
- **세션 고정(Session Fixation)** — 공격자가 **미리 정한 세션 ID**를 피해자가 쓰게 만든 뒤 그대로 사용 → 대응은 **로그인 성공 시 세션 ID 재발급**
- **XSS**로 `document.cookie` 탈취 → **HttpOnly**로 방어
- **CSRF** — 쿠키가 **자동 전송**되는 성질을 악용 → **SameSite·CSRF 토큰**으로 방어
그 밖에 **세션 타임아웃** 설정, **충분히 긴 난수** 세션 ID 사용이 기본이다.

> **시험 한줄정리:** 무상태 보완: **쿠키=브라우저 저장(위변조 가능)** vs **세션=서버 저장·세션ID만 전달** / 옵션 **Secure(도청)·HttpOnly(XSS)·SameSite(CSRF)**·Domain/Path/Expires / 공격=**세션 하이재킹·세션 고정**(대응: 로그인 시 **세션ID 재발급**)

_관련 개념: httpheader · http · oauth_

---

