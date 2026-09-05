# 정보보안기사 학습노트 — 인덱스

> `cards/*.js`가 원본이고 `node build.js`로 이 폴더가 자동 생성됩니다. **이 폴더의 .md는 직접 수정하지 마세요.**
> 마지막 갱신 **2026-09-05** · 총 **114장**

## 주제 목록

| 주제 | 카드 수 | 파일 |
|------|--------|------|
| 공유·프로토콜 (SMB 계열) | 4 | [shares.md](shares.md) |
| 윈도우 인증·로그온 | 6 | [winauth.md](winauth.md) |
| 파일시스템 (NTFS) | 4 | [ntfs.md](ntfs.md) |
| 레지스트리·이벤트 로그 | 2 | [sysrecord.md](sysrecord.md) |
| 악성코드 | 2 | [malware.md](malware.md) |
| 메모리 익스플로잇 | 6 | [memexploit.md](memexploit.md) |
| 유닉스·리눅스 보안 기초 | 22 | [unix.md](unix.md) |
| 소프트웨어 취약점 (개발 보안) | 1 | [swvuln.md](swvuln.md) |
| 고급 위협 (APT·킬체인·DLL) | 3 | [threat.md](threat.md) |
| 애플리케이션·웹 보안 | 1 | [webapp.md](webapp.md) |
| 포렌식·리버싱 | 3 | [forensics.md](forensics.md) |
| 네트워크 일반 (PART 02) | 6 | [network.md](network.md) |
| 네트워크 활용(TCP/IP) — HTTP | 6 | [http.md](http.md) |
| 네트워크 활용(TCP/IP) — 메일·네트워크 관리 | 3 | [appsvc.md](appsvc.md) |
| 네트워크 활용(TCP/IP) — 전송 계층 | 4 | [translayer.md](translayer.md) |
| 네트워크 활용(TCP/IP) — 인터넷 계층 | 5 | [netlayer.md](netlayer.md) |
| 네트워크 활용(TCP/IP) — 네트워크 접근 계층 | 3 | [netaccess.md](netaccess.md) |
| 네트워크 기반 공격 — DoS·DDoS | 6 | [dosattack.md](dosattack.md) |
| 네트워크 기반 공격 — 스캐닝·스니핑·스푸핑·하이재킹 | 6 | [netattack.md](netattack.md) |
| 네트워크 보안 기술 — 침입차단·침입탐지 | 5 | [firewall.md](firewall.md) |
| 네트워크 보안 기술 — VPN·통합관리·무선·RFID | 6 | [vpnetc.md](vpnetc.md) |
| 네트워크 위협 및 대응 기술 | 4 | [netthreat.md](netthreat.md) |
| 인터넷 응용 보안 (PART 03) — FTP·메일·웹·DNS | 6 | [appsec.md](appsec.md) |

## 전체 raw 주소 (다른 세션에 그대로 주면 읽힙니다)

```
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/shares.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/winauth.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/ntfs.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/sysrecord.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/malware.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/memexploit.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/unix.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/swvuln.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/threat.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/webapp.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/forensics.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/network.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/http.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/appsvc.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/translayer.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/netlayer.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/netaccess.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/dosattack.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/netattack.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/firewall.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/vpnetc.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/netthreat.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/appsec.md
```

## 오답 노트 (손으로 관리 — 자동 생성 아님)

`review/wrong.md` — 인출 연습에서 **틀린 것만 누적**한 파일. 문제를 낼 때 **이걸 먼저 읽으면 약한 곳부터** 출제할 수 있습니다.

```
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/review/wrong.md
```

## 새 세션에서 문제 받는 법

아래처럼 요청하세요. 주소만 위 목록에서 원하는 주제로 바꾸면 됩니다.

```
정보보안기사 필기 준비 중이야(시험 10/8). 아래 오답 노트를 먼저 읽고,
거기서 약한 것 위주로 학습노트를 참고해 서술형 5문제만 내줘.
보기는 주지 말고, 내가 답하면 채점하고 틀린 부분만 짚어줘.
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/review/wrong.md
https://raw.githubusercontent.com/KindNeighbor/information_security_study/main/notes/dosattack.md
```

## 파일별 수록 개념

**shares.md** (4장) — NetBIOS · SMB / CIFS · IPC$ · 널 세션 · 관리 목적 기본 공유

**winauth.md** (6장) — 윈도우 대화형 로그온 (winlogon·GINA) · 윈도우 인증 체계 · NTLM 인증 · 커버로스 인증 · 보안 참조 모니터 (SRM) · 참조 모니터 · 정상 프로세스 판별

**ntfs.md** (4장) — NTFS 파일시스템 · 파일 암호화 — EFS vs BitLocker · 대체 데이터 스트림 (ADS) · 볼륨 섀도 복사본 (VSS)

**sysrecord.md** (2장) — 윈도우 레지스트리 · 윈도우 이벤트 로그

