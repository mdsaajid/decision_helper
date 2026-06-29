/* ==========================================================================
   DECISION HELPER — LIQUID GLASS & BENTO GRID STYLING SYSTEM
   ========================================================================== */

:root {
  /* Colors - Dark Theme (Default) */
  --bg-dark:        #080B16;
  --text-primary:   #FFFFFF;
  --text-secondary: #9EA8B6;
  --primary:        #FF3366;
  --primary-glow:   rgba(255, 51, 102, 0.15);
  --accent:         #8B5CF6;
  --accent-glow:    rgba(139, 92, 246, 0.15);
  --cyan:           #06B6D4;
  --cyan-glow:      rgba(6, 182, 212, 0.15);
  
  --primary-grad:   linear-gradient(135deg, #FF3366 0%, #8B5CF6 100%);
  --accent-grad:    linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
  
  --surface:        rgba(255, 255, 255, 0.03);
  --surface-hover:  rgba(255, 255, 255, 0.07);
  --border:         rgba(255, 255, 255, 0.08);
  --border-hover:   rgba(255, 255, 255, 0.18);
  
  --success:        #10B981;
  --success-glow:   rgba(16, 185, 129, 0.15);
  
  --radius-card:    24px;
  --radius-pill:    40px;
  --shadow-glow:    0 0 24px rgba(255, 51, 102, 0.25);
  --shadow-strong:  0 16px 40px rgba(0, 0, 0, 0.5);
  
  --transition:     all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: all 0.2s ease-out;
}

/* Light Theme Variables */
[data-theme="light"] {
  --bg-dark:        #F3F4F6;
  --text-primary:   #111827;
  --text-secondary: #4B5563;
  --primary:        #E11D48;
  --primary-glow:   rgba(225, 29, 72, 0.08);
  --accent:         #6D28D9;
  --accent-glow:    rgba(109, 40, 217, 0.08);
  --cyan:           #0891B2;
  --cyan-glow:      rgba(8, 145, 178, 0.08);
  
  --primary-grad:   linear-gradient(135deg, #E11D48 0%, #6D28D9 100%);
  --accent-grad:    linear-gradient(135deg, #6D28D9 0%, #0891B2 100%);
  
  --surface:        rgba(255, 255, 255, 0.65);
  --surface-hover:  rgba(255, 255, 255, 0.85);
  --border:         rgba(0, 0, 0, 0.06);
  --border-hover:   rgba(0, 0, 0, 0.12);
  
  --success:        #059669;
  --success-glow:   rgba(5, 150, 105, 0.08);
  
  --shadow-glow:    0 0 20px rgba(225, 29, 72, 0.15);
  --shadow-strong:  0 12px 30px rgba(0, 0, 0, 0.08);
}

/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: var(--bg-dark);
  color: var(--text-primary);
  overflow-x: hidden;
  position: relative;
  transition: background 0.5s ease, color 0.3s ease;
}
a { text-decoration: none; color: inherit; }
button { font-family: inherit; }

/* ── TYPOGRAPHY ── */
h1, h2, h3, h4 { font-family: 'Outfit', sans-serif; font-weight: 800; }
p { line-height: 1.7; color: var(--text-secondary); }
.gradient-text {
  background: var(--primary-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── ABSTRACT GRID BACKGROUND ── */
.grid-bg-overlay {
  position: fixed; inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: -2;
  pointer-events: none;
}
[data-theme="light"] .grid-bg-overlay {
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
}

/* ── SCROLL PROGRESS BAR ── */
.scroll-progress-container {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 4px; z-index: 9999;
}
.scroll-progress-bar {
  height: 100%; width: 0%;
  background: var(--primary-grad);
  box-shadow: 0 0 10px rgba(255,51,102,0.6);
  transition: width 0.08s linear;
}

/* ── GLOWING BACKGROUND BLOBS ── */
.blob-wrapper {
  position: fixed; inset: 0;
  z-index: -3; pointer-events: none;
  overflow: hidden;
}
.blob {
  position: absolute; border-radius: 50%;
  filter: blur(140px); opacity: 0.45;
  will-change: transform;
}
.blob-purple {
  width: 500px; height: 500px;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
  top: -100px; right: -100px;
}
.blob-pink {
  width: 550px; height: 550px;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  top: 50%; left: -200px;
}
.blob-cyan {
  width: 600px; height: 600px;
  background: radial-gradient(circle, var(--cyan) 0%, transparent 70%);
  bottom: -200px; right: -150px;
}

/* ── FLOATING PARTICLES CANVAS ── */
.particles-container {
  position: fixed; inset: 0;
  z-index: -1; pointer-events: none;
  overflow: hidden;
}
.particle {
  position: absolute; border-radius: 50%;
  background: var(--primary-grad);
  opacity: 0;
  animation: particleFly linear infinite;
}
@keyframes particleFly {
  0% { opacity: 0; transform: translateY(100vh) scale(0); }
  10% { opacity: 0.5; }
  90% { opacity: 0.15; }
  100% { opacity: 0; transform: translateY(-10vh) scale(1); }
}

/* ── NAVBAR / HEADER ── */
.header {
  position: fixed; top: 0; width: 100%; z-index: 1000;
  padding: 20px 0;
  background: rgba(8, 11, 22, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border);
  transition: var(--transition), background 0.3s ease;
}
.header.scrolled {
  padding: 12px 0;
  background: rgba(8, 11, 22, 0.93);
  box-shadow: var(--shadow-strong);
}
[data-theme="light"] .header {
  background: rgba(243, 244, 246, 0.7);
}
[data-theme="light"] .header.scrolled {
  background: rgba(243, 244, 246, 0.93);
}
.header-container {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.logo-wrapper {
  display: flex; align-items: center; gap: 12px;
  position: relative;
}
.logo-glow-ring {
  position: absolute; inset: -4px;
  background: var(--primary-grad);
  border-radius: 12px; filter: blur(8px);
  opacity: 0; transition: var(--transition);
}
.logo-wrapper:hover .logo-glow-ring { opacity: 0.45; }
.logo-img {
  width: 38px; height: 38px;
  object-fit: contain; border-radius: 10px;
  position: relative; z-index: 1;
}
.logo-text {
  font-family: 'Outfit', sans-serif;
  font-size: 22px; font-weight: 900;
  background: var(--primary-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative; z-index: 1;
}
.nav { display: flex; align-items: center; gap: 32px; }
.nav-link {
  color: var(--text-secondary);
  font-weight: 600; font-size: 14px;
  transition: color 0.25s ease; position: relative;
}
.nav-link::after {
  content: ''; position: absolute; bottom: -6px; left: 0;
  width: 0; height: 2px; background: var(--primary-grad);
  transition: width 0.3s ease;
}
.nav-link:hover { color: var(--text-primary); }
.nav-link:hover::after { width: 100%; }
.btn-cta {
  background: var(--primary-grad); color: #FFF !important;
  padding: 10px 24px; border-radius: var(--radius-pill);
  font-weight: 700; box-shadow: var(--shadow-glow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.btn-cta::after { display: none; }
.btn-cta:hover { transform: translateY(-2px); box-shadow: 0 0 30px rgba(255, 51, 102, 0.45); }
.opt-svg-icon {
  width: 16px; height: 16px;
  vertical-align: middle;
  margin-right: 6px;
  color: inherit;
  flex-shrink: 0;
  display: inline-block;
}
.option-name {
  display: inline-flex !important;
  align-items: center;
}
.consensus-badge {
  display: inline-flex !important;
  align-items: center;
}
.votes-total {
  display: inline-flex !important;
  align-items: center;
}
/* ── ELECTRIC BORDER ── */
.electric-border {
  position: relative;
  z-index: 1;
}
.electric-border::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(90deg, var(--primary), var(--accent), var(--cyan), var(--primary));
  background-size: 300% 300%;
  border-radius: inherit;
  z-index: -1;
  animation: electricFlow 4s linear infinite;
  opacity: 0.8;
  filter: blur(0.5px);
  transition: opacity 0.3s ease, filter 0.3s ease;
}
.electric-border:hover::before {
  opacity: 1;
  filter: blur(4px);
}
@keyframes electricFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Theme Switcher */
.nav-actions { display: flex; align-items: center; gap: 16px; }
.theme-toggle {
  background: var(--surface);
  border: 1px solid var(--border);
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-primary); cursor: pointer;
  transition: var(--transition);
}
.theme-toggle:hover {
  background: var(--surface-hover);
  border-color: var(--border-hover);
  transform: scale(1.05);
}
.theme-toggle .sun { display: none; width: 18px; height: 18px; }
.theme-toggle .moon { display: block; width: 18px; height: 18px; }
[data-theme="light"] .theme-toggle .sun { display: block; }
[data-theme="light"] .theme-toggle .moon { display: none; }

/* Hamburger */
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span {
  display: block; width: 22px; height: 2px;
  background: var(--text-secondary); border-radius: 2px;
  transition: var(--transition);
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── BUTTONS ── */
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 32px; border-radius: var(--radius-pill);
  font-weight: 700; font-size: 15px;
  transition: var(--transition); cursor: pointer; border: none;
}
.btn-primary {
  background: var(--primary-grad); color: #FFF;
  box-shadow: var(--shadow-glow);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 35px rgba(255, 51, 102, 0.45);
}
.btn-secondary {
  background: var(--surface); color: var(--text-primary);
  border: 1px solid var(--border);
}
.btn-secondary:hover {
  background: var(--surface-hover);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

/* ── HERO SECTION ── */
.hero { padding: 180px 0 100px; min-height: 100vh; display: flex; align-items: center; }
.hero-container {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: center;
}
.hero-content { display: flex; flex-direction: column; align-items: flex-start; }

/* Badge */
.badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--primary-glow); border: 1px solid rgba(255, 51, 102, 0.35);
  color: var(--primary); padding: 8px 18px; border-radius: var(--radius-pill);
  font-size: 12px; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 24px;
}
.badge-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--success); animation: pulse 2s ease infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
  50% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
}

/* Line reveal title */
.hero-title {
  font-size: clamp(40px, 5.5vw, 64px); line-height: 1.15;
  letter-spacing: -1.8px; margin-bottom: 24px;
  display: flex; flex-direction: column;
}
.title-line { display: block; overflow: hidden; }
.reveal-inner {
  display: block;
  animation: titleSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.hero-title .title-line:nth-child(2) .reveal-inner { animation-delay: 0.12s; }
@keyframes titleSlideIn {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.hero-description { font-size: 17px; margin-bottom: 36px; max-width: 500px; }
.hero-actions { display: flex; gap: 16px; margin-bottom: 48px; flex-wrap: wrap; }
.quick-stats { display: flex; align-items: center; gap: 28px; }
.stat-item { display: flex; flex-direction: column; }
.stat-number { font-family: 'Outfit', sans-serif; font-size: 28px; font-weight: 900; color: var(--text-primary); }
.stat-label { font-size: 11px; color: var(--text-secondary); margin-top: 2px; text-transform: uppercase; letter-spacing: 0.5px; }
.stat-divider { width: 1px; height: 38px; background: var(--border); }

/* Hero Visual & Interactive Poll */
.hero-visual { position: relative; display: flex; justify-content: center; align-items: center; }
.mockup-container { position: relative; }
.glass-card-glow {
  position: absolute; inset: -20px;
  background: radial-gradient(circle, var(--primary-glow) 0%, var(--accent-glow) 50%, transparent 70%);
  filter: blur(20px); pointer-events: none;
}
.float-card {
  animation: floatCard 6s ease-in-out infinite;
  position: relative; z-index: 2;
}
@keyframes floatCard {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(0.4deg); }
}

/* Glassmorphic Mockup Card */
.mockup-card {
  width: 350px; background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-card);
  padding: 24px; backdrop-filter: blur(20px);
  box-shadow: var(--shadow-strong); transition: border-color 0.3s ease;
}
[data-theme="light"] .mockup-card {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(0, 0, 0, 0.06);
}
.mockup-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.mockup-creator { display: flex; align-items: center; gap: 12px; }
.avatar-ring {
  padding: 2px; border-radius: 50%;
  background: var(--primary-grad);
}
.avatar {
  width: 34px; height: 34px; background: var(--bg-dark);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 14px; color: var(--text-primary);
}
.creator-name { font-size: 13px; font-weight: 700; }
.post-time { font-size: 10px; color: var(--text-secondary); }
.mockup-badge {
  background: var(--surface); border: 1px solid var(--border);
  padding: 5px 14px; border-radius: var(--radius-pill);
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
}
.mockup-question { font-size: 17px; margin-bottom: 6px; line-height: 1.35; }
.mockup-desc { font-size: 12px; margin-bottom: 20px; }

/* Interactive Poll Option Styling */
.mockup-options { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
.mockup-option {
  position: relative; padding: 14px 16px;
  background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border);
  border-radius: 12px; overflow: hidden; cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}
.mockup-option:hover {
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.04);
}
[data-theme="light"] .mockup-option {
  background: rgba(0, 0, 0, 0.02);
}
[data-theme="light"] .mockup-option:hover {
  background: rgba(0, 0, 0, 0.04);
}
.mockup-option.voted {
  border-color: var(--success);
}
.mockup-option.voted.winning {
  border-color: var(--primary);
  box-shadow: 0 0 16px var(--primary-glow);
}
.option-details {
  display: flex; justify-content: space-between; align-items: center;
  position: relative; z-index: 2; font-size: 13px; font-weight: 700;
}
.option-name { color: var(--text-primary); }
.option-percentage { color: var(--text-secondary); font-size: 12px; transition: color 0.3s ease; }
.mockup-option.winning .option-percentage { color: var(--primary); }

.progress-bar {
  position: absolute; inset: 0; width: 0%;
  background: rgba(255, 255, 255, 0.04); z-index: 1;
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.mockup-option.voted .progress-bar {
  background: rgba(16, 185, 129, 0.12);
}
.mockup-option.voted.winning .progress-bar {
  background: linear-gradient(90deg, var(--primary-glow), var(--accent-glow));
}
.selection-indicator {
  position: relative; z-index: 2; font-size: 12px; color: var(--success);
  font-weight: 900; opacity: 0; transform: scale(0.6);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mockup-option.voted .selection-indicator { opacity: 1; transform: scale(1); }

.mockup-footer { display: flex; justify-content: space-between; align-items: center; }
.votes-total { font-size: 12px; color: var(--text-secondary); }
.consensus-badge {
  font-size: 11px; font-weight: 700; padding: 5px 14px;
  border-radius: var(--radius-pill); border: 1px solid transparent;
  transition: all 0.3s ease;
}
.consensus-badge.high {
  background: var(--primary-glow); color: var(--primary);
  border-color: rgba(255, 51, 102, 0.25);
}
.consensus-badge.success {
  background: var(--success-glow); color: var(--success);
  border-color: rgba(16, 185, 129, 0.25);
}

/* Toast Success Popup */
.toast-feedback {
  position: absolute; bottom: -20px; left: 50%;
  transform: translate(-50%, 20px); opacity: 0;
  background: var(--bg-dark); border: 1px solid var(--success);
  padding: 10px 20px; border-radius: var(--radius-pill);
  font-size: 12px; font-weight: 700; color: var(--text-primary);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.15);
  display: flex; align-items: center; gap: 8px; z-index: 10;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}
.toast-feedback.show {
  opacity: 1; transform: translate(-50%, 0);
}

/* Scroll down indicator */
.scroll-down-container { grid-column: 1/span 2; display: flex; justify-content: center; margin-top: 60px; }
.scroll-btn { display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--text-secondary); font-size: 10px; font-weight: 800; letter-spacing: 2px; transition: color 0.3s; }
.scroll-btn:hover { color: var(--text-primary); }
.mouse { width: 26px; height: 44px; border: 2px solid var(--border); border-radius: 13px; display: flex; justify-content: center; background: rgba(255, 255, 255, 0.02); }
.wheel { width: 4px; height: 8px; background: var(--primary); border-radius: 2px; margin-top: 6px; animation: scrollWheel 1.8s ease-in-out infinite; }
@keyframes scrollWheel { 0%, 100% { transform: translateY(0); opacity: 1; } 50% { transform: translateY(8px); opacity: 0; } }

/* ── SECTION COMMONS ── */
.section-header { text-align: center; max-width: 640px; margin: 0 auto 60px; }
.section-eyebrow { font-size: 13px; font-weight: 800; color: var(--primary); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; }
.section-title { font-size: clamp(28px, 4vw, 44px); line-height: 1.2; margin-bottom: 14px; }
.section-subtitle { font-size: 16px; color: var(--text-secondary); }

/* ── BENTO GRID FEATURES ── */
.features { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(220px, auto);
  gap: 24px;
}
.bento-item {
  position: relative; overflow: hidden;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-card); padding: 32px;
  display: flex; flex-direction: column; justify-content: space-between;
  transition: border-color 0.4s, transform 0.4s, box-shadow 0.4s;
}
.bento-item:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 51, 102, 0.35);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}
.bento-glow {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(circle at 0% 0%, var(--primary-glow) 0%, transparent 60%);
  opacity: 0; transition: opacity 0.5s ease;
}
.bento-item:hover .bento-glow { opacity: 1; }
.bento-icon { margin-bottom: 16px; display: flex; align-items: center; }
.bento-svg-icon { width: 32px; height: 32px; color: var(--primary); }
.bento-title { font-size: 19px; margin-bottom: 10px; font-family: 'Outfit', sans-serif; }
.bento-desc { font-size: 14px; line-height: 1.6; }

