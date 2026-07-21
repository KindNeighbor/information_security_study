# 윈도우 인증·로그온

> 자동 생성 — 원본은 `cards/winauth.js`. 직접 수정 금지.

## 윈도우 대화형 로그온 (winlogon·GINA) — winlogon / GINA / Credential Provider

`시스템 보안`  `winlogon` `SAS=Ctrl+Alt+Del` `GINA(구식)` `Credential Provider(신식)` `신뢰 경로`

**한줄:** 로그온 총괄=winlogon / 자격증명 수집 UI: 구식 GINA→신식 Credential Provider / Ctrl+Alt+Del=신뢰 경로

**핵심 — 처리 흐름**

사용자 로그인은 다음 순서로 처리된다.
- **① Ctrl+Alt+Del** — **SAS** — 로그인 화면을 부르는 신뢰된 신호.

- **② winlogon.exe** — 로그온 과정 **총괄**.

- **③ 자격증명 수집 UI** — **GINA** 또는 **Credential Provider**가 아이디·비번을 입력받음.

- **④ lsass.exe (LSA)** — 받은 자격증명을 **실제 검증**(NTLM·Kerberos).

- **⑤ 액세스 토큰** — 검증 성공 시 사용자 토큰 **생성**.

- **⑥ SRM 판정** — 이후 모든 접근을 그 토큰으로 **최종 판정**.

**[포인트]** '누가 **UI를 띄워 수집**하고(③ GINA/CP), 누가 **실제로 검증**하나(④ LSA)'를 구분하는 게 핵심.

**프로세스별 역할 (표로 정리)**

**winlogon.exe**=로그온·로그오프 세션 **총괄**(항상 이 이름, 구·신 공통) · **SAS(Secure Attention Sequence)=Ctrl+Alt+Del**=로그인 화면 호출 신호 · **GINA/Credential Provider**=아이디·비번을 **입력받는 UI** · **lsass(LSA)**=받은 자격증명을 **실제 검증**·토큰 생성. UI(수집)와 LSA(검증)는 **다른 역할**.

**구식 vs 신식 (교체 — 시험 단골)**

구식 · GINA**GINA(Graphical Identification and Authentication)** — 파일 이름은 `msgina.dll`, 쓰이던 시기는 **Windows NT부터 XP·Server 2003까지**.
winlogon이 이 DLL을 불러와 로그인 화면(자격증명 입력 UI)을 띄운다. 그래서 스마트카드·지문 같은 다른 인증 방식을 넣으려면 이 **GINA DLL 자체를 통째로 바꿔야** 했다.
**단점** — 로그인 UI 전체를 DLL 하나가 책임지는 구조라, **이 GINA 하나만 잘못돼도 로그온 과정 전체가 깨진다.** 또 여러 인증 수단을 동시에 쓰기 어렵고, 그만큼 보안·안정성이 취약했다.

▼ Windows Vista에서 대체됨 ▼
신식 · Credential Provider**Credential Provider(자격증명 공급자)** — 쓰이는 시기는 **Windows Vista 이후부터 현재까지**.
**모듈형** 구조라, 비밀번호·PIN·지문·얼굴 인식 같은 인증 수단이 **각각 별도의 모듈**로 나뉘어 있고 **여러 개가 동시에 공존**한다. 그래서 하나에 문제가 생겨도 나머지 인증은 그대로 동작한다.
**장점** — 구식보다 안전하고 유연하며, 새로운 인증 수단을 덧붙이기(확장하기)도 쉽다.

**[시험 포인트]** **'GINA는 Windows Vista에서 Credential Provider로 대체됐다.'** — 무엇이 무엇으로, 어느 버전에서 바뀌었는지가 그대로 출제된다.

**Ctrl+Alt+Del을 왜? — 신뢰 경로(Trusted Path)**

**SAS(Ctrl+Alt+Del)**는 **winlogon만** 가로챌 수 있는 특수 신호. 악성코드가 **가짜 로그인 화면**을 띄워 비번을 훔치는 **로그온 스푸핑**을 막아, '지금 이 화면은 진짜 OS'임을 보장하는 **신뢰 경로**. '로그인 시 Ctrl+Alt+Del을 누르는 이유는?'이 전형적 출제.

