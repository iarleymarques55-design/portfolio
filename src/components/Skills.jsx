import { useEffect } from 'react'
import { skillCategories } from '../data/portfolioData'

export default function Skills() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="habilidades" className="relative w-full scroll-mt-24 py-24 lg:py-32" style={{ background: 'var(--tinta)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* — Section Header: Aligned Left with Italic Accent */}
        <div className="reveal mb-16 max-w-3xl text-left">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
          >
            Habilidades & Ferramentas
          </p>
          <h2
            className="mt-3 leading-tight text-white"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Competências técnicas & <span className="italic" style={{ color: 'var(--accent)', fontWeight: 400 }}>stack de engenharia</span>.
          </h2>
          <p
            className="mt-4 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-dark-muted)', fontSize: '1.05rem' }}
          >
            Domínio prático de ponta a ponta: da modelagem de interfaces e APIs assíncronas ao deploy com modelos e agentes de IA integrados.
          </p>
        </div>

        {/* — 4-Column Broad Grid for Categories */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="reveal rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'var(--bg-dark-card)',
                border: '1px solid #2d2621',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                animationDelay: `${idx * 60}ms`,
              }}
            >
              {/* Category Header */}
              <div className="mb-4">
                <span
                  className="text-[11px] font-bold tracking-wider uppercase"
                  style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
                >
                  {cat.badge || 'Área'}
                </span>
                <h3
                  className="mt-1 text-lg font-bold text-white"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  {cat.title}
                </h3>
                <p
                  className="mt-1 text-xs leading-relaxed"
                  style={{ color: 'var(--ink-dark-muted)', fontFamily: 'Space Grotesk' }}
                >
                  {cat.description}
                </p>
              </div>

              {/* Tag Cloud with Solid Background */}
              <div className="flex flex-wrap gap-2 pt-3" style={{ borderTop: '1px solid #332b25' }}>
                {cat.items.map(item => (
                  <span
                    key={item.name}
                    className="skill-tag-dark"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
