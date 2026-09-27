import { useState } from 'react'
import logoImg from './assets/logo.png'
import panelImg from './assets/New panel.png'
import './App.css'

const C = {
  bg: '#F3F1EA',
  navy: '#0B1F3F',
  gold: '#D9A21B',
  darkGold: '#8A6A12',
  muted: '#33415C',
  light: '#C9D1E0',
  border: '#4A5D80',
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
    </svg>
  )
}

function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 10, background: C.bg, borderBottom: '1px solid rgba(11,31,63,0.12)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '12px clamp(20px,4vw,48px)', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logoImg} alt="Bernard's Electrical Solutions crest" style={{ height: 48, width: 'auto', display: 'block' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.navy }}>Bernard's</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.darkGold }}>Electrical Solutions</span>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 28, marginLeft: 'auto', flexWrap: 'wrap', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">How we work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <a href="tel:5016102396" className="btn-phone" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 18px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '0.06em' }}>
          <PhoneIcon />
          501-610-2396
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,6vw,88px) clamp(20px,4vw,48px) clamp(48px,6vw,96px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 620 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.darkGold }}>
          <span style={{ width: 36, height: 2, background: C.gold, flexShrink: 0, display: 'inline-block' }}></span>
          Belmopan, Belize · PUC Licensed
        </div>
        <h1 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(56px,8.4vw,120px)', lineHeight: 0.88, letterSpacing: '-0.005em', textTransform: 'uppercase', color: C.navy }}>
          Wired right<br />
          <span style={{ color: C.gold }}>the first time.</span>
        </h1>
        <p style={{ margin: 0, fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.55, color: C.muted, maxWidth: 520 }}>
          Electrical consultation, installation and repair for homes and businesses across Belize. Honest assessments, code-compliant work and a licensed technician on every job.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '18px 28px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Book a consultation</a>
          <a href="#services" className="btn-outline" style={{ border: '2px solid #0B1F3F', padding: '16px 26px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: '0.08em', textTransform: 'uppercase' }}>See services</a>
        </div>
      </div>

      <div style={{ position: 'relative', height: 'clamp(380px,48vw,600px)', marginRight: 'calc(-1 * clamp(20px,4vw,48px))' }}>
        <div style={{ position: 'absolute', inset: 0, background: C.gold, clipPath: 'polygon(22% 0,100% 0,100% 100%,22% 100%,0 50%)' }}></div>
        <div style={{ position: 'absolute', inset: '0 0 0 14px', background: `${C.navy} url(${panelImg}) center/cover no-repeat`, clipPath: 'polygon(22% 0,100% 0,100% 100%,22% 100%,0 50%)' }}></div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, background: C.navy, color: '#F3F1EA', padding: '22px 28px', display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 300 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.gold }}>Reliable. Safe. Professional.</span>
          <span style={{ fontSize: 15, lineHeight: 1.45, color: C.light }}>Quality electrical solutions with integrity, precision and care.</span>
        </div>
      </div>
    </section>
  )
}

