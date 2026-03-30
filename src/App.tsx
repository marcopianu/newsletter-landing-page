import { useState, type FormEvent } from 'react';
import './App.css';
import {
  content,
  testimonials,
  businessTypes,
  painPoints,
  referralSources,
  createWebhookPayload,
} from './config';

const WorkflowConnectors = () => (
  <svg className="workflow-connectors" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <path id="p1" d="M 80 180 C 260 320, 680 420, 1100 720" stroke="#C4623A" strokeWidth="1.2" strokeDasharray="6 10" fill="none" opacity="0.18" />
    <circle r="3.5" fill="#C4623A" opacity="0.55">
      <animateMotion dur="9s" repeatCount="indefinite"><mpath href="#p1" /></animateMotion>
    </circle>
    <path id="p2" d="M 220 820 C 480 600, 900 320, 1360 100" stroke="#A04828" strokeWidth="1" strokeDasharray="4 12" fill="none" opacity="0.14" />
    <circle r="2.8" fill="#D4724A" opacity="0.5">
      <animateMotion dur="13s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath href="#p2" /></animateMotion>
    </circle>
    <path id="p3" d="M 0 480 C 200 300, 600 650, 900 400 S 1200 200, 1440 460" stroke="#C4623A" strokeWidth="1" strokeDasharray="3 14" fill="none" opacity="0.12" />
    <circle r="3" fill="#E0844A" opacity="0.48">
      <animateMotion dur="17s" repeatCount="indefinite"><mpath href="#p3" /></animateMotion>
    </circle>
    <circle r="2" fill="#C4623A" opacity="0.35">
      <animateMotion dur="17s" begin="8.5s" repeatCount="indefinite"><mpath href="#p3" /></animateMotion>
    </circle>
    <path id="p4" d="M 1300 80 C 1100 250, 800 500, 500 580 C 300 640, 150 700, 60 820" stroke="#B05830" strokeWidth="1.1" strokeDasharray="5 11" fill="none" opacity="0.13" />
    <circle r="3.2" fill="#C4623A" opacity="0.45">
      <animateMotion dur="11s" repeatCount="indefinite"><mpath href="#p4" /></animateMotion>
    </circle>
    <path id="p5" d="M 520 60 C 620 140, 780 100, 920 180" stroke="#D4845A" strokeWidth="0.9" strokeDasharray="3 9" fill="none" opacity="0.16" />
    <circle r="2.2" fill="#D4845A" opacity="0.6">
      <animateMotion dur="6s" repeatCount="indefinite"><mpath href="#p5" /></animateMotion>
    </circle>
    <path id="p6" d="M 180 750 C 420 680, 700 780, 980 660 C 1150 600, 1280 650, 1400 720" stroke="#A84828" strokeWidth="1" strokeDasharray="4 13" fill="none" opacity="0.11" />
    <circle r="2.6" fill="#C4623A" opacity="0.42">
      <animateMotion dur="15s" repeatCount="indefinite"><mpath href="#p6" /></animateMotion>
    </circle>
  </svg>
);

