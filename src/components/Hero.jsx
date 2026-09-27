import { ArrowUpRight, MessageSquare, MapPin, Terminal, Cpu, Cloud, ExternalLink, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-20 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* Left Column: Intro & Call to Action */}
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md">
              <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>{personalInfo.statusText}</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.08]">
              {personalInfo.name}
            </h1>

            <p className="mt-3 font-display text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-300 via-amber-200 to-slate-200 bg-clip-text text-transparent">
              {personalInfo.role}
            </p>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {personalInfo.bio}
            </p>

            {/* Quick Experience Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-medium text-slate-200">
                Estágio · <strong className="text-white font-semibold">Distribuidora Irmãos Barreiro (Solar Coca-Cola)</strong>
              </span>
              <span className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-medium text-slate-200">
                Dev Full Stack Freelancer
              </span>
              <span className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-medium text-slate-200">
                <strong className="text-slate-200 font-semibold">Técnico em Informática</strong>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300 shadow-lg shadow-amber-400/20"
              >
                <span>Explorar Projetos</span>
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3.5 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-800"
              >
                <MessageSquare size={16} className="text-amber-400" />
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
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-800/80 pt-6 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-400" />
                {personalInfo.location}
              </span>
              <span className="hidden h-3 w-px bg-slate-800 sm:block" />
              <span className="text-slate-300">React · FastAPI · Python · PostgreSQL · IA</span>
            </div>
          </div>

          {/* Right Column: Code Card & Visual Identity */}
          <div className="reveal relative flex justify-center lg:justify-end" style={{ animationDelay: '120ms' }}>
            <div className="relative w-full max-w-[430px]">

              {/* Glow Behind Card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 to-sky-500/20 blur-xl opacity-60" />

              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-400">
                    iarley@fullstack:~$
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </div>
                </div>

                {/* Profile Snapshot */}
                <div className="my-6 flex items-center gap-4">
                  <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 text-amber-400 shadow-inner">
                    <span className="font-display text-2xl font-black tracking-tight">
                      IM
                    </span>
                    <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-slate-900 bg-amber-400 p-1">
                      <Terminal size={11} className="text-slate-950 font-bold" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Iarley Marques</h2>
                    <p className="font-mono text-xs font-semibold text-amber-400">Full Stack & IA Developer</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Solar Coca-Cola · Técnico em Informática
                    </p>
                  </div>
                </div>

                {/* Terminal Code Snippet */}
                <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/90 p-4 font-mono text-xs leading-relaxed text-slate-300">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>// stack_profile.ts</span>
                    <span className="text-[10px] font-semibold text-emerald-400">200 OK</span>
                  </div>
                  <div>
                    <span className="text-amber-400 font-semibold">const</span> developer = {'{'}
                  </div>
                  <div className="pl-4 text-slate-400">
                    <p><span className="text-slate-200">frontend:</span> ['React 19', 'Tailwind', 'Vite'],</p>
                    <p><span className="text-slate-200">backend:</span> ['Python', 'FastAPI', 'Node.js'],</p>
                    <p><span className="text-slate-200">database:</span> ['PostgreSQL', 'IndexedDB'],</p>
                    <p><span className="text-slate-200">ai_tools:</span> ['Groq / Llama', 'Claude', 'Gemini'],</p>
                    <p><span className="text-slate-200">cloud:</span> ['AWS', 'Railway', 'Docker']</p>
                  </div>
                  <div>{'}'}</div>
                </div>

                {/* Badges */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center font-mono text-xs">
                  <div className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 text-slate-300">
                    <Cpu size={14} className="text-amber-400" />
                    <span>IA Multimodal</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 text-slate-300">
                    <Cloud size={14} className="text-sky-400" />
                    <span>Nuvem & Railway</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
