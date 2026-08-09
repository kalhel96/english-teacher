// ================================================================
//  LinguaBoost – app.js
//  Complete application logic
// ================================================================

/* ─── State ─── */
let state = {
  currentPage: 'dashboard',
  vocabFilter: 'all',
  vocabSearch: '',
  vocabView: 'cards',
  idiomFilter: 'all',
  idiomCategoryFilter: 'all',
  idiomSearch: '',
  pronFilter: 'all',
  pronSearch: '',
  mistakeFilter: 'all',
  mistakeSearch: '',
  convFilter: 'all',
  slangFilter: 'all',
  slangSearch: '',
  phrasalFilter: 'all',
  phrasalSearch: '',
  sentCategory: 'all',
  grammarFilter: 'all',
  quizActive: false,
  quizIndex: 0,
  quizWords: [],
  quizScore: 0,
  quizAnswered: false,
  wordModalWord: null,
  wodIndex: 0,
  writingPromptIndex: 0,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastActiveDate: null,
  wordsLearned: [],
  bookmarks: [],
  writingHistory: [],
  activity: {},   // { 'YYYY-MM-DD': 1|2|3 }  1=vocab, 2=writing, 3=both
};

/* ─── Load / Save ─── */
function saveState() {
  const persist = {
    xp: state.xp,
    streak: state.streak,
    bestStreak: state.bestStreak,
    lastActiveDate: state.lastActiveDate,
    wordsLearned: state.wordsLearned,
    bookmarks: state.bookmarks,
    writingHistory: state.writingHistory,
    activity: state.activity,
    wodIndex: state.wodIndex,
    writingPromptIndex: state.writingPromptIndex,
  };
  try { localStorage.setItem('lb_state', JSON.stringify(persist)); } catch(e) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem('lb_state');
    if (!raw) return;
    const saved = JSON.parse(raw);
    Object.assign(state, saved);
  } catch(e) {}
}

/* ─── Streak logic ─── */
function checkAndUpdateStreak() {
  const today = dateStr(new Date());
  if (state.lastActiveDate === today) return;
  const yesterday = dateStr(new Date(Date.now() - 86400000));
  if (state.lastActiveDate === yesterday) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }
  if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  state.lastActiveDate = today;
  saveState();
  updateStreakDisplays();
}

function updateStreakDisplays() {
  setEl('sb-streak', state.streak);
  setEl('mob-streak', state.streak);
  setEl('prog-streak', state.streak);
  setEl('prog-best', state.bestStreak);
}

/* ─── XP ─── */
function addXP(amount) {
  state.xp += amount;
  saveState();
  updateXPDisplay();
}

function updateXPDisplay() {
  const level = getLevel();
  setEl('dash-xp', state.xp + ' XP');
  setEl('prog-xp', state.xp);
  setEl('xp-level-label', 'Level ' + level.lvl);
  const fill = Math.min(100, level.pct);
  const bar = document.getElementById('xp-bar-fill');
  if (bar) bar.style.width = fill + '%';
  setEl('xp-to-next', (level.next - state.xp) + ' XP to next level');
}

function getLevel() {
  const thresholds = [0, 100, 250, 500, 900, 1500, 2500, 4000, 6000, 10000];
  let lvl = 1;
  for (let i = 1; i < thresholds.length; i++) {
    if (state.xp >= thresholds[i]) lvl = i + 1; else break;
  }
  const prevT = thresholds[Math.min(lvl - 1, thresholds.length - 1)];
  const nextT = thresholds[Math.min(lvl, thresholds.length - 1)];
  const pct = nextT === prevT ? 100 : Math.round((state.xp - prevT) / (nextT - prevT) * 100);
  return { lvl, pct, next: nextT };
}

/* ─── Navigation ─── */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  const btn = document.querySelector(`.nav-btn[data-page="${page}"]`);
  if (btn) btn.classList.add('active');
  state.currentPage = page;
  closeSidebar();
  window.scrollTo(0, 0);
  if (page === 'progress') renderProgress();
  if (page === 'writing') renderWritingPage();
  if (page === 'dashboard') renderDashboard();
}

document.getElementById('nav-list').addEventListener('click', e => {
  const btn = e.target.closest('.nav-btn');
  if (btn) navigateTo(btn.dataset.page);
});

/* ─── Sidebar (mobile) ─── */
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

