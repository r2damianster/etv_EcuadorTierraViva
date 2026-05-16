/**
 * ETV i18n Engine — text-node walker, zero HTML modification required.
 * Loads locales/en.json + locales/es.json, swaps text nodes on toggle.
 * Persists language choice in localStorage ('etv-lang').
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'etv-lang';
  const DEFAULT_LANG = 'en';

  const LOCALES = { en: null, es: null };
  // WeakMap: textNode -> original EN text content
  const ORIGINALS = new Map();

  let EN_TO_ES = {};
  let ES_TO_EN = {};
  let currentLang = DEFAULT_LANG;

  /* ── Fetch both locale files in parallel ── */
  async function loadLocales() {
    const base = document.currentScript
      ? document.currentScript.src.replace(/\/[^/]+$/, '')
      : '/locales';

    const [en, es] = await Promise.all([
      fetch(base + '/en.json').then(r => r.json()),
      fetch(base + '/es.json').then(r => r.json()),
    ]);

    LOCALES.en = en;
    LOCALES.es = es;

    for (const key of Object.keys(en)) {
      if (es[key]) {
        EN_TO_ES[en[key]] = es[key];
        ES_TO_EN[es[key]] = en[key];
      }
    }
  }

  /* ── Collect all visible text nodes ── */
  function getTextNodes() {
    const nodes = [];
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          const tag = p.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
            return NodeFilter.FILTER_REJECT;
          }
          // Skip the lang toggle button labels (they never change)
          if (p.closest('#etv-lang-toggle')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      }
    );
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    return nodes;
  }

  /* ── Apply language to all text nodes ── */
  function applyLanguage(lang) {
    const nodes = getTextNodes();

    for (const node of nodes) {
      // Save original EN on first pass
      if (!ORIGINALS.has(node)) {
        ORIGINALS.set(node, node.textContent);
      }

      const original = ORIGINALS.get(node).trim();
      if (!original) continue;

      if (lang === 'es') {
        const translation = EN_TO_ES[original];
        if (translation) {
          node.textContent = node.textContent.replace(original, translation);
        }
      } else {
        // Restore original EN
        node.textContent = ORIGINALS.get(node);
      }
    }

    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    updateButtonState(lang);
  }

  /* ── Language toggle button ── */
  function injectToggle() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const toggle = document.createElement('div');
    toggle.id = 'etv-lang-toggle';
    toggle.setAttribute('aria-label', 'Language selector');
    toggle.style.cssText = [
      'display:inline-flex',
      'align-items:center',
      'gap:2px',
      'border:1px solid hsl(var(--color-primary, 160 60% 40%))',
      'border-radius:6px',
      'overflow:hidden',
      'font-size:0.78rem',
      'font-weight:600',
      'letter-spacing:0.05em',
      'cursor:pointer',
      'flex-shrink:0',
    ].join(';');

    ['EN', 'ES'].forEach(code => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = code;
      btn.dataset.langBtn = code.toLowerCase();
      btn.style.cssText = [
        'padding:4px 10px',
        'border:none',
        'background:transparent',
        'cursor:pointer',
        'font:inherit',
        'transition:background 0.15s,color 0.15s',
      ].join(';');

      btn.addEventListener('click', () => {
        if (btn.dataset.langBtn !== currentLang) {
          applyLanguage(btn.dataset.langBtn);
        }
      });

      toggle.appendChild(btn);
    });

    // Insert before last child of nav (keeps button at right end)
    const navInner = nav.querySelector('div') || nav;
    navInner.appendChild(toggle);
  }

  function updateButtonState(lang) {
    const primary = 'hsl(var(--color-primary, 160 60% 40%))';
    document.querySelectorAll('#etv-lang-toggle [data-lang-btn]').forEach(btn => {
      const active = btn.dataset.langBtn === lang;
      btn.style.background = active ? primary : 'transparent';
      btn.style.color = active ? '#fff' : primary;
    });
  }

  /* ── Bootstrap ── */
  async function init() {
    await loadLocales();
    injectToggle();

    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    currentLang = DEFAULT_LANG; // start from EN baseline
    if (saved !== DEFAULT_LANG) {
      applyLanguage(saved);
    } else {
      updateButtonState(DEFAULT_LANG);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  window.etvI18n = { setLang: applyLanguage, getLang: () => currentLang };
})();
