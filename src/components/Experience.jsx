import { useEffect } from 'react'
import { MapPin, Calendar, CheckCircle } from 'lucide-react'
import { experiences, education } from '../data/portfolioData'

export default function Experience() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experiencia" className="relative w-full scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Header */}
        <div className="reveal mb-16 max-w-2xl text-left">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--terracota)', fontFamily: 'Space Grotesk' }}
          >
            Trajetória & Bagagem
          </p>
          <h2
            className="mt-3 leading-tight"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 700,
              color: 'var(--tinta)',
              letterSpacing: '-0.02em',
            }}
          >
            Vivência profissional & <span className="italic" style={{ color: 'var(--terracota)', fontWeight: 400 }}>formação técnica</span>.
          </h2>
          <p
            className="mt-4 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: 'Space Grotesk', color: 'var(--texto-suave)', fontSize: '1.05rem' }}
          >
            Experiência corporativa em ambiente de grande porte somada a entregas completas no mercado autônomo.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 items-start">

          {/* Work Experience Timeline */}
          <div className="reveal">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-8"
              style={{ color: 'var(--tinta)', fontFamily: 'Space Grotesk' }}
            >
              Experiência Profissional
            </p>

            <div className="space-y-0">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group relative flex gap-6 pb-12">
                  {/* Timeline connector and prominent accent dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className="h-5 w-5 rounded-full shrink-0 mt-1 shadow-sm"
                      style={{
                        background: 'var(--terracota)',
                        border: '3px solid var(--creme)',
                      }}
                    />
                    {idx < experiences.length - 1 && (
                      <div className="flex-1 w-0.5 mt-2" style={{ background: '#D9D0C2' }} />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="text-sm font-bold"
                        style={{ color: 'var(--terracota)', fontFamily: 'Space Grotesk' }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="rounded-full px-3 py-0.5 text-xs font-semibold"
                        style={{
                          background: 'var(--areia)',
                          color: 'var(--tinta)',
                          border: '1px solid #D5C9B3',
                          fontFamily: 'Space Grotesk',
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Cargo em sans-serif semibold para leitura imediata */}
                    <h3
                      className="leading-snug text-xl sm:text-2xl font-bold"
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        color: 'var(--tinta)',
                      }}
                    >
                      {exp.role}
                    </h3>

                    <p
                      className="mt-1 text-base font-semibold"
                      style={{ color: 'var(--texto-suave)', fontFamily: 'Space Grotesk' }}
                    >
                      {exp.company}
                    </p>

                    <p
                      className="mt-1 text-xs flex items-center gap-1.5"
                      style={{ color: 'var(--ink-faint)', fontFamily: 'Space Grotesk' }}
                    >
                      <MapPin size={13} style={{ color: 'var(--terracota)' }} /> {exp.location}
                    </p>

                    <p
                      className="mt-4 text-base leading-relaxed"
                      style={{
                        color: 'var(--texto-suave)',
                        fontFamily: 'Space Grotesk',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Skills pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span
                          key={skill}
                          className="rounded-full px-3.5 py-1 text-xs font-semibold"
                          style={{
                            background: '#ffffff',
                            color: 'var(--tinta)',
                            border: '1px solid #D8CFC1',
                            fontFamily: 'Space Grotesk',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education — Solid Areia Card */}
          <div className="reveal" style={{ animationDelay: '150ms' }}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-8"
              style={{ color: 'var(--tinta)', fontFamily: 'Space Grotesk' }}
            >
              Formação Acadêmica
            </p>

            <div
              className="rounded-3xl p-8 lg:p-10 shadow-md"
              style={{
                background: 'var(--areia)',
                border: '1.5px solid #D4C7AE',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={14} style={{ color: 'var(--terracota)' }} />
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{ color: 'var(--terracota)', fontFamily: 'Space Grotesk' }}
                >
                  {education.period}
                </span>
              </div>

              {/* Título de Formação em sans-serif semibold */}
              <h3
                className="text-2xl font-bold"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'var(--tinta)',
                  letterSpacing: '-0.02em',
                }}
              >
                {education.degree}
              </h3>

              <p
                className="mt-1 text-base font-semibold"
                style={{ color: 'var(--texto-suave)', fontFamily: 'Space Grotesk' }}
              >
                {education.institution}
              </p>

              <p
                className="mt-1 text-xs flex items-center gap-1.5"
                style={{ color: 'var(--ink-faint)', fontFamily: 'Space Grotesk' }}
              >
                <MapPin size={12} style={{ color: 'var(--terracota)' }} /> {education.location}
              </p>

              <p
                className="mt-5 text-base leading-relaxed"
                style={{
                  color: 'var(--texto-suave)',
                  fontFamily: 'Space Grotesk',
                  lineHeight: 1.7,
                }}
              >
                {education.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-3 pt-5" style={{ borderTop: '1px solid #D8CBB2' }}>
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: 'var(--tinta)', fontFamily: 'Space Grotesk' }}>
                    <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--terracota)' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
