/* 네트워크 위협 및 대응 기술 — 악성메일·랜섬웨어·망분리·망연계 카드 데이터 */
window.DATA = (window.DATA || []).concat(
[
  {
    "id": "mailattack",
    "term": "악성 메일 공격",
    "en": "Malicious Email Attacks",
    "cat": "네트워크 보안",
    "tags": ["APT 초기 침투 1위", "스피어 피싱·웨일링", "매크로·이중 확장자", "샌드박스 검사", "모의훈련이 핵심"],
    "oneLiner": "메일로 악성 첨부·링크를 보내 침투 / 사회공학이라 기술만으론 못 막음 / APT의 대표적 최초 침투 경로 / 대응=샌드박스·첨부 차단·발신자 검증+교육",
    "blocks": [
      {
        "k": "def",
        "title": "유형",
        "d": "<ul class='klist'><li><b>피싱(Phishing)</b> — 불특정 다수에게 미끼 메일을 뿌려 <b>계정·금융정보</b>를 낚음</li><li><b>스피어 피싱(Spear Phishing)</b> — <b>특정 개인·조직을 조사해</b> 맞춤 제작. 실제 업무 메일처럼 보여 속기 쉽다. <b>APT의 시작점</b></li><li><b>웨일링(Whaling)</b> — <b>경영진·고위 임원</b>을 노림(큰 물고기)</li><li><b>BEC(업무용 이메일 침해)</b> — 거래처·임원을 사칭해 <b>송금·정보 요청</b></li></ul>"
      },
      {
        "k": "warn",
        "title": "침투 수단",
        "d": "<ul class='klist'><li><b>악성 첨부파일</b> — 문서의 <b>매크로</b>, <b>이중 확장자</b>(<code>보고서.pdf.exe</code>)로 위장, 압축파일에 숨기기</li><li><b>악성 링크</b> — 진짜와 비슷한 <b>피싱 사이트</b>로 유도해 계정 입력을 유도</li><li><b>발신자 위조</b> — SMTP는 <b>발신자를 검증하지 않아</b> 사칭이 쉽다</li></ul><p class='on-key'><span class='lbl'>왜 막기 어려운가</span><b>사회공학</b>이기 때문이다. 취약점을 뚫는 게 아니라 <b>사람의 판단을 속인다</b> — 그래서 <b>기술적 대책만으로는 한계</b>가 있고, 이것이 APT의 <b>최초 침투 경로 1순위</b>인 이유다.</p>"
      },
      {
        "k": "safe",
        "title": "대응",
        "d": "<b>기술적</b><ul class='klist'><li><b>샌드박스</b> — 첨부파일을 <b>격리된 가상 환경에서 실제로 실행</b>해 악성 행위를 관찰(알려지지 않은 악성코드에 유효)</li><li><b>첨부 확장자 차단</b>(실행파일 계열), <b>매크로 기본 비활성화</b></li><li><b>발신자 검증</b> — <b>SPF·DKIM·DMARC</b>로 위조 메일 차단</li><li>URL 재작성·링크 검사, 스팸·메일 보안 솔루션</li></ul><b>관리적</b> — <b>모의 훈련과 보안 인식 교육</b>이 사실상 가장 효과적이다. <b>신고 창구</b>를 만들어 의심 메일을 쉽게 알리게 한다."
      }
    ],
    "finalLiner": "악성메일 = <b>피싱 / 스피어 피싱(표적·APT 시작점) / 웨일링(임원) / BEC(사칭 송금)</b> / 수단=<b>매크로·이중 확장자·악성 링크·발신자 위조</b> / <b>사회공학이라 기술만으론 한계</b> → <b>샌드박스·첨부 차단·SPF/DKIM/DMARC + 모의훈련·교육</b>",
    "related": ["ransomware", "smtp", "apt"]
  },
  {
    "id": "ransomware",
    "term": "랜섬웨어 · APT형 표적 공격",
    "en": "Ransomware · APT-style Attack",
    "cat": "네트워크 보안",
    "tags": ["파일 암호화 후 몸값", "APT형 표적화", "이중 갈취", "백업까지 파괴", "3-2-1 백업"],
    "oneLiner": "파일을 암호화하고 복호화 대가를 요구 / 무차별 유포에서 APT식 표적 공격으로 진화 / 백업까지 파괴하고 데이터를 먼저 유출해 협박(이중 갈취)",
    "blocks": [
      {
        "k": "def",
        "title": "정의 · 진화",
        "d": "<b>랜섬웨어</b> = <b>Ransom(몸값) + Software</b>. 파일을 암호화해 못 쓰게 만들고 <b>복호화 키의 대가로 금전</b>을 요구한다.<p class='on-key'><span class='lbl'>무엇이 달라졌나</span>예전에는 <b>불특정 다수에게 뿌리는</b> 방식이었지만, 지금은 <b>APT처럼 특정 조직을 노려 준비한 뒤 한 방에</b> 터뜨린다. <b>RaaS(서비스형 랜섬웨어)</b>로 기술이 없어도 공격을 구매할 수 있게 되면서 더 흔해졌다.</p>"
      },
      {
        "k": "warn",
        "title": "APT형 랜섬웨어의 진행 (킬체인과 동일)",
        "d": "<div class='evo'><div class='evo-step'><div class='es-name'>1 침투</div><div class='es-note'><b>스피어 피싱 메일</b>·노출된 <b>RDP</b>·VPN 취약점으로 최초 진입</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>2 권한 상승·확산</div><div class='es-note'>계정 탈취 후 <b>내부를 측면 이동</b>하며 범위를 넓힘</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>3 데이터 유출</div><div class='es-note'>암호화 <b>전에 먼저 자료를 빼돌린다</b></div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>4 백업 파괴</div><div class='es-note'><b>백업·섀도 복사본을 먼저 삭제</b>해 복구 수단을 없앰</div></div><span class='evo-arrow'>→</span><div class='evo-step'><div class='es-name'>5 암호화·협박</div><div class='es-note'>일제히 암호화 후 몸값 요구</div></div></div><p class='on-key'><span class='lbl'>이중 갈취(Double Extortion)</span>“돈을 안 내면 <b>훔친 자료를 공개하겠다</b>”. <b>백업이 있어서 복구할 수 있어도</b> 유출 협박 때문에 굴복시키려는 수법이다.</p>"
      },
      {
        "k": "safe",
        "title": "대응 — 백업이 최선",
        "d": "<ul class='klist'><li><b>3-2-1 백업 규칙</b> — 사본 <b>3</b>개, 서로 다른 매체 <b>2</b>개, <b>오프사이트(외부) 1</b>개</li><li><b>오프라인·불변(WORM) 백업</b> — 랜섬웨어가 <b>연결된 백업까지 지우므로</b> 네트워크에서 분리된 사본이 반드시 필요하다. <b>복구 훈련</b>도 정기적으로</li><li><b>초기 침투 차단</b> — 메일 보안·교육, <b>RDP 인터넷 노출 금지</b>·MFA, 취약점 패치</li><li><b>확산 차단</b> — <b>망분리·네트워크 분할</b>, 최소 권한, EDR로 이상 행위 탐지</li><li><b>몸값 지불은 권장되지 않는다</b> — 복구를 보장하지 않고 재범을 부추긴다</li></ul>"
      }
    ],
    "finalLiner": "랜섬웨어=암호화 후 몸값 / 요즘은 <b>APT형 표적 공격</b>(침투→확산→<b>유출</b>→<b>백업 파괴</b>→암호화) / <b>이중 갈취</b>=유출 자료 공개 협박 → 백업만으론 부족 / 대응=<b>3-2-1 백업·오프라인 사본</b>·RDP 차단·메일 보안·<b>망분리로 확산 차단</b>",
    "related": ["mailattack", "netsep", "apt"]
  },
  {
    "id": "netsep",
    "term": "망분리 (인터넷 접속 차단)",
    "en": "Network Separation",
    "cat": "네트워크 보안",
    "tags": ["업무망 vs 인터넷망", "물리적 분리", "논리적 분리 SBC·CBC", "악성코드 유입·자료 유출 차단", "비용 vs 보안"],
    "oneLiner": "업무망과 인터넷망을 분리해 악성코드 유입과 자료 유출을 차단 / 물리적 분리(PC 2대·보안 최고·비용↑) vs 논리적 분리(가상화·SBC/CBC·비용↓)",
    "blocks": [
      {
        "k": "def",
        "title": "왜 하는가",
        "d": "대부분의 침해는 <b>인터넷을 통해 들어오고 인터넷을 통해 나간다</b>. 그래서 아예 <b>업무망과 인터넷망을 끊어 놓으면</b>:<ul class='klist'><li><b>악성코드 유입 차단</b> — 메일·웹으로 들어오는 경로 자체를 없앰</li><li><b>내부 자료 유출 차단</b> — 유출하려 해도 <b>내보낼 통로가 없다</b></li><li>랜섬웨어의 <b>내부 확산</b>도 제한된다</li></ul>공공기관·금융권 등에서는 <b>법·규정으로 의무화</b>되어 있다."
      },
      {
        "k": "note",
        "title": "물리적 망분리 vs 논리적 망분리",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>물리적 망분리</span><div class='row'>업무용·인터넷용 <b>PC와 네트워크를 물리적으로 따로</b> 둔다(2대 또는 망전환 장치).<br>➕ <b>보안성이 가장 높다</b><br>➖ <b>장비·공간·비용 부담</b>이 크고 사용자가 불편하다</div></div><div class='cmp-item'><span class='cmp-label'>논리적 망분리</span><div class='row'><b>가상화 기술</b>로 한 PC 안에서 두 영역을 나눈다.<br>➕ <b>비용이 낮고</b> 도입·운영이 유연<br>➖ <b>가상화가 뚫리면 분리도 무너져</b> 물리적 분리보다 보안이 약하다</div></div></div>"
      },
      {
        "k": "warn",
        "title": "논리적 망분리 — SBC vs CBC (출제)",
        "d": "<div class='cmp two'><div class='cmp-item'><span class='cmp-label'>SBC (Server Based Computing)</span><div class='row'><b>서버에 가상 데스크톱을 두고</b> 사용자가 원격으로 접속해 쓴다(VDI).<br>➕ <b>중앙에서 통제·관리</b>가 쉽고 단말에 자료가 남지 않는다<br>➖ <b>서버 투자와 네트워크 부하</b>가 크다</div></div><div class='cmp-item'><span class='cmp-label'>CBC (Client Based Computing)</span><div class='row'><b>PC 내부에 가상 영역</b>을 만들어 업무/인터넷을 분리한다.<br>➕ <b>서버 부담이 적고</b> 비용이 낮다<br>➖ <b>PC 성능</b>이 필요하고 <b>단말에서 분리가 깨질</b> 위험이 상대적으로 크다</div></div></div><b>구분 요령</b>: <b>S</b>erver=서버에 둔다, <b>C</b>lient=클라이언트(PC)에 둔다."
      }
    ],
    "finalLiner": "망분리=업무망↔인터넷망 차단(<b>악성코드 유입·자료 유출·확산</b> 방지) / <b>물리적</b>(PC 2대·<b>보안 최고</b>·비용↑) vs <b>논리적</b>(가상화·비용↓·상대적 취약) / 논리적은 <b>SBC(서버에 가상 데스크톱·중앙통제)</b> vs <b>CBC(PC 안에 가상영역·서버부담↓)</b>",
    "related": ["netlink", "ransomware", "firewall"]
  },
  {
    "id": "netlink",
    "term": "망연계 · 자료연계",
    "en": "Network Interlock / Data Transfer",
    "cat": "네트워크 보안",
    "tags": ["분리했으니 연결이 필요", "스토리지 연계", "인피니밴드", "소켓 연계", "일방향·악성코드 검사"],
    "oneLiner": "망을 분리하면 자료를 못 주고받으므로, 통제된 방법으로만 전달하는 장치 / 방식=스토리지 연계·인피니밴드·소켓 연계 / 요건=일방향·악성코드 검사·승인·로그",
    "blocks": [
      {
        "k": "def",
        "title": "왜 필요한가 — 망분리의 필연적 짝",
        "d": "망을 분리하면 보안은 좋아지지만 <b>업무에 필요한 자료를 주고받을 수 없다</b>. 그렇다고 <b>USB로 옮기면</b> 통제가 안 되고 <b>악성코드 유입·자료 유출</b>이 그대로 일어난다.<p class='on-key'><span class='lbl'>그래서</span><b>정해진 통로로, 검사와 승인을 거쳐서만</b> 자료가 오가도록 하는 시스템이 <b>망연계(자료연계)</b>다. <b>망분리와 망연계는 한 세트</b>로 기억한다.</p>"
      },
      {
        "k": "note",
        "title": "연계 방식",
        "d": "<ul class='klist'><li><b>스토리지 연계</b> — 두 망 사이에 <b>공유 저장장치</b>를 두고, <b>양쪽이 동시에 붙지 못하게</b> 번갈아 접근시킨다. 한쪽이 쓰고 연결이 끊긴 뒤 다른 쪽이 읽는 식이라 <b>물리적 단절이 유지</b>된다</li><li><b>인피니밴드(InfiniBand) 연계</b> — <b>고속·저지연 인터커넥트</b> 기술을 이용. <b>대용량 자료를 빠르게</b> 옮겨야 할 때 유리하다</li><li><b>소켓(네트워크) 연계</b> — 응용 계층에서 <b>데이터만 전달</b>하고 일반 프로토콜은 차단. 구성이 유연하다</li><li><b>DB 연계</b> — 지정된 테이블·항목만 주고받는다</li></ul>"
      },
      {
        "k": "safe",
        "title": "보안 요건",
        "d": "<ul class='klist'><li><b>일방향 전송</b> — 필요하면 <b>한 방향으로만</b> 흐르게 해 역방향 유출을 원천 차단</li><li><b>악성코드 검사</b> — 넘어가는 파일을 백신·<b>샌드박스</b>로 검사</li><li><b>승인·결재 절차</b> — 반출 자료는 <b>담당자 승인</b>을 거치게</li><li><b>로그·감사</b> — 누가 언제 무엇을 옮겼는지 기록해 <b>추적 가능</b>하게</li><li>연계 구간 자체가 <b>두 망을 잇는 유일한 통로</b>이므로, 이 시스템이 뚫리면 망분리가 무의미해진다 → <b>최소 기능·강화된 통제</b>가 필수</li></ul>"
      }
    ],
    "finalLiner": "망연계=분리된 망 사이에 <b>통제된 자료 전달</b>(망분리와 한 세트) / 방식 <b>스토리지 연계(번갈아 접근·물리 단절 유지)</b>·<b>인피니밴드(고속·대용량)</b>·<b>소켓 연계(데이터만)</b>·DB 연계 / 요건=<b>일방향·악성코드 검사·승인·로그</b>",
    "related": ["netsep", "ransomware", "firewall"]
  }
]
);
