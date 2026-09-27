import { Code2, Terminal, Database, BrainCircuit, Sparkles } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const icons = {
  'Front-end': Code2,
  'Back-end e APIs': Terminal,
  'Dados e nuvem': Database,
  'Inteligência artificial': BrainCircuit,
}

export default function Skills() {
  return (
    <section id="habilidades" className="relative scroll-mt-24 border-t border-slate-800/80 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">
            <Sparkles size={13} />
            <span>03 / STACK & HABILIDADES</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Tecnologias dominadas na prática.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
            Do front-end ao banco de dados relacional, APIs assíncronas e integração com modelos de IA de última geração.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = icons[category.title] || Code2

            return (
              <div
                key={category.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 transition-all duration-300 hover:border-slate-700 hover:shadow-xl backdrop-blur-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-700 bg-slate-800 text-amber-400 shadow-inner group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="mt-2 min-h-[40px] text-xs leading-relaxed text-slate-400">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-5">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/60 px-3.5 py-2.5 text-xs transition hover:border-slate-700"
                      >
                        <span className="font-semibold text-slate-200">{item.name}</span>
                        <span className="font-mono text-[10px] font-medium text-amber-400/90">{item.level}</span>
                      </div>
                    ))}
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
