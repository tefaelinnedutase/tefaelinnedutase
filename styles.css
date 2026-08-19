:root {
  --bg: #0f172a;
  --bg-soft: #1e293b;
  --text: #f8fafc;
  --muted: #c7d2fe;
  --muted-soft: #dfe7ff;
  --accent: #7dd3fc;
  --accent-2: #a5b4fc;
  --accent-3: #c4b5fd;
  --success: #7ae7b7;
  --card: rgba(15, 23, 42, 0.58);
  --card-strong: rgba(15, 23, 42, 0.8);
  --border: rgba(255, 255, 255, 0.12);
  --font-primary: 'Inter', 'Segoe UI', sans-serif;
  --font-heading: 'Plus Jakarta Sans', 'Inter', 'Segoe UI', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.88), rgba(30, 41, 59, 0.9)),
    url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat fixed;
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1100px, 90%);
  margin: 0 auto;
}

.hero {
  min-height: 100vh;
  position: relative;
  background:
    linear-gradient(120deg, rgba(15, 23, 42, 0.82), rgba(14, 116, 144, 0.7)),
    url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
  overflow: visible;
  padding-bottom: 2.5rem;
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(12px);
  opacity: 0.8;
  z-index: 0;
  animation: floatGlow 8s ease-in-out infinite alternate;
}

.hero::before {
  width: 260px;
  height: 260px;
  right: 8%;
  top: 10%;
  background: radial-gradient(circle, rgba(125, 211, 252, 0.7), rgba(56, 189, 248, 0.18), transparent 70%);
  box-shadow: 0 0 40px rgba(125, 211, 252, 0.24);
}

.hero::after {
  width: 200px;
  height: 200px;
  left: 8%;
  bottom: 12%;
  background: radial-gradient(circle, rgba(196, 181, 253, 0.7), rgba(34, 211, 238, 0.18), transparent 70%);
  box-shadow: 0 0 38px rgba(196, 181, 253, 0.22);
  animation-delay: 1.5s;
}

@keyframes floatGlow {
  0% {
    transform: translate3d(0, 0, 0) scale(0.96);
    opacity: 0.6;
  }
  100% {
    transform: translate3d(0, -14px, 0) scale(1.08);
    opacity: 1;
  }
}

@keyframes navTextFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
}

@keyframes navLinkFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-1.5px);
  }
}

.hero > * {
  position: relative;
  z-index: 1;
}

.hero-content,
.stats-strip {
  position: relative;
  z-index: 2;
}

.service-panel {
  position: relative;
  z-index: 2;
}

.nav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.14);
  border-radius: 18px;
  width: min(1200px, 92%);
  margin: 0 auto;
  transition: transform 0.35s ease, top 0.35s ease, background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, padding 0.35s ease;
}

.nav-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.brand-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  display: block;
  border-radius: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.brand-name {
  color: #f8fafc;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-shadow: 0 1px 2px rgba(15, 23, 42, 0.35);
  animation: navTextFloat 4.5s ease-in-out infinite;
}

.brand-location {
  color: #dbeafe;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(15, 23, 42, 0.35);
  animation: navTextFloat 4.5s ease-in-out infinite;
  animation-delay: 0.6s;
}

.nav.is-scrolled {
  top: 8px;
  background: rgba(15, 23, 42, 0.18);
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.18);
  padding: 0.8rem 1.2rem;
  border-radius: 16px;
  border-color: rgba(255, 255, 255, 0.26);
}

.logo,
.nav-links a,
.brand-tag {
  text-decoration: none;
}

.logo {
  color: #0f172a;
  font-family: var(--font-heading);
  font-weight: 800;
  letter-spacing: 0.03em;
}

