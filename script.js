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
    phone: '+255 672 743 065',
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

  const getCurrentFile = () => {
    const p = window.location.pathname.split('/').pop();
    return p === '' ? 'index.html' : p;
  };

  /* =========================================================
     TOP INFO BAR (brandBlack + brandGreen icons)
     ========================================================= */
  function buildInfoBar() {
    return `
    <div class="w-full bg-brandBlack text-brandWhite">
      <div class="w-full px-4 sm:px-6 lg:px-8">

        <!-- Full layout (md and up) -->
        <div class="hidden h-10 items-center justify-between text-[13px] md:flex">
          <div class="flex items-center gap-6">
            <a href="https://maps.google.com/?q=${encodeURIComponent(COMPANY.location)}"
               target="_blank" rel="noopener"
               class="flex items-center gap-2 text-brandWhite/70 transition-colors hover:text-brandGreen">
              <svg class="h-3.5 w-3.5 text-brandGreen" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-7-5.7-7-11a7 7 0 1 1 14 0c0 5.3-7 11-7 11Z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>
              ${COMPANY.location}
            </a>
            <span class="h-4 w-px bg-brandWhite/15"></span>
            <a href="mailto:${COMPANY.email}"
               class="flex items-center gap-2 text-brandWhite/70 transition-colors hover:text-brandGreen">
              <svg class="h-3.5 w-3.5 text-brandGreen" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2.5"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="m3 7 9 6 9-6"/>
              </svg>
              ${COMPANY.email}
            </a>
            <span class="h-4 w-px bg-brandWhite/15"></span>
            <a href="tel:${COMPANY.phone.replace(/\s+/g, '')}"
               class="flex items-center gap-2 text-brandWhite/70 transition-colors hover:text-brandGreen">
              <svg class="h-3.5 w-3.5 text-brandGreen" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>
              </svg>
              ${COMPANY.phone}
            </a>
          </div>

          <div class="flex items-center gap-1.5">
            <span class="mr-1 text-[11px] font-semibold uppercase tracking-wider text-brandWhite/50">Follow us</span>

            <a href="${COMPANY.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook"
               class="grid h-7 w-7 place-items-center rounded-full bg-brandWhite/10 text-brandWhite transition-colors hover:bg-brandGreen">
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.1H7.5v3h2.7V21h3.3Z"/></svg>
            </a>
            <a href="${COMPANY.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram"
               class="grid h-7 w-7 place-items-center rounded-full bg-brandWhite/10 text-brandWhite transition-colors hover:bg-brandGreen">
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="${COMPANY.social.twitter}" target="_blank" rel="noopener" aria-label="Twitter / X"
               class="grid h-7 w-7 place-items-center rounded-full bg-brandWhite/10 text-brandWhite transition-colors hover:bg-brandGreen">
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.2L4.7 21H1.5l7.5-8.6L1 3h6.7l4.5 5.7L17.5 3Zm-1.1 16h1.8L7.7 4.9H5.8L16.4 19Z"/></svg>
            </a>
            <a href="${COMPANY.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"
               class="grid h-7 w-7 place-items-center rounded-full bg-brandWhite/10 text-brandWhite transition-colors hover:bg-brandGreen">
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/></svg>
            </a>
          </div>
        </div>

        <!-- Compact layout (mobile) -->
           <div class="flex w-full items-center gap-2 overflow-hidden py-2 text-[10px] sm:gap-3 sm:text-[11px] md:hidden">
          <a href="tel:${COMPANY.phone.replace(/\s+/g, '')}"
             class="flex min-w-0 flex-1 items-center gap-1 whitespace-nowrap text-brandWhite/70">
              <svg class="h-3.5 w-3.5 text-brandGreen" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>
              </svg>
              ${COMPANY.phone}
          </a>
          <a href="mailto:${COMPANY.email}"
             class="flex min-w-0 flex-1 items-center gap-1 truncate text-brandWhite/70">
            <svg class="h-3.5 w-3.5 text-brandGreen" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2.5"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="m3 7 9 6 9-6"/>
            </svg>
            ${COMPANY.email}
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
         class="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium transition
                ${active
        ? 'bg-brandBlue/10 text-brandBlue font-semibold'
        : 'text-brandBlack/80 hover:bg-brandBlack/5'}">
        <span>${item.label}</span>
        <svg class="h-4 w-4 opacity-40" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"/>
        </svg>
      </a>`;
  }

  /* =========================================================
     MAIN HEADER BAR (logo · nav · quotation · hamburger)
     NO WhatsApp button — removed as requested
     ========================================================= */
  function buildMainHeader() {
    const current = getCurrentFile();
    const desktopLinks = NAV.map(i => desktopLink(i, current)).join('');
    const mobileLinks = NAV.map(i => mobileLink(i, current)).join('');

    return `
    <div class="w-full border-b border-brandBlack/10 bg-white/95 backdrop-blur-xl">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between gap-3 lg:h-[72px]">

          <!-- Logo -->
          <a href="index.html" class="group flex shrink-0 items-center gap-3">
            <span class="relative grid h-10 w-10 sm:h-11 sm:w-11 place-items-center overflow-hidden rounded-xl
                         bg-brandBlue text-lg font-extrabold text-white shadow-lg
                         transition-transform group-hover:scale-105">
              A
              <span class="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-brandGreen/60 blur-md"></span>
              <span class="absolute -bottom-2 -left-2 h-5 w-5 rounded-full bg-brandWhite/40 blur-md"></span>
            </span>
            <span class="leading-tight">
              <span class="block text-[13px] font-extrabold tracking-tight text-brandBlack sm:text-base">
                Africana <span class="text-brandBlue">Tech</span>
                <span class="text-brandGreen"> &amp; </span>
                <span class="text-brandBlack">Branding</span>
              </span>
              <span class="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-brandBlack/40 sm:block">
                ${COMPANY.tagline}
              </span>
            </span>
          </a>

          <!-- Desktop nav -->
          <nav class="hidden items-center gap-1 lg:flex">
            ${desktopLinks}
          </nav>

          <!-- Right actions -->
          <div class="flex shrink-0 items-center gap-2">

            <!-- Quotation button — icon-only on mobile, full on sm+ -->
            <a href="quotation.html"
               class="hidden items-center gap-2 rounded-xl bg-brandBlue
                      px-3 py-2 text-xs font-bold text-white
                      shadow-lg shadow-brandBlue/25 transition-colors hover:bg-brandBlue/90
                 sm:inline-flex sm:px-5 sm:py-2.5 sm:text-sm">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6M9 8h6M5 4h14v16H5z"/>
              </svg>
              <span class="hidden sm:inline">Quotation</span>
            </a>

            <!-- Hamburger -->
            <button id="menuBtn" type="button"
              class="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-brandBlack text-brandWhite
                     transition-colors hover:bg-brandBlue lg:hidden"
              aria-label="Open menu" aria-expanded="false">
              <svg id="menuIcon" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobileMenu"
             class="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out lg:hidden">
          <nav class="space-y-0.5 py-2">
            ${mobileLinks}
            <a href="quotation.html"
               class="flex items-center justify-between rounded-lg bg-brandBlue px-4 py-2.5
                      text-[15px] font-bold text-white shadow-md shadow-brandBlue/20
                      transition-colors hover:bg-brandBlue/90">
              <span>Quotation</span>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6M9 8h6M5 4h14v16H5z"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>`;
  }

  /* =========================================================
     FULL HEADER — fixed overlay
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
     SPACER — keeps body content below the fixed header
     ========================================================= */
  function adjustSpacer() {
    const header = document.getElementById('header');
    const spacer = document.getElementById('header-spacer');
    if (!header || !spacer) return;

    // Measure only when mobile menu is closed to avoid content jumps
    const menu = document.getElementById('mobileMenu');
    const menuOpen = menu && menu.classList.contains('max-h-\[600px\]');

    if (!menuOpen) {
      spacer.style.height = header.offsetHeight + 'px';
    }
  }

  /* =========================================================
     EVENTS
     ========================================================= */
  function bindEvents() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    const head = document.getElementById('header');

    if (btn && menu && icon) {
      btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('max-h-0');
        menu.classList.toggle('max-h-0', !isOpen);
        menu.classList.toggle('max-h-[600px]', isOpen);
        btn.setAttribute('aria-expanded', String(isOpen));

        icon.innerHTML = isOpen
          ? '<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>'
          : '<path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>';
      });

      menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          menu.classList.add('max-h-0');
          menu.classList.remove('max-h-[600px]');
          btn.setAttribute('aria-expanded', 'false');
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16"/>';
        });
      });
    }

    if (head) {
      const onScroll = () => head.classList.toggle('shadow-lg', window.scrollY > 8);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Keep spacer synced on resize / orientation change
    window.addEventListener('resize', adjustSpacer);
    window.addEventListener('orientationchange', adjustSpacer);
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    mount.innerHTML = buildHeader();
    bindEvents();

    // Size the spacer after the header renders
    requestAnimationFrame(() => {
      adjustSpacer();
      // Re-check once fonts / layout settle
      setTimeout(adjustSpacer, 200);
    });
  }

  return { init, COMPANY, NAV };
})();


/* ---------------------------------------------------------
   3. SELF-INITIALIZE
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
        { label: "Web Prices", url: "#web-prices" },
        { label: "Branding & Printing", url: "#branding-printing" },
        { label: "FAQs", url: "#faqs" },
        { label: "Terms & Conditions", url: "#terms" }
      ]
    },

    webServices: {
      title: "Web Services",
      links: [
        { label: "Website Design", url: "#web-design" },
        { label: "E-Commerce Stores", url: "#ecommerce" },
        { label: "Web Hosting", url: "#hosting" },
        { label: "SEO Optimization", url: "#seo" },
        { label: "Domain Registration", url: "#domains" }
      ]
    },

    branding: {
      title: "Branding",
      links: [
        { label: "Logo Design", url: "#logo-design" },
        { label: "Business Cards", url: "#business-cards" },
        { label: "Banners & Posters", url: "#banners" },
        { label: "T-Shirt Printing", url: "#tshirts" },
        { label: "Company Profile", url: "#company-profile" }
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
      phone: "+255 700 000 000",
      email: "info@africana.com",
      address: "123 Africana Street, Dar es Salaam, Tanzania",
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