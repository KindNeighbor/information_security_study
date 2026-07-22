/* quiz.js — 카드 데이터(window.DATA)와 약어집(window.GLOSSARY)으로
   복습 문제를 '즉석 생성'한다. 문제를 하드코딩하지 않으며, 풀 때마다 랜덤.
   index.html이 엔진 뒤에 defer로 로드한다. */
(function () {
  const DATA = (window.DATA || []).filter(c => c && c.term && c.oneLiner);
  const GLOSSARY = (window.GLOSSARY || []).filter(g => g && g.ab && g.full);
  const N = 10; // 한 세트 문제 수 ("10개당 복습")

  if (DATA.length < 4) return; // 문제 만들 최소치

  /* ---------- 유틸 ---------- */
  const rnd = n => Math.floor(Math.random() * n);
  const pick = arr => arr[rnd(arr.length)];
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function esc(s) { return String(s == null ? "" : s); }

  // 오답 보기 n개 뽑기 (같은 분류 우선, 값 중복 제거, 정답과 다르게)
  function distractors(pool, valOf, correct, n, prefer) {
    const seen = new Set([correct]);
    let items = pool.filter(x => { const v = valOf(x); if (!v || seen.has(v)) return false; seen.add(v); return true; });
    const pref = prefer ? items.filter(prefer) : [];
    const rest = prefer ? items.filter(x => !prefer(x)) : items;
    return [...shuffle(pref), ...shuffle(rest)].slice(0, n).map(valOf);
  }

  function explainOf(c) { return c.finalLiner || c.oneLiner || ""; }
  function make(q, correctText, wrongTexts, explain, cardId) {
    if (wrongTexts.length < 3) return null;
    const options = shuffle([{ text: correctText, correct: true }, ...wrongTexts.map(t => ({ text: t, correct: false }))]);
    return { q, options, explain, cardId };
  }

  /* ---------- 문제 생성기 (카드 필드 조합) ---------- */
  function qTermToOne(c) {
    const w = distractors(DATA.filter(x => x.id !== c.id), x => x.oneLiner, c.oneLiner, 3, x => x.cat === c.cat);
    return make(`“<b>${esc(c.term)}</b>”의 핵심 설명으로 옳은 것은?`, c.oneLiner, w, explainOf(c), c.id);
  }
  function qOneToTerm(c) {
    const w = distractors(DATA.filter(x => x.id !== c.id), x => x.term, c.term, 3, x => x.cat === c.cat);
    return make(`다음 설명에 해당하는 용어는?<div class="qz-quote">“${esc(c.oneLiner)}”</div>`, c.term, w, explainOf(c), c.id);
  }
  function qEnToTerm(c) {
    if (!c.en) return null;
    const w = distractors(DATA.filter(x => x.id !== c.id), x => x.term, c.term, 3, x => x.cat === c.cat);
    return make(`영문 “<b>${esc(c.en)}</b>”에 해당하는 한글 용어는?`, c.term, w, explainOf(c), c.id);
  }
  function qAbToFull(g) {
    const w = distractors(GLOSSARY.filter(x => x.ab !== g.ab), x => x.full, g.full, 3);
    return make(`약어 “<b>${esc(g.ab)}</b>”의 풀네임(영문)은?`, g.full, w, `<b>${esc(g.ab)}</b> = ${esc(g.full)}<br>${esc(g.ko)}`, g.id);
  }
  function qOX(c) {
    const own = Math.random() < 0.5;
    let shown, isTrue;
    if (own) { shown = c.oneLiner; isTrue = true; }
    else {
      const other = pick(DATA.filter(x => x.id !== c.id));
      if (!other) return null;
      shown = other.oneLiner; isTrue = false;
    }
    const q = `<b>${esc(c.term)}</b>에 대한 설명이다. 맞으면 O, 틀리면 X.<div class="qz-quote">“${esc(shown)}”</div>`;
    const options = [{ text: "⭕ 맞다 (O)", correct: isTrue }, { text: "❌ 틀리다 (X)", correct: !isTrue }];
    const explain = isTrue ? explainOf(c) : `그 설명은 다른 개념의 것이에요.<br><b>${esc(c.term)}</b>: ${esc(c.oneLiner)}`;
    return { q, options, explain, cardId: c.id };
  }

  const enCards = DATA.filter(c => c.en);
  function genOne() {
    const gens = [() => qTermToOne(pick(DATA)), () => qOneToTerm(pick(DATA)), () => qOX(pick(DATA))];
    if (enCards.length >= 4) gens.push(() => qEnToTerm(pick(enCards)));
    if (GLOSSARY.length >= 4) gens.push(() => qAbToFull(pick(GLOSSARY)));
    for (let t = 0; t < 15; t++) { const q = pick(gens)(); if (q) return q; }
    return null;
  }
  function genQuiz(n) {
    const out = [], seen = new Set();
    let guard = 0;
    while (out.length < n && guard++ < n * 25) {
      const q = genOne(); if (!q) continue;
      const key = q.q + "||" + q.options.map(o => o.text).join("|");
      if (seen.has(key)) continue;
      seen.add(key); out.push(q);
    }
    return out;
  }

  /* ---------- 스타일 ---------- */
  const style = document.createElement("style");
  style.textContent = `
  .qz-modal{position:fixed;inset:0;z-index:60;display:flex;align-items:flex-start;justify-content:center;
    padding:24px 16px;background:rgba(10,20,30,.55);overflow-y:auto;}
  .qz-modal[hidden]{display:none;}
  .qz-panel{background:var(--surface);border:1px solid var(--line);border-radius:16px;width:100%;max-width:640px;
    padding:20px 20px 22px;box-shadow:0 18px 50px rgba(10,25,40,.28);}
  .qz-top{display:flex;align-items:center;gap:12px;margin-bottom:6px;}
  .qz-top h2{font-size:17px;margin:0;flex:1;}
  .qz-prog{font-family:var(--mono);font-size:12px;color:var(--ink-soft);}
  .qz-close{background:none;border:0;font-size:26px;line-height:1;color:var(--ink-soft);cursor:pointer;padding:0 4px;}
  .qz-bar{height:5px;background:var(--surface-2);border-radius:99px;overflow:hidden;margin:8px 0 18px;}
  .qz-bar>i{display:block;height:100%;background:var(--safe);transition:width .25s;}
  .qz-q{font-size:16px;font-weight:600;line-height:1.55;margin:0 0 4px;}
  .qz-quote{margin-top:10px;padding:10px 13px;background:var(--surface-2);border-left:3px solid var(--accent);
    border-radius:0 8px 8px 0;font-weight:400;font-size:14.5px;color:var(--ink);}
  .qz-opts{display:flex;flex-direction:column;gap:9px;margin:18px 0 6px;}
  .qz-opt{text-align:left;background:var(--surface);border:1px solid var(--line-strong);border-radius:11px;
    padding:12px 14px;font-family:inherit;font-size:14.5px;color:var(--ink);cursor:pointer;transition:all .12s;}
  .qz-opt:hover:not(:disabled){border-color:var(--accent);background:var(--accent-soft);}
  .qz-opt:disabled{cursor:default;}
  .qz-opt.correct{border-color:var(--safe);background:var(--safe-soft);font-weight:600;}
  .qz-opt.wrong{border-color:var(--warn);background:var(--warn-soft);}
  .qz-expl{margin:14px 0 0;padding:12px 14px;border-radius:10px;background:var(--accent-soft);
    border:1px solid var(--line);font-size:13.8px;line-height:1.6;display:none;}
  .qz-expl.show{display:block;}
  .qz-expl .lbl{font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.05em;color:var(--accent);
    display:block;margin-bottom:4px;text-transform:uppercase;}
  .qz-foot{display:flex;align-items:center;gap:12px;margin-top:18px;}
  .qz-score{font-family:var(--mono);font-size:12.5px;color:var(--ink-soft);flex:1;}
  .qz-next{background:var(--accent);color:#fff;border:0;border-radius:11px;padding:11px 20px;font-family:inherit;
    font-weight:700;font-size:14px;cursor:pointer;}
  .qz-next:disabled{opacity:.4;cursor:default;}
  .qz-linkbtn{background:none;border:0;color:var(--accent);font-family:inherit;font-size:13px;font-weight:600;
    cursor:pointer;padding:0;text-decoration:underline;}
  .qz-result h3{font-size:22px;margin:6px 0 2px;}
  .qz-result .qz-big{font-family:var(--mono);font-size:40px;font-weight:800;color:var(--accent);margin:8px 0;}
  .qz-wrong{margin:16px 0 0;display:flex;flex-direction:column;gap:8px;}
  .qz-wrong .wi{padding:10px 12px;border:1px solid var(--line);border-radius:10px;font-size:13.5px;background:var(--surface-2);}
  .qz-wrong .wi b{color:var(--warn);}
  @media(max-width:560px){.qz-panel{padding:16px;}}
  `;
  document.head.appendChild(style);

  /* ---------- 모달 DOM ---------- */
  const modal = document.createElement("div");
  modal.className = "qz-modal"; modal.hidden = true;
  modal.innerHTML = `<div class="qz-panel">
    <div class="qz-top"><h2>🎲 복습 퀴즈</h2><span class="qz-prog" id="qzProg"></span>
      <button class="qz-close" id="qzClose" aria-label="닫기">&times;</button></div>
    <div class="qz-bar"><i id="qzBar" style="width:0"></i></div>
    <div id="qzBody"></div>
  </div>`;
  document.body.appendChild(modal);
  const body = modal.querySelector("#qzBody");
  const prog = modal.querySelector("#qzProg");
  const bar = modal.querySelector("#qzBar");
  modal.querySelector("#qzClose").onclick = close;
  modal.addEventListener("click", e => { if (e.target === modal) close(); });

  /* ---------- 상태·흐름 ---------- */
  let quiz = [], idx = 0, score = 0, wrong = [];
  function start() {
    quiz = genQuiz(N); idx = 0; score = 0; wrong = [];
    if (!quiz.length) { body.innerHTML = "<p>문제를 만들 수 없어요.</p>"; }
    else renderQ();
    modal.hidden = false;
    document.addEventListener("keydown", onKey);
  }
  function close() { modal.hidden = true; document.removeEventListener("keydown", onKey); }
  function onKey(e) { if (e.key === "Escape") close(); }

  function renderQ() {
    const item = quiz[idx];
    prog.textContent = `${idx + 1} / ${quiz.length}`;
    bar.style.width = (idx / quiz.length * 100) + "%";
    body.innerHTML = `<p class="qz-q">${item.q}</p>
      <div class="qz-opts" id="qzOpts"></div>
      <div class="qz-expl" id="qzExpl"><span class="lbl">해설</span><span id="qzExplTxt"></span>
        <div style="margin-top:8px"><button class="qz-linkbtn" id="qzGoCard">📇 이 개념 카드 보기</button></div></div>
      <div class="qz-foot"><span class="qz-score" id="qzScore"></span>
        <button class="qz-next" id="qzNext" disabled>다음</button></div>`;
    const opts = body.querySelector("#qzOpts");
    item.options.forEach(o => {
      const b = document.createElement("button");
      b.className = "qz-opt"; b.innerHTML = o.text;
      b.onclick = () => choose(b, o, item);
      opts.appendChild(b);
    });
    body.querySelector("#qzScore").textContent = `맞힌 개수 ${score}`;
    const next = body.querySelector("#qzNext");
    next.onclick = () => { idx++; (idx < quiz.length) ? renderQ() : renderResult(); };
  }

  function choose(btn, opt, item) {
    const opts = [...body.querySelectorAll(".qz-opt")];
    opts.forEach((b, i) => {
      b.disabled = true;
      if (item.options[i].correct) b.classList.add("correct");
    });
    if (opt.correct) score++;
    else { btn.classList.add("wrong"); wrong.push(item); }
    body.querySelector("#qzScore").textContent = `맞힌 개수 ${score}`;
    const expl = body.querySelector("#qzExpl");
    body.querySelector("#qzExplTxt").innerHTML = item.explain || "";
    expl.classList.add("show");
    const go = body.querySelector("#qzGoCard");
    if (item.cardId) go.onclick = () => openCard(item.cardId); else go.style.display = "none";
    body.querySelector("#qzNext").disabled = false;
    body.querySelector("#qzNext").textContent = (idx < quiz.length - 1) ? "다음" : "결과 보기";
  }

  function renderResult() {
    bar.style.width = "100%";
    prog.textContent = `${quiz.length} / ${quiz.length}`;
    const pct = Math.round(score / quiz.length * 100);
    const msg = pct >= 90 ? "완벽해요! 🏆" : pct >= 70 ? "좋아요, 조금만 더! 👍" : pct >= 50 ? "복습이 필요해요 📚" : "다시 한 바퀴 돌려요 💪";
    let wrongHTML = "";
    if (wrong.length) {
      wrongHTML = `<div class="qz-wrong">` + wrong.map(w =>
        `<div class="wi"><b>틀린 문제</b> · ${w.explain || ""}` +
        (w.cardId ? ` <button class="qz-linkbtn" data-go="${w.cardId}">카드 보기</button>` : "") + `</div>`).join("") + `</div>`;
    }
    body.innerHTML = `<div class="qz-result">
      <h3>${msg}</h3>
      <div class="qz-big">${score} / ${quiz.length}</div>
      <p class="qz-score">정답률 ${pct}%${wrong.length ? " · 아래 틀린 개념을 다시 봐요" : " · 전부 정답!"}</p>
      ${wrongHTML}
      <div class="qz-foot"><span class="qz-score" style="flex:1"></span>
        <button class="qz-linkbtn" id="qzAgain" style="margin-right:8px">🎲 새 문제로 다시</button>
        <button class="qz-next" id="qzDone">닫기</button></div>
    </div>`;
    body.querySelector("#qzAgain").onclick = start;
    body.querySelector("#qzDone").onclick = close;
    body.querySelectorAll("[data-go]").forEach(b => b.onclick = () => openCard(b.getAttribute("data-go")));
  }

  // 해설의 '카드 보기' → 필터 전체로 풀고 해당 카드 열어 스크롤
  function openCard(id) {
    close();
    const allChip = [...document.querySelectorAll(".chip")].find(c => c.textContent.trim() === "전체");
    if (allChip) allChip.click();
    const el = document.getElementById("card-" + id);
    if (!el) return;
    if (!el.classList.contains("open")) { const h = el.querySelector(".card-head"); if (h) h.click(); }
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- 버튼 연결 ---------- */
  const openBtn = document.getElementById("quizOpen");
  if (openBtn) openBtn.onclick = start;
})();