> **시험 한줄정리:** winlogon=로그온 총괄 / UI 수집: **구식 GINA→신식 Credential Provider(Vista~)** / 검증=lsass(LSA) / **Ctrl+Alt+Del(SAS)=신뢰 경로**(스푸핑 방지)

_관련 개념: winauth · process · srm_

---

## 윈도우 인증 체계 — SAM / LSA / LM·NTLM·Kerberos

`시스템 보안`  `SAM` `lsass=LSA` `LM→NTLM→Kerberos` `Pass-the-Hash`

**한줄:** 로컬=SAM에 해시 저장 / 처리=lsass(LSA) / 프로토콜 진화 LM→NTLM→Kerberos / 도메인=AD·Kerberos

**정의**

윈도우가 사용자를 확인하는 체계. 자격증명을 처리하는 핵심 프로세스가 `lsass.exe`=**LSA(Local Security Authority, 로컬 보안 인증)**. '정상 프로세스' 카드의 lsass가 바로 이 인증 담당이라 자격증명 탈취 표적.

**로컬 vs 도메인 (저장 위치)**

계정을 어디에 저장하고 무엇으로 인증하는지가 다르다.
- **로컬 계정**: 비밀번호 해시를 그 PC의 **SAM(Security Account Manager, 보안 계정 관리자)** 파일에 저장.
경로: `C:\Windows\System32\config\SAM`

- **도메인 계정**: **AD(Active Directory)**가 계정을 **중앙에서** 관리.
인증은 **Kerberos**로 처리.

**인증 프로토콜 진화 (세트 암기)**

인증 프로토콜은 세대가 뒤로 갈수록 안전해진다.
- **LM** — LAN Manager. **아주 취약**(대소문자 무시·짧은 해시). 구식.

- **NTLM** — NT LAN Manager. **챌린지-리스폰스** 방식.

- **Kerberos** — 도메인 **표준**. 티켓 기반.

**[포인트]** '세대(버전)로 안전성을 판단'하는 논리는 SMB 카드와 같다.

**자격증명 탈취**

**lsass 메모리**에서 해시·때론 평문을 추출(**mimikatz**), **SAM 덤프**. 해시만 있어도 **Pass-the-Hash**로 로그인 가능(NTLM 카드 참고). 관리자 해시가 PC마다 같으면 옆 PC로 번짐(관리 공유 카드의 측면이동).

**방어**

**LM 해시 저장 비활성화**, 최신 프로토콜(Kerberos) 사용, **Credential Guard**로 lsass 격리, **LAPS(Local Administrator Password Solution)**로 로컬관리자 암호 분산. 강한 암호·다단계 인증.

> **시험 한줄정리:** 로컬=**SAM**에 해시 / 처리=**lsass(LSA)** / 진화 **LM→NTLM→Kerberos** / 탈취=mimikatz·Pass-the-Hash

_관련 개념: process · ntlm · kerberos · adminshares_

---

## NTLM 인증 — NT LAN Manager

`시스템 보안`  `챌린지-리스폰스` `NT 해시` `Pass-the-Hash` `NTLM Relay`

**한줄:** 윈도우 챌린지-리스폰스 인증 / 비번은 안 보냄 / 해시만 있으면 뚫리는 Pass-the-Hash 취약

**정의**

**NTLM(NT LAN Manager)** = 윈도우 **챌린지-리스폰스(Challenge-Response)** 인증. 비밀번호를 네트워크로 **직접 보내지 않는** 게 핵심 발상. **NT=New Technology**(Windows NT 계열) — 구식 **LM(LAN Manager)**의 후속. NTFS의 'NT'와 같은 뿌리라 **NT 해시**도 같은 작명.

**동작 흐름**

비밀번호를 보내지 않고 '해시를 안다는 증거'만 주고받는다.
- **① 챌린지** — 서버가 랜덤값 **챌린지(nonce)**를 보냄.

- **② 리스폰스** — 클라이언트가 **NT 해시로 그 챌린지를 암호화한 응답**을 반환.

- **③ 검증** — 서버가 같은 계산을 해서 응답이 맞는지 확인.

비밀번호·해시 **원본은 네트워크에 오가지 않는다.**

