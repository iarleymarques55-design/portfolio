import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { navigation, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-[#080c14]/50 backdrop-blur-md border-b border-slate-800/40'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 font-mono text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
            <span>IM</span>
            <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#080c14]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Iarley<span className="text-cyan-400">.dev</span>
            </span>
            <span className="font-mono text-[10px] text-slate-400">Full Stack & IA</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 transition-all duration-200 hover:text-cyan-300 hover:scale-105"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Iarley Marques"
            className="rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-slate-400 transition hover:border-slate-700 hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Iarley Marques"
            className="rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-slate-400 transition hover:border-cyan-500/50 hover:text-cyan-300"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300 transition-all duration-200 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Sparkles size={13} className="text-cyan-400 transition group-hover:text-slate-950" />
            <span>Contato</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg border border-slate-800 bg-slate-900/80 p-2.5 text-slate-300 transition hover:text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav className="border-t border-slate-800/80 bg-[#080c14]/98 px-6 py-6 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col space-y-1">
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-300 transition hover:bg-slate-800/60 hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 border-t border-slate-800/80 pt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 py-2.5 text-xs font-semibold text-slate-300"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 py-2.5 text-xs font-semibold text-cyan-300"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

