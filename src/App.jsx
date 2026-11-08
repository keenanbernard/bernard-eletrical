import { useState } from 'react'
import logoImg from './assets/logo.png'
import panelImg from './assets/New panel.png'
import './App.css'

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
  pin: 'M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z',
  mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V8l8 5 8-5v-.7z',
  chevron: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z',
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

function Spinner() {
  return (
    <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 10, background: C.bg, borderBottom: '1px solid rgba(11,31,63,0.12)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '12px clamp(20px,4vw,48px)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logoImg} alt="Bernard's Electrical Solutions crest" style={{ height: 48, width: 'auto', display: 'block' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.navy }}>Bernard's</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.darkGold }}>Electrical Solutions</span>
          </div>
        </a>
        <nav className="header-nav" aria-label="Primary" style={{ display: 'flex', gap: 28, marginLeft: 'auto', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">How we work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
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
          <a href="#services" className="nav-link mobile-nav-link" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process" className="nav-link mobile-nav-link" onClick={() => setMenuOpen(false)}>How we work</a>
          <a href="#about" className="nav-link mobile-nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="nav-link mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
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

function Hero() {
  return (
    <section id="top" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,6vw,88px) clamp(20px,4vw,48px) clamp(48px,6vw,96px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 620 }}>
        <h1 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(56px,8.4vw,120px)', lineHeight: 0.88, letterSpacing: '-0.005em', textTransform: 'uppercase', color: C.navy }}>
          Wired right<br />
          <span style={{ color: C.gold }}>the first time.</span>
        </h1>
        <p style={{ margin: 0, fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.55, color: C.muted, maxWidth: 520 }}>
          Electrical consultation, installation and repair for homes and businesses across Belize. Honest assessments, code-compliant work and a licensed technician on every job.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '20px 36px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 21, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Book a consultation</a>
          <a href="#services" className="btn-ghost" style={{ padding: '14px 0', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 17, letterSpacing: '0.06em', textTransform: 'uppercase' }}>See services <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div style={{ position: 'relative', height: 'clamp(300px,54vw,700px)', marginRight: 'calc(-1 * clamp(20px,4vw,48px))' }}>
        <div style={{ position: 'absolute', inset: 0, background: C.gold, clipPath: 'polygon(22% 0,100% 0,100% 100%,22% 100%,0 50%)' }}></div>
        <div style={{ position: 'absolute', inset: '0 0 0 14px', background: `${C.navy} url(${panelImg}) center/cover no-repeat`, clipPath: 'polygon(22% 0,100% 0,100% 100%,22% 100%,0 50%)' }}></div>
      </div>
    </section>
  )
}

const SERVICES_DATA = [
  ['Residential electrical', 'New wiring, rewiring older homes, panel upgrades, lighting and outlets installed to code.', ['Panel upgrades', 'Rewiring', 'Lighting', 'New builds']],
  ['Commercial electrical', 'Fit-outs and installations for shops, offices and small facilities, planned around your operating hours.', ['Shop fit-outs', 'Three-phase', 'Distribution boards']],
  ['Electrical maintenance', 'Scheduled inspections and preventive servicing that catch problems before they cost you.', ['Inspections', 'Load testing', 'Service contracts']],
  ['Troubleshooting & repairs', 'Tripping breakers, dead circuits, flickering lights. We trace the fault and fix the cause, not the symptom.', ['Fault finding', 'Breaker issues', 'Surge damage']],
  ['Safety compliance', 'Assessments and certification against PUC requirements for insurance, sale or peace of mind.', ['Safety audits', 'Earthing checks', 'Certification']],
]

function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="services" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 'clamp(32px,5vw,80px)', alignItems: 'start' }}>
      <div className="services-heading" style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 110, maxWidth: 380 }}>
        <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, textTransform: 'uppercase', color: C.navy }}>Five services, done right</h2>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: C.muted }}>Not sure what you need? Start with a consultation. We'll inspect, explain the options plainly and quote before any work begins.</p>
      </div>
      <div style={{ gridColumn: 'span 2', minWidth: 0, display: 'flex', flexDirection: 'column', borderTop: `2px solid ${C.navy}` }}>
        {SERVICES_DATA.map(([name, desc, jobs], i) => {
          const isOpen = open === i
          return (
            <button
              key={i}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="service-item"
              aria-expanded={isOpen}
              aria-controls={`service-panel-${i}`}
              style={{ all: 'unset', cursor: 'pointer', display: 'grid', gridTemplateColumns: '56px minmax(0,1fr) 24px', gap: 20, padding: '26px 0', borderBottom: `1px solid ${C.gold}`, alignItems: 'start', boxSizing: 'border-box', width: '100%' }}
            >
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 22, color: C.darkGold, paddingTop: 4, fontVariantNumeric: 'tabular-nums' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3vw,36px)', lineHeight: 1, textTransform: 'uppercase', color: C.navy }}>{name}</span>
                <span style={{ fontSize: 17, lineHeight: 1.5, color: C.muted, maxWidth: 560 }}>{desc}</span>
                <div id={`service-panel-${i}`} style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.25s ease' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 8, paddingBottom: 2 }}>
                      {jobs.map(j => (
                        <span key={j} style={{ fontSize: 13, fontWeight: 600, padding: '5px 10px', background: C.navy, color: C.bg, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{j}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span style={{ display: 'inline-flex', color: C.navy, transition: 'transform 0.25s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, marginTop: 6 }}>
                <Icon d={PATHS.chevron} size={20} />
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

const STEPS = [
  { n: 1, t: 'Call or request', d: "Tell us the problem or project. We'll ask a few questions and book a visit." },
  { n: 2, t: 'On-site assessment', d: 'We inspect, test and explain what we find in plain language.' },
  { n: 3, t: 'Written quote', d: 'A clear scope and fixed price. Nothing starts until you approve.' },
  { n: 4, t: 'Work & sign-off', d: 'Licensed, code-compliant work, tested and walked through with you.' },
]

function Process() {
  return (
    <section id="process" style={{ background: C.bgDim }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,112px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 56 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, textTransform: 'uppercase', color: C.navy, maxWidth: 640 }}>From first call to signed-off circuit</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: C.muted, maxWidth: 360 }}>No surprises on the invoice. You approve the scope and price before a single wire is touched.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 'clamp(32px,4vw,56px)' }}>
          {STEPS.map(step => (
            <div key={step.n} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: 32, height: 32, borderRadius: '50%', border: `2px solid ${C.navy}`, background: C.gold, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: C.navy, fontVariantNumeric: 'tabular-nums' }}>
                  {step.n}
                </span>
                <span className="step-connector" style={{ flex: 1, height: 2, background: C.teal, display: 'inline-block', opacity: 0.5 }}></span>
              </div>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 28, lineHeight: 1, textTransform: 'uppercase', color: C.navy }}>{step.t}</span>
              <span style={{ fontSize: 16, lineHeight: 1.55, color: C.muted }}>{step.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ position: 'relative', background: C.navy, color: C.bg, overflow: 'hidden' }}>
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,112px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
        <div style={{ position: 'relative', height: 'clamp(340px,44vw,560px)', overflow: 'hidden' }}>
          <img src={panelImg} alt="Electrical panel installation" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, border: `4px solid ${C.gold}`, pointerEvents: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 560 }}>
          <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(48px,6vw,80px)', lineHeight: 0.9, textTransform: 'uppercase', color: C.bg }}>
            Renan<br /><span style={{ color: C.gold }}>Bernard</span>
          </h2>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 22, letterSpacing: '0.08em', textTransform: 'uppercase', paddingBottom: 18, borderBottom: `2px solid ${C.gold}` }}>Electrical Technician II</span>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.light }}>Bernard's Electrical Solutions is a Belmopan-based practice built on one idea: electrical work should be done safely, explained clearly and built to last. Every job is carried out under a Public Utilities Commission licence.</p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 4 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, fontWeight: 600 }}>PUC Licence</span>
              <a href="https://wireman.puc.bz/wireman/page/6?search=" target="_blank" rel="noopener noreferrer" className="licence-link" style={{ fontFamily: 'ui-monospace,"Courier New",monospace', fontWeight: 700, fontSize: 24, letterSpacing: '0.04em', color: C.bg, borderBottom: `1px solid ${C.gold}`, paddingBottom: 1 }}>ETII00334</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, fontWeight: 600 }}>Based in</span>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '0.04em', color: C.bg }}>Belmopan, Belize</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SERVICE_CHIPS = ['Consultation', 'Residential', 'Commercial', 'Repair', 'Safety check']

