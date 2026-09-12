import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo, navigation } from '../data/portfolioData'

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#060a12] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand Info */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 font-mono text-xs font-bold text-white">
                IM
              </span>
              <span className="text-sm font-extrabold tracking-tight text-white">
                Iarley Marques <span className="text-cyan-400">/ Full Stack</span>
              </span>
            </div>
            <p className="font-mono text-xs text-slate-500">
              Cascavel, Ceará · Solar Coca-Cola 
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="transition hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400 transition hover:border-slate-700 hover:text-white"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400 transition hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="E-mail"
              className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400 transition hover:border-sky-500/50 hover:text-sky-300"
            >
              <Mail size={16} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-slate-400 transition hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-slate-800/60 pt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row text-xs text-slate-500">
          <span>© 2026 Iarley Marques. Desenvolvido com código de alta performance e foco em IA.</span>
          <span className="font-mono text-[11px] text-slate-600">
            REACT 19 · TAILWIND CSS · VITE · FASTAPI · RAILWAY
          </span>
        </div>
      </div>
    </footer>
  )
}