function ServicesBand() {
  return (
    <div style={{ background: C.navy, color: '#F3F1EA' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '22px clamp(20px,4vw,48px)', display: 'flex', gap: 'clamp(20px,4vw,56px)', flexWrap: 'wrap', alignItems: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 17, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <span style={{ color: C.gold }}>Residential</span>
        <span>Commercial</span>
        <span style={{ color: C.gold }}>Maintenance</span>
        <span>Troubleshooting</span>
        <span style={{ color: C.gold }}>Safety compliance</span>
      </div>
    </div>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 110, maxWidth: 380 }}>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.darkGold }}>01 / Services</span>
        <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, textTransform: 'uppercase', color: C.navy }}>What we take care of</h2>
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
              style={{ all: 'unset', cursor: 'pointer', display: 'grid', gridTemplateColumns: '56px minmax(0,1fr) 28px', gap: 20, padding: '26px 0', borderBottom: `1px solid ${C.gold}`, alignItems: 'start', boxSizing: 'border-box', width: '100%' }}
            >
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 22, color: '#B8860B', paddingTop: 4 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3vw,36px)', lineHeight: 1, textTransform: 'uppercase', color: C.navy }}>{name}</span>
                <span style={{ fontSize: 17, lineHeight: 1.5, color: C.muted, maxWidth: 560 }}>{desc}</span>
                {isOpen && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 6 }}>
                    {jobs.map(j => (
                      <span key={j} style={{ fontSize: 14, fontWeight: 500, padding: '6px 12px', background: C.navy, color: '#F3F1EA' }}>{j}</span>
                    ))}
                  </div>
                )}
              </div>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 30, lineHeight: 1, color: C.navy, paddingTop: 2 }}>
                {isOpen ? '−' : '+'}
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
    <section id="process" style={{ background: '#E8E4D8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,112px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.darkGold }}>02 / How we work</span>
            <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, textTransform: 'uppercase', color: C.navy, maxWidth: 640 }}>From first call to signed-off circuit</h2>
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: C.muted, maxWidth: 360 }}>No surprises on the invoice. You approve the scope and price before a single wire is touched.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 0 }}>
          {STEPS.map(step => (
            <div key={step.n} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 28px 8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', border: `3px solid ${C.navy}`, background: C.gold, flexShrink: 0, display: 'inline-block' }}></span>
                <span style={{ flex: 1, height: 2, background: C.navy, display: 'inline-block' }}></span>
              </div>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: '0.14em', color: C.darkGold }}>STEP {step.n}</span>
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
    <section id="about" style={{ position: 'relative', background: C.navy, color: '#F3F1EA', overflow: 'hidden' }}>
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,112px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', padding: '40px 0' }}>
          <div style={{ position: 'absolute', top: -200, bottom: -200, left: -800, right: -10, background: C.gold, clipPath: 'polygon(0 0,calc(100% - 140px) 0,100% 50%,calc(100% - 140px) 100%,0 100%)' }}></div>
          <div style={{ position: 'absolute', top: -200, bottom: -200, left: -800, right: 0, background: '#F3F1EA', clipPath: 'polygon(0 0,calc(100% - 140px) 0,100% 50%,calc(100% - 140px) 100%,0 100%)' }}></div>
          <img src={logoImg} alt="Bernard's Electrical Solutions crest" style={{ position: 'relative', width: 'min(100%,360px)', height: 'auto', display: 'block', filter: 'drop-shadow(0 12px 24px rgba(11,31,63,0.25))' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 560 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gold }}>03 / About</span>
          <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(48px,6vw,80px)', lineHeight: 0.9, textTransform: 'uppercase', color: '#F3F1EA' }}>
            Renan<br /><span style={{ color: C.gold }}>Bernard</span>
          </h2>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 22, letterSpacing: '0.08em', textTransform: 'uppercase', paddingBottom: 18, borderBottom: `2px solid ${C.gold}` }}>Electrical Technician II</span>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: C.light }}>Bernard's Electrical Solutions is a Belmopan-based practice built on one idea: electrical work should be done safely, explained clearly and built to last. Every job is carried out under a Public Utilities Commission licence.</p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 4 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, fontWeight: 600 }}>PUC Licence</span>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '0.04em' }}>ETII00334</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, fontWeight: 600 }}>Based in</span>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '0.04em' }}>Belmopan, Belize</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SERVICE_CHIPS = ['Consultation', 'Residential', 'Commercial', 'Repair', 'Safety check']

