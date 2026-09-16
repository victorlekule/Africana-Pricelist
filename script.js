/* =========================================================
   Africana Tech & Branding Ltd — Header (fixed, full width)
   Palette: brandBlue · brandBlack · brandWhite · brandGreen
   ========================================================= */

/* ---------------------------------------------------------
   1. TAILWIND CONFIG (must load AFTER the CDN)
   --------------------------------------------------------- */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brandBlue: '#136db6',
        brandBlack: '#0A0A0A',
        brandWhite: '#F9FAFB',
        brandGreen: '#009444'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(19,109,182,.25)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp .5s cubic-bezier(.22,.61,.36,1) both'
      }
    }
  }
};


/* ---------------------------------------------------------
   2. SITE MODULE
   --------------------------------------------------------- */
const AfricanaSite = (() => {

  const COMPANY = {
    name: 'Africana Tech & Branding Ltd',
    tagline: 'Tech · Branding · Print',
    location: 'Arusha, Tanzania',
    phone: '+255 798 010 073',
    whatsapp: 'africana.co.tz',
    email: 'info@africana.co.tz',
    social: {
      facebook: 'https://facebook.com/africanatech',
      instagram: 'https://instagram.com/africanatech',
      twitter: 'https://twitter.com/africanatech',
      linkedin: 'https://linkedin.com/company/africanatech'
    }
  };

  const NAV = [
    { label: 'Home', href: 'index.html', route: 'home' },
    { label: 'Web Solutions', href: 'web.html', route: 'web' },
    { label: 'Branding & Creative', href: 'branding.html', route: 'branding' },
    { label: 'Printing Services', href: 'printing.html', route: 'printing' },
    { label: 'Contact', href: 'contact.html', route: 'contact' }
  ];

  /* Storage keys used by the quotation page */
  const ITEM_STORAGE_KEYS = [
    'africana_quote_items',
    'africana_printing_items',
    'africana_branding_items',
    'africana_web_items',
    'africana_selected_items'
  ];

  const getCurrentFile = () => {
    const p = window.location.pathname.split('/').pop();
    return p === '' ? 'index.html' : p;
  };

  /* =========================================================
     QUOTE COUNT — read all items from localStorage
     ========================================================= */
  function getQuoteCount() {
    let total = 0;
    ITEM_STORAGE_KEYS.forEach(key => {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        const arr = Array.isArray(parsed) ? parsed : (parsed.items || []);
        if (Array.isArray(arr)) total += arr.length;
      } catch (e) { /* ignore */ }
    });
    return total;
  }

  /* =========================================================
     UPDATE ALL QUOTE BADGES
     ========================================================= */
  function updateQuoteBadges() {
    const count = getQuoteCount();
    document.querySelectorAll('[data-quote-badge]').forEach(badge => {
      if (count > 0) {
        badge.textContent = count > 99 ? '99+' : String(count);
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    });
  }

  /* =========================================================
     TOP INFO BAR
     ========================================================= */
  function buildInfoBar() {
    const phoneClean = COMPANY.phone.replace(/\s+/g, '');
    const whatsappNumber = phoneClean.replace(/^\+/, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(COMPANY.location)}`;

    const socialIcon = (network, url, svgPath, isFilled = true) => `
      <a href="${url}" target="_blank" rel="noopener" aria-label="${network}"
          class="grid h-6 w-6 place-items-center rounded-full bg-brandWhite text-brandBlack transition
            hover:bg-yellow-400 hover:text-brandBlack hover:scale-110">
        <svg class="h-3 w-3" viewBox="0 0 24 24"
             ${isFilled ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2"'}>
          ${svgPath}
        </svg>
      </a>`;

    const socialsDesktop = [
      socialIcon('Facebook',
        COMPANY.social.facebook,
        `<path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.1H7.5v3h2.7V21h3.3Z"/>`),
      socialIcon('Instagram',
        COMPANY.social.instagram,
        `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>`,
        false),
      socialIcon('Twitter / X',
        COMPANY.social.twitter,
        `<path d="M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.2L4.7 21H1.5l7.5-8.6L1 3h6.7l4.5 5.7L17.5 3Zm-1.1 16h1.8L7.7 4.9H5.8L16.4 19Z"/>`),
      socialIcon('LinkedIn',
        COMPANY.social.linkedin,
        `<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/>`)
    ].join('');

    const desktopQuickLinks = [
      { label: 'Privacy', href: 'privacy.html' },
      { label: 'Terms', href: 'terms.html' },
      { label: 'FAQs', href: 'faqs.html' },
      { label: 'How It Works', href: 'how.html' }
    ].map((l, i, arr) => `
      <a href="${l.href}"
         class="text-brandWhite transition-colors hover:text-yellow-400">${l.label}</a>
      ${i < arr.length - 1 ? '<span class="h-3 w-px bg-brandWhite/15" aria-hidden="true"></span>' : ''}
    `).join('');

    return `
    <div class="w-full bg-brandBlue text-brandWhite">
      <div class="w-full px-4 sm:px-6 lg:px-8">

        <!-- DESKTOP (md+) -->
        <div class="hidden h-10 items-center text-[12px] md:grid md:grid-cols-3">

          <!-- LEFT: Contact info -->
          <div class="flex min-w-0 items-center gap-3">
            <a href="${whatsappUrl}" target="_blank" rel="noopener"
               class="group flex min-w-0 items-center gap-1.5 text-brandWhite transition-colors hover:text-yellow-400">
              <svg class="h-3.5 w-3.5 shrink-0 text-brandWhite transition-colors group-hover:text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.5c-1.7 0-3.4-.5-4.9-1.4l-.3-.2-3.6 1 1-3.5-.2-.3C2 15.5 1.5 13.8 1.5 12 1.5 6.2 6.2 1.5 12 1.5S22.5 6.2 22.5 12 17.8 21.5 12 21.5z"/>
              </svg>
              <span class="truncate">${COMPANY.phone}</span>
            </a>
            <span class="h-3.5 w-px shrink-0 bg-brandWhite/15" aria-hidden="true"></span>
            <a href="${mapsUrl}" target="_blank" rel="noopener"
               class="group flex min-w-0 items-center gap-1.5 text-brandWhite transition-colors hover:text-yellow-400">
              <svg class="h-3.5 w-3.5 shrink-0 text-brandWhite transition-colors group-hover:text-yellow-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-5.7-7-11a7 7 0 1 1 14 0c0 5.3-7 11-7 11Z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>
              <span class="truncate">${COMPANY.location}</span>
            </a>
            <span class="h-3.5 w-px shrink-0 bg-brandWhite/15" aria-hidden="true"></span>
            <a href="mailto:${COMPANY.email}"
               class="group flex min-w-0 items-center gap-1.5 text-brandWhite transition-colors hover:text-yellow-400">
              <svg class="h-3.5 w-3.5 shrink-0 text-brandWhite transition-colors group-hover:text-yellow-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2.5"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="m3 7 9 6 9-6"/>
              </svg>
              <span class="truncate">${COMPANY.email}</span>
            </a>
          </div>

          <!-- CENTER: Social icons -->
          <div class="flex items-center justify-center gap-1.5">
            ${socialsDesktop}
          </div>

          <!-- RIGHT: Quick legal links -->
          <div class="flex items-center justify-end gap-3 font-medium">
            ${desktopQuickLinks}
          </div>
        </div>

        <!-- MOBILE (<md) — WhatsApp · Email · How It Works -->
          <div class="flex w-full items-center gap-1 py-2 text-[9px] md:hidden">

          <a href="${whatsappUrl}" target="_blank" rel="noopener"
             class="group flex shrink-0 items-center gap-1 whitespace-nowrap font-medium text-brandWhite transition-colors hover:text-yellow-400">
            <svg class="h-3.5 w-3.5 shrink-0 text-brandWhite transition-colors group-hover:text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.5c-1.7 0-3.4-.5-4.9-1.4l-.3-.2-3.6 1 1-3.5-.2-.3C2 15.5 1.5 13.8 1.5 12 1.5 6.2 6.2 1.5 12 1.5S22.5 6.2 22.5 12 17.8 21.5 12 21.5z"/>
            </svg>
              <span class="font-semibold text-[10px]">${COMPANY.phone}</span>
          </a>

          <a href="mailto:${COMPANY.email}"
               class="group flex min-w-0 flex-1 items-center justify-center gap-1 border-x border-brandWhite/20 px-1 font-medium text-brandWhite transition-colors hover:text-yellow-400">
              <svg class="h-3 w-3 shrink-0 text-brandWhite transition-colors group-hover:text-yellow-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2.5"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="m3 7 9 6 9-6"/>
            </svg>
            <span class="truncate">${COMPANY.email}</span>
          </a>

          <a href="how-it-works.html"
             class="group flex shrink-0 items-center gap-1 whitespace-nowrap font-medium text-brandWhite transition-colors hover:text-yellow-400">
            <svg class="h-3 w-3 shrink-0 text-brandWhite transition-colors group-hover:text-yellow-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-4M12 8h.01"/>
            </svg>
            <span class="text-[9px] whitespace-nowrap">How It Works</span>
          </a>
        </div>

      </div>
    </div>`;
  }

  /* =========================================================
     NAV LINKS
     ========================================================= */
  function desktopLink(item, current) {
    const active = item.href === current;
    return `
      <a href="${item.href}"
         class="relative px-4 py-2 text-sm font-medium transition-colors
                after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:rounded-full
                after:origin-left after:scale-x-0 after:bg-brandBlue after:transition-transform
                hover:text-brandBlue hover:after:scale-x-100
                ${active ? 'text-brandBlue font-semibold after:scale-x-100' : 'text-brandBlack/80'}">
        ${item.label}
      </a>`;
  }

  function mobileLink(item, current) {
    const active = item.href === current;
    return `
      <a href="${item.href}"
         class="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[14px] font-medium transition
                ${active
        ? 'bg-brandBlue/10 text-brandBlue font-semibold'
        : 'text-brandBlack/80 hover:bg-brandBlack/5'}">
        <span class="truncate">${item.label}</span>
        <svg class="h-3.5 w-3.5 shrink-0 opacity-40" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"/>
        </svg>
      </a>`;
  }

  /* =========================================================
     QUOTATION ICON (clipboard-list — clearly a "quote")
     ========================================================= */
  const QUOTE_ICON = `
    <svg class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.2"
         stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/>
      <path d="M9 12h6M9 16h4"/>
    </svg>`;

  /* =========================================================
     QUOTE BADGE (live count)
     ========================================================= */
  const QUOTE_BADGE = `
    <span data-quote-badge
          class="absolute -top-1.5 -right-1.5 hidden grid h-4 min-w-[1rem] place-items-center
                 rounded-full bg-red-500 px-1 text-[9px] font-extrabold text-white
                 shadow-md ring-2 ring-white leading-none">
      0
    </span>`;

  /* =========================================================
     MAIN HEADER BAR
     ========================================================= */
  function buildMainHeader() {
    const current = getCurrentFile();
    const desktopLinks = NAV.map(i => desktopLink(i, current)).join('');
    const mobileLinks = NAV.map(i => mobileLink(i, current)).join('');

    return `
    <div class="relative w-full border-b border-brandBlack/10 bg-white/95 backdrop-blur-xl">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between gap-3 lg:h-[72px]">

          <!-- LOGO -->
          <a href="index.html" class="group flex shrink-0 items-center gap-2.5 sm:gap-3">
                       <span class="flex flex-col leading-none">
              <span class="block text-[14px] sm:text-lg font-extrabold tracking-tight text-brandBlack leading-none">
                Africana Tech <span class="text-brandBlue"> Branding ltd
              </span>
              <span class="mt-1 block text-center text-[8.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.3em] text-brandBlue leading-none">
                Services Pricelist
              </span>
            </span>
          </a>

          <!-- Desktop nav -->
          <nav class="hidden items-center gap-1 lg:flex">
            ${desktopLinks}
          </nav>

          <!-- Right actions (compact) -->
          <div class="flex shrink-0 items-center gap-1.5">

            <!-- Quotation button — with live count badge -->
            <a href="quotation.html"
               class="relative hidden items-center gap-1.5 rounded-lg bg-brandBlue
                      px-3 py-2 text-[11px] font-bold text-white
                      shadow-md shadow-brandBlue/25 transition-colors hover:bg-brandBlue/90
                 sm:inline-flex sm:px-4 sm:py-2 sm:text-xs lg:px-5 lg:py-2.5 lg:text-sm">
              ${QUOTE_ICON}
              <span class="hidden lg:inline">Quotation</span>
              ${QUOTE_BADGE}
            </a>

            <!-- Hamburger — compact -->
            <button id="menuBtn" type="button"
              class="grid h-9 w-9 place-items-center rounded-lg bg-brandBlack text-brandWhite
                     transition-colors hover:bg-brandBlue lg:hidden"
              aria-label="Open menu" aria-expanded="false">
              <svg id="menuIcon" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- ============================================
           MOBILE MENU — compact LEFT-anchored panel
           ============================================ -->
      <div id="mobileMenu"
           class="pointer-events-none absolute left-3 sm:left-5 top-full mt-2 z-50 w-[min(260px,calc(100vw-1.5rem))]
                  max-h-0 origin-top-left overflow-hidden opacity-0
                  transition-[max-height,opacity] duration-300 ease-out lg:hidden">
        <nav class="rounded-2xl border border-black/[0.06] bg-white p-2 shadow-2xl shadow-black/10 space-y-0.5">
          ${mobileLinks}

          <!-- Quotation link in mobile menu — with live count -->
          <a href="quotation.html"
             class="relative flex items-center justify-between rounded-xl bg-brandBlue px-3.5 py-2.5
                    text-[14px] font-bold text-white shadow-md shadow-brandBlue/20
                    transition-colors hover:bg-brandBlue/90">
            <span class="flex items-center gap-2">
              ${QUOTE_ICON}
              <span>Quotation</span>
            </span>
            <span data-quote-badge
                  class="hidden grid h-5 min-w-[1.25rem] place-items-center rounded-full
                         bg-red-500 px-1 text-[10px] font-extrabold text-white shadow ring-2 ring-brandBlue leading-none">
              0
            </span>
          </a>
        </nav>
      </div>
    </div>`;
  }

  /* =========================================================
     FULL HEADER
     ========================================================= */
  function buildHeader() {
    return `
    <header id="header"
      class="fixed top-0 left-0 right-0 z-50 w-full transition-shadow duration-300">
      ${buildInfoBar()}
      ${buildMainHeader()}
    </header>`;
  }

  /* =========================================================
     SPACER — always match header height exactly
     ========================================================= */
  function adjustSpacer() {
    const header = document.getElementById('header');
    const spacer = document.getElementById('header-spacer');
    if (!header || !spacer) return;
    spacer.style.height = header.offsetHeight + 'px';
  }

  /* =========================================================
     EVENTS
     ========================================================= */
  function bindEvents() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    const head = document.getElementById('header');

    /* Create backdrop once */
    let backdrop = document.getElementById('menuBackdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'menuBackdrop';
      backdrop.className = 'fixed left-0 right-0 bottom-0 z-40 hidden bg-brandBlack/25 backdrop-blur-md lg:hidden';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    const positionBackdrop = () => {
      if (!head) return;
      backdrop.style.top = head.offsetHeight + 'px';
    };

    if (btn && menu && icon) {
      const openMenu = () => {
        positionBackdrop();
        menu.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none');
        menu.classList.add('max-h-[600px]', 'opacity-100');
        btn.setAttribute('aria-expanded', 'true');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>';
        backdrop.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      };

      const closeMenu = () => {
        menu.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
        menu.classList.remove('max-h-[600px]', 'opacity-100');
        btn.setAttribute('aria-expanded', 'false');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>';
        backdrop.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        adjustSpacer();
      };

      btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('max-h-0');
        isOpen ? openMenu() : closeMenu();
      });

      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
      backdrop.addEventListener('click', closeMenu);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('max-h-0')) closeMenu();
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && !menu.classList.contains('max-h-0')) {
          closeMenu();
        }
      });
    }

    if (head) {
      const onScroll = () => head.classList.toggle('shadow-lg', window.scrollY > 8);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      if ('ResizeObserver' in window) {
        new ResizeObserver(() => {
          adjustSpacer();
          positionBackdrop();
        }).observe(head);
      }
    }

    window.addEventListener('resize', () => {
      adjustSpacer();
      positionBackdrop();
    });
    window.addEventListener('orientationchange', () => {
      adjustSpacer();
      positionBackdrop();
    });

    /* =========================================================
       LIVE QUOTE COUNT LISTENERS
       - storage event   → cross-tab updates
       - quote:updated   → custom event the quotation page can fire
       - light polling   → same-tab fallback (every 800ms)
       ========================================================= */
    window.addEventListener('storage', (e) => {
      if (!e.key || ITEM_STORAGE_KEYS.includes(e.key)) {
        updateQuoteBadges();
      }
    });

    window.addEventListener('quote:updated', updateQuoteBadges);

    setInterval(updateQuoteBadges, 800);
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    mount.innerHTML = buildHeader();
    bindEvents();

    const sync = () => {
      adjustSpacer();
      updateQuoteBadges();
    };

    requestAnimationFrame(sync);
    setTimeout(sync, 100);
    setTimeout(sync, 400);

    window.addEventListener('load', sync);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sync);
    }
  }

  return {
    init,
    COMPANY,
    NAV,
    /* Public method — call after adding/removing items on the quotation page */
    updateQuoteCount: updateQuoteBadges
  };
})();


