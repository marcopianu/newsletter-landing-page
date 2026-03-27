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

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WorkflowConnectors = () => (
  <svg className="workflow-connectors" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {/* Path 1: top-left cluster → bottom-right */}
    <path id="p1" d="M 80 180 C 260 320, 680 420, 1100 720" stroke="#C4623A" strokeWidth="1.2" strokeDasharray="6 10" fill="none" opacity="0.18" />
    <circle r="3.5" fill="#C4623A" opacity="0.55">
      <animateMotion dur="9s" repeatCount="indefinite"><mpath href="#p1" /></animateMotion>
    </circle>

    {/* Path 2: bottom-left → top-right */}
    <path id="p2" d="M 220 820 C 480 600, 900 320, 1360 100" stroke="#A04828" strokeWidth="1" strokeDasharray="4 12" fill="none" opacity="0.14" />
    <circle r="2.8" fill="#D4724A" opacity="0.5">
      <animateMotion dur="13s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath href="#p2" /></animateMotion>
    </circle>

    {/* Path 3: mid-left → mid-right, gentle S-curve */}
    <path id="p3" d="M 0 480 C 200 300, 600 650, 900 400 S 1200 200, 1440 460" stroke="#C4623A" strokeWidth="1" strokeDasharray="3 14" fill="none" opacity="0.12" />
    <circle r="3" fill="#E0844A" opacity="0.48">
      <animateMotion dur="17s" repeatCount="indefinite"><mpath href="#p3" /></animateMotion>
    </circle>
    <circle r="2" fill="#C4623A" opacity="0.35">
      <animateMotion dur="17s" begin="8.5s" repeatCount="indefinite"><mpath href="#p3" /></animateMotion>
    </circle>

    {/* Path 4: top-right → bottom-left arc */}
    <path id="p4" d="M 1300 80 C 1100 250, 800 500, 500 580 C 300 640, 150 700, 60 820" stroke="#B05830" strokeWidth="1.1" strokeDasharray="5 11" fill="none" opacity="0.13" />
    <circle r="3.2" fill="#C4623A" opacity="0.45">
      <animateMotion dur="11s" repeatCount="indefinite"><mpath href="#p4" /></animateMotion>
    </circle>

    {/* Path 5: short connector, upper-center area */}
    <path id="p5" d="M 520 60 C 620 140, 780 100, 920 180" stroke="#D4845A" strokeWidth="0.9" strokeDasharray="3 9" fill="none" opacity="0.16" />
    <circle r="2.2" fill="#D4845A" opacity="0.6">
      <animateMotion dur="6s" repeatCount="indefinite"><mpath href="#p5" /></animateMotion>
    </circle>

    {/* Path 6: lower portion diagonal */}
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

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) { setError('Please enter your Email'); return; }
    if (!validateEmail(email)) { setError('Please enter a valid email address'); return; }
    if (!businessType || businessType === content.businessTypePlaceholder) {
      setError('Please select your business type'); return;
    }
    if (!painPoint || painPoint === content.painPointPlaceholder) {
      setError('Please select your biggest time cost'); return;
    }
    if (!source || source === content.sourcePlaceholder) {
      setError('Please tell us where you found us'); return;
    }

    setIsSubmitting(true);
    try {
      const payload = createWebhookPayload({
        email, phone,
        business_type: businessType,
        pain_point: painPoint,
        source,
      });

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed to subscribe');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="page">
        <div className="blob blob-1" aria-hidden="true" />
        <div className="blob blob-2" aria-hidden="true" />
        <div className="blob blob-3" aria-hidden="true" />
        <div className="blob blob-4" aria-hidden="true" />
        <div className="blob blob-5" aria-hidden="true" />
        <div className="blob blob-6" aria-hidden="true" />
        <div className="blob blob-7" aria-hidden="true" />
        <div className="blob blob-8" aria-hidden="true" />
        <div className="blob blob-9" aria-hidden="true" />
        <div className="blob blob-10" aria-hidden="true" />
        <div className="blob blob-11" aria-hidden="true" />
        <div className="blob blob-12" aria-hidden="true" />
        <div className="blob blob-13" aria-hidden="true" />
        <div className="blob blob-14" aria-hidden="true" />
        <div className="blob blob-15" aria-hidden="true" />
        <div className="blob blob-16" aria-hidden="true" />
        <div className="blob blob-17" aria-hidden="true" />
        <div className="blob blob-18" aria-hidden="true" />
        <div className="blob blob-19" aria-hidden="true" />
        <div className="blob blob-20" aria-hidden="true" />
        <div className="blob blob-21" aria-hidden="true" />
        <div className="blob blob-pulse blob-pulse-1" aria-hidden="true" />
        <div className="blob blob-pulse blob-pulse-2" aria-hidden="true" />
        <WorkflowConnectors />
        <main className="card success-container">
          <div className="success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="success-title">{content.successTitle}</h2>
          <p className="success-message">{content.successMessage}</p>
        </main>
        <footer className="footer"><p>{content.footerText}</p></footer>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />
      <div className="blob blob-4" aria-hidden="true" />
      <div className="blob blob-5" aria-hidden="true" />
      <div className="blob blob-6" aria-hidden="true" />
      <div className="blob blob-7" aria-hidden="true" />
      <div className="blob blob-8" aria-hidden="true" />
      <div className="blob blob-9" aria-hidden="true" />
      <div className="blob blob-10" aria-hidden="true" />
      <div className="blob blob-11" aria-hidden="true" />
      <div className="blob blob-12" aria-hidden="true" />
      <div className="blob blob-13" aria-hidden="true" />
      <div className="blob blob-14" aria-hidden="true" />
      <div className="blob blob-15" aria-hidden="true" />
      <div className="blob blob-16" aria-hidden="true" />
      <div className="blob blob-17" aria-hidden="true" />
      <div className="blob blob-18" aria-hidden="true" />
      <div className="blob blob-19" aria-hidden="true" />
      <div className="blob blob-20" aria-hidden="true" />
      <div className="blob blob-21" aria-hidden="true" />
      <div className="blob blob-pulse blob-pulse-1" aria-hidden="true" />
      <div className="blob blob-pulse blob-pulse-2" aria-hidden="true" />
      <WorkflowConnectors />

      {/* Page-level branding above the card */}
      <div className="page-brand">
        <div className="page-logo">
          {/* Receipt / till icon */}
          <svg viewBox="0 0 28 32" fill="none" aria-hidden="true" width="32" height="36">
            <path d="M4 0H24C25.1 0 26 0.9 26 2V28L23 25.5L20 28L17 25.5L14 28L11 25.5L8 28L5 25.5L2 28V2C2 0.9 2.9 0 4 0Z" fill="#C4623A"/>
            <rect x="6" y="7" width="16" height="1.8" rx="0.9" fill="white" opacity="0.85"/>
            <rect x="6" y="11.5" width="11" height="1.8" rx="0.9" fill="white" opacity="0.75"/>
            <rect x="6" y="16" width="14" height="1.8" rx="0.9" fill="white" opacity="0.75"/>
            <rect x="6" y="20.5" width="9" height="1.8" rx="0.9" fill="white" opacity="0.55"/>
          </svg>
          <div className="page-logo-text">
            <span className="page-logo-name">{content.logoText}</span>
            <span className="page-logo-tagline">Local Business Intelligence</span>
          </div>
        </div>
        <div className="live-counter" role="status" aria-live="polite">
          <span className="live-dot" aria-hidden="true" />
          <span><strong>3,457</strong> local business owners already subscribed</span>
        </div>
      </div>

      <main className="card">

        <section aria-label="Newsletter introduction">
          <h1 className="headline">
            <span className="headline-normal">{content.headlineStart}</span>
            <span className="headline-accent">{content.headlineAccent}</span>
          </h1>
          <p className="subheadline">{content.subheadline}</p>
        </section>

        <form className="form" onSubmit={handleSubmit} aria-label="Subscribe to The Weekly Till" noValidate>
          <div className="form-group">
            <label htmlFor="email" className="label">Your work email</label>
            <input type="email" id="email" className="input" placeholder="you@yourbusiness.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting} aria-required="true" autoComplete="email" />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="label">Mobile for text reminders
            </label>
            <input type="tel" id="phone" className="input" placeholder="(555) 000-0000"
              value={phone} onChange={(e) => setPhone(e.target.value)}
              disabled={isSubmitting} autoComplete="tel" />
          </div>

          <div className="form-group">
            <label htmlFor="businessType" className="label">Your type of business</label>
            <div className="select-wrapper">
              <select id="businessType" className="select" value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                disabled={isSubmitting} aria-required="true">
                {businessTypes.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <div className="select-arrow"><ChevronDown /></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="painPoint" className="label">What costs you the most time right now?</label>
            <div className="select-wrapper">
              <select id="painPoint" className="select" value={painPoint}
                onChange={(e) => setPainPoint(e.target.value)}
                disabled={isSubmitting} aria-required="true">
                {painPoints.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <div className="select-arrow"><ChevronDown /></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="source" className="label">Where did you find us?</label>
            <div className="select-wrapper">
              <select id="source" className="select" value={source}
                onChange={(e) => setSource(e.target.value)}
                disabled={isSubmitting} aria-required="true">
                {referralSources.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <div className="select-arrow"><ChevronDown /></div>
            </div>
          </div>

          {error && (
            <div className="error-message" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <><span className="spinner" role="status" aria-label="Sending" />{content.buttonLoadingText}</>
            ) : (
              <>{content.buttonText}<ArrowRight /></>
            )}
          </button>

          <p className="privacy-note">{content.privacyNote}</p>
        </form>

        {/* Testimonials */}
        <section className="testimonials" aria-label="What readers are saying">
          {testimonials.map((t, i) => (
            <blockquote className="testimonial" key={i}>
              <span className="testimonial-mark" aria-hidden="true">"</span>
              <p className="testimonial-text">{t.quote}</p>
              <footer className="testimonial-author">
                <span className="testimonial-dash" aria-hidden="true">—</span>
                <cite>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-biz">{`, ${t.role}, ${t.city}`}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>{content.footerText}</p>
      </footer>
    </div>
  );
}

export default App;
