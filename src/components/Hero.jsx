import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const FULL_NAME = 'Iarley Marques'

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('')
  const [nameComplete, setNameComplete] = useState(false)
  const indexRef = useRef(0)

  // Typewriter for name
  useEffect(() => {
    const timer = setTimeout(() => {
      function type() {
        if (indexRef.current < FULL_NAME.length) {
          setDisplayedName(FULL_NAME.slice(0, indexRef.current + 1))
          indexRef.current++
          setTimeout(type, 80)
        } else {
          setNameComplete(true)
        }
      }
      type()
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="inicio" className="relative pt-32 pb-0 lg:pt-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* — Top label row */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
            style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent)', fontFamily: 'Space Grotesk' }}
          >
            <span className="inline-block h-2 w-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            {personalInfo.statusText}
          </span>
          <span className="text-xs font-medium" style={{ color: 'var(--ink-faint)', fontFamily: 'Space Grotesk' }}>
            <MapPin size={12} className="inline mr-1" style={{ color: 'var(--ink-faint)' }} />
            {personalInfo.location}
          </span>
        </div>

        {/* — Main grid: text left, photo right */}
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">

          {/* Left: headline + bio + CTAs */}
          <div>
            {/* Giant serif headline with typewriter */}
            <h1
              className="leading-none tracking-tight"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
              }}
            >
              {displayedName}
              {!nameComplete && <span className="cursor" />}
            </h1>

            {/* Role subtitle — handsome italic serif */}
            <p
              className="mt-4 leading-tight"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--ink-muted)',
              }}
            >
              {personalInfo.role}
            </p>

            {/* Bio */}
            <p
              className="mt-6 max-w-xl leading-relaxed"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                color: 'var(--ink-muted)',
                lineHeight: 1.75,
              }}
            >
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all"
                style={{ background: 'var(--ink)', color: '#fff', fontFamily: 'Space Grotesk' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
              >
                Ver Projetos
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all"
                style={{
                  border: '1.5px solid var(--ink)',
                  color: 'var(--ink)',
                  fontFamily: 'Space Grotesk',
                  background: 'transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
              >
                Entrar em Contato
              </a>
            </div>

            {/* Quick stats row */}
            <div
              className="mt-10 flex flex-wrap gap-8 pt-8"
              style={{ borderTop: '1px solid #d9d3cb' }}
            >
              {[
                { value: '4', label: 'Projetos em produção' },
                { value: '11', label: 'Certificações' },
                { value: '2', label: 'Experiências reais' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="leading-none"
                    style={{ fontFamily: 'Fraunces', fontSize: '2.2rem', fontWeight: 700, color: 'var(--ink)' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-xs font-medium"
                    style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="reveal relative self-end" style={{ animationDelay: '200ms' }}>
            {/* Color block behind photo */}
            <div
              className="absolute bottom-0 right-0 w-full"
              style={{
                height: '85%',
                background: 'var(--accent-light)',
                borderRadius: '24px 24px 0 0',
                zIndex: 0,
              }}
            />

            {/* Photo */}
            <div className="relative z-10 flex justify-center">
              <img
                src="/iarley.jpg"
                alt="Iarley Marques"
                className="object-cover object-top"
                style={{
                  width: '320px',
                  height: '420px',
                  borderRadius: '20px 20px 0 0',
                  display: 'block',
                  filter: 'contrast(1.04)',
                }}
                onError={(e) => {
                  // fallback: show initials block if photo fails
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              {/* fallback initials block */}
              <div
                style={{
                  display: 'none',
                  width: '320px',
                  height: '420px',
                  borderRadius: '20px 20px 0 0',
                  background: 'var(--accent)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Fraunces',
                  fontSize: '5rem',
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '-0.04em',
                }}
              >
                IM
              </div>
            </div>

            {/* Floating role badge */}
            <div
              className="absolute left-0 top-1/3 -translate-x-1/2 rounded-2xl px-4 py-3 shadow-lg"
              style={{
                background: '#fff',
                border: '1px solid #e9e3db',
                zIndex: 20,
                transform: 'translateX(-40%) translateY(-20%)',
              }}
            >
              <p className="text-xs font-semibold" style={{ color: 'var(--ink)', fontFamily: 'Space Grotesk' }}>Full Stack & IA</p>
              <p className="text-[11px]" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}>Solar Coca-Cola</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width thin separator */}
      <div className="mt-16 section-rule" />
    </section>
  )
}