**malware.md** (2장) — 컴퓨터 바이러스 유형 · DDE 공격

**memexploit.md** (6장) — 프로세스 메모리 구조 · 버퍼 오버플로 · 위험한 C 함수 vs 안전한 함수 · 셸코드 · 힙 스프레이 · 메모리 보호 (완화 기법)

**unix.md** (22장) — 리눅스·유닉스 특징 · 리눅스 구조 (커널·셸·파일시스템) · 리눅스 파일시스템 구조 · 파일시스템 내부 구조 (부트·슈퍼·아이노드·데이터) · 디스크 파티션 · 파일시스템 관리 (생성·검사·마운트) · 파일시스템 종류 · 리눅스 부팅 순서 · 부트로더 · 런레벨 · 셸 종류 (bash·sh·csh·ksh) · bash 환경 설정 파일 · 셸 환경 변수 · 셸쇼크 · 심볼릭 링크 · 하드 링크 · UID · GID (사용자·그룹 식별) · 파일 권한 (rwx · chmod · umask) · 특수 권한 (SetUID · SetGID · 스티키 비트) · 계정 파일 (/etc/passwd · /etc/shadow) · 리눅스 로그 파일 · cron · crontab (예약 작업) · 리눅스 보안 도구 · 점검 명령 · 권한 위임의 대안 (sudo · Capabilities)

**swvuln.md** (1장) — 경쟁 조건

**threat.md** (3장) — APT 공격 · 사이버 킬체인 · DLL · DLL 공격

**webapp.md** (1장) — OAuth 2.0

**forensics.md** (3장) — 웹 브라우저 아티팩트 · 인터넷 익스플로러(IE) 아티팩트 · 디핑 · 바이너리 디핑

**network.md** (6장) — 네트워크 기초 (프로토콜 · 유형 · 토폴로지) · OSI 7계층 · TCP/IP 4계층 · OSI 계층별 네트워크 장비 · TCP vs UDP · 주요 프로토콜 (IP · ARP · ICMP)

**http.md** (6장) — HTTP 개요 · 버전 · HTTP 세션 연결 과정 · HTTP 프로토콜 구조 (메시지 형식) · HTTP 요청 방식 (메서드) · HTTP 헤더 (요청 · 응답) · 상태 코드 · 쿠키와 세션 · 쿠키 보안 옵션

**appsvc.md** (3장) — SMTP · 메일 프로토콜 · SNMP (네트워크 관리 프로토콜) · NMS · 네트워크 관리 (FCAPS)

**translayer.md** (4장) — 전송 계층 · 세그먼트 · 포트 · TCP 헤더 구조 · 3-way Handshake · TCP 연결 상태 · UDP 헤더 구조

**netlayer.md** (5장) — IP 헤더 구조 · TTL · MTU/단편화 · IP 주소 체계 · 서브네팅 · 전송 방식 · 라우팅 · 라우팅 프로토콜 분류 · RIP · OSPF · BGP · 라우터 보안 · 패스워드 설정

**netaccess.md** (3장) — 네트워크 접근 계층 · 주요 기능 · CSMA/CD · CSMA/CA · VLAN (가상 랜)

**dosattack.md** (6장) — DoS · DDoS 개요 · TCP SYN Flooding · Land Attack · ICMP 공격 · 스머프 · UDP Flooding · IP 단편화 공격 (Ping of Death · Teardrop) · HTTP GET Flooding · Cache Control · HULK · Slow HTTP 공격 · Hash DoS

**netattack.md** (6장) — 포트 스캐닝 · 스니핑 · IP 스푸핑 · ARP 스푸핑 (ARP 캐시 포이즈닝) · 세션 하이재킹 · 원격 접속 공격 · 대응

**firewall.md** (5장) — 침입차단 시스템 (방화벽) · 유형 · 방화벽 구축 형태 · 침입탐지 시스템 (IDS) · 탐지 기법 · Snort · Suricata · YARA · 침입대응 시스템 (IPS) · 허니팟

**vpnetc.md** (6장) — 가상사설망 (VPN) · SSL VPN · PPTP · L2TP · IPSec VPN (AH · ESP · IKE) · NAC (네트워크 접근 제어) · ESM · SIEM · 무선 LAN 보안 (WEP · WPA · WPA2) · RFID · USN 보안

**netthreat.md** (4장) — 악성 메일 공격 · 랜섬웨어 · APT형 표적 공격 · 망분리 (인터넷 접속 차단) · 망연계 · 자료연계

**appsec.md** (6장) — FTP 개요 · 종류 · 액티브/패시브 모드 · FTP 보안 취약점 · 로그 · 대책 · 메일 보안 프로토콜 (PGP · PEM · S/MIME) · sendmail · 스팸 차단 · SpamAssassin · 웹 서버 보안 (아파치 · 웹 로그 · WAF) · DNS 구조 · 보안 · DNSSEC
