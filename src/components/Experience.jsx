import { Briefcase, Building2, MapPin, GraduationCap, Check, Sparkles } from 'lucide-react'
import { experiences, education } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experiencia" className="relative scroll-mt-24 border-t border-slate-800/80 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">
            <Sparkles size={13} />
            <span>04 / EXPERIÊNCIA & FORMAÇÃO</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Vivência profissional & formação contínua.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
            Estágio no setor corporativo, projetos freelance autônomos e 3º ano do curso técnico integrado.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          
          {/* Work Experience */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Briefcase size={18} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Experiência Profissional</h3>
            </div>

            <div className="relative ml-4 space-y-10 border-l-2 border-slate-800 pl-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-amber-400 shadow-md shadow-amber-400/50" />

                  <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-7 transition-all duration-300 hover:border-slate-700 hover:shadow-xl backdrop-blur-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3.5">
                      <span className="font-mono text-xs font-bold text-amber-400">
                        {exp.period}
                      </span>
                      <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 font-mono text-[11px] font-semibold text-slate-300">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-xl font-bold text-white">
                      {exp.role}
                    </h4>

                    <div className="mt-1.5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                        <Building2 size={14} className="text-amber-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {exp.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-400/10 text-sky-400 border border-sky-400/20">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Formação Acadêmica</h3>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-7 transition-all duration-300 hover:border-slate-700 hover:shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
                <span className="font-mono text-xs font-bold text-sky-400">
                  {education.period}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 font-mono text-[11px] font-semibold text-slate-300">
                  {education.status}
                </span>
              </div>

              <h4 className="mt-4 font-display text-2xl font-bold text-white">
                {education.degree}
              </h4>
              
              <p className="mt-1 font-mono text-sm font-semibold text-slate-200">
                {education.institution}
              </p>
              
              <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin size={13} className="text-amber-400" /> {education.location}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {education.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Destaques do programa técnico:
                </p>
                <ul className="space-y-2">
                  {education.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check size={14} className="mt-0.5 shrink-0 text-amber-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
