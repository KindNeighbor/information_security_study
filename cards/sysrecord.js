/* 레지스트리·이벤트 로그 — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "registry",
    "term": "윈도우 레지스트리",
    "en": "Windows Registry",
    "cat": "시스템 보안",
    "tags": [
      "루트키 5개",
      "HKLM/HKCU",
      "하이브(Hive)",
      "Run 키 지속성",
      "regedit",
      "포렌식 아티팩트"
    ],
    "oneLiner": "윈도우 설정의 중앙 계층형 DB / 루트키 5개(HKLM·HKCU…) / 하이브 파일(SAM·SECURITY…) / Run 키=악성 지속성·포렌식 흔적",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "윈도우의 <b>하드웨어·운영체제·설치된 프로그램·사용자별 설정</b>을 한곳에 모아 둔 <b>계층형(트리) 중앙 데이터베이스</b>. 옛날 여기저기 흩어져 있던 <code>.ini</code> 설정 파일들을 대체했다. 구조는 <b>키(Key) → 서브키(Subkey) → 값(Value)</b>이며, 값은 <b>이름·데이터·자료형</b>(<code>REG_SZ</code> 문자열, <code>REG_DWORD</code> 숫자 등)으로 이뤄진다. 편집 도구는 <code>regedit</code>, 명령줄은 <code>reg query/add/delete</code>."
      },
      {
        "k": "note",
        "title": "최상위 루트 키 5개 (시험 단골)",
        "d": "윈도우가 정한 최상위 키는 5개다.<ul class='klist'><li><b>HKEY_LOCAL_MACHINE (HKLM)</b> — <b>컴퓨터 전체</b> 설정(하드웨어·설치된 SW·SAM·SECURITY·SYSTEM). 모든 사용자 공통.</li><li><b>HKEY_CURRENT_USER (HKCU)</b> — <b>지금 로그인한 사용자</b>의 개인 설정.</li><li><b>HKEY_USERS (HKU)</b> — <b>모든 사용자</b> 프로필 설정의 모음(HKCU는 그중 현재 사용자 부분).</li><li><b>HKEY_CLASSES_ROOT (HKCR)</b> — 파일 확장자 연결·COM 등록 정보.</li><li><b>HKEY_CURRENT_CONFIG (HKCC)</b> — 현재 하드웨어 프로필.</li></ul><p class='on-key'><span class='lbl'>시험 포인트</span>루트키 <b>5개</b>의 이름과 역할, 특히 <b>HKLM ↔ HKCU</b> 구분이 그대로 출제된다.</p>"
      },
      {
        "k": "note",
        "title": "HKLM vs HKCU (적용 범위 구분)",
        "d": "둘 다 설정을 담지만 <b>적용 범위</b>가 다르다.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>HKLM</span><div class='row'>컴퓨터 <b>전체</b>에 적용 — 모든 사용자 공통.</div><div class='row'>수정에 <b>관리자 권한</b>이 필요.</div></div><div class='cmp-item'><span class='cmp-label'>HKCU</span><div class='row'><b>현재 로그인한 사용자</b>에게만 적용.</div><div class='row'>그 사용자 권한으로 수정 가능.</div></div></div>"
      },
      {
        "k": "note",
        "title": "하이브(Hive) — 디스크에 저장되는 파일",
        "d": "레지스트리는 메모리에만 있는 게 아니라 <b>하이브(Hive)</b>라는 파일로 디스크에 저장된다.<ul class='klist'><li><b>시스템 하이브</b> — <code>C:\\Windows\\System32\\config\\</code> 폴더 안의 <b>SAM · SECURITY · SOFTWARE · SYSTEM</b>.</li><li><b>사용자 하이브</b> — 각 사용자 폴더의 <code>NTUSER.DAT</code>(그 사용자의 HKCU 내용).</li></ul><p class='on-key'><span class='lbl'>연결</span><b>SAM·SECURITY</b> 하이브에 계정 정보·비밀번호 해시가 들어 있어, 이게 자격증명 탈취의 표적이다(윈도우 인증 체계 카드).</p>"
      },
      {
        "k": "warn",
        "title": "보안 위협 — 지속성·자격증명 탈취",
        "d": "<b>① 지속성(Persistence)</b> — 악성코드가 재부팅 후에도 자동 실행되려고 <b>자동 실행 키</b>에 자신을 등록한다. 대표 위치:<pre>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nHKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</pre>같은 자리의 <code>RunOnce</code>도 같은 용도. <b>② 자격증명 탈취</b> — <code>SAM</code>·<code>SECURITY</code> 하이브에서 계정 해시를 덤프해 간다.<p class='on-key'><span class='lbl'>단골</span>'악성코드가 부팅 시 자동 실행되게 하는 대표 레지스트리 위치는?' → <b>Run 키</b>.</p>"
      },
      {
        "k": "note",
        "title": "포렌식 — 사용자 행위 흔적의 보고",
        "d": "레지스트리는 <b>사용자 행위 흔적이 잔뜩 남는 곳</b>이라 디지털 포렌식·침해사고 분석의 핵심 아티팩트다. 최근 실행한 프로그램·문서(<b>UserAssist·RecentDocs·MRU</b>), <b>USB 연결 흔적</b>(USBSTOR), 자동 실행 항목, 시각·네트워크 정보 등이 남는다. 분석 도구: <b>RegRipper</b>, Registry Explorer."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "<b>최소 권한</b> — HKLM 등 시스템 영역 수정은 관리자만 가능하게. <b>자동 실행 감시</b> — Sysinternals <b>Autoruns</b>로 Run·서비스 등 자동 실행 지점을 점검, EDR로 Run 키 변경을 탐지. <b>변경 감사</b> — 중요 키에 감사(SACL)를 걸고 정기 백업."
      }
    ],
    "finalLiner": "레지스트리 = 윈도우 설정 중앙 계층 DB / 루트키 <b>HKLM·HKCU·HKU·HKCR·HKCC</b> / 하이브(SAM·SECURITY·SOFTWARE·SYSTEM, NTUSER.DAT) / <b>Run 키=악성 지속성</b>·포렌식 흔적",
    "related": [
      "winauth",
      "process",
      "vss"
    ]
  },
  {
    "id": "eventlog",
    "term": "윈도우 이벤트 로그",
    "en": "Windows Event Log",
    "cat": "시스템 보안",
    "tags": [
      "응용·보안·시스템",
      "4624/4625",
      "1102=로그삭제",
      "Logon Type",
      "evtx",
      "이벤트 뷰어"
    ],
    "oneLiner": "윈도우 활동을 시간순 기록 / 종류: 응용·보안·시스템 / 핵심 ID 4624·4625·1102(로그삭제) / 침해분석·포렌식 1차자료",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "윈도우에서 일어나는 <b>활동을 시간순으로 기록</b>하는 로그. 로그온·프로그램 오류·서비스 시작·정책 변경 등이 남아, <b>침해사고 분석·감사(audit)의 1차 자료</b>가 된다. 확인 도구는 <b>이벤트 뷰어(<code>eventvwr</code>)</b>, 명령줄은 <code>wevtutil</code>·PowerShell <code>Get-WinEvent</code>."
      },
      {
        "k": "note",
        "title": "로그 종류 (기본 3종 — 시험 필수)",
        "d": "기본 3종에 현대 윈도우가 2종을 더한다.<ul class='klist'><li><b>응용 프로그램(Application)</b> — 각 프로그램이 남기는 이벤트.</li><li><b>보안(Security)</b> — 로그온·권한·개체 접근 등 <b>감사 기록</b>. 보안의 핵심 로그.</li><li><b>시스템(System)</b> — OS 구성요소·드라이버·서비스 이벤트.</li><li><b>설치(Setup)</b> — 설치·업데이트 관련.</li><li><b>전달된 이벤트(Forwarded Events)</b> — 다른 PC에서 수집해 온 로그.</li></ul><p class='on-key'><span class='lbl'>시험 포인트</span>기본 <b>3종(응용·보안·시스템)</b>은 반드시 암기. 그중 <b>보안 로그</b>가 인증·침해 분석의 핵심.</p>"
      },
      {
        "k": "note",
        "title": "파일 위치·항목 구성",
        "d": "저장 형식은 옛날 <code>.evt</code> → 현재 <b><code>.evtx</code></b>이며, 위치는 <code>C:\\Windows\\System32\\winevt\\Logs\\</code>다. 각 이벤트 항목의 구성:<ul class='klist'><li><b>날짜·시간</b></li><li><b>원본(Source)</b> — 이벤트를 남긴 구성요소.</li><li><b>이벤트 ID</b> — 이벤트 종류를 식별하는 고유 번호.</li><li><b>수준(Level)</b> — 정보·경고·오류·중요.</li><li><b>사용자·컴퓨터</b></li></ul>"
      },
      {
        "k": "note",
        "title": "주요 보안 Event ID (전부 외울 필요 없음)",
        "d": "이벤트 ID는 <b>다 외우지 않아도 된다.</b> 아래 <b>핵심 3개</b>만 확실히 하고, 나머지는 '이런 게 있다'는 수준으로 눈에만 익히면 충분하다.<ul class='klist safe-rail'><li><code>4624</code> 로그온 <b>성공</b> · <code>4625</code> 로그온 <b>실패</b> — 비정상 로그인·무차별 대입 탐지의 기본.</li><li><code>1102</code> <b>보안 로그 삭제</b> — 안티포렌식의 대표 신호.</li></ul>참고(여유 있을 때 눈에만):<ul class='klist'><li><code>4634</code>·<code>4647</code> 로그오프 · <code>4672</code> 특수 권한 로그온</li><li><code>4720</code> 계정 생성 · <code>4726</code> 계정 삭제</li><li><code>4688</code> 새 프로세스 · <code>7045</code> 서비스 설치</li><li><code>6005</code>·<code>6006</code> 로그 서비스 시작/종료 · <code>1074</code> 시스템 종료</li></ul>"
      },
      {
        "k": "note",
        "title": "로그온 유형 (Logon Type)",
        "d": "같은 로그온이라도 <b>어떤 경로로</b> 들어왔는지는 <b>Logon Type</b>으로 구분한다(4624/4625에 함께 기록).<ul class='klist'><li><b>Type 2</b> — 대화형(콘솔에서 직접 로그인).</li><li><b>Type 3</b> — 네트워크(파일 공유 등).</li><li><b>Type 10</b> — 원격 데스크톱(RDP).</li></ul>"
      },
      {
        "k": "warn",
        "title": "안티포렌식 — 로그 삭제 (1102)",
        "d": "공격자는 침입 흔적을 지우려고 <b>보안 로그를 삭제</b>한다(<code>wevtutil cl Security</code>, 이벤트 뷰어의 '로그 지우기'). 하지만 그 <b>삭제 행위 자체가 <code>1102</code> 이벤트</b>로 남는다. 정상 운영 중 1102가 보이면 <b>강한 침해 징후</b>. '보안 감사 로그를 정리하면 남는 이벤트 ID는? → <b>1102</b>'가 전형적 출제."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "<b>감사 정책(Audit Policy)</b>을 켜야 로그온·개체 접근 등이 실제로 기록된다(안 켜면 아예 안 남음). 로그를 <b>중앙 수집</b>(SIEM·Windows 이벤트 전달 WEF)해 원본이 지워져도 사본을 확보하고, 로그 <b>크기·보존 기간</b>을 넉넉히, 접근 권한을 제한한다."
      }
    ],
    "finalLiner": "이벤트 로그 = 시간순 활동 기록 / 종류 <b>응용·보안·시스템</b>(+설치·전달) / <code>.evtx</code> @ <code>winevt\\Logs</code> / 핵심 ID <b>4624·4625·1102(로그삭제)</b> / 삭제 대비 중앙 수집(SIEM)",
    "related": [
      "registry",
      "process",
      "winauth"
    ]
  }
]
);
