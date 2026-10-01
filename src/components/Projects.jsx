import { useEffect, useRef } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'
import { projects } from '../data/portfolioData'

// Each project gets a distinct color palette
const projectThemes = [
  { bg: '#f5ead4', accent: '#b8873a', label: 'gold',  accentText: '#7a5a20' },  // CorrEnem — warm gold
  { bg: '#d4e8de', accent: '#3a6b52', label: 'sage',  accentText: '#2a4d3a' },  // AgroBot — sage green
  { bg: '#d4ddf0', accent: '#243358', label: 'navy',  accentText: '#1a2640' },  // BemCicatri — navy
  { bg: '#f0ddd9', accent: '#c8523a', label: 'rust',  accentText: '#8a3828' },  // Album — rust
]

export default function Projects() {
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
    <section id="projetos" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* — Section header */}
        <div className="reveal mb-20 flex flex-col gap-4 max-w-2xl">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
          >
            Projetos em destaque
          </p>
          <h2
            className="leading-tight"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
            }}
          >
            Aplicações reais, código em produção.
          </h2>
          <p style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
            Cada projeto resolve um problema concreto — da educação à agro, da saúde ao mercado.
          </p>
        </div>

        {/* — Projects list: alternating layout */}
        <div className="space-y-10">
          {projects.map((project, idx) => {
            const theme = projectThemes[idx % projectThemes.length]
            const isEven = idx % 2 === 0
            const hasDeploy = Boolean(project.deploy)
            const isFeatured = project.id === 'correnem'
            const mockupSrc = project.id === 'correnem' ? '/correnem.jpg' : project.id === 'agrobot' ? '/agrobot.jpg' : null

            return (
              <article
                key={project.id}
                className="reveal overflow-hidden rounded-3xl"
                style={{
                  background: theme.bg,
                  border: '1px solid rgba(0,0,0,0.06)',
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                <div
                  className={`grid gap-0 ${isFeatured ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-2'} ${!isEven ? 'lg:[&>*:first-child]:order-last' : ''}`}
                >
                  {/* Text side */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      {/* Category + status */}
                      <div className="flex items-center gap-3 mb-6">
                        <span
                          className="text-xs font-semibold tracking-wide uppercase"
                          style={{ color: theme.accentText, fontFamily: 'Space Grotesk' }}
                        >
                          {project.category}
                        </span>
                        {hasDeploy && (
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                            style={{ background: 'rgba(255,255,255,0.7)', color: theme.accentText }}
                          >
                            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: theme.accent }} />
                            Online
                          </span>
                        )}
                        {!hasDeploy && (
                          <span
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{ background: 'rgba(255,255,255,0.5)', color: 'var(--ink-muted)' }}
                          >
                            Deploy clínico
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className="leading-none tracking-tight"
                        style={{
                          fontFamily: 'Fraunces, Georgia, serif',
                          fontSize: isFeatured ? 'clamp(2.2rem, 4vw, 3.2rem)' : 'clamp(1.8rem, 3vw, 2.5rem)',
                          fontWeight: 800,
                          color: 'var(--ink)',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className="mt-2 font-medium leading-snug"
                        style={{
                          fontFamily: 'Fraunces',
                          fontStyle: 'italic',
                          color: theme.accentText,
                          fontSize: '1rem',
                        }}
                      >
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p
                        className="mt-5 leading-relaxed"
                        style={{
                          fontFamily: 'Space Grotesk',
                          fontSize: '0.93rem',
                          color: 'var(--ink-muted)',
                          lineHeight: 1.75,
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Highlights — simple list */}
                      <ul className="mt-6 space-y-2">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}>
                            <span
                              className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                              style={{ background: theme.accent }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack chips + CTAs */}
                    <div className="mt-8">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.stack.slice(0, 6).map(tech => (
                          <span
                            key={tech}
                            className="rounded-full px-3 py-1 text-xs font-medium"
                            style={{
                              background: 'rgba(255,255,255,0.6)',
                              color: 'var(--ink)',
                              border: '1px solid rgba(0,0,0,0.1)',
                              fontFamily: 'JetBrains Mono, monospace',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {hasDeploy ? (
                          <a
                            href={project.deploy}
                            target="_blank" rel="noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all"
                            style={{ background: theme.accent, color: '#fff', fontFamily: 'Space Grotesk' }}
                          >
                            Acessar ao vivo
                            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <a
                            href="#contato"
                            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all"
                            style={{ background: 'rgba(255,255,255,0.7)', color: 'var(--ink)', border: '1px solid rgba(0,0,0,0.12)', fontFamily: 'Space Grotesk' }}
                          >
                            Pedir demonstração
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all"
                          style={{ background: 'rgba(255,255,255,0.55)', color: 'var(--ink)', border: '1px solid rgba(0,0,0,0.1)', fontFamily: 'Space Grotesk' }}
                        >
                          <GithubIcon size={14} />
                          Código
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Visual side: mockup or color block */}
                  <div
                    className="relative flex items-end justify-center overflow-hidden"
                    style={{
                      minHeight: '320px',
                      background: `linear-gradient(135deg, ${theme.bg} 0%, ${theme.accent}18 100%)`,
                    }}
                  >
                    {mockupSrc ? (
                      <img
                        src={mockupSrc}
                        alt={`Mockup do ${project.title}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        style={{ display: 'block' }}
                      />
                    ) : (
                      /* Typographic placeholder for projects without mockup */
                      <div className="p-10 flex flex-col justify-center items-center h-full w-full">
                        <p
                          className="text-center leading-none"
                          style={{
                            fontFamily: 'Fraunces',
                            fontSize: 'clamp(5rem, 12vw, 9rem)',
                            fontWeight: 800,
                            color: `${theme.accent}30`,
                            letterSpacing: '-0.04em',
                            userSelect: 'none',
                          }}
                        >
                          {project.title.slice(0, 3).toUpperCase()}
                        </p>
                        <p className="mt-4 text-center text-sm font-medium" style={{ color: theme.accentText, fontFamily: 'Space Grotesk' }}>
                          {project.badge}
                        </p>
                        {/* Metrics mini display */}
                        <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-xs">
                          {project.metrics?.map((m, i) => (
                            <div key={i} className="text-center">
                              <p
                                className="font-bold text-sm leading-tight"
                                style={{ color: theme.accent, fontFamily: 'Fraunces' }}
                              >
                                {m.value}
                              </p>
                              <p className="text-[10px] mt-0.5" style={{ color: theme.accentText, fontFamily: 'Space Grotesk' }}>
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
      <div className="mt-24 section-rule" />
    </section>
  )
}