**취약점 — Pass-the-Hash**

챌린지 응답을 **해시로 만들기 때문에, 평문 비번 없이 해시만 탈취해도 인증**이 됨 = **PtH(Pass-the-Hash)**. 또 인증을 가로채 다른 서버에 그대로 넘기는 **NTLM Relay**. **LM 해시**는 더 심각(약한 구조).

**방어**

가능하면 **Kerberos로 전환**, NTLM(특히 **NTLMv1·LM**) 비활성화·제한, **SMB 서명**으로 릴레이 차단, **LAPS**로 해시 재사용 차단, Credential Guard.

> **시험 한줄정리:** NTLM = 챌린지-리스폰스(비번 안 보냄) / **해시=자격증명 → Pass-the-Hash** / 릴레이 취약 → Kerberos 권장

_관련 개념: winauth · kerberos · adminshares_

---

## 커버로스 인증 — Kerberos

`시스템 보안`  `KDC` `TGT` `티켓` `SSO` `타임스탬프` `Golden Ticket`

**한줄:** 도메인(AD) 표준 인증 / KDC가 티켓 발급(TGT→서비스티켓) / 대칭키·타임스탬프 / SSO

**정의 (어원으로 기억)**

도메인(AD) 기본 인증. 이름은 **그리스 신화의 머리 셋 달린 지옥문 개 '케르베로스'** — 인증에 **3 주체(클라이언트·서버·KDC)**가 얽힌 걸 상징. 비번을 네트워크로 안 보내고 **티켓**으로 신원 증명.

**구성 — KDC**

핵심은 **KDC(Key Distribution Center, 키 배포 센터)**. 그 안에 **AS(Authentication Server, 인증 서버)** + **TGS(Ticket Granting Server, 티켓 발급 서버)**. 도메인에선 AD 도메인 컨트롤러가 KDC 역할.

**인증 흐름 (티켓 2단계 — 시험 단골)**

티켓을 두 단계로 받아 서비스에 접속한다.
- **① 로그인** — **AS**가 **TGT**(Ticket Granting Ticket, 티켓 발급용 티켓)를 발급 = '신분증'.

- **② 티켓 교환** — 그 TGT를 **TGS**에 제출해 **서비스 티켓(ST)**을 받음.

- **③ 서비스 접속** — 서비스 티켓으로 실제 서버에 접속.

**[포인트]** 한 번 로그인으로 여러 서비스 이용 = **SSO(Single Sign-On)**. 'TGT → 서비스 티켓' 2단계가 시험 단골.

**특징**

**대칭키** 기반 · **타임스탬프**로 **재전송(replay) 공격 방지** → 그래서 **시간 동기화가 필수**(기본 5분 오차 허용). 이 '타임스탬프=리플레이 방지' 포인트가 자주 출제.

**공격**

**Golden Ticket**: KDC의 `krbtgt` 계정 해시를 훔치면 **위조 TGT**를 무제한 발급 → 도메인 전체 장악. **Pass-the-Ticket**(티켓 탈취 재사용), **Kerberoasting**(서비스 티켓 오프라인 크래킹).

> **시험 한줄정리:** Kerberos=도메인 표준(머리 셋 개=3주체) / **KDC(AS+TGS)**가 **TGT→서비스티켓** 발급 / 대칭키·타임스탬프(리플레이 방지)·SSO / 공격=Golden Ticket

_관련 개념: winauth · ntlm_

---

## 보안 참조 모니터 (SRM) · 참조 모니터 — Security Reference Monitor / Reference Monitor

`시스템 보안`  `참조 모니터 3요건` `액세스 토큰` `SID` `DACL` `보안 커널` `접근통제`

**한줄:** 모든 접근을 최종 판정하는 경비원 / 토큰(SID) vs 객체 ACL 비교 / 참조모니터 3요건(항상호출·변조불가·검증가능)

**정의**

**SRM(Security Reference Monitor, 보안 참조 모니터)** = 윈도우 **커널 모드**에서 '이 주체가 이 객체에 접근해도 되나'를 **최종 판정**하는 문지기. 주체의 **액세스 토큰**과 객체의 **ACL**을 비교해 허용/거부하고 **감사(audit) 로그**를 남김.

