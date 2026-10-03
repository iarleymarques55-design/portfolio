import { useEffect } from 'react'
import { Check } from 'lucide-react'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // 4 Top Highlights with rich solid card presentation
  const featuredIds = ['anthropic-claude', 'anthropic-fluency', 'aws-cloud', 'hashtag-n8n']
  const featuredCerts = certifications.filter(c => featuredIds.includes(c.id))
  // The rest in a compact high-density editorial list
  const compactCerts = certifications.filter(c => !featuredIds.includes(c.id))

  // Cores sólidas sem nenhum azul: Areia, Verde, Terracota e Tinta
  const cardThemes = [
    {
      bg: '#E9DFCB',
      border: '#D4C7AE',
      titleColor: '#16120F',
      issuerColor: '#524332',
      badgeBg: '#FAF5EC',
      badgeColor: '#524332',
      dateColor: '#7A6854',
      checkColor: '#1B4D2E',
    },
    {
      bg: '#2F4A3A',
      border: '#243A2D',
      titleColor: '#FFFFFF',
      issuerColor: '#D2E6DA',
      badgeBg: 'rgba(255,255,255,0.16)',
      badgeColor: '#D2E6DA',
      dateColor: '#A3C8B2',
      checkColor: '#7EE0A3',
    },
    {
      bg: '#C8553D',
      border: '#A9432E',
      titleColor: '#FFFFFF',
      issuerColor: '#FBE8E4',
      badgeBg: 'rgba(255,255,255,0.16)',
      badgeColor: '#FFFFFF',
      dateColor: '#F7CDC4',
      checkColor: '#FFFFFF',
    },
    {
      bg: '#16120F',
      border: '#29221C',
      titleColor: '#F4EFE8',
      issuerColor: '#D4C8B8',
      badgeBg: 'rgba(255,255,255,0.12)',
      badgeColor: '#E9DFCB',
      dateColor: '#A69B8D',
      checkColor: '#7EE0A3',
    },
  ]

  return (
    <section id="certificados" className="relative w-full scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Header: Aligned Left with Italic Word */}
        <div className="reveal mb-14 max-w-2xl text-left">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--terracota)', fontFamily: 'Space Grotesk' }}
          >
            Aprendizado contínuo
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
            Qualificações & <span className="italic" style={{ color: 'var(--terracota)', fontWeight: 400 }}>certificações</span>.
          </h2>

          <p
            className="mt-4 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: 'Space Grotesk', color: 'var(--texto-suave)', fontSize: '1.05rem' }}
          >
            Especializações em inteligência artificial, engenharia de nuvem e arquitetura de software emitidas por referências globais.
          </p>
        </div>

        {/* 4 Featured Certificates in Solid Colored Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {featuredCerts.map((cert, index) => {
            const theme = cardThemes[index % cardThemes.length]
            return (
              <div
                key={cert.id}
                className="reveal flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-md"
                style={{
                  background: theme.bg,
                  border: `1.5px solid ${theme.border}`,
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider"
                      style={{
                        background: theme.badgeBg,
                        color: theme.badgeColor,
                        fontFamily: 'Space Grotesk',
                      }}
                    >
                      Destaque
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: theme.dateColor, fontFamily: 'Space Grotesk' }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  {/* Title in sans-serif semibold */}
                  <h3
                    className="mt-5 text-lg font-bold"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: theme.titleColor,
                      lineHeight: 1.35,
                    }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className="mt-1.5 text-sm font-semibold"
                    style={{ fontFamily: 'Space Grotesk', color: theme.issuerColor }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <div
                  className="mt-6 flex items-center justify-between pt-4"
                  style={{ borderTop: `1px solid ${theme.border}` }}
                >
                  <span
                    className="text-xs font-semibold"
                    style={{ color: theme.issuerColor, fontFamily: 'Space Grotesk' }}
                  >
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: theme.checkColor }}>
                    <Check size={14} />
                    <span>Concluído</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Compact List for the Remaining Certifications */}
        <div className="reveal">
          <div className="mb-4 flex items-center justify-between">
            <h4
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: 'var(--tinta)', fontFamily: 'Space Grotesk' }}
            >
              Demais Certificações ({compactCerts.length})
            </h4>
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--ink-faint)', fontFamily: 'Space Grotesk' }}
            >
              Alura · Google · Hashtag · EF SET · Bradesco
            </span>
          </div>

          <div
            className="rounded-2xl divide-y overflow-hidden shadow-sm"
            style={{
              background: '#ffffff',
              border: '1px solid #DCD3C5',
              borderColor: '#DCD3C5',
            }}
          >
            {compactCerts.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4.5 transition-colors hover:bg-[#FAF6F0]"
                style={{ borderBottomColor: '#EDE5D8' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ background: 'var(--terracota)' }}
                  />
                  <div>
                    <p
                      className="text-base font-bold"
                      style={{ color: 'var(--tinta)', fontFamily: 'Space Grotesk' }}
                    >
                      {cert.title}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: 'var(--texto-suave)', fontFamily: 'Space Grotesk' }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 self-start sm:self-auto pl-5 sm:pl-0">
                  <span
                    className="rounded-full px-3 py-0.5 text-xs font-semibold"
                    style={{ background: 'var(--areia)', color: 'var(--tinta)', fontFamily: 'Space Grotesk' }}
                  >
                    {cert.category}
                  </span>
                  <span
                    className="text-xs font-semibold min-w-[65px] text-right"
                    style={{ color: 'var(--ink-faint)', fontFamily: 'Space Grotesk' }}
                  >
                    {cert.date}
                  </span>
                  <Check size={16} className="text-emerald-700 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
