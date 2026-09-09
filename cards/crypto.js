/* 정보보안 일반 — 암호학 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "cryptobasic",
    "term": "암호화의 개요 — 과정과 분류",
    "en": "Cryptography Basics",
    "cat": "정보보안 일반",
    "tags": ["평문·암호문·키", "커크호프의 원리", "혼돈과 확산", "치환 vs 전치", "블록 vs 스트림"],
    "oneLiner": "암호화=평문을 키로 암호문으로 바꾸는 것, 복호화는 그 역 / 커크호프의 원리에 따라 알고리즘은 공개하고 키만 숨긴다 / 기법은 치환·전치, 대칭·비대칭, 블록·스트림으로 갈린다",
    "blocks": [
      {
        "k": "def",
        "title": "기본 용어와 과정",
        "d": "<ul class='klist'><li><b>평문(Plaintext, P)</b> — 원래 메시지 / <b>암호문(Ciphertext, C)</b> — 변환된 메시지</li><li><b>암호화(Encryption)</b> — <b>C = E(K, P)</b> / <b>복호화(Decryption)</b> — <b>P = D(K, C)</b></li><li><b>키(Key)</b> — 변환을 결정하는 비밀 값. <b>암호 강도는 알고리즘이 아니라 키에 달려 있다</b></li><li><b>암호학(Cryptography)</b>=암호를 만드는 학문 / <b>암호분석(Cryptanalysis)</b>=깨는 학문. 둘을 합쳐 <b>암호론(Cryptology)</b></li></ul><p class='on-key'><span class='lbl'>커크호프의 원리 (Kerckhoffs' Principle)</span><b>\"암호 알고리즘은 공개되어도 키만 안전하면 된다.\"</b> 알고리즘을 숨겨서 안전을 얻으려는 것을 <b>은닉에 의한 보안(Security by Obscurity)</b>이라 하며 <b>나쁜 설계</b>로 본다. AES·RSA가 모두 공개된 이유.</p>"
      },
      {
        "k": "note",
        "title": "혼돈과 확산 (섀넌의 두 원리)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>혼돈 (Confusion)</span><div class='row'><b>암호문과 키의 관계</b>를 복잡하게 만든다. 암호문을 봐도 <b>키를 유추할 수 없게</b>. 주로 <b>치환(S-box)</b>으로 구현</div></div><div class='cmp-item'><span class='cmp-label'>확산 (Diffusion)</span><div class='row'><b>평문의 통계적 성질</b>을 흩뜨린다. <b>평문 한 비트만 바뀌어도 암호문 절반이 바뀌게</b>(눈사태 효과). 주로 <b>전치·순열(P-box)</b>로 구현</div></div></div><p class='on-key'><span class='lbl'>연결</span>블록 암호는 <b>치환과 전치를 여러 라운드 반복</b>해 이 둘을 달성한다. <b>눈사태 효과(Avalanche Effect)</b>는 좋은 암호·해시의 필수 성질.</p>"
      },
      {
        "k": "note",
        "title": "암호 기법의 분류 (3가지 축)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>① 변환 방식 — 치환 vs 전치</span><div class='row'><b>치환(Substitution)</b>: 글자를 <b>다른 글자로 바꾼다</b>(시저·비제네르)<br><b>전치(Transposition)</b>: 글자는 그대로 두고 <b>순서만 섞는다</b>(스키테일)<br>→ 현대 암호는 <b>둘을 섞어 반복</b>(Product Cipher, 곱 암호)</div></div><div class='cmp-item'><span class='cmp-label'>② 키 방식 — 대칭 vs 비대칭</span><div class='row'><b>대칭키</b>: 암·복호화 키가 같다(빠름) / <b>비대칭(공개키)</b>: 키가 한 쌍(느림, 키 분배 해결)<br>→ 상세는 PART 04 「대칭키 암호」·「공개키 암호」 카드</div></div><div class='cmp-item'><span class='cmp-label'>③ 처리 단위 — 블록 vs 스트림</span><div class='row'><b>블록</b>: 일정 길이로 잘라 처리 / <b>스트림</b>: 비트 단위로 키 스트림과 XOR</div></div></div><ul class='klist'><li><b>대칭키·비대칭키·해시</b>를 <b>암호 기술의 3대 축</b>으로 묶어 출제하기도 한다(해시는 <b>키가 없고 복호화도 없다</b>)</li></ul>"
      }
    ],
    "finalLiner": "<b>C=E(K,P) / P=D(K,C)</b>, 강도는 <b>키</b>에 달림 / <b>커크호프의 원리 = 알고리즘은 공개, 키만 비밀</b>(은닉에 의한 보안은 나쁜 설계) / <b>혼돈=암호문·키 관계 복잡(치환·S박스)</b>, <b>확산=평문 성질 흩뜨림(전치·P박스, 눈사태 효과)</b> / 분류 <b>치환·전치 / 대칭·비대칭 / 블록·스트림</b>",
    "related": ["classic", "blockmode", "symkey"]
  },
  {
    "id": "classic",
    "term": "고전 암호 — 시저 · 다중 치환 · 힐 암호",
    "en": "Classical Ciphers",
    "cat": "정보보안 일반",
    "tags": ["시저=3칸 이동", "단일 치환=빈도분석에 취약", "비제네르=다중 치환", "힐=행렬 곱", "일회용 패드=완전 비밀"],
    "oneLiner": "시저는 알파벳을 일정 칸 미는 단일 치환으로 빈도분석에 바로 뚫린다 / 비제네르 같은 다중 치환은 같은 글자가 매번 다르게 암호화되고, 힐 암호는 여러 글자를 행렬로 한꺼번에 바꾼다",
    "blocks": [
      {
        "k": "def",
        "title": "시저 암호와 단일 치환",
        "d": "<b>시저 암호(Caesar Cipher)</b> — 알파벳을 <b>일정 칸(k)만큼 이동</b>시키는 가장 단순한 치환 암호.<pre>암호화:  C = (P + k) mod 26\n복호화:  P = (C − k) mod 26\n\nk=3일 때   A→D,  B→E,  HELLO → KHOOR</pre><ul class='klist'><li>키가 <b>26개(사실상 25개)</b>뿐이라 <b>전수조사(Brute Force)로 즉시 해독</b></li><li><b>단일 치환 암호(Monoalphabetic)</b> — 대응표를 임의로 짜면 키 공간이 <b>26!</b>로 커지지만, <b>같은 평문 글자가 늘 같은 암호문 글자</b>가 되므로 <b>빈도 분석(Frequency Analysis)</b>에 그대로 뚫린다(영어에서 가장 흔한 글자는 <b>E</b>)</li></ul>"
      },
      {
        "k": "note",
        "title": "다중 치환 암호 (Polyalphabetic)",
        "d": "빈도 분석을 막으려고 <b>여러 개의 치환표를 번갈아</b> 쓰는 방식. <b>같은 평문 글자가 위치에 따라 다른 암호문</b>이 된다.<ul class='klist'><li><b>비제네르(Vigenère) 암호</b> — 대표적인 다중 치환. <b>키워드를 반복</b>해 글자마다 다른 이동량을 적용<pre>평문  A T T A C K\n키    L E M O N L      (키워드 LEMON 반복)\n암호  L X F O P V      C = (P + K) mod 26</pre>수백 년간 \"해독 불가\"로 불렸으나 <b>키 길이를 알아내면(카시스키 검사·index of coincidence)</b> 여러 개의 시저 암호로 쪼개져 풀린다</li><li><b>플레이페어(Playfair)</b> — <b>2글자(다이그램) 단위</b>로 5×5 표를 이용해 치환</li><li><b>에니그마</b> — 회전자로 매 글자마다 치환표가 바뀌는 기계식 다중 치환</li></ul>"
      },
      {
        "k": "note",
        "title": "힐 암호 (Hill Cipher)와 전치 암호",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>힐 암호 (Hill Cipher)</span><div class='row'><b>여러 글자를 묶어 행렬 곱</b>으로 한꺼번에 암호화하는 <b>다중 문자(Polygraphic) 치환</b>.<br><b>C = K · P mod 26</b>, 복호화는 <b>P = K⁻¹ · C mod 26</b>(키 행렬의 <b>역행렬</b>이 존재해야 함)<br>장점 <b>글자 하나가 여러 글자에 영향을 줘 빈도 분석에 강하다</b><br>단점 <b>선형 변환이라 기지 평문 공격(Known Plaintext)에 취약</b> — 평문·암호문 쌍이 몇 개 있으면 키 행렬이 계산된다</div></div><div class='cmp-item'><span class='cmp-label'>전치 암호 (Transposition)</span><div class='row'>글자를 <b>바꾸지 않고 순서만 재배열</b>.<br><b>스키테일(Scytale)</b> — 막대에 띠를 감아 읽는 고대 방식<br><b>열 전치(Columnar)</b> — 표에 채워 넣고 열 순서를 바꿔 읽는다<br>특징: <b>글자 빈도가 그대로 보존</b>되므로 빈도 분포만 보면 \"전치 암호구나\"를 알 수 있다</div></div></div><p class='on-key'><span class='lbl'>일회용 패드 (One-Time Pad)</span>평문과 <b>같은 길이의 진짜 난수 키</b>를 <b>한 번만</b> 써서 XOR하면 <b>이론적으로 절대 해독 불가(완전 비밀성, Perfect Secrecy)</b>가 증명된다. 다만 <b>키 길이·키 분배·재사용 금지</b> 때문에 현실에서 쓰기 어렵다.</p>"
      }
    ],
    "finalLiner": "<b>시저 = C=(P+k) mod 26</b>, 키 25개라 전수조사로 즉사 / <b>단일 치환=빈도 분석에 취약</b> → <b>다중 치환(비제네르, 키워드 반복)</b>으로 대응하나 <b>키 길이를 알면 풀림</b> / <b>힐 암호=행렬 곱(역행렬로 복호화), 기지 평문 공격에 취약</b> / <b>전치=순서만 섞어 빈도가 보존됨</b> / <b>일회용 패드만 완전 비밀성 증명</b>",
    "related": ["cryptobasic", "cryptanalysis", "symkey"]
  },
  {
    "id": "blockmode",
    "term": "블록 암호 구조와 운용 모드 (ECB·CBC·CFB·OFB·CTR)",
    "en": "Block Cipher Structure & Modes of Operation",
    "cat": "정보보안 일반",
    "tags": ["Feistel vs SPN", "ECB=같은 평문·같은 암호문", "CBC=IV와 XOR·체이닝", "CTR=병렬 가능", "OFB·CTR은 스트림처럼"],
    "oneLiner": "블록 암호 구조는 Feistel(암복호화 구조 동일)과 SPN(병렬·빠름)으로 나뉜다 / 운용 모드 중 ECB는 패턴이 드러나 금지, CBC는 IV와 연쇄, CFB·OFB·CTR은 스트림처럼 동작하며 CTR만 병렬 처리가 된다",
    "blocks": [
      {
        "k": "note",
        "title": "블록 암호의 두 구조 — Feistel vs SPN",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>Feistel 구조</span><div class='row'>블록을 <b>좌·우 절반으로 나눠</b> 한쪽에만 함수를 적용하고 <b>XOR 후 자리를 바꾸는</b> 것을 반복.<br>최대 장점 = <b>암호화와 복호화 구조가 같다</b>(라운드 키만 역순). 그래서 <b>구현이 간단</b>하고, 라운드 함수가 <b>역함수일 필요가 없다</b><br>단점 <b>한 라운드에 절반만 처리</b>해 라운드 수가 많이 필요<br>예: <b>DES·3DES·SEED·Blowfish·RC5</b></div></div><div class='cmp-item'><span class='cmp-label'>SPN 구조 (Substitution-Permutation Network)</span><div class='row'><b>블록 전체</b>에 <b>치환(S-box)과 순열(P-box)</b>을 반복 적용.<br>장점 <b>한 라운드에 전체를 처리해 빠르고 병렬화에 유리</b>, 적은 라운드로 충분<br>단점 <b>복호화를 위해 각 단계의 역함수가 따로 필요</b>해 구현이 복잡<br>예: <b>AES·ARIA·IDEA(변형)</b></div></div></div><p class='on-key'><span class='lbl'>암기</span><b>Feistel = DES·3DES·SEED</b>, <b>SPN = AES·ARIA</b>. 짝을 바꿔 내는 문항이 흔하다.</p>"
      },
      {
        "k": "warn",
        "title": "운용 모드 5가지 (표로 통째 출제)",
        "d": "<div class='cmp'><div class='cmp-item'><span class='cmp-label'>ECB (Electronic Code Book) — 전자 부호표</span><div class='row'>각 블록을 <b>독립적으로</b> 암호화. 구조가 가장 단순하고 <b>병렬 처리 가능</b>.<br><b>치명적 결함: 같은 평문 블록 → 같은 암호문 블록</b>이라 <b>패턴이 그대로 드러난다</b>(펭귄 이미지 예시). <b>실무 사용 금지</b></div></div><div class='cmp-item'><span class='cmp-label'>CBC (Cipher Block Chaining) — 암호 블록 연쇄</span><div class='row'>평문 블록을 <b>앞 블록의 암호문과 XOR</b>한 뒤 암호화. 첫 블록은 <b>IV(초기화 벡터)</b>와 XOR.<br><b>가장 널리 쓰인 표준 모드</b>. <b>암호화는 순차적(병렬 불가)</b>, <b>복호화는 병렬 가능</b><br>주의 <b>IV는 매번 달라야</b> 하고, <b>한 블록이 깨지면 그 블록과 다음 블록에 영향</b>(오류 전파 2블록)</div></div><div class='cmp-item'><span class='cmp-label'>CFB (Cipher FeedBack) — 암호 피드백</span><div class='row'><b>앞의 암호문을 암호화</b>해 만든 값과 평문을 XOR. <b>블록 암호를 스트림처럼</b> 쓴다.<br><b>패딩이 필요 없다</b>. 암호화는 순차적, <b>복호화도 블록 암호의 \"암호화\" 함수만 사용</b></div></div><div class='cmp-item'><span class='cmp-label'>OFB (Output FeedBack) — 출력 피드백</span><div class='row'><b>암호화 출력을 다시 입력으로</b> 넣어 <b>키 스트림을 미리 생성</b>하고 평문과 XOR.<br>키 스트림이 <b>평문·암호문과 무관</b>해 <b>미리 계산 가능</b>, <b>오류가 전파되지 않는다</b>(해당 비트만 손상) → <b>음성·영상 등 실시간 통신</b>에 적합</div></div><div class='cmp-item'><span class='cmp-label'>CTR (CounTeR) — 카운터</span><div class='row'><b>1씩 증가하는 카운터(+논스)</b>를 암호화해 키 스트림을 만들고 평문과 XOR.<br><b>암호화·복호화 모두 완전 병렬 처리 가능</b>하고 <b>임의 블록에 바로 접근</b>할 수 있어 <b>현대에 가장 선호</b>. <b>카운터를 재사용하면 치명적</b><br>인증까지 결합한 것이 <b>GCM(Galois/Counter Mode)</b></div></div></div>"
      },
      {
        "k": "note",
        "title": "모드 비교 핵심 정리",
        "d": "<ul class='klist'><li><b>패딩이 필요한 모드</b> = <b>ECB·CBC</b>(블록 단위) / <b>필요 없는 모드</b> = <b>CFB·OFB·CTR</b>(스트림처럼 동작)</li><li><b>병렬 처리</b> — 암호화까지 병렬 되는 것은 <b>ECB·CTR</b>뿐. CBC·CFB는 <b>복호화만</b> 병렬 가능, OFB는 키 스트림 생성이 순차</li><li><b>오류 전파</b> — <b>OFB·CTR은 전파 없음</b>(해당 비트만), CBC·CFB는 <b>다음 블록까지</b>, ECB는 <b>그 블록만</b></li><li><b>IV/논스 필요</b> — ECB만 필요 없다. 나머지는 모두 필요하며 <b>재사용하면 안전성이 무너진다</b></li><li>기억법: <b>\"ECB는 쓰지 마라, CBC는 연쇄, CTR은 병렬\"</b> 세 문장이면 대부분의 문항이 풀린다</li></ul>"
      }
    ],
    "finalLiner": "구조 <b>Feistel(암·복호화 구조 동일, DES·SEED)</b> vs <b>SPN(전체 처리·빠름, AES·ARIA)</b> / 모드 <b>ECB=독립·패턴 노출로 금지</b>, <b>CBC=IV와 XOR 연쇄(복호화만 병렬)</b>, <b>CFB=암호문 피드백</b>, <b>OFB=키스트림 사전 생성·오류 전파 없음</b>, <b>CTR=카운터·완전 병렬(GCM의 토대)</b> / 패딩 필요는 <b>ECB·CBC</b>만",
    "related": ["symalg", "symkey", "cryptobasic"]
  },
  {
    "id": "symalg",
    "term": "블록 암호 알고리즘 상세 — DES · IDEA · RC5 · AES · SEED",
    "en": "DES / IDEA / RC5 / AES / SEED",
    "cat": "정보보안 일반",
    "tags": ["DES=64블록·56키·16라운드", "3DES=EDE", "IDEA=128키·PGP", "RC5=가변 파라미터", "AES=SPN·10/12/14라운드"],
    "oneLiner": "DES는 64비트 블록·56비트 키·Feistel 16라운드로 지금은 취약하고, 3DES(EDE)로 연명하다 AES가 표준이 됐다 / IDEA는 PGP에, RC5는 파라미터가 모두 가변인 것이 특징",
    "blocks": [
      {
        "k": "warn",
        "title": "DES — 구조와 암·복호화 과정",
        "d": "<b>DES(Data Encryption Standard)</b> — 1977년 미국 표준. <b>블록 64비트 · 키 56비트(패리티 8비트 포함하면 64) · Feistel 16라운드</b>.<div class='evo'><div class='evo-step'><span class='es-name'>① 초기 순열 (IP)</span><span class='es-note'>64비트 평문의 순서를 정해진 표대로 섞는다(보안 효과는 없고 하드웨어 편의용)</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 좌·우 32비트 분할</span><span class='es-note'>L0, R0로 나눈다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 16라운드 반복</span><span class='es-note'><b>Lᵢ = Rᵢ₋₁</b>, <b>Rᵢ = Lᵢ₋₁ ⊕ f(Rᵢ₋₁, Kᵢ)</b> — f 안에서 <b>확장(32→48) → 라운드키 XOR → S박스 8개(48→32) → 순열 P</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 좌우 교환 후 최종 순열 (IP⁻¹)</span><span class='es-note'>암호문 64비트 완성</span></div></div><ul class='klist'><li><b>복호화 = 같은 구조에 라운드 키만 K16→K1 역순</b>으로 넣으면 끝(Feistel의 최대 장점)</li><li><b>S박스(Substitution Box)</b>가 DES의 <b>유일한 비선형 요소</b>이자 보안의 핵심. 여기서 <b>혼돈</b>이 발생</li><li><b>취약점</b> — <b>키가 56비트뿐</b>이라 전수조사로 깨진다(1998년 56시간 만에 해독). <b>약한 키(Weak Key)</b>도 존재</li><li><b>3DES</b> — <b>EDE 방식(암호화→복호화→암호화)</b>으로 3번 적용. 키 2개면 112비트, 3개면 168비트 강도. <b>호환성 때문에 EDE</b>를 쓴다(키를 모두 같게 하면 <b>단일 DES와 동일</b>해져 하위 호환). 단점은 <b>3배 느림</b></li></ul>"
      },
      {
        "k": "note",
        "title": "AES · SEED",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>AES (Advanced Encryption Standard)</span><div class='row'>2001년 DES를 대체한 <b>현재 표준</b>. 공모전에서 뽑힌 <b>Rijndael</b>(레인달) 알고리즘.<br><b>블록 128비트 고정</b>, 키 <b>128 / 192 / 256비트</b> → 라운드 <b>10 / 12 / 14</b><br><b>SPN 구조</b>. 한 라운드 = <b>SubBytes(치환) → ShiftRows(행 이동) → MixColumns(열 섞기) → AddRoundKey(키 XOR)</b> (<b>마지막 라운드에는 MixColumns가 없다</b>)</div></div><div class='cmp-item'><span class='cmp-label'>SEED</span><div class='row'><b>KISA와 ETRI</b>가 개발한 <b>국내 표준</b>(1999). <b>블록 128비트</b>, 키 <b>128/256비트</b>, <b>Feistel 16라운드</b>.<br>전자상거래·금융에서 널리 쓰였다. 국제 표준(ISO/IEC, IETF)에도 등록</div></div></div>"
      },
      {
        "k": "note",
        "title": "IDEA · RC5 · 기타",
        "d": "<ul class='klist'><li><b>IDEA(International Data Encryption Algorithm)</b> — 스위스에서 개발. <b>블록 64비트 · 키 128비트 · 8.5라운드</b>. <b>XOR · 덧셈 · 곱셈</b>이라는 <b>서로 다른 세 연산을 섞는</b> 것이 특징. <b>PGP에 채택</b>된 것으로 유명. 특허 때문에 확산이 제한됐다</li><li><b>RC5</b> — 론 리베스트(RSA의 R) 설계. <b>블록 크기·키 길이·라운드 수가 모두 가변</b>인 것이 최대 특징. <b>데이터 종속 회전(Data-dependent rotation)</b>을 사용하고 구조가 매우 단순하다. 후속이 <b>RC6</b>(AES 최종 후보)</li><li><b>Blowfish / Twofish</b> — 슈나이어 설계, 특허 없이 공개 / <b>Skipjack</b> — 미 NSA, 클리퍼 칩</li><li><b>혼합(하이브리드) 암호화</b> — <b>데이터는 빠른 대칭키로</b>, <b>그 대칭키만 공개키로</b> 암호화해 함께 보낸다. <b>전자봉투(Digital Envelope)</b>가 이것이며 <b>SSL/TLS·PGP·SET</b>가 모두 이 방식</li></ul>"
      }
    ],
    "finalLiner": "<b>DES=64블록·56키·Feistel 16라운드</b>, <b>Rᵢ=Lᵢ₋₁⊕f(Rᵢ₋₁,Kᵢ)</b>, <b>복호화는 라운드 키 역순</b>, <b>S박스가 유일한 비선형 요소</b> / <b>3DES=EDE(암→복→암)</b> / <b>AES=Rijndael·128블록·키128/192/256→라운드10/12/14·SPN(SubBytes·ShiftRows·MixColumns·AddRoundKey, 마지막엔 MixColumns 없음)</b> / <b>IDEA=64블록·128키·PGP</b>, <b>RC5=블록·키·라운드 모두 가변</b>, <b>SEED=국내 128비트 Feistel</b>",
    "related": ["blockmode", "symkey", "dhrsa"]
  },
  {
    "id": "cryptanalysis",
    "term": "암호 분석 방법의 종류",
    "en": "Cryptanalysis",
    "cat": "정보보안 일반",
    "tags": ["암호문 단독·기지 평문", "선택 평문·선택 암호문", "차분·선형 분석", "부채널 공격", "중간 만남 공격"],
    "oneLiner": "공격자가 무엇을 가졌느냐로 암호문 단독→기지 평문→선택 평문→선택 암호문 순으로 공격이 강해진다 / 기법으로는 전수조사·차분 분석·선형 분석·부채널 공격이 대표적",
    "blocks": [
      {
        "k": "warn",
        "title": "가진 정보에 따른 4분류 (순서째로 출제)",
        "d": "<div class='evo'><div class='evo-step'><span class='es-name'>① 암호문 단독 공격 (COA, Ciphertext Only)</span><span class='es-note'><b>암호문만</b> 가지고 분석. 공격자에게 <b>가장 불리</b>하지만 <b>가장 현실적</b>. 빈도 분석이 여기</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 기지(알려진) 평문 공격 (KPA, Known Plaintext)</span><span class='es-note'><b>평문–암호문 쌍을 일부 알고 있다</b>. 메일 머리말·파일 헤더처럼 예측 가능한 부분을 이용</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 선택 평문 공격 (CPA, Chosen Plaintext)</span><span class='es-note'><b>원하는 평문을 넣어 암호문을 얻을 수 있다</b>. 암호화 장치에 접근 가능한 상황(공개키는 누구나 암호화 가능하므로 <b>항상 CPA에 노출</b>)</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 선택 암호문 공격 (CCA, Chosen Ciphertext)</span><span class='es-note'><b>원하는 암호문을 넣어 평문을 얻을 수 있다</b>. 공격자에게 <b>가장 유리</b>. 패딩 오라클 공격이 대표 사례</span></div></div><p class='on-key'><span class='lbl'>암기</span><b>암단 → 기평 → 선평 → 선암</b> 순으로 <b>공격자의 능력이 강해진다</b>. \"가장 강력한 공격은?\" → <b>선택 암호문 공격</b>.</p>"
      },
      {
        "k": "note",
        "title": "대표적인 공격 기법",
        "d": "<ul class='klist'><li><b>전수 조사(Brute Force / 완전 탐색)</b> — 모든 키를 다 시도. <b>키 길이가 짧으면 성립</b>(DES 56비트)</li><li><b>차분 분석(Differential Cryptanalysis)</b> — <b>평문 쌍의 차이가 암호문 차이에 어떻게 나타나는지</b> 통계적으로 추적. <b>선택 평문 공격</b>에 해당. DES의 S박스는 이미 이 공격을 염두에 두고 설계돼 있었다</li><li><b>선형 분석(Linear Cryptanalysis)</b> — 평문·암호문·키 비트 사이의 <b>선형 근사식</b>을 찾아 키를 추정. <b>기지 평문 공격</b>에 해당</li><li><b>중간 만남 공격(Meet-in-the-Middle)</b> — 2중 암호화(2DES)에서 <b>양쪽에서 계산해 중간값을 맞춰</b> 키를 찾는다. <b>2DES를 쓰지 않고 3DES를 쓰는 이유</b></li><li><b>부채널 공격(Side Channel)</b> — 알고리즘이 아니라 <b>구현의 물리적 흔적</b>을 관찰. <b>전력 소모(DPA)·연산 시간·전자파·소리·발열</b>. 수학적으로 안전해도 뚫린다</li><li><b>재전송(Replay)</b> · <b>중간자(MITM)</b> · <b>사전 공격</b> · <b>레인보우 테이블</b>(해시 대상)</li></ul>"
      }
    ],
    "finalLiner": "능력 순서 <b>암호문 단독(COA) → 기지 평문(KPA) → 선택 평문(CPA) → 선택 암호문(CCA, 가장 강력)</b> / 기법 <b>전수조사 · 차분 분석(선택 평문) · 선형 분석(기지 평문) · 중간 만남 공격(2DES가 아닌 3DES를 쓰는 이유) · 부채널 공격(전력·시간·전자파로 구현을 노림)</b>",
    "related": ["classic", "symalg", "hash"]
  },
  {
    "id": "dhrsa",
    "term": "디피-헬만 키 교환과 RSA 암·복호화 과정",
    "en": "Diffie-Hellman Key Exchange / RSA",
    "cat": "정보보안 일반",
    "tags": ["DH=이산대수·키 교환 전용", "g^ab mod p", "중간자 공격에 취약", "RSA=소인수분해", "C=M^e mod n"],
    "oneLiner": "디피-헬만은 공개된 채널에서 서로 g^ab mod p라는 같은 비밀값에 도달하는 키 교환 방식(인증이 없어 중간자에 취약) / RSA는 C=M^e mod n으로 암호화하고 M=C^d mod n으로 복호화한다",
    "blocks": [
      {
        "k": "warn",
        "title": "디피-헬만 키 교환 과정",
        "d": "1976년 <b>최초의 공개키 개념</b>. <b>암호화 알고리즘이 아니라 \"키를 나눠 갖는\" 방법</b>이다. 근거는 <b>이산대수 문제</b>(g^x mod p는 쉽지만 x를 되찾기는 어렵다).<pre>공개 값:  소수 p,  원시근 g       ← 누구나 알아도 됨\n\n① 앨리스: 비밀 a 선택 → A = g^a mod p 를 전송\n② 밥    : 비밀 b 선택 → B = g^b mod p 를 전송\n③ 앨리스: K = B^a mod p = g^(ba) mod p\n④ 밥    : K = A^b mod p = g^(ab) mod p\n\n→ 둘은 같은 K에 도달하지만, 도청자는 p·g·A·B만 보고는\n   a·b를 알 수 없어 K를 계산할 수 없다</pre><ul class='klist'><li><b>키를 실제로 전송하지 않고도</b> 공유 비밀을 만든다는 것이 핵심</li><li><b>치명적 약점: 인증 기능이 없다</b> → <b>중간자 공격(MITM)</b>에 그대로 노출. 중간자가 양쪽과 각각 DH를 수행하면 <b>양쪽 다 속는다</b><br>대책 = <b>전자서명·인증서로 상대를 확인</b>(SSL/TLS·IPSec의 IKE가 이렇게 쓴다)</li><li><b>DHE/ECDHE</b> — 매 세션 새 값을 쓰는 <b>임시(Ephemeral)</b> 방식. <b>순방향 비밀성(PFS)</b>을 제공해 나중에 서버 개인키가 유출돼도 <b>과거 통신은 복호화되지 않는다</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "RSA 키 생성과 암·복호화",
        "d": "근거는 <b>소인수분해의 어려움</b>(큰 두 소수의 곱은 쉽지만 되돌리기는 어렵다).<pre>[키 생성]\n① 큰 소수 p, q 선택 →  n = p × q\n② ø(n) = (p−1)(q−1)                    ← 오일러 함수\n③ ø(n)과 서로소인 e 선택               ← 공개키 지수 (보통 65537)\n④ e × d ≡ 1 (mod ø(n)) 인 d 계산        ← 개인키 지수\n\n   공개키 = (e, n)      개인키 = (d, n)\n\n[암호화]  C = M^e mod n      ← 수신자의 공개키\n[복호화]  M = C^d mod n      ← 수신자의 개인키\n[서 명]  S = M^d mod n  (개인키) →  검증 M = S^e mod n (공개키)</pre><ul class='klist'><li><b>p·q는 반드시 폐기</b>해야 한다 — 알려지면 d가 즉시 계산된다</li><li>안전성은 <b>n을 소인수분해하지 못한다</b>는 데 전적으로 의존 → 현재 <b>2048비트 이상</b> 권장</li><li><b>양자 컴퓨터의 쇼어(Shor) 알고리즘</b>이 소인수분해·이산대수를 모두 깨므로 <b>RSA·DH·ECC가 함께 위협</b>받는다 → <b>양자내성암호(PQC)</b>로 전환 중</li></ul>"
      },
      {
        "k": "safe",
        "title": "혼합(하이브리드) 암호화 — 실제로 쓰는 방식",
        "d": "공개키는 <b>너무 느려서</b> 대용량 데이터에 직접 쓸 수 없다. 그래서 <b>둘을 조합</b>한다.<div class='evo'><div class='evo-step'><span class='es-name'>① 세션 키 생성</span><span class='es-note'>송신자가 <b>임시 대칭키(세션 키)</b>를 난수로 만든다</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>② 데이터 암호화</span><span class='es-note'>본문은 <b>빠른 대칭키(AES)</b>로 암호화</span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>③ 세션 키 암호화</span><span class='es-note'><b>세션 키만</b> 수신자의 <b>공개키</b>로 암호화 = <b>전자봉투</b></span></div><div class='evo-arrow'>→</div><div class='evo-step'><span class='es-name'>④ 전송·복호화</span><span class='es-note'>수신자가 <b>개인키로 세션 키를 풀고</b>, 그 키로 본문을 복호화</span></div></div><p class='on-key'><span class='lbl'>정리</span><b>속도는 대칭키에서, 키 분배는 공개키에서</b> 가져온다. <b>SSL/TLS·PGP·S/MIME·SET</b>가 전부 이 구조다.</p>"
      }
    ],
    "finalLiner": "<b>DH: 공개 p·g, 각자 a·b → A=g^a, B=g^b 교환 → 공유키 K=g^(ab) mod p</b>, 키를 보내지 않고 공유하지만 <b>인증이 없어 중간자에 취약</b>(서명 필요), <b>DHE/ECDHE는 순방향 비밀성</b> / <b>RSA: n=pq, ø(n)=(p−1)(q−1), ed≡1 mod ø(n) → C=M^e mod n, M=C^d mod n</b>, <b>p·q는 폐기</b> / 실제 사용은 <b>하이브리드(전자봉투)</b>",
    "related": ["pubkey", "symalg", "esignalg"]
  },
  {
    "id": "hash",
    "term": "해시 함수 — 조건 · 종류 · 생일 공격",
    "en": "Hash Function / Birthday Attack",
    "cat": "정보보안 일반",
    "tags": ["일방향성·충돌 저항성", "고정 길이 출력", "MD5·SHA-1 폐기", "생일 공격=2^(n/2)", "랜덤 오라클 모델"],
    "oneLiner": "해시는 임의 길이 입력을 고정 길이로 줄이는 일방향 함수로 키가 없고 복호화도 없다 / 조건은 일방향성과 두 종류의 충돌 저항성이며, 생일 공격 때문에 실질 안전성은 출력 길이의 절반이다",
    "blocks": [
      {
        "k": "def",
        "title": "특징과 갖춰야 할 조건",
        "d": "<b>해시 함수</b> — <b>임의 길이 입력 → 고정 길이 출력(다이제스트)</b>. <b>키가 없고, 복호화가 불가능</b>하다(암호화가 아니다).<ul class='klist'><li><b>압축성</b> — 출력이 <b>고정 길이</b></li><li><b>계산 용이성</b> — 해시값을 구하는 것은 <b>빨라야</b> 한다</li><li><b>일방향성(Preimage Resistance)</b> — <b>해시값 h로부터 원본 M을 찾을 수 없어야</b> 한다</li><li><b>두 번째 역상 저항성(Second Preimage Resistance, 약한 충돌 저항성)</b> — 주어진 <b>M과 같은 해시값을 갖는 다른 M′</b>을 찾을 수 없어야 한다</li><li><b>충돌 저항성(Collision Resistance, 강한 충돌 저항성)</b> — <b>해시값이 같은 아무 두 입력 쌍</b>을 찾을 수 없어야 한다. <b>가장 강한 조건</b></li><li><b>눈사태 효과</b> — 입력이 <b>1비트만 바뀌어도 출력이 완전히 달라져야</b> 한다</li></ul><p class='on-key'><span class='lbl'>용도</span><b>무결성 검증 · 전자서명(해시에 서명) · 패스워드 저장(해시+솔트) · 블록체인 · 파일 중복 확인</b>. <b>기밀성은 제공하지 않는다.</b></p>"
      },
      {
        "k": "warn",
        "title": "생일 공격 (Birthday Attack)",
        "d": "<b>생일 역설</b> — 사람이 <b>23명만 모여도</b> 생일이 같은 쌍이 있을 확률이 <b>50%를 넘는다</b>. \"특정 날짜와 같은 사람\"이 아니라 <b>\"아무 두 사람\"</b>을 찾기 때문에 훨씬 쉽다.<ul class='klist'><li>해시에 적용하면 — <b>n비트 출력</b>의 해시에서 <b>충돌 쌍</b>을 찾는 데 필요한 시도 횟수는 <b>2ⁿ이 아니라 약 2^(n/2)</b></li><li>즉 <b>SHA-256의 충돌 저항 강도는 실질적으로 128비트</b>. <b>출력 길이를 충돌 저항성의 2배로 잡아야</b> 하는 이유</li><li>공격 시나리오: 내용은 다르지만 <b>해시가 같은 두 계약서</b>를 미리 준비해 서명받은 뒤 바꿔치기 → <b>전자서명 위조</b></li><li><b>일방향성(2ⁿ)</b>보다 <b>충돌 저항성(2^(n/2))</b>이 먼저 무너진다는 것이 핵심</li></ul>"
      },
      {
        "k": "note",
        "title": "해시 알고리즘의 종류",
        "d": "<ul class='klist'><li><b>MD5</b> — 출력 <b>128비트</b>. <b>충돌이 실제로 발견되어 폐기</b>. 무결성 확인용 체크섬 정도로만 잔존</li><li><b>SHA-1</b> — 출력 <b>160비트</b>. <b>2017년 실제 충돌(SHAttered) 성공</b> → <b>사용 금지</b></li><li><b>SHA-2 계열</b> — <b>SHA-224/256/384/512</b>. <b>현재 표준</b>. SHA-256이 가장 널리 쓰인다(블록체인 포함)</li><li><b>SHA-3(Keccak)</b> — SHA-2와 <b>내부 구조가 전혀 다른</b>(스펀지 구조) 차세대 표준. SHA-2를 대체하려는 것이 아니라 <b>대비책</b>으로 표준화</li><li><b>HAS-160</b> — <b>국내 표준</b> 해시(160비트). <b>KCDSA와 짝</b>으로 사용. 현재는 <b>LSH</b>(국내 신규 표준)로 대체</li><li><b>bcrypt · scrypt · PBKDF2 · Argon2</b> — <b>일부러 느리게</b> 만든 패스워드 전용 해시. 무차별 대입을 어렵게 한다(<b>일반 해시는 너무 빨라 패스워드 저장에 부적합</b>)</li><li>대부분 <b>머클-담고르(Merkle-Damgård) 구조</b>를 쓰며, 이 때문에 <b>길이 확장 공격</b>이 가능해 HMAC 같은 설계가 필요해졌다</li></ul>"
      },
      {
        "k": "note",
        "title": "랜덤 오라클 모델 (Random Oracle Model)",
        "d": "해시 함수를 <b>\"완벽한 이상적 함수\"라고 가정</b>하고 암호 방식의 안전성을 증명하는 <b>이론적 모델</b>.<ul class='klist'><li>가정하는 성질: <b>어떤 입력이 들어와도 완전한 난수를 출력</b>하고, <b>같은 입력에는 늘 같은 값</b>을 돌려주며, 출력으로부터 <b>입력을 전혀 알 수 없다</b></li><li>왜 쓰나 — 실제 해시(SHA-256 등)의 내부 구조를 그대로 두고 증명하는 것은 매우 어렵기 때문에, <b>이상적인 상자로 대체해 증명을 단순화</b>한다. <b>RSA-OAEP·PSS</b> 등의 안전성 증명이 이 모델 위에 있다</li><li><b>한계</b> — <b>현실의 해시는 랜덤 오라클이 아니다</b>. 이 모델에서 안전해도 <b>실제 구현에서는 안전하지 않을 수 있다</b>는 반례가 존재한다. 그래서 <b>표준 모델(Standard Model)</b>에서의 증명을 더 강하게 본다</li></ul>"
      }
    ],
    "finalLiner": "해시=<b>임의 길이→고정 길이, 키 없음·복호화 없음</b> / 조건 <b>일방향성 · 두 번째 역상 저항성(약한 충돌) · 충돌 저항성(강한 충돌) · 눈사태 효과</b> / <b>생일 공격 때문에 충돌 저항 강도는 2^(n/2)</b> — 출력 길이를 2배로 잡는 이유 / <b>MD5(128)·SHA-1(160) 폐기 → SHA-2(256)·SHA-3(Keccak)</b>, 국내 <b>HAS-160→LSH</b>, 패스워드는 <b>bcrypt·PBKDF2</b> / <b>랜덤 오라클=이상적 해시를 가정한 증명 모델</b>",
    "related": ["mac", "esign", "cryptanalysis"]
  },
  {
    "id": "mac",
    "term": "MAC과 HMAC",
    "en": "Message Authentication Code / HMAC",
    "cat": "정보보안 일반",
    "tags": ["해시+대칭키", "무결성+송신자 인증", "부인방지 불가", "HMAC=키를 두 번 사용", "CMAC=블록암호 기반"],
    "oneLiner": "MAC=메시지와 공유 대칭키로 만든 인증 코드로 무결성과 송신자 인증을 함께 제공한다 / 단 송·수신자가 같은 키를 갖기 때문에 부인방지는 불가능하며, 해시 기반 구현이 HMAC",
    "blocks": [
      {
        "k": "def",
        "title": "왜 해시만으로는 부족한가",
        "d": "해시값만 함께 보내면 <b>공격자가 메시지를 바꾸고 해시도 다시 계산해</b> 붙이면 그만이다. <b>해시는 누구나 계산할 수 있기 때문</b>이다.<p class='on-key'><span class='lbl'>MAC의 해답</span><b>비밀 키를 아는 사람만</b> 만들 수 있게 한다. <b>MAC = f(메시지, 공유 비밀키)</b>. 키를 모르면 <b>올바른 MAC을 만들 수 없으므로</b> 변조가 탐지된다.</p><ul class='klist'><li>제공: <b>무결성 + 메시지 인증(송신자 확인)</b></li><li>제공하지 않음: <b>기밀성</b>(내용을 감추지 않음), <b>부인방지</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "MAC이 부인방지를 못 하는 이유 (핵심 논리)",
        "d": "<b>송신자와 수신자가 똑같은 키를 갖고 있다.</b> 따라서 <b>수신자도 그 MAC을 똑같이 만들 수 있다.</b><ul class='klist'><li>분쟁이 생겨 제3자(법원)에게 가져가도 — \"<b>수신자가 스스로 만든 것일 수도 있다</b>\"는 반박을 배제할 수 없다</li><li>즉 <b>MAC은 둘 사이에서는 유효하지만 제3자에게 증명할 수 없다</b></li><li><b>전자서명은 개인키가 서명자에게만 있으므로</b> 이 문제가 없다 → <b>부인방지는 전자서명만 가능</b></li></ul><div class='cmp two'><div class='cmp-item'><span class='cmp-label'>MAC</span><div class='row'><b>대칭키</b> / 무결성·인증 <b>O</b> / 부인방지 <b>X</b> / <b>빠르다</b> / 사전에 키 공유 필요</div></div><div class='cmp-item'><span class='cmp-label'>전자서명</span><div class='row'><b>공개키(개인키로 서명)</b> / 무결성·인증 <b>O</b> / 부인방지 <b>O</b> / <b>느리다</b> / PKI 필요</div></div></div>"
      },
      {
        "k": "note",
        "title": "HMAC과 MAC의 종류",
        "d": "<ul class='klist'><li><b>HMAC(Hash-based MAC)</b> — <b>해시 함수와 비밀 키를 결합</b>한 표준 MAC. 표기는 <b>HMAC-SHA256</b>처럼 쓴 해시를 밝힌다<pre>HMAC(K, M) = H( (K ⊕ opad) ‖ H( (K ⊕ ipad) ‖ M ) )</pre><b>키를 두 번(안쪽·바깥쪽) 사용하는 이중 구조</b>가 핵심 — 단순히 <b>H(K‖M)</b>으로 하면 머클-담고르 구조의 <b>길이 확장 공격</b>에 뚫리기 때문에 이렇게 설계됐다</li><li><b>CMAC</b> — <b>블록 암호(AES 등)</b>를 이용해 만드는 MAC. 해시 대신 암호 알고리즘을 재활용</li><li><b>CBC-MAC</b> — CBC 모드로 암호화한 <b>마지막 블록</b>을 MAC으로 쓴다(가변 길이 메시지에 취약해 CMAC으로 개선)</li><li><b>GMAC / AEAD</b> — <b>암호화와 인증을 한 번에</b> 처리(<b>AES-GCM</b>). 현대 프로토콜의 표준 방향</li></ul>"
      },
      {
        "k": "note",
        "title": "사용 방식과 순서",
        "d": "기밀성까지 필요하면 암호화와 MAC을 함께 쓰는데, <b>순서에 따라 안전성이 다르다</b>.<div class='cmp'><div class='cmp-item'><span class='cmp-label'>Encrypt-then-MAC (권장)</span><div class='row'><b>암호화한 뒤 그 암호문에 MAC</b>. 수신자는 <b>복호화 전에 MAC부터 검증</b>해 위조된 데이터를 아예 처리하지 않는다. <b>가장 안전</b>(IPSec 방식)</div></div><div class='cmp-item'><span class='cmp-label'>MAC-then-Encrypt</span><div class='row'>평문에 MAC을 붙이고 전체를 암호화. <b>SSL/TLS가 오래 쓴 방식</b>이며 <b>패딩 오라클 공격</b>의 원인이 되기도 했다</div></div><div class='cmp-item'><span class='cmp-label'>Encrypt-and-MAC</span><div class='row'>평문 MAC과 암호문을 각각 보낸다. <b>MAC이 평문 정보를 흘릴 수 있다</b>(SSH 방식)</div></div></div><p class='on-key'><span class='lbl'>활용</span><b>IPSec의 AH·ESP 인증, TLS 레코드 무결성, API 요청 서명, JWT(HS256)</b>가 모두 MAC(HMAC) 기반이다.</p>"
      }
    ],
    "finalLiner": "MAC=<b>메시지+공유 대칭키</b>로 만든 인증 코드 → <b>무결성·송신자 인증 O, 기밀성·부인방지 X</b> / <b>부인방지가 안 되는 이유는 수신자도 같은 키로 만들 수 있어서</b> — 부인방지는 <b>전자서명만</b> / <b>HMAC=H((K⊕opad)‖H((K⊕ipad)‖M)), 키를 두 번 써서 길이 확장 공격을 막는다</b> / <b>CMAC(블록암호)·GCM(암호화+인증)</b> / 순서는 <b>Encrypt-then-MAC이 권장</b>",
    "related": ["hash", "esign", "ipsec"]
  }
]);
