import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { projects } from '../data/portfolioData'

// Each project gets a distinct color palette
const projectThemes = [
  { bg: '#F6ECDA', accent: '#b8873a', label: 'gold', accentText: '#7a5a20', url: 'correnem.vercel.app' },
  { bg: '#DCECE1', accent: '#2F4A3A', label: 'sage', accentText: '#20362A', url: 'agrobot.app' },
  { bg: '#EAE4D8', accent: '#2F4A3A', label: 'areia', accentText: '#25382D', url: 'bemcicatri-2-production-37a0.up.railway.app' },
  { bg: '#F6DFD7', accent: '#C8553D', label: 'terracota', accentText: '#8a3828', url: 'album-meu-production-cbec.up.railway.app' },
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
    <section id="projetos" className="relative w-full scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* — Section header */}
        <div className="reveal mb-16 flex flex-col gap-3 max-w-2xl text-left">
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
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
            }}
          >
            Aplicações reais, <span className="italic" style={{ color: 'var(--accent)', fontWeight: 400 }}>código em produção</span>.
          </h2>

          <p
            className="mt-2 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)', fontSize: '1.05rem' }}
          >
            Cada projeto resolve uma dor concreta — da correção pedagógica à agricultura familiar, da cicatrização clínica ao tráfego assíncrono.
          </p>
        </div>

        {/* — Projects list: alternating layout */}
        <div className="space-y-12">
          {projects.map((project, idx) => {
            const theme = projectThemes[idx % projectThemes.length]
            const isEven = idx % 2 === 0
            const hasDeploy = Boolean(project.deploy)
            const isFeatured = project.id === 'correnem'

            const mockupSrc =
              project.id === 'correnem' ? '/correnem.jpg' :
              project.id === 'agrobot' ? '/agrobot.jpg' :
              project.id === 'bemcicatri' ? '/bemcicatri.png' :
              project.id === 'album' ? '/album.png' : null

            return (
              <article
                key={project.id}
                className="reveal overflow-hidden rounded-3xl"
                style={{
                  background: theme.bg,
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 12px 36px -12px rgba(26,21,18,0.06)',
                }}
              >
                <div
                  className={`grid gap-0 ${isFeatured ? 'lg:grid-cols-[1.05fr_0.95fr]' : 'lg:grid-cols-2'} ${!isEven ? 'lg:[&>*:first-child]:order-last' : ''}`}
                >
                  {/* Text side */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      {/* Category + status */}
                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className="text-xs font-bold tracking-wider uppercase"
                          style={{ color: theme.accentText, fontFamily: 'Space Grotesk' }}
                        >
                          {project.category}
                        </span>
                        {hasDeploy ? (
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                            style={{ background: '#ffffff', color: theme.accentText, border: '1px solid rgba(0,0,0,0.06)' }}
                          >
                            <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: theme.accent }} />
                            Online
                          </span>
                        ) : (
                          <span
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{ background: '#ffffff', color: 'var(--ink-muted)', border: '1px solid rgba(0,0,0,0.06)' }}
                          >
                            Deploy clínico
                          </span>
                        )}
                      </div>

                      {/* Title — sans-serif semibold para leitura clara e elegante */}
                      <h3
                        className="leading-snug"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: isFeatured ? 'clamp(2rem, 3.2vw, 2.7rem)' : 'clamp(1.7rem, 2.5vw, 2.2rem)',
                          fontWeight: 700,
                          color: 'var(--ink)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className="mt-1 font-medium leading-snug"
                        style={{
                          fontFamily: 'Fraunces, Georgia, serif',
                          fontStyle: 'italic',
                          color: theme.accentText,
                          fontSize: '1.05rem',
                        }}
                      >
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p
                        className="mt-4 leading-relaxed"
                        style={{
                          fontFamily: 'Space Grotesk',
                          fontSize: '1rem',
                          color: 'var(--ink-muted)',
                          lineHeight: 1.7,
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="mt-5 space-y-2">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}>
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
                      {/* Tech Tags com fundo sólido e tamanho legível */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.slice(0, 6).map(tech => (
                          <span
                            key={tech}
                            className="rounded-full px-3.5 py-1 text-xs font-semibold"
                            style={{
                              background: '#ffffff',
                              color: 'var(--ink)',
                              border: '1px solid rgba(0,0,0,0.1)',
                              fontFamily: 'Space Grotesk, sans-serif',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
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
                            className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all cursor-pointer"
                            style={{ background: theme.accent, color: '#fff', fontFamily: 'Space Grotesk' }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                          >
                            Acessar ao vivo
                            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <a
                            href="#contato"
                            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all cursor-pointer"
                            style={{ background: '#ffffff', color: 'var(--ink)', border: '1px solid rgba(0,0,0,0.12)', fontFamily: 'Space Grotesk' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#f7f4ef'}
                            onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
                          >
                            Pedir demonstração
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer"
                          style={{ background: '#ffffff', color: 'var(--ink)', border: '1px solid rgba(0,0,0,0.12)', fontFamily: 'Space Grotesk' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#f7f4ef'}
                          onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
                        >
                          <GithubIcon size={15} />
                          Código
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Visual side: real mockup in styled frame */}
                  <div
                    className="relative flex items-center justify-center p-6 sm:p-8 lg:p-10 overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)`,
                    }}
                  >
                    {mockupSrc ? (
                      <div className="w-full max-w-lg transition-transform duration-500 hover:scale-[1.02]">
                        <div className="browser-frame">
                          {/* Top browser bar */}
                          <div className="browser-bar flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="browser-dot" style={{ background: '#e06c75' }} />
                              <span className="browser-dot" style={{ background: '#e5c07b' }} />
                              <span className="browser-dot" style={{ background: '#98c379' }} />
                            </div>
                            <span
                              className="text-[11px] font-medium px-3 py-0.5 rounded-full truncate max-w-[200px]"
                              style={{ background: 'rgba(255,255,255,0.7)', color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}
                            >
                              {theme.url}
                            </span>
                            <div className="w-8" />
                          </div>
                          {/* Image */}
                          <img
                            src={mockupSrc}
                            alt={`Preview do ${project.title}`}
                            className="w-full h-auto max-h-[360px] object-cover object-top block"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