/* Bento Featured Larger item */
.featured-bento {
  grid-column: span 2;
  grid-row: span 2;
  min-height: 460px;
}
.featured-bento .bento-content { max-width: 480px; }

/* Simulator Previews inside Bento Box */
.swipe-simulator {
  position: relative; width: 100%; height: 200px;
  margin-top: 32px; display: flex; justify-content: center;
  align-items: center; overflow: hidden;
}
.simulator-card {
  position: absolute; width: 140px; height: 180px;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 16px; display: flex; justify-content: center;
  align-items: center; font-weight: 700; font-size: 13px;
  box-shadow: var(--shadow-strong);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s;
}
.simulator-card.left-swipe {
  transform: rotate(-12deg) translateX(-80px) scale(0.9); opacity: 0.6;
  border-color: var(--accent); color: var(--accent);
}
.simulator-card.right-swipe {
  transform: rotate(12deg) translateX(80px) scale(0.9); opacity: 0.6;
  border-color: var(--success); color: var(--success);
}
.simulator-card.main-card {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--primary); color: var(--text-primary);
  z-index: 2;
  animation: simSwipe 4s ease-in-out infinite;
}
@keyframes simSwipe {
  0%, 100% { transform: translate(0, 0) rotate(0); }
  25% { transform: translate(-30px, -10px) rotate(-6deg); }
  75% { transform: translate(30px, -10px) rotate(6deg); }
}

