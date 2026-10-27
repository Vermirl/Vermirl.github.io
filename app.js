/**
 * Cisco CCNA 200-301 Mastery Hub — Application Core
 * Dedicated Study Modes: Practice, Oral Flashcard, Review Room & Mock Exam
 */

(() => {
  'use strict';

  // --- State ---
  let questions = [];
  let currentIndex = 0; // Global index in questions array (0..224)
  let studyMode = 'practice'; // 'practice' | 'flashcard' | 'review' | 'mock'
  let currentView = 'text'; // 'text' | 'image'
  let isShuffleEnabled = false;
  let shuffledCache = {}; // { qid: { options, answer, keyMap } }
  let selectedOptions = new Set();
  let isAnswerRevealed = false;
  let activeImgPart = 0;
  let activeFilter = 'all';

  // Persistent user data
  let userProgress = {
    mastered: new Set(),
    review: new Set(),
    answers: {}, // { qid: { isCorrect: bool, keys: [] } }
    notes: {}    // { qid: "note text" }
  };

  // Mock Exam Session State
  let mockState = {
    isActive: false,
    pool: [], // 30 question indices
    answers: {}, // { qid: ['A'] }
    timeRemaining: 45 * 60,
    timerId: null,
    isFinished: false,
    startedAt: null
  };

  // --- DOM Elements ---
  const el = {
    // Top Bar Mode Switchers
    modePracticeBtn: document.getElementById('modePracticeBtn'),
    modeFlashcardBtn: document.getElementById('modeFlashcardBtn'),
    modeReviewBtn: document.getElementById('modeReviewBtn'),
    modeMockBtn: document.getElementById('modeMockBtn'),
    reviewCountBadge: document.getElementById('reviewCountBadge'),

    // Top Bar Shuffle Toggle Button
    toggleShuffleBtn: document.getElementById('toggleShuffleBtn'),
    shuffleStatusText: document.getElementById('shuffleStatusText'),

    // Review Room Banner & Empty State
    reviewModeBanner: document.getElementById('reviewModeBanner'),
    reviewProgressText: document.getElementById('reviewProgressText'),
    exitReviewBtn: document.getElementById('exitReviewBtn'),
    emptyReviewContainer: document.getElementById('emptyReviewContainer'),
    emptyReviewBackBtn: document.getElementById('emptyReviewBackBtn'),

    // Mock Exam Top Bar
    mockExamBar: document.getElementById('mockExamBar'),
    mockQuestionProgress: document.getElementById('mockQuestionProgress'),
    mockTimerDisplay: document.getElementById('mockTimerDisplay'),
    submitMockBtn: document.getElementById('submitMockBtn'),
    quitMockBtn: document.getElementById('quitMockBtn'),

    // Header Stats & Controls
    statMastered: document.getElementById('statMastered'),
    statReview: document.getElementById('statReview'),
    statPercent: document.getElementById('statPercent'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    shortcutsBtn: document.getElementById('shortcutsBtn'),
    sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
    
    // Question Meta
    qNumberBadge: document.getElementById('qNumberBadge'),
    qCategoryBadge: document.getElementById('qCategoryBadge'),
    qTypeBadge: document.getElementById('qTypeBadge'),
    viewTextBtn: document.getElementById('viewTextBtn'),
    viewImgBtn: document.getElementById('viewImgBtn'),
    markReviewBtn: document.getElementById('markReviewBtn'),
    markMasteredBtn: document.getElementById('markMasteredBtn'),

    // Question Displays
    textModeContainer: document.getElementById('textModeContainer'),
    imageModeContainer: document.getElementById('imageModeContainer'),
    qPromptText: document.getElementById('qPromptText'),
    cliOutputContainer: document.getElementById('cliOutputContainer'),
    cliCodeBlock: document.getElementById('cliCodeBlock'),
    copyCliBtn: document.getElementById('copyCliBtn'),
    topologyContainer: document.getElementById('topologyContainer'),
    topologyFrame: document.getElementById('topologyFrame'),
    optionsList: document.getElementById('optionsList'),

    // Flashcard Action
    flashcardActionContainer: document.getElementById('flashcardActionContainer'),
    revealFlashcardBtn: document.getElementById('revealFlashcardBtn'),

    // Image Mode
    imgPartTabs: document.getElementById('imgPartTabs'),
    imgBox: document.getElementById('imgBox'),
    qOriginalImage: document.getElementById('qOriginalImage'),
    answerMask: document.getElementById('answerMask'),
    revealMaskBtn: document.getElementById('revealMaskBtn'),
    toggleMaskBtn: document.getElementById('toggleMaskBtn'),
    imgOptionsList: document.getElementById('imgOptionsList'),

    // Explanation & Notes
    explanationPanel: document.getElementById('explanationPanel'),
    expResultBadge: document.getElementById('expResultBadge'),
    expResultText: document.getElementById('expResultText'),
    expContentText: document.getElementById('expContentText'),
    notesSection: document.querySelector('.notes-section'),
    questionNotes: document.getElementById('questionNotes'),
    notesStatus: document.getElementById('notesStatus'),

    // Navigation Buttons
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitCheckBtn: document.getElementById('submitCheckBtn'),
    randomBtn: document.getElementById('randomBtn'),

    // Sidebar
    sidebar: document.getElementById('sidebar'),
    closeSidebarBtn: document.getElementById('closeSidebarBtn'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    filterPills: document.querySelectorAll('.filter-pill'),
    questionGrid: document.getElementById('questionGrid'),
    resetAllDataBtn: document.getElementById('resetAllDataBtn'),
    exportProgressBtn: document.getElementById('exportProgressBtn'),
    importProgressBtn: document.getElementById('importProgressBtn'),
    importFileInput: document.getElementById('importFileInput'),

    // Modals
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    closeLightboxBtn: document.getElementById('closeLightboxBtn'),
    lightboxBackdrop: document.getElementById('lightboxBackdrop'),
    shortcutsModal: document.getElementById('shortcutsModal'),
    closeShortcutsBtn: document.getElementById('closeShortcutsBtn'),
    shortcutsBackdrop: document.getElementById('shortcutsBackdrop'),

    // Mock Result Modal
    mockResultModal: document.getElementById('mockResultModal'),
    closeMockResultBtn: document.getElementById('closeMockResultBtn'),
    mockResultBackdrop: document.getElementById('mockResultBackdrop'),
    mockScoreVal: document.getElementById('mockScoreVal'),
    mockVerdict: document.getElementById('mockVerdict'),
    mockCorrectCount: document.getElementById('mockCorrectCount'),
    mockWrongCount: document.getElementById('mockWrongCount'),
    mockTimeTaken: document.getElementById('mockTimeTaken'),
    mockQuestionsBreakdown: document.getElementById('mockQuestionsBreakdown'),
    retakeMockBtn: document.getElementById('retakeMockBtn'),
    reviewMockWrongBtn: document.getElementById('reviewMockWrongBtn')
  };

  // --- Initialize Application ---
  async function init() {
    loadProgress();
    loadSettings();
    setupTheme();
    setupEventListeners();
    await loadQuestions();
    
    // Default to practice mode
    switchStudyMode(studyMode, false);
    renderQuestion(currentIndex);
    renderMatrix();
    updateStats();
  }

  // --- Load Local Storage ---
  function loadProgress() {
    try {
      const saved = localStorage.getItem('ccna_study_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        userProgress.mastered = new Set(parsed.mastered || []);
        userProgress.review = new Set(parsed.review || []);
        userProgress.answers = parsed.answers || {};
        userProgress.notes = parsed.notes || {};
      }
      const lastIndex = localStorage.getItem('ccna_last_index');
      if (lastIndex !== null) {
        currentIndex = parseInt(lastIndex, 10) || 0;
      }
    } catch (e) {
      console.warn('Could not read localStorage:', e);
    }
  }

  function saveProgress() {
    try {
      const data = {
        mastered: Array.from(userProgress.mastered),
        review: Array.from(userProgress.review),
        answers: userProgress.answers,
        notes: userProgress.notes
      };
      localStorage.setItem('ccna_study_progress', JSON.stringify(data));
      localStorage.setItem('ccna_last_index', currentIndex);
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
    updateStats();
  }

  function loadSettings() {
    isShuffleEnabled = localStorage.getItem('ccna_shuffle_options') === 'true';
    updateShuffleButtonUI();
  }

  // --- Theme Management ---
  function setupTheme() {
    const savedTheme = localStorage.getItem('ccna_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    el.themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

    el.themeToggleBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ccna_theme', next);
      el.themeIcon.textContent = next === 'dark' ? '🌙' : '☀️';
    });
  }

  // --- Data Loading ---
  async function loadQuestions() {
    try {
      const res = await fetch('data/questions.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      questions = await res.json();
    } catch (err) {
      console.error('Failed to fetch data/questions.json, using fallback:', err);
      questions = [];
      const multi = new Set([11, 12, 25, 57, 58, 74, 83, 114, 129, 143, 148, 171, 175, 177, 190, 192, 213]);
      for (let i = 1; i <= 225; i++) {
        const isM = multi.has(i);
        questions.push({
          id: i,
          title: `Câu ${i} / 225`,
          isMultiPart: isM,
          images: isM ? [`images/cau-${i}-a.png`, `images/cau-${i}-b.png`] : [`images/cau-${i}.png`],
          hasText: false,
          question: '',
          options: [],
          answer: [],
          explanation: '',
          category: 'CCNA 200-301'
        });
      }
    }
    if (currentIndex >= questions.length) currentIndex = 0;
  }

  // --- Active Question Pool Management ---
  function getActiveQuestionPool() {
    if (studyMode === 'mock') {
      return mockState.pool;
    }
    if (studyMode === 'review') {
      const pool = [];
      questions.forEach((q, idx) => {
        if (userProgress.review.has(q.id)) pool.push(idx);
      });
      return pool;
    }
    // Practice & Flashcard: all 225 questions
    return Array.from({ length: questions.length }, (_, i) => i);
  }

  // --- Shuffle Options Algorithm ---
  function getEffectiveQuestion(rawQ) {
    if (!rawQ) return null;
    if (!isShuffleEnabled || !rawQ.options || rawQ.options.length <= 1) {
      return rawQ;
    }

    if (shuffledCache[rawQ.id]) {
      return shuffledCache[rawQ.id];
    }

    // Clone and Fisher-Yates shuffle
    const clonedOpts = rawQ.options.map(opt => ({ ...opt, origKey: opt.key }));
    for (let i = clonedOpts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clonedOpts[i], clonedOpts[j]] = [clonedOpts[j], clonedOpts[i]];
    }

    const keyLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const keyMap = {}; // origKey -> newKey
    clonedOpts.forEach((opt, idx) => {
      const newKey = keyLabels[idx] || String.fromCharCode(65 + idx);
      keyMap[opt.origKey] = newKey;
      opt.key = newKey;
    });

    const newAnswer = (rawQ.answer || []).map(k => keyMap[k] || k).sort();

    const effective = {
      ...rawQ,
      options: clonedOpts,
      answer: newAnswer,
      isShuffled: true,
      origAnswer: rawQ.answer
    };

    shuffledCache[rawQ.id] = effective;
    return effective;
  }

  function updateShuffleButtonUI() {
    if (!el.toggleShuffleBtn) return;
    el.toggleShuffleBtn.classList.toggle('active', isShuffleEnabled);
    if (el.shuffleStatusText) {
      el.shuffleStatusText.textContent = isShuffleEnabled ? 'Đảo đáp án: Bật' : 'Đảo đáp án';
    }
  }

  // --- Render Question ---
  function renderQuestion(index) {
    if (!questions || !questions.length) return;

    const rawQ = questions[index];
    if (!rawQ) return;
    currentIndex = index;
    localStorage.setItem('ccna_last_index', index);

    const q = getEffectiveQuestion(rawQ);

    // Reset selection & reveal states
    selectedOptions.clear();
    isAnswerRevealed = false;
    activeImgPart = 0;

    // Check mode specifics
    if (studyMode === 'mock') {
      const savedMockAns = mockState.answers[q.id];
      if (savedMockAns) {
        savedMockAns.forEach(k => selectedOptions.add(k));
      }
      isAnswerRevealed = mockState.isFinished;
    } else {
      const prevAnswer = userProgress.answers[q.id];
      if (prevAnswer) {
        prevAnswer.keys.forEach(k => selectedOptions.add(k));
        isAnswerRevealed = true;
      }
    }

    // Meta Badges
    const pool = getActiveQuestionPool();
    const poolIndex = pool.indexOf(index);
    if (studyMode === 'mock') {
      el.qNumberBadge.textContent = `Đề thi: Câu ${poolIndex + 1} / 30 (Gốc #${q.id})`;
    } else if (studyMode === 'review') {
      el.qNumberBadge.textContent = `Phòng Ôn: Câu ${poolIndex + 1} / ${pool.length} (Gốc #${q.id})`;
    } else {
      el.qNumberBadge.textContent = `Câu ${q.id} / ${questions.length || 225}`;
    }

    el.qCategoryBadge.textContent = q.category || 'CCNA 200-301';
    el.qTypeBadge.textContent = q.type === 'multiple' ? 'Chọn nhiều (Multiple Choice)' : 'Chọn một (Single Choice)';

    // Tags
    el.markMasteredBtn.classList.toggle('active', userProgress.mastered.has(q.id));
    el.markReviewBtn.classList.toggle('active', userProgress.review.has(q.id));

    // Flashcard action button visibility
    if (studyMode === 'flashcard') {
      el.flashcardActionContainer.classList.toggle('hidden', isAnswerRevealed);
    } else {
      el.flashcardActionContainer.classList.add('hidden');
    }

    // View Mode Handling
    if (currentView === 'image') {
      el.viewTextBtn.classList.remove('active');
      el.viewImgBtn.classList.add('active');
      el.textModeContainer.classList.add('hidden');
      el.imageModeContainer.classList.remove('hidden');
      renderImageMode(q);
    } else {
      currentView = 'text';
      el.viewTextBtn.classList.add('active');
      el.viewImgBtn.classList.remove('active');
      el.textModeContainer.classList.remove('hidden');
      el.imageModeContainer.classList.add('hidden');
      renderTextMode(q);
      renderImageMode(q); // Preload image view
    }

    // Notes
    el.questionNotes.value = userProgress.notes[q.id] || '';
    el.notesStatus.textContent = 'Đã lưu';

    // Submit / Check Button appearance
    if (studyMode === 'mock' || studyMode === 'flashcard') {
      el.submitCheckBtn.style.display = 'none';
    } else {
      el.submitCheckBtn.style.display = 'inline-flex';
    }

    // Explanation panel
    updateExplanationPanel(q);

    // Update banner text if in Review or Mock mode
    updateModeBanners();

    // Matrix grid highlight
    highlightCurrentGridCell();
  }

  // --- Exhibit / Diagram Helper ---
  function hasExhibit(q) {
    if (q.hasExhibit !== undefined) return q.hasExhibit;
    if (q.isMultiPart && q.id !== 143) return true;
    if (!q.images || !q.images.length) return false;
    const t = (q.question || '').toLowerCase();
    const phrases = [
      'refer to the exhibit', 'in this output', 'shown in the exhibit',
      'json schema', 'drag and drop', 'in this table', 'following topology',
      'in the graphic', 'following graphic', 'following exhibit'
    ];
    return phrases.some(p => t.includes(p));
  }

  // --- Render Text Mode ---
  function renderTextMode(q) {
    el.qPromptText.innerHTML = q.question || 'Xem đề bài trong ảnh gốc.';

    // CLI Block
    if (q.cliOutput) {
      el.cliOutputContainer.classList.remove('hidden');
      el.cliCodeBlock.textContent = q.cliOutput;
    } else {
      el.cliOutputContainer.classList.add('hidden');
    }

    // Exhibit / Vector Topology
    const headerTitle = el.topologyContainer.querySelector('.topology-header span');
    if (q.id === 11) {
      el.topologyContainer.classList.remove('hidden');
      if (headerTitle) headerTitle.textContent = '📐 Sơ đồ mạng Vector Q11 — Longest Prefix Match (Nhấp để phóng to)';
      el.topologyFrame.innerHTML = `<img src="images/topology_q11.svg" alt="Topology Q11" class="topology-exhibit-img">`;
      el.topologyFrame.onclick = () => openLightbox('images/topology_q11.svg', 'Sơ đồ mạng Vector Q11 — Longest Prefix Match');
    } else if (hasExhibit(q)) {
      el.topologyContainer.classList.remove('hidden');
      if (headerTitle) headerTitle.textContent = '📷 Sơ đồ / Exhibit đính kèm đề bài (Nhấp vào ảnh để phóng to)';

      const imgSrc = (q.images && q.images.length) ? q.images[0] : '';
      const isMulti = q.isMultiPart && q.images.length > 1;

      el.topologyFrame.innerHTML = `
        <div class="topology-box ${isAnswerRevealed ? 'revealed' : ''}">
          <img src="${imgSrc}" alt="Exhibit ${q.id}" class="topology-exhibit-img">
          ${!isMulti && !isAnswerRevealed ? `
            <div class="topology-answer-mask">
              <span>🔒 Hộp đáp án ảnh gốc đã được che mờ (Kiểm tra đáp án để mở)</span>
            </div>
          ` : ''}
        </div>
      `;

      el.topologyFrame.onclick = (e) => {
        if (e.target.closest('.topology-answer-mask')) {
          const mask = el.topologyFrame.querySelector('.topology-answer-mask');
          if (mask) mask.classList.add('hidden');
          return;
        }
        openLightbox(imgSrc, `Câu ${q.id} — Sơ đồ / Exhibit đính kèm`);
      };
    } else {
      el.topologyContainer.classList.add('hidden');
    }

    // Options List
    el.optionsList.innerHTML = '';

    // If Flashcard mode and NOT revealed: conceal options to allow pure mental recall
    if (studyMode === 'flashcard' && !isAnswerRevealed) {
      el.optionsList.style.display = 'none';
      return;
    }
    el.optionsList.style.display = 'flex';

    (q.options || []).forEach(opt => {
      const card = document.createElement('div');
      card.className = 'option-card';
      card.dataset.key = opt.key;

      if (selectedOptions.has(opt.key)) {
        card.classList.add('selected');
      }

      if (isAnswerRevealed) {
        if ((q.answer || []).includes(opt.key)) {
          card.classList.add('correct');
        } else if (selectedOptions.has(opt.key)) {
          card.classList.add('wrong');
        }
      }

      card.innerHTML = `
        <span class="option-badge">${opt.key}</span>
        <span class="option-text">${opt.text}</span>
      `;

      card.addEventListener('click', () => handleOptionClick(opt.key, q));
      el.optionsList.appendChild(card);
    });
  }

  // --- Render Image Mode ---
  function renderImageMode(q) {
    // Multi-part tabs
    if (q.isMultiPart && q.images.length > 1) {
      el.imgPartTabs.classList.remove('hidden');
      el.imgPartTabs.innerHTML = '';
      q.images.forEach((img, idx) => {
        const btn = document.createElement('button');
        btn.className = `part-tab-btn ${idx === activeImgPart ? 'active' : ''}`;
        btn.textContent = idx === 0 ? 'Phần 1: Sơ đồ / Exhibit' : 'Phần 2: Đề bài & Đáp án';
        btn.addEventListener('click', () => {
          activeImgPart = idx;
          el.imgPartTabs.querySelectorAll('.part-tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
          el.qOriginalImage.src = q.images[idx];
        });
        el.imgPartTabs.appendChild(btn);
      });
    } else {
      el.imgPartTabs.classList.add('hidden');
    }

    // Set current image
    const imgSrc = q.images[activeImgPart] || q.images[0];
    el.qOriginalImage.src = imgSrc;
    el.imgBox.onclick = (e) => {
      if (e.target.closest('#answerMask')) return;
      openLightbox(el.qOriginalImage.src, `${q.title} (Ảnh chụp gốc phóng to)`);
    };

    // Answer Mask
    if (isAnswerRevealed) {
      el.answerMask.classList.add('revealed');
    } else {
      el.answerMask.classList.remove('revealed');
    }

    // Render option buttons for Image Mode
    el.imgOptionsList.innerHTML = '';

    if (studyMode === 'flashcard' && !isAnswerRevealed) {
      el.imgOptionsList.style.display = 'none';
      return;
    }
    el.imgOptionsList.style.display = 'grid';

    const availableOptions = (q.options && q.options.length) 
      ? q.options 
      : [{key: 'A', text: ''}, {key: 'B', text: ''}, {key: 'C', text: ''}, {key: 'D', text: ''}];

    availableOptions.forEach(opt => {
      const card = document.createElement('div');
      card.className = 'option-card';
      card.dataset.key = opt.key;

      if (selectedOptions.has(opt.key)) card.classList.add('selected');
      if (isAnswerRevealed && q.answer && q.answer.length) {
        if (q.answer.includes(opt.key)) card.classList.add('correct');
        else if (selectedOptions.has(opt.key)) card.classList.add('wrong');
      }

      card.innerHTML = `
        <span class="option-badge">${opt.key}</span>
        <span class="option-text">${opt.text ? opt.text : 'Phương án ' + opt.key}</span>
      `;
      card.addEventListener('click', () => handleOptionClick(opt.key, q));
      el.imgOptionsList.appendChild(card);
    });
  }

  // --- Option Click Handler ---
  function handleOptionClick(key, q) {
    if (studyMode === 'practice' && isAnswerRevealed) return;

    if (studyMode === 'mock') {
      if (mockState.isFinished) return;
      if (q.type === 'multiple') {
        if (selectedOptions.has(key)) selectedOptions.delete(key);
        else selectedOptions.add(key);
      } else {
        selectedOptions.clear();
        selectedOptions.add(key);
      }
      mockState.answers[q.id] = Array.from(selectedOptions);
      if (currentView === 'text') renderTextMode(q);
      else renderImageMode(q);
      highlightCurrentGridCell();
      return;
    }

    if (q.type === 'multiple') {
      if (selectedOptions.has(key)) selectedOptions.delete(key);
      else selectedOptions.add(key);
    } else {
      selectedOptions.clear();
      selectedOptions.add(key);
    }

    if (currentView === 'text') renderTextMode(q);
    else renderImageMode(q);
  }

  // --- Submit / Reveal Answer ---
  function checkOrRevealAnswer() {
    if (studyMode === 'mock') return;

    const rawQ = questions[currentIndex];
    const q = getEffectiveQuestion(rawQ);
    isAnswerRevealed = true;

    // Determine correctness
    const correctAnswers = q.answer || [];
    let isCorrect = false;
    if (correctAnswers.length > 0) {
      const userSelected = Array.from(selectedOptions).sort();
      const expected = [...correctAnswers].sort();
      isCorrect = JSON.stringify(userSelected) === JSON.stringify(expected);
      userProgress.answers[q.id] = { isCorrect, keys: userSelected };

      // Auto update status
      if (isCorrect) {
        userProgress.mastered.add(q.id);
        userProgress.review.delete(q.id);
      } else {
        userProgress.review.add(q.id);
        userProgress.mastered.delete(q.id);
      }
      saveProgress();
    }

    // Reveal UI
    el.answerMask.classList.add('revealed');
    if (studyMode === 'flashcard') {
      el.flashcardActionContainer.classList.add('hidden');
    }

    if (currentView === 'text') renderTextMode(q);
    else renderImageMode(q);
    updateExplanationPanel(q);
    highlightCurrentGridCell();
  }

  function updateExplanationPanel(q) {
    if (!isAnswerRevealed || studyMode === 'mock') {
      el.explanationPanel.classList.add('hidden');
      return;
    }

    el.explanationPanel.classList.remove('hidden');
    const ans = (q.answer && q.answer.length) ? q.answer.join(', ') : 'Xem trong ảnh gốc';
    el.expResultText.textContent = `Đáp án Đúng: ${ans}`;

    let expHtml = '';
    if (q.explanation) {
      expHtml = q.explanation.replace(/\n/g, '<br>');
    } else {
      expHtml = `<em>Đối chiếu đáp án chi tiết tại hộp "Answer: ${ans}" ở chân ảnh gốc bên trên.</em>`;
    }

    if (q.isShuffled) {
      expHtml += `<br><br><small style="color:var(--text-muted)">* Ghi chú: Chế độ Đảo đáp án đang bật. Thứ tự các phương án hiển thị trên màn hình đã được xáo trộn ngẫu nhiên.</small>`;
    }

    el.expContentText.innerHTML = expHtml;
  }

  // --- Switch Study Mode ---
  function switchStudyMode(newMode, shouldRender = true) {
    studyMode = newMode;

    // Update Header Buttons
    el.modePracticeBtn.classList.toggle('active', newMode === 'practice');
    el.modeFlashcardBtn.classList.toggle('active', newMode === 'flashcard');
    el.modeReviewBtn.classList.toggle('active', newMode === 'review');
    el.modeMockBtn.classList.toggle('active', newMode === 'mock');

    // UI visibility
    el.reviewModeBanner.classList.toggle('hidden', newMode !== 'review');
    el.mockExamBar.classList.toggle('hidden', newMode !== 'mock');

    if (newMode === 'review') {
      const reviewPool = getActiveQuestionPool();
      if (reviewPool.length === 0) {
        showEmptyReviewState(true);
        return;
      } else {
        showEmptyReviewState(false);
        if (!reviewPool.includes(currentIndex)) {
          currentIndex = reviewPool[0];
        }
      }
    } else {
      showEmptyReviewState(false);
    }

    if (newMode === 'mock') {
      if (!mockState.isActive) {
        startMockExam();
        return;
      }
    }

    if (shouldRender) {
      const pool = getActiveQuestionPool();
      if (!pool.includes(currentIndex) && pool.length > 0) {
        currentIndex = pool[0];
      }
      renderQuestion(currentIndex);
      renderMatrix();
    }
  }

  function showEmptyReviewState(show) {
    if (!el.emptyReviewContainer) return;
    el.emptyReviewContainer.classList.toggle('hidden', !show);
    const cardBody = document.querySelector('.question-card .q-body');
    const cardFooter = document.querySelector('.question-card .q-footer');
    if (cardBody) cardBody.style.display = show ? 'none' : 'block';
    if (cardFooter) cardFooter.style.display = show ? 'none' : 'flex';
  }

  function updateModeBanners() {
    if (studyMode === 'review') {
      const pool = getActiveQuestionPool();
      const pos = pool.indexOf(currentIndex) + 1;
      el.reviewProgressText.textContent = `Đang ôn câu ${pos} / ${pool.length} câu cần ôn`;
    } else if (studyMode === 'mock') {
      const pool = mockState.pool;
      const pos = pool.indexOf(currentIndex) + 1;
      el.mockQuestionProgress.textContent = `Câu ${pos} / 30`;
    }
  }

  // --- Mock Exam Engine ---
  function startMockExam() {
    // Generate 30 random questions without replacement
    const all = Array.from({ length: questions.length }, (_, i) => i);
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }

    mockState.pool = all.slice(0, 30);
    mockState.answers = {};
    mockState.timeRemaining = 45 * 60; // 45 minutes
    mockState.isActive = true;
    mockState.isFinished = false;
    mockState.startedAt = Date.now();

    clearInterval(mockState.timerId);
    mockState.timerId = setInterval(tickMockTimer, 1000);
    renderMockTimer();

    currentIndex = mockState.pool[0];
    renderQuestion(currentIndex);
    renderMatrix();
  }

  function tickMockTimer() {
    if (mockState.timeRemaining > 0) {
      mockState.timeRemaining--;
      renderMockTimer();
    } else {
      clearInterval(mockState.timerId);
      finishMockExam();
    }
  }

  function renderMockTimer() {
    const mins = Math.floor(mockState.timeRemaining / 60);
    const secs = mockState.timeRemaining % 60;
    const text = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    el.mockTimerDisplay.textContent = text;
    el.mockTimerDisplay.classList.toggle('warning', mockState.timeRemaining <= 300);
  }

  function finishMockExam() {
    clearInterval(mockState.timerId);
    mockState.isFinished = true;

    // Grade Exam
    let correctCount = 0;
    const breakdown = [];

    mockState.pool.forEach((qIdx, orderIdx) => {
      const rawQ = questions[qIdx];
      const q = getEffectiveQuestion(rawQ);
      const userSelected = (mockState.answers[q.id] || []).sort();
      const expected = (q.answer || []).sort();
      const isAnswered = userSelected.length > 0;
      const isCorrect = isAnswered && (JSON.stringify(userSelected) === JSON.stringify(expected));

      if (isCorrect) correctCount++;

      breakdown.push({
        order: orderIdx + 1,
        qid: q.id,
        qIndex: qIdx,
        isAnswered,
        isCorrect
      });
    });

    // CCNA Scaled Score: 300 - 1000
    const scaledScore = 300 + Math.round((correctCount / 30) * 700);
    const isPass = scaledScore >= 825; // 825 / 1000 standard CCNA pass mark

    // Format time taken
    const elapsedSecs = (45 * 60) - mockState.timeRemaining;
    const elapsedMins = Math.floor(elapsedSecs / 60);
    const elapsedRemainder = elapsedSecs % 60;
    const timeTakenStr = `${String(elapsedMins).padStart(2, '0')}:${String(elapsedRemainder).padStart(2, '0')}`;

    // Update Result Modal
    el.mockScoreVal.textContent = scaledScore;
    el.mockVerdict.textContent = isPass ? 'ĐẠT (PASS) 🎉' : 'CHƯA ĐẠT (FAIL) ⚠️';
    el.mockVerdict.className = isPass ? 'score-verdict pass' : 'score-verdict fail';
    el.mockCorrectCount.textContent = correctCount;
    el.mockWrongCount.textContent = 30 - correctCount;
    el.mockTimeTaken.textContent = timeTakenStr;

    // Build breakdown grid
    el.mockQuestionsBreakdown.innerHTML = '';
    breakdown.forEach(item => {
      const btn = document.createElement('div');
      btn.className = `mock-breakdown-item ${item.isCorrect ? 'correct' : (item.isAnswered ? 'wrong' : 'unanswered')}`;
      btn.textContent = item.order;
      btn.title = `Câu ${item.order} (Gốc #${item.qid}): ${item.isCorrect ? 'Đúng' : (item.isAnswered ? 'Sai' : 'Chưa làm')}. Bấm để xem chi tiết!`;
      btn.addEventListener('click', () => {
        el.mockResultModal.classList.add('hidden');
        switchStudyMode('practice', false);
        renderQuestion(item.qIndex);
        checkOrRevealAnswer();
      });
      el.mockQuestionsBreakdown.appendChild(btn);
    });

    el.mockResultModal.classList.remove('hidden');
  }

  // --- Matrix Grid ---
  function renderMatrix() {
    el.questionGrid.innerHTML = '';
    const pool = getActiveQuestionPool();

    pool.forEach(qIdx => {
      const q = questions[qIdx];
      if (!q) return;
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.textContent = q.id;
      cell.dataset.qid = q.id;
      cell.dataset.index = qIdx;

      updateCellStatus(cell, q.id);

      cell.addEventListener('click', () => {
        renderQuestion(qIdx);
        if (window.innerWidth <= 900) {
          el.sidebar.classList.remove('mobile-open');
        }
      });

      el.questionGrid.appendChild(cell);
    });

    highlightCurrentGridCell();
  }

  function updateCellStatus(cell, qid) {
    cell.classList.remove('mastered', 'review', 'wrong', 'mock-answered');
    if (studyMode === 'mock') {
      if (mockState.answers[qid] && mockState.answers[qid].length > 0) {
        cell.classList.add('mock-answered');
      }
      return;
    }

    if (userProgress.mastered.has(qid)) {
      cell.classList.add('mastered');
    } else if (userProgress.review.has(qid)) {
      cell.classList.add('review');
    } else if (userProgress.answers[qid] && !userProgress.answers[qid].isCorrect) {
      cell.classList.add('wrong');
    }
  }

  function highlightCurrentGridCell() {
    const curQid = questions[currentIndex] ? questions[currentIndex].id : (currentIndex + 1);
    el.questionGrid.querySelectorAll('.grid-cell').forEach(cell => {
      const qid = parseInt(cell.dataset.qid, 10);
      cell.classList.toggle('current', qid === curQid);
      updateCellStatus(cell, qid);
    });
  }

  function updateStats() {
    const total = questions.length || 225;
    const mastered = userProgress.mastered.size;
    const review = userProgress.review.size;
    const pct = Math.round((mastered / total) * 100);

    el.statMastered.textContent = mastered;
    el.statReview.textContent = review;
    el.statPercent.textContent = `${pct}%`;
    if (el.reviewCountBadge) {
      el.reviewCountBadge.textContent = review;
    }
  }

  // --- Search & Filter ---
  function applyFilterAndSearch() {
    const query = el.searchInput.value.trim().toLowerCase();
    const cells = el.questionGrid.querySelectorAll('.grid-cell');

    cells.forEach(cell => {
      const qid = parseInt(cell.dataset.qid, 10);
      const q = questions[qid - 1];

      let matchFilter = true;
      if (activeFilter === 'mastered') matchFilter = userProgress.mastered.has(qid);
      else if (activeFilter === 'review') matchFilter = userProgress.review.has(qid);
      else if (activeFilter === 'unanswered') matchFilter = !userProgress.answers[qid];

      let matchSearch = true;
      if (query) {
        const idMatch = String(qid).includes(query);
        const textMatch = q && q.question && q.question.toLowerCase().includes(query);
        const catMatch = q && q.category && q.category.toLowerCase().includes(query);
        matchSearch = idMatch || textMatch || catMatch;
      }

      cell.style.display = (matchFilter && matchSearch) ? 'flex' : 'none';
    });
  }

  // --- Navigation Helpers (Within Active Pool) ---
  function navigateNext() {
    const pool = getActiveQuestionPool();
    if (!pool.length) return;
    const poolIdx = pool.indexOf(currentIndex);
    if (poolIdx < pool.length - 1) {
      renderQuestion(pool[poolIdx + 1]);
    } else {
      renderQuestion(pool[0]); // Wrap around
    }
  }

  function navigatePrev() {
    const pool = getActiveQuestionPool();
    if (!pool.length) return;
    const poolIdx = pool.indexOf(currentIndex);
    if (poolIdx > 0) {
      renderQuestion(pool[poolIdx - 1]);
    } else {
      renderQuestion(pool[pool.length - 1]);
    }
  }

  function navigateRandom() {
    const pool = getActiveQuestionPool();
    if (!pool.length) return;
    const rand = Math.floor(Math.random() * pool.length);
    renderQuestion(pool[rand]);
  }

  // --- Lightbox ---
  function openLightbox(src, caption) {
    el.lightboxImg.src = src;
    el.lightboxCaption.textContent = caption || '';
    el.lightboxModal.classList.remove('hidden');
  }

  function closeLightbox() {
    el.lightboxModal.classList.add('hidden');
  }

  // --- Event Listeners ---
  function setupEventListeners() {
    // Brand Logo Click: Return to question 1 and reload
    const brandLogo = document.getElementById('brandLogo');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => {
        localStorage.setItem('ccna_last_index', 0);
      });
    }

    // Mode Switching
    el.modePracticeBtn.addEventListener('click', () => switchStudyMode('practice'));
    el.modeFlashcardBtn.addEventListener('click', () => switchStudyMode('flashcard'));
    el.modeReviewBtn.addEventListener('click', () => switchStudyMode('review'));
    el.modeMockBtn.addEventListener('click', () => switchStudyMode('mock'));

    // Top Bar Shuffle Toggle
    el.toggleShuffleBtn.addEventListener('click', () => {
      isShuffleEnabled = !isShuffleEnabled;
      localStorage.setItem('ccna_shuffle_options', isShuffleEnabled);
      shuffledCache = {};
      updateShuffleButtonUI();
      renderQuestion(currentIndex);
    });

    // Review Room Exit & Empty State Back
    el.exitReviewBtn.addEventListener('click', () => switchStudyMode('practice'));
    el.emptyReviewBackBtn.addEventListener('click', () => switchStudyMode('practice'));

    // Mock Exam Actions
    el.submitMockBtn.addEventListener('click', () => {
      const unanswered = mockState.pool.filter(idx => {
        const qid = questions[idx].id;
        return !mockState.answers[qid] || mockState.answers[qid].length === 0;
      }).length;

      let msg = 'Bạn có chắc chắn muốn nộp bài để chấm điểm không?';
      if (unanswered > 0) {
        msg = `Bạn còn ${unanswered} câu chưa làm. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`;
      }
      if (confirm(msg)) {
        finishMockExam();
      }
    });

    el.quitMockBtn.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn dừng bài thi thử này không?')) {
        clearInterval(mockState.timerId);
        mockState.isActive = false;
        switchStudyMode('practice');
      }
    });

    // Mock Modal Buttons
    el.closeMockResultBtn.addEventListener('click', () => el.mockResultModal.classList.add('hidden'));
    el.mockResultBackdrop.addEventListener('click', () => el.mockResultModal.classList.add('hidden'));
    el.retakeMockBtn.addEventListener('click', () => {
      el.mockResultModal.classList.add('hidden');
      startMockExam();
    });
    el.reviewMockWrongBtn.addEventListener('click', () => {
      let addedCount = 0;
      mockState.pool.forEach(qIdx => {
        const rawQ = questions[qIdx];
        const q = getEffectiveQuestion(rawQ);
        const userSelected = (mockState.answers[q.id] || []).sort();
        const expected = (q.answer || []).sort();
        const isCorrect = JSON.stringify(userSelected) === JSON.stringify(expected);
        if (!isCorrect) {
          userProgress.review.add(q.id);
          userProgress.mastered.delete(q.id);
          addedCount++;
        }
      });
      saveProgress();
      el.mockResultModal.classList.add('hidden');
      switchStudyMode('review');
      alert(`Đã đưa ${addedCount} câu làm sai vào phòng Ôn Tập!`);
    });

    // View Switching (Text vs Image)
    el.viewTextBtn.addEventListener('click', () => {
      currentView = 'text';
      renderQuestion(currentIndex);
    });
    el.viewImgBtn.addEventListener('click', () => {
      currentView = 'image';
      renderQuestion(currentIndex);
    });

    // Flashcard Reveal Button
    el.revealFlashcardBtn.addEventListener('click', checkOrRevealAnswer);

    // Mask Controls
    el.revealMaskBtn.addEventListener('click', checkOrRevealAnswer);
    el.toggleMaskBtn.addEventListener('click', () => {
      el.answerMask.classList.toggle('revealed');
    });

    // Check Button
    el.submitCheckBtn.addEventListener('click', checkOrRevealAnswer);

    // Navigation
    el.prevBtn.addEventListener('click', navigatePrev);
    el.nextBtn.addEventListener('click', navigateNext);
    el.randomBtn.addEventListener('click', navigateRandom);

    // Tag buttons
    el.markMasteredBtn.addEventListener('click', () => {
      const qid = questions[currentIndex].id;
      if (userProgress.mastered.has(qid)) {
        userProgress.mastered.delete(qid);
      } else {
        userProgress.mastered.add(qid);
        userProgress.review.delete(qid);
      }
      saveProgress();

      if (studyMode === 'review') {
        const pool = getActiveQuestionPool();
        if (pool.length === 0) {
          showEmptyReviewState(true);
        } else {
          const nextIdx = pool.find(idx => idx > currentIndex) || pool[0];
          renderQuestion(nextIdx);
        }
        renderMatrix();
      } else {
        renderQuestion(currentIndex);
        highlightCurrentGridCell();
      }
    });

    el.markReviewBtn.addEventListener('click', () => {
      const qid = questions[currentIndex].id;
      if (userProgress.review.has(qid)) {
        userProgress.review.delete(qid);
      } else {
        userProgress.review.add(qid);
        userProgress.mastered.delete(qid);
      }
      saveProgress();
      renderQuestion(currentIndex);
      highlightCurrentGridCell();
    });

    // Copy CLI
    el.copyCliBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(el.cliCodeBlock.textContent).then(() => {
        el.copyCliBtn.textContent = '✅ Đã chép!';
        setTimeout(() => el.copyCliBtn.textContent = '📋 Copy', 1500);
      });
    });

    // Notes auto-save with debounce
    let noteTimer;
    el.questionNotes.addEventListener('input', () => {
      el.notesStatus.textContent = 'Đang lưu...';
      clearTimeout(noteTimer);
      noteTimer = setTimeout(() => {
        const qid = questions[currentIndex].id;
        userProgress.notes[qid] = el.questionNotes.value;
        saveProgress();
        el.notesStatus.textContent = 'Đã lưu';
      }, 500);
    });

    // Sidebar Mobile Toggle
    el.sidebarToggleBtn.addEventListener('click', () => el.sidebar.classList.toggle('mobile-open'));
    el.closeSidebarBtn.addEventListener('click', () => el.sidebar.classList.remove('mobile-open'));

    // Search & Filter
    el.searchInput.addEventListener('input', () => {
      el.clearSearchBtn.classList.toggle('hidden', !el.searchInput.value);
      applyFilterAndSearch();
    });
    el.clearSearchBtn.addEventListener('click', () => {
      el.searchInput.value = '';
      el.clearSearchBtn.classList.add('hidden');
      applyFilterAndSearch();
    });

    el.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        el.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilter = pill.dataset.filter;
        applyFilterAndSearch();
      });
    });

    // Export & Import Progress
    el.exportProgressBtn.addEventListener('click', () => {
      const data = {
        mastered: Array.from(userProgress.mastered),
        review: Array.from(userProgress.review),
        answers: userProgress.answers,
        notes: userProgress.notes,
        exportedAt: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ccna_progress_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    el.importProgressBtn.addEventListener('click', () => el.importFileInput.click());

    el.importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const parsed = JSON.parse(evt.target.result);
          userProgress.mastered = new Set(parsed.mastered || []);
          userProgress.review = new Set(parsed.review || []);
          userProgress.answers = parsed.answers || {};
          userProgress.notes = parsed.notes || {};
          saveProgress();
          renderQuestion(currentIndex);
          renderMatrix();
          updateStats();
          alert('✅ Đã nhập tiến độ học tập thành công!');
        } catch (err) {
          alert('❌ File sao lưu không hợp lệ!');
        }
      };
      reader.readAsText(file);
      el.importFileInput.value = '';
    });

    // Reset All Data
    el.resetAllDataBtn.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử học, điểm số và ghi chú không?')) {
        localStorage.removeItem('ccna_study_progress');
        localStorage.removeItem('ccna_last_index');
        userProgress = { mastered: new Set(), review: new Set(), answers: {}, notes: {} };
        saveProgress();
        renderQuestion(currentIndex);
        renderMatrix();
        updateStats();
      }
    });

    // Lightbox Modal
    el.closeLightboxBtn.addEventListener('click', closeLightbox);
    el.lightboxBackdrop.addEventListener('click', closeLightbox);

    // Shortcuts Modal
    el.shortcutsBtn.addEventListener('click', () => el.shortcutsModal.classList.remove('hidden'));
    el.closeShortcutsBtn.addEventListener('click', () => el.shortcutsModal.classList.add('hidden'));
    el.shortcutsBackdrop.addEventListener('click', () => el.shortcutsModal.classList.add('hidden'));

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigatePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        checkOrRevealAnswer();
      } else if (e.key.toLowerCase() === 'm') {
        el.markMasteredBtn.click();
      } else if (e.key.toLowerCase() === 'b') {
        el.markReviewBtn.click();
      } else if (e.key.toLowerCase() === 'r') {
        navigateRandom();
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const keys = ['A', 'B', 'C', 'D', 'E'];
        const targetKey = keys[parseInt(e.key, 10) - 1];
        const q = getEffectiveQuestion(questions[currentIndex]);
        if (targetKey && q) handleOptionClick(targetKey, q);
      } else if (e.key === 'Escape') {
        closeLightbox();
        el.shortcutsModal.classList.add('hidden');
        el.mockResultModal.classList.add('hidden');
      }
    });
  }

  // Run App
  document.addEventListener('DOMContentLoaded', init);
})();