const WEB3FORMS_KEY = 'a6429832-7cb9-4d43-9c37-b0dd32fee395'

function Contact() {
  const [pick, setPick] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New consultation request — Bernard's Electrical",
          from_name: "Bernard's Electrical Website",
          name: e.target.name.value.trim(),
          phone: e.target.phone.value.trim(),
          email: e.target.email.value.trim().toLowerCase(),
          service: pick || 'Not specified',
          message: e.target.msg.value.trim(),
        }),
      })
      const json = await res.json()
      if (json.success) {
        setSent(true)
      } else {
        setError('Something went wrong. Please call us directly at 501-610-2396.')
      }
    } catch {
      setError('Could not send. Please call us directly at 501-610-2396.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, textTransform: 'uppercase', color: C.navy }}>Request a consultation</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="https://maps.google.com/?q=15+Barbados+St+Belmopan+Belize" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 0', borderBottom: `1px solid ${C.gold}`, color: C.navy }}>
            <span style={{ width: 48, height: 48, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.bg }}>
              <Icon d={PATHS.pin} size={22} />
            </span>
            <span style={{ fontSize: 18, lineHeight: 1.4 }}>15 Barbados St.<br />Belmopan, Belize</span>
          </a>
          <a href="tel:5016102396" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 0', borderBottom: `1px solid ${C.gold}`, color: C.navy }}>
            <span style={{ width: 48, height: 48, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.bg }}>
              <Icon d={PATHS.phone} size={22} />
            </span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '0.03em', fontVariantNumeric: 'tabular-nums' }}>501-610-2396</span>
          </a>
          <a href="mailto:bernardseletricalsolutions@gmail.com" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 0', borderBottom: `1px solid ${C.gold}`, color: C.navy }}>
            <span style={{ width: 48, height: 48, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.bg }}>
              <Icon d={PATHS.mail} size={22} />
            </span>
            <span style={{ fontSize: 18 }}>bernardseletricalsolutions@gmail.com</span>
          </a>
        </div>
      </div>

      <div aria-live="polite" style={{ background: C.navy, color: C.bg, padding: 'clamp(28px,4vw,48px)', borderRadius: 4 }}>
        {!sent ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
<label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Name
              <input required name="name" placeholder="e.g. Maria Lopez" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: C.bg, fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Phone
              <input required name="phone" type="tel" placeholder="e.g. 501 610 0000" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: C.bg, fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%', fontVariantNumeric: 'tabular-nums' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Email
              <input required name="email" type="email" placeholder="e.g. you@example.com" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: C.bg, fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%' }} />
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>What do you need?</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {SERVICE_CHIPS.map(label => {
                  const on = pick === label
                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setPick(on ? null : label)}
                      className="chip-btn"
                      style={{ all: 'unset', cursor: 'pointer', padding: '9px 14px', fontSize: 15, fontWeight: 500, border: `1.5px solid ${on ? C.gold : C.border}`, background: on ? C.gold : 'transparent', color: on ? C.navy : C.bg, boxSizing: 'border-box', transition: 'background 0.15s, border-color 0.15s, color 0.15s' }}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Details
              <textarea name="msg" rows={3} placeholder="e.g. breakers keep tripping in the kitchen" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: C.bg, fontSize: 17, padding: '10px 0', resize: 'vertical', letterSpacing: 0, textTransform: 'none', width: '100%', fontFamily: "'Barlow',sans-serif" }} />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="submit-btn"
              style={{ all: 'unset', boxSizing: 'border-box', width: '100%', cursor: submitting ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: submitting ? C.border : C.gold, color: submitting ? C.light : C.navy, padding: '18px 28px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'background 0.2s, color 0.2s' }}
            >
              {submitting ? <><Spinner /> Sending…</> : 'Send request'}
            </button>
            {error && (
              <span role="alert" style={{ fontSize: 15, color: '#F4A261', marginTop: 4 }}>{error}</span>
            )}
          </form>
        ) : (
          <div className="form-success" role="status" style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '24px 0' }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 44, lineHeight: 0.95, textTransform: 'uppercase', color: C.teal }}>Request received.</span>
            <span style={{ fontSize: 18, lineHeight: 1.55, color: C.light }}>We'll call you back within one business day. For anything urgent, call <span style={{ fontVariantNumeric: 'tabular-nums' }}>501-610-2396</span>.</span>
            <button onClick={() => { setSent(false); setPick(null); setError(null) }} className="send-another" style={{ all: 'unset', cursor: 'pointer', alignSelf: 'flex-start', borderBottom: `2px solid ${C.gold}`, fontWeight: 600, paddingBottom: 2, color: C.bg }}>
              Send another
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: C.navy, color: C.bg, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px clamp(20px,4vw,48px)', display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 'clamp(24px,5vw,64px)', flexWrap: 'wrap', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.15 }}>
          <span><span style={{ color: C.gold, fontWeight: 700 }}>Committed to safety.</span><br />Focused on solutions.</span>
          <span><span style={{ color: C.gold, fontWeight: 700 }}>Powering today.</span><br />Building tomorrow.</span>
        </div>
        <span style={{ fontSize: 14, color: C.dim }}>Copyright© 2026 Bernard's Electrical Solutions</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, overflowX: 'hidden' }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
