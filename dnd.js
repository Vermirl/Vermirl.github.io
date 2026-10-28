/**
 * Cisco CCNA 200-301 Drag and Drop Practice Engine (59 Questions)
 * Interactive Mouse Drag & Touch / Click-to-Place
 * Developed for Vermirl CCNA Platform
 */

(function () {
  'use strict';

  // --- State Variables ---
  const questions = window.CCNA_DND_DATA || [];
  let currentIndex = 0;
  let activeCategory = 'all';
  let filteredIndices = [];
  let selectedSourceItemId = null; // For click-to-place accessibility
  let showExplanationDirectly = false;

  // LocalStorage state schema
  const STORAGE_KEY = 'ccna_dnd_progress_v1';
  let userProgress = {
    placements: {}, // { [qId]: { [zoneId]: [itemId, ...] } }
    status: {},     // { [qId]: 'correct' | 'incorrect' | 'checked' }
    bookmarks: {},  // { [qId]: true }
    mastered: {}    // { [qId]: true }
  };

  // Load progress
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      userProgress = Object.assign(userProgress, JSON.parse(saved));
    }
  } catch (err) {
    console.error('Failed to load dnd progress:', err);
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
      updateProgressStats();
      renderSidebar();
    } catch (err) {
      console.error('Failed to save dnd progress:', err);
    }
  }

  // DOM Elements
  const DOM = {
    // Header
    statMastered: document.getElementById('statMastered'),
    statReview: document.getElementById('statReview'),
    statCorrect: document.getElementById('statCorrect'),
    statPercent: document.getElementById('statPercent'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
    shortcutsBtn: document.getElementById('shortcutsBtn'),

    // Category filter
    categoryPills: document.getElementById('categoryPills'),

    // Main workbench
    qNumberBadge: document.getElementById('qNumberBadge'),
    qCategoryBadge: document.getElementById('qCategoryBadge'),
    qTitle: document.getElementById('qTitle'),
    qPromptEn: document.getElementById('qPromptEn'),
    qPromptVi: document.getElementById('qPromptVi'),
    exhibitBtn: document.getElementById('exhibitBtn'),
    btnBookmark: document.getElementById('btnBookmark'),
    btnMaster: document.getElementById('btnMaster'),

    // DND Area
    sourcePool: document.getElementById('sourcePool'),
    dropZonesContainer: document.getElementById('dropZonesContainer'),
    selectionNotice: document.getElementById('selectionNotice'),

    // Bottom Action Bar
    btnPrev: document.getElementById('btnPrev'),
    btnNext: document.getElementById('btnNext'),
    btnReset: document.getElementById('btnReset'),
    btnCheck: document.getElementById('btnCheck'),
    btnShowAnswer: document.getElementById('btnShowAnswer'),
    btnToggleDumpImg: document.getElementById('btnToggleDumpImg'),

    // Explanation & Screenshot area
    explanationCard: document.getElementById('explanationCard'),
    explanationText: document.getElementById('explanationText'),
    dumpImageCard: document.getElementById('dumpImageCard'),
    dumpImage: document.getElementById('dumpImage'),

    // Sidebar & Modals
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    sidebarCloseBtn: document.getElementById('sidebarCloseBtn'),
    sidebarGrid: document.getElementById('sidebarGrid'),
    sidebarSearch: document.getElementById('sidebarSearch'),
    exhibitModal: document.getElementById('exhibitModal'),
    exhibitModalClose: document.getElementById('exhibitModalClose'),
    exhibitImage: document.getElementById('exhibitImage'),
    shortcutsModal: document.getElementById('shortcutsModal'),
    shortcutsModalClose: document.getElementById('shortcutsModalClose')
  };

  // --- Filtering & Navigation ---
  function computeFilteredQuestions() {
    const searchTerm = (DOM.sidebarSearch ? DOM.sidebarSearch.value.trim().toLowerCase() : '');
    filteredIndices = [];

    questions.forEach((q, idx) => {
      let matchCat = (activeCategory === 'all') ||
        (activeCategory === 'review' && userProgress.bookmarks[q.id]) ||
        (activeCategory === 'mastered' && userProgress.mastered[q.id]) ||
        (q.category === activeCategory);

      let matchSearch = true;
      if (searchTerm) {
        const text = `cau ${q.id} ${q.title} ${q.prompt_en} ${q.prompt_vi} ${q.category}`.toLowerCase();
        matchSearch = text.includes(searchTerm);
      }

      if (matchCat && matchSearch) {
        filteredIndices.push(idx);
      }
    });

    if (filteredIndices.length > 0 && !filteredIndices.includes(currentIndex)) {
      currentIndex = filteredIndices[0];
    }
  }

  // --- Render Functions ---
  function renderQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentIndex = index;
    const q = questions[currentIndex];
    selectedSourceItemId = null;
    hideSelectionNotice();

    // 1. Header & Badges
    DOM.qNumberBadge.textContent = `Câu ${q.id} / ${questions.length}`;
    DOM.qCategoryBadge.textContent = q.category;
    DOM.qTitle.textContent = q.title;
    DOM.qPromptEn.textContent = q.prompt_en;
    DOM.qPromptVi.textContent = q.prompt_vi;

    // Exhibit Button
    if (q.has_exhibit && q.exhibit_image) {
      DOM.exhibitBtn.classList.remove('hidden');
      DOM.exhibitBtn.onclick = () => openExhibitModal(q.exhibit_image, `Sơ đồ / Bảng định tuyến câu ${q.id}`);
    } else {
      DOM.exhibitBtn.classList.add('hidden');
    }

    // Bookmark / Master buttons
    updateBookmarkMasterButtons(q.id);

    // Current placements
    const currentPlacements = userProgress.placements[q.id] || {};

    // 2. Determine Placed vs Unplaced Items
    const placedItemIds = new Set();
    Object.values(currentPlacements).forEach(itemArr => {
      if (Array.isArray(itemArr)) {
        itemArr.forEach(id => placedItemIds.add(id));
      }
    });

    // 3. Render Source Pool (Left Column)
    DOM.sourcePool.innerHTML = '';
    const poolFragment = document.createDocumentFragment();

    q.source_items.forEach(item => {
      if (!placedItemIds.has(item.id)) {
        const el = createDraggableItemElement(item, false);
        poolFragment.appendChild(el);
      }
    });

    if (poolFragment.children.length === 0) {
      const emptyNotice = document.createElement('div');
      emptyNotice.className = 'pool-empty-notice';
      emptyNotice.textContent = 'Đã xếp toàn bộ mục vào các ô bên phải';
      DOM.sourcePool.appendChild(emptyNotice);
    } else {
      DOM.sourcePool.appendChild(poolFragment);
    }

    // 4. Render Drop Zones (Right Column)
    DOM.dropZonesContainer.innerHTML = '';
    const zonesFragment = document.createDocumentFragment();

    q.drop_zones.forEach(zone => {
      const zoneEl = document.createElement('div');
      zoneEl.className = 'drop-zone';
      zoneEl.dataset.zoneId = zone.id;

      // Header
      const headerEl = document.createElement('div');
      headerEl.className = 'zone-header';
      headerEl.innerHTML = `
        <span class="zone-label-vi">${escapeHtml(zone.label_vi)}</span>
        <span class="zone-label-en">${escapeHtml(zone.label_en)}</span>
      `;
      zoneEl.appendChild(headerEl);

      // Target Slots Container
      const slotsEl = document.createElement('div');
      slotsEl.className = 'zone-slots';
      slotsEl.dataset.zoneId = zone.id;

      // Event listeners for drop and click-to-place
      slotsEl.addEventListener('dragover', handleDragOver);
      slotsEl.addEventListener('dragleave', handleDragLeave);
      slotsEl.addEventListener('drop', e => handleDrop(e, zone.id));
      slotsEl.addEventListener('click', () => handleZoneClick(zone.id));

      // Populate placed items inside this zone
      const placedInThisZone = currentPlacements[zone.id] || [];
      if (placedInThisZone.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'slot-placeholder';
        placeholder.textContent = 'Kéo thả hoặc chạm mục chọn vào đây...';
        slotsEl.appendChild(placeholder);
      } else {
        placedInThisZone.forEach(itemId => {
          const itemObj = q.source_items.find(it => it.id === itemId);
          if (itemObj) {
            const placedEl = createDraggableItemElement(itemObj, true, zone.id);
            slotsEl.appendChild(placedEl);
          }
        });
      }

      zoneEl.appendChild(slotsEl);
      zonesFragment.appendChild(zoneEl);
    });

    DOM.dropZonesContainer.appendChild(zonesFragment);

    // 5. Check State Evaluation & Feedback
    const isChecked = userProgress.status[q.id] === 'correct' || userProgress.status[q.id] === 'incorrect';
    if (isChecked || showExplanationDirectly) {
      applyEvaluationStyling(q, isChecked);
      showExplanation(q);
    } else {
      hideExplanation();
      DOM.dumpImageCard.classList.add('hidden');
    }

    // Prev / Next button state
    DOM.btnPrev.disabled = (currentIndex === 0);
    DOM.btnNext.disabled = (currentIndex === questions.length - 1);

    updateProgressStats();
    renderSidebar();
  }

  // --- Element Creators & Handlers ---
  function createDraggableItemElement(item, isPlaced, zoneId = null) {
    const el = document.createElement('div');
    el.className = `draggable-item ${isPlaced ? 'is-placed' : ''}`;
    el.draggable = true;
    el.dataset.itemId = item.id;
    if (zoneId) el.dataset.zoneId = zoneId;

    el.innerHTML = `
      <div class="item-content">
        <span class="item-text-en">${escapeHtml(item.text_en)}</span>
        <span class="item-text-vi">${escapeHtml(item.text_vi)}</span>
      </div>
      ${isPlaced ? `<button class="btn-remove-item" title="Bỏ ra khỏi ô" aria-label="Remove item">✕</button>` : ''}
    `;

    // Native Drag and Drop
    el.addEventListener('dragstart', e => handleDragStart(e, item.id));
    el.addEventListener('dragend', handleDragEnd);

    // Click-to-Select / Click-to-Place
    el.addEventListener('click', e => {
      e.stopPropagation();
      if (isPlaced) {
        // Return item to source pool
        removeItemFromZone(item.id, zoneId);
      } else {
        // Select or unselect item
        toggleSelectItem(item.id, el);
      }
    });

    // Remove button inside placed item
    const removeBtn = el.querySelector('.btn-remove-item');
    if (removeBtn) {
      removeBtn.addEventListener('click', e => {
        e.stopPropagation();
        removeItemFromZone(item.id, zoneId);
      });
    }

    return el;
  }

  // --- Click to Select / Place Logic ---
  function toggleSelectItem(itemId, element) {
    if (selectedSourceItemId === itemId) {
      selectedSourceItemId = null;
      hideSelectionNotice();
      document.querySelectorAll('.draggable-item.selected').forEach(el => el.classList.remove('selected'));
    } else {
      selectedSourceItemId = itemId;
      document.querySelectorAll('.draggable-item.selected').forEach(el => el.classList.remove('selected'));
      element.classList.add('selected');
      showSelectionNotice(element.querySelector('.item-text-en').textContent);
    }
  }

  function showSelectionNotice(text) {
    DOM.selectionNotice.classList.remove('hidden');
    DOM.selectionNotice.innerHTML = `<span>👆 Đang chọn: <strong>${escapeHtml(text)}</strong>. Chạm vào ô đích bên phải để thả!</span>`;
  }

  function hideSelectionNotice() {
    DOM.selectionNotice.classList.add('hidden');
    DOM.selectionNotice.innerHTML = '';
  }

  function handleZoneClick(zoneId) {
    if (!selectedSourceItemId) return;
    placeItemIntoZone(selectedSourceItemId, zoneId);
    selectedSourceItemId = null;
    hideSelectionNotice();
  }

  // --- Drag & Drop Event Handlers ---
  let draggedItemId = null;

  function handleDragStart(e, itemId) {
    draggedItemId = itemId;
    e.dataTransfer.setData('text/plain', itemId);
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('dragging');
  }

  function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedItemId = null;
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drag-over');
  }

  function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
  }

  function handleDrop(e, zoneId) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const itemId = e.dataTransfer.getData('text/plain') || draggedItemId;
    if (itemId) {
      placeItemIntoZone(itemId, zoneId);
    }
  }

  // --- Placement Engine ---
  function placeItemIntoZone(itemId, targetZoneId) {
    const q = questions[currentIndex];
    if (!userProgress.placements[q.id]) {
      userProgress.placements[q.id] = {};
    }
    const currentPlacements = userProgress.placements[q.id];

    // Remove this item if it was already in another zone
    Object.keys(currentPlacements).forEach(zId => {
      currentPlacements[zId] = currentPlacements[zId].filter(id => id !== itemId);
    });

    // Check if target zone allows multiple items or single item
    const targetZone = q.drop_zones.find(z => z.id === targetZoneId);
    if (!targetZone) return;

    if (!currentPlacements[targetZoneId]) {
      currentPlacements[targetZoneId] = [];
    }

    // If target zone only holds 1 item, displace existing item back to pool
    if (targetZone.target_ids.length === 1 && currentPlacements[targetZoneId].length >= 1) {
      currentPlacements[targetZoneId] = [itemId];
    } else {
      if (!currentPlacements[targetZoneId].includes(itemId)) {
        currentPlacements[targetZoneId].push(itemId);
      }
    }

    // Reset checked status on change
    delete userProgress.status[q.id];
    showExplanationDirectly = false;
    saveProgress();
    renderQuestion(currentIndex);
  }

  function removeItemFromZone(itemId, zoneId) {
    const q = questions[currentIndex];
    const currentPlacements = userProgress.placements[q.id];
    if (currentPlacements && currentPlacements[zoneId]) {
      currentPlacements[zoneId] = currentPlacements[zoneId].filter(id => id !== itemId);
      delete userProgress.status[q.id];
      showExplanationDirectly = false;
      saveProgress();
      renderQuestion(currentIndex);
    }
  }

  // --- Check & Evaluation ---
  function checkAnswer() {
    const q = questions[currentIndex];
    const currentPlacements = userProgress.placements[q.id] || {};
    let allCorrect = true;
    let placedTotal = 0;

    q.drop_zones.forEach(zone => {
      const placed = currentPlacements[zone.id] || [];
      placedTotal += placed.length;
      const expected = zone.target_ids;

      // Check if placed items match expected items exactly (set comparison)
      const placedSet = new Set(placed);
      const expectedSet = new Set(expected);

      if (placedSet.size !== expectedSet.size) {
        allCorrect = false;
      } else {
        for (let item of placedSet) {
          if (!expectedSet.has(item)) {
            allCorrect = false;
            break;
          }
        }
      }
    });

    if (placedTotal === 0) {
      alert('Vui lòng kéo thả hoặc chạm để đặt các mục vào ô trước khi kiểm tra!');
      return;
    }

    userProgress.status[q.id] = allCorrect ? 'correct' : 'incorrect';
    saveProgress();
    applyEvaluationStyling(q, true);
    showExplanation(q);
  }

  function applyEvaluationStyling(q, isChecked) {
    const currentPlacements = userProgress.placements[q.id] || {};

    q.drop_zones.forEach(zone => {
      const zoneEl = DOM.dropZonesContainer.querySelector(`.drop-zone[data-zone-id="${zone.id}"]`);
      if (!zoneEl) return;

      const placed = currentPlacements[zone.id] || [];
      const expectedSet = new Set(zone.target_ids);

      zoneEl.classList.remove('zone-correct', 'zone-incorrect');

      const placedSet = new Set(placed);
      let zoneMatched = (placedSet.size === expectedSet.size);
      if (zoneMatched) {
        for (let it of placedSet) {
          if (!expectedSet.has(it)) {
            zoneMatched = false;
            break;
          }
        }
      }

      if (zoneMatched && placed.length > 0) {
        zoneEl.classList.add('zone-correct');
      } else if (placed.length > 0) {
        zoneEl.classList.add('zone-incorrect');
      }

      // Highlight each individual placed item inside the zone
      zoneEl.querySelectorAll('.draggable-item').forEach(itemEl => {
        const itemId = itemEl.dataset.itemId;
        if (expectedSet.has(itemId)) {
          itemEl.classList.add('item-correct');
          itemEl.classList.remove('item-incorrect');
        } else {
          itemEl.classList.add('item-incorrect');
          itemEl.classList.remove('item-correct');
        }
      });
    });
  }

  // --- Show Answer (Auto Fill) ---
  function showAnswer() {
    const q = questions[currentIndex];
    if (!userProgress.placements[q.id]) {
      userProgress.placements[q.id] = {};
    }

    // Auto-fill all expected answers
    q.drop_zones.forEach(zone => {
      userProgress.placements[q.id][zone.id] = [...zone.target_ids];
    });

    userProgress.status[q.id] = 'correct';
    showExplanationDirectly = true;
    saveProgress();
    renderQuestion(currentIndex);
    showExplanation(q);

    // Auto display dump image if requested
    if (q.answer_image) {
      DOM.dumpImageCard.classList.remove('hidden');
      DOM.dumpImage.src = q.answer_image;
    }
  }

  // --- Reset Question ---
  function resetQuestion() {
    const q = questions[currentIndex];
    delete userProgress.placements[q.id];
    delete userProgress.status[q.id];
    showExplanationDirectly = false;
    saveProgress();
    renderQuestion(currentIndex);
    hideExplanation();
    DOM.dumpImageCard.classList.add('hidden');
  }

  // --- Explanation Card ---
  function showExplanation(q) {
    DOM.explanationCard.classList.remove('hidden');
    DOM.explanationText.innerHTML = formatExplanation(q.explanation);
    if (q.answer_image) {
      DOM.btnToggleDumpImg.classList.remove('hidden');
      DOM.dumpImage.src = q.answer_image;
    } else {
      DOM.btnToggleDumpImg.classList.add('hidden');
    }
  }

  function hideExplanation() {
    DOM.explanationCard.classList.add('hidden');
    DOM.explanationText.innerHTML = '';
  }

  function formatExplanation(text) {
    if (!text) return '';
    return text
      .split('\n')
      .map(line => {
        if (line.startsWith('- ')) {
          return `<li>${escapeHtml(line.substring(2))}</li>`;
        }
        if (line.match(/^\d+\.\s/)) {
          return `<li><strong>${line.substring(0, 3)}</strong> ${escapeHtml(line.substring(3))}</li>`;
        }
        return `<p>${escapeHtml(line)}</p>`;
      })
      .join('')
      .replace(/<p><\/p>/g, '')
      .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
      .replace(/<\/ul><ul>/g, '');
  }

  // --- Bookmark & Mastery ---
  function updateBookmarkMasterButtons(qId) {
    if (userProgress.bookmarks[qId]) {
      DOM.btnBookmark.classList.add('active');
      DOM.btnBookmark.innerHTML = `<span>⭐</span> Đã Lưu Cần Ôn`;
    } else {
      DOM.btnBookmark.classList.remove('active');
      DOM.btnBookmark.innerHTML = `<span>☆</span> Đánh Dấu Cần Ôn`;
    }

    if (userProgress.mastered[qId]) {
      DOM.btnMaster.classList.add('active');
      DOM.btnMaster.innerHTML = `<span>✅</span> Đã Thuộc Lòng`;
    } else {
      DOM.btnMaster.classList.remove('active');
      DOM.btnMaster.innerHTML = `<span>☑️</span> Đánh Dấu Đã Thuộc`;
    }
  }

  function toggleBookmark() {
    const q = questions[currentIndex];
    if (userProgress.bookmarks[q.id]) {
      delete userProgress.bookmarks[q.id];
    } else {
      userProgress.bookmarks[q.id] = true;
    }
    saveProgress();
    updateBookmarkMasterButtons(q.id);
  }

  function toggleMaster() {
    const q = questions[currentIndex];
    if (userProgress.mastered[q.id]) {
      delete userProgress.mastered[q.id];
    } else {
      userProgress.mastered[q.id] = true;
    }
    saveProgress();
    updateBookmarkMasterButtons(q.id);
  }

  // --- Progress Bar & Header Stats ---
  function updateProgressStats() {
    let masteredCount = Object.keys(userProgress.mastered).length;
    let reviewCount = Object.keys(userProgress.bookmarks).length;
    let correctCount = Object.values(userProgress.status).filter(s => s === 'correct').length;
    let attemptedCount = Object.keys(userProgress.placements).length;
    let percent = Math.round((attemptedCount / questions.length) * 100);

    if (DOM.statMastered) DOM.statMastered.textContent = masteredCount;
    if (DOM.statReview) DOM.statReview.textContent = reviewCount;
    if (DOM.statCorrect) DOM.statCorrect.textContent = correctCount;
    if (DOM.statPercent) DOM.statPercent.textContent = `${percent}%`;
  }

  // --- Sidebar Grid ---
  function renderSidebar() {
    if (!DOM.sidebarGrid) return;
    DOM.sidebarGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();

    questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'q-badge-btn';
      btn.textContent = q.id;
      btn.title = `Câu ${q.id}: ${q.title}`;

      // Status indicator classes
      if (idx === currentIndex) {
        btn.classList.add('current');
      }

      if (userProgress.mastered[q.id]) {
        btn.classList.add('mastered');
      } else if (userProgress.status[q.id] === 'correct') {
        btn.classList.add('correct');
      } else if (userProgress.status[q.id] === 'incorrect') {
        btn.classList.add('incorrect');
      } else if (userProgress.placements[q.id] && Object.keys(userProgress.placements[q.id]).length > 0) {
        btn.classList.add('in-progress');
      }

      if (userProgress.bookmarks[q.id]) {
        btn.classList.add('bookmarked');
      }

      btn.addEventListener('click', () => {
        renderQuestion(idx);
        closeSidebar();
      });

      fragment.appendChild(btn);
    });

    DOM.sidebarGrid.appendChild(fragment);
  }

  function toggleSidebar() {
    DOM.sidebar.classList.toggle('open');
    DOM.sidebarOverlay.classList.toggle('open');
  }

  function closeSidebar() {
    DOM.sidebar.classList.remove('open');
    DOM.sidebarOverlay.classList.remove('open');
  }

  // --- Modals (Exhibit & Shortcuts) ---
  function openExhibitModal(imgSrc, title) {
    DOM.exhibitImage.src = imgSrc;
    DOM.exhibitModal.querySelector('.modal-title').textContent = title || 'Sơ Đồ Mạng (Exhibit)';
    DOM.exhibitModal.classList.remove('hidden');
  }

  function closeExhibitModal() {
    DOM.exhibitModal.classList.add('hidden');
    DOM.exhibitImage.src = '';
  }

  // --- Theme Toggle ---
  function initTheme() {
    const savedTheme = localStorage.getItem('ccna_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (DOM.themeIcon) {
      DOM.themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ccna_theme', newTheme);
    if (DOM.themeIcon) {
      DOM.themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    }
  }

  // --- Utilities ---
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Event Bindings ---
  function bindEvents() {
    // Top Navigation & Theme
    if (DOM.themeToggleBtn) DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    if (DOM.sidebarToggleBtn) DOM.sidebarToggleBtn.addEventListener('click', toggleSidebar);
    if (DOM.sidebarCloseBtn) DOM.sidebarCloseBtn.addEventListener('click', closeSidebar);
    if (DOM.sidebarOverlay) DOM.sidebarOverlay.addEventListener('click', closeSidebar);

    // Category filter pills
    if (DOM.categoryPills) {
      DOM.categoryPills.addEventListener('click', e => {
        const btn = e.target.closest('.category-pill');
        if (!btn) return;
        DOM.categoryPills.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category || 'all';
        computeFilteredQuestions();
        if (filteredIndices.length > 0) {
          renderQuestion(filteredIndices[0]);
        }
      });
    }

    // Sidebar search
    if (DOM.sidebarSearch) {
      DOM.sidebarSearch.addEventListener('input', () => {
        computeFilteredQuestions();
        renderSidebar();
      });
    }

    // Bottom Action Buttons
    if (DOM.btnPrev) DOM.btnPrev.addEventListener('click', () => {
      if (currentIndex > 0) renderQuestion(currentIndex - 1);
    });
    if (DOM.btnNext) DOM.btnNext.addEventListener('click', () => {
      if (currentIndex < questions.length - 1) renderQuestion(currentIndex + 1);
    });
    if (DOM.btnReset) DOM.btnReset.addEventListener('click', resetQuestion);
    if (DOM.btnCheck) DOM.btnCheck.addEventListener('click', checkAnswer);
    if (DOM.btnShowAnswer) DOM.btnShowAnswer.addEventListener('click', showAnswer);
    if (DOM.btnBookmark) DOM.btnBookmark.addEventListener('click', toggleBookmark);
    if (DOM.btnMaster) DOM.btnMaster.addEventListener('click', toggleMaster);

    // Toggle Dump Screenshot
    if (DOM.btnToggleDumpImg) {
      DOM.btnToggleDumpImg.addEventListener('click', () => {
        DOM.dumpImageCard.classList.toggle('hidden');
      });
    }

    // Modal Close buttons
    if (DOM.exhibitModalClose) DOM.exhibitModalClose.addEventListener('click', closeExhibitModal);
    if (DOM.exhibitModal) {
      DOM.exhibitModal.addEventListener('click', e => {
        if (e.target === DOM.exhibitModal) closeExhibitModal();
      });
    }

    if (DOM.shortcutsBtn && DOM.shortcutsModal) {
      DOM.shortcutsBtn.addEventListener('click', () => DOM.shortcutsModal.classList.remove('hidden'));
    }
    if (DOM.shortcutsModalClose) {
      DOM.shortcutsModalClose.addEventListener('click', () => DOM.shortcutsModal.classList.add('hidden'));
    }
    if (DOM.shortcutsModal) {
      DOM.shortcutsModal.addEventListener('click', e => {
        if (e.target === DOM.shortcutsModal) DOM.shortcutsModal.classList.add('hidden');
      });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', e => {
      // Don't trigger if typing in an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) renderQuestion(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < questions.length - 1) renderQuestion(currentIndex + 1);
      } else if (e.key === 'Enter') {
        checkAnswer();
      } else if (e.key.toLowerCase() === 'r') {
        resetQuestion();
      } else if (e.key.toLowerCase() === 'a') {
        showAnswer();
      } else if (e.key.toLowerCase() === 'b') {
        toggleBookmark();
      } else if (e.key.toLowerCase() === 'm') {
        toggleMaster();
      } else if (e.key === 'Escape') {
        closeExhibitModal();
        closeSidebar();
        if (DOM.shortcutsModal) DOM.shortcutsModal.classList.add('hidden');
      }
    });
  }

  // --- App Initialization ---
  function init() {
    initTheme();
    bindEvents();
    computeFilteredQuestions();
    renderQuestion(0);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
