/**
 * GOOGLE ANTIGRAVITY — INTERACTIVE ENGINE (UI/UX PRO MAX)
 * Pure Vanilla JavaScript - 100% Static & Zero-Dependency
 */

document.addEventListener('DOMContentLoaded', () => {
  initSwarmCanvas();
  initIdeTabs();
  initMetricCounters();
  initPlayground();
  initCommandPalette();
  initCopyButton();
  initMobileMenu();
});

/* ==========================================================================
   1. AGENT SWARM CANVAS PHYSICS VISUALIZER
   ========================================================================== */

function initSwarmCanvas() {
  const canvas = document.getElementById('swarm-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth / 22), 65);

  class AgentNode {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1.5;
      this.isHub = Math.random() > 0.85;
      if (this.isHub) {
        this.radius = 3.5;
      }
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Gentle mouse attraction/repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isHub ? '#00f0ff' : 'rgba(148, 163, 184, 0.5)';
      ctx.shadowBlur = this.isHub ? 12 : 0;
      ctx.shadowColor = '#00f0ff';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new AgentNode());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting agent communication lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        const maxDist = 130;

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. HERO LIVE IDE TAB SWITCHER
   ========================================================================== */

function initIdeTabs() {
  const tabs = document.querySelectorAll('.ide-tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. TELEMETRY NUMBER COUNTERS
   ========================================================================== */

function initMetricCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 1200;
          const steps = 40;
          const stepTime = duration / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += target / steps;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.2 });

  const telemetrySection = document.querySelector('.telemetry-section');
  if (telemetrySection) {
    observer.observe(telemetrySection);
  }
}

/* ==========================================================================
   4. PLAYGROUND SCENARIOS
   ========================================================================== */

const SCENARIO_DATA = {
  'scenario-refactor': {
    file: 'scenario-refactor.agy',
    logs: [
      { text: '● [Antigravity Core] Initialized cognitive kernel with 1M context window.', color: 'c-cyan' },
      { text: '✓ [Grounded Indexer] Indexed 1,420 AST symbols across monorepo in 140ms.', color: 'c-green' },
      { text: '⚡ [Swarm Dispatcher] Spawning 4 subagents: `SchemaMigrator`, `APIBoundary`, `TypeValidator`, `E2ETester`.', color: 'c-amber' },
      { text: '► [Execution] Applying non-destructive atomic chunk edits across 124 files...', color: 'c-purple' },
      { text: '✓ [Test Suite] 384/384 unit & integration tests PASSED (0 errors, 0 lints).', color: 'c-green' },
      { text: '★ [Complete] Verifiable diff ready for zero-downtime deployment.', color: 'c-cyan' }
    ]
  },
  'scenario-security': {
    file: 'security-audit-sandbox.agy',
    logs: [
      { text: '● [Security Auditor] Inspecting dependency graph and AST for CVE-2026 patterns.', color: 'c-cyan' },
      { text: '▲ [Vulnerability Found] High risk Prototype Pollution in `auth-validator.ts:89`.', color: 'c-amber' },
      { text: '⚡ [Sandbox Spawn] Created isolated git worktree `security/hotfix-patch-cve`.', color: 'c-cyan' },
      { text: '► [Auto-Patch] Replaced unsafe Object.assign with frozen prototype schema validator.', color: 'c-purple' },
      { text: '✓ [Fuzzing Suite] Ran 10,000 synthetic attack payloads — 100% BLOCKED.', color: 'c-green' },
      { text: '★ [Signed] Cryptographic SHA-256 patch signed and ready to merge.', color: 'c-cyan' }
    ]
  },
  'scenario-fullstack': {
    file: 'fullstack-generator.agy',
    logs: [
      { text: '● [Intent Parser] Received spec: "High-performance Static Landing + Agent Swarm Studio".', color: 'c-cyan' },
      { text: '🎨 [Design Engine] Applied UI/UX Pro Max rules (Neo-Precision Dark Glass, WCAG AA).', color: 'c-purple' },
      { text: '⚡ [Subagents Active] `HtmlArchitect` (Semantic5), `CssEngine` (Tokens), `JsRuntime` (Zero-dep).', color: 'c-amber' },
      { text: '✓ [Static Check] Zero build steps required. Instant GitHub Pages compatible.', color: 'c-green' },
      { text: '✓ [Lighthouse Audit] Performance: 100 | Accessibility: 100 | Best Practices: 100.', color: 'c-green' },
      { text: '★ [Ready] Artifact published to production.', color: 'c-cyan' }
    ]
  }
};

function initPlayground() {
  const scenarioBtns = document.querySelectorAll('.playground-btn');
  const scenarioTitle = document.getElementById('scenario-title');
  const scenarioConsole = document.getElementById('scenario-console');
  const runBtn = document.getElementById('run-simulation-btn');

  let currentScenarioKey = 'scenario-refactor';

  function displayScenario(key) {
    currentScenarioKey = key;
    const data = SCENARIO_DATA[key];
    if (!data) return;

    if (scenarioTitle) scenarioTitle.textContent = data.file;
    if (scenarioConsole) {
      scenarioConsole.innerHTML = '';
      data.logs.forEach(log => {
        const div = document.createElement('div');
        div.className = 'console-line';
        div.innerHTML = `<span class="${log.color}">${log.text}</span>`;
        scenarioConsole.appendChild(div);
      });
    }
  }

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-scenario');
      displayScenario(key);
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const data = SCENARIO_DATA[currentScenarioKey];
      if (!data || !scenarioConsole) return;

      scenarioConsole.innerHTML = '<div class="console-line c-cyan">⚡ Re-running cognitive simulation...</div>';
      
      data.logs.forEach((log, index) => {
        setTimeout(() => {
          const div = document.createElement('div');
          div.className = 'console-line';
          div.innerHTML = `<span class="${log.color}">${log.text}</span>`;
          scenarioConsole.appendChild(div);
        }, (index + 1) * 350);
      });
    });
  }
}

