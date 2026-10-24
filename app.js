/**
 * Cisco CCNA 200-301 Mastery Hub — Application Core
 * Interactive Quiz & Oral Exam Platform
 */

(() => {
  'use strict';

  // --- State ---
  let questions = [];
  let currentIndex = 0;
  let studyMode = 'quiz'; // 'quiz' | 'flashcard'
  let currentView = 'text'; // 'text' | 'image'
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

  // --- DOM Elements ---
  const el = {
    // Top Bar
    modeQuizBtn: document.getElementById('modeQuizBtn'),
    modeFlashcardBtn: document.getElementById('modeFlashcardBtn'),
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
    questionNotes: document.getElementById('questionNotes'),
    notesStatus: document.getElementById('notesStatus'),

    // Navigation
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
    shortcutsBackdrop: document.getElementById('shortcutsBackdrop')
  };

  // --- Initialize Application ---
  async function init() {
    loadProgress();
    setupTheme();
    setupEventListeners();
    await loadQuestions();
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
      // Fallback generator for 225 questions
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

  // --- Render Question ---
  function renderQuestion(index) {
    if (!questions || !questions.length) return;
    const q = questions[index];
    currentIndex = index;
    localStorage.setItem('ccna_last_index', index);

    // Reset selection & reveal states
    selectedOptions.clear();
    isAnswerRevealed = false;
    activeImgPart = 0;

    // Check if user previously answered this question
    const prevAnswer = userProgress.answers[q.id];
    if (prevAnswer) {
      prevAnswer.keys.forEach(k => selectedOptions.add(k));
      isAnswerRevealed = true;
    }

    // Meta Badges
    el.qNumberBadge.textContent = `Câu ${q.id} / 225`;
    el.qCategoryBadge.textContent = q.category || 'CCNA 200-301';
    el.qTypeBadge.textContent = q.type === 'multiple' ? 'Chọn nhiều (Choose Multiple)' : 'Chọn một (Single Choice)';

    // Tags
    el.markMasteredBtn.classList.toggle('active', userProgress.mastered.has(q.id));
    el.markReviewBtn.classList.toggle('active', userProgress.review.has(q.id));

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
      renderImageMode(q);
    }

    // Notes
    el.questionNotes.value = userProgress.notes[q.id] || '';
    el.notesStatus.textContent = 'Đã lưu';

    // Explanation panel
    updateExplanationPanel(q);

    // Matrix grid highlight
    highlightCurrentGridCell();
  }

  // --- Check if Question Requires Exhibit / Diagram ---
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
              <span>🔒 Hộp đáp án ảnh gốc đã được che mờ (Bấm Kiểm tra đáp án để mở)</span>
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
    if (studyMode === 'quiz' && isAnswerRevealed) return; // Locked once answered in quiz mode

    if (q.type === 'multiple') {
      if (selectedOptions.has(key)) selectedOptions.delete(key);
      else selectedOptions.add(key);
    } else {
      selectedOptions.clear();
      selectedOptions.add(key);
    }

    // Rerender options
    if (currentView === 'text') renderTextMode(q);
    else renderImageMode(q);
  }

  // --- Submit / Reveal Answer ---
  function checkOrRevealAnswer() {
    const q = questions[currentIndex];
    isAnswerRevealed = true;

    // Determine correctness if answer is defined
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
    if (currentView === 'text') renderTextMode(q);
    else renderImageMode(q);
    updateExplanationPanel(q);
    highlightCurrentGridCell();
  }

  function updateExplanationPanel(q) {
    if (!isAnswerRevealed) {
      el.explanationPanel.classList.add('hidden');
      return;
    }

    el.explanationPanel.classList.remove('hidden');
    const ans = (q.answer && q.answer.length) ? q.answer.join(', ') : 'Xem trong ảnh gốc';
    el.expResultText.textContent = `Đáp án: ${ans}`;

    if (q.explanation) {
      el.expContentText.innerHTML = q.explanation.replace(/\n/g, '<br>');
    } else {
      el.expContentText.innerHTML = `<em>Đối chiếu đáp án chi tiết tại hộp "Answer: ${ans}" ở chân ảnh gốc bên trên.</em>`;
    }
  }

  // --- Matrix Grid ---
  function renderMatrix() {
    el.questionGrid.innerHTML = '';
    const qCount = questions.length || 225;

    for (let i = 1; i <= qCount; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.textContent = i;
      cell.dataset.qid = i;

      updateCellStatus(cell, i);

      cell.addEventListener('click', () => {
        renderQuestion(i - 1);
        if (window.innerWidth <= 900) {
          el.sidebar.classList.remove('mobile-open');
        }
      });

      el.questionGrid.appendChild(cell);
    }
    highlightCurrentGridCell();
  }

  function updateCellStatus(cell, qid) {
    cell.classList.remove('mastered', 'review', 'wrong');
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
    // Brand Logo Click: Return to question 1 and reload/refresh
    const brandLogo = document.getElementById('brandLogo');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => {
        localStorage.setItem('ccna_last_index', 0);
      });
    }

    // Mode Switching
    el.modeQuizBtn.addEventListener('click', () => {
      studyMode = 'quiz';
      el.modeQuizBtn.classList.add('active');
      el.modeFlashcardBtn.classList.remove('active');
      renderQuestion(currentIndex);
    });

    el.modeFlashcardBtn.addEventListener('click', () => {
      studyMode = 'flashcard';
      el.modeFlashcardBtn.classList.add('active');
      el.modeQuizBtn.classList.remove('active');
      renderQuestion(currentIndex);
    });

    // View Switching
    el.viewTextBtn.addEventListener('click', () => {
      currentView = 'text';
      el.viewTextBtn.classList.add('active');
      el.viewImgBtn.classList.remove('active');
      el.textModeContainer.classList.remove('hidden');
      el.imageModeContainer.classList.add('hidden');
      renderTextMode(questions[currentIndex]);
    });

    el.viewImgBtn.addEventListener('click', () => {
      currentView = 'image';
      el.viewImgBtn.classList.add('active');
      el.viewTextBtn.classList.remove('active');
      el.imageModeContainer.classList.remove('hidden');
      el.textModeContainer.classList.add('hidden');
      renderImageMode(questions[currentIndex]);
    });

    // Mask Controls
    el.revealMaskBtn.addEventListener('click', checkOrRevealAnswer);
    el.toggleMaskBtn.addEventListener('click', () => {
      el.answerMask.classList.toggle('revealed');
    });

    // Check Button
    el.submitCheckBtn.addEventListener('click', checkOrRevealAnswer);

    // Prev / Next / Random
    el.prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) renderQuestion(currentIndex - 1);
    });

    el.nextBtn.addEventListener('click', () => {
      if (currentIndex < questions.length - 1) renderQuestion(currentIndex + 1);
    });

    el.randomBtn.addEventListener('click', () => {
      const rand = Math.floor(Math.random() * questions.length);
      renderQuestion(rand);
    });

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
      renderQuestion(currentIndex);
      highlightCurrentGridCell();
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
    el.sidebarToggleBtn.addEventListener('click', () => {
      el.sidebar.classList.toggle('mobile-open');
    });
    el.closeSidebarBtn.addEventListener('click', () => {
      el.sidebar.classList.remove('mobile-open');
    });

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

    el.importProgressBtn.addEventListener('click', () => {
      el.importFileInput.click();
    });

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
        if (currentIndex > 0) renderQuestion(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < questions.length - 1) renderQuestion(currentIndex + 1);
      } else if (e.key === ' ') {
        e.preventDefault();
        checkOrRevealAnswer();
      } else if (e.key.toLowerCase() === 'm') {
        el.markMasteredBtn.click();
      } else if (e.key.toLowerCase() === 'b') {
        el.markReviewBtn.click();
      } else if (e.key.toLowerCase() === 'r') {
        el.randomBtn.click();
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const keys = ['A', 'B', 'C', 'D', 'E'];
        const targetKey = keys[parseInt(e.key, 10) - 1];
        if (targetKey) handleOptionClick(targetKey, questions[currentIndex]);
      } else if (e.key === 'Escape') {
        closeLightbox();
        el.shortcutsModal.classList.add('hidden');
      }
    });
  }

  // Run App
  document.addEventListener('DOMContentLoaded', init);
})();