function App() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [source, setSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validatePhone = (v: string) => v.replace(/\D/g, '').length >= 7;

  const showError = (msg: string) => {
    setError(msg);
    setTimeout(() => setError(''), 4000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) { showError('Please enter your email address'); return; }
    if (!validateEmail(email)) { showError('Please enter a valid email address'); return; }
    if (!phone) { showError('Please enter your phone number'); return; }
    if (!validatePhone(phone)) { showError('Phone must have at least 7 digits'); return; }
    if (!businessType) { showError('Please select your business type'); return; }
    if (!painPoint) { showError('Please select your biggest time cost'); return; }
    if (!source) { showError('Please tell us where you found us'); return; }

    setIsSubmitting(true);
    try {
      const payload = createWebhookPayload({ email, phone, business_type: businessType, pain_point: painPoint, source });
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed');
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      showError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      {Array.from({ length: 21 }, (_, i) => (
        <div key={i + 1} className={`blob blob-${i + 1}`} aria-hidden="true" />
      ))}
      <div className="blob blob-pulse blob-pulse-1" aria-hidden="true" />
      <div className="blob blob-pulse blob-pulse-2" aria-hidden="true" />
      <WorkflowConnectors />

      <div className="main-wrapper">
        <div className="main-card">

          {/* ── LEFT COLUMN ── */}
          <div className="left-col">

            <div className="brand-row">
              <svg viewBox="0 0 28 32" fill="none" aria-hidden="true" width="38" height="43" className="brand-icon">
                <path d="M4 0H24C25.1 0 26 0.9 26 2V28L23 25.5L20 28L17 25.5L14 28L11 25.5L8 28L5 25.5L2 28V2C2 0.9 2.9 0 4 0Z" fill="#C4623A"/>
                <rect x="6" y="7" width="16" height="1.8" rx="0.9" fill="white" opacity="0.85"/>
                <rect x="6" y="11.5" width="11" height="1.8" rx="0.9" fill="white" opacity="0.75"/>
                <rect x="6" y="16" width="14" height="1.8" rx="0.9" fill="white" opacity="0.75"/>
                <rect x="6" y="20.5" width="9" height="1.8" rx="0.9" fill="white" opacity="0.55"/>
              </svg>
              <div className="brand-text">
                <span className="brand-name">The Weekly Till</span>
                <span className="brand-pill">LOCAL BUSINESS INTELLIGENCE</span>
              </div>
            </div>

            <div className="stats-badge">
              <span className="live-dot" aria-hidden="true" />
              <strong>3,457</strong> local business owners already subscribed
            </div>

            <h1 className="headline">
              Fix the workflow{' '}
              <span className="headline-highlight">draining your time.</span>
            </h1>

            <p className="subhead">✨ Your first plan arrives immediately.</p>

            <p className="description">
              Choose your business type and the task costing the most hours. We'll send one practical setup you can use right away. After that, you'll get one short Tuesday email with fresh ideas for the same area.
            </p>

            <ul className="feature-list" aria-label="What you get">
              <li><i className="fas fa-bolt" aria-hidden="true" /><span>Practical automation — use it today</span></li>
              <li><i className="fas fa-envelope-open-text" aria-hidden="true" /><span>Weekly Tuesday email: bite-sized &amp; actionable</span></li>
              <li><i className="fas fa-mobile-alt" aria-hidden="true" /><span>Text reminders &amp; mobile tips (opt-out anytime)</span></li>
              <li><i className="fas fa-chart-simple" aria-hidden="true" /><span>Tailored to your business bottleneck</span></li>
            </ul>

            <div className="trust-note">
              <i className="fas fa-clock" aria-hidden="true" />
              Cancel anytime. Your first blueprint is delivered the moment you subscribe.
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="right-col">
            <div className="form-card">
              {isSubmitted ? (
                <div className="success-screen" role="status">
                  <div className="success-icon-wrap">
                    <i className="fas fa-check" aria-hidden="true" />
                  </div>
                  <h2 className="success-title">You're in!</h2>
                  <p className="success-subtitle">Your automation blueprint is on its way.</p>
                  <div className="success-details">
                    <div className="success-detail-row">
                      <i className="fas fa-envelope" aria-hidden="true" />
                      <span>Sent to <strong>{email}</strong></span>
                    </div>
                    <div className="success-detail-row">
                      <i className="fas fa-mobile-alt" aria-hidden="true" />
                      <span>SMS reminders to <strong>{phone}</strong></span>
                    </div>
                  </div>
                  <p className="success-hint">
                    Check your inbox — and spam folder, just in case.<br />
                    Your first Tuesday tip arrives next week.
                  </p>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <i className="fas fa-gem" aria-hidden="true" />
                    Get your automation blueprint — 100% free
                  </div>

                  <form onSubmit={handleSubmit} aria-label="Subscribe to The Weekly Till" noValidate>
                    <div className="form-group">
                      <label htmlFor="email" className="label">
                        <i className="fas fa-envelope" aria-hidden="true" /> Your work email
                      </label>
                      <input type="email" id="email" className="input" placeholder="you@yourbusiness.com"
                        value={email} onChange={e => setEmail(e.target.value)}
                        disabled={isSubmitting} autoComplete="email" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="label">
                        <i className="fas fa-phone-alt" aria-hidden="true" /> Mobile for text reminders
                      </label>
                      <input type="tel" id="phone" className="input" placeholder="(555) 000-0000"
                        value={phone} onChange={e => setPhone(e.target.value)}
                        disabled={isSubmitting} autoComplete="tel" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="businessType" className="label">
                        <i className="fas fa-store" aria-hidden="true" /> Your type of business
                      </label>
                      <div className="select-wrapper">
                        <select id="businessType" className="select" value={businessType}
                          onChange={e => setBusinessType(e.target.value)}
                          disabled={isSubmitting}>
                          <option value="" disabled>{content.businessTypePlaceholder}</option>
                          {businessTypes.slice(1).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <div className="select-arrow"><i className="fas fa-chevron-down" aria-hidden="true" /></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="painPoint" className="label">
                        <i className="fas fa-hourglass-half" aria-hidden="true" /> What costs you the most time right now?
                      </label>
                      <div className="select-wrapper">
                        <select id="painPoint" className="select" value={painPoint}
                          onChange={e => setPainPoint(e.target.value)}
                          disabled={isSubmitting}>
                          <option value="" disabled>{content.painPointPlaceholder}</option>
                          {painPoints.slice(1).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <div className="select-arrow"><i className="fas fa-chevron-down" aria-hidden="true" /></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="source" className="label">
                        <i className="fas fa-magnifying-glass" aria-hidden="true" /> Where did you find us?
                      </label>
                      <div className="select-wrapper">
                        <select id="source" className="select" value={source}
                          onChange={e => setSource(e.target.value)}
                          disabled={isSubmitting}>
                          <option value="" disabled>{content.sourcePlaceholder}</option>
                          {referralSources.slice(1).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <div className="select-arrow"><i className="fas fa-chevron-down" aria-hidden="true" /></div>
                      </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><span className="spinner" role="status" aria-label="Sending" /> Sending...</>
                      ) : (
                        <>Send my automation blueprint <i className="fas fa-arrow-right" aria-hidden="true" /></>
                      )}
                    </button>

                    <p className="legal-note">
                      <i className="fas fa-shield-alt" aria-hidden="true" />
                      {' '}By signing up, you agree to receive occasional texts &amp; emails. Msg &amp; data rates may apply. Opt out anytime.
                    </p>

                    {error && (
                      <div className="msg msg-error" role="alert">
                        <i className="fas fa-circle-exclamation" aria-hidden="true" /> {error}
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      <section className="testimonials-section" aria-label="What readers are saying">
        <p className="testimonials-label">What our readers say</p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote className="tcard" key={i}>
              <span className="tcard-quote" aria-hidden="true">"</span>
              <p className="tcard-text">{t.quote}</p>
              <footer className="tcard-author">
                <span aria-hidden="true">—</span>{' '}
                <cite><strong>{t.name}</strong>, {t.role}, {t.city}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          © 2026 The Weekly Till — intelligence for main street entrepreneurs
          {' '}&nbsp;•&nbsp;{' '}
          <a href="#" className="footer-link">Privacy</a>
          {' '}&nbsp;•&nbsp;{' '}
          <a href="#" className="footer-link">Unsubscribe preferences</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