.brand-tag {
  color: #ef4444;
  opacity: 0.96;
  font-size: 0.8rem;
  white-space: nowrap;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  animation: navTextFloat 4.8s ease-in-out infinite;
  animation-delay: 1.1s;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-links a {
  color: #f8fafc;
  transition: color 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
  font-weight: 700;
  position: relative;
  text-shadow: 0 1px 2px rgba(15, 23, 42, 0.35);
  animation: navLinkFloat 5.2s ease-in-out infinite;
}

.nav-links a:nth-child(2) {
  animation-delay: 0.5s;
}

.nav-links a:nth-child(3) {
  animation-delay: 1s;
}

.nav-links a:hover {
  color: #dbeafe;
  transform: translateY(-1px);
  opacity: 1;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: #e11d48;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.9fr);
  gap: 2.5rem;
  align-items: center;
  min-height: 80vh;
  width: min(1200px, 92%);
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  position: relative;
}

.hero-float {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.38);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 18px 26px rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(8px);
  font-size: 1.4rem;
  animation: bob 4.5s ease-in-out infinite;
  z-index: 1;
}

.hero-float-one {
  top: 14%;
  right: 18%;
}

.hero-float-two {
  bottom: 18%;
  right: 26%;
  animation-delay: 1.2s;
}

.hero-float-three {
  bottom: 12%;
  left: 40%;
  animation-delay: 2s;
}

@keyframes bob {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(4deg);
  }
}

.hero-copy {
  max-width: 620px;
  min-width: 0;
  --parallax-shift: 0px;
}

.reveal {
  opacity: 0;
  filter: blur(8px);
  transform: translate3d(0, calc(var(--parallax-shift, 0px) + 30px), 0);
  transition: opacity 1.4s ease, transform 1.4s ease, filter 1.4s ease;
}

.reveal.is-visible {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, var(--parallax-shift, 0px), 0);
}

.service-hero-label {
  color: #dbeafe;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
  margin-bottom: 0.7rem;
  font-weight: 700;
  opacity: 0.95;
}

.eyebrow {
  color: #c4b5fd;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

h1,
h2,
h3 {
  margin-bottom: 0.8rem;
  font-family: var(--font-heading);
}

h1 {
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.1;
}

.hero-text,
.section p,
.card p,
.footer p {
  color: var(--muted);
}

.section-header h2,
.process-card h3,
.benefit-card h3,
.testimonial-card strong,
.contact-item small,
.contact-item a {
  color: #f8fafc;
}

.hero-copy .eyebrow,
.cta-banner .eyebrow,
.step-number,
.stat-box strong,
.mini-stats strong {
  color: #c4b5fd;
}

.trust-row span,
.person span,
.feature-list li,
.testimonial-card p,
.mini-stats span,
.stat-box span {
  color: #dfe7ff;
}

.contact-item:first-child .contact-text a {
  color: #b7f7d3;
}

.contact-item:last-child .contact-text a {
  color: #bfdbfe;
}

.contact-item:first-child small,
.contact-item:last-child small {
  color: #e5e7eb;
}

.parallax {
  --parallax-shift: 0px;
  will-change: transform;
  transition: transform 0.12s linear;
}

.hero-copy.parallax,
.service-panel.parallax {
  transform: translate3d(0, var(--parallax-shift, 0px), 0);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.4rem;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.6rem;
}

.hero-badges span {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2f3ff;
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  font-size: 0.76rem;
}

.btn {
  display: inline-block;
  margin-top: 0;
  padding: 0.8rem 1.1rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: white;
  text-decoration: none;
  border-radius: 999px;
  box-shadow: 0 12px 30px rgba(56, 189, 248, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  position: relative;
  overflow: hidden;
  animation: buttonPulse 3.5s ease-in-out infinite;
}

.btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.26), transparent);
  transform: translateX(-120%);
  transition: transform 0.5s ease;
}

.btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 18px 32px rgba(34, 211, 238, 0.28);
  filter: brightness(1.05);
}

.btn:hover::before {
  transform: translateX(120%);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: none;
  animation-delay: 0.8s;
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.3rem;
  color: #dbeafe;
  font-size: 0.9rem;
}

.panel,
.card,
.process-card,
.stat-box {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.2rem;
  backdrop-filter: blur(12px);
}

.service-panel {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(56, 189, 248, 0.35);
  backdrop-filter: blur(8px);
  box-shadow: 0 25px 40px rgba(15, 23, 42, 0.35);
  padding: 1rem;
}

