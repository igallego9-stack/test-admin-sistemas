/* Aplicación del test interactivo */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const LETTERS = ["A", "B", "C"];
  const LS_STATS = "as_quiz_stats_v1";
  const LS_PREFS = "as_quiz_prefs_v1";
  const nf = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1 });

  const fmt = (n) => nf.format(Number.isFinite(n) ? n : 0);
  const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));

  const DEFAULT_PREFS = { penalty: 0.5, feedback: "immediate", timer: true, theme: "light" };
  const emptyStats = () => ({
    attempts: 0,
    answered: 0,
    correct: 0,
    failedIds: [],
    byTopic: {}
  });

  let prefs = { ...DEFAULT_PREFS };
  let stats = emptyStats();
  let quiz = {
    active: false,
    finished: false,
    questions: [],
    answers: [],
    index: 0,
    selected: null,
    locked: false,
    mode: "exam",
    immediate: true,
    penalty: 0.5,
    timed: false,
    timeLeft: 45 * 60,
    deadline: 0,
    timerId: null,
    startedAt: 0
  };
  let lastResult = null;

  /* ---------------- Persistencia ---------------- */
  function load() {
    try {
      const rawStats = localStorage.getItem(LS_STATS);
      if (rawStats) {
        const parsed = JSON.parse(rawStats);
        stats = Object.assign(emptyStats(), parsed);
        stats.byTopic = parsed.byTopic && typeof parsed.byTopic === "object" ? parsed.byTopic : {};
      }
    } catch (e) { /* almacenamiento no disponible */ }

    try {
      const rawPrefs = localStorage.getItem(LS_PREFS);
      if (rawPrefs) prefs = Object.assign({ ...DEFAULT_PREFS }, JSON.parse(rawPrefs));
    } catch (e) { /* almacenamiento no disponible */ }

    if (!["0", "0.33", "0.5", "1"].includes(String(prefs.penalty))) prefs.penalty = 0.5;
    if (!["immediate", "end"].includes(prefs.feedback)) prefs.feedback = "immediate";
    prefs.timer = prefs.timer !== false;
    if (!["light", "dark"].includes(prefs.theme)) prefs.theme = "light";
    stats.attempts = Number(stats.attempts) || 0;
    stats.answered = Number(stats.answered) || 0;
    stats.correct = Number(stats.correct) || 0;
    const bankIds = new Set(BANK.map((q) => q.id));
    stats.failedIds = Array.isArray(stats.failedIds)
      ? [...new Set(stats.failedIds.filter((id) => bankIds.has(id)))]
      : [];
    for (const key of Object.keys(TOPICS)) {
      const t = stats.byTopic[key] || {};
      stats.byTopic[key] = {
        answered: Number(t.answered) || 0,
        correct: Number(t.correct) || 0
      };
    }
  }

  function saveStats() {
    try { localStorage.setItem(LS_STATS, JSON.stringify(stats)); } catch (e) { /* ignore */ }
  }

  function savePrefs() {
    try { localStorage.setItem(LS_PREFS, JSON.stringify(prefs)); } catch (e) { /* ignore */ }
  }

  /* ---------------- Utilidades ---------------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showView(id) {
    $$(".view").forEach((v) => v.classList.toggle("active", v.id === id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const btn = $("#themeBtn");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
    }
  }

  function topicMeta(topic) {
    return TOPICS[topic] || { short: topic, color: "#5146e5", label: topic };
  }

  /* ---------------- Inicio ---------------- */
  function renderHome() {
    $("#bankCount").textContent = BANK.length;
    $("#statBank").textContent = BANK.length;
    $("#statAttempts").textContent = stats.attempts;
    $("#statAnswered").textContent = stats.answered;
    $("#statFailed").textContent = stats.failedIds.length;

    const accuracy = stats.answered > 0 ? (stats.correct / stats.answered) * 100 : 0;
    const ring = $("#accuracyRing");
    ring.style.setProperty("--value", String(Math.round(accuracy)));
    $("#accuracyValue").textContent = stats.answered > 0 ? `${Math.round(accuracy)}%` : "—";
    $("#accuracyTitle").textContent =
      stats.answered === 0 ? "Aún sin datos" :
      accuracy >= 80 ? "Muy sólido" :
      accuracy >= 60 ? "Buen ritmo" :
      accuracy >= 40 ? "Hay margen" : "A repasar";
    $("#accuracySubtitle").textContent =
      stats.answered === 0
        ? "Haz tu primer test para ver tu progreso."
        : `${stats.correct} de ${stats.answered} respuestas correctas.`;

    const failedCount = stats.failedIds.length;
    $("#failedPill").textContent = `${failedCount} ${failedCount === 1 ? "pregunta pendiente" : "preguntas pendientes"}`;
    $("#reviewBtn").disabled = failedCount === 0;

    const overview = $("#topicOverview");
    overview.innerHTML = "";
    const maxCount = Math.max(...Object.keys(TOPICS).map((t) => BANK.filter((q) => q.t === t).length), 1);
    for (const [key, meta] of Object.entries(TOPICS)) {
      const count = BANK.filter((q) => q.t === key).length;
      const topicStats = stats.byTopic[key] || { answered: 0, correct: 0 };
      const pct = topicStats.answered > 0 ? (topicStats.correct / topicStats.answered) * 100 : 0;
      const row = document.createElement("div");
      row.className = "topic-bar";
      row.title = topicStats.answered > 0
        ? `${topicStats.correct}/${topicStats.answered} correctas en este tema`
        : `${count} preguntas disponibles`;
      row.innerHTML = `
        <span>${esc(meta.short)}</span>
        <div class="bar"><span style="width:${Math.max(pct, count / maxCount * 100 * 0.16)}%;background:${meta.color}"></span></div>
        <strong>${count}</strong>`;
      overview.appendChild(row);
    }
  }

  function renderTopicPicker() {
    const picker = $("#practiceTopics");
    picker.innerHTML = "";
    for (const [key, meta] of Object.entries(TOPICS)) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "topic-chip";
      btn.dataset.topic = key;
      btn.setAttribute("aria-pressed", "true");
      btn.innerHTML = `<span class="dot" style="background:${meta.color}"></span>${esc(meta.short)}`;
      btn.addEventListener("click", () => {
        btn.setAttribute("aria-pressed", btn.getAttribute("aria-pressed") === "true" ? "false" : "true");
      });
      picker.appendChild(btn);
    }
  }

  /* ---------------- Composición de tests ---------------- */
  function sampleQuestions(topics, count) {
    const pool = BANK.filter((q) => topics.includes(q.t));
    const shuffled = shuffle(pool);
    const n = count === "all" ? shuffled.length : Math.min(Number(count) || 10, shuffled.length);
    return shuffled.slice(0, n);
  }

  function buildExamQuestions() {
    const picked = [];
    const used = new Set();
    for (const [topic, wanted] of Object.entries(EXAM_DISTRIBUTION)) {
      const pool = shuffle(BANK.filter((q) => q.t === topic && !used.has(q.id)));
      for (const q of pool.slice(0, wanted)) {
        picked.push(q);
        used.add(q.id);
      }
    }
    for (const q of shuffle(BANK)) {
      if (picked.length >= 40) break;
      if (!used.has(q.id)) {
        picked.push(q);
        used.add(q.id);
      }
    }
    return shuffle(picked).slice(0, Math.min(40, picked.length));
  }

  function startExam() {
    const questions = buildExamQuestions();
    beginQuiz(questions, {
      mode: "exam",
      immediate: prefs.feedback === "immediate",
      penalty: Number(prefs.penalty),
      timed: prefs.timer
    });
  }

  function startPractice() {
    const topics = $$("#practiceTopics .topic-chip")
      .filter((b) => b.getAttribute("aria-pressed") === "true")
      .map((b) => b.dataset.topic);
    if (topics.length === 0) {
      alert("Elige al menos un tema para practicar.");
      return;
    }
    const count = $("#practiceCount").value;
    const questions = sampleQuestions(topics, count);
    if (questions.length === 0) {
      alert("No hay preguntas disponibles para esos temas.");
      return;
    }
    beginQuiz(questions, {
      mode: "practice",
      immediate: prefs.feedback === "immediate",
      penalty: Number(prefs.penalty),
      timed: false
    });
  }

  function startReview() {
    const failedSet = new Set(stats.failedIds);
    const questions = shuffle(BANK.filter((q) => failedSet.has(q.id)));
    if (questions.length === 0) {
      alert("No tienes fallos pendientes. ¡Buen trabajo!");
      return;
    }
    beginQuiz(questions, {
      mode: "review",
      immediate: true,
      penalty: Number(prefs.penalty),
      timed: false
    });
  }

  /* ---------------- Ciclo del test ---------------- */
  function beginQuiz(questions, opts) {
    if (!questions.length) return;
    clearTimer();
    quiz = {
      active: true,
      finished: false,
      questions,
      answers: questions.map(() => ({ selected: null, correct: false, recorded: false })),
      index: 0,
      selected: null,
      locked: false,
      mode: opts.mode,
      immediate: Boolean(opts.immediate),
      penalty: Number(opts.penalty),
      timed: Boolean(opts.timed),
      timeLeft: 45 * 60,
      deadline: opts.timed ? Date.now() + 45 * 60 * 1000 : 0,
      timerId: null,
      startedAt: Date.now()
    };

    const modeLabels = {
      exam: quiz.immediate ? "Simulacro comentado" : "Simulacro",
      practice: "Práctica",
      review: "Repaso de fallos"
    };
    $("#modeBadge").textContent = modeLabels[quiz.mode] || "Test";
    $("#timerDisplay").classList.toggle("hidden", !quiz.timed);
    if (quiz.timed) {
      updateTimerDisplay();
      quiz.timerId = setInterval(tickTimer, 500);
    }
    showView("quizView");
    renderQuestion();
  }

  function renderQuestion() {
    const q = quiz.questions[quiz.index];
    const meta = topicMeta(q.t);
    $("#qTopic").textContent = meta.short;
    $("#qTopic").style.color = meta.color;
    $("#qTopic").style.borderColor = meta.color + "66";
    $("#qTopic").style.background = meta.color + "16";
    $("#qType").textContent = q.k || "Teoría";
    $("#qCounter").textContent = `Pregunta ${quiz.index + 1} de ${quiz.questions.length}`;
    $("#questionText").textContent = q.q;

    const options = $("#options");
    options.innerHTML = "";
    q.o.forEach((text, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.dataset.index = String(idx);
      btn.innerHTML = `<span class="letter">${LETTERS[idx]}</span><span class="opt-text"></span><span class="mark"></span>`;
      btn.querySelector(".opt-text").textContent = text;
      btn.addEventListener("click", () => handleOption(idx));
      options.appendChild(btn);
    });

    const feedback = $("#feedback");
    feedback.className = "feedback hidden";
    feedback.innerHTML = "";
    $("#nextBtn").disabled = true;
    $("#nextBtn").textContent = quiz.index === quiz.questions.length - 1 ? "Ver resultados →" : "Siguiente →";
    $("#skipBtn").disabled = false;
    $("#skipBtn").textContent = quiz.index === quiz.questions.length - 1 ? "Saltar y terminar" : "Saltar";
    quiz.selected = null;
    quiz.locked = false;
    updateProgress();
    updateLiveScore();
  }

  function handleOption(idx) {
    if (!quiz.active || quiz.locked) return;
    const q = quiz.questions[quiz.index];
    if (idx < 0 || idx >= q.o.length) return;
    quiz.selected = idx;

    if (quiz.immediate) {
      quiz.locked = true;
      recordAnswer();
      paintOptions();
      showFeedback();
      $("#nextBtn").disabled = false;
      $("#skipBtn").disabled = true;
      updateLiveScore();
      updateProgress();
    } else {
      paintSelectedOnly();
      $("#nextBtn").disabled = false;
    }
  }

  function paintSelectedOnly() {
    $$("#options .option").forEach((btn) => {
      const idx = Number(btn.dataset.index);
      btn.classList.toggle("selected", idx === quiz.selected);
      btn.querySelector(".mark").textContent = idx === quiz.selected ? "●" : "";
    });
  }

  function paintOptions() {
    const q = quiz.questions[quiz.index];
    $$("#options .option").forEach((btn) => {
      const idx = Number(btn.dataset.index);
      btn.disabled = true;
      btn.classList.remove("selected");
      if (idx === q.c) {
        btn.classList.add("correct");
        btn.querySelector(".mark").textContent = "✓";
      } else if (idx === quiz.selected) {
        btn.classList.add("wrong");
        btn.querySelector(".mark").textContent = "✗";
      }
    });
  }

  function showFeedback() {
    const q = quiz.questions[quiz.index];
    const isCorrect = quiz.selected === q.c;
    const box = $("#feedback");
    const optionText = (idx) => `${LETTERS[idx]}. ${esc(q.o[idx]).replace(/\.+$/, "")}`;
    const correctText = optionText(q.c);
    const chosenText = quiz.selected === null ? "—" : optionText(quiz.selected);
    box.className = `feedback ${isCorrect ? "ok" : "bad"}`;
    box.innerHTML = isCorrect
      ? `<strong>✅ Correcto</strong>
         <div class="answer-line">Has elegido <b>${chosenText}</b>.</div>
         <p>${esc(q.e)}</p>`
      : `<strong>❌ Incorrecto</strong>
         <div class="answer-line">La respuesta correcta es <b>${correctText}</b>.</div>
         <p>${esc(q.e)}</p>`;
    box.classList.remove("hidden");
  }

  function recordAnswer() {
    const q = quiz.questions[quiz.index];
    const ans = quiz.answers[quiz.index];
    ans.selected = quiz.selected;
    ans.correct = quiz.selected === q.c;
    ans.recorded = true;
  }

  function recordBlank() {
    const ans = quiz.answers[quiz.index];
    ans.selected = null;
    ans.correct = false;
    ans.recorded = true;
  }

  function nextQuestion() {
    if (!quiz.active) return;
    if (!quiz.locked) {
      if (quiz.selected === null) recordBlank();
      else recordAnswer();
    }
    if (quiz.index >= quiz.questions.length - 1) {
      finishQuiz(false);
      return;
    }
    quiz.index += 1;
    renderQuestion();
  }

  function skipQuestion() {
    if (!quiz.active || (quiz.immediate && quiz.locked)) return;
    recordBlank();
    if (quiz.index >= quiz.questions.length - 1) {
      finishQuiz(false);
      return;
    }
    quiz.index += 1;
    renderQuestion();
  }

  function updateProgress() {
    const total = quiz.questions.length || 1;
    const done = quiz.index + (quiz.locked ? 1 : 0);
    $("#progressBar").style.width = `${Math.min(100, (done / total) * 100)}%`;
  }

  function updateLiveScore() {
    const live = $("#liveScore");
    if (!quiz.immediate) {
      const answered = quiz.answers.filter((a) => a.recorded && a.selected !== null).length;
      live.innerHTML = `Respondidas: <strong>${answered}</strong> / ${quiz.questions.length}`;
      return;
    }
    let correct = 0;
    let wrong = 0;
    for (const [i, ans] of quiz.answers.entries()) {
      if (!ans.recorded) continue;
      if (ans.selected === null) continue;
      if (ans.correct) correct += 1;
      else if (quiz.questions[i] && ans.selected !== quiz.questions[i].c) wrong += 1;
    }
    const points = correct - wrong * quiz.penalty;
    live.innerHTML = `Aciertos: <strong>${correct}</strong> · Fallos: <strong>${wrong}</strong> · Puntos: <strong>${fmt(points)}</strong>`;
  }

  /* ---------------- Cronómetro ---------------- */
  function clearTimer() {
    if (quiz.timerId) {
      clearInterval(quiz.timerId);
      quiz.timerId = null;
    }
  }

  function tickTimer() {
    if (!quiz.active || !quiz.timed) return;
    const remaining = Math.max(0, Math.ceil((quiz.deadline - Date.now()) / 1000));
    quiz.timeLeft = remaining;
    updateTimerDisplay();
    if (remaining <= 0) {
      clearTimer();
      finishQuiz(true);
    }
  }

  function updateTimerDisplay() {
    const total = Math.max(0, quiz.timeLeft);
    const m = Math.floor(total / 60);
    const s = total % 60;
    const el = $("#timerDisplay");
    el.textContent = `${m}:${String(s).padStart(2, "0")}`;
    el.classList.toggle("warning", total <= 300);
  }

  /* ---------------- Final y resultados ---------------- */
  function finishQuiz(timedOut) {
    if (!quiz.active || quiz.finished) return;
    clearTimer();

    const ans = quiz.answers[quiz.index];
    if (ans && !ans.recorded) {
      if (quiz.selected !== null) recordAnswer();
      else recordBlank();
    }

    quiz.finished = true;
    quiz.active = false;

    const rows = quiz.questions.map((q, i) => {
      const a = quiz.answers[i] || { selected: null, recorded: true };
      const status = a.selected === null || a.selected === undefined
        ? "blank"
        : (a.selected === q.c ? "correct" : "wrong");
      return { q, selected: a.selected, status };
    });
    const correct = rows.filter((r) => r.status === "correct").length;
    const wrong = rows.filter((r) => r.status === "wrong").length;
    const blank = rows.filter((r) => r.status === "blank").length;
    const total = rows.length;
    const net = correct - wrong * quiz.penalty;
    const pct = total ? (net / total) * 100 : 0;
    const grade = total ? (net / total) * 10 : 0;

    lastResult = { rows, correct, wrong, blank, total, net, pct, grade, penalty: quiz.penalty, timedOut };
    updateStats(rows);
    renderResults(lastResult);
    showView("resultView");
  }

  function updateStats(rows) {
    stats.attempts += 1;
    const failedSet = new Set(stats.failedIds);
    for (const row of rows) {
      const topic = row.q.t;
      if (!stats.byTopic[topic]) stats.byTopic[topic] = { answered: 0, correct: 0 };
      if (row.status === "correct") {
        stats.answered += 1;
        stats.correct += 1;
        stats.byTopic[topic].answered += 1;
        stats.byTopic[topic].correct += 1;
        failedSet.delete(row.q.id);
      } else {
        if (row.status === "wrong") {
          stats.answered += 1;
          stats.byTopic[topic].answered += 1;
        }
        failedSet.add(row.q.id);
      }
    }
    stats.failedIds = [...failedSet];
    saveStats();
    renderHome();
  }

  function renderResults(result) {
    const { rows, correct, wrong, blank, total, net, pct, grade, penalty, timedOut } = result;
    const failedRows = rows.filter((r) => r.status !== "correct");

    let title;
    if (timedOut) title = "Se acabó el tiempo";
    else if (pct >= 75) title = "¡Muy buen resultado!";
    else if (pct >= 50) title = "Aprobado orientativo";
    else title = "Toca repasar";

    $("#resultTitle").textContent = title;
    $("#resultSubtitle").textContent =
      `Has acertado ${correct} de ${total}. ` +
      `Puntuación neta con −${fmt(penalty)} por fallo; las preguntas en blanco no restan. ` +
      (timedOut ? "El cronómetro llegó a 0." : "Revisa los fallos antes de repetir.");
    $("#resultScore").textContent = fmt(net);
    $("#resultOutOf").textContent = `/ ${total}`;
    $("#resultPct").textContent = `${fmt(pct)} % · nota ${fmt(grade)}/10`;

    $("#resultMetrics").innerHTML = `
      <div class="metric good"><span>Aciertos</span><strong>${correct}</strong></div>
      <div class="metric bad"><span>Fallos</span><strong>${wrong}</strong></div>
      <div class="metric"><span>En blanco</span><strong>${blank}</strong></div>
      <div class="metric"><span>Puntos netos</span><strong>${fmt(net)}</strong></div>`;

    const topics = [...new Set(rows.map((r) => r.q.t))];
    $("#topicBreakdown").innerHTML = topics.map((t) => {
      const meta = topicMeta(t);
      const group = rows.filter((r) => r.q.t === t);
      const ok = group.filter((r) => r.status === "correct").length;
      const ko = group.length - ok;
      const okPct = group.length ? (ok / group.length) * 100 : 0;
      const koPct = group.length ? (ko / group.length) * 100 : 0;
      return `
        <div class="breakdown-row">
          <span>${esc(meta.short)}</span>
          <div class="bar" title="${ok} correctas, ${ko} falladas o en blanco">
            <span class="ok" style="width:${okPct}%;background:${meta.color}"></span>
            <span class="ko" style="width:${koPct}%"></span>
          </div>
          <span class="nums">${ok}/${group.length}</span>
        </div>`;
    }).join("");

    const openWrong = wrong <= 5;
    const list = $("#reviewList");
    list.innerHTML = "";
    rows.forEach((row, i) => {
      const q = row.q;
      const meta = topicMeta(q.t);
      const statusLabel = row.status === "correct" ? "Correcta" : row.status === "wrong" ? "Fallada" : "En blanco";
      const icon = row.status === "correct" ? "✓" : row.status === "wrong" ? "✗" : "—";
      const yourAnswer = row.selected === null || row.selected === undefined
        ? "No contestaste (en blanco)."
        : `${LETTERS[row.selected]}. ${esc(q.o[row.selected])}`;
      const correctAnswer = `${LETTERS[q.c]}. ${esc(q.o[q.c])}`;

      const details = document.createElement("details");
      details.className = `review-item ${row.status}`;
      details.dataset.status = row.status;
      if (row.status === "wrong" && openWrong) details.open = true;
      details.innerHTML = `
        <summary>
          <span class="status-dot">${icon}</span>
          <span class="review-q">${i + 1}. ${esc(q.q)}</span>
          <span class="badge ghost">${esc(meta.short)}</span>
          <span class="chev">›</span>
        </summary>
        <div class="review-body">
          <div class="line"><b>Estado:</b> ${statusLabel}</div>
          <div class="line"><b>Tu respuesta:</b> ${yourAnswer}</div>
          <div class="line"><b>Correcta:</b> ${correctAnswer}</div>
          <div class="exp"><b>Por qué:</b> ${esc(q.e)}</div>
        </div>`;
      list.appendChild(details);
    });

    $("#retryFailedBtn").disabled = failedRows.length === 0;
    $("#retryFailedBtn").textContent = failedRows.length
      ? `Repasar ${failedRows.length} fallo${failedRows.length === 1 ? "" : "s"}`
      : "Sin fallos que repasar";
    $$(".filter-btn").forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
  }

  function applyReviewFilter(filter) {
    $$("#reviewList .review-item").forEach((item) => {
      const hide = filter === "wrong" && item.dataset.status === "correct";
      item.classList.toggle("hidden", hide);
    });
  }

  function retryCurrentFailures() {
    if (!lastResult) return;
    const questions = lastResult.rows.filter((r) => r.status !== "correct").map((r) => r.q);
    if (!questions.length) {
      alert("No hay fallos en este test. ¡Enhorabuena!");
      return;
    }
    beginQuiz(shuffle(questions), {
      mode: "review",
      immediate: true,
      penalty: Number(prefs.penalty),
      timed: false
    });
  }

  /* ---------------- Eventos ---------------- */
  function bindEvents() {
    $("#examBtn").addEventListener("click", startExam);
    $("#practiceBtn").addEventListener("click", startPractice);
    $("#reviewBtn").addEventListener("click", startReview);
    $("#newExamBtn").addEventListener("click", startExam);
    $("#retryFailedBtn").addEventListener("click", retryCurrentFailures);
    $("#homeBtn").addEventListener("click", () => showView("homeView"));
    $("#brandHome").addEventListener("click", (e) => {
      e.preventDefault();
      if (quiz.active && !confirm("¿Salir del test y volver al inicio? Se perderá el progreso actual.")) return;
      leaveQuiz();
      showView("homeView");
    });

    $("#nextBtn").addEventListener("click", nextQuestion);
    $("#skipBtn").addEventListener("click", skipQuestion);
    $("#quitBtn").addEventListener("click", () => {
      if (!confirm("¿Salir del test? Se perderá el progreso de esta prueba.")) return;
      leaveQuiz();
      showView("homeView");
    });

    $("#penaltySelect").addEventListener("change", (e) => {
      prefs.penalty = Number(e.target.value);
      savePrefs();
    });
    $("#feedbackSelect").addEventListener("change", (e) => {
      prefs.feedback = e.target.value;
      savePrefs();
    });
    $("#timerToggle").addEventListener("change", (e) => {
      prefs.timer = e.target.checked;
      savePrefs();
    });

    $("#themeBtn").addEventListener("click", () => {
      prefs.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(prefs.theme);
      savePrefs();
    });

    $("#resetStatsBtn").addEventListener("click", () => {
      if (!confirm("¿Borrar todo el progreso guardado (estadísticas y fallos pendientes)?")) return;
      stats = emptyStats();
      saveStats();
      renderHome();
    });

    $("#cheatBtn").addEventListener("click", () => {
      const dialog = $("#cheatDialog");
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
    $("#closeCheatBtn").addEventListener("click", () => {
      const dialog = $("#cheatDialog");
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    });
    $("#cheatDialog").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        if (typeof e.currentTarget.close === "function") e.currentTarget.close();
        else e.currentTarget.removeAttribute("open");
      }
    });

    $$(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
        applyReviewFilter(btn.dataset.filter);
      });
    });

    document.addEventListener("keydown", (e) => {
      const dialog = $("#cheatDialog");
      if (dialog.open) return;
      if (!quiz.active) return;
      if (e.target && ["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "1" || e.key === "2" || e.key === "3") {
        const idx = Number(e.key) - 1;
        if (idx < quiz.questions[quiz.index].o.length) handleOption(idx);
      } else if (e.key === "Enter") {
        if (e.target && e.target.tagName === "BUTTON") return;
        if (!$("#nextBtn").disabled) {
          e.preventDefault();
          nextQuestion();
        }
      }
    });
  }

  function leaveQuiz() {
    clearTimer();
    quiz.active = false;
    quiz.finished = true;
  }

  /* ---------------- Inicialización ---------------- */
  function init() {
    load();
    if (!BANK || BANK.length === 0) {
      document.body.innerHTML = "<main style='padding:40px;font-family:sans-serif'><h1>No se ha podido cargar el banco de preguntas.</h1><p>Comprueba que los archivos questions-*.js están en la misma carpeta.</p></main>";
      return;
    }
    setTheme(prefs.theme);
    $("#penaltySelect").value = String(prefs.penalty);
    $("#feedbackSelect").value = prefs.feedback;
    $("#timerToggle").checked = prefs.timer;
    renderTopicPicker();
    renderHome();
    bindEvents();
  }

  init();
})();
