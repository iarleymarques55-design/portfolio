import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
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
    <section id="inicio" className="relative w-full pt-32 pb-0 lg:pt-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">

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
                color: 'var(--tinta)',
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
                color: 'var(--texto-suave)',
              }}
            >
              {personalInfo.role}
            </p>

            {/* Bio */}
            <p
              className="mt-6 max-w-xl leading-relaxed"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
                color: 'var(--texto-suave)',
                lineHeight: 1.75,
              }}
            >
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all cursor-pointer"
                style={{ background: 'var(--tinta)', color: '#fff', fontFamily: 'Space Grotesk' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--terracota)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--tinta)'}
              >
                Ver Projetos
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all cursor-pointer"
                style={{
                  border: '1.5px solid var(--tinta)',
                  color: 'var(--tinta)',
                  fontFamily: 'Space Grotesk',
                  background: 'transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--tinta)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--tinta)'; }}
              >
                Entrar em Contato
              </a>
            </div>

            {/* Quick stats row */}
            <div
              className="mt-10 flex flex-wrap gap-8 pt-8"
              style={{ borderTop: '1px solid #DCD3C5' }}
            >
              {[
                { value: '4', label: 'Projetos em produção' },
                { value: '11', label: 'Certificações' },
                { value: '2', label: 'Experiências reais' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="leading-none"
                    style={{ fontFamily: 'Fraunces', fontSize: '2.2rem', fontWeight: 700, color: 'var(--tinta)' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-xs font-medium"
                    style={{ color: 'var(--texto-suave)', fontFamily: 'Space Grotesk' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo cleanly cropped without background block or floating badge */}
          <div className="reveal relative self-end flex justify-center" style={{ animationDelay: '200ms' }}>
            <img
              src="/iarley.jpg"
              alt="Iarley Marques"
              className="object-cover object-top shadow-lg"
              style={{
                width: '320px',
                height: '430px',
                borderRadius: '24px 24px 0 0',
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
                height: '430px',
                borderRadius: '24px 24px 0 0',
                background: 'var(--terracota)',
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
        </div>
      </div>

      {/* Full-width thin separator */}
      <div className="mt-16 section-rule" />
    </section>
  )
}
