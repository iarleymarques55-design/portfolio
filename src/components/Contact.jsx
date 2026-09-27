import { useState } from 'react'
import { Mail, Copy, Check, ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function handleCopyEmail() {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contato" className="relative scroll-mt-24 border-t border-slate-800/80 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl">
          
          {/* Subtle Ambient Background Light */}
          <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">
              <Sparkles size={13} />
              <span>06 / VAMOS CONVERSAR</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Entre em contato.
            </h2>
            
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              Estou disponível para <strong className="text-white font-semibold">vagas de estágio, posições júnior</strong> e <strong className="text-white font-semibold">projetos freelance</strong> em desenvolvimento full stack e aplicações com IA. Escolha o canal de sua preferência:
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* E-mail Card */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:border-amber-400/50 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-amber-500/5">
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-700/80 bg-slate-800 text-amber-400 shadow-inner">
                    <Mail size={22} />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-400/90">
                    Principal canal
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">E-mail</h3>
                <p className="mt-1 font-mono text-xs text-slate-400 break-all">
                  {personalInfo.email}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 pt-4 border-t border-slate-800">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-300 shadow-md shadow-amber-400/10"
                >
                  <span>Enviar e-mail</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copiar e-mail"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2.5 font-mono text-xs font-medium text-slate-200 transition hover:bg-slate-700 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:border-sky-400/50 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-sky-500/5">
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-700/80 bg-slate-800 text-sky-400 shadow-inner">
                    <LinkedinIcon size={22} />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-400/90">
                    Profissional
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">LinkedIn</h3>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  linkedin.com/in/iarley-marques23
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300"
                >
                  <span>Conectar no LinkedIn</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:border-slate-500/50 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-slate-500/5">
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-700/80 bg-slate-800 text-slate-200 shadow-inner">
                    <GithubIcon size={22} />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Código & Repos
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">GitHub</h3>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  github.com/iarleymarques55-design
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
                >
                  <span>Explorar Repositórios</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
