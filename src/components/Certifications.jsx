import { useState, useEffect } from 'react'
import { Award, Check, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData'

const filterCategories = [
  { id: 'all', label: 'Todas (11)' },
  { id: 'IA', label: 'Inteligência Artificial (5)' },
  { id: 'Cloud', label: 'Nuvem & AWS' },
  { id: 'Dev', label: 'Programação' },
  { id: 'Gestão', label: 'Gestão & Outros' },
]

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [activeFilter])

  const filteredCerts = certifications.filter((cert) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'Gestão') return cert.category === 'Gestão' || cert.category === 'Geral'
    return cert.category === activeFilter
  })

  return (
    <section id="certificados" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="reveal mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
            >
              Aprendizado contínuo
            </p>

            <h2
              className="mt-3 leading-tight"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}
            >
              Cursos & Certificações.
            </h2>
            
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)' }}
            >
              Especializações práticas emitidas por <strong style={{ color: 'var(--ink)' }}>Anthropic (Claude Code)</strong>, <strong style={{ color: 'var(--ink)' }}>Amazon Web Services (AWS)</strong>, <strong style={{ color: 'var(--ink)' }}>Google</strong>, Alura e Hashtag.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            className="flex flex-wrap gap-1.5 rounded-full p-1.5 self-start md:self-end"
            style={{
              background: '#fff',
              border: '1px solid #e2dbd1',
            }}
          >
            {filterCategories.map(({ id, label }) => {
              const active = activeFilter === id
              return (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: 'Space Grotesk',
                    background: active ? 'var(--ink)' : 'transparent',
                    color: active ? '#fff' : 'var(--ink-muted)',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, index) => {
            const isHighlight = cert.highlight
            return (
              <div
                key={cert.id}
                className="reveal group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: isHighlight ? '#ffffff' : '#faf8f5',
                  border: isHighlight ? '1.5px solid var(--accent)' : '1px solid #e8e2d9',
                  boxShadow: isHighlight ? '0 10px 30px -10px rgba(184, 80, 52, 0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold"
                      style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        color: isHighlight ? 'var(--accent)' : 'var(--ink-faint)',
                        fontSize: '1rem',
                      }}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>

                    <span
                      className="text-xs font-medium"
                      style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-faint)' }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  <h3
                    className="mt-4 text-base font-bold transition-colors"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'var(--ink)',
                      lineHeight: 1.35,
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className="mt-1.5 text-xs font-medium"
                    style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)' }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <div
                  className="mt-6 flex items-center justify-between pt-4"
                  style={{ borderTop: '1px solid #eee8e0' }}
                >
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: 'Space Grotesk',
                      background: isHighlight ? 'var(--accent-light)' : '#f0ece4',
                      color: isHighlight ? 'var(--accent)' : 'var(--ink-muted)',
                    }}
                  >
                    {isHighlight ? 'Destaque' : cert.category}
                  </span>

                  <div
                    className="flex items-center gap-1.5 text-xs font-medium"
                    style={{ fontFamily: 'Space Grotesk', color: '#166534' }}
                  >
                    <Check size={14} />
                    <span>Concluído</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <div className="mt-20 section-rule" />
    </section>
  )
}
