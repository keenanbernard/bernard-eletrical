import { useState, useEffect, useCallback } from 'react'
import { Analytics } from '@vercel/analytics/react'
import logoImg from './assets/logo.webp'
import panelImg from './assets/panel-new.webp'
import doeImg from './assets/doe.webp'
import AboutPage from './AboutPage'
import { navigate } from './router'
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

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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
        <a href="#" onClick={e => { e.preventDefault(); scrollTo('top') }} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logoImg} alt="Bernard's Electrical Solutions crest" style={{ height: 48, width: 'auto', display: 'block' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.navy }}>Bernard's</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.darkGold }}>Electrical Solutions</span>
          </div>
        </a>
        <nav className="header-nav" aria-label="Primary" style={{ display: 'flex', gap: 28, marginLeft: 'auto', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }} className="nav-link">Services</a>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('process') }} className="nav-link">How we work</a>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('works') }} className="nav-link">Works</a>
          <a href="/about" onClick={e => { e.preventDefault(); navigate('/about') }} className="nav-link">About</a>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('contact') }} className="nav-link">Contact</a>
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
          <span className={`icon-swap${menuOpen ? ' icon-swap--open' : ''}`}>
              <span className="icon-swap__icon icon-swap__icon--menu"><Icon d={PATHS.menu} size={24} /></span>
              <span className="icon-swap__icon icon-swap__icon--close"><Icon d={PATHS.close} size={24} /></span>
            </span>
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} style={{ padding: '4px clamp(20px,4vw,48px) 24px' }}>
        <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('services'); setMenuOpen(false) }} className="nav-link mobile-nav-link">Services</a>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('process'); setMenuOpen(false) }} className="nav-link mobile-nav-link">How we work</a>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('works'); setMenuOpen(false) }} className="nav-link mobile-nav-link">Works</a>
          <a href="/about" onClick={e => { e.preventDefault(); navigate('/about'); setMenuOpen(false) }} className="nav-link mobile-nav-link">About</a>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('contact'); setMenuOpen(false) }} className="nav-link mobile-nav-link">Contact</a>
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
          <span style={{ color: C.darkGold }}>the first time.</span>
        </h1>
        <p style={{ margin: 0, fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.55, color: C.muted, maxWidth: 520 }}>
          Electrical consultation, installation and repair for homes and businesses across Belize. Honest assessments, code-compliant work and a licensed technician on every job.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('contact') }} className="btn-primary" style={{ padding: '20px 36px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 21, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Book a consultation</a>
          <a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }} className="btn-ghost" style={{ padding: '14px 0', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 17, letterSpacing: '0.06em', textTransform: 'uppercase' }}>See services <span aria-hidden="true">→</span></a>
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
                <div id={`service-panel-${i}`} style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: `grid-template-rows ${isOpen ? '0.25s' : '0.2s'} ease-in-out` }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 8, paddingBottom: 2 }}>
                      {jobs.map(j => (
                        <span key={j} style={{ fontSize: 13, fontWeight: 600, padding: '5px 10px', background: C.navy, color: C.bg, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{j}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span style={{ display: 'inline-flex', color: C.navy, transition: `transform ${isOpen ? '0.25s' : '0.2s'} ease-in-out`, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, marginTop: 6 }}>
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

const WORKS = [
  {
    client: 'Department of the Environment',
    logo: doeImg,
    scope: 'Inspection, distribution boards, cable lug replacement and bus bar service',
    period: 'October 2026',
  },
]

function RecentWorks() {
  return (
    <section id="works" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, textTransform: 'uppercase', color: C.navy }}>Recent works</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: C.muted, maxWidth: 460 }}>Clients who've trusted us with their electrical.</p>
        </div>
        <a href="#" onClick={e => { e.preventDefault(); scrollTo('contact') }} className="btn-ghost" style={{ padding: '14px 0', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 17, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          Work with us <span aria-hidden="true">→</span>
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,320px),1fr))', gap: 'clamp(16px,3vw,32px)' }}>
        {WORKS.map(({ client, logo, scope, period }) => (
          <div key={client} style={{ border: `1.5px solid ${C.gold}`, display: 'flex', flexDirection: 'column', gap: 0, overflow: 'hidden' }}>
            <div style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(28px,4vw,40px)', minHeight: 160 }}>
              {logo
                ? <img src={logo} alt={client} style={{ maxWidth: '100%', maxHeight: 100, objectFit: 'contain', display: 'block' }} />
                : <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(18px,2vw,24px)', textTransform: 'uppercase', color: C.navy, textAlign: 'center', lineHeight: 1.1 }}>{client}</span>
              }
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10, borderTop: `1.5px solid ${C.gold}` }}>
              {logo && <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, lineHeight: 1.1, textTransform: 'uppercase', color: C.navy }}>{client}</span>}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                {scope && <span style={{ fontSize: 13, fontWeight: 600, padding: '5px 10px', background: C.navy, color: C.bg, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{scope}</span>}
                <span style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.darkGold, fontWeight: 600 }}>{period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ background: C.navy, color: C.bg }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(48px,6vw,80px)', lineHeight: 0.9, textTransform: 'uppercase', color: C.bg }}>
            Renan<br /><span style={{ color: C.gold }}>Bernard</span>
          </h2>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 20, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.dim }}>Electrical Technician II · <a href="https://wireman.puc.bz/wireman/page/6?search=" target="_blank" rel="noopener noreferrer" title="Verify licence on the PUC wireman registry" style={{ color: C.bg, borderBottom: `1px solid ${C.gold}`, paddingBottom: 1, fontFamily: 'ui-monospace,"Courier New",monospace', letterSpacing: '0.04em' }}>ETII00334</a></span>
        </div>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.light, maxWidth: 540 }}>
          A Belmopan-based practice built on one idea: electrical work should be done safely, explained clearly, built to last.
        </p>
        <a href="/about" onClick={e => { e.preventDefault(); navigate('/about') }} style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, borderBottom: `2px solid ${C.gold}`, paddingBottom: 2, textDecoration: 'none' }}>
          Full profile <span aria-hidden="true">→</span>
        </a>
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
          subject: "New consultation request: Bernard's Electrical",
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
              <input required name="name" placeholder="Isabella Richards" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: C.bg, fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Phone
              <input required name="phone" type="tel" placeholder="501-631-5325" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: C.bg, fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%', fontVariantNumeric: 'tabular-nums' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Email
              <input required name="email" type="email" placeholder="irichards@gmail.com" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: C.bg, fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%' }} />
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