/* ─── Helpers ─── */
function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function dateStr(d) {
  return d.toISOString().slice(0, 10);
}
function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good Morning! ☀️';
  if (h < 17) return 'Good Afternoon! 🌤️';
  return 'Good Evening! 🌙';
}
function formatDate(d) {
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

/* ════════════════════════════════════════════════════
   DASHBOARD
════════════════════════════════════════════════════ */
function renderDashboard() {
  setEl('dash-greeting', greeting());
  setEl('dash-date', formatDate(new Date()));
  setEl('qs-vocab', VOCAB.length + '+');
  setEl('qs-idioms', IDIOMS_PHRASAL.length + '+');
  setEl('qs-tenses', GRAMMAR.filter(item => item.badge === 'Tense').length);
  setEl('qs-writings', state.writingHistory.length);
  const best = state.writingHistory.length
    ? Math.max(...state.writingHistory.map(w => w.score)) + '%'
    : '0%';
  setEl('qs-best', best);

  // Word of the Day
  renderWOD();

  // Today's writing prompt preview
  const p = WRITING_PROMPTS[state.writingPromptIndex % WRITING_PROMPTS.length];
  setEl('dash-prompt', p.prompt);

  // Study tip
  const tip = STUDY_TIPS[new Date().getDate() % STUDY_TIPS.length];
  setEl('tip-of-day', tip);
}

function renderWOD() {
  const w = VOCAB[state.wodIndex % VOCAB.length];
  setEl('wod-word', w.word);
  setEl('wod-pos', w.pos);
  setEl('wod-level', w.level.charAt(0).toUpperCase() + w.level.slice(1));
  setEl('wod-def', w.definition);
  setEl('wod-am', w.amharic);
  setEl('wod-ex', '"' + w.example + '"');
}

document.getElementById('btn-next-wod').addEventListener('click', () => {
  state.wodIndex = (state.wodIndex + 1) % VOCAB.length;
  saveState();
  addXP(5);
  renderWOD();
  // small pop animation
  const card = document.querySelector('.wod-card .wod-word');
  if (card) { card.style.transform = 'scale(1.06)'; setTimeout(() => card.style.transform = '', 200); }
});

/* ════════════════════════════════════════════════════
   VOCABULARY
════════════════════════════════════════════════════ */
function filterVocab() {
  state.vocabSearch = document.getElementById('vocab-search').value.toLowerCase();
  renderVocab();
}

function setVocabFilter(filter, btn) {
  state.vocabFilter = filter;
  document.querySelectorAll('#vocab-filters .ftab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderVocab();
}

function setVocabView(view) {
  state.vocabView = view;
  ['vt-cards', 'vt-list', 'vt-quiz'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  const activeId = view === 'cards' ? 'vt-cards' : (view === 'list' ? 'vt-list' : 'vt-quiz');
  const activeEl = document.getElementById(activeId);
  if (activeEl) activeEl.classList.add('active');

  const container = document.getElementById('vocab-container');
  const quizContainer = document.getElementById('quiz-container');
  if (view === 'quiz') {
    if (container) container.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    startVocabQuiz();
  } else {
    if (container) container.style.display = view === 'cards' ? 'grid' : 'block';
    if (quizContainer) quizContainer.style.display = 'none';
    container.className = view === 'cards' ? 'cards-grid' : '';
    renderVocab();
  }
}

function startVocabQuiz() {
  state.vocabView = 'quiz';
  const pool = VOCAB.filter(w => state.vocabFilter === 'bookmarked'
    ? state.bookmarks.includes(w.id)
    : (state.vocabFilter === 'all' || w.level === state.vocabFilter));
  state.quizWords = shuffle([...pool]).slice(0, 10);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  renderQuiz();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  if (state.quizIndex >= state.quizWords.length) {
    // Quiz complete
    const pct = Math.round(state.quizScore / state.quizWords.length * 100);
    addXP(state.quizScore * 10);
    container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-q">Quiz Complete! 🎉</div>
        <div class="quiz-score">Score: ${state.quizScore}/${state.quizWords.length} (${pct}%)</div>
        <div style="margin-top:12px;color:var(--muted);font-size:.9rem">You earned +${state.quizScore * 10} XP</div>
        <button class="btn-quiz-next" style="margin-top:20px" onclick="startVocabQuiz()">Play Again</button>
        <button class="btn-quiz-next" style="margin-top:10px;background:var(--glass);border:1px solid var(--border);color:var(--muted)" onclick="setVocabView('cards')">Back to Cards</button>
      </div>`;
    return;
  }

  const word = state.quizWords[state.quizIndex];
  // Build 4 options (1 correct + 3 random)
  const wrongPool = VOCAB.filter(v => v.id !== word.id);
  const options = shuffle([word, ...shuffle(wrongPool).slice(0, 3)]);

  state.quizAnswered = false;
  container.innerHTML = `
    <div class="quiz-progress">${state.quizIndex + 1} / ${state.quizWords.length} • Score: ${state.quizScore}</div>
    <div class="quiz-card">
      <div class="quiz-q">"${word.example.length > 70 ? word.example.slice(0, 70) + '…' : word.example}"</div>
      <div class="quiz-hint">What does the highlighted word mean?<br><strong style="color:var(--purple-light)">${word.word}</strong></div>
      <div class="quiz-options">
        ${options.map((opt, i) => `
          <button class="quiz-opt" id="quiz-opt-${i}" onclick="handleQuizAnswer(${opt.id}, ${word.id}, ${i})">
            ${opt.definition.length > 80 ? opt.definition.slice(0, 80) + '…' : opt.definition}
          </button>`).join('')}
      </div>
    </div>`;
}

function handleQuizAnswer(selectedId, correctId, btnIdx) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const isCorrect = selectedId === correctId;
  if (isCorrect) state.quizScore++;

  // Color all buttons
  const word = state.quizWords[state.quizIndex];
  const wrongPool = VOCAB.filter(v => v.id !== word.id);
  const options = shuffle([word, ...shuffle(wrongPool).slice(0, 3)]);

  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    const optId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
    if (optId === correctId) btn.classList.add('correct');
    else if (i === btnIdx) btn.classList.add('wrong');
    btn.disabled = true;
  });

  setTimeout(() => {
    state.quizIndex++;
    renderQuiz();
  }, 1200);
}

function renderVocab() {
  const container = document.getElementById('vocab-container');
  const quizContainer = document.getElementById('quiz-container');
  if (!container) return;
  if (state.vocabView === 'quiz') { container.style.display = 'none'; return; }

  let words = VOCAB.filter(w => {
    if (state.vocabFilter === 'bookmarked') return state.bookmarks.includes(w.id);
    if (state.vocabFilter !== 'all' && w.level !== state.vocabFilter) return false;
    if (state.vocabSearch) {
      const s = state.vocabSearch;
      return w.word.includes(s) || w.definition.toLowerCase().includes(s) || w.amharic.includes(s);
    }
    return true;
  });

  setEl('vocab-count', `${words.length} word${words.length !== 1 ? 's' : ''} found`);

  if (state.vocabView === 'cards') {
    container.className = 'cards-grid';
    container.innerHTML = words.map(w => buildVocabCard(w)).join('');
  } else {
    container.className = '';
    container.innerHTML = words.map(w => `
      <div class="vocab-list-item" onclick="openWordModal(${w.id})">
        <div class="vli-word">${w.word}</div>
        <div class="vli-def">${w.definition}</div>
        <div class="vli-am">🇪🇹 ${w.amharic}</div>
      </div>`).join('');
  }
}

function buildVocabCard(w) {
  const bmIcon = state.bookmarks.includes(w.id) ? '⭐' : '☆';
  return `
    <div class="vocab-card" id="vc-${w.id}" onclick="flipCard(${w.id})">
      <div class="vc-inner">
        <div class="vc-front">
          <div>
            <div class="vc-word">${w.word}</div>
            <div class="vc-pos-lv">
              <span class="vc-pos">${w.pos}</span>
              <span class="vc-lv lv-${w.level === 'intermediate' ? 'int' : 'adv'}">${w.level}</span>
            </div>
          </div>
          <div class="vc-front-bottom">
            <span class="flip-hint">👆 Tap to reveal</span>
            <button class="vc-bm" onclick="event.stopPropagation();toggleBookmarkId(${w.id})" title="Bookmark">${bmIcon}</button>
          </div>
        </div>
        <div class="vc-back" onclick="event.stopPropagation();openWordModal(${w.id})">
          <div class="vc-def">${w.definition}</div>
          <div class="vc-am">🇪🇹 ${w.amharic}</div>
          <div class="vc-ex">"${w.example.slice(0, 90)}${w.example.length > 90 ? '…' : ''}"</div>
        </div>
      </div>
    </div>`;
}

function flipCard(id) {
  const el = document.getElementById('vc-' + id);
  if (el) {
    el.classList.toggle('flipped');
    if (el.classList.contains('flipped') && !state.wordsLearned.includes(id)) {
      state.wordsLearned.push(id);
      addXP(3);
      saveState();
      updateProgressStats();
    }
  }
}

function toggleBookmarkId(id) {
  if (state.bookmarks.includes(id)) {
    state.bookmarks = state.bookmarks.filter(b => b !== id);
  } else {
    state.bookmarks.push(id);
    addXP(2);
  }
  saveState();
  renderVocab();
}

/* ─── Word Modal ─── */
function openWordModal(id) {
  const w = VOCAB.find(v => v.id === id);
  if (!w) return;
  state.wordModalWord = w;
  setEl('wm-word', w.word);
  setEl('wm-pos', w.pos);
  setEl('wm-lvl', w.level);
  setEl('wm-def', w.definition);
  setEl('wm-am', w.amharic);
  setEl('wm-ex', '"' + w.example + '"');
  setEl('wm-ex2', '"' + w.example2 + '"');
  const bmBtn = document.getElementById('wm-bm-btn');
  if (bmBtn) {
    bmBtn.textContent = state.bookmarks.includes(id) ? '⭐ Saved' : '☆ Save';
    bmBtn.className = 'bm-btn' + (state.bookmarks.includes(id) ? ' saved' : '');
  }
  document.getElementById('word-modal-bg').classList.add('open');
}

function closeWordModal() {
  document.getElementById('word-modal-bg').classList.remove('open');
}

function toggleBookmark() {
  if (!state.wordModalWord) return;
  toggleBookmarkId(state.wordModalWord.id);
  const bmBtn = document.getElementById('wm-bm-btn');
  if (bmBtn) {
    const saved = state.bookmarks.includes(state.wordModalWord.id);
    bmBtn.textContent = saved ? '⭐ Saved' : '☆ Save';
    bmBtn.className = 'bm-btn' + (saved ? ' saved' : '');
  }
}

document.getElementById('word-modal-bg').addEventListener('click', function(e) {
  if (e.target === this) closeWordModal();
});

/* ════════════════════════════════════════════════════
   IDIOMS & PHRASAL EXPRESSIONS
════════════════════════════════════════════════════ */
function setIdiomFilter(filter, btn) {
  state.idiomFilter = filter;
  document.querySelectorAll('#idiom-filters .ftab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderIdioms();
}

function setIdiomCatFilter(filter, btn) {
  state.idiomCategoryFilter = filter;
  document.querySelectorAll('#idiom-filters .ftab').forEach(b => {
    if (!b.textContent.includes('All') && !b.textContent.includes('Phrasal') && !b.textContent.includes('Idioms')) {
      b.classList.remove('active');
    }
  });
  if (btn) btn.classList.add('active');
  renderIdioms();
}

function filterIdioms() {
  const input = document.getElementById('idiom-search');
  state.idiomSearch = input ? input.value.toLowerCase() : '';
  renderIdioms();
}

function renderIdioms() {
  const container = document.getElementById('idiom-container');
  if (!container) return;

  let items = IDIOMS_PHRASAL.filter(item => {
    if (state.idiomFilter !== 'all' && item.type !== state.idiomFilter) return false;
    if (state.idiomCategoryFilter !== 'all' && item.category !== state.idiomCategoryFilter) return false;
    if (state.idiomSearch) {
      const q = state.idiomSearch;
      return item.expression.toLowerCase().includes(q) ||
             item.meaning.toLowerCase().includes(q) ||
             item.amharic.toLowerCase().includes(q) ||
             item.example.toLowerCase().includes(q) ||
             item.example2.toLowerCase().includes(q);
    }
    return true;
  });

  setEl('idiom-count', `${items.length} expression${items.length !== 1 ? 's' : ''} found`);
  container.innerHTML = items.map(buildIdiomCard).join('');
}

function buildIdiomCard(item) {
  const typeLabel = item.type === 'phrasal' ? '🔗 Phrasal Verb' : '💎 Idiom';
  return `
    <div class="idiom-card">
      <div class="id-top">
        <div class="id-expression">${item.expression}</div>
        <span class="id-type">${typeLabel}</span>
      </div>
      <div class="id-meaning">${item.meaning}</div>
      <div class="id-am">🇪🇹 ${item.amharic}</div>
      <div class="id-ex">"${item.example}"</div>
      <div class="id-ex">"${item.example2}"</div>
    </div>`;
}

/* ════════════════════════════════════════════════════
   LEGACY SLANG
════════════════════════════════════════════════════ */
function setSlangFilter(filter, btn) {
  state.slangFilter = filter;
  document.querySelectorAll('#page-slang .ftab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSlang();
}

function filterSlang() {
  state.slangSearch = document.getElementById('slang-search').value.toLowerCase();
  renderSlang();
}

function renderSlang() {
  const container = document.getElementById('slang-container');
  if (!container) return;
  let words = SLANG.filter(s => {
    if (state.slangFilter !== 'all' && s.origin !== state.slangFilter) return false;
    if (state.slangSearch) {
      const q = state.slangSearch;
      return s.word.toLowerCase().includes(q) ||
             s.meaning.toLowerCase().includes(q) ||
             (s.amharic || '').toLowerCase().includes(q);
    }
    return true;
  });
  setEl('slang-count', `${words.length} slang term${words.length !== 1 ? 's' : ''} found`);
  container.innerHTML = words.map(s => buildSlangCard(s)).join('');
}

function buildSlangCard(s) {
  const originLabels = { us: '🇺🇸 American', uk: '🇬🇧 British', internet: '🌐 Internet', genz: '⚡ Gen-Z' };
  const originCls = { us: 'orig-us', uk: 'orig-uk', internet: 'orig-internet', genz: 'orig-genz' };
  const cls = originCls[s.origin] || 'orig-internet';
  const label = originLabels[s.origin] || s.origin;
  return `
    <div class="slang-card">
      <div class="sl-top">
        <div class="sl-word">${s.word}</div>
        <span class="sl-orig ${cls}">${label}</span>
      </div>
      <div class="sl-meaning">${s.meaning}</div>
      ${s.amharic ? `<div class="sl-am">🇪🇹 ${s.amharic}</div>` : ''}
      <div class="sl-ex">"${s.example}"</div>
    </div>`;
}

/* ════════════════════════════════════════════════════
   GRAMMAR
════════════════════════════════════════════════════ */
function renderGrammar() {
  const nav = document.getElementById('grammar-nav');
  const container = document.getElementById('grammar-container');
  if (!nav || !container) return;

  // Build category pills
  const categories = ['All', 'Tense', 'Grammar', 'Writing'];
  nav.innerHTML = categories.map(c => `
    <button class="gram-nav-btn ${c === 'All' ? 'active' : ''}"
      onclick="setGrammarFilter('${c}', this)">${c}</button>`).join('');

  renderGrammarItems();
}

function setGrammarFilter(filter, btn) {
  state.grammarFilter = filter;
  document.querySelectorAll('.gram-nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrammarItems();
}

function renderGrammarItems() {
  const container = document.getElementById('grammar-container');
  if (!container) return;
  const items = state.grammarFilter === 'All'
    ? GRAMMAR
    : GRAMMAR.filter(g => g.badge === state.grammarFilter);

  container.innerHTML = items.map(g => buildGrammarCard(g)).join('');
}

function buildGrammarCard(g) {
  const exHtml = g.examples.map(ex => {
    const cls = ex.type === 'pos' ? 'pos-ex' : ex.type === 'neg' ? 'neg-ex' : ex.type === 'q' ? 'q-ex' : 'note-ex';
    return `
      <div class="gt-ex-item ${cls}">
        <div class="ex-label">${ex.label}</div>
        <div>${ex.text}</div>
      </div>`;
  }).join('');

  return `
    <div class="grammar-topic" id="gram-${g.id}">
      <div class="gt-header" onclick="toggleGrammar(${g.id})">
        <div class="gt-title">
          <span>${g.emoji}</span>
          ${g.title}
          <span class="gt-badge">${g.badge}</span>
        </div>
        <span class="gt-arrow">▾</span>
      </div>
      <div class="gt-body">
        <div class="gt-explanation">${g.explanation}</div>
        <div class="gt-formula">${g.formula}</div>
        <div class="gt-examples">${exHtml}</div>
      </div>
    </div>`;
}

function toggleGrammar(id) {
  const el = document.getElementById('gram-' + id);
  if (!el) return;
  const wasOpen = el.classList.contains('open');
  // Close all others
  document.querySelectorAll('.grammar-topic').forEach(t => t.classList.remove('open'));
  if (!wasOpen) {
    el.classList.add('open');
    addXP(2);
  }
}

/* ════════════════════════════════════════════════════
   PHRASAL VERBS
════════════════════════════════════════════════════ */
function setPhrasalFilter(filter, btn) {
  state.phrasalFilter = filter;
  document.querySelectorAll('#page-phrasal .ftab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPhrasal();
}

function filterPhrasal() {
  state.phrasalSearch = document.getElementById('phrasal-search').value.toLowerCase();
  renderPhrasal();
}

function renderPhrasal() {
  const container = document.getElementById('phrasal-container');
  if (!container) return;
  let items = PHRASAL.filter(p => {
    if (state.phrasalFilter !== 'all' && p.sep !== state.phrasalFilter) return false;
    if (state.phrasalSearch) {
      return p.pv.toLowerCase().includes(state.phrasalSearch) ||
             p.meaning.toLowerCase().includes(state.phrasalSearch);
    }
    return true;
  });

  container.innerHTML = items.map(p => buildPhrasalCard(p)).join('');
}

function buildPhrasalCard(p) {
  const sepLabel = p.sep === 'sep' ? '✦ Separable' : p.sep === 'insep' ? '✦ Inseparable' : '✦ Both';
  const sepCls = p.sep === 'sep' ? 'pv-sep' : p.sep === 'insep' ? 'pv-insep' : 'pv-both';
  const exHtml = (p.examples || []).map(ex =>
    `<div class="pv-ex">${ex}</div>`).join('');
  return `
    <div class="pv-card">
      <div class="pv-top">
        <span class="pv-verb">${p.pv}</span>
        <span class="pv-tag ${sepCls}">${sepLabel}</span>
      </div>
      <div class="pv-meaning">${p.meaning}</div>
      ${p.am ? `<div class="pv-am"><span class="pv-am-flag">🇪🇹</span>${p.am}</div>` : ''}
      <div class="pv-exs">${exHtml}</div>
    </div>`;
}

/* ════════════════════════════════════════════════════
   SENTENCES
════════════════════════════════════════════════════ */
function renderSentences() {
  const catsEl = document.getElementById('sent-cats');
  const container = document.getElementById('sent-container');
  if (!catsEl || !container) return;

  const cats = ['all', ...Object.keys(SENTENCES)];
  const catLabels = {
    all: '🌐 All',
    professional: '💼 Professional',
    academic: '🎓 Academic',
    everyday: '☀️ Everyday',
    expressing_ideas: '💡 Expressing Ideas',
    social: '🤝 Social',
    persuasive: '🎤 Persuasive',
    emotional: '❤️ Emotional',
    advanced_phrases: '⭐ Advanced Phrases'
  };

  catsEl.innerHTML = cats.map((c, i) => `
    <button class="scat-btn ${i === 0 ? 'active' : ''}"
      onclick="setSentCategory('${c}', this)">${catLabels[c] || c}</button>`).join('');

  renderSentenceItems();
}

function setSentCategory(cat, btn) {
  state.sentCategory = cat;
  document.querySelectorAll('.scat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSentenceItems();
}

function renderSentenceItems() {
  const container = document.getElementById('sent-container');
  if (!container) return;
  const catEmojis = {
    professional: '💼',
    academic: '🎓',
    everyday: '☀️',
    expressing_ideas: '💡',
    social: '🤝',
    persuasive: '🎤',
    emotional: '❤️',
    advanced_phrases: '⭐'
  };

  const groups = state.sentCategory === 'all'
    ? Object.keys(SENTENCES)
    : [state.sentCategory];

  container.innerHTML = groups.map(cat => {
    if (!SENTENCES[cat]) return '';
    const emoji = catEmojis[cat] || '📌';
    const label = cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const items = SENTENCES[cat].map(s => `
      <div class="sent-card">
        <div class="sent-en">${s.en}</div>
        ${s.am ? `<div class="sent-am"><span class="sent-am-flag">🇪🇹</span>${s.am}</div>` : ''}
        <div class="sent-use">📌 ${s.use}</div>
      </div>`).join('');
    return `
      <div class="sent-group">
        <div class="sg-title">${emoji} ${label}</div>
        ${items}
      </div>`;
  }).join('');
}

/* ════════════════════════════════════════════════════
   PRONUNCIATION
════════════════════════════════════════════════════ */
function setPronFilter(filter, btn) {
  state.pronFilter = filter;
  document.querySelectorAll('#pron-filters .ftab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPronunciation();
}

function filterPronunciation() {
  const input = document.getElementById('pron-search');
  state.pronSearch = input ? input.value.toLowerCase() : '';
  renderPronunciation();
}

function renderPronunciation() {
  const container = document.getElementById('pron-container');
  if (!container) return;

  const items = PRONUNCIATION.filter(item => {
    if (state.pronFilter !== 'all' && item.difficulty !== state.pronFilter) return false;
    if (state.pronSearch) {
      const q = state.pronSearch;
      return item.title.toLowerCase().includes(q) ||
             item.description.toLowerCase().includes(q) ||
             item.descriptionAm.toLowerCase().includes(q);
    }
    return true;
  });

  container.innerHTML = items.map(item => `
    <div class="pron-card">
      <div class="pron-title-row">
        <div class="pron-title">${item.title}</div>
        <span class="pron-level">${item.difficulty}</span>
      </div>
      <div class="pron-desc">${item.description}</div>
      <div class="pron-am">🇪🇹 ${item.descriptionAm}</div>
      <div class="pron-tip">💡 ${item.tip}</div>
      <div class="pron-examples">${item.examples.map(ex => `<span class="pron-chip">${ex}</span>`).join('')}</div>
    </div>`).join('');
}

/* ════════════════════════════════════════════════════
   COMMON MISTAKES
════════════════════════════════════════════════════ */
function setMistakeFilter(filter, btn) {
  state.mistakeFilter = filter;
  document.querySelectorAll('#mistake-filters .ftab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMistakes();
}

function filterMistakes() {
  const input = document.getElementById('mistake-search');
  state.mistakeSearch = input ? input.value.toLowerCase() : '';
  renderMistakes();
}

function renderMistakes() {
  const container = document.getElementById('mistake-container');
  if (!container) return;

  const items = COMMON_MISTAKES.filter(item => {
    if (state.mistakeFilter !== 'all' && item.category !== state.mistakeFilter) return false;
    if (state.mistakeSearch) {
      const q = state.mistakeSearch;
      return item.title.toLowerCase().includes(q) ||
             item.wrong.toLowerCase().includes(q) ||
             item.correct.toLowerCase().includes(q) ||
             item.explanation.toLowerCase().includes(q);
    }
    return true;
  });

  container.innerHTML = items.map(item => `
    <div class="mist-card">
      <div class="mist-title">${item.title}</div>
      <div class="mist-wrong">❌ ${item.wrong}</div>
      <div class="mist-correct">✅ ${item.correct}</div>
      <div class="mist-exp">${item.explanation}</div>
      <div class="mist-am">🇪🇹 ${item.explanationAm}</div>
    </div>`).join('');
}

/* ════════════════════════════════════════════════════
   CONVERSATIONS
════════════════════════════════════════════════════ */
function setConvFilter(filter, btn) {
  state.convFilter = filter;
  document.querySelectorAll('#conv-filters .ftab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderConversations();
}

function renderConversations() {
  const container = document.getElementById('conv-container');
  if (!container) return;

  const items = CONVERSATIONS.filter(item => state.convFilter === 'all' || item.category === state.convFilter);
  container.innerHTML = items.map(item => `
    <div class="conv-card">
      <div class="conv-title-row">
        <div class="conv-title">${item.title}</div>
        <span class="conv-level">${item.level}</span>
      </div>
      <div class="conv-desc">${item.description}</div>
      <div class="conv-lines">
        ${(item.dialogue || []).map(line => `
          <div class="conv-line">
            <strong>${line.speaker}:</strong> ${line.text}
            <div class="conv-am">🇪🇹 ${line.textAm}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

/* ════════════════════════════════════════════════════
   WRITING LAB
════════════════════════════════════════════════════ */
function renderWritingPage() {
  const p = WRITING_PROMPTS[state.writingPromptIndex % WRITING_PROMPTS.length];
  setEl('writing-prompt-text', p.prompt);
  setEl('wp-level', p.level);
  setEl('prompt-num', (state.writingPromptIndex % WRITING_PROMPTS.length) + 1);

  const tipsEl = document.getElementById('wpc-tips');
  if (tipsEl && p.tips) {
    tipsEl.innerHTML = p.tips.map(t => `<div class="wpc-tip">${t}</div>`).join('');
  }

  document.getElementById('grade-result').style.display = 'none';
  document.getElementById('editor-wrap').style.display = 'block';
  const editor = document.getElementById('writing-editor');
  if (editor) { editor.value = ''; }
  setEl('wc-num', '0');
  renderWritingHistory();
}

function updateWordCount() {
  const editor = document.getElementById('writing-editor');
  if (!editor) return;
  const words = editor.value.trim() === '' ? 0 : editor.value.trim().split(/\s+/).length;
  setEl('wc-num', words);
}

function clearEditor() {
  const editor = document.getElementById('writing-editor');
  if (editor) editor.value = '';
  setEl('wc-num', '0');
  document.getElementById('grade-result').style.display = 'none';
  document.getElementById('editor-wrap').style.display = 'block';
}

function submitWriting() {
  const editor = document.getElementById('writing-editor');
  if (!editor) return;
  const text = editor.value.trim();
  if (!text) { alert('Please write something before submitting!'); return; }
  const words = text.split(/\s+/).length;
  if (words < 30) { alert('Please write at least 30 words for a meaningful grade.'); return; }

  const result = gradeWriting(text, words);
  showGradeResult(result, text, words);
  addXP(result.score);
  checkAndUpdateStreak();

  // Save to history
  const p = WRITING_PROMPTS[state.writingPromptIndex % WRITING_PROMPTS.length];
  state.writingHistory.unshift({
    score: result.score,
    grade: result.letter,
    prompt: p.prompt.slice(0, 60) + '…',
    date: new Date().toLocaleDateString(),
    words,
    text,
    feedback: result.reflection,
  });
  // Advance to next prompt
  state.writingPromptIndex++;

  // Mark activity
  const today = dateStr(new Date());
  const cur = state.activity[today] || 0;
  state.activity[today] = Math.max(cur, 2);

  saveState();
  updateProgressStats();
}

function gradeWriting(text, wordCount) {
  const lower = text.toLowerCase();

  // 1. Word count score (max 20)
  let wcScore = Math.min(20, Math.round(wordCount / 10));

  // 2. Vocabulary richness (max 20) — check for advanced vocab used
  let vocabHits = 0;
  VOCAB.filter(w => w.level === 'advanced').forEach(w => {
    if (lower.includes(w.word.toLowerCase())) vocabHits++;
  });
  let vocabScore = Math.min(20, vocabHits * 5);

  // 3. Connectors / discourse markers (max 20)
  const connectors = ['however','furthermore','moreover','therefore','consequently','although','despite','nevertheless','on the other hand','in addition','for instance','in contrast','as a result','not only','in conclusion','to illustrate','specifically','ultimately','indeed','nonetheless'];
  let connCount = connectors.filter(c => lower.includes(c)).length;
  let connScore = Math.min(20, connCount * 4);

  // 4. Sentence variety – average sentence length (max 20)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
  const avgLen = sentences.length > 0 ? wordCount / sentences.length : 5;
  let sentScore = avgLen >= 10 && avgLen <= 25 ? 20 : avgLen >= 6 ? 12 : 6;

  // 5. Complexity bonus — commas, semicolons, complex structures (max 20)
  const commas = (text.match(/,/g) || []).length;
  const semi = (text.match(/;/g) || []).length;
  const clauseMarkers = ['which','who','that','whose','where','when','because','since','as','if','unless','whether'];
  const clauseCount = clauseMarkers.filter(c => lower.includes(c)).length;
  let complexScore = Math.min(20, commas * 1 + semi * 3 + clauseCount * 2);

  // Final score
  let total = wcScore + vocabScore + connScore + sentScore + complexScore;
  total = Math.min(100, Math.max(10, total));

  // Bonus for longer essays
  if (wordCount >= 150) total = Math.min(100, total + 5);
  if (wordCount >= 250) total = Math.min(100, total + 5);

  // Letter grade
  let letter, title;
  if (total >= 90) { letter = 'A+'; title = 'Exceptional! 🌟'; }
  else if (total >= 80) { letter = 'A'; title = 'Excellent! 🎉'; }
  else if (total >= 70) { letter = 'B+'; title = 'Very Good! 👏'; }
  else if (total >= 60) { letter = 'B'; title = 'Good Work! 😊'; }
  else if (total >= 50) { letter = 'C'; title = 'Developing 📈'; }
  else { letter = 'D'; title = 'Keep Practicing! 💪'; }

  // Reflection
  const reflections = {
    vocab: vocabHits === 0
      ? 'Try incorporating advanced vocabulary words from the Vocabulary section into your writing to boost your score.'
      : `Great job using ${vocabHits} advanced word${vocabHits > 1 ? 's' : ''}! Aim for even more next time.`,
    connectors: connCount < 2
      ? 'Your writing needs more discourse markers. Use words like "however," "furthermore," "consequently" to connect ideas.'
      : `You used ${connCount} connectors — excellent! They make your writing flow more naturally.`,
    length: wordCount < 100
      ? 'Write longer responses (150-300 words) for higher scores. Develop each point with examples.'
      : wordCount >= 200
      ? 'Excellent response length! Your writing shows substantial development of ideas.'
      : 'Good length! Aim for 200+ words to fully develop your argument.',
    sentences: avgLen < 8
      ? 'Your sentences are quite short. Practice writing complex sentences with relative clauses and subordinate clauses.'
      : avgLen > 30
      ? 'Some sentences may be too long. Vary your sentence length for better readability.'
      : 'Good sentence variety! You are writing at an advanced level.',
  };

  const reflection = `🎯 ${reflections.vocab}\n\n📝 ${reflections.connectors}\n\n📊 ${reflections.length}\n\n🔤 ${reflections.sentences}`;

  // Suggestions
  const suggestions = [];
  if (vocabHits < 2) suggestions.push('Use at least 3-5 advanced words from the vocabulary section in each essay.');
  if (connCount < 2) suggestions.push('Add discourse markers: "Furthermore, ...", "However, ...", "As a result, ..."');
  if (wordCount < 150) suggestions.push('Expand each paragraph — give specific examples and explanations for every point.');
  if (avgLen < 10) suggestions.push('Write more complex sentences using "which," "although," "because," and "despite."');
  if (suggestions.length === 0) suggestions.push('Continue at this level and try the advanced prompts for extra challenge!');

  return {
    score: total,
    letter,
    title,
    reflection,
    suggestions,
    breakdown: {
      wordCount: { label: 'Length & Detail', score: wcScore, max: 20 },
      vocab: { label: 'Vocabulary Richness', score: vocabScore, max: 20 },
      connectors: { label: 'Connectors & Flow', score: connScore, max: 20 },
      sentences: { label: 'Sentence Variety', score: sentScore, max: 20 },
      complexity: { label: 'Grammatical Complexity', score: complexScore, max: 20 },
    }
  };
}

function showGradeResult(result, text, words) {
  document.getElementById('editor-wrap').style.display = 'none';
  const gradeEl = document.getElementById('grade-result');
  gradeEl.style.display = 'block';

  setEl('grade-letter', result.letter);
  setEl('grade-score', result.score + '/100');
  setEl('grade-title', result.title + ` • ${words} words`);

  // Breakdown
  const bdEl = document.getElementById('grade-breakdown');
  if (bdEl) {
    bdEl.innerHTML = Object.values(result.breakdown).map(b => {
      const pct = Math.round(b.score / b.max * 100);
      return `
        <div class="gb-item">
          <div class="gb-label">${b.label}</div>
          <div class="gb-bar"><div class="gb-fill" style="width:0" data-w="${pct}"></div></div>
          <div class="gb-score">${b.score}/${b.max}</div>
        </div>`;
    }).join('');
    // Animate bars
    setTimeout(() => {
      bdEl.querySelectorAll('.gb-fill').forEach(el => {
        el.style.width = el.dataset.w + '%';
      });
    }, 100);
  }

  // Reflection
  const reflEl = document.getElementById('grade-reflection');
  if (reflEl) {
    reflEl.innerHTML = result.reflection.split('\n\n').map(line =>
      `<div style="margin-bottom:8px">${line}</div>`).join('');
  }

  // Suggestions
  const sugEl = document.getElementById('grade-suggestions');
  if (sugEl) {
    sugEl.innerHTML = result.suggestions.map(s =>
      `<div class="suggestion-item">${s}</div>`).join('');
  }

  gradeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function writeAgain() {
  renderWritingPage();
  document.querySelector('.writing-prompt-card').scrollIntoView({ behavior: 'smooth' });
}

function renderWritingHistory() {
  const el = document.getElementById('writing-history');
  if (!el) return;
  if (state.writingHistory.length === 0) {
    el.innerHTML = '<p style="color:var(--muted);font-size:.9rem;text-align:center;padding:24px">No submissions yet — start writing to build your history!</p>';
    return;
  }
  el.innerHTML = state.writingHistory.slice(0, 10).map(h => `
    <div class="writing-hist-item">
      <div class="whi-score">${h.score}</div>
      <div class="whi-info">
        <div class="whi-prompt">${h.prompt}</div>
        <div class="whi-date">${h.date} • ${h.words} words</div>
      </div>
      <div class="whi-grade">${h.grade}</div>
    </div>`).join('');
}

/* ════════════════════════════════════════════════════
   PROGRESS
════════════════════════════════════════════════════ */
function renderProgress() {
  updateProgressStats();
  renderActivityCalendar();
  renderAchievements();
  updateXPDisplay();
}

function updateProgressStats() {
  setEl('prog-vocab', state.wordsLearned.length);
  setEl('prog-essays', state.writingHistory.length);
  const avg = state.writingHistory.length
    ? Math.round(state.writingHistory.reduce((a, b) => a + b.score, 0) / state.writingHistory.length)
    : 0;
  setEl('prog-avg', avg + '%');
  setEl('qs-writings', state.writingHistory.length);
}

function renderActivityCalendar() {
  const el = document.getElementById('activity-cal');
  if (!el) return;
  const today = new Date();
  const cells = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = dateStr(d);
    const level = state.activity[key] || 0;
    const isToday = i === 0;
    cells.push(`<div class="act-cell act-${level} ${isToday ? 'today-cell' : ''}" title="${key}: ${['No activity','Vocab','Writing','Both'][level]}"></div>`);
  }
  el.innerHTML = cells.join('');
}

function renderAchievements() {
  const el = document.getElementById('achievements');
  if (!el) return;
  const achieves = [
    { icon: '🎯', name: 'First Steps', desc: 'Flip your first vocabulary card', unlocked: state.wordsLearned.length >= 1 },
    { icon: '📖', name: 'Word Collector', desc: 'Learn 50 vocabulary words', unlocked: state.wordsLearned.length >= 50 },
    { icon: '📚', name: 'Vocabulary Master', desc: 'Learn 200 words', unlocked: state.wordsLearned.length >= 200 },
    { icon: '✍️', name: 'First Essay', desc: 'Complete your first writing task', unlocked: state.writingHistory.length >= 1 },
    { icon: '📝', name: 'Consistent Writer', desc: 'Write 10 essays', unlocked: state.writingHistory.length >= 10 },
    { icon: '🔥', name: 'On Fire', desc: 'Maintain a 7-day streak', unlocked: state.bestStreak >= 7 },
    { icon: '⚡', name: 'XP Hunter', desc: 'Earn 500 XP', unlocked: state.xp >= 500 },
    { icon: '🏆', name: 'Champion', desc: 'Earn 2000 XP', unlocked: state.xp >= 2000 },
    { icon: '⭐', name: 'Bookworm', desc: 'Bookmark 20 words', unlocked: state.bookmarks.length >= 20 },
    { icon: '🌟', name: 'Perfect Score', desc: 'Score 90+ on a writing task', unlocked: state.writingHistory.some(w => w.score >= 90) },
    { icon: '🎓', name: 'Scholar', desc: 'Maintain a 30-day streak', unlocked: state.bestStreak >= 30 },
    { icon: '💎', name: 'Linguist', desc: 'Earn 5000 XP', unlocked: state.xp >= 5000 },
  ];

  el.innerHTML = achieves.map(a => `
    <div class="ach-card ${a.unlocked ? 'unlocked' : 'locked'}">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
    </div>`).join('');
}

/* ════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════ */
function init() {
  loadState();
  checkAndUpdateStreak();
  updateStreakDisplays();
  updateXPDisplay();
  renderDashboard();
  renderVocab();
  renderIdioms();
  renderGrammar();
  renderPronunciation();
  renderMistakes();
  renderConversations();
  renderSentences();
  renderWritingPage();
  renderProgress();
}

document.addEventListener('DOMContentLoaded', init);
