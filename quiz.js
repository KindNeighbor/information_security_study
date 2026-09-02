/* quiz.js — 카드 데이터로 복습 문제를 즉석 생성한다(하드코딩 없음).
   범위: 지금 화면에 보이는 카드만 / 전체
   난이도: 기본(객관식·OX) / 어려움(주관식 자기채점·빈칸·순서배열)
   index.html이 엔진 뒤에 defer로 로드한다. */
(function () {
  const ALL = (window.DATA || []).filter(c => c && c.term && c.oneLiner);
  const GLOSSARY = (window.GLOSSARY || []).filter(g => g && g.ab && g.full);
  const N = 10;
  if (ALL.length < 4) return;

  /* ---------- 유틸 ---------- */
  const rnd = n => Math.floor(Math.random() * n);
  const pick = a => a[rnd(a.length)];
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const strip = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim();
  const esc = s => String(s == null ? "" : s);

  function distractors(pool, valOf, correct, n, prefer) {
    const seen = new Set([correct]);
    const items = pool.filter(x => { const v = valOf(x); if (!v || seen.has(v)) return false; seen.add(v); return true; });
    const pref = prefer ? items.filter(prefer) : [];
    const rest = prefer ? items.filter(x => !prefer(x)) : items;
    return [...shuffle(pref), ...shuffle(rest)].slice(0, n).map(valOf);
  }
  const explainOf = c => c.finalLiner || c.oneLiner || "";
  function mc(q, correctText, wrongTexts, explain, cardId) {
    if (wrongTexts.length < 3) return null;
    return { mode: "mc", q, options: shuffle([{ text: correctText, correct: true }, ...wrongTexts.map(t => ({ text: t, correct: false }))]), explain, cardId };
  }
  // 주관식(자기채점) 문항
  const sa = (q, answer, explain, cardId) => ({ mode: "sa", q, answer, explain, cardId });

  /* ---------- 기본 난이도 생성기 ---------- */
  function qTermToOne(P, c) {
    return mc(`“<b>${esc(c.term)}</b>”의 핵심 설명으로 옳은 것은?`, c.oneLiner,
      distractors(P.filter(x => x.id !== c.id), x => x.oneLiner, c.oneLiner, 3, x => x.cat === c.cat), explainOf(c), c.id);
  }
  function qOneToTerm(P, c) {
    return mc(`다음 설명에 해당하는 용어는?<div class="qz-quote">“${esc(c.oneLiner)}”</div>`, c.term,
      distractors(P.filter(x => x.id !== c.id), x => x.term, c.term, 3, x => x.cat === c.cat), explainOf(c), c.id);
  }
  function qEnToTerm(P, c) {
    if (!c.en) return null;
    return mc(`영문 “<b>${esc(c.en)}</b>”에 해당하는 한글 용어는?`, c.term,
      distractors(P.filter(x => x.id !== c.id), x => x.term, c.term, 3, x => x.cat === c.cat), explainOf(c), c.id);
  }
  function qAbToFull(P, g) {
    return mc(`약어 “<b>${esc(g.ab)}</b>”의 풀네임(영문)은?`, g.full,
      distractors(GLOSSARY.filter(x => x.ab !== g.ab), x => x.full, g.full, 3), `<b>${esc(g.ab)}</b> = ${esc(g.full)}<br>${esc(g.ko)}`, g.id);
  }
  function qOX(P, c) {
    const own = Math.random() < 0.5;
    let shown, isTrue;
    if (own) { shown = c.oneLiner; isTrue = true; }
    else { const o = pick(P.filter(x => x.id !== c.id)); if (!o) return null; shown = o.oneLiner; isTrue = false; }
    return {
      mode: "mc",
      q: `<b>${esc(c.term)}</b>에 대한 설명이다. 맞으면 O, 틀리면 X.<div class="qz-quote">“${esc(shown)}”</div>`,
      options: [{ text: "⭕ 맞다 (O)", correct: isTrue }, { text: "❌ 틀리다 (X)", correct: !isTrue }],
      explain: isTrue ? explainOf(c) : `그 설명은 다른 개념의 것이에요.<br><b>${esc(c.term)}</b>: ${esc(c.oneLiner)}`,
      cardId: c.id
    };
  }

  /* ---------- 어려움 난이도 생성기 ---------- */
  // ① 용어 → 설명을 직접 떠올리기
  function qRecallExplain(P, c) {
    return sa(`<b>${esc(c.term)}</b>— 이 개념을 <b>설명해 보세요.</b><div class="qz-hint">핵심 키워드: ${(c.tags || []).length ? "태그를 떠올려 보세요" : "정의와 특징을 말해 보세요"}</div>`,
      explainOf(c), (c.tags || []).map(t => `<span class="qz-tag">${esc(t)}</span>`).join(""), c.id);
  }
  // ② 설명 → 용어를 보기 없이 떠올리기
  function qRecallTerm(P, c) {
    return sa(`다음 설명에 해당하는 <b>용어</b>는? <span class="qz-hint">(보기 없음)</span><div class="qz-quote">“${esc(c.oneLiner)}”</div>`,
      c.term + (c.en ? ` <span style="opacity:.7">(${esc(c.en)})</span>` : ""), explainOf(c), c.id);
  }
  // ③ 시험 한줄정리의 핵심어 빈칸
  function qBlank(P, c) {
    if (!c.finalLiner) return null;
    const parts = [...c.finalLiner.matchAll(/<b>(.*?)<\/b>/g)].map(m => m[1]).filter(t => { const s = strip(t); return s.length >= 2 && s.length <= 28; });
    if (!parts.length) return null;
    const target = pick(parts);
    const blanked = c.finalLiner.replace(`<b>${target}</b>`, '<span class="qz-blank">＿＿＿＿</span>');
    return sa(`<b>${esc(c.term)}</b> — 빈칸에 들어갈 말은?<div class="qz-quote">${blanked}</div>`, strip(target), explainOf(c), c.id);
  }
  // ④ 단계(evo) 순서 배열
  function qOrder(P, c) {
    const blk = (c.blocks || []).find(b => b.d && b.d.indexOf("evo-step") >= 0);
    if (!blk) return null;
    const names = [...blk.d.matchAll(/class='es-name'>(.*?)<\/div>/g)].map(m => strip(m[1]));
    if (names.length < 3) return null;
    const mixed = shuffle(names);
    if (mixed.join() === names.join()) mixed.reverse();
    return sa(`<b>${esc(c.term)}</b> — 다음을 <b>올바른 순서</b>로 배열하면?<div class="qz-quote">${mixed.map(n => `<span class="qz-tag">${esc(n)}</span>`).join(" ")}</div>`,
      names.map((n, i) => `${i + 1}. ${esc(n)}`).join("  →  "), explainOf(c), c.id);
  }
  // ⑤ 약어 → 풀네임을 보기 없이
  function qAbRecall(P, g) {
    return sa(`약어 <b>${esc(g.ab)}</b> — <b>풀네임(영문)</b>과 뜻은? <span class="qz-hint">(보기 없음)</span>`,
      `<b>${esc(g.full)}</b><br>${esc(g.ko)}`, "", g.id);
  }

  /* ---------- 문제 세트 만들기 ---------- */
  function genOne(P, G, level) {
    const gens = level === "hard"
      ? [c => qRecallTerm(P, c), c => qRecallExplain(P, c), c => qBlank(P, c), c => qOrder(P, c), c => qOX(P, c)]
      : [c => qTermToOne(P, c), c => qOneToTerm(P, c), c => qOX(P, c), c => qEnToTerm(P, c)];
    for (let t = 0; t < 20; t++) {
      if (G.length >= 4 && Math.random() < 0.18) {
        const g = pick(G);
        const q = level === "hard" ? qAbRecall(P, g) : qAbToFull(P, g);
        if (q) return q;
      }
      const q = pick(gens)(pick(P));
      if (q) return q;
    }
    return null;
  }
  function genQuiz(P, level) {
    const G = GLOSSARY.filter(g => !g.id || P.some(c => c.id === g.id));
    const out = [], seen = new Set();
    let guard = 0;
    while (out.length < N && guard++ < N * 40) {
      const q = genOne(P, G, level); if (!q) continue;
      const key = q.mode + "|" + q.q;
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
  .qz-panel{background:var(--surface);border:1px solid var(--line);border-radius:16px;width:100%;max-width:660px;
    padding:20px 20px 22px;box-shadow:0 18px 50px rgba(10,25,40,.28);}
  .qz-top{display:flex;align-items:center;gap:12px;margin-bottom:6px;}
  .qz-top h2{font-size:17px;margin:0;flex:1;}
  .qz-prog{font-family:var(--mono);font-size:12px;color:var(--ink-soft);}
  .qz-close{background:none;border:0;font-size:26px;line-height:1;color:var(--ink-soft);cursor:pointer;padding:0 4px;}
  .qz-bar{height:5px;background:var(--surface-2);border-radius:99px;overflow:hidden;margin:8px 0 18px;}
  .qz-bar>i{display:block;height:100%;background:var(--safe);transition:width .25s;}
  .qz-q{font-size:16px;font-weight:600;line-height:1.55;margin:0 0 4px;}
  .qz-quote{margin-top:10px;padding:10px 13px;background:var(--surface-2);border-left:3px solid var(--accent);
    border-radius:0 8px 8px 0;font-weight:400;font-size:14.5px;color:var(--ink);line-height:1.6;}
  .qz-hint{font-size:12px;color:var(--ink-soft);font-weight:400;margin-top:6px;}
  .qz-blank{display:inline-block;border-bottom:2px solid var(--warn);color:var(--warn);font-weight:700;letter-spacing:2px;}
  .qz-tag{display:inline-block;font-family:var(--mono);font-size:12px;background:var(--surface);
    border:1px solid var(--line-strong);border-radius:6px;padding:3px 8px;margin:3px 3px 0 0;}
  .qz-opts{display:flex;flex-direction:column;gap:9px;margin:18px 0 6px;}
  .qz-opt{text-align:left;background:var(--surface);border:1px solid var(--line-strong);border-radius:11px;
    padding:12px 14px;font-family:inherit;font-size:14.5px;color:var(--ink);cursor:pointer;transition:all .12s;}
  .qz-opt:hover:not(:disabled){border-color:var(--accent);background:var(--accent-soft);}
  .qz-opt:disabled{cursor:default;}
  .qz-opt.correct{border-color:var(--safe);background:var(--safe-soft);font-weight:600;}
  .qz-opt.wrong{border-color:var(--warn);background:var(--warn-soft);}
  .qz-ans{margin:16px 0 0;padding:12px 14px;border-radius:10px;background:var(--safe-soft);
    border:1px solid var(--safe);font-size:14.5px;line-height:1.6;display:none;}
  .qz-ans.show{display:block;}
  .qz-ans .lbl{font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.05em;color:var(--safe);
    display:block;margin-bottom:5px;text-transform:uppercase;}
  .qz-expl{margin:12px 0 0;padding:12px 14px;border-radius:10px;background:var(--accent-soft);
    border:1px solid var(--line);font-size:13.8px;line-height:1.6;display:none;}
  .qz-expl.show{display:block;}
  .qz-expl .lbl{font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.05em;color:var(--accent);
    display:block;margin-bottom:4px;text-transform:uppercase;}
  .qz-foot{display:flex;align-items:center;gap:8px;margin-top:18px;flex-wrap:wrap;}
  .qz-score{font-family:var(--mono);font-size:12.5px;color:var(--ink-soft);flex:1;}
  .qz-next{background:var(--accent);color:#fff;border:0;border-radius:11px;padding:11px 20px;font-family:inherit;
    font-weight:700;font-size:14px;cursor:pointer;}
  .qz-next:disabled{opacity:.4;cursor:default;}
  .qz-grade{border:1px solid var(--line-strong);background:var(--surface);border-radius:11px;padding:11px 16px;
    font-family:inherit;font-weight:700;font-size:14px;cursor:pointer;}
  .qz-grade.ok{border-color:var(--safe);color:var(--safe);}
  .qz-grade.no{border-color:var(--warn);color:var(--warn);}
  .qz-grade:hover{filter:brightness(.97);}
  .qz-linkbtn{background:none;border:0;color:var(--accent);font-family:inherit;font-size:13px;font-weight:600;
    cursor:pointer;padding:0;text-decoration:underline;}
  .qz-result h3{font-size:22px;margin:6px 0 2px;}
  .qz-result .qz-big{font-family:var(--mono);font-size:40px;font-weight:800;color:var(--accent);margin:8px 0;}
  .qz-wrong{margin:16px 0 0;display:flex;flex-direction:column;gap:8px;}
  .qz-wrong .wi{padding:10px 12px;border:1px solid var(--line);border-radius:10px;font-size:13.5px;background:var(--surface-2);}
  .qz-wrong .wi b{color:var(--warn);}
  /* 시작 화면 */
  .qz-setup .row{margin:0 0 16px;}
  .qz-setup .lb{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.05em;color:var(--ink-soft);
    text-transform:uppercase;display:block;margin-bottom:7px;}
  .qz-seg{display:flex;gap:8px;flex-wrap:wrap;}
  .qz-seg button{flex:1 1 180px;text-align:left;background:var(--surface);border:1px solid var(--line-strong);
    border-radius:11px;padding:11px 13px;font-family:inherit;font-size:14px;color:var(--ink);cursor:pointer;transition:all .12s;}
  .qz-seg button small{display:block;font-size:12px;color:var(--ink-soft);margin-top:3px;font-weight:400;}
  .qz-seg button[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-soft);font-weight:700;}
  .qz-seg button:disabled{opacity:.45;cursor:default;}
  @media(max-width:560px){.qz-panel{padding:16px;}}
  `;
  document.head.appendChild(style);

  /* ---------- 모달 ---------- */
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

  /* ---------- 상태 ---------- */
  let quiz = [], idx = 0, score = 0, wrong = [];
  let scope = "view", level = "basic";

  const viewCards = () => {
    try { const v = window.visibleCards ? window.visibleCards() : null; return (v && v.length) ? v.filter(c => c.term && c.oneLiner) : []; }
    catch (e) { return []; }
  };
  const viewLabel = () => { try { return window.filterLabel ? window.filterLabel() : "전체"; } catch (e) { return "전체"; } };

  function open() { renderSetup(); modal.hidden = false; document.addEventListener("keydown", onKey); }
  function close() { modal.hidden = true; document.removeEventListener("keydown", onKey); }
  function onKey(e) { if (e.key === "Escape") close(); }

  /* ---------- 시작 화면 ---------- */
  function renderSetup() {
    const v = viewCards();
    prog.textContent = ""; bar.style.width = "0";
    if (v.length < 4) scope = "all";
    body.innerHTML = `<div class="qz-setup">
      <div class="row"><span class="lb">출제 범위</span>
        <div class="qz-seg" id="qzScope">
          <button data-v="view" ${v.length < 4 ? "disabled" : ""}>지금 화면 범위<small>${v.length < 4 ? "카드가 4장 미만이라 선택 불가" : `${viewLabel()} · ${v.length}장`}</small></button>
          <button data-v="all">전체<small>${ALL.length}장</small></button>
        </div></div>
      <div class="row"><span class="lb">난이도</span>
        <div class="qz-seg" id="qzLevel">
          <button data-v="basic">기본<small>객관식 · OX (보기에서 고르기)</small></button>
          <button data-v="hard">어려움<small>주관식 · 빈칸 · 순서배열 (직접 떠올리기)</small></button>
        </div></div>
      <div class="qz-foot"><span class="qz-score" style="flex:1">10문제 · 어려움은 스스로 채점해요</span>
        <button class="qz-next" id="qzGo">시작</button></div>
    </div>`;
    const paint = () => {
      body.querySelectorAll("#qzScope button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === scope));
      body.querySelectorAll("#qzLevel button").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === level));
    };
    body.querySelectorAll("#qzScope button").forEach(b => b.onclick = () => { if (b.disabled) return; scope = b.dataset.v; paint(); });
    body.querySelectorAll("#qzLevel button").forEach(b => b.onclick = () => { level = b.dataset.v; paint(); });
    paint();
    body.querySelector("#qzGo").onclick = start;
  }

  function start() {
    const P = (scope === "view" ? viewCards() : ALL);
    const pool = P.length >= 4 ? P : ALL;
    quiz = genQuiz(pool, level); idx = 0; score = 0; wrong = [];
    if (!quiz.length) { body.innerHTML = "<p>문제를 만들 수 없어요. 범위를 넓혀 보세요.</p>"; return; }
    renderQ();
  }

  /* ---------- 문제 ---------- */
  function renderQ() {
    const item = quiz[idx];
    prog.textContent = `${idx + 1} / ${quiz.length}`;
    bar.style.width = (idx / quiz.length * 100) + "%";
    body.innerHTML = `<p class="qz-q">${item.q}</p>
      <div id="qzArea"></div>
      <div class="qz-ans" id="qzAns"><span class="lbl">정답</span><span id="qzAnsTxt"></span></div>
      <div class="qz-expl" id="qzExpl"><span class="lbl">해설</span><span id="qzExplTxt"></span>
        <div style="margin-top:8px"><button class="qz-linkbtn" id="qzGoCard">📇 이 개념 카드 보기</button></div></div>
      <div class="qz-foot" id="qzFoot"><span class="qz-score" id="qzScore"></span></div>`;
    body.querySelector("#qzScore").textContent = `맞힌 개수 ${score}`;
    const foot = body.querySelector("#qzFoot");

    if (item.mode === "mc") {
      const opts = document.createElement("div"); opts.className = "qz-opts";
      item.options.forEach(o => {
        const b = document.createElement("button");
        b.className = "qz-opt"; b.innerHTML = o.text;
        b.onclick = () => choose(b, o, item);
        opts.appendChild(b);
      });
      body.querySelector("#qzArea").appendChild(opts);
      const next = document.createElement("button");
      next.className = "qz-next"; next.id = "qzNext"; next.disabled = true; next.textContent = "다음";
      next.onclick = advance; foot.appendChild(next);
    } else {
      // 주관식: 떠올린 뒤 정답 공개 → 스스로 채점
      const reveal = document.createElement("button");
      reveal.className = "qz-next"; reveal.textContent = "답 확인";
      reveal.onclick = () => {
        showAnswer(item);
        foot.removeChild(reveal);
        const ok = document.createElement("button"); ok.className = "qz-grade ok"; ok.textContent = "⭕ 맞혔다";
        const no = document.createElement("button"); no.className = "qz-grade no"; no.textContent = "❌ 틀렸다";
        ok.onclick = () => { score++; grade(); };
        no.onclick = () => { wrong.push(item); grade(); };
        foot.appendChild(no); foot.appendChild(ok);
      };
      foot.appendChild(reveal);
    }
  }

  function showAnswer(item) {
    const ans = body.querySelector("#qzAns");
    body.querySelector("#qzAnsTxt").innerHTML = item.answer || "";
    ans.classList.add("show");
    if (item.explain) {
      body.querySelector("#qzExplTxt").innerHTML = item.explain;
      body.querySelector("#qzExpl").classList.add("show");
    }
    const go = body.querySelector("#qzGoCard");
    if (item.cardId) go.onclick = () => openCard(item.cardId); else go.style.display = "none";
  }

  function grade() {
    body.querySelector("#qzScore").textContent = `맞힌 개수 ${score}`;
    const foot = body.querySelector("#qzFoot");
    foot.querySelectorAll(".qz-grade").forEach(b => b.remove());
    const next = document.createElement("button");
    next.className = "qz-next"; next.textContent = (idx < quiz.length - 1) ? "다음" : "결과 보기";
    next.onclick = advance; foot.appendChild(next);
  }

  function choose(btn, opt, item) {
    [...body.querySelectorAll(".qz-opt")].forEach((b, i) => { b.disabled = true; if (item.options[i].correct) b.classList.add("correct"); });
    if (opt.correct) score++; else { btn.classList.add("wrong"); wrong.push(item); }
    body.querySelector("#qzScore").textContent = `맞힌 개수 ${score}`;
    if (item.explain) { body.querySelector("#qzExplTxt").innerHTML = item.explain; body.querySelector("#qzExpl").classList.add("show"); }
    const go = body.querySelector("#qzGoCard");
    if (item.cardId) go.onclick = () => openCard(item.cardId); else go.style.display = "none";
    const next = body.querySelector("#qzNext");
    next.disabled = false; next.textContent = (idx < quiz.length - 1) ? "다음" : "결과 보기";
  }

  function advance() { idx++; (idx < quiz.length) ? renderQ() : renderResult(); }

  function renderResult() {
    bar.style.width = "100%";
    prog.textContent = `${quiz.length} / ${quiz.length}`;
    const pct = Math.round(score / quiz.length * 100);
    const msg = pct >= 90 ? "완벽해요! 🏆" : pct >= 70 ? "좋아요, 조금만 더! 👍" : pct >= 50 ? "복습이 필요해요 📚" : "다시 한 바퀴 돌려요 💪";
    const wrongHTML = wrong.length
      ? `<div class="qz-wrong">` + wrong.map(w => `<div class="wi"><b>틀린 문제</b> · ${w.explain || w.answer || ""}` +
        (w.cardId ? ` <button class="qz-linkbtn" data-go="${w.cardId}">카드 보기</button>` : "") + `</div>`).join("") + `</div>` : "";
    body.innerHTML = `<div class="qz-result">
      <h3>${msg}</h3>
      <div class="qz-big">${score} / ${quiz.length}</div>
      <p class="qz-score">정답률 ${pct}% · ${scope === "view" ? viewLabel() + " 범위" : "전체"} · ${level === "hard" ? "어려움" : "기본"}${wrong.length ? " · 아래 틀린 개념을 다시 봐요" : " · 전부 정답!"}</p>
      ${wrongHTML}
      <div class="qz-foot"><span class="qz-score" style="flex:1"></span>
        <button class="qz-linkbtn" id="qzAgain" style="margin-right:8px">🎲 새 문제로 다시</button>
        <button class="qz-next" id="qzDone">닫기</button></div>
    </div>`;
    body.querySelector("#qzAgain").onclick = renderSetup;
    body.querySelector("#qzDone").onclick = close;
    body.querySelectorAll("[data-go]").forEach(b => b.onclick = () => openCard(b.getAttribute("data-go")));
  }

  function openCard(id) {
    close();
    const el = document.getElementById("card-" + id);
    if (!el) {
      const allChip = [...document.querySelectorAll(".chip")].find(c => c.textContent.trim() === "전체");
      if (allChip) allChip.click();
    }
    const el2 = document.getElementById("card-" + id);
    if (!el2) return;
    if (!el2.classList.contains("open")) { const h = el2.querySelector(".card-head"); if (h) h.click(); }
    el2.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const openBtn = document.getElementById("quizOpen");
  if (openBtn) openBtn.onclick = open;
})();