.glass-simulator {
  position: relative; width: 100%; height: 210px;
  margin-top: 24px; border-radius: 18px;
  overflow: hidden; border: 1px solid var(--border);
  background: rgba(0,0,0,0.1);
  display: flex; align-items: center; justify-content: center;
}
.glass-sim-content {
  width: 92%; height: 86%;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--border);
  border-radius: 12px; padding: 14px;
  display: flex; flex-direction: column; gap: 8px;
}
[data-theme="light"] .glass-sim-content {
  background: rgba(0, 0, 0, 0.02);
}
.sim-card-header {
  display: flex; align-items: center; gap: 5px;
}
.sim-dot {
  width: 6px; height: 6px; border-radius: 50%;
}
.sim-dot.red { background: #EF4444; }
.sim-dot.yellow { background: #F59E0B; }
.sim-dot.green { background: #10B981; }
.sim-title {
  font-size: 10px; font-weight: 700; color: var(--text-secondary);
  margin-left: auto; letter-spacing: 0.5px;
}
.sim-poll-card {
  display: flex; flex-direction: column; gap: 6px;
}
.sim-poll-title {
  font-size: 13px; font-weight: 700; color: var(--text-primary);
  margin-bottom: 2px;
}
.sim-poll-bar {
  position: relative; height: 28px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 6px; display: flex; align-items: center;
  padding: 0 12px; overflow: hidden;
}
[data-theme="light"] .sim-poll-bar {
  background: rgba(0, 0, 0, 0.01);
}
.sim-bar-fill {
  position: absolute; left: 0; top: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.04);
}
[data-theme="light"] .sim-bar-fill {
  background: rgba(0, 0, 0, 0.04);
}
.sim-poll-bar.winning {
  border-color: rgba(255, 51, 102, 0.3);
}
.sim-poll-bar.winning .sim-bar-fill {
  background: var(--primary-glow);
}
.sim-bar-label {
  position: relative; z-index: 2;
  font-size: 11px; font-weight: 700; color: var(--text-primary);
}
.glass-sim-overlay {
  position: absolute; inset: 0; z-index: 5;
  display: flex; align-items: center; justify-content: center;
}
.glass-sim-blur {
  position: absolute; inset: 0;
  backdrop-filter: blur(5px) saturate(130%);
  background: rgba(8, 11, 22, 0.35);
  z-index: 1;
}
[data-theme="light"] .glass-sim-blur {
  background: rgba(243, 244, 246, 0.35);
}
.glass-sim-badge {
  position: relative; z-index: 2;
  background: var(--primary-grad); color: #FFF;
  font-size: 10px; font-weight: 800; padding: 7px 16px;
  border-radius: var(--radius-pill); box-shadow: var(--shadow-glow);
  letter-spacing: 1px;
}

/* ── HOW IT WORKS LOOP ── */
.howitworks { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
.steps-container {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  position: relative;
}
.step-card-wrap {
  position: relative; display: flex; align-items: center;
}
.step-card {
  width: 100%; padding: 40px 28px;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-card); position: relative; overflow: hidden;
  transition: border-color 0.4s, transform 0.4s;
}
.step-card:hover {
  transform: translateY(-4px); border-color: rgba(139, 92, 246, 0.35);
}
.step-bg-glow {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(circle at 100% 100%, var(--accent-glow) 0%, transparent 60%);
  opacity: 0; transition: opacity 0.5s ease;
}
.step-card:hover .step-bg-glow { opacity: 1; }

.step-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.step-num {
  font-family: 'Outfit', sans-serif; font-size: 48px; font-weight: 900;
  background: var(--primary-grad); -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; background-clip: text;
  opacity: 0.15;
}
.step-icon { display: flex; align-items: center; }
.step-svg-icon { width: 32px; height: 32px; color: var(--primary); }
.step-title { font-size: 19px; margin-bottom: 12px; font-family: 'Outfit', sans-serif; }
.step-desc { font-size: 14px; }

/* Connected line elements */
.connector-line {
  position: absolute; right: -12px; top: 50%; transform: translateY(-50%);
  width: 24px; height: 1px; background: var(--border); z-index: 2;
}

/* ── PRODUCT BENEFITS ── */
.benefits { padding: 100px 24px; }
.benefits-container {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 80px; align-items: center;
}
.benefits-content { display: flex; flex-direction: column; align-items: flex-start; }
.benefits-title { font-size: clamp(28px, 3.5vw, 40px); line-height: 1.25; margin-bottom: 20px; }
.benefits-description { font-size: 15px; margin-bottom: 32px; }

.benefits-list { list-style: none; display: flex; flex-direction: column; gap: 20px; }
.benefits-list li { display: flex; gap: 16px; align-items: flex-start; }
.check-icon {
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--success-glow); color: var(--success);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 14px; flex-shrink: 0;
  border: 1px solid rgba(16, 185, 129, 0.2);
}
.benefits-list li strong { display: block; font-size: 15px; margin-bottom: 4px; color: var(--text-primary); }
.benefits-list li span { font-size: 13.5px; color: var(--text-secondary); }

/* Stack card simulator */
.benefits-visual { position: relative; height: 340px; }
.visual-stack { position: relative; width: 100%; height: 100%; }
.visual-item {
  position: absolute; width: 280px; padding: 24px;
  background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border);
  border-radius: 16px; backdrop-filter: blur(10px);
  box-shadow: var(--shadow-strong);
  transition: transform 0.4s ease;
}
[data-theme="light"] .visual-item {
  background: rgba(255, 255, 255, 0.75);
}
.visual-item h4 { font-size: 14px; margin-bottom: 6px; }
.visual-item p { font-size: 12px; }
.visual-pill {
  display: inline-block; margin-top: 10px; font-size: 10px; font-weight: 700;
  background: var(--success-glow); color: var(--success);
  padding: 4px 10px; border-radius: var(--radius-pill);
}
.card-top { top: 0; left: 60px; z-index: 3; }
.card-mid { top: 80px; left: 160px; z-index: 2; transform: scale(0.95); opacity: 0.8; }
.card-bot { top: 160px; left: 20px; z-index: 1; transform: scale(0.9); opacity: 0.6; }

