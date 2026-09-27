import { useState } from 'react'
import { ExternalLink, Calendar, Check, ArrowUpRight, Sparkles, Layers, ShieldCheck, Cpu, Code2 } from 'lucide-react'
import { GithubIcon } from './Icons'
import { projects } from '../data/portfolioData'

const filterCategories = [
  { id: 'all', label: 'Todos os projetos' },
  { id: 'ia', label: 'Inteligência Artificial' },
  { id: 'fullstack', label: 'Full Stack & Web' },
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
    <section id="projetos" className="relative scroll-mt-24 border-t border-slate-800/80 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">
              <Sparkles size={13} />
              <span>02 / PROJETOS EM DESTAQUE</span>
            </div>
            
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Projetos reais com impacto e arquitetura sólida.
            </h2>
            
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Aplicações completas com deploy ativo, resolvendo problemas reais através de interfaces modernas, APIs assíncronas e inteligência artificial aplicada.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 backdrop-blur-md">
            {filterCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  activeFilter === id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 font-bold'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
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
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-7 sm:p-9 transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/40 backdrop-blur-xl"
              >
                <div>
                  {/* Top Bar: Number, Badge, Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-amber-400">
                        {project.number}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-400">
                        <Calendar size={13} className="text-slate-500" />
                        {project.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 font-mono text-[11px] font-semibold text-slate-200">
                        {project.badge}
                      </span>
                      {hasDeploy ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Online
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-400">
                          Sob Demanda
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors sm:text-3xl">
                    {project.title}
                  </h3>
                  
                  <p className="mt-1 font-mono text-xs font-semibold text-slate-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Interesting Metrics / Highlights Showcase */}
                  {project.metrics && (
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3 text-center">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className="font-mono text-xs font-bold text-amber-400">
                            {metric.value}
                          </span>
                          <span className="text-[10px] font-medium text-slate-400">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Problem Solved Callout */}
                  {project.problemSolved && (
                    <div className="mt-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-slate-300">
                        <ShieldCheck size={14} className="text-amber-400" />
                        <span>Problema Solucionado:</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400 leading-normal">
                        {project.problemSolved}
                      </p>
                    </div>
                  )}

                  {/* Engineering Highlights */}
                  <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Destaques Técnicos & Entrega:
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check size={14} className="mt-0.5 shrink-0 text-amber-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar: Stack & Action Buttons */}
                <div className="mt-8 border-t border-slate-800/80 pt-6">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300 hover:border-slate-700 transition"
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
                        className="group/btn inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-300 shadow-md shadow-amber-400/10"
                      >
                        <span>Acessar no ar</span>
                        <ArrowUpRight size={15} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    ) : (
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-700 hover:text-white"
                      >
                        <span>Pedir demonstração</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-slate-600 hover:text-white"
                    >
                      <GithubIcon size={15} />
                      <span>Ver Código</span>
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