**판정 재료 (윈도우)**

SRM은 두 가지를 맞대어 접근을 판정한다.
- **주체측 · 액세스 토큰**: 사용자 **SID(Security Identifier, 보안 식별자)** + 그룹 SID + 권한(privileges).

- **객체측 · ACL**: **DACL(Discretionary ACL, 임의 접근제어 목록)** — 누가 무엇을 할 수 있나.
감사(접근 기록)는 **SACL(System ACL)**이 담당.

로그인 때 **LSA**가 토큰을 만들고, 이후 **SRM**이 그 토큰과 객체의 ACL을 비교해 매 접근을 검사한다.

**원류 개념 — 참조 모니터 3요건 (시험 핵심·접근통제 PART4)**

**참조 모니터(Reference Monitor)**는 주체와 객체 사이의 **모든 접근을 중재**하는 추상 개념이다. 갖춰야 할 3대 요건:
- ① **항상 호출** (완전성) — 어떤 접근도 **우회할 수 없다**(bypass 불가).
- ② **변조 불가·격리** (tamperproof / isolation) — 공격자가 **손댈 수 없게** 보호·분리된다.
- ③ **검증 가능** (verifiable) — 충분히 **작고 단순**해서 올바름을 검증할 수 있다.
이 개념을 실제로 구현한 것이 **보안 커널(Security Kernel)**이고, 그 윈도우판이 바로 **SRM**이다.

**공격 관점**

판정의 근거가 **액세스 토큰**이므로, 토큰을 훔치거나 조작하면 권한 상승·우회 가능(**토큰 탈취/사칭, SID 위조**). 그래서 참조모니터의 '변조 불가·격리' 요건이 실무에서 중요.

> **시험 한줄정리:** SRM = 접근을 최종 판정하는 문지기(토큰 SID ↔ 객체 DACL) / 원류=**참조 모니터 3요건: 항상호출·변조불가·검증가능** / 구현=보안 커널

_관련 개념: winauth · adminshares_

---

## 정상 프로세스 판별 — csrss / svchost / lsass ...

`시스템 보안`  `이름 위장` `System32 경로` `부모 프로세스`

**한줄:** 이름 암기 ❌ / '정상 이름+정상 경로'로 위장 악성 프로세스 판별 ⭕

**핵심**

개별 이름을 달달 외우는 게 아니라, **정상 프로세스를 사칭하는 악성 프로세스를 골라내는 법**을 아는 것. 그래서 '진짜'가 뭔지 알아야 가짜가 보임.

**판별 ① 이름 위장**

한 글자만 비틀어 사칭: 정상 `svchost.exe` ↔ 악성 `scvhost.exe`(c·v 뒤바꿈), `csrss.exe` ↔ `csrsss.exe`. '다음 중 정상 프로세스는?' 함정 단골.

**판별 ② 실행 경로 (이름보다 중요)**

정상 시스템 프로세스는 `C:\Windows\System32\`에서 실행. 이름이 같아도 경로가 `...\Temp\`·사용자 폴더면 거의 악성. 시스템 파일은 임시·사용자 폴더에서 안 돎.

**판별 ③ 부모 프로세스**

정상 프로세스는 부모가 정해져 있음(예: svchost의 부모는 services.exe). 엉뚱한 부모면 의심. 1순위는 ①·②, 이건 여유 있을 때.

**자주 나오는 6개 (경로+역할만 눈에 익히기)**

이름을 외우기보다 **경로와 역할**만 눈에 익혀 두면 된다.
- `csrss.exe` — 콘솔/스레드 관리.
- `smss.exe` — 세션 관리자(부팅 초반).
- `services.exe` — 서비스 제어.
- `svchost.exe` — 서비스 호스트(**여러 개가 떠 있는 게 정상**).
- `lsass.exe` — 인증·보안정책. **자격증명 탈취 표적**(예: 미미캐츠).
- `winlogon.exe` — 로그온 담당.

> **시험 한줄정리:** 이름 암기 ❌ / **정상 이름 + 정상 경로(System32)**로 위장 프로세스 판별 ⭕ — 시험은 '위장된 악성은?'을 물음

---