function Contact() {
  const [pick, setPick] = useState(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,8vw,120px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.darkGold }}>04 / Contact</span>
        <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.95, textTransform: 'uppercase', color: C.navy }}>Tell us what's going on</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href="https://maps.google.com/?q=15+Barbados+St+Belmopan+Belize" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 0', borderBottom: `1px solid ${C.gold}`, color: C.navy }}>
            <span style={{ width: 48, height: 48, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#F3F1EA"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
            </span>
            <span style={{ fontSize: 18, lineHeight: 1.4 }}>15 Barbados St.<br />Belmopan, Belize</span>
          </a>
          <a href="tel:5016102396" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 0', borderBottom: `1px solid ${C.gold}`, color: C.navy }}>
            <span style={{ width: 48, height: 48, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#F3F1EA"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" /></svg>
            </span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: '0.03em' }}>501-610-2396</span>
          </a>
          <a href="mailto:renly34@gmail.com" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '18px 0', borderBottom: `1px solid ${C.gold}`, color: C.navy }}>
            <span style={{ width: 48, height: 48, borderRadius: '50%', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#F3F1EA"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V8l8 5 8-5v-.7z" /></svg>
            </span>
            <span style={{ fontSize: 18 }}>renly34@gmail.com</span>
          </a>
        </div>
      </div>

      <div style={{ background: C.navy, color: '#F3F1EA', padding: 'clamp(28px,4vw,48px)', borderTop: `6px solid ${C.gold}` }}>
        {!sent ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 28, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Request a consultation</span>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Name
              <input required name="name" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: '#F3F1EA', fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Phone
              <input required name="phone" type="tel" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: '#F3F1EA', fontSize: 18, padding: '10px 0', letterSpacing: 0, textTransform: 'none', width: '100%' }} />
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
                      onClick={() => setPick(on ? null : label)}
                      style={{ all: 'unset', cursor: 'pointer', padding: '9px 14px', fontSize: 15, fontWeight: 500, border: `1.5px solid ${on ? C.gold : C.border}`, background: on ? C.gold : 'transparent', color: on ? C.navy : '#F3F1EA', boxSizing: 'border-box', transition: 'background 0.15s, border-color 0.15s, color 0.15s' }}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, color: C.gold }}>
              Details
              <textarea name="msg" rows={3} placeholder="e.g. breakers keep tripping in the kitchen" className="form-input" style={{ background: 'transparent', border: 0, borderBottom: `2px solid ${C.border}`, color: '#F3F1EA', fontSize: 17, padding: '10px 0', resize: 'vertical', letterSpacing: 0, textTransform: 'none', width: '100%', fontFamily: "'Barlow',sans-serif" }} />
            </label>
            <button type="submit" className="submit-btn" style={{ all: 'unset', cursor: 'pointer', alignSelf: 'flex-start', background: C.gold, color: C.navy, padding: '16px 28px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Send request
            </button>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '24px 0' }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 44, lineHeight: 0.95, textTransform: 'uppercase', color: C.gold }}>Request received.</span>
            <span style={{ fontSize: 18, lineHeight: 1.55, color: C.light }}>We'll call you back within one business day. For anything urgent, call 501-610-2396.</span>
            <button onClick={() => { setSent(false); setPick(null) }} className="send-another" style={{ all: 'unset', cursor: 'pointer', alignSelf: 'flex-start', borderBottom: `2px solid ${C.gold}`, fontWeight: 600, paddingBottom: 2, color: '#F3F1EA' }}>
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
    <footer style={{ background: C.navy, color: '#F3F1EA', borderTop: `6px solid ${C.gold}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px clamp(20px,4vw,48px)', display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 'clamp(24px,5vw,64px)', flexWrap: 'wrap', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.15 }}>
          <span><span style={{ color: C.gold, fontWeight: 700 }}>Committed to safety.</span><br />Focused on solutions.</span>
          <span><span style={{ color: C.gold, fontWeight: 700 }}>Powering today.</span><br />Building tomorrow.</span>
        </div>
        <span style={{ fontSize: 14, color: '#A9B4C8' }}>© 2026 Bernard's Electrical Solutions</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <ServicesBand />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
