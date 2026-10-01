import { useEffect } from 'react'
import { MapPin } from 'lucide-react'
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
    <section id="experiencia" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}>
            Experiência & Formação
          </p>
          <h2
            className="leading-tight"
            style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em' }}
          >
            Vivência profissional & formação contínua.
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">

          {/* Work Experience — timeline */}
          <div className="reveal" style={{ animationDelay: '100ms' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}>
              Experiência profissional
            </p>

            <div className="space-y-0">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group relative flex gap-6 pb-12">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className="h-4 w-4 rounded-full shrink-0 mt-1"
                      style={{ background: 'var(--accent)', border: '3px solid var(--bg)' }}
                    />
                    {idx < experiences.length - 1 && (
                      <div className="flex-1 w-px mt-2" style={{ background: '#d9d3cb' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                        style={{ background: 'var(--bg-warm)', color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <h3
                      className="leading-snug"
                      style={{ fontFamily: 'Fraunces', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}
                    >
                      {exp.role}
                    </h3>

                    <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}>
                      {exp.company}
                    </p>

                    <p className="mt-1 text-xs flex items-center gap-1" style={{ color: 'var(--ink-faint)', fontFamily: 'Space Grotesk' }}>
                      <MapPin size={11} /> {exp.location}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk', lineHeight: 1.7 }}>
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.skills.map(skill => (
                        <span
                          key={skill}
                          className="rounded-full px-3 py-1 text-xs font-medium"
                          style={{ background: 'var(--bg-warm)', color: 'var(--ink)', border: '1px solid #d9d3cb', fontFamily: 'Space Grotesk' }}
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

          {/* Education — clean card */}
          <div className="reveal" style={{ animationDelay: '200ms' }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}>
              Formação acadêmica
            </p>

            <div
              className="rounded-3xl p-8"
              style={{ background: 'var(--navy-light)', border: '1px solid rgba(36,51,88,0.12)' }}
            >
              <p
                className="text-xs font-semibold mb-4"
                style={{ color: 'var(--navy)', fontFamily: 'Space Grotesk', letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                {education.period}
              </p>

              <h3
                style={{ fontFamily: 'Fraunces', fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em' }}
              >
                {education.degree}
              </h3>

              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--navy)', fontFamily: 'Space Grotesk', opacity: 0.7 }}>
                {education.institution}
              </p>

              <p className="mt-1 text-xs flex items-center gap-1" style={{ color: 'var(--navy)', opacity: 0.5, fontFamily: 'Space Grotesk' }}>
                <MapPin size={11} /> {education.location}
              </p>

              <p className="mt-5 text-sm leading-relaxed" style={{ color: 'var(--navy)', opacity: 0.8, fontFamily: 'Space Grotesk', lineHeight: 1.7 }}>
                {education.description}
              </p>

              <div className="mt-6 space-y-2.5" style={{ borderTop: '1px solid rgba(36,51,88,0.15)', paddingTop: '1.25rem' }}>
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--navy)', opacity: 0.75, fontFamily: 'Space Grotesk' }}>
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: 'var(--navy)' }} />
                    {h}
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-2xl px-4 py-3 text-center"
                style={{ background: 'var(--navy)', color: '#fff' }}
              >
                <p className="text-sm font-bold" style={{ fontFamily: 'Fraunces' }}>{education.status}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-24 section-rule" />
    </section>
  )
}