/* ==========================================================================
   5. COMMAND PALETTE (CTRL+K)
   ========================================================================== */

function initCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  const openBtn = document.getElementById('open-cmd-btn');
  const closeBtn = document.getElementById('cmd-close-btn');
  const searchInput = document.getElementById('cmd-search-input');
  const cmdItems = document.querySelectorAll('.cmd-item');
  const keyHint = document.getElementById('cmd-key-hint');

  // Detect Mac vs Windows
  if (keyHint && navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
    keyHint.textContent = '⌘ K';
  }

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal?.classList.contains('open') ? closeModal() : openModal();
    }
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });

  // Filter items
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      cmdItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });
  }

  // Handle Command Item Clicks
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      closeModal();

      if (action === 'action-theme') {
        document.body.classList.toggle('high-contrast');
      } else if (action === 'action-swarm') {
        document.querySelector('[data-tab="tab-swarm"]')?.click();
        document.querySelector('.hero-ide-window')?.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'action-heal') {
        document.querySelector('[data-tab="tab-debug"]')?.click();
        document.querySelector('.hero-ide-window')?.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'action-plan') {
        document.querySelector('[data-tab="tab-plan"]')?.click();
        document.querySelector('.hero-ide-window')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   6. QUICKSTART CLIPBOARD COPY
   ========================================================================== */

function initCopyButton() {
  const copyBtn = document.getElementById('copy-quickstart-btn');
  const copyStatus = document.getElementById('copy-status');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const text = copyBtn.getAttribute('data-clipboard') || 'npx @google/antigravity init';
    try {
      await navigator.clipboard.writeText(text);
      if (copyStatus) {
        copyStatus.textContent = 'Copied!';
        copyStatus.style.background = 'rgba(16, 185, 129, 0.3)';
        copyStatus.style.color = '#10b981';
        setTimeout(() => {
          copyStatus.textContent = 'Copy';
          copyStatus.style.background = 'rgba(255, 255, 255, 0.1)';
          copyStatus.style.color = 'inherit';
        }, 2000);
      }
    } catch (err) {
      console.warn('Clipboard access restricted', err);
    }
  });
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAWER
   ========================================================================== */

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}