.benefits-visual:hover .card-top { transform: translateY(-10px) scale(1.02); }
.benefits-visual:hover .card-mid { transform: translateY(-5px) translateX(10px); opacity: 1; }
.benefits-visual:hover .card-bot { transform: translateY(5px) translateX(-5px); opacity: 0.8; }

/* ── NUMBERS SECTION ── */
.numbers-section { padding: 80px 24px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.numbers-grid {
  max-width: 1000px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
}
.number-item { text-align: center; }
.number-val {
  font-family: 'Outfit', sans-serif; font-size: clamp(34px, 4vw, 56px); font-weight: 900;
  margin-bottom: 6px;
}
.number-lbl { font-size: 12px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; }

/* ── INSTALLATION / DOWNLOADS DIRECTORY ── */
.downloads { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
.download-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.download-card {
  position: relative; overflow: hidden;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-card); padding: 40px 28px;
  text-align: center; display: flex; flex-direction: column; align-items: center;
  transition: transform 0.4s, box-shadow 0.4s, border-color 0.4s;
}
.download-card:hover {
  transform: translateY(-8px);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-strong);
}
.featured-download {
  border-color: rgba(255, 51, 102, 0.3);
  box-shadow: 0 0 30px rgba(255, 51, 102, 0.05);
}
.featured-download:hover {
  box-shadow: 0 20px 50px rgba(255, 51, 102, 0.15);
}
.download-card-glow {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(circle at 50% 0%, var(--primary-glow) 0%, transparent 60%);
}
.architecture-badge {
  background: var(--surface); border: 1px solid var(--border);
  padding: 6px 18px; border-radius: var(--radius-pill);
  font-size: 11px; font-weight: 800; margin-bottom: 24px;
  text-transform: uppercase; letter-spacing: 0.5px;
}
.download-card h3 { font-size: 22px; margin-bottom: 8px; }
.pkg-name {
  font-family: monospace; font-size: 11px; color: var(--text-secondary);
  background: rgba(0, 0, 0, 0.2); padding: 5px 12px; border-radius: 6px;
  margin-bottom: 18px; border: 1px solid var(--border);
}
.pkg-info { font-size: 13.5px; margin-bottom: 24px; flex-grow: 1; line-height: 1.6; }
.pkg-size { font-family: 'Outfit', sans-serif; font-size: 30px; font-weight: 900; color: var(--primary); margin-bottom: 24px; }
.btn-download { width: 100%; justify-content: center; }