.tech-image-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.tech-image-wrap img {
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
}

.image-badge {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text);
  font-size: 0.72rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
}

.service-panel-header {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.12);
  color: #bbf7d0;
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

.panel-inner {
  padding: 0.2rem 0.1rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 14px rgba(34, 197, 94, 0.9);
}

.feature-list {
  list-style: none;
  margin: 1rem 0 1.15rem;
  display: grid;
  gap: 0.8rem;
  color: var(--muted);
}

.feature-list li {
  position: relative;
  padding-left: 1.4rem;
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 1.15rem;
}

.mini-stats div {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.8rem;
  padding: 0.8rem 0.5rem;
  text-align: center;
}

.mini-stats strong,
.stat-box strong {
  display: block;
  color: #fff;
  font-size: 1.2rem;
}

.mini-stats span,
.stat-box span {
  color: var(--muted);
  font-size: 0.75rem;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  width: min(1100px, 90%);
}

.stat-box {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  box-shadow: 0 18px 25px rgba(15, 23, 42, 0.18);
}

.section {
  padding: 2.8rem 0;
}

.section-header {
  margin-bottom: 1.2rem;
}

.section-header h2 {
  font-size: clamp(1.8rem, 2vw, 2.6rem);
}

main {
  display: block;
}

.section-alt {
  background: rgba(255, 255, 255, 0.03);
  margin-top: 0.5rem;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.1rem;
  margin-top: 1.2rem;
}

.process-card {
  min-height: 220px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.process-card:hover,
.card:hover,
.benefit-card:hover,
.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.4);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(34, 211, 238, 0.18));
  color: var(--accent-2);
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.4rem;
}

.benefit-card,
.testimonial-card {
  background: rgba(15, 23, 42, 0.52);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.2rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.icon-badge {
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.16), rgba(34, 211, 238, 0.2));
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  box-shadow: 0 12px 18px rgba(56, 189, 248, 0.12);
  animation: floatIcon 4.2s ease-in-out infinite;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.icon-badge:hover {
  transform: translateY(-4px) scale(1.06);
  box-shadow: 0 0 18px rgba(125, 211, 252, 0.65), 0 16px 26px rgba(59, 130, 246, 0.25);
  filter: brightness(1.1);
}

.benefit-card:nth-child(2) .icon-badge {
  animation-delay: 0.6s;
  background: linear-gradient(135deg, rgba(196, 181, 253, 0.2), rgba(167, 139, 250, 0.24));
}

.benefit-card:nth-child(3) .icon-badge {
  animation-delay: 1.2s;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(74, 222, 128, 0.22));
}

.benefit-card:nth-child(4) .icon-badge {
  animation-delay: 1.8s;
  background: linear-gradient(135deg, rgba(250, 204, 21, 0.18), rgba(251, 146, 60, 0.2));
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.2rem;
}

.card {
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.2rem;
}

.testimonial-card p {
  color: var(--muted);
  margin-bottom: 1rem;
}

.person {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.person span {
  color: var(--muted);
  font-size: 0.8rem;
}

.cta-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(15, 23, 42, 0.8));
  border: 1px solid rgba(56, 189, 248, 0.28);
  border-radius: 1.2rem;
  padding: 1.35rem 1.5rem;
  margin-bottom: 1.8rem;
}

