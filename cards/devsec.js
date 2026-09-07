/* 애플리케이션 보안 — 보안 취약점 및 개발 보안 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "owasp",
    "term": "OWASP Top 10",
    "en": "Open Worldwide Application Security Project",
    "cat": "애플리케이션 보안",
    "tags": ["웹 취약점 10대 목록", "2021 1위=접근통제 취약", "인젝션은 3위로 하락", "설계 결함 신설", "SSRF"],
    "oneLiner": "OWASP=웹 애플리케이션 보안을 연구하는 비영리 단체 / Top 10은 3~4년마다 갱신되는 대표 취약점 목록으로, 2021년판 1위는 취약한 접근통제, 인젝션은 3위로 내려왔다",
    "blocks": [
      {
        "k": "def",
        "title": "OWASP과 Top 10",
        "d": "<b>OWASP(Open Worldwide Application Security Project)</b> — 웹 애플리케이션 보안을 연구·공개하는 <b>비영리 오픈 커뮤니티</b>. 무료로 문서·도구를 배포한다(ZAP, ESAPI 등).<ul class='klist'><li><b>OWASP Top 10</b> — 실제 데이터를 모아 뽑은 <b>가장 위험한 웹 취약점 10가지</b>. <b>3~4년마다 갱신</b>(2013 · 2017 · <b>2021</b>)</li><li>표준이라기보다 <b>인식 제고용 문서</b>지만, 시험·실무 모두에서 사실상 기준으로 쓰인다</li></ul>"
      },
      {
        "k": "warn",
        "title": "OWASP Top 10 (2021) — 순위째로 출제",
        "d": "<ul class='klist'><li><b>A01 취약한 접근통제(Broken Access Control)</b> — <b>1위로 상승</b>. 권한 없이 남의 자원에 접근</li><li><b>A02 암호화 실패(Cryptographic Failures)</b> — 옛 \"민감 데이터 노출\". 평문 전송·약한 알고리즘</li><li><b>A03 인젝션(Injection)</b> — SQL·OS 명령·<b>XSS가 여기로 통합</b>. 1위→<b>3위로 하락</b></li><li><b>A04 안전하지 않은 설계(Insecure Design)</b> — <b>2021 신설</b>. 구현이 아니라 <b>설계 자체의 결함</b></li><li><b>A05 보안 설정 오류(Security Misconfiguration)</b> — 기본 계정·디렉터리 리스팅·불필요 기능</li><li><b>A06 취약하고 오래된 요소(Vulnerable and Outdated Components)</b> — 미패치 라이브러리</li><li><b>A07 식별 및 인증 실패</b> — 약한 패스워드, 세션 관리 미흡</li><li><b>A08 소프트웨어·데이터 무결성 실패</b> — <b>신설</b>. 안전하지 않은 역직렬화, <b>공급망 공격</b></li><li><b>A09 보안 로깅·모니터링 실패</b> — 기록이 없어 침해를 못 알아챔</li><li><b>A10 SSRF(Server-Side Request Forgery)</b> — <b>신설</b>. 서버가 공격자가 지정한 곳으로 요청을 대신 보냄</li></ul><p class='on-key'><span class='lbl'>변화 포인트</span><b>1위가 인젝션 → 접근통제</b>로 바뀌었고, <b>XSS는 인젝션(A03)에 흡수</b>됐으며, <b>설계 결함·무결성 실패·SSRF가 신설</b>됐다는 세 가지가 핵심.</p>"
      }
    ],
    "finalLiner": "OWASP=웹 보안 비영리 단체, Top 10은 <b>3~4년마다</b> 갱신 / 2021판 <b>1위=취약한 접근통제</b>, <b>2위 암호화 실패</b>, <b>3위 인젝션(XSS 흡수)</b>, 신설 <b>A04 안전하지 않은 설계 · A08 무결성 실패(공급망) · A10 SSRF</b>",
    "related": ["sdlc", "sqli", "xss"]
  },
  {
    "id": "sdlc",
    "term": "소프트웨어 개발 보안 · SDLC · 시큐어 코딩 7대 유형",
    "en": "Secure SDLC / Secure Coding",
    "cat": "애플리케이션 보안",
    "tags": ["요구분석→설계→구현→시험→유지보수", "앞단계일수록 비용 저렴", "7대 보안약점 유형", "CWE·CVE", "위협 모델링"],
    "oneLiner": "개발 보안=SDLC 전 단계에 보안 활동을 심는 것(빨리 잡을수록 비용이 싸다) / 행안부 시큐어 코딩 7대 유형=입력데이터 검증 및 표현·보안기능·시간 및 상태·에러처리·코드오류·캡슐화·API 오용",
    "blocks": [
      {
        "k": "def",
        "title": "왜 개발 단계에서 잡는가",
        "d": "<b>소프트웨어 개발 보안(시큐어 코딩)</b> — 설계·구현 단계에서 <b>보안 약점(Weakness)</b>을 미리 제거해 <b>취약점(Vulnerability)</b>이 되지 않도록 하는 활동.<p class='on-key'><span class='lbl'>핵심 근거</span>같은 결함을 고치는 비용은 <b>요구분석 단계 1이라면 운영 단계에서는 수십~수백 배</b>가 된다. \"개발이 끝난 뒤 방화벽으로 막는다\"는 접근이 실패하는 이유.</p><ul class='klist'><li><b>약점(Weakness)</b> = 잠재적 결함 → 목록이 <b>CWE</b></li><li><b>취약점(Vulnerability)</b> = 실제 공격 가능한 결함 → 개별 사례 번호가 <b>CVE</b></li><li>점수 체계 <b>CVSS</b>(0~10점으로 심각도 표현)</li></ul>"
      },
      {
        "k": "note",
        "title": "SDLC 단계별 보안 활동",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 요구사항 분석</span><span class='es-note'>보안 요구사항 도출, 관련 법·규제 식별</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 설계</span><span class='es-note'><b>위협 모델링(STRIDE)</b>, 보안 설계 검토. <b>여기서 잡는 게 가장 저렴</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 구현(개발)</span><span class='es-note'><b>시큐어 코딩</b> 적용, <b>정적 분석(SAST)</b>·소스 코드 진단</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 시험(테스트)</span><span class='es-note'><b>동적 분석(DAST)</b>·모의 침투 테스트·퍼징</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑤ 운영·유지보수</span><span class='es-note'>패치 관리, 취약점 점검, 로그 모니터링, 폐기 시 데이터 파기</span></div></div><ul class='klist'><li><b>STRIDE</b> — 위협 분류: <b>S</b>poofing(위장)·<b>T</b>ampering(변조)·<b>R</b>epudiation(부인)·<b>I</b>nformation Disclosure(정보 노출)·<b>D</b>oS·<b>E</b>levation of Privilege(권한 상승)</li><li>관련 방법론: <b>MS SDL</b>, <b>CLASP</b>, <b>Seven Touchpoints</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "시큐어 코딩 7대 보안약점 유형 (행안부 기준 — 목록 통째로 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>① 입력 데이터 검증 및 표현</span><div class='row'><b>가장 항목이 많다</b>. SQL 삽입, 코드 삽입, <b>XSS</b>, 운영체제 명령어 삽입, 경로 조작, <b>위험한 형식 파일 업로드</b>, XQuery·LDAP 삽입, 정수형 오버플로, <b>포맷 스트링</b>, 메모리 버퍼 오버플로</div></div><div class='cmp-item'><span class='cmp-label'>② 보안 기능</span><div class='row'><b>부적절한 인가</b>, <b>하드코딩된 중요정보(비밀번호·암호키)</b>, <b>취약한 비밀번호 허용</b>, 중요정보 평문 저장·전송, 취약한 암호 알고리즘 사용, 부적절한 인증서 검증, 충분하지 않은 키 길이</div></div><div class='cmp-item'><span class='cmp-label'>③ 시간 및 상태</span><div class='row'><b>경쟁 조건(TOCTOU)</b>, 종료되지 않는 반복문·재귀</div></div><div class='cmp-item'><span class='cmp-label'>④ 에러 처리</span><div class='row'>오류 메시지로 <b>정보 노출</b>(경로·DB 구조), 오류 상황 대응 부재, 부적절한 예외 처리</div></div><div class='cmp-item'><span class='cmp-label'>⑤ 코드 오류</span><div class='row'><b>널 포인터 역참조</b>, 부적절한 자원 해제, 해제된 자원 사용(Use-After-Free), 초기화되지 않은 변수 사용</div></div><div class='cmp-item'><span class='cmp-label'>⑥ 캡슐화</span><div class='row'>잘못된 세션에 의한 정보 노출, <b>제거되지 않은 디버그 코드</b>, 시스템 데이터 정보 노출, public 메서드에서 private 배열 반환</div></div><div class='cmp-item'><span class='cmp-label'>⑦ API 오용</span><div class='row'><b>DNS lookup에 의존한 보안 결정</b>, 취약한 API 사용(위험한 함수 <code>strcpy</code>·<code>gets</code>), 널 매개변수 미검사</div></div></div><p class='on-key'><span class='lbl'>암기</span><b>입·보·시·에·코·캡·API</b> — \"입보시에 코캡API\". 문항에서 특정 약점이 <b>어느 유형인지</b> 묻는 형태가 대부분이다.</p>"
      }
    ],
    "finalLiner": "결함은 <b>앞 단계에서 잡을수록 싸다</b>(설계 단계 <b>위협 모델링 STRIDE</b>) / 약점=<b>CWE</b>, 취약점=<b>CVE</b>, 심각도=<b>CVSS</b> / 7대 유형 <b>①입력데이터 검증 및 표현(SQL삽입·XSS·업로드·포맷스트링) ②보안기능(부적절한 인가·하드코딩된 중요정보·취약한 비밀번호) ③시간 및 상태(경쟁조건) ④에러처리 ⑤코드오류(널포인터) ⑥캡슐화(디버그 코드) ⑦API 오용</b>",
    "related": ["owasp", "sqli", "reversing"]
  },
  {
    "id": "sqli",
    "term": "SQL 삽입 — 일반 · 블라인드 · 매스",
    "en": "SQL Injection / Blind / Mass SQL Injection",
    "cat": "애플리케이션 보안",
    "tags": ["' OR '1'='1", "블라인드=참·거짓만 보고 유추", "매스=대량 자동 감염", "파라미터화 쿼리가 정답", "저장 프로시저·최소권한"],
    "oneLiner": "입력값에 SQL 구문을 섞어 쿼리 의미를 바꾸는 공격 / 결과가 안 보이면 참·거짓 반응만으로 캐내는 블라인드, 다수 사이트 DB에 악성 스크립트를 자동 삽입하면 매스 SQL 인젝션 / 근본 대책은 파라미터화(Prepared Statement) 쿼리",
    "blocks": [
      {
        "k": "def",
        "title": "원리 — 데이터가 코드로 해석된다",
        "d": "<pre>-- 원래 의도한 쿼리\nSELECT * FROM users WHERE id='입력값' AND pw='입력값';\n\n-- 아이디에  ' OR '1'='1' --  을 넣으면\nSELECT * FROM users WHERE id='' OR '1'='1' --' AND pw='';\n→ 조건이 항상 참이 되고 뒤는 주석 처리 → 인증 우회</pre><p class='on-key'><span class='lbl'>본질</span>사용자가 넣은 <b>데이터</b>를 DB가 <b>명령(코드)</b>으로 읽어버리는 것. 모든 인젝션 계열(OS 명령·LDAP·XPath)의 원리가 같다.</p>"
      },
      {
        "k": "warn",
        "title": "유형 (구분해서 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>일반(Union·Error 기반)</span><div class='row'><b>UNION SELECT</b>로 다른 테이블을 붙여 조회하거나, 일부러 <b>에러를 내 그 메시지에서</b> 테이블·컬럼명을 얻는다</div></div><div class='cmp-item'><span class='cmp-label'>블라인드 SQL 인젝션 (Blind)</span><div class='row'>결과나 에러가 <b>화면에 안 보일 때</b>, 참/거짓에 따른 <b>응답 차이</b>만으로 한 글자씩 유추.<br><b>Boolean 기반</b>=화면이 달라지는지 / <b>Time 기반</b>=<code>SLEEP(5)</code>을 넣어 <b>응답이 늦어지는지</b>로 판단. <b>느리지만 확실</b></div></div><div class='cmp-item'><span class='cmp-label'>매스 SQL 인젝션 (Mass)</span><div class='row'><b>자동화 도구</b>로 수많은 사이트의 DB에 <b>악성 스크립트 태그를 대량 UPDATE</b>. 방문자가 <b>악성코드에 감염</b>되게 만드는 <b>2차 피해형</b>. 2008년 대규모 사고로 유명</div></div><div class='cmp-item'><span class='cmp-label'>Stored(2차) SQL 인젝션</span><div class='row'>일단 DB에 저장해 두었다가 <b>나중에 다른 기능이 그 값을 쓸 때</b> 실행되게 한다</div></div></div>"
      },
      {
        "k": "safe",
        "title": "대응 방법 (우선순위대로)",
        "d": "<ul class='klist'><li><b>① 파라미터화 쿼리 / Prepared Statement(바인딩 변수)</b> — <b>가장 확실한 근본 대책</b>. 쿼리 구조를 먼저 확정하고 값만 나중에 끼우므로 값이 <b>코드로 해석될 수 없다</b></li><li><b>② 입력값 검증</b> — 화이트리스트 방식(허용 문자만), 자료형·길이 확인. 특수문자 제거는 보조 수단</li><li><b>③ 저장 프로시저</b> 사용(단, 내부에서 동적 SQL을 조합하면 소용없다)</li><li><b>④ 최소 권한</b> — 웹 애플리케이션 계정에 DBA 권한을 주지 않는다(성공해도 피해 최소화)</li><li><b>⑤ 에러 메시지 은닉</b> — 상세 DB 오류를 사용자에게 노출하지 않음</li><li><b>⑥ 웹 방화벽(WAF)</b> — 패턴 차단. 우회가 가능하므로 <b>보조 수단</b></li></ul>"
      }
    ],
    "finalLiner": "SQL 삽입=<b>데이터가 코드로 해석</b>(<code>' OR '1'='1' --</code>) / <b>블라인드=결과가 안 보여 참·거짓(Boolean)이나 지연(Time, SLEEP)으로 한 글자씩</b>, <b>매스=자동화로 다수 DB에 악성 스크립트를 대량 삽입해 방문자 감염</b> / 대책 1순위는 <b>파라미터화(Prepared Statement) 쿼리</b>, 그다음 입력 검증·최소 권한·에러 은닉",
    "related": ["injection", "sqlcmd", "owasp"]
  },
  {
    "id": "injection",
    "term": "코드 삽입 · OS 명령어 삽입 · 포맷 스트링 · XXE",
    "en": "Code / OS Command Injection, Format String, XXE",
    "cat": "애플리케이션 보안",
    "tags": ["세미콜론·파이프로 명령 이어붙이기", "eval·system 함수", "%n=메모리 쓰기", "외부 엔티티로 파일 읽기", "화이트리스트 검증"],
    "oneLiner": "사용자 입력이 명령·코드·서식 문자열로 해석되면서 생기는 계열 / OS 명령어 삽입은 ;·|로 명령을 덧붙이고, 포맷 스트링은 %n으로 메모리를 쓰며, XXE는 XML 외부 엔티티로 서버 파일을 읽는다",
    "blocks": [
      {
        "k": "warn",
        "title": "코드 삽입 (Code Injection)",
        "d": "입력값이 <b>프로그램 소스 코드로 실행</b>되는 취약점. <code>eval()</code>·<code>exec()</code>·역직렬화처럼 <b>문자열을 코드로 바꾸는 기능</b>이 원인.<ul class='klist'><li>예: <code>eval($_GET['x'])</code> → <code>?x=system('id')</code></li><li><b>안전하지 않은 역직렬화</b>도 같은 계열(OWASP A08)</li><li>대책: <b>eval류 사용 금지</b>, 입력을 코드로 만들지 않기, 화이트리스트 검증</li></ul>"
      },
      {
        "k": "warn",
        "title": "운영체제 명령어 삽입 (OS Command Injection)",
        "d": "웹 애플리케이션이 사용자 입력을 <b>셸 명령에 그대로 붙여</b> 실행할 때 발생.<pre>ping 기능:  system(\"ping \" . $ip);\n\n입력:  8.8.8.8 ; cat /etc/passwd\n실행:  ping 8.8.8.8 ; cat /etc/passwd   ← 두 번째 명령까지 실행</pre><ul class='klist'><li>이어붙이는 문자: <b><code>;</code> <code>&amp;&amp;</code> <code>||</code> <code>|</code> <code>`명령`</code> <code>$(명령)</code></b></li><li>피해가 가장 큼 — <b>웹 권한으로 서버 명령 실행 → 웹셸 설치·서버 장악</b></li><li>대책: <b>셸 호출 자체를 피하고</b> 언어 내장 함수 사용, 부득이하면 <b>화이트리스트</b>로 입력 제한, 웹 서버를 <b>비특권 계정</b>으로 실행</li></ul>"
      },
      {
        "k": "warn",
        "title": "포맷 스트링 (Format String)",
        "d": "C의 <code>printf</code> 계열에 <b>서식 문자열을 사용자 입력으로</b> 넘길 때 발생.<pre>취약:  printf(user_input);        ← 입력이 서식 문자열로 해석됨\n안전:  printf(\"%s\", user_input);  ← 항상 서식은 고정</pre><ul class='klist'><li><b><code>%x</code>·<code>%s</code></b> — 스택 메모리를 <b>읽어</b> 정보 유출</li><li><b><code>%n</code></b> — 지금까지 출력한 바이트 수를 <b>메모리에 쓴다</b> → <b>임의 주소 변조 → 코드 실행</b>. 포맷 스트링이 위험한 진짜 이유</li><li>대책: <b>서식 문자열을 상수로 고정</b>, 컴파일러 경고(<code>-Wformat-security</code>) 확인</li></ul>"
      },
      {
        "k": "warn",
        "title": "XXE 인젝션 (XML External Entity)",
        "d": "XML 파서가 <b>외부 엔티티 참조를 처리</b>하도록 켜져 있을 때, 공격자가 그 참조로 <b>서버 내부 파일</b>을 읽어낸다.<pre>&lt;!DOCTYPE foo [\n  &lt;!ENTITY xxe SYSTEM \"file:///etc/passwd\"&gt;\n]&gt;\n&lt;foo&gt;&amp;xxe;&lt;/foo&gt;      ← 응답에 /etc/passwd 내용이 실림</pre><ul class='klist'><li>피해: <b>내부 파일 유출 · SSRF(내부망 스캔) · DoS(빌리언 러프 공격)</b></li><li>대책: <b>외부 엔티티·DTD 처리 비활성화</b>가 정답. 가능하면 XML 대신 <b>JSON</b> 사용</li></ul>"
      }
    ],
    "finalLiner": "<b>코드 삽입=eval류로 소스가 실행</b> / <b>OS 명령어 삽입=<code>;</code>·<code>|</code>·<code>$()</code>로 명령을 덧붙여 서버 장악</b>, 대책은 셸 호출 회피+화이트리스트 / <b>포맷 스트링=<code>%x</code> 읽기·<code>%n</code> 쓰기</b>, 대책은 <code>printf(\"%s\", 입력)</code> / <b>XXE=외부 엔티티로 내부 파일 유출·SSRF</b>, 대책은 <b>외부 엔티티·DTD 비활성화</b>",
    "related": ["sqli", "xss", "sdlc"]
  },
  {
    "id": "xss",
    "term": "XSS와 CSRF",
    "en": "Cross-Site Scripting / Cross-Site Request Forgery",
    "cat": "애플리케이션 보안",
    "tags": ["저장형·반사형·DOM 기반", "쿠키 탈취", "CSRF=의도치 않은 요청", "CSRF 토큰·SameSite", "출력 시 인코딩"],
    "oneLiner": "XSS=피해자 브라우저에서 공격자의 스크립트가 실행되어 쿠키·세션을 훔치는 공격(저장형·반사형·DOM 기반) / CSRF=로그인된 피해자가 자기도 모르게 요청을 보내게 만드는 공격 — XSS는 정보 탈취, CSRF는 행위 강제",
    "blocks": [
      {
        "k": "warn",
        "title": "XSS 3가지 유형",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>저장형 (Stored / Persistent)</span><div class='row'>게시판·댓글에 스크립트를 <b>저장</b>해 두면 <b>글을 보는 모든 사람</b>에게 실행된다. <b>피해 범위가 가장 큼</b></div></div><div class='cmp-item'><span class='cmp-label'>반사형 (Reflected)</span><div class='row'>URL 파라미터에 스크립트를 넣고, 서버가 그 값을 <b>그대로 응답에 되비추는</b> 것을 이용. 피해자가 <b>조작된 링크를 클릭</b>해야 성립 → 피싱 메일과 결합</div></div><div class='cmp-item'><span class='cmp-label'>DOM 기반 (DOM-based)</span><div class='row'>서버를 거치지 않고 <b>브라우저 안 자바스크립트</b>가 URL 값을 <code>innerHTML</code> 등에 넣으며 실행. <b>서버 로그에 안 남아</b> 탐지가 어렵다</div></div></div><ul class='klist'><li>피해: <b>쿠키·세션 탈취</b>, 피싱 페이지 삽입, 키로깅, 악성코드 유포, 웜 확산</li><li>대책: <b>출력 시 인코딩(이스케이프)</b>이 핵심 — <code>&lt;</code>→<code>&amp;lt;</code>. 입력 검증(화이트리스트), <b>쿠키에 HttpOnly</b>(자바스크립트 접근 차단), <b>CSP</b>(허용된 출처의 스크립트만 실행)</li></ul>"
      },
      {
        "k": "warn",
        "title": "CSRF (사이트 간 요청 위조)",
        "d": "이미 <b>로그인된 피해자</b>의 브라우저가 <b>인증 쿠키를 자동으로 첨부</b>한다는 점을 악용. 공격자가 만든 페이지·이미지 태그가 <b>피해자 이름으로 요청</b>을 보낸다.<pre>&lt;img src=\"https://bank.com/transfer?to=attacker&amp;amount=1000000\"&gt;\n→ 피해자가 그 글을 열기만 해도 송금 요청이 나간다</pre><ul class='klist'><li>공격자는 <b>응답을 볼 수 없다</b> — 오직 <b>행위(상태 변경)</b>를 시킬 뿐</li><li>대책: <b>CSRF 토큰</b>(예측 불가한 값을 폼에 넣고 서버가 검증) · <b>SameSite 쿠키</b> · <b>Referer/Origin 검증</b> · 중요 작업에 <b>재인증·CAPTCHA</b> · <b>상태 변경은 반드시 POST</b></li></ul>"
      },
      {
        "k": "note",
        "title": "XSS vs CSRF (비교 문제 단골)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>XSS</span><div class='row'>피해자 브라우저에서 <b>스크립트를 실행</b> → <b>정보(쿠키·세션) 탈취</b>. 사이트가 <b>사용자를 신뢰</b>해서 생김. 응답을 <b>읽을 수 있다</b></div></div><div class='cmp-item'><span class='cmp-label'>CSRF</span><div class='row'>피해자 <b>권한으로 요청을 전송</b> → <b>행위(송금·설정 변경) 강제</b>. 사이트가 <b>브라우저(쿠키)를 신뢰</b>해서 생김. 응답은 <b>못 읽는다</b></div></div></div><p class='on-key'><span class='lbl'>한 줄</span><b>XSS=훔친다, CSRF=시킨다.</b> XSS가 있으면 CSRF 방어(토큰)도 무력화되므로 <b>XSS 대응이 먼저</b>다.</p>"
      }
    ],
    "finalLiner": "XSS=<b>저장형(모든 열람자·피해 최대)·반사형(링크 클릭 유도)·DOM 기반(서버 로그에 안 남음)</b>, 대책 <b>출력 인코딩 + HttpOnly + CSP</b> / CSRF=로그인 쿠키 자동 첨부를 악용해 <b>행위를 강제</b>, 대책 <b>CSRF 토큰·SameSite·Referer 검증</b> / <b>XSS=훔친다(정보) vs CSRF=시킨다(행위)</b>",
    "related": ["injection", "upload", "owasp"]
  },
  {
    "id": "upload",
    "term": "위험한 형식 파일 업로드 · 경로 조작",
    "en": "Unrestricted File Upload / Path Traversal",
    "cat": "애플리케이션 보안",
    "tags": ["웹셸", "확장자 화이트리스트", "실행 권한 제거", "웹 루트 밖에 저장", "../ 경로 조작"],
    "oneLiner": "실행 가능한 파일(.php·.jsp)을 올려 웹셸을 심는 공격 / 대책은 확장자 화이트리스트·웹 루트 밖 저장·실행 권한 제거·파일명 난수화 / 다운로드 쪽 쌍둥이 취약점이 ../를 이용한 경로 조작",
    "blocks": [
      {
        "k": "warn",
        "title": "위험한 형식 파일 업로드 → 웹셸",
        "d": "게시판 첨부·프로필 사진 기능에 <b>서버에서 실행되는 스크립트</b>를 올리고, 그 URL로 접근해 실행시키는 공격.<ul class='klist'><li>결과물이 <b>웹셸(WebShell)</b> — 브라우저로 서버 명령을 실행하는 백도어. <b>서버 장악의 시작점</b></li><li>우회 기법: <code>.php.jpg</code> 이중 확장자, 대소문자(<code>.PhP</code>), <b>널 바이트</b>(<code>shell.php%00.jpg</code>), Content-Type 위조, <b>이미지 파일 안에 코드 삽입</b></li></ul>"
      },
      {
        "k": "safe",
        "title": "대응 (한 가지만 하면 뚫린다)",
        "d": "<ul class='klist'><li><b>확장자 화이트리스트</b> — 허용 목록 방식(블랙리스트는 우회됨). <b>서버 측에서</b> 검사(자바스크립트 검사만으로는 무의미)</li><li><b>웹 루트(Document Root) 밖에 저장</b> — URL로 직접 접근 자체를 불가능하게. 다운로드는 별도 스크립트로 중계</li><li><b>업로드 디렉터리에 실행 권한 제거</b> — 아파치 설정에서 스크립트 실행 차단</li><li><b>파일명 난수화·변경</b>, 크기 제한, MIME 타입과 <b>실제 시그니처(매직 넘버) 확인</b>, 백신 검사</li></ul>"
      },
      {
        "k": "warn",
        "title": "경로 조작 (Path Traversal / Directory Traversal)",
        "d": "파일 다운로드·열람 기능의 파라미터에 <b><code>../</code></b>를 넣어 <b>의도한 디렉터리를 벗어나</b> 시스템 파일을 읽는 취약점.<pre>정상:  /download?file=notice.pdf\n공격:  /download?file=../../../../etc/passwd</pre><ul class='klist'><li>우회: <b>URL 인코딩</b>(<code>%2e%2e%2f</code>), 이중 인코딩, 절대경로 사용</li><li>대책: <b>경로 문자(<code>../</code>·<code>/</code>) 제거·거부</b>, <b>파일명을 직접 받지 말고 ID로 매핑</b>, 기준 디렉터리 안인지 <b>정규화 후 검증</b>, chroot·권한 최소화</li></ul>"
      }
    ],
    "finalLiner": "파일 업로드=<b>웹셸을 심어 서버 장악</b>, 우회는 <b>이중 확장자·널 바이트·Content-Type 위조</b> / 대책 <b>확장자 화이트리스트(서버 측) + 웹 루트 밖 저장 + 실행 권한 제거 + 파일명 난수화</b> / <b>경로 조작=<code>../</code>로 상위 디렉터리 접근</b>, 대책은 <b>경로 문자 제거·ID 매핑·정규화 후 검증</b>",
    "related": ["xss", "sdlc", "websec"]
  },
  {
    "id": "sso",
    "term": "SSO (통합 인증)",
    "en": "Single Sign-On",
    "cat": "애플리케이션 보안",
    "tags": ["한 번 인증으로 여러 시스템", "인증 서버 + 에이전트", "델리게이션 vs 프로퍼게이션", "커버로스·SAML", "단일 실패 지점"],
    "oneLiner": "SSO=한 번의 인증으로 여러 시스템을 이용하는 통합 인증 / 구성은 인증 서버+각 시스템의 에이전트+토큰 / 방식은 기존 인증을 대신해 주는 델리게이션과 인증 토큰을 전파하는 프로퍼게이션",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 필요성",
        "d": "<b>SSO(Single Sign-On)</b> — <b>한 번만 로그인</b>하면 연계된 여러 시스템을 <b>다시 인증하지 않고</b> 사용하는 통합 인증 체계.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>장점</span><div class='row'>사용자 편의(패스워드 하나) · <b>패스워드 재사용·메모 감소</b> · 계정 관리 <b>중앙화</b> · 감사 추적 용이 · 헬프데스크 비용 절감</div></div><div class='cmp-item'><span class='cmp-label'>단점</span><div class='row'><b>단일 실패 지점(SPOF)</b> — 인증 서버가 죽으면 <b>전부 마비</b> / 계정 하나가 뚫리면 <b>전 시스템이 뚫린다</b> → <b>2차 인증(OTP) 병행이 필수</b></div></div></div><p class='on-key'><span class='lbl'>구별</span><b>SSO=인증(누구인가)의 통합</b>, <b>EAM/IAM=인증+인가(권한)+계정관리까지</b> 포함하는 더 큰 개념.</p>"
      },
      {
        "k": "note",
        "title": "개념도 — 구성요소와 흐름",
        "d": "<ul class='klist'><li><b>사용자</b> · <b>인증 서버(Authentication Server)</b> — 신원 확인과 <b>토큰 발급</b>을 전담</li><li><b>SSO 에이전트(Agent)</b> — 각 업무 시스템에 설치되어 <b>토큰을 검증</b>하고 접근을 허용</li><li><b>LDAP·통합 계정 저장소</b> — 사용자 정보를 한곳에 보관</li></ul><div class='evo'><div class='evo-step'><span class='es-name'>① 로그인</span><span class='es-note'>사용자가 인증 서버에 한 번 인증</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 토큰 발급</span><span class='es-note'>인증 서버가 <b>서명된 인증 토큰</b>을 발급</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 시스템 접근</span><span class='es-note'>다른 시스템에 갈 때 <b>토큰을 함께</b> 제시</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 토큰 검증</span><span class='es-note'>에이전트가 서명·유효기간을 확인하고 <b>재로그인 없이</b> 허용</span></div></div>"
      },
      {
        "k": "note",
        "title": "종류 (방식별 구분)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>델리게이션 (Delegation, 위임형)</span><div class='row'>대상 시스템의 <b>인증 방식을 바꿀 수 없을 때</b>, SSO 에이전트가 사용자의 <b>ID·패스워드를 대신 저장했다가 대신 입력</b>해 준다. <b>기존 시스템 수정이 불필요</b>하지만 계정 정보를 보관해야 함</div></div><div class='cmp-item'><span class='cmp-label'>프로퍼게이션 (Propagation, 전파형)</span><div class='row'>인증 서버가 발급한 <b>토큰을 각 시스템에 전달·검증</b>하는 방식. <b>패스워드를 저장하지 않아 더 안전</b>하나 각 시스템이 토큰을 이해하도록 <b>연동 개발</b>이 필요</div></div></div><ul class='klist'><li>구현 기술: <b>쿠키 기반</b>(같은 도메인) · <b>커버로스(Kerberos)</b>(티켓 기반, 윈도우 AD) · <b>SAML</b>(XML 기반, 도메인이 다른 웹 서비스 간 SSO 표준) · <b>OAuth 2.0(인가)·OpenID Connect(인증)</b></li><li>범위로 볼 때 <b>같은 도메인 내부용</b>과 <b>서로 다른 기업 간(Federation, 페더레이션)</b>으로도 나눈다</li></ul>"
      }
    ],
    "finalLiner": "SSO=한 번 인증으로 여러 시스템, 구성=<b>인증 서버+에이전트+토큰</b> / 단점 <b>단일 실패 지점·한 계정 뚫리면 전부</b> → OTP 병행 / <b>델리게이션=ID·PW를 대신 입력(기존 시스템 수정 불필요)</b> vs <b>프로퍼게이션=토큰 전파(더 안전, 연동 필요)</b> / 기술은 <b>커버로스·SAML·OIDC</b>",
    "related": ["drm", "otp", "oauth"]
  },
  {
    "id": "drm",
    "term": "DRM · 워터마킹 · 핑거프린팅",
    "en": "Digital Rights Management / Watermarking / Fingerprinting",
    "cat": "애플리케이션 보안",
    "tags": ["콘텐츠 사용 통제", "패키저·클리어링하우스", "워터마킹=소유권 증명", "핑거프린팅=유출자 추적", "스테가노그래피"],
    "oneLiner": "DRM=콘텐츠를 암호화하고 사용 권한을 통제하는 체계 / 워터마킹은 저작권자 정보를 숨겨 소유권을 증명하고, 핑거프린팅은 구매자 정보를 각기 다르게 심어 유출자를 추적한다",
    "blocks": [
      {
        "k": "def",
        "title": "DRM 구성요소",
        "d": "<b>DRM(Digital Rights Management)</b> — 디지털 콘텐츠를 <b>암호화</b>해 배포하고, <b>인가된 사용자가 허용된 범위 안에서만</b>(기간·횟수·인쇄 여부) 쓰게 하는 저작권 보호 기술.<ul class='klist'><li><b>패키저(Packager)</b> — 콘텐츠를 <b>암호화하고 사용 규칙(라이선스 정보)을 묶는다</b></li><li><b>클리어링 하우스(Clearing House)</b> — <b>라이선스(키) 발급과 과금·정산</b>을 담당하는 중앙 기관</li><li><b>콘텐츠 서버(배포자)</b> · <b>DRM 컨트롤러(사용자 단말)</b> — 권한을 확인하고 <b>복호화·재생을 통제</b></li><li>기업용 문서보안도 같은 구조(<b>문서 DRM</b>: 반출 문서의 열람·인쇄·화면 캡처 제한)</li></ul>"
      },
      {
        "k": "note",
        "title": "워터마킹 vs 핑거프린팅 (구분이 핵심)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>디지털 워터마킹</span><div class='row'><b>저작권자(판매자) 정보</b>를 콘텐츠에 삽입. <b>모든 사본에 같은 정보</b>가 들어간다.<br>목적 = <b>\"이건 내 것이다\" 소유권 증명</b></div></div><div class='cmp-item'><span class='cmp-label'>핑거프린팅 (Fingerprinting)</span><div class='row'><b>구매자(사용자) 정보</b>를 삽입. <b>사본마다 다른 정보</b>가 들어간다.<br>목적 = 유출본을 보고 <b>\"누가 유출했는지\" 추적</b>(불법 배포자 식별)</div></div></div><ul class='klist'><li>요구 성질: <b>비가시성</b>(눈에 안 띔) · <b>강인성(Robustness)</b>(압축·크기변경·잡음에도 살아남음) · <b>위조 방지</b></li><li><b>가시적 워터마크</b>(눈에 보이는 로고)와 <b>비가시적 워터마크</b>로도 나눈다</li></ul>"
      },
      {
        "k": "note",
        "title": "스테가노그래피와의 차이",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>스테가노그래피 (Steganography)</span><div class='row'>이미지·음성 파일에 <b>비밀 메시지 자체를 숨겨</b> 전달. 목적은 <b>메시지의 존재를 감추는 것(은닉 통신)</b>. LSB(최하위 비트) 삽입이 대표 기법</div></div><div class='cmp-item'><span class='cmp-label'>워터마킹</span><div class='row'>숨기는 것은 <b>저작권 정보</b>이고, 존재를 감추는 것보다 <b>지워지지 않는 것(강인성)</b>이 더 중요</div></div></div><p class='on-key'><span class='lbl'>한 줄</span><b>스테가노그래피=존재를 숨긴다</b>, <b>워터마킹=지워지지 않게 새긴다</b>, <b>핑거프린팅=누가 샀는지 다르게 새긴다</b>.</p>"
      }
    ],
    "finalLiner": "DRM=콘텐츠 암호화+사용 권한 통제, 구성 <b>패키저(암호화·규칙) · 클리어링 하우스(라이선스 발급·과금) · DRM 컨트롤러</b> / <b>워터마킹=저작권자 정보, 모든 사본 동일, 소유권 증명</b> vs <b>핑거프린팅=구매자 정보, 사본마다 다름, 유출자 추적</b> / <b>스테가노그래피=메시지 존재 자체를 은닉</b>",
    "related": ["forensic", "sso"]
  },
  {
    "id": "forensic",
    "term": "디지털 포렌식 — 원칙과 휘발성 데이터",
    "en": "Digital Forensics",
    "cat": "애플리케이션 보안",
    "tags": ["5대 원칙", "연계보관성(Chain of Custody)", "휘발성 우선 수집", "무결성=해시", "쓰기 방지 장치"],
    "oneLiner": "디지털 포렌식=법적 증거능력을 갖추도록 디지털 증거를 수집·분석하는 절차 / 원칙은 정당성·재현성·신속성·연계보관성·무결성 / 수집은 사라지기 쉬운 휘발성 데이터부터",
    "blocks": [
      {
        "k": "def",
        "title": "5대 원칙 (증거능력의 조건)",
        "d": "<ul class='klist'><li><b>정당성의 원칙</b> — <b>적법한 절차</b>로 수집해야 한다(위법수집증거 배제)</li><li><b>재현의 원칙</b> — 같은 조건에서 <b>같은 결과</b>가 나와야 한다</li><li><b>신속성의 원칙</b> — <b>지체 없이</b> 수집해야 한다(휘발성 증거는 사라진다)</li><li><b>연계보관성(Chain of Custody)</b> — 수집→이송→분석→법정까지 <b>담당자·시각·장소가 끊김 없이 기록</b>돼야 한다. 한 단계라도 비면 증거능력 상실</li><li><b>무결성의 원칙</b> — 수집 후 <b>변경되지 않았음</b>을 증명. 수단이 <b>해시값(MD5/SHA)</b>과 <b>쓰기 방지 장치(Write Blocker)</b>, 원본이 아닌 <b>사본(이미지) 분석</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "휘발성 vs 비휘발성 데이터 (수집 순서 문제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>휘발성 데이터 (Volatile)</span><div class='row'><b>전원이 꺼지면 사라진다</b> → <b>먼저 수집</b>.<br>레지스터·캐시 → <b>메모리(RAM)</b> → <b>네트워크 연결 상태·라우팅 테이블·ARP 캐시</b> → <b>실행 중인 프로세스</b> → 임시 파일 · 로그인 세션</div></div><div class='cmp-item'><span class='cmp-label'>비휘발성 데이터 (Non-volatile)</span><div class='row'>전원과 무관하게 남는다 → <b>나중에 수집</b>.<br><b>하드디스크·SSD 파일</b> · 로그 파일 · 레지스트리 · 슬랙 공간·삭제된 파일 · 백업 매체 · 출력물</div></div></div><p class='on-key'><span class='lbl'>원칙</span><b>휘발성이 큰 것부터(Order of Volatility)</b>. 특히 <b>메모리 덤프를 뜨기 전에 시스템을 재부팅·종료하면 안 된다</b>는 것이 함정 문항으로 자주 나온다.</p>"
      },
      {
        "k": "note",
        "title": "절차와 분석 대상",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 수사 준비</span><span class='es-note'>도구·인력 준비</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 증거 수집</span><span class='es-note'>휘발성 우선, <b>쓰기 방지 후 이미징</b>, 해시 산출</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 보관·이송</span><span class='es-note'>봉인·연계보관성 문서 작성</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 분석</span><span class='es-note'><b>사본</b>으로 타임라인·삭제 파일 복구·아티팩트 분석</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>⑤ 보고</span><span class='es-note'>제3자가 <b>재현 가능하게</b> 문서화</span></div></div><ul class='klist'><li>주요 아티팩트: <b>레지스트리</b>·이벤트 로그·프리페치·<b>MFT($MFT)</b>·<b>웹 브라우저 기록·쿠키</b>·링크 파일·휴지통</li><li><b>안티 포렌식</b> — 데이터 완전 삭제(와이핑)·암호화·<b>타임스탬프 변조</b>·스테가노그래피로 분석을 방해하는 행위</li></ul>"
      }
    ],
    "finalLiner": "포렌식 5원칙 <b>정당성·재현성·신속성·연계보관성(Chain of Custody)·무결성</b> / 무결성 수단 = <b>해시값 + 쓰기 방지 장치 + 사본 분석</b> / 수집은 <b>휘발성 우선</b>: <b>레지스터·캐시 → 메모리 → 네트워크 상태 → 프로세스 → 디스크·로그</b>, <b>함부로 재부팅·종료 금지</b>",
    "related": ["reversing", "drm", "webartifact"]
  },
  {
    "id": "reversing",
    "term": "리버스 엔지니어링 — 정적 분석과 동적 분석",
    "en": "Reverse Engineering / Static & Dynamic Analysis",
    "cat": "애플리케이션 보안",
    "tags": ["역공학", "정적=실행 안 함·디스어셈블", "동적=실행하며 관찰", "샌드박스·디버거", "난독화·안티디버깅"],
    "oneLiner": "리버스 엔지니어링=완성된 프로그램을 거꾸로 분석해 구조·동작을 알아내는 것 / 정적 분석은 실행하지 않고 코드를 보는 방식, 동적 분석은 실제 실행시켜 행위를 관찰하는 방식 — 악성코드 분석은 둘을 함께 쓴다",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 용도",
        "d": "<b>리버스 엔지니어링(역공학)</b> — 실행 파일·바이너리를 <b>거꾸로 해석</b>해 내부 구조·알고리즘·동작을 파악하는 기술.<ul class='klist'><li>정당한 용도: <b>악성코드 분석</b>, 취약점 발견, 호환성 확보, 소스가 없는 시스템 유지보수</li><li>악용: 라이선스 우회(크래킹), <b>알고리즘 탈취</b>, 패치 분석으로 <b>취약점 역추적(1-day 공격)</b></li><li>관련: <b>디컴파일</b>(바이너리→고급 언어 근사), <b>디스어셈블</b>(바이너리→어셈블리)</li></ul>"
      },
      {
        "k": "note",
        "title": "정적 분석 vs 동적 분석 (비교 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>정적 분석 (Static)</span><div class='row'><b>실행하지 않고</b> 코드·바이너리를 본다.<br>기법: 문자열 추출, <b>해시·시그니처</b> 확인, PE 헤더·API 목록 분석, <b>디스어셈블</b><br>도구: <b>IDA Pro</b>·Ghidra·strings·PEiD, 소스 진단 <b>SAST</b><br>장점 <b>안전(감염 위험 없음)·전체 경로 확인 가능</b> / 단점 <b>패킹·난독화에 무력</b>, 오탐이 많음</div></div><div class='cmp-item'><span class='cmp-label'>동적 분석 (Dynamic)</span><div class='row'><b>실제로 실행</b>하며 행위를 관찰한다.<br>기법: 프로세스·레지스트리·파일 변화, <b>네트워크 통신 감시</b>, <b>디버깅</b><br>도구: <b>OllyDbg·x64dbg</b>·Process Monitor·Wireshark·<b>샌드박스(Cuckoo)</b>, 웹 <b>DAST</b><br>장점 <b>실제 행위를 확인, 난독화·패킹을 우회</b> / 단점 <b>감염 위험(격리 필요)</b>, 실행된 경로만 보임</div></div></div><p class='on-key'><span class='lbl'>실무</span>정적으로 <b>얼개를 파악</b>하고, 동적으로 <b>실제 행위를 확인</b>하는 <b>병행</b>이 표준. 개발 보안에서는 <b>SAST(구현 단계)</b> → <b>DAST(시험 단계)</b> 순으로 매핑된다.</p>"
      },
      {
        "k": "warn",
        "title": "분석 방해 기법 (악성코드 쪽 대응)",
        "d": "<ul class='klist'><li><b>패킹(Packing)</b> — 실행 파일을 압축·암호화해 <b>정적 분석을 막는다</b>. 대응은 <b>언패킹</b></li><li><b>난독화(Obfuscation)</b> — 코드·문자열을 알아보기 어렵게 변형</li><li><b>안티 디버깅</b> — 디버거가 붙었는지 탐지해 <b>동작을 바꾸거나 종료</b></li><li><b>가상머신·샌드박스 탐지</b> — 분석 환경이면 <b>악성 행위를 하지 않는다</b>(분석 회피)</li><li>정상 소프트웨어에서도 <b>지식재산 보호</b> 목적으로 난독화·안티디버깅을 쓴다</li></ul>"
      }
    ],
    "finalLiner": "리버스 엔지니어링=바이너리를 거꾸로 분석(디스어셈블·디컴파일) / <b>정적=실행 안 하고 코드·문자열·PE 분석(IDA, 안전하나 패킹·난독화에 취약)</b> vs <b>동적=실행하며 행위·통신 관찰(OllyDbg·샌드박스, 정확하나 감염 위험)</b> — <b>병행이 표준</b> / 개발 보안 대응은 <b>SAST(구현)·DAST(시험)</b>, 방해 기법은 <b>패킹·난독화·안티디버깅·샌드박스 탐지</b>",
    "related": ["forensic", "sdlc", "diffing"]
  }
]);
