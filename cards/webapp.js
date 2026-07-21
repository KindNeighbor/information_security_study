/* 애플리케이션·웹 보안 — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "oauth",
    "term": "OAuth 2.0",
    "en": "Open Authorization",
    "cat": "애플리케이션 보안",
    "tags": [
      "인가(위임)≠인증",
      "Access·Refresh 토큰",
      "Authorization Code",
      "4주체",
      "OIDC=인증"
    ],
    "oneLiner": "비밀번호를 주지 않고 제3자 앱에 제한된 권한만 위임하는 인가 프로토콜 / 인증(OIDC)과 구분 / Access·Refresh 토큰",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "<b>OAuth = Open Authorization(개방형 인가)</b>. 사용자가 자신의 <b>비밀번호를 제3자 앱에 넘기지 않고</b>, 특정 자원에 대한 <b>제한된 권한만 위임</b>하도록 해 주는 표준이다. 예를 들어 어떤 앱이 내 구글 사진에 접근할 때, 그 앱은 내 구글 <b>비밀번호를 전혀 모른 채</b> 발급받은 <b>토큰</b>으로만 접근한다."
      },
      {
        "k": "warn",
        "title": "인가 ≠ 인증 (최대 함정)",
        "d": "OAuth는 <b>'무엇을 할 수 있는지(권한)'를 넘겨주는 인가(Authorization)</b> 프로토콜이지, <b>'네가 누구인지 확인하는 인증(Authentication)'이 아니다.</b> 로그인처럼 <b>신원 확인</b>까지 하려면 OAuth 위에 얹은 <b>OpenID Connect(OIDC)</b>를 쓴다.<p class='on-key'><span class='lbl'>단골 함정</span>'OAuth는 인증 프로토콜이다' → <b>❌ 인가</b>. 인증이 필요하면 <b>OIDC</b>. OIDC는 인가서버가 <b>ID 토큰</b>을 추가로 발급해 신원을 증명한다.</p>"
      },
      {
        "k": "note",
        "title": "4주체 (역할 구분)",
        "d": "누가 무엇을 하는지 넷으로 나눈다.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>자원 소유자 (Resource Owner)</span><div class='row'>권한을 가진 <b>사용자 본인</b>.</div></div><div class='cmp-item'><span class='cmp-label'>클라이언트 (Client)</span><div class='row'>권한을 <b>위임받으려는 제3자 앱</b>.</div></div><div class='cmp-item'><span class='cmp-label'>인가 서버 (Authorization Server)</span><div class='row'>사용자를 확인하고 <b>토큰을 발급</b>(예: 구글 계정 서버).</div></div><div class='cmp-item'><span class='cmp-label'>자원 서버 (Resource Server)</span><div class='row'>실제 자원을 가진 서버. <b>토큰을 검증</b>하고 자원을 내준다(예: 구글 사진 API).</div></div></div>"
      },
      {
        "k": "note",
        "title": "권한 부여 흐름 — Authorization Code (대표·가장 안전)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>① 인가 요청</div><div class='es-note'>앱이 사용자를 인가 서버로 보내 로그인·동의를 받음.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>② 인가 코드</div><div class='es-note'>동의하면 인가 서버가 임시 Authorization Code 발급.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>③ 토큰 교환</div><div class='es-note'>앱이 뒤에서 그 코드를 Access Token으로 교환.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>④ 자원 접근</div><div class='es-note'>Access Token으로 자원 서버에 접근.</div></div></div><p class='on-key'><span class='lbl'>참고</span>코드를 한 번 거치므로 토큰이 브라우저에 노출되지 않는다. 구식 <b>Implicit</b> 방식은 토큰을 곧바로 노출해 취약 → 폐기 추세. 그 외 Client Credentials(서버 간)·Resource Owner Password(비권장)도 있다.</p>"
      },
      {
        "k": "note",
        "title": "토큰 2종",
        "d": "<ul class='klist'><li><b>Access Token(액세스 토큰)</b> — 자원 접근용 열쇠. <b>수명이 짧다</b>(탈취돼도 피해 최소화).</li><li><b>Refresh Token(리프레시 토큰)</b> — Access Token이 만료되면 <b>다시 발급받는</b> 재발급용. 수명이 길어 <b>안전하게 보관</b>해야 한다.</li></ul>"
      },
      {
        "k": "safe",
        "title": "보안 주의점",
        "d": "<b>redirect_uri</b>(응답 받을 주소)를 정확히 <b>검증</b>해 열린 리다이렉트로 코드·토큰이 새는 것을 막는다. <b>state 파라미터</b>로 <b>CSRF</b>를 방지하고, 요청 권한은 꼭 필요한 <b>scope</b>만 최소로. 최신 권장은 <b>Authorization Code + PKCE</b> 조합, 모든 통신은 <b>HTTPS</b>."
      }
    ],
    "finalLiner": "OAuth 2.0 = 비밀번호 없이 <b>제한된 권한만 위임하는 인가</b>(≠인증, 인증은 <b>OIDC</b>) / 4주체(소유자·클라이언트·인가서버·자원서버) / <b>Authorization Code</b>로 Access·Refresh 토큰",
    "related": [
      "kerberos",
      "winauth"
    ]
  }
]
);
