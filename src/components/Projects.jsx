import { useState } from 'react'
import { ExternalLink, Calendar, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { projects } from '../data/portfolioData'

const filterCategories = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'ia', label: 'IA & Multimodal' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'backend', label: 'Back-end & APIs' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'ia') return project.category.toLowerCase().includes('ia')
    if (activeFilter === 'fullstack') return project.stack.includes('React 19') || project.category.toLowerCase().includes('full stack') || project.id === 'agrobot' || project.id === 'bemcicatri'
    if (activeFilter === 'backend') return project.stack.includes('FastAPI') || project.category.toLowerCase().includes('back-end')
    return true
  })

  return (
    <section id="projetos" className="relative scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400">
              02 / Portfólio de Projetos
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Projetos reais com impacto prático.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Cada aplicação foi concebida para solucionar desafios reais, aliando arquitetura de software escalável, inteligência artificial integrada e deploys em produção.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5 backdrop-blur-md">
            {filterCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
                  activeFilter === id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => {
            const hasDeploy = Boolean(project.deploy)

            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/90 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-9"
              >
                {/* Top Info Bar */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm font-bold text-cyan-400">
                        {project.number}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-700" />
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-slate-400">
                        <Calendar size={13} className="text-slate-500" />
                        {project.period}
                      </span>
                    </div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-6 text-2xl font-black tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-medium text-slate-400">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Destaques da Arquitetura:
                    </p>
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-cyan-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Tech Stack & Actions */}
                <div className="mt-8 border-t border-slate-800/80 pt-6">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {hasDeploy ? (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-cyan-500/15 transition hover:opacity-90 hover:shadow-cyan-500/25"
                      >
                        <span>Acessar no Railway</span>
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2.5 text-xs font-bold text-indigo-300 transition hover:bg-indigo-500/20"
                      >
                        <span>Demonstração / Contato</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                    >
                      <GithubIcon size={15} />
                      <span>Ver Código no GitHub</span>
                    </a>
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

