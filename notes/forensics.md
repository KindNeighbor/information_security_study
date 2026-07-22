# 포렌식·리버싱

> 자동 생성 — 원본은 `cards/forensics.js`. 직접 수정 금지.

## 웹 브라우저 아티팩트 — Web Browser Artifacts

`시스템 보안`  `방문기록·캐시·쿠키` `다운로드 목록` `브라우저별 저장방식` `SQLite vs index.dat` `사용자 행위 재구성`

**한줄:** 브라우저 사용 흔적 분석 / 공통 항목: 방문기록·캐시·쿠키·다운로드 / 브라우저마다 저장 형식 다름 / 지운 기록도 복구 가능

**정의**

웹 브라우저가 남긴 사용 흔적(아티팩트)을 분석해 **사용자가 언제·어디서·무엇을 했는지** 인터넷 사용 행위를 재구성하는 포렌식 분야. Edge·Internet Explorer·Chrome·Firefox 등이 대상이며, 브라우저는 달라도 **분석하는 항목은 대체로 공통**이다.

**공통 분석 항목 (시험 포인트)**

어떤 브라우저든 아래를 본다.
- **방문 기록(History)** — 접속한 URL과 시각. 행위 재구성의 뼈대.
- **캐시(Cache)** — 방문 페이지의 이미지·리소스를 임시 저장. 지운 뒤에도 남아 '무엇을 봤는지' 증거가 됨.
- **쿠키(Cookie)** — 로그인·세션·사이트 설정.
- **다운로드 목록(Download List)** — 내려받은 파일 이력.
- 그 밖에 **북마크·자동완성·검색어**도 흔적으로 남는다.

**브라우저별 저장 방식**

같은 항목이라도 **저장하는 파일 형식은 브라우저마다 다르다.**
- **Chrome · Firefox** — **SQLite** 데이터베이스 파일.
- **Internet Explorer ~9** — `index.dat`.
- **IE 10·11 · 구 Edge** — `WebCacheV01.dat`(ESE DB).
**[연결]** IE 계열의 `index.dat`·`WebCacheV01.dat`는 다음 'IE 아티팩트' 카드에서 자세히.

**포렌식 포인트 — 삭제 복구·시크릿 모드**

사용자가 **브라우저에서 지운 기록**도 DB에 레코드가 남아 **복구되는 경우가 많다.** 반대로 **프라이빗(시크릿) 모드**는 이런 흔적을 디스크에 거의 남기지 않아, 그 시간대 행위는 웹 아티팩트만으로 파악하기 어렵다.

> **시험 한줄정리:** 웹 아티팩트 = 브라우저 사용 흔적 분석 / 공통 항목 **방문기록·캐시·쿠키·다운로드** / 저장: Chrome·FF=SQLite, IE=`index.dat`/`WebCacheV01.dat` / 지운 기록도 복구 가능

_관련 개념: ieartifact · eventlog · registry_

---

## 인터넷 익스플로러(IE) 아티팩트 — Internet Explorer Artifacts

`시스템 보안`  `index.dat` `WebCacheV01.dat` `ESE DB` `TypedURLs` `IE10Analyzer` `esentutl`

**한줄:** IE 사용 흔적 / 구버전=index.dat → IE10·11·구Edge=WebCacheV01.dat(ESE DB) / 주소창 입력 URL=레지스트리 TypedURLs

**정의**

인터넷 익스플로러(IE)가 남기는 방문 기록·캐시·쿠키 등의 아티팩트. **IE 버전에 따라 저장 파일이 바뀌는 것**이 핵심 포인트다.

**저장 파일의 변화 (버전별 — 시험 단골)**

버전이 올라가며 저장 방식이 바뀌었다.
- **IE ~9** — `index.dat` — History·임시 인터넷 파일(캐시)·Cookies 폴더마다 각각 존재.

- **IE 10·11 · 구 Edge** — `WebCacheV01.dat` — **ESE 데이터베이스**. History·Cache·Cookie를 컨테이너로 통합.

WebCacheV01.dat 위치: `C:\Users\사용자\AppData\Local\Microsoft\Windows\WebCache`

**TypedURLs — 레지스트리에도 남는다**

브라우저 기록과 별개로, 사용자가 **주소창에 직접 입력**한 URL은 **레지스트리**에 남는다.

```
HKCU\Software\Microsoft\Internet Explorer\TypedURLs
```

즉 IE 흔적은 파일(WebCache)뿐 아니라 **레지스트리에도 분산**돼 있다(레지스트리 카드와 연결).

**수집·복구 (실무 포인트)**

`WebCacheV01.dat`는 사용 중 **잠겨 있어** 바로 못 여는 경우가 많다. 정상 종료된 **Clean Shutdown** 상태로 수집하거나, Dirty 상태면 `esentutl`로 복구해 연다. **삭제된 레코드도 복구** 가능. 분석 도구: **IE10Analyzer**, ESEDatabaseView, IEHistoryView.

> **시험 한줄정리:** IE 아티팩트: 구버전 `index.dat` → IE10·11·구Edge **`WebCacheV01.dat`(ESE DB)** @WebCache / 주소창 입력 URL=레지스트리 **TypedURLs** / 삭제·Dirty도 복구(`esentutl`·IE10Analyzer)

_관련 개념: webartifact · registry · eventlog_

---

## 디핑 · 바이너리 디핑 — Diffing / Binary Diffing

`시스템 보안`  `patch diffing` `1-day` `BinDiff`

**한줄:** 두 대상의 '차이' 찾기 / 바이너리에 적용=바이너리 디핑 / 패치 전후 비교로 취약점 역추적=패치 디핑

**디핑**

두 대상을 비교해 **차이(difference)**를 찾는 기술. `git diff`가 바로 그것 — 커밋 전후로 뭐가 바뀌었는지 보여주는 것.

**바이너리 디핑**

비교 대상이 소스가 아니라 **컴파일된 실행 파일**인 경우. 바이트 1:1이 아니라 디스어셈블/디컴파일해 **함수·코드 흐름 단위**로 변경점을 찾음. 도구: BinDiff(구글), Diaphora + IDA Pro / Ghidra.

**패치 디핑 → 1-day 공격**

벤더가 보안 패치를 내면 '무엇을 고쳤는지'는 잘 안 알림. 공격자가 **패치 전·후 바이너리를 디핑**해 바뀐 부분(=원래 취약했던 지점)을 찾고, 거꾸로 익스플로잇을 만들어 아직 패치 안 한 대상을 노림 = **1-day 공격**.

**방어 쪽 활용**

악성코드 변종 두 개를 디핑해 '백신 회피를 위해 뭘 바꿨나' 분석하거나 멀웨어 패밀리를 분류하는 데도 사용.

> **시험 한줄정리:** 디핑=차이 찾기 · 바이너리 디핑=실행파일에 적용 · **패치 디핑=패치 전후 비교로 취약점 역추적(1-day)**

---

