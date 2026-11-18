import { useState, useEffect } from 'react'
import logoImg from './assets/logo.png'
import doeImg from './assets/Department of the Environment.png'
import { navigate } from './router'

const C = {
  bg: '#F3F1EA',
  bgDim: '#E8E4D8',
  navy: '#0B1F3F',
  gold: '#D9A21B',
  darkGold: '#8A6A12',
  teal: '#1D7A8A',
  muted: '#33415C',
  light: '#C9D1E0',
  dim: '#A9B4C8',
  border: '#4A5D80',
}

const PATHS = {
  phone: 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z',
  menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
  close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
}

function Icon({ d, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const goHome = (e) => { e.preventDefault(); navigate('/') }
const goHomeSection = (e, id) => {
  e.preventDefault()
  navigate('/')
  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150)
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 10, background: C.bg, borderBottom: '1px solid rgba(11,31,63,0.12)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '12px clamp(20px,4vw,48px)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="/" onClick={goHome} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logoImg} alt="Bernard's Electrical Solutions crest" style={{ height: 48, width: 'auto', display: 'block' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.navy }}>Bernard's</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.darkGold }}>Electrical Solutions</span>
          </div>
        </a>
        <nav className="header-nav" aria-label="Primary" style={{ display: 'flex', gap: 28, marginLeft: 'auto', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <a href="/#services" onClick={e => goHomeSection(e, 'services')} className="nav-link">Services</a>
          <a href="/#process" onClick={e => goHomeSection(e, 'process')} className="nav-link">How we work</a>
          <a href="/#works" onClick={e => goHomeSection(e, 'works')} className="nav-link">Works</a>
          <a href="/about" className="nav-link" style={{ color: C.gold }} aria-current="page">About</a>
          <a href="/#contact" onClick={e => goHomeSection(e, 'contact')} className="nav-link">Contact</a>
        </nav>
        <a href="tel:5016102396" className="header-phone btn-phone" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 18px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '0.06em', fontVariantNumeric: 'tabular-nums' }}>
          <Icon d={PATHS.phone} size={18} />
          CALL US NOW
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon d={menuOpen ? PATHS.close : PATHS.menu} size={24} />
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} style={{ padding: '4px clamp(20px,4vw,48px) 24px' }}>
        <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <a href="/#services" onClick={e => { goHomeSection(e, 'services'); setMenuOpen(false) }} className="nav-link mobile-nav-link">Services</a>
          <a href="/#process" onClick={e => { goHomeSection(e, 'process'); setMenuOpen(false) }} className="nav-link mobile-nav-link">How we work</a>
          <a href="/#works" onClick={e => { goHomeSection(e, 'works'); setMenuOpen(false) }} className="nav-link mobile-nav-link">Works</a>
          <a href="/about" className="nav-link mobile-nav-link" style={{ color: C.gold }} aria-current="page" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#contact" onClick={e => { goHomeSection(e, 'contact'); setMenuOpen(false) }} className="nav-link mobile-nav-link">Contact</a>
        </nav>
        <a href="tel:5016102396" className="btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 20px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '0.06em', textTransform: 'uppercase', fontVariantNumeric: 'tabular-nums' }}>
          <Icon d={PATHS.phone} size={18} />
          501-610-2396
        </a>
      </div>
    </header>
  )
}