.contact-form {
  display: grid;
  gap: 0.8rem;
  max-width: 600px;
  margin-top: 1rem;
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.2rem 0 1.6rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.9rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: 0 8px 14px rgba(56, 189, 248, 0.12);
  animation: pulseSoft 3s ease-in-out infinite;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.contact-item:hover .contact-icon {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(125, 211, 252, 0.5), 0 12px 20px rgba(59, 130, 246, 0.18);
  filter: brightness(1.08);
}

.contact-item:nth-child(2) .contact-icon {
  animation-delay: 0.8s;
}

.contact-icon svg {
  width: 18px;
  height: 18px;
  display: block;
  fill: currentColor;
}

.contact-icon.whatsapp {
  background: linear-gradient(135deg, #d9fbe8, #b8f5cf);
  color: #1fa35d;
}

.contact-icon.email {
  background: linear-gradient(135deg, #e0f2fe, #dbeafe);
  color: #2563eb;
}

.contact-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.contact-text small {
  color: var(--muted);
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.12rem;
}

.contact-details a {
  text-decoration: none;
  font-weight: 600;
  word-break: break-word;
  font-size: 0.85rem;
}

.contact-item:first-child .contact-text a {
  color: #bbf7d0;
}

.contact-item:last-child .contact-text a {
  color: #bfdbfe;
}

input,
textarea {
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-size: 0.95rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: rgba(56, 189, 248, 0.6);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
}

@keyframes floatIcon {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-4px) rotate(-2deg);
  }
  50% {
    transform: translateY(-8px) rotate(1deg);
  }
  75% {
    transform: translateY(-4px) rotate(2deg);
  }
}

@keyframes pulseSoft {
  0%,
  100% {
    transform: translateY(0) scale(1);
    box-shadow: 0 8px 14px rgba(56, 189, 248, 0.12);
  }
  50% {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 12px 18px rgba(56, 189, 248, 0.18);
  }
}

@keyframes buttonPulse {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1px);
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 5rem;
  }

  .hero-copy {
    max-width: 100%;
    text-align: center;
  }

  .hero-actions,
  .trust-row,
  .hero-badges {
    justify-content: center;
  }

  .process-grid,
  .benefit-grid,
  .testimonial-grid,
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .contact-details {
    grid-template-columns: 1fr;
  }

  .nav {
    width: min(92%, calc(100% - 18px));
    justify-content: center;
    text-align: center;
    padding: 0.9rem 0.8rem;
    top: 10px;
  }

  .nav-brand {
    width: 100%;
    justify-content: center;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    gap: 0.6rem 0.9rem;
  }

  .brand-logo {
    width: 52px;
    height: 52px;
  }

  .brand-tag {
    font-size: 0.58rem;
    letter-spacing: 0.08em;
  }

  .brand-name {
    font-size: 0.82rem;
  }

  .brand-location {
    font-size: 0.54rem;
  }

  .hero {
    min-height: auto;
    padding-bottom: 2rem;
  }

  .hero-content,
  .stats-strip,
  .cards,
  .process-grid,
  .benefit-grid,
  .testimonial-grid,
  .cta-banner {
    grid-template-columns: 1fr;
  }

  .cta-banner {
    display: grid;
    text-align: center;
  }

  .hero-content {
    width: min(1100px, 90%);
    padding-top: 4.2rem;
  }

  .mini-stats {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 2.2rem 0;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 560px) {
  .nav {
    border-radius: 14px;
    gap: 0.5rem;
  }

  .nav-links {
    flex-wrap: wrap;
    font-size: 0.88rem;
  }

  .nav-links a {
    font-size: 0.8rem;
  }

  .brand-tag {
    display: block;
    width: 100%;
    font-size: 0.52rem;
  }

  .hero-copy .service-hero-label {
    letter-spacing: 0.12em;
    font-size: 0.63rem;
  }

  .eyebrow {
    letter-spacing: 0.14em;
    font-size: 0.7rem;
  }

  h1 {
    font-size: clamp(2rem, 9vw, 2.9rem);
  }

  .hero-text {
    font-size: 0.96rem;
  }

  .hero-actions,
  .trust-row,
  .hero-badges {
    gap: 0.55rem;
  }

  .hero-badges span,
  .trust-row span {
    font-size: 0.75rem;
  }

  .service-panel,
  .process-card,
  .benefit-card,
  .testimonial-card,
  .card,
  .stat-box {
    padding: 0.95rem;
  }

  .feature-list li {
    font-size: 0.9rem;
  }

  .contact-item {
    padding: 0.7rem 0.75rem;
  }

  .contact-text a {
    font-size: 0.8rem;
  }
}

.form-status {
  margin-top: 0.4rem;
  color: var(--accent);
  font-size: 0.95rem;
}

.footer {
  padding: 1.5rem 0 2rem;
  text-align: center;
}
