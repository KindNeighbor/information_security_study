/* 파일시스템 (NTFS) — 카드 데이터 (index.html이 <script>로 로드) */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "ntfs",
    "term": "NTFS 파일시스템",
    "en": "New Technology File System",
    "cat": "시스템 보안",
    "tags": [
      "MFT",
      "저널링",
      "ACL 권한",
      "EFS",
      "ADS",
      "FAT 비교"
    ],
    "oneLiner": "윈도우 기본 파일시스템 / 권한(ACL)·암호화(EFS)·저널링·감사 내장 / FAT엔 없던 보안기능",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "윈도우 기본 파일시스템. FAT의 후속으로 <b>보안·복구 기능이 내장</b>. 세부 개념(EFS·BitLocker·ADS·VSS)이 전부 이 위에서 도는 '뿌리' 개념 — 이걸 지도로 잡고 나머지를 얹으면 안 헷갈림."
      },
      {
        "k": "note",
        "title": "FAT vs NTFS (시험 단골 비교)",
        "d": "시험은 <b>FAT엔 없고 NTFS에만 있는 것</b>을 묻는다.<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>FAT</span><div class='row'>단순한 옛 파일시스템. <b>접근권한·암호화·저널링이 없다.</b> 보안 용도로는 부적합.</div></div><div class='cmp-item'><span class='cmp-label'>NTFS</span><div class='row'>보안·복구 기능을 갖춘 윈도우 기본 파일시스템.</div></div></div>NTFS에만 있는 기능(= FAT엔 없는 것):<ul class='klist'><li>① <b>접근권한(ACL, Access Control List = 접근제어 목록)</b> — 파일마다 사용자별 허용/거부 지정</li><li>② <b>암호화(EFS)</b> — 파일 단위 암호화</li><li>③ <b>저널링(복구)</b> — 작업 전 로그를 남겨 크래시에서 복구</li><li>④ <b>감사(Auditing)</b> — 접근 시도 기록</li><li>⑤ <b>압축·대용량·디스크 쿼터</b></li></ul><p class='on-key'><span class='lbl'>결론</span>권한·암호화·저널링이 필요하면 <b>NTFS</b>. 'FAT에 없는 기능은?'이 그대로 출제된다.</p>"
      },
      {
        "k": "note",
        "title": "핵심 구성요소",
        "d": "<ul class='klist'><li><code>MFT</code> (Master File Table, 마스터 파일 테이블) — 볼륨 안 <b>모든 파일의 메타데이터를 적어 둔 목록</b>.</li><li><code>$LogFile</code> — <b>저널링</b>(작업 로그)을 담는 파일.</li><li><b>ADS</b> (Alternate Data Streams, 대체 데이터 스트림) — 한 파일에 <b>여러 데이터 흐름</b>을 붙이는 기능. 편의이자 은닉에 악용되는 <b>양날의 검</b>.</li></ul>"
      },
      {
        "k": "note",
        "title": "저널링 (Journaling) — 어원으로 이해",
        "d": "<b>journal=일지·(회계) 분개장</b>: 최종 장부에 옮기기 <b>전에</b> 먼저 시간순으로 적어두는 기록('journ'=하루→날마다 적음, journey·저널리스트와 같은 뿌리). 파일시스템도 똑같이 <b>실제 디스크에 쓰기 전, 할 작업을 저널(로그)에 먼저 기록</b>(Write-Ahead Logging) → 도중에 정전·크래시가 나도 재부팅 때 저널을 보고 <b>재실행(redo)/되돌림(rollback)</b>해 일관성 유지. 핵심은 '자동 복구'가 아니라 <b>'하기 전에 먼저 적어둔다'</b>. NTFS=<code>$LogFile</code>, 리눅스 ext3/4·XFS도 저널링."
      },
      {
        "k": "warn",
        "title": "NTFS라서 생기는 위험",
        "d": "기능이 많아 <b>악용 포인트</b>도 생김: <b>ADS</b>로 악성코드 은닉, <b>VSS</b>(섀도 복사본)를 랜섬웨어가 삭제. 각각은 연결 카드 참고."
      }
    ],
    "finalLiner": "NTFS = 윈도우 기본 FS / <b>권한·암호화·저널링·감사</b> 내장(FAT엔 없음) / 세부개념 EFS·BitLocker·ADS·VSS의 뿌리",
    "related": [
      "efsbitlocker",
      "ads",
      "vss",
      "adminshares"
    ]
  },
  {
    "id": "efsbitlocker",
    "term": "파일 암호화 — EFS vs BitLocker",
    "en": "Encrypting File System / BitLocker",
    "cat": "시스템 보안",
    "tags": [
      "EFS=파일단위",
      "BitLocker=볼륨전체",
      "TPM",
      "FEK",
      "복구 에이전트"
    ],
    "oneLiner": "EFS=파일·폴더 단위 암호화(사용자 계정) / BitLocker=볼륨(드라이브) 전체 암호화(TPM) / '단위'로 구분",
    "blocks": [
      {
        "k": "def",
        "title": "EFS (파일 단위)",
        "d": "NTFS 기능. <b>파일·폴더 단위</b> 암호화. 대칭키 <code>FEK</code>(File Encryption Key=파일 암호화 키)로 파일을 암호화하고, 그 FEK를 다시 <b>사용자 공개키</b>로 암호화 → 그 사용자로 로그인해야 복호화. 즉 <b>사용자 계정 기반</b>."
      },
      {
        "k": "def",
        "title": "BitLocker (볼륨 전체)",
        "d": "<b>드라이브(볼륨) 전체</b>를 통째로 암호화. <b>TPM(Trusted Platform Module, 신뢰 플랫폼 모듈)</b>—암호키를 하드웨어에 보관하고 부팅 무결성을 검증하는 <b>별도 보안칩</b>—과 연동해 부팅 전 무결성 검사. <b>노트북 도난 시 디스크 통째 보호</b>가 대표 시나리오. PIN·복구키로도 잠금."
      },
      {
        "k": "note",
        "title": "비교 (표로 암기 — 함정 방지)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>EFS</span><div class='row'><b>단위</b> — 파일·폴더 하나하나.</div><div class='row'><b>인증</b> — 사용자 인증서(개인키).</div><div class='row'><b>대표 상황</b> — 공용 PC에서 <b>특정 파일만 몰래</b> 보호.</div></div><div class='cmp-item'><span class='cmp-label'>BitLocker</span><div class='row'><b>단위</b> — 드라이브(볼륨) 전체.</div><div class='row'><b>인증</b> — TPM·PIN·복구키.</div><div class='row'><b>대표 상황</b> — <b>노트북 분실·도난</b> 시 디스크 통째 보호.</div></div></div><p class='on-key'><span class='lbl'>시험 함정</span>'볼륨 전체 암호화는?' → <b>BitLocker</b> · '파일 단위 암호화는?' → <b>EFS</b>. '단위'로 구분한다.</p>"
      },
      {
        "k": "warn",
        "title": "EFS 주의",
        "d": "사용자 <b>인증서(개인키)를 잃으면 복호화 불가</b> → 데이터 영구 손실. 조직은 <b>복구 에이전트(DRA, Data Recovery Agent)</b>를 지정해 대비. 반대로 계정이 탈취되면 자동 복호화되므로 계정 보호가 전제."
      }
    ],
    "finalLiner": "<b>EFS=파일/폴더 단위(사용자 계정·FEK)</b> / <b>BitLocker=볼륨 전체(TPM)</b> / 분실대비=BitLocker · EFS는 복구에이전트(DRA)로 대비",
    "related": [
      "ntfs"
    ]
  },
  {
    "id": "ads",
    "term": "대체 데이터 스트림 (ADS)",
    "en": "Alternate Data Streams",
    "cat": "시스템 보안",
    "tags": [
      "NTFS 전용",
      "악성코드 은닉",
      "dir /r",
      "MOTW"
    ],
    "oneLiner": "NTFS가 한 파일에 여러 데이터 흐름을 붙이는 기능 / 악성코드 은닉에 악용 / dir /r 로 탐지",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "NTFS에서 하나의 파일에 <b>보이지 않는 추가 데이터 스트림</b>을 붙일 수 있는 기능. 원래는 메타데이터용(예: 인터넷서 받은 파일에 붙는 <code>Zone.Identifier</code>=MOTW(Mark of the Web), '다른 PC에서 온 파일' 경고)."
      },
      {
        "k": "warn",
        "title": "악용 — 은닉",
        "d": "정상 파일 뒤에 악성 실행파일을 숨김.<pre>type evil.exe > normal.txt:hidden.exe</pre>탐색기·기본 <code>dir</code>엔 <b>안 보이고 파일 크기도 안 늘어 보임</b> → 백신·사용자 눈을 피함. NTFS 전용 기능이라 시험 단골."
      },
      {
        "k": "safe",
        "title": "탐지·제거",
        "d": "탐지: <code>dir /r</code> · PowerShell <code>Get-Item -Stream *</code> · Sysinternals <b>Streams</b>. 제거: 파일을 <b>FAT/exFAT·네트워크로 복사</b>하면 ADS가 사라짐(그 파일시스템들은 ADS 미지원). '메인 데이터는 그대로, 숨은 스트림만 탈락'이 포인트."
      }
    ],
    "finalLiner": "ADS = NTFS가 한 파일에 숨은 데이터 스트림 부착 / <b>악성코드 은닉</b>(크기·탐색기서 안 보임) / <code>dir /r</code>로 탐지, FAT 복사 시 소멸",
    "related": [
      "ntfs"
    ]
  },
  {
    "id": "vss",
    "term": "볼륨 섀도 복사본 (VSS)",
    "en": "Volume Shadow Copy Service",
    "cat": "시스템 보안",
    "tags": [
      "스냅샷",
      "이전 버전",
      "랜섬웨어",
      "vssadmin",
      "포렌식"
    ],
    "oneLiner": "특정 시점 스냅샷으로 백업·복원 / 랜섬웨어가 삭제해 복구 차단 / 포렌식 증거원",
    "blocks": [
      {
        "k": "def",
        "title": "정의",
        "d": "실행 중에도 볼륨의 <b>특정 시점 스냅샷</b>을 만들어 백업·복원하게 해주는 서비스. 윈도우 '<b>이전 버전</b>' 복원·시스템 복원이 이걸로 동작. 쓰던 중에도 일관된 백업을 뜰 수 있는 게 핵심."
      },
      {
        "k": "warn",
        "title": "랜섬웨어 악용 (시험·실무 포인트)",
        "d": "랜섬웨어가 암호화 후 <b>섀도 복사본을 삭제</b>해 사용자의 복원 수단을 없앰.<pre>vssadmin delete shadows /all</pre>이 명령·이벤트가 보이면 랜섬웨어의 강한 징후 → 탐지·차단 지표로 활용."
      },
      {
        "k": "note",
        "title": "포렌식 활용",
        "d": "반대로 방어·수사에선 무기. 섀도 복사본에 <b>과거 시점의 파일이 남아</b> 있어, 삭제·변조된 파일이나 이전 상태를 <b>복구해 증거로</b> 확보(안티포렌식 대응)."
      },
      {
        "k": "safe",
        "title": "방어",
        "d": "백업을 <b>오프라인·별도 매체</b>에 이중화(3-2-1 백업)—온라인 섀도만 믿지 않기. <code>vssadmin delete</code> 같은 관리자 명령 <b>실행 모니터링</b>·권한 제한."
      }
    ],
    "finalLiner": "VSS = 시점 스냅샷 백업·'이전 버전' 복원 / <b>랜섬웨어가 vssadmin으로 삭제</b>해 복구 차단 / 포렌식 증거원",
    "related": [
      "ntfs"
    ]
  }
]
);