function Section({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 40, borderBottom: `1px solid ${C.bgDim}` }}>
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.darkGold, fontFamily: "'Barlow Condensed',sans-serif" }}>{label}</span>
      {children}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, overflowX: 'hidden' }}>
      <Header />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(56px,8vw,100px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 40 }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 40, borderBottom: `2px solid ${C.navy}` }}>
          <a href="/" onClick={goHome} style={{ alignSelf: 'flex-start', fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none', fontFamily: "'Barlow Condensed',sans-serif" }}>
            ← Home
          </a>
          <h1 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(56px,8vw,96px)', lineHeight: 0.88, textTransform: 'uppercase', color: C.navy }}>
            Renan<br /><span style={{ color: C.gold }}>Bernard</span>
          </h1>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 8 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.muted }}>Electrical Technician II</span>
            <a href="https://wireman.puc.bz/wireman/page/6?search=" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'ui-monospace,"Courier New",monospace', fontWeight: 700, fontSize: 20, letterSpacing: '0.04em', color: C.navy, borderBottom: `1px solid ${C.gold}`, paddingBottom: 1 }}>ETII00334</a>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.muted }}>Belmopan, Belize</span>
          </div>
        </div>

        <Section label="Mission">
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: C.muted }}>
            We will provide safe, code-compliant electrical work for every home and business in Belize. We will start every job with an honest inspection, explain options in plain language, and commit to a written price before a single wire is touched. We will not cut corners on safety or leave a client without a full walkthrough of the completed work.
          </p>
        </Section>

        <Section label="Vision">
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: C.muted }}>
            To be the most trusted name in electrical services in Belize. Known for work that is done right the first time, explained clearly, and built to outlast its warranty. We are building a practice that future clients, and future electricians, can be proud of.
          </p>
        </Section>

        <Section label="About the Practice">
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: C.muted }}>
            Bernard's Electrical Solutions is a Belmopan-based practice serving residential and commercial clients throughout Belize. Services cover new wiring, panel upgrades, commercial fit-outs, scheduled maintenance, safety compliance assessments, and fault finding. All work is carried out under Public Utilities Commission licence ETII00334, issued to Renan Bernard as an Electrical Technician II.
          </p>
          <p style={{ margin: '16px 0 0', fontSize: 18, lineHeight: 1.7, color: C.muted }}>
            The practice is committed to transparent pricing, code-compliant workmanship, and clear communication. No work begins without client approval of a written quote. Every completed job is tested and walked through with the client before sign-off.
          </p>
        </Section>

        <Section label="Notable Clients">
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', paddingTop: 8 }}>
            <div style={{ border: `1.5px solid ${C.gold}`, display: 'flex', flexDirection: 'column', overflow: 'hidden', maxWidth: 320 }}>
              <div style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px 32px', minHeight: 120 }}>
                <img src={doeImg} alt="Department of the Environment" style={{ maxWidth: '100%', maxHeight: 80, objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ padding: '16px 20px', borderTop: `1.5px solid ${C.gold}`, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, lineHeight: 1.1, textTransform: 'uppercase', color: C.navy }}>Department of the Environment</span>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, padding: '5px 10px', background: C.navy, color: C.bg, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Inspection, distribution boards, cable lug replacement and bus bar service</span>
                  <span style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.darkGold, fontWeight: 600 }}>October 2026</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div style={{ paddingTop: 8 }}>
          <a href="/#contact" onClick={e => { e.preventDefault(); navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150) }} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '20px 36px', background: C.gold, color: C.navy, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 21, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book a consultation
          </a>
        </div>
      </div>

      <PrivacyFooter />
    </div>
  )
}

function PrivacyModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const CLOSE_PATH = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(11,31,63,0.72)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 'clamp(16px,4vw,40px)' }}
    >
      <div style={{ background: C.bg, color: C.navy, width: '100%', maxWidth: 680, maxHeight: '85vh', overflowY: 'auto', padding: 'clamp(28px,5vw,52px)', position: 'relative' }}>
        <button
          onClick={onClose}
          aria-label="Close privacy policy"
          style={{ all: 'unset', cursor: 'pointer', position: 'absolute', top: 20, right: 20, color: C.muted, display: 'flex' }}
        >
          <Icon d={CLOSE_PATH} size={22} />
        </button>
        <h2 style={{ margin: '0 0 6px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1, textTransform: 'uppercase', color: C.navy }}>Privacy Policy</h2>
        <p style={{ margin: '0 0 28px', fontSize: 13, color: C.muted, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Last updated November 2026</p>
        {[
          ['What we collect', 'When you submit the contact form we collect your name, phone number, email address, the service type you select, and any details you write in the message field. We use this information solely to respond to your enquiry.'],
          ['Analytics', 'We use Vercel Analytics to count page views and understand how visitors navigate the site. This data is anonymous. No names, emails or device identifiers are stored.'],
          ['Third parties we share data with', 'Contact form submissions are processed by Web3Forms (web3forms.com), whose servers receive and forward your details to us by email. Anonymous analytics data is processed by Vercel, Inc. We do not sell or share your information with any other party.'],
          ['Retention', 'Form submission data is retained only as long as needed to respond to your enquiry and is then deleted. Analytics data is aggregate and contains no personal information.'],
          ['Your rights', 'You may request access to, correction of, or deletion of any personal data we hold about you by contacting us at the details below.'],
          ['Contact', "Bernard's Electrical Solutions · 15 Barbados St., Belmopan, Belize · bernardseletricalsolutions@gmail.com · 501-610-2396"],
        ].map(([heading, body]) => (
          <div key={heading} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${C.bgDim}` }}>
            <h3 style={{ margin: '0 0 8px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.06em', color: C.darkGold }}>{heading}</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: C.muted }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PrivacyFooter() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  return (
    <>
      <footer style={{ background: C.navy, color: C.bg, borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 40 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px clamp(20px,4vw,48px)', display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 'clamp(24px,5vw,64px)', flexWrap: 'wrap', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.15 }}>
            <span><span style={{ color: C.gold, fontWeight: 700 }}>Committed to safety.</span><br />Focused on solutions.</span>
            <span><span style={{ color: C.gold, fontWeight: 700 }}>Powering today.</span><br />Building tomorrow.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
            <span style={{ fontSize: 14, color: C.dim }}>Copyright© 2026 Bernard's Electrical Solutions</span>
            <button
              onClick={() => setShowPrivacy(true)}
              style={{ all: 'unset', cursor: 'pointer', fontSize: 13, color: C.dim, borderBottom: '1px solid rgba(169,180,200,0.4)', paddingBottom: 1, letterSpacing: '0.04em' }}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  )
}
