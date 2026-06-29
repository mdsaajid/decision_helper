// ==========================================================================
// DECISION HELPER — ADVANCED INTERACTIONS, THEMES, AND POLL SIMULATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ─── 1. 3D PARALLAX PERSPECTIVE MESH CANVAS ──────────────────────────────
  const canvas = document.getElementById('bg-3d-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    // Resize handler
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Create 3D points
    const pointsCount = 45;
    const points = [];
    for (let i = 0; i < pointsCount; i++) {
      points.push({
        x: Math.random() * 1600 - 800,
        y: Math.random() * 1600 - 800,
        z: Math.random() * 1600 - 800,
        // Base drift speeds
        dx: Math.random() * 0.4 - 0.2,
        dy: Math.random() * 0.4 - 0.2,
        dz: Math.random() * 0.4 - 0.2
      });
    }

    const fov = 450;

    function render3D() {
      // Clean canvas
      ctx.clearRect(0, 0, width, height);

      const scrolled = window.pageYOffset;
      // Scroll-based rotation angles + subtle auto-rotation over time
      const angleY = scrolled * 0.0008 + Date.now() * 0.00004;
      const angleX = scrolled * 0.0004 + Date.now() * 0.00002;

      // Projection properties
      const projected = [];
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#FF3366';
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#8B5CF6';

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        // Dynamic continuous slow drift
        p.x += p.dx;
        p.y += p.dy;
        p.z += p.dz;
        
        // Boundary reset
        if (Math.abs(p.x) > 800) p.dx *= -1;
        if (Math.abs(p.y) > 800) p.dy *= -1;
        if (Math.abs(p.z) > 800) p.dz *= -1;

        // 3D Rotation Y
        let x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
        let z1 = p.x * Math.sin(angleY) + p.z * Math.cos(angleY);

        // 3D Rotation X
        let y1 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = p.y * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Camera distance shift based on scroll (z depth parallax zoom)
        const camZ = z2 + 900 + (scrolled * 0.05);

        if (camZ > 50) {
          const scale = fov / camZ;
          const projX = x1 * scale + width / 2;
          const projY = y1 * scale + height / 2;

          projected.push({ x: projX, y: projY, z: camZ });
        }
      }

      // Draw projected lines
      ctx.lineWidth = 1.0;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          // Distance in 2D projection space
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 185) {
            const alpha = (1 - dist / 185) * 0.38;
            ctx.strokeStyle = i % 2 === 0 ? primaryColor : accentColor;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1.0;

      // Draw projected points with glow halos
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const size = Math.max(1.8, (fov / p.z) * 2.8);
        ctx.fillStyle = i % 2 === 0 ? primaryColor : accentColor;

        // Faint glowing outer halo
        ctx.globalAlpha = 0.28;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Solid inner core
        ctx.globalAlpha = 0.88;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      requestAnimationFrame(render3D);
    }

    requestAnimationFrame(render3D);
  }

  // ─── 2. SCROLL PROGRESS BAR & PARALLAX BLOBS ──────────────────────────────
  const scrollProgress = document.getElementById('scroll-progress');
  const blobPurple = document.querySelector('.blob-purple');
  const blobPink = document.querySelector('.blob-pink');
  const blobCyan = document.querySelector('.blob-cyan');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Progress bar
    if (totalHeight > 0 && scrollProgress) {
      const progress = (scrolled / totalHeight) * 100;
      scrollProgress.style.width = `${progress}%`;
    }

    // Parallax background blobs
    if (blobPurple) {
      blobPurple.style.transform = `translate3d(0, ${scrolled * 0.25}px, 0)`;
    }
    if (blobPink) {
      blobPink.style.transform = `translate3d(0, ${scrolled * -0.15}px, 0) scale(${1 + scrolled * 0.00015})`;
    }
    if (blobCyan) {
      blobCyan.style.transform = `translate3d(0, ${scrolled * 0.12}px, 0)`;
    }
  }, { passive: true });

  // ─── 3. NAVBAR SHRINK ON SCROLL ───────────────────────────────────────────
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.pageYOffset > 50);
    }
  }, { passive: true });

  // ─── 4. HAMBURGER MENU TOGGLE ─────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    // Close menu when navigation links are clicked
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── 5. THEME TOGGLER (DARK / LIGHT MODE) ─────────────────────────────────
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ─── 6. INTERACTIVE VOTE POLL SIMULATION ──────────────────────────────────
  const pollContainer = document.getElementById('interactive-poll');
  const totalVotesEl = document.getElementById('poll-total-votes');
  const consensusEl = document.getElementById('poll-consensus');
  const toastFeedback = document.getElementById('vote-toast');
  let hasUserVoted = false;

  if (pollContainer) {
    const options = pollContainer.querySelectorAll('.mockup-option');
    options.forEach(option => {
      option.addEventListener('click', () => {
        if (hasUserVoted) return; // Prevent multiple votes in mock poll
        hasUserVoted = true;

        const selectedOption = option.getAttribute('data-option');
        const votes = parseInt(option.getAttribute('data-votes'));
        
        // Trigger simulated haptic click vibration
        if (navigator.vibrate) {
          navigator.vibrate(80); // Vibrate 80ms on supporting mobile browsers
        }

        // Show toast notification feedback
        if (toastFeedback) {
          toastFeedback.classList.add('show');
          setTimeout(() => {
            toastFeedback.classList.remove('show');
          }, 3000);
        }

        // Update counts & styles
        options.forEach(opt => {
          opt.classList.add('voted');
          const isCurrent = opt.getAttribute('data-option') === selectedOption;
          const currentVotes = parseInt(opt.getAttribute('data-votes'));
          const optTotal = isCurrent ? currentVotes + 1 : currentVotes;
          const grandTotal = 61; // 60 + 1 new vote

          // Set recalculated width to options
          const percentVal = Math.round((optTotal / grandTotal) * 100);
          const bar = opt.querySelector('.progress-bar');
          if (bar) bar.style.width = `${percentVal}%`;

          // Update percentages text
          const percentageText = opt.querySelector('.option-percentage');
          if (percentageText) {
            percentageText.textContent = `${percentVal}% · ${optTotal} votes`;
          }

          // Highlight winner
          if (percentVal >= 50) {
            opt.classList.add('winning');
          } else {
            opt.classList.remove('winning');
          }
        });

        // Update total votes label
        if (totalVotesEl) {
          totalVotesEl.innerHTML = `
            <svg class="opt-svg-icon" style="width:13px;height:13px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            61 Votes
          `;
        }

        // Recalculate consensus rating
        if (consensusEl) {
          if (selectedOption === 'A') {
            consensusEl.innerHTML = `
              <svg class="opt-svg-icon" style="width:13px;height:13px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Strong Consensus
            `;
            consensusEl.className = 'consensus-badge high';
          } else {
            consensusEl.innerHTML = `
              <svg class="opt-svg-icon" style="width:13px;height:13px;margin-right:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Split Consensus
            `;
            consensusEl.className = 'consensus-badge success';
          }
        }
      });
    });
  }

  // ─── 7. SCROLL-REVEAL TRIGGER (IntersectionObserver) ──────────────────────
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ─── 8. STEP STAGGER ANIMATIONS ───────────────────────────────────────────
  const stepCards = document.querySelectorAll('.step-card-wrap');
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 150);
        stepObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  stepCards.forEach(card => stepObserver.observe(card));

  // ─── 9. NUMBERS COUNTER ANIME ─────────────────────────────────────────────
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Expo ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const current = target * easedProgress;
      el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  const counterElements = document.querySelectorAll('[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counterElements.forEach(el => counterObserver.observe(el));

  // ─── 10. DOWNLOAD CARDS HOVER 3D TILT ─────────────────────────────────────
  const downloadCards = document.querySelectorAll('.download-card');
  downloadCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Max 6 degrees rotation tilt
      const tiltX = (y / rect.height) * 6;
      const tiltY = -(x / rect.width) * 6;
      card.style.transform = `translateY(-8px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ─── 11. FLOATING BACK TO TOP ─────────────────────────────────────────────
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('show', window.pageYOffset > 400);
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── 12. ACTIVE NAV LINK HIGHLIGHT ────────────────────────────────────────
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
  }, { threshold: 0.4, rootMargin: '-80px 0px -40px 0px' });

  sections.forEach(section => sectionObserver.observe(section));
});
