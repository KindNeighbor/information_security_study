/* 애플리케이션 보안 — 인터넷 응용 보안(FTP·메일·웹·DNS) 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "ftp",
    "term": "FTP 개요 · 종류 · 액티브/패시브 모드",
    "en": "File Transfer Protocol",
    "cat": "애플리케이션 보안",
    "tags": ["21=제어·20=데이터", "제어·데이터 채널 분리", "액티브=서버가 연결", "패시브=클라이언트가 연결", "ftpusers=접속 금지 목록"],
    "oneLiner": "파일 전송 프로토콜(제어 21·데이터 20, 채널 분리) / 액티브=서버가 데이터 연결을 걺, 패시브=클라이언트가 걺 / 접근통제는 /etc/ftpusers",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 채널 분리",
        "d": "<b>FTP(File Transfer Protocol)</b> — 파일을 주고받는 프로토콜. <b>제어 채널과 데이터 채널을 따로</b> 쓰는 것이 가장 큰 특징이다.<ul class='klist'><li><b>21번 — 제어(명령) 채널</b>: 로그인·명령을 주고받으며 세션 내내 유지</li><li><b>20번 — 데이터 채널</b>: 실제 파일 전송용(액티브 모드에서 사용)</li></ul>"
      },
      {
        "k": "warn",
        "title": "액티브 vs 패시브 모드 (최다 출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>액티브 모드 (Active)</span><div class='row'>데이터 연결을 <b>서버가 클라이언트에게</b> 건다(서버 <b>20번</b> → 클라이언트).<br>➖ 클라이언트 <b>방화벽이 들어오는 연결을 막으면 전송 실패</b>. 요즘 환경에서 잘 안 되는 이유.</div></div><div class='cmp-item'><span class='cmp-label'>패시브 모드 (Passive)</span><div class='row'>서버가 <b>열어둔 포트 번호를 알려주면</b> 데이터 연결도 <b>클라이언트가 서버에게</b> 건다.<br>➕ 클라이언트 방화벽 문제가 없다<br>➖ 서버가 <b>여러 포트를 열어둬야</b> 해 서버 쪽 부담·노출이 커진다.</div></div></div><p class='on-key'><span class='lbl'>구분 요령</span>“<b>누가 데이터 연결을 먼저 거는가</b>” — <b>액티브=서버가 능동적(Active)</b>으로 건다, <b>패시브=서버가 가만히(Passive) 기다리고 클라이언트가</b> 건다.</p>"
      },
      {
        "k": "note",
        "title": "FTP 종류",
        "d": "<ul class='klist'><li><b>일반 FTP</b> — 계정·비밀번호로 인증(단, <b>평문</b>)</li><li><b>익명 FTP(Anonymous FTP)</b> — 계정 <code>anonymous</code>로 <b>누구나 접속</b>, 비밀번호는 관례상 이메일. 공개 자료 배포용이지만 <b>설정을 잘못하면 매우 위험</b></li><li><b>TFTP(Trivial FTP)</b> — <b>UDP 69</b>, 매우 단순. <b>인증 자체가 없다</b> → 네트워크 장비 부팅용 등 제한적으로만</li><li><b>SFTP</b>(SSH 기반, 22) · <b>FTPS</b>(SSL/TLS) — <b>암호화되는 안전한 대체재</b></li></ul>"
      },
      {
        "k": "note",
        "title": "접근 통제 파일",
        "d": "<ul class='klist'><li><b><code>/etc/ftpusers</code></b> — <b>여기 적힌 사용자는 FTP 접속이 '금지'</b>된다. 이름만 보면 허용 목록 같아서 <b>반대로 아는 함정</b>이 자주 나온다. <b>root를 반드시 등록</b>해 원격 FTP 로그인을 막는다</li><li><code>/etc/ftpaccess</code> — 접속 수·전송·디렉터리 등 <b>상세 접근 제어</b></li><li><code>/etc/ftphosts</code> — <b>호스트(IP) 기반</b> 허용·거부</li></ul>"
      }
    ],
    "finalLiner": "FTP=<b>제어 21 · 데이터 20</b>(채널 분리) / <b>액티브=서버가 데이터 연결을 걺(클라 방화벽에 막힘)</b> vs <b>패시브=클라이언트가 걺(서버 포트 많이 열림)</b> / 종류 일반·<b>익명</b>·<b>TFTP(UDP 69·인증 없음)</b>·SFTP·FTPS / <b><code>/etc/ftpusers</code>=접속 금지 목록(root 등록)</b>",
    "related": ["ftpsec", "translayer", "remoteattack"]
  },
  {
    "id": "ftpsec",
    "term": "FTP 보안 취약점 · 로그 · 대책",
    "en": "FTP Security",
    "cat": "애플리케이션 보안",
    "tags": ["평문 전송", "익명 FTP 오설정", "FTP 바운스 공격", "xferlog", "SFTP·FTPS·chroot"],
    "oneLiner": "평문이라 ID·비밀번호가 그대로 노출 / 익명 FTP 오설정과 FTP 바운스 공격이 대표 취약점 / 전송 기록은 xferlog / 대책=SFTP·FTPS·익명 차단·chroot",
    "blocks": [
      {
        "k": "warn",
        "title": "취약점",
        "d": "<ul class='klist'><li><b>평문 전송</b> — <b>ID·비밀번호와 파일 내용이 모두 평문</b>이라 스니핑 한 번이면 계정이 넘어간다(가장 근본적인 문제)</li><li><b>익명 FTP 오설정</b> — 익명 계정에 <b>쓰기 권한</b>이 있으면 공격자가 <b>웹셸·악성코드를 업로드</b>하고, 홈 디렉터리 제한이 없으면 <b>상위 디렉터리로 이동</b>해 시스템 파일에 접근한다</li><li><b>무차별 대입</b> — 인터넷에 열린 FTP는 자동화 봇의 표적</li></ul>"
      },
      {
        "k": "warn",
        "title": "FTP 바운스 공격 (Bounce Attack)",
        "d": "FTP가 <b>데이터를 보낼 주소를 클라이언트가 지정</b>할 수 있다는 점(<b>PORT 명령</b>)을 악용한다. 공격자가 <b>제3의 시스템 주소</b>를 지정하면, <b>FTP 서버가 대신 그쪽으로 접속</b>하게 된다.<p class='on-key'><span class='lbl'>왜 위험한가</span>공격의 <b>출발지가 FTP 서버</b>가 되므로 <b>추적을 회피</b>할 수 있고, 그 서버를 <b>포트 스캔의 경유지</b>로 쓰거나 <b>방화벽 내부</b>를 스캔할 수 있다.</p><b>대응</b>: FTP 서버에서 <b>PORT 명령의 목적지를 접속한 클라이언트로 제한</b>(요즘 서버는 기본 차단)."
      },
      {
        "k": "note",
        "title": "로그 기록",
        "d": "<b><code>xferlog</code></b>(보통 <code>/var/log/xferlog</code>) — FTP의 <b>파일 전송 기록</b>이다. <b>언제·누가·어떤 파일을·어느 방향으로(업로드/다운로드)·성공했는지</b>가 남아 침해 조사의 핵심 증거가 된다.<br>접속·인증 실패 기록은 <code>/var/log/secure</code>(또는 <code>messages</code>)에서 함께 본다."
      },
      {
        "k": "safe",
        "title": "보안 대책",
        "d": "<ul class='klist'><li><b>SFTP(SSH·22) 또는 FTPS(SSL/TLS)로 대체</b> — 평문 문제를 근본적으로 해결(1순위)</li><li><b>익명 FTP 비활성화</b>. 꼭 필요하면 <b>읽기 전용</b>으로만</li><li><b><code>/etc/ftpusers</code>에 root·시스템 계정 등록</b>해 접속 차단</li><li><b>chroot로 홈 디렉터리에 가둬</b> 상위 이동 차단</li><li>업로드 디렉터리는 <b>실행 권한 제거</b>, 쓰기와 읽기 분리</li><li>접속 IP 제한, 시도 횟수 제한, <b><code>xferlog</code> 정기 점검</b></li></ul>"
      }
    ],
    "finalLiner": "FTP 취약점=<b>평문</b>·<b>익명 FTP 오설정(업로드·상위이동)</b>·무차별 대입·<b>바운스 공격(PORT 명령으로 제3자 경유 → 추적 회피·스캔)</b> / 전송 로그=<b><code>xferlog</code></b> / 대책=<b>SFTP·FTPS</b>·익명 차단·<b>ftpusers</b>·<b>chroot</b>",
    "related": ["ftp", "sniffing", "portscan"]
  },
  {
    "id": "mailsec",
    "term": "메일 보안 프로토콜 (PGP · PEM · S/MIME)",
    "en": "PGP · PEM · S/MIME",
    "cat": "애플리케이션 보안",
    "tags": ["PGP=분산·신뢰의 웹", "PEM=중앙집중·복잡", "S/MIME=X.509·상용 표준", "기밀성·무결성·인증·부인방지", "MIME 확장"],
    "oneLiner": "메일 본문 자체를 암호화·서명하는 기술 / PGP=분산(신뢰의 웹)·쉬움, PEM=중앙집중·이론상 최강이나 복잡, S/MIME=X.509 인증서 기반 상용 표준",
    "blocks": [
      {
        "k": "def",
        "title": "왜 필요한가",
        "d": "SMTP는 <b>평문</b>이고 <b>발신자를 검증하지 않는다</b>. 전송 구간 암호화(STARTTLS)만으로는 <b>메일 서버에 저장된 내용</b>이나 <b>중간 서버</b>를 신뢰해야 한다. 그래서 <b>메일 내용 자체를 종단 간(End-to-End)으로 보호</b>하는 기술이 필요하다.<br>제공 기능: <b>기밀성(암호화) · 무결성 · 인증(전자서명) · 부인방지</b>."
      },
      {
        "k": "note",
        "title": "세 가지 비교 (표째로 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>PGP (Pretty Good Privacy)</span><div class='row'>필 짐머만 제작. <b>분산형 신뢰 모델</b> — 중앙 CA 없이 <b>사용자끼리 서로의 공개키에 서명</b>해 신뢰를 쌓는다(<b>신뢰의 웹, Web of Trust</b>).<br>➕ <b>구현·사용이 쉽고</b> 무료라 널리 퍼졌다</div></div><div class='cmp-item'><span class='cmp-label'>PEM (Privacy Enhanced Mail)</span><div class='row'>IETF 표준. <b>계층적 CA에 의존하는 중앙집중식</b> 구조.<br>➕ <b>보안성은 가장 높다</b>고 평가<br>➖ <b>구현이 복잡</b>해 실제로는 거의 쓰이지 않는다</div></div><div class='cmp-item'><span class='cmp-label'>S/MIME (Secure/MIME)</span><div class='row'>MIME에 보안 기능을 더한 것. <b>X.509 인증서</b>와 <b>CA</b>를 사용한다.<br>➕ <b>아웃룩 등 상용 메일 프로그램에 기본 내장</b>돼 기업에서 널리 사용</div></div></div>"
      },
      {
        "k": "warn",
        "title": "구분 포인트",
        "d": "<ul class='klist'><li><b>신뢰 모델</b>이 갈림점이다 — <b>PGP=분산(신뢰의 웹)</b> vs <b>PEM·S/MIME=중앙 CA</b></li><li><b>PEM은 '가장 안전하지만 복잡해 안 쓰인다'</b>가 정답 포인트</li><li><b>S/MIME은 X.509 인증서</b>를 쓴다는 점이 자주 나온다</li><li>이들은 <b>본문 보호</b>이고, <b>SPF·DKIM·DMARC는 발신 도메인 위조 차단</b>으로 역할이 다르다(혼동 주의)</li></ul>"
      }
    ],
    "finalLiner": "메일 본문 종단 간 보호(기밀성·무결성·인증·부인방지) / <b>PGP=분산·신뢰의 웹·쉬움</b> · <b>PEM=중앙집중 CA·최고 보안이나 복잡해 미사용</b> · <b>S/MIME=X.509 인증서·상용 표준</b> / 발신자 위조 차단은 <b>SPF·DKIM·DMARC</b>로 역할이 다름",
    "related": ["sendmail", "smtp", "mailattack"]
  },
  {
    "id": "sendmail",
    "term": "sendmail · 스팸 차단 · SpamAssassin",
    "en": "sendmail · Anti-Spam · SpamAssassin",
    "cat": "애플리케이션 보안",
    "tags": ["대표 MTA", "sendmail.cf 설정", "access=릴레이 제어", "aliases·newaliases", "SpamAssassin=점수 합산"],
    "oneLiner": "sendmail=대표적인 유닉스 MTA / 릴레이 제어는 /etc/mail/access, 별칭은 /etc/aliases / 스팸 차단=RBL·베이지안·그레이리스팅·SpamAssassin(점수 합산)",
    "blocks": [
      {
        "k": "def",
        "title": "sendmail — 정의 · 운영 모드",
        "d": "유닉스의 대표적인 <b>MTA(Mail Transfer Agent, 메일 전송 서버)</b>. 오래된 만큼 기능이 많지만 <b>설정이 복잡하고 과거 취약점이 많았다</b>.<b> 주요 실행 모드</b><ul class='klist'><li><b><code>-bd</code></b> — <b>데몬 모드</b>. 백그라운드에서 메일 <b>수신 대기</b>(가장 기본)</li><li><b><code>-q</code></b> — <b>큐 처리</b>. 전송 대기 중인 메일을 주기적으로 재시도(예: <code>-q30m</code>)</li><li><b><code>-bp</code></b> — <b>메일 큐 확인</b>(<code>mailq</code>와 동일)</li><li><b><code>-bt</code></b> — 주소 재작성 규칙 <b>테스트 모드</b></li></ul>보통 <code>sendmail -bd -q30m</code> 형태로 <b>수신 대기 + 30분마다 큐 처리</b>를 함께 띄운다."
      },
      {
        "k": "note",
        "title": "주요 설정·접근 파일",
        "d": "<ul class='klist'><li><b><code>/etc/mail/sendmail.cf</code></b> — 핵심 설정 파일(직접 편집이 어려워 <code>.mc</code>로 생성)</li><li><b><code>/etc/mail/access</code></b> — <b>접근·릴레이 제어의 핵심</b>. 도메인·IP별로 <b><code>RELAY</code>(중계 허용) · <code>OK</code>(수신 허용) · <code>REJECT</code>(거부) · <code>DISCARD</code>(조용히 폐기)</b>를 지정한다 → <b>오픈 릴레이를 막는 파일</b>. 수정 후 <code>makemap</code>으로 DB 갱신</li><li><b><code>/etc/aliases</code></b> — 메일 <b>별칭</b>(예: <code>admin</code> → 실제 담당자들). 수정 후 반드시 <b><code>newaliases</code></b> 실행</li><li><code>/etc/mail/local-host-names</code> — 이 서버가 받아줄 도메인 목록</li></ul>"
      },
      {
        "k": "safe",
        "title": "스팸 차단 방법",
        "d": "<ul class='klist'><li><b>릴레이 제한</b> — <code>access</code>로 <b>오픈 릴레이 차단</b>(가장 기본)</li><li><b>RBL/DNSBL</b> — 스팸 발송으로 등록된 <b>IP 블랙리스트를 실시간 조회</b>해 거부</li><li><b>발신자 인증</b> — <b>SPF·DKIM·DMARC</b>로 도메인 위조 메일 차단</li><li><b>내용 필터링</b> — <b>베이지안 필터</b> 등 통계 학습으로 스팸 문구 판별</li><li><b>그레이리스팅(Greylisting)</b> — 처음 보는 발신자의 메일을 <b>일단 임시 거부</b>하고, <b>정상 서버라면 재시도</b>하므로 그때 받아준다. <b>스팸 봇은 재시도하지 않는</b> 성질을 이용</li></ul>"
      },
      {
        "k": "note",
        "title": "SpamAssassin",
        "d": "대표적인 <b>오픈소스 스팸 필터</b>. 동작 방식이 특징적이다.<p class='on-key'><span class='lbl'>점수 합산 방식</span>하나의 규칙으로 판단하지 않고, <b>헤더·본문 규칙 · 베이지안 학습 · RBL 조회</b> 등 <b>수많은 검사에 각각 점수를 매겨 합산</b>한다. 그 <b>총점이 임계치를 넘으면 스팸</b>으로 판정 → 단일 조건보다 <b>오탐이 적고 유연</b>하다.</p>"
      }
    ],
    "finalLiner": "sendmail=대표 <b>MTA</b>, 모드 <b><code>-bd</code>(데몬)·<code>-q</code>(큐)·<code>-bp</code>(큐확인)·<code>-bt</code>(테스트)</b> / <b><code>/etc/mail/access</code>=릴레이 제어(RELAY·OK·REJECT·DISCARD)</b> · <b><code>/etc/aliases</code>+<code>newaliases</code></b> / 스팸=릴레이제한·<b>RBL</b>·SPF/DKIM/DMARC·베이지안·<b>그레이리스팅</b> / <b>SpamAssassin=규칙별 점수 합산</b>",
    "related": ["mailsec", "smtp", "mailattack"]
  },
  {
    "id": "websec",
    "term": "웹 서버 보안 (아파치 · 웹 로그 · WAF)",
    "en": "Apache Hardening · Web Log · WAF",
    "cat": "애플리케이션 보안",
    "tags": ["Options -Indexes", "ServerTokens Prod", "access_log·error_log", "CLF 형식", "WAF=7계층"],
    "oneLiner": "아파치 보안설정=디렉터리 리스팅 차단·버전 숨김·전용계정 실행 / 로그는 access_log·error_log(CLF) / 일반 방화벽은 80·443을 못 막으므로 WAF가 필요",
    "blocks": [
      {
        "k": "note",
        "title": "아파치 주요 보안 설정 (httpd.conf)",
        "d": "<ul class='klist'><li><b><code>Options -Indexes</code></b> — <b>디렉터리 리스팅 차단</b>. 인덱스 파일이 없을 때 <b>파일 목록이 그대로 노출</b>되는 것을 막는다(가장 대표적인 설정)</li><li><b><code>ServerTokens Prod</code> · <code>ServerSignature Off</code></b> — 응답 헤더·오류 페이지의 <b>웹서버 종류·버전 노출 차단</b>(정찰 방지)</li><li><b><code>Options -FollowSymLinks</code></b> — <b>심볼릭 링크를 따라가지 못하게</b> 해 외부 파일 접근 차단</li><li><b><code>AllowOverride None</code></b> — <code>.htaccess</code> 비활성화(성능·설정 우회 방지)</li><li><b>전용 계정으로 실행</b> — <code>User/Group</code>을 <b>nobody·apache 등 비특권 계정</b>으로. <b>root로 실행 금지</b></li><li><b>불필요한 모듈 제거</b>, <b><code>LimitRequestBody</code></b>로 업로드 크기 제한, 디렉터리별 접근 제어</li></ul>"
      },
      {
        "k": "note",
        "title": "웹 로그",
        "d": "<ul class='klist'><li><b><code>access_log</code></b> — <b>모든 접근 기록</b>(누가 무엇을 요청했고 결과가 무엇인지)</li><li><b><code>error_log</code></b> — 오류·경고 기록</li></ul><b>CLF(Common Log Format)</b> 구조:<pre>호스트(IP)  identd  사용자  [시간]  \"요청줄\"  상태코드  전송크기</pre><p class='on-key'><span class='lbl'>로그로 공격 찾기</span><b>404가 대량</b>이면 <b>스캐닝</b>, 요청줄에 <code>' OR 1=1</code>·<code>&lt;script&gt;</code>·<code>../</code>가 보이면 <b>SQL 인젝션·XSS·디렉터리 트래버설</b> 시도다. <b>상태코드와 요청줄</b>을 함께 보는 것이 핵심.</p>"
      },
      {
        "k": "safe",
        "title": "웹 방화벽 (WAF)",
        "d": "<b>왜 필요한가</b> — 일반 방화벽은 <b>3·4계층</b>이라 웹 서비스를 하려면 <b>80·443을 열어둘 수밖에 없다</b>. 그 열린 문으로 들어오는 <b>정상적인 HTTP 요청 안에</b> 공격이 숨어 있으면 못 막는다.<ul class='klist'><li><b>7계층에서 HTTP 요청·응답의 내용을 검사</b>해 <b>SQL 인젝션·XSS·파일 업로드·디렉터리 트래버설</b> 등 웹 공격을 차단</li><li>탐지 방식: <b>블랙리스트(시그니처 기반)</b> — 알려진 공격 패턴 차단 / <b>화이트리스트(포지티브)</b> — 허용된 형식만 통과(더 안전하나 설정 부담)</li><li>응답 검사로 <b>개인정보·오류 메시지 노출 차단</b>도 가능</li></ul>"
      }
    ],
    "finalLiner": "아파치=<b><code>Options -Indexes</code>(리스팅 차단)</b>·<b><code>ServerTokens Prod</code>(버전 숨김)</b>·<code>-FollowSymLinks</code>·<b>비특권 계정 실행</b> / 로그 <b><code>access_log</code>·<code>error_log</code></b>, <b>CLF</b>(IP·시간·요청·상태코드·크기), <b>404 대량=스캐닝</b> / <b>WAF=7계층에서 HTTP 내용 검사</b>(방화벽은 80·443을 못 막음)",
    "related": ["dns", "httpheader", "firewall"]
  },
  {
    "id": "dns",
    "term": "DNS 구조 · 보안 · DNSSEC",
    "en": "DNS · DNSSEC",
    "cat": "애플리케이션 보안",
    "tags": ["UDP 53 질의·TCP 53 존전송", "재귀 vs 반복 질의", "A·MX·CNAME·NS·PTR", "캐시 포이즈닝", "DNSSEC=서명(암호화 아님)"],
    "oneLiner": "도메인↔IP 변환(UDP 53 질의·TCP 53 존 전송) / 재귀 질의 vs 반복 질의 / 위협=캐시 포이즈닝·존 전송 유출·증폭 DDoS / DNSSEC=전자서명으로 위조 방지(암호화 아님)",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 계층 구조",
        "d": "<b>DNS(Domain Name System)</b> — 사람이 쓰는 <b>도메인 이름을 IP 주소로 변환</b>하는 분산 데이터베이스.<ul class='klist'><li>구조: <b>루트(.) → TLD(.com·.kr) → 2차 도메인 → 호스트</b>의 <b>계층(트리)</b></li><li>구성 요소: <b>리졸버</b>(질의하는 클라이언트 측) · <b>네임서버</b>(권한 있는 서버 / 캐싱 서버)</li><li>포트: <b>UDP 53 = 일반 질의</b>(빠르게), <b>TCP 53 = 존 전송·응답이 클 때</b></li></ul>"
      },
      {
        "k": "note",
        "title": "서비스 방식 · 주요 레코드",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>재귀 질의 (Recursive)</span><div class='row'>클라이언트가 로컬 DNS에게 “<b>끝까지 알아봐서 답만 줘</b>”라고 맡기는 방식.</div></div><div class='cmp-item'><span class='cmp-label'>반복 질의 (Iterative)</span><div class='row'>로컬 DNS가 <b>루트 → TLD → 권한 서버</b>로 <b>차례차례 직접 물어보는</b> 방식.</div></div></div><b>주요 레코드</b>: <b>A</b>(도메인→IPv4) · <b>AAAA</b>(IPv6) · <b>MX</b>(메일 서버) · <b>CNAME</b>(별칭) · <b>NS</b>(네임서버) · <b>PTR</b>(IP→도메인, 역방향) · SOA(존 정보)"
      },
      {
        "k": "warn",
        "title": "DNS 보안 위협",
        "d": "<ul class='klist'><li><b>DNS 스푸핑 · 캐시 포이즈닝</b> — <b>위조 응답을 진짜보다 먼저</b> 보내 캐시를 오염시킨다 → 사용자가 <b>정상 주소를 입력해도 피싱 사이트로</b> 간다. UDP라 응답 위조가 쉽다(<b>가장 대표적인 DNS 공격</b>)</li><li><b>존 전송(Zone Transfer) 취약</b> — 아무나 <b>AXFR</b>로 요청하면 <b>도메인 전체 목록</b>이 넘어가 <b>내부 서버 구조가 통째로 노출</b>된다 → 정찰의 노다지</li><li><b>DNS 증폭 DDoS</b> — 작은 질의에 <b>큰 응답</b>이 오는 성질 + 출발지 위조로 피해자를 폭격</li><li><b>DNS 터널링</b> — DNS 질의·응답에 <b>데이터를 숨겨</b> 방화벽을 우회해 유출·C2 통신</li></ul>"
      },
      {
        "k": "safe",
        "title": "DNSSEC · 대응",
        "d": "<b>DNSSEC(DNS Security Extensions)</b> — DNS 응답에 <b>전자서명</b>을 붙여, 받은 쪽이 <b>진짜 권한 서버가 보낸 것이고 변조되지 않았음을 검증</b>한다(루트부터 이어지는 <b>신뢰 체인</b>).<p class='on-key'><span class='lbl'>시험 함정</span><b>DNSSEC은 암호화가 아니다</b> — <b>무결성·출처 인증</b>만 제공하고 <b>기밀성은 제공하지 않는다</b>(내용은 그대로 보인다). 목적은 <b>캐시 포이즈닝 방지</b>.</p><b>그 밖의 대응</b>: <b>존 전송을 허용된 세컨더리 서버로만</b> 제한 · 재귀 질의를 <b>내부 사용자에게만</b> 허용(외부 개방 금지 → 증폭 DDoS 차단) · 최신 패치 · 질의 ID·포트 랜덤화."
      }
    ],
    "finalLiner": "DNS=도메인↔IP(<b>UDP 53 질의 · TCP 53 존전송</b>), 계층 루트→TLD→도메인 / <b>재귀=대신 끝까지</b> vs <b>반복=차례로 직접</b> / 레코드 <b>A·AAAA·MX·CNAME·NS·PTR</b> / 위협 <b>캐시 포이즈닝·존 전송 유출·증폭 DDoS·터널링</b> / <b>DNSSEC=전자서명으로 위조 방지, 암호화는 아님</b>",
    "related": ["websec", "netproto", "dos"]
  }
]
);
