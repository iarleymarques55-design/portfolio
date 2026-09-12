import { Code2, Terminal, Database, BrainCircuit, CheckCircle } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const icons = {
  'Front-end Moderno': Code2,
  'Back-end & APIs': Terminal,
  'Banco de Dados & Nuvem': Database,
  'Inteligência Artificial & Agentes': BrainCircuit,
}

const colorMap = {
  cyan: {
    border: 'hover:border-cyan-400/40',
    iconBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20',
    badge: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/20',
    tag: 'group-hover:border-cyan-500/30',
  },
  indigo: {
    border: 'hover:border-indigo-400/40',
    iconBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/20',
    badge: 'text-indigo-300 bg-indigo-400/10 border-indigo-400/20',
    tag: 'group-hover:border-indigo-500/30',
  },
  sky: {
    border: 'hover:border-sky-400/40',
    iconBg: 'bg-sky-500/10 text-sky-300 border-sky-400/20',
    badge: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
    tag: 'group-hover:border-sky-500/30',
  },
  violet: {
    border: 'hover:border-violet-400/40',
    iconBg: 'bg-violet-500/10 text-violet-300 border-violet-400/20',
    badge: 'text-violet-300 bg-violet-400/10 border-violet-400/20',
    tag: 'group-hover:border-violet-500/30',
  },
}

export default function Skills() {
  return (
    <section id="habilidades" className="relative scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400">
            03 / Stack & Habilidades
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            Tecnologias selecionadas para máxima eficiência.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Da construção de interfaces interativas e ágeis até a automação por agentes de inteligência artificial e deploy em nuvem com alta disponibilidade.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = icons[category.title] || Code2
            const colors = colorMap[category.tone] || colorMap.cyan

            return (
              <div
                key={category.title}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${colors.border}`}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`grid h-12 w-12 place-items-center rounded-xl border ${colors.iconBg}`}>
                      <Icon size={22} />
                    </div>
                    <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${colors.badge}`}>
                      {category.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 min-h-[40px]">
                    {category.description}
                  </p>

                  {/* Tech Items List */}
                  <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-5">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-lg border border-slate-800/60 bg-slate-950/40 px-3 py-2 text-xs transition hover:border-slate-700"
                      >
                        <span className="font-semibold text-slate-200">{item.name}</span>
                        <span className="font-mono text-[10px] text-slate-400">{item.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Visual Touch */}
                <div className="mt-6 pt-2">
                  <div className="h-1 w-full rounded-full bg-slate-800/60 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
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