function PrivacyModal({ onClose }) {
  const [animOut, setAnimOut] = useState(false)

  const close = useCallback(() => {
    setAnimOut(true)
    setTimeout(onClose, 200)
  }, [onClose])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [close])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
      onClick={e => { if (e.target === e.currentTarget) close() }}
      style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(11,31,63,0.72)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 'clamp(16px,4vw,40px)' }}
    >
      <div className={`modal-panel${animOut ? ' modal-panel--closing' : ''}`} style={{ background: C.bg, color: C.navy, width: '100%', maxWidth: 680, maxHeight: '85vh', overflowY: 'auto', padding: 'clamp(28px,5vw,52px)', position: 'relative' }}>
        <button
          onClick={close}
          aria-label="Close privacy policy"
          style={{ all: 'unset', cursor: 'pointer', position: 'absolute', top: 20, right: 20, color: C.muted, display: 'flex' }}
        >
          <Icon d={PATHS.close} size={22} />
        </button>

        <h2 style={{ margin: '0 0 6px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1, textTransform: 'uppercase', color: C.navy }}>Privacy Policy</h2>
        <p style={{ margin: '0 0 28px', fontSize: 13, color: C.muted, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>Last updated November 2026</p>

        {[
          ['What we collect', 'When you submit the contact form we collect your name, phone number, email address, the service type you select, any details you write in the message field. We use this information solely to respond to your enquiry.'],
          ['Analytics', 'We use Vercel Analytics to count page views and understand how visitors navigate the site. This data is anonymous. No names, emails or device identifiers are stored.'],
          ['Third parties we share data with', 'Contact form submissions are processed by Web3Forms (web3forms.com), whose servers receive and forward your details to us by email. Anonymous analytics data is processed by Vercel, Inc. We do not sell or share your information with any other party.'],
          ['Retention', 'Form submission data is retained only as long as needed to respond to your enquiry and is then deleted. Analytics data is aggregate and contains no personal information.'],
          ['Your rights', 'You may request access to, correction of, or deletion of any personal data we hold about you by contacting us at the details below.'],
          ['Contact', 'Bernard\'s Electrical Solutions · 15 Barbados St., Belmopan, Belize · bernardseletricalsolutions@gmail.com · 501-610-2396'],
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

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <>
      <footer style={{ background: C.navy, color: C.bg, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(32px,4vw,48px) clamp(20px,4vw,48px) 0' }}>
          <div className="footer__grid">

            {/* Brand */}
            <div className="footer__brand">
              <a href="#" onClick={e => { e.preventDefault(); scrollTo('top') }} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                <img src={logoImg} alt="Bernard's Electrical Solutions" style={{ height: 44, width: 'auto', display: 'block' }} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.bg }}>Bernard's</span>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold }}>Electrical Solutions</span>
                </div>
              </a>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 24, flexWrap: 'wrap', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.2 }}>
                <span><span style={{ color: C.gold, fontWeight: 700 }}>Committed to safety.</span><br />Focused on solutions.</span>
                <span><span style={{ color: C.gold, fontWeight: 700 }}>Powering today.</span><br />Building tomorrow.</span>
              </div>
              <div className="footer__social">
                <a href="https://www.instagram.com/bernardselectrical/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h5 className="footer__heading">Explore</h5>
              <ul className="footer__list">
                <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }} className="footer__link">Services</a></li>
                <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('process') }} className="footer__link">How we work</a></li>
                <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('works') }} className="footer__link">Works</a></li>
                <li><a href="/about" onClick={e => { e.preventDefault(); navigate('/about') }} className="footer__link">About</a></li>
                <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('contact') }} className="footer__link">Contact</a></li>
              </ul>
            </div>

            {/* Find Us */}
            <div>
              <h5 className="footer__heading">Find Us</h5>
              <ul className="footer__list">
                <li><a href="https://maps.google.com/?q=15+Barbados+St+Belmopan+Belize" target="_blank" rel="noopener noreferrer" className="footer__link">15 Barbados St., Belmopan</a></li>
                <li><a href="tel:5016102396" className="footer__link" style={{ fontVariantNumeric: 'tabular-nums' }}>501-610-2396</a></li>
                <li><a href="mailto:bernardseletricalsolutions@gmail.com" className="footer__link" style={{ wordBreak: 'break-all' }}>bernardseletricalsolutions@gmail.com</a></li>
              </ul>
            </div>

          </div>

          <div className="footer__bottom">
            <span style={{ fontSize: 13, color: C.dim }}>© {new Date().getFullYear()} Bernard's Electrical Solutions</span>
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

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: C.bg, borderBottom: '1px solid rgba(11,31,63,0.12)', padding: '12px clamp(20px,4vw,48px)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src={logoImg} alt="Bernard's Electrical Solutions crest" style={{ height: 48, width: 'auto' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.navy }}>Bernard's</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.darkGold }}>Electrical Solutions</span>
          </div>
        </a>
      </header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'clamp(48px,8vw,96px) clamp(20px,4vw,48px)', textAlign: 'center', gap: 32 }}>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.darkGold }}>404</span>
        <h1 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.9, textTransform: 'uppercase', color: C.navy }}>Page not<br />found.</h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: C.muted, maxWidth: 400 }}>This page doesn't exist. Head back home or give us a call.</p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/" className="btn-primary" style={{ padding: '18px 32px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Back to home</a>
          <a href="tel:5016102396" className="btn-ghost" style={{ padding: '14px 0', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 17, letterSpacing: '0.06em', textTransform: 'uppercase', fontVariantNumeric: 'tabular-nums' }}>501-610-2396 <span aria-hidden="true">→</span></a>
        </div>
      </main>
    </div>
  )
}

function getPage() {
  const p = window.location.pathname
  if (p === '/' || p === '') return 'home'
  if (p === '/about') return 'about'
  return 'notfound'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const handler = () => setPage(getPage())
    window.addEventListener('routechange', handler)
    window.addEventListener('popstate', handler)
    return () => {
      window.removeEventListener('routechange', handler)
      window.removeEventListener('popstate', handler)
    }
  }, [])

  if (page === 'about') return <><AboutPage /><Analytics /></>
  if (page === 'notfound') return <><NotFound /><Analytics /></>

  return (
    <div style={{ minHeight: '100vh', background: C.bg, overflowX: 'hidden' }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <RecentWorks />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