.download-trust {
  display: flex; justify-content: center; flex-wrap: wrap; gap: 28px; margin-top: 48px;
  color: var(--text-secondary); font-size: 13px; font-weight: 600;
}
.download-trust span { display: flex; align-items: center; gap: 8px; }
.download-trust span::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--success); }

/* ── FOOTER ── */
.footer { border-top: 1px solid var(--border); padding: 60px 24px; background: rgba(5, 7, 14, 0.85); position: relative; }
[data-theme="light"] .footer {
  background: rgba(243, 244, 246, 0.9);
}
.footer-container {
  max-width: 1200px; margin: 0 auto;
  display: flex; justify-content: space-between; align-items: flex-start;
  flex-wrap: wrap; gap: 40px;
}
.footer-left { display: flex; flex-direction: column; align-items: flex-start; }
.footer-links { display: flex; gap: 80px; }
.link-group { display: flex; flex-direction: column; gap: 14px; }
.link-group h4 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; color: var(--text-primary); }
.link-group a { font-size: 13px; color: var(--text-secondary); transition: color 0.25s; }
.link-group a:hover { color: var(--primary); }

/* ── FLOAT BACK TO TOP BUTTON ── */
.back-to-top {
  position: fixed; bottom: 32px; right: 32px;
  width: 50px; height: 50px; background: var(--primary-grad);
  border: none; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: var(--shadow-glow); cursor: pointer;
  opacity: 0; visibility: hidden;
  transform: scale(0.8) translateY(12px);
  transition: var(--transition); z-index: 999;
}
.back-to-top.show { opacity: 1; visibility: visible; transform: scale(1) translateY(0); }
.back-to-top:hover { transform: translateY(-4px) scale(1.06); box-shadow: 0 0 30px rgba(255, 51, 102, 0.5); }
.back-to-top svg { width: 20px; height: 20px; stroke: white; }

