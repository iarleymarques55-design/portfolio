import { useState } from 'react'
import { Award, Check, Sparkles } from 'lucide-react'
import { certifications } from '../data/portfolioData'

const filterCategories = [
  { id: 'all', label: 'Todas (11)' },
  { id: 'IA', label: 'Inteligência Artificial (5)' },
  { id: 'Cloud', label: 'Nuvem & AWS' },
  { id: 'Dev', label: 'Programação' },
  { id: 'Gestão', label: 'Gestão & Geral' },
]

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCerts = certifications.filter((cert) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'Gestão') return cert.category === 'Gestão' || cert.category === 'Geral'
    return cert.category === activeFilter
  })

  return (
    <section id="certificados" className="relative scroll-mt-24 border-t border-slate-800/80 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">
              <Award size={14} />
              <span>05 / CERTIFICAÇÕES & QUALIFICAÇÕES</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Cursos e certificações ({certifications.length})
            </h2>
            
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Anthropic (Claude Code), Amazon Web Services (AWS), Google, Alura e Hashtag Treinamentos.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 backdrop-blur-md">
            {filterCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                  activeFilter === id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 transition-all duration-300 hover:border-slate-700 hover:shadow-xl backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-xl border border-slate-700 bg-slate-800 font-mono text-xs font-bold text-amber-400">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  <span className="font-mono text-xs font-medium text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-1 font-mono text-xs font-semibold text-slate-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                <span className={`rounded-lg px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                  cert.highlight 
                    ? 'border border-amber-400/30 bg-amber-400/10 text-amber-300' 
                    : 'border border-slate-800 bg-slate-950/60 text-slate-400'
                }`}>
                  {cert.highlight ? 'Destaque' : cert.category}
                </span>

                <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-emerald-400">
                  <Check size={14} />
                  <span>Concluído</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
