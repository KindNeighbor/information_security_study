/* 공유·프로토콜 (SMB 계열) — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "netbios",
    "term": "NetBIOS",
    "en": "Network Basic Input/Output System",
    "cat": "네트워크 보안",
    "chain": 1,
    "chainNote": "LAN 내 이름 통신",
    "tags": [
      "137",
      "138",
      "139",
      "널세션 표적",
      "레거시"
    ],
    "oneLiner": "LAN 내 이름 기반 통신 / 포트 137·138·139(+445) / 널세션 정보유출 / 안 쓰면 차단",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "같은 근거리망(LAN) 안에서 컴퓨터를 <b>IP가 아닌 이름</b>(예: <code>DESKTOP-ABC123</code>)으로 찾고 통신하게 해주는 옛 윈도우 기술. 탐색기 '네트워크'에 뜨는 PC 이름들이 이거."
      },
      {
        "k": "note",
        "title": "포트 (세트로 암기)",
        "d": "<ul class='klist'><li><code>137</code> — 이름 서비스(Name Service).</li><li><code>138</code> — 데이터그램(Datagram).</li><li><code>139</code> — 세션 서비스(Session Service).</li></ul>여기에 <code>445</code>(SMB over TCP)까지 묶어서 기억한다. 요즘은 139 대신 <b>445</b>로 넘어갔다."
      },
      {
        "k": "warn",
        "title": "취약점",
        "d": "보안 개념이 거의 없던 시절 기술. 외부 노출 시 <b>널 세션(Null Session)</b>으로 인증 없이 접속해 사용자 목록·공유·정책 정보를 긁어감(정찰 단계 단골). 도구: <code>nbtstat</code>, nbtscan, enum4linux."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "쓸 거 아니면 막아라. 외부로 향하는 <code>137~139</code>·<code>445</code> 차단, 안 쓰면 NetBIOS over TCP/IP 비활성화. '안 쓰는데 켜진 서비스'를 줄이는 <b>공격 표면 최소화(하드닝)</b>의 교과서적 예시."
      },
      {
        "k": "note",
        "title": "왜 아직 쓰이나",
        "d": "기술이 좋아서가 아니라 <b>레거시 호환성</b> 때문. 공장·병원·관공서의 구형 시스템이 아직 의존. 추세는 확실히 퇴출 → 시험에선 대개 '차단·비활성화 대상'으로 출제."
      }
    ],
    "finalLiner": "NetBIOS = LAN 이름 통신 / 137·138·139(+445) / 널세션으로 정보 유출 / <b>안 쓰면 꺼야 할 1순위</b>",
    "related": [
      "smb",
      "ipc"
    ]
  },
  {
    "id": "smb",
    "term": "SMB / CIFS",
    "en": "Server Message Block",
    "cat": "네트워크 보안",
    "chain": 2,
    "chainNote": "파일공유 프로토콜",
    "tags": [
      "445",
      "CIFS=SMBv1",
      "EternalBlue",
      "워너크라이"
    ],
    "oneLiner": "윈도우 파일공유 프로토콜 / CIFS=SMBv1(취약) / SMBv2·v3는 암호화·무결성 / 포트 445",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "윈도우 파일·프린터 공유 프로토콜. <b>CIFS(Common Internet File System)는 SMB의 옛 이름 = SMBv1 계열.</b> IPC$·널세션도 전부 이 위에서 돌아감. 포트 <code>445</code>(+ 139)."
      },
      {
        "k": "note",
        "title": "NetBIOS와의 관계 — '업그레이드' 아님 (함정 주의)",
        "d": "옛날에는 <b>SMB가 NetBIOS 위에 얹혀서</b> 돌아, NetBIOS 포트 <code>137</code>·<code>138</code>·<code>139</code>를 세트로 함께 썼다. 이후 SMB가 <code>445</code>에서 <b>직접(direct hosting)</b> 동작하게 되면서 NetBIOS 의존을 끊었다. 하지만 이건 버전 업그레이드가 아니라, 둘은 <b>역할이 다른 별개의 두 계층</b>이라는 게 핵심이다.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>NetBIOS · 하부</span><div class='row'>같은 랜(LAN) 안에서 <b>컴퓨터 이름을 찾고 세션을 연결</b>해 주는 도우미 역할.</div></div><div class='cmp-item'><span class='cmp-label'>SMB · 응용</span><div class='row'>그 연결 위에서 <b>실제 파일·프린터를 공유</b>하는 역할.</div></div></div><p class='on-key'><span class='lbl'>시험 함정</span>'SMB는 NetBIOS의 개선판인가?' → <b>❌ 아니다.</b> 위에 얹혀 있다가 <code>445</code>로 독립한 <b>계층 관계</b>일 뿐, 버전 업그레이드가 아니다.</p>"
      },
      {
        "k": "warn",
        "title": "SMBv1(CIFS)의 취약점 — 워너크라이",
        "d": "SMBv1의 <b>EternalBlue</b> 취약점(NSA 유출)으로 <b>인증 없이 원격 코드 실행</b> 가능. 2017 <b>워너크라이</b> 랜섬웨어가 이걸 써서 같은 망으로 자가 전파(웜)했던 대형 사고. 시험엔 EternalBlue·WannaCry·SMBv1이 세트로 출제."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "<b>SMBv1(CIFS)은 끄고 SMBv2/v3를 써라.</b> 특히 SMBv3는 전송 암호화·무결성 검증이 들어가 보안이 크게 개선됨. '더 새 기술이라 안전'이 아니라 <b>버전으로 판단</b>하는 게 핵심."
      },
      {
        "k": "note",
        "title": "버전 진화 관점",
        "d": "SMB는 버전이 올라가며 옛날엔 없던 <b>인증·무결성·암호화</b>를 채워 왔다.<div class='evo'><div class='evo-step'><div class='es-name'>SMBv1 (CIFS)</div><div class='es-note'>가장 오래된 버전. 암호화·무결성이 <b>없다</b> → <b>EternalBlue</b> 취약점, 워너크라이의 무대.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>SMBv2</div><div class='es-note'>프로토콜을 정리하고 효율을 개선.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>SMBv3</div><div class='es-note'><b>전송 암호화·무결성 검증</b>이 들어가 보안이 크게 강화.</div></div></div><p class='on-key'><span class='lbl'>주의</span><b>NetBIOS→SMB</b>는 이런 '버전 업'이 아니라 계층 의존이 끊긴 것 — 위 'NetBIOS와의 관계' 블록 참고.</p>"
      }
    ],
    "finalLiner": "CIFS = SMBv1(취약, 비활성화 대상) · EternalBlue/워너크라이 / <b>SMBv2·v3 = 암호화·무결성 적용판</b> / 포트 445",
    "related": [
      "netbios",
      "ipc"
    ]
  },
  {
    "id": "ipc",
    "term": "IPC$ · 널 세션",
    "en": "Inter-Process Communication Share",
    "cat": "시스템 보안",
    "chain": 3,
    "chainNote": "빈 자격증명 접속",
    "tags": [
      "숨김 공유",
      "Null Session",
      "RestrictAnonymous"
    ],
    "oneLiner": "윈도우 기본 숨김 관리 공유 / 널세션이 빈 자격증명으로 접속 / RestrictAnonymous로 차단",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "윈도우가 자동 생성하는 <b>숨겨진 관리용 공유</b>(끝의 <code>$</code>=숨김). 파일 공유가 아니라 컴퓨터 간 <b>프로세스 통신</b>(원격 서비스 제어·인증·이름 조회)을 위한 통로."
      },
      {
        "k": "warn",
        "title": "널 세션(Null Session)",
        "d": "옛 윈도우는 IPC$ 접속 시 <b>아이디·비밀번호를 비워도 허용</b>했음. 이 빈 연결을 발판으로 사용자 계정·공유·정책 정보를 열람(enumeration).<pre>net use \\\\대상IP\\IPC$ \"\" /user:\"\"</pre>"
      },
      {
        "k": "note",
        "title": "공격 사슬",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>① 포트 개방</div><div class='es-note'>SMB 포트(<code>139</code>·<code>445</code>)가 열려 있음.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>② IPC$ 접속</div><div class='es-note'>숨김 공유 <code>IPC$</code>에 연결.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>③ 널세션</div><div class='es-note'>빈 자격증명으로 <b>널세션 성립</b>.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>④ 정보 수집</div><div class='es-note'>계정·공유·정책 등 시스템 정보 열람.</div></div></div><p class='on-key'><span class='lbl'>시험</span>'널세션이 이용하는 기본 공유는?' → <b>IPC$</b> (양방향으로 출제).</p>"
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "레지스트리 <code>RestrictAnonymous</code>(또는 RestrictAnonymousSAM) 값을 올려 익명 접속 제한. 근본적으론 <code>139</code>·<code>445</code>를 외부에 노출하지 않기. IPC$ 자체는 정상 기능 — 문제는 '인증 없이 통하던 것'."
      }
    ],
    "finalLiner": "IPC$ = 윈도우 기본 숨김 관리 공유 / <b>널세션</b>이 빈 자격증명으로 접속 / <b>RestrictAnonymous</b>로 차단",
    "related": [
      "smb",
      "netbios",
      "adminshares"
    ]
  },
  {
    "id": "adminshares",
    "term": "관리 목적 기본 공유",
    "en": "Administrative / Hidden Shares",
    "cat": "시스템 보안",
    "tags": [
      "$=숨김공유",
      "C$",
      "ADMIN$",
      "IPC$",
      "PsExec 측면이동",
      "net share"
    ],
    "oneLiner": "윈도우가 자동 생성하는 숨김 관리 공유(C$·ADMIN$·IPC$) / 관리자 권한 필요 / 탈취 계정으로 측면이동에 악용",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "윈도우 설치 시 <b>자동 생성</b>되는 숨겨진 관리용 공유. 이름 끝의 <code>$</code>=탐색기에 안 보이는 <b>숨김 공유</b>. 원격 관리 편의를 위해 존재. 현재 목록은 <code>net share</code>로 확인."
      },
      {
        "k": "note",
        "title": "종류 (세트로 암기)",
        "d": "<ul class='klist'><li><code>C$</code> — 각 드라이브 루트(C$·D$…)에 대한 관리 공유.</li><li><code>ADMIN$</code> — <code>C:\\Windows</code>(%SystemRoot%) 폴더. 원격 관리용.</li><li><code>IPC$</code> — 프로세스 간 통신 통로(옛 <b>널세션</b>의 발판).</li><li><code>PRINT$</code> — 프린터 드라이버 공유.</li></ul><p class='on-key'><span class='lbl'>출제 단골</span>앞의 셋 <b>C$·ADMIN$·IPC$</b>가 시험에 자주 나온다.</p>"
      },
      {
        "k": "warn",
        "title": "악용 — 측면 이동(lateral movement)",
        "d": "공유 자체는 <b>관리자만 접근</b>하는 정상 기능이다. 문제는 <b>관리자 자격증명을 탈취한 뒤</b>부터다.<div class='evo'><div class='evo-step'><div class='es-name'>① 복사</div><div class='es-note'><b>PsExec</b>류가 <code>ADMIN$</code>에 서비스 바이너리를 복사.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>② 원격 실행</div><div class='es-note'><code>IPC$</code>·명명된 파이프로 그 서비스를 원격 실행.</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>③ 전파</div><div class='es-note'>같은 방식으로 <b>옆 PC로 번짐</b>(측면 이동).</div></div></div>참고로 <code>IPC$</code>는 옛날 <b>널세션</b>으로 인증 전에 정보까지 흘렸다."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "근본은 <b>관리자 자격증명 보호</b>: <b>LAPS(Local Administrator Password Solution)</b>로 로컬관리자 암호를 PC마다 다르게(패스더해시 대비). 망 분리·<code>445</code> 외부 차단. 필요 시 레지스트리 <code>AutoShareWks</code>/<code>AutoShareServer</code>=0으로 자동 공유 끄기(단 원격 관리도구 영향). 널세션은 <code>RestrictAnonymous</code>."
      }
    ],
    "finalLiner": "기본(관리) 공유 = 자동 생성 숨김 공유 <b>C$·ADMIN$·IPC$</b> / 관리자만 접근 / <b>탈취 계정으로 PsExec 측면이동</b>에 악용 / IPC$는 널세션",
    "related": [
      "ipc",
      "smb"
    ]
  }
]
);