/* ── SCROLL REVEALS ── */
.reveal-up, .reveal-left, .reveal-right, .reveal-scale {
  opacity: 0; transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}
.reveal-up    { transform: translateY(40px); }
.reveal-left  { transform: translateX(-40px); }
.reveal-right { transform: translateX(40px); }
.reveal-scale { transform: scale(0.94); }

.reveal-up.visible, .reveal-left.visible,
.reveal-right.visible, .reveal-scale.visible {
  opacity: 1; transform: translate(0) scale(1);
}

/* ── RESPONSIVE MEDIA BREAKPOINTS ── */
@media (max-width: 1024px) {
  .hero-container { grid-template-columns: 1fr; gap: 50px; text-align: center; }
  .hero-content { align-items: center; }
  .hero-description { max-width: 100%; }
  .hero-visual { order: -1; }
  .scroll-down-container { grid-column: 1; }
  
  .bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
  .featured-bento { grid-column: span 1; grid-row: span 1; min-height: auto; }
  
  .steps-container { grid-template-columns: 1fr; gap: 40px; }
  .connector-line { display: none; }
  
  .benefits-container { grid-template-columns: 1fr; gap: 60px; }
  .benefits-visual { height: auto; }
  .visual-stack { display: flex; flex-direction: column; align-items: center; gap: 20px; height: auto; }
  .visual-item { position: relative; top: auto !important; left: auto !important; width: 100%; max-width: 320px; transform: none !important; opacity: 1 !important; }
  
  .numbers-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
  .download-grid { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 768px) {
  .nav {
    display: none; flex-direction: column; position: fixed;
    inset: 0; top: 80px; background: rgba(8, 11, 22, 0.98);
    backdrop-filter: blur(20px); padding: 40px 24px; gap: 28px; z-index: 999;
    border-bottom: 1px solid var(--border);
  }
  [data-theme="light"] .nav {
    background: rgba(243, 244, 246, 0.98);
  }
  .nav.open { display: flex; }
  .hamburger { display: flex; }
  .hero { padding: 140px 0 80px; }
  .hero-title { font-size: 38px; }
  .mockup-card { width: 100%; max-width: 320px; }
  .footer-container { flex-direction: column; text-align: center; align-items: center; }
  .footer-left { align-items: center; margin-bottom: 30px; }
  .footer-links { gap: 40px; justify-content: center; }
}

@media (max-width: 485px) {
  .hero-actions { flex-direction: column; align-items: stretch; width: 100%; }
  .btn { justify-content: center; }
  .quick-stats { flex-wrap: wrap; justify-content: center; gap: 16px; }
  .stat-divider { display: none; }
  .numbers-grid { grid-template-columns: 1fr; gap: 30px; }
}
