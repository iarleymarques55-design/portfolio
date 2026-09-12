import { useState } from 'react'
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { certifications } from '../data/portfolioData'

const filterCategories = [
  { id: 'all', label: 'Todas as 11 Licenças' },
  { id: 'IA', label: 'Inteligência Artificial (5)' },
  { id: 'Cloud', label: 'Cloud & Nuvem' },
  { id: 'Dev', label: 'Programação & Python' },
  { id: 'Gestão', label: 'Gestão & Outros' },
]

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCerts = certifications.filter((cert) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'Gestão') return cert.category === 'Gestão' || cert.category === 'Geral'
    return cert.category === activeFilter
  })

  return (
    <section id="certificados" className="relative scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400">
              <Sparkles size={14} />
              <span>05 / Aprendizado & Reconhecimento</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
              Licenças e Certificados ({certifications.length})
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Certificações emitidas pelas principais referências globais de tecnologia, IA e computação em nuvem (Anthropic, AWS, Google, Alura e Hashtag).
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-1.5 backdrop-blur-md">
            {filterCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
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

        {/* Certifications Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, index) => {
            const isHighlight = cert.highlight

            return (
              <div
                key={cert.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  isHighlight
                    ? 'border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-lg shadow-cyan-500/5 hover:border-cyan-400/60'
                    : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-500/10 font-mono text-xs font-bold text-cyan-300">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>

                    <span className="font-mono text-[11px] font-medium text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="mt-4 text-base font-bold text-white transition-colors group-hover:text-cyan-300">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="mt-1 font-mono text-xs font-semibold text-indigo-300">
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer Status */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-800/70 pt-3">
                  <span className="rounded-md border border-slate-800 bg-slate-950/60 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                    <CheckCircle2 size={14} />
                    <span>Concluído</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

