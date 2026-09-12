import { Briefcase, Building2, Calendar, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react'
import { experiences, education } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experiencia" className="relative scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400">
            04 / Trajetória & Educação
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            Experiência corporativa e base técnica sólida.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            A combinação entre a formação acadêmica contínua no ensino técnico e o impacto direto em grandes empresas como a Solar Coca-Cola e clientes autônomos.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Professional Timeline */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <Briefcase size={20} className="text-cyan-400" />
              <h3 className="text-xl font-extrabold text-white">Experiência Profissional</h3>
            </div>

            <div className="relative border-l-2 border-slate-800/90 ml-3 pl-8 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-2 border-[#080c14] bg-cyan-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] transition-transform group-hover:scale-125" />

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                        {exp.period}
                      </span>
                      <span className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-0.5 font-mono text-[10px] text-slate-300">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="mt-3 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h4>

                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                      <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                        <Building2 size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
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
                          className="rounded-md border border-slate-800 bg-slate-950/60 px-2.5 py-1 font-mono text-[11px] text-slate-300"
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

          {/* Education Block */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <GraduationCap size={20} className="text-indigo-400" />
              <h3 className="text-xl font-extrabold text-white">Formação Acadêmica</h3>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-7 backdrop-blur-xl transition hover:border-indigo-500/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {education.period}
                </span>
                <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-indigo-300">
                  {education.status}
                </span>
              </div>

              <h4 className="mt-4 text-xl font-extrabold text-white">
                {education.degree}
              </h4>
              <p className="mt-1 font-mono text-sm font-semibold text-cyan-300">
                {education.institution}
              </p>
              <p className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                <MapPin size={13} /> {education.location}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                {education.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Pilares de Aprendizado:
                </p>
                <ul className="space-y-2">
                  {education.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-indigo-400" />
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