/* ---------------------------------------------------------
   SELF-INITIALIZE
   --------------------------------------------------------- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', AfricanaSite.init);
} else {
  AfricanaSite.init();
}



//footer//
(function () {
  'use strict';

  const config = {
    brandName: "Africana",

    about: {
      title: "About Africana",
      text: "Africana is your trusted partner for creative branding, professional web services, and high-quality printing solutions. We help businesses grow with modern design and reliable digital experiences.",
      officialWebsite: "https://www.africana.com",
      officialWebsiteLabel: "Visit Official Website"
    },

    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "HOME", url: "index.html" },
        { label: "PRINTING", url: "printing.html" },
        { label: "CONTACT", url: "contact.html" },
        { label: "FAQS", url: "faqs.html" },
        { label: "TERMS", url: "terms.html" },
        { label: "PRIVACY", url: "privacy.html" }
      ]
    },

    webServices: {
      title: "Web Services",
      links: [
        { label: "WEBSITE", url: "web.html#web" },
        { label: "SOFTWARE", url: "web.html#software" },
        { label: "MOBILE", url: "web.html#mobile" },
        { label: "MAINTENANCE", url: "web.html#maintenance" },
        { label: "SECURITY", url: "web.html#security" }
      ]
    },

    branding: {
      title: "Branding",
      links: [
        { label: "DESIGN", url: "branding.html#design" },
        { label: "SOCIAL MEDIA", url: "branding.html#social" },
        { label: "VIDEO", url: "branding.html#video" },
        { label: "ADS", url: "branding.html#ads" },
        { label: "PACKAGING", url: "branding.html#packaging" }
      ]
    },

    socialMedia: {
      title: "Social Media",
      links: [
        { label: "Facebook", url: "https://facebook.com/africana", icon: "facebook" },
        {
          label: "Instagram", icon: "instagram",
          accounts: [
            { label: "Africana Branding", url: "https://instagram.com/africana_branding" },
            { label: "Africana Tech", url: "https://instagram.com/africana_tech" }
          ]
        },
        {
          label: "TikTok", icon: "tiktok",
          accounts: [
            { label: "Africana Branding", url: "https://tiktok.com/@africana_branding" },
            { label: "Africana Tech", url: "https://tiktok.com/@africana_tech" }
          ]
        },
        { label: "LinkedIn", url: "https://linkedin.com/company/africana", icon: "linkedin" }
      ]
    },

    getInTouch: {
      title: "Get In Touch",
      phone: "+255 798 010 073",
      email: "info@africana.co.tz",
      address: "Arusha, Tanzania",
      hours: "Mon – Sat: 8:00 AM – 6:00 PM"
    },

    copyright: `© ${new Date().getFullYear()} Africana. All rights reserved.`
  };

  /* ============================================================
     ICONS
     ============================================================ */
  const icons = {
    facebook: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    instagram: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z"/></svg>`,
    tiktok: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    linkedin: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    phone: `<svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>`,
    email: `<svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.236-8 5.333-8-5.333V6.001l8 5.333 8-5.333v2.235z"/></svg>`,
    address: `<svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.25 6.62 11.66 6.9 11.93a.87.87 0 0 0 1.2 0c.28-.27 6.9-6.68 6.9-11.93A7.5 7.5 0 0 0 12 2zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`,
    hours: `<svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-2V7h2v5.5l3.5 2.1-1 1.7-2.5-1.5V13z"/></svg>`
  };

  /* ============================================================
     BUILDERS
     ============================================================ */
  const linkCls =
    "inline-block text-[0.84rem] text-brandWhite/60 no-underline transition-all duration-200 " +
    "hover:text-yellow-400 hover:pl-1 " +
    "max-[620px]:text-[0.8rem] max-[380px]:text-[0.75rem]";

  const buildLinkList = (links) =>
    links.map(l => `<li><a href="${l.url}" class="${linkCls}">${l.label}</a></li>`).join('');

  const buildSocialList = (links) =>
    links.map(l => {
      const badge =
        "flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-md " +
        "bg-white/10 text-brandWhite transition-all duration-200 " +
        "group-hover/lnk:bg-yellow-400 group-hover/lnk:text-brandBlack group-hover/lnk:scale-110 " +
        "max-[620px]:h-6 max-[620px]:w-6";

      const inner = `
        <span class="${badge}">${icons[l.icon] || ''}</span>
        <span>${l.label}</span>`;

      const itemCls =
        "group/lnk flex cursor-pointer items-center gap-2.5 text-[0.84rem] text-brandWhite/60 " +
        "no-underline transition-colors hover:text-yellow-400 max-[620px]:text-[0.8rem]";

      if (l.accounts && l.accounts.length) {
        return `<li><a href="javascript:void(0)" class="${itemCls}" data-af-popover="${l.icon}">${inner}</a></li>`;
      }
      return `<li><a href="${l.url}" target="_blank" rel="noopener noreferrer" class="${itemCls}">${inner}</a></li>`;
    }).join('');

  /* ============================================================
     POPOVER
     ============================================================ */
  const avatarBg = {
    instagram: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
    tiktok: "bg-brandBlack",
  };

  function buildPopover(socialKey) {
    const data = config.socialMedia.links.find(l => l.icon === socialKey && l.accounts);
    const accounts = data ? data.accounts : [];

    const pop = document.createElement('div');
    pop.className =
      "af-ig-popover fixed z-[99999] w-[168px] rounded-[10px] bg-brandWhite p-[5px] " +
      "shadow-[0_10px_24px_rgba(0,0,0,0.5),0_2px_5px_rgba(0,0,0,0.3)] " +
      "origin-bottom max-[620px]:w-[155px]";
    pop.style.fontFamily = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
    pop.style.opacity = "0";
    pop.style.transform = "translateY(5px) scale(0.95)";
    pop.style.pointerEvents = "none";
    pop.style.transition = "opacity 0.15s ease, transform 0.15s ease";
    pop.setAttribute('role', 'menu');

    pop.innerHTML = `
      <div class="af-ig-popover-arrow absolute -bottom-1.5 left-[var(--arrow-x,50%)] h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm bg-brandWhite"></div>
      <div class="flex flex-col gap-0.5">
        ${accounts.map(acc => `
          <a href="${acc.url}" target="_blank" rel="noopener noreferrer"
             class="flex items-center gap-2 rounded-[7px] px-2 py-1.5 text-brandBlack no-underline transition-colors hover:bg-brandBlack/10"
             role="menuitem">
            <span class="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full text-brandWhite ${avatarBg[socialKey] || 'bg-brandBlack'}">
              ${icons[socialKey].replace('w-3.5 h-3.5', 'w-3 h-3')}
            </span>
            <span class="flex-1 truncate text-[0.76rem] font-semibold text-brandBlack">${acc.label}</span>
          </a>
        `).join('')}
      </div>
    `;
    return pop;
  }

  let activePopover = null;
  let activeTrigger = null;

  function openPopover(trigger, socialKey) {
    closePopover();
    activeTrigger = trigger;
    activePopover = buildPopover(socialKey);
    document.body.appendChild(activePopover);

    const rect = trigger.getBoundingClientRect();
    const popRect = activePopover.getBoundingClientRect();
    const gap = 8, margin = 8;

    let left = rect.left;
    let top = rect.top - popRect.height - gap;

    if (left + popRect.width > window.innerWidth - margin) {
      left = window.innerWidth - popRect.width - margin;
    }
    if (left < margin) left = margin;

    const arrow = activePopover.querySelector('.af-ig-popover-arrow');

    if (top < margin) {
      top = rect.bottom + gap;
      arrow.classList.remove('-bottom-1.5');
      arrow.classList.add('-top-1.5');
    }

    activePopover.style.left = left + 'px';
    activePopover.style.top = top + 'px';
    activePopover.style.setProperty('--arrow-x', ((rect.left + rect.width / 2) - left) + 'px');

    requestAnimationFrame(() => {
      activePopover.style.opacity = '1';
      activePopover.style.transform = 'translateY(0) scale(1)';
      activePopover.style.pointerEvents = 'auto';
    });
  }

  function closePopover() {
    if (!activePopover) return;
    const el = activePopover;
    activePopover = null;
    el.style.opacity = '0';
    el.style.transform = 'translateY(5px) scale(0.95)';
    el.style.pointerEvents = 'none';
    setTimeout(() => el.remove(), 150);
    activeTrigger = null;
  }

  function bindPopoverEvents() {
    document.querySelectorAll('[data-af-popover]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const key = btn.getAttribute('data-af-popover');
        if (activeTrigger === btn) closePopover();
        else openPopover(btn, key);
      });
    });

    document.addEventListener('click', (e) => {
      if (!activePopover) return;
      if (e.target.closest('.af-ig-popover')) return;
      if (e.target.closest('[data-af-popover]')) return;
      closePopover();
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePopover(); });
    window.addEventListener('scroll', closePopover, true);
    window.addEventListener('resize', closePopover);
  }

  /* ============================================================
     FOOTER
     ============================================================ */
  function createFooter() {
    const footer = document.createElement('footer');

    footer.className =
      "af-footer w-full overflow-visible border-t-[3px] border-yellow-400 " +
      "bg-brandBlack pt-9 pb-3.5 text-brandWhite font-sans";

    const headingCls =
      "relative mb-3 flex items-start pb-2.5 text-[0.92rem] font-bold uppercase tracking-wide text-brandWhite " +
      "max-[620px]:mb-2.5 max-[620px]:text-[0.85rem] max-[380px]:text-[0.78rem]";
    const headingUnderline = '<span class="absolute bottom-0 left-0 h-0.5 w-[30px] bg-yellow-400"></span>';

    const colCls = "flex h-full min-w-0 flex-col";
    const colCardMobile = "max-[620px]:rounded-lg max-[620px]:bg-white/5 max-[620px]:p-3 max-[380px]:p-2";

    const listCls = "m-0 flex list-none flex-col gap-[7px] p-0";

    const contactItemCls =
      "flex items-start gap-2.5 text-[0.84rem] leading-[1.45] text-brandWhite/60 no-underline transition-colors " +
      "hover:text-yellow-400 max-[620px]:text-[0.8rem]";
    const contactIconCls =
      "mt-px flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-white/10 text-brandWhite transition-colors " +
      "group-hover/ct:bg-yellow-400 group-hover/ct:text-brandBlack max-[620px]:h-[22px] max-[620px]:w-[22px]";

    footer.innerHTML = `
      <div class="mx-auto w-full max-w-full px-4 max-[820px]:px-3 max-[620px]:px-2 max-[380px]:px-1.5">

        <div class="grid w-full items-start gap-x-5 gap-y-6 border-b border-white/10 pb-7
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.1fr_1.3fr]
                    lg:gap-x-6
                    max-[620px]:gap-x-3 max-[620px]:gap-y-[18px]
                    max-[380px]:gap-x-2 max-[380px]:gap-y-3.5">

          <!-- 1. About Africana -->
          <div class="${colCls} ${colCardMobile} col-span-2 md:col-span-3 lg:col-span-1">
            <h3 class="${headingCls}">${config.about.title}${headingUnderline}</h3>
            <p class="mb-3.5 text-[0.85rem] leading-[1.55] text-brandWhite/60 max-[620px]:mb-2.5 max-[620px]:text-[0.82rem]">
              ${config.about.text}
            </p>
            <a href="${config.about.officialWebsite}" target="_blank" rel="noopener noreferrer"
               class="inline-block self-start rounded-md bg-yellow-400 px-4 py-2.5 text-[0.83rem] font-bold text-brandBlack
                      shadow-[0_2px_12px_rgba(250,204,21,0.35)] transition-all duration-200
                      hover:-translate-y-0.5 hover:bg-yellow-300
                      max-[620px]:w-full max-[620px]:text-center">
              ${config.about.officialWebsiteLabel}
            </a>
          </div>

          <!-- 2. Quick Links -->
          <div class="${colCls} ${colCardMobile}">
            <h3 class="${headingCls}">${config.quickLinks.title}${headingUnderline}</h3>
            <ul class="${listCls}">${buildLinkList(config.quickLinks.links)}</ul>
          </div>

          <!-- 3. Web Services -->
          <div class="${colCls} ${colCardMobile}">
            <h3 class="${headingCls}">${config.webServices.title}${headingUnderline}</h3>
            <ul class="${listCls}">${buildLinkList(config.webServices.links)}</ul>
          </div>

          <!-- 4. Branding -->
          <div class="${colCls} ${colCardMobile}">
            <h3 class="${headingCls}">${config.branding.title}${headingUnderline}</h3>
            <ul class="${listCls}">${buildLinkList(config.branding.links)}</ul>
          </div>

          <!-- 5. Social Media -->
          <div class="${colCls} ${colCardMobile}">
            <h3 class="${headingCls}">${config.socialMedia.title}${headingUnderline}</h3>
            <ul class="${listCls}">${buildSocialList(config.socialMedia.links)}</ul>
          </div>

          <!-- 6. Get In Touch -->
          <div class="${colCls} ${colCardMobile} col-span-2 md:col-span-3 lg:col-span-1">
            <h3 class="${headingCls}">${config.getInTouch.title}${headingUnderline}</h3>
            <ul class="${listCls}">
              <li>
                <a href="tel:${config.getInTouch.phone.replace(/\s+/g, '')}" class="group/ct ${contactItemCls}">
                  <span class="${contactIconCls}">${icons.phone}</span>
                  <span>${config.getInTouch.phone}</span>
                </a>
              </li>
              <li>
                <a href="mailto:${config.getInTouch.email}" class="group/ct ${contactItemCls}">
                  <span class="${contactIconCls}">${icons.email}</span>
                  <span>${config.getInTouch.email}</span>
                </a>
              </li>
              <li>
                <span class="${contactItemCls} cursor-default">
                  <span class="${contactIconCls.replace(/group-hover\/ct:[^\s]+/g, '')}">${icons.address}</span>
                  <span>${config.getInTouch.address}</span>
                </span>
              </li>
              <li>
                <span class="${contactItemCls} cursor-default">
                  <span class="${contactIconCls.replace(/group-hover\/ct:[^\s]+/g, '')}">${icons.hours}</span>
                  <span>${config.getInTouch.hours}</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Copyright -->
        <div class="pt-4 text-center text-[0.8rem] text-brandWhite/40">
          <p class="m-0">${config.copyright}</p>
        </div>
      </div>
    `;
    return footer;
  }

  function init() {
    if (document.querySelector('.af-footer')) return;
    const footer = createFooter();
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) placeholder.appendChild(footer);
    else document.body.appendChild(footer);
    bindPopoverEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AfricanaFooterConfig = config;
})();