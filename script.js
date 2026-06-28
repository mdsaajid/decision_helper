// ==========================================================================
// DECISION HELPER — UPGRADED & INTEGRATED INTERACTIONS & ANIMATIONS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ─── 1. FLOATING PARTICLES ────────────────────────────────────────────────
  const particleContainer = document.getElementById('particles');
  if (particleContainer) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 15 + 12}s;
        animation-delay:${Math.random() * 15}s;
        opacity:0;
      `;
      particleContainer.appendChild(p);
    }
  }

  // ─── 2. SCROLL PROGRESS BAR ───────────────────────────────────────────────
  const scrollBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0 && scrollBar) {
      scrollBar.style.width = `${(window.pageYOffset / total) * 100}%`;
    }
  }, { passive: true });

  // ─── 3. NAVBAR SHRINK ON SCROLL ───────────────────────────────────────────
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.pageYOffset > 60);
  }, { passive: true });

  // ─── 4. HAMBURGER MENU ────────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    // Close on nav link click
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── 5. SCROLL REVEAL — IntersectionObserver ──────────────────────────────
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ─── 6. COUNTER ANIMATION ─────────────────────────────────────────────────
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;
    const isDecimal = target % 1 !== 0;
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;
      el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));

  // ─── 7. MOCKUP PROGRESS BARS ANIMATION ────────────────────────────────────
  function animateBars() {
    document.querySelectorAll('.mockup-option').forEach(opt => {
      const bar = opt.querySelector('.progress-bar');
      const pct = opt.dataset.percent || 0;
      setTimeout(() => { bar.style.width = pct + '%'; }, 400);
    });
  }

  const mockup = document.querySelector('.mockup-card');
  if (mockup) {
    const mockupObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { animateBars(); mockupObserver.disconnect(); }
    }, { threshold: 0.3 });
    mockupObserver.observe(mockup);
    // Also run immediately since hero is visible on load
    setTimeout(animateBars, 600);
  }

  // ─── 8. FEATURE CARDS STAGGER ─────────────────────────────────────────────
  const featureCards = document.querySelectorAll('.feature-card');
  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        featureObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  featureCards.forEach(card => featureObserver.observe(card));

  // ─── 9. STEP CARDS STAGGER ────────────────────────────────────────────────
  const stepCards = document.querySelectorAll('.step-card');
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 150);
        stepObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  stepCards.forEach(card => stepObserver.observe(card));

  // ─── 10. DOWNLOAD CARDS HOVER TILT ────────────────────────────────────────
  document.querySelectorAll('.download-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / rect.height) * 6;
      const tiltY = -(x / rect.width) * 6;
      card.style.transform = `translateY(-6px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ─── 11. BACK TO TOP ──────────────────────────────────────────────────────
  const backBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (backBtn) backBtn.classList.toggle('show', window.pageYOffset > 400);
  }, { passive: true });
  if (backBtn) {
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ─── 12. ACTIVE NAV LINK HIGHLIGHT ON SCROLL ──────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.btn-cta)');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5, rootMargin: '-60px 0px -40px 0px' });

  sections.forEach(section => sectionObserver.observe(section));
});
