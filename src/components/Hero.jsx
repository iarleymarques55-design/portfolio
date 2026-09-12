import { ArrowUpRight, MessageSquare, MapPin, Terminal, Cpu, Database, Cloud, Sparkles, ExternalLink } from 'lucide-react'
import { personalInfo, stats } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse-slow" />
      <div className="pointer-events-none absolute right-[-140px] top-40 h-[550px] w-[550px] rounded-full bg-indigo-500/12 blur-[150px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Main Info */}
          <div className="reveal">
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personalInfo.statusText}
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
              Código ágil.<br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                IA aplicada.
              </span><br />
              Soluções que escalam.
            </h1>

            {/* Subtitle / Bio */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Olá! Sou <strong className="font-bold text-white">{personalInfo.name}</strong>,{' '}
              desenvolvedor web full-stack focado na intersecção entre{' '}
              <span className="text-cyan-300 font-semibold">APIs escaláveis</span>,{' '}
              <span className="text-indigo-300 font-semibold">interfaces modernas</span> e{' '}
              <span className="text-sky-300 font-semibold">inteligência artificial de ponta</span>.
            </p>

            {/* Current Position Highlights */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-300">
                🏢 Estágio na <strong className="text-white">Solar Coca-Cola</strong>
              </span>
              <span className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-300">
                💻 Dev <strong className="text-cyan-300">Freelance</strong>
              </span>
              <span className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-300">
                🎓 3º Ano em Informática (<strong className="text-indigo-300">EEEP Edson Queiroz</strong>)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/30"
              >
                <span>Ver Projetos em Produção</span>
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-500/50 hover:bg-slate-800/60 hover:text-cyan-300"
              >
                <MessageSquare size={16} className="text-cyan-400" />
                <span>Entrar em Contato</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3.5 text-sm font-medium text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                <span>LinkedIn</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>
            </div>

            {/* Location & Quick Meta */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-800/70 pt-6 font-mono text-xs uppercase tracking-[0.15em] text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="hidden h-3 w-px bg-slate-800 sm:block" />
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-indigo-400" />
                React · Python · FastAPI · IA
              </span>
            </div>
          </div>

          {/* Interactive Visual Graphic / Dev Terminal Card */}
          <div className="reveal relative flex justify-center lg:justify-end" style={{ animationDelay: '120ms' }}>
            <div className="relative w-full max-w-[420px]">
              {/* Decorative Blur Backing */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-blue-500/10 blur-2xl" />

              {/* Card Container */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-[#0d1424]/90 p-6 shadow-2xl backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-slate-400">
                    iarley@fullstack-ai:~$
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    ONLINE
                  </div>
                </div>

                {/* Avatar & Core Profile */}
                <div className="my-6 flex items-center gap-4">
                  <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0c192d] to-[#14233c] shadow-lg shadow-cyan-500/15">
                    <span className="font-mono text-2xl font-black tracking-tight text-cyan-300">
                      IM
                    </span>
                    <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-[#0d1424] bg-emerald-500 p-1">
                      <Terminal size={10} className="text-slate-950 font-bold" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Iarley Marques</h2>
                    <p className="font-mono text-xs text-cyan-400">Full Stack Web & IA</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Solar Coca-Cola · EEEP Edson Queiroz
                    </p>
                  </div>
                </div>

                {/* Live Console Snippet */}
                <div className="space-y-2 rounded-xl border border-slate-800/80 bg-[#060a12] p-3.5 font-mono text-[11px] leading-relaxed text-slate-300">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>// stack_and_services.json</span>
                    <span className="text-[10px] text-emerald-400 font-bold">200 OK</span>
                  </div>
                  <div className="text-slate-400">
                    <span className="text-indigo-400">const</span> stack = {'{'}
                  </div>
                  <div className="pl-3">
                    <p><span className="text-cyan-300">frontend</span>: ['React 19', 'Tailwind CSS', 'Vite'],</p>
                    <p><span className="text-indigo-300">backend</span>: ['Python', 'FastAPI', 'Node.js', 'Express'],</p>
                    <p><span className="text-sky-300">database</span>: ['PostgreSQL', 'IndexedDB', 'SQLAlchemy'],</p>
                    <p><span className="text-emerald-300">ai_models</span>: ['Groq / Llama', 'Claude Code', 'Gemini'],</p>
                    <p><span className="text-amber-300">cloud</span>: ['AWS Lambda', 'Railway', 'GitHub CI/CD']</p>
                  </div>
                  <div className="text-slate-400">{'}'}</div>
                </div>

                {/* Feature Tags Bottom */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center font-mono text-[11px]">
                  <div className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 py-2 text-cyan-300">
                    <Cpu size={13} />
                    <span>IA Multimodal</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 py-2 text-indigo-300">
                    <Cloud size={13} />
                    <span>Cloud & Railway</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md sm:grid-cols-4 lg:p-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col border-slate-800/80 sm:border-r sm:last:border-none sm:pr-4 sm:last:pr-0">
              <span className="font-mono text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
                <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  {item.value}
                </span>
              </span>
              <span className="mt-1 text-xs font-bold text-slate-200">{item.label}</span>
              <span className="mt-0.5 text-[11px] leading-4 text-slate-400">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

