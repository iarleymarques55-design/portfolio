import { useState, useEffect } from 'react'
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function handleCopyEmail() {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contato" className="relative w-full overflow-hidden scroll-mt-24 py-24 lg:py-32" style={{ background: 'var(--tinta)' }}>
      {/* Elemento gráfico autoral: Letra "I" gigante em serifada */}
      <div
        aria-hidden="true"
        className="watermark-letter absolute -bottom-16 -right-10 text-[32rem] sm:text-[44rem] lg:text-[54rem] pointer-events-none select-none z-0"
        style={{ color: 'var(--terracota)', opacity: 0.04 }}
      >
        I
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">

        {/* Header: Left-aligned with italic highlight */}
        <div className="reveal mb-16 max-w-3xl text-left">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--terracota)', fontFamily: 'Space Grotesk' }}
          >
            Vamos conversar
          </p>

          <h2
            className="mt-3 leading-tight text-white"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Tem um projeto em mente? <span className="italic" style={{ color: 'var(--terracota)', fontWeight: 400 }}>Vamos conversar</span>.
          </h2>

          <p
            className="mt-4 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-dark-muted)', fontSize: '1.05rem' }}
          >
            Estou totalmente apto a realizar <strong className="text-white">projetos em conjunto</strong> e parcerias colaborativas para adquirir experiência profissional, além de aberto a oportunidades de desenvolvimento full stack e IA.
          </p>
        </div>

        {/* 3 High-contrast dark cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* E-mail Card */}
          <div
            className="reveal flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'var(--bg-dark-card)',
              border: '1.5px solid var(--terracota)',
              boxShadow: '0 10px 30px rgba(200, 85, 61, 0.15)',
            }}
          >
            <div>
              <div className="flex items-center justify-between">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: 'var(--terracota)', color: '#ffffff' }}
                >
                  <Mail size={22} />
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: 'Space Grotesk',
                    background: 'rgba(200, 85, 61, 0.18)',
                    color: '#F49B88',
                  }}
                >
                  Principal Canal
                </span>
              </div>

              <h3
                className="mt-6 text-xl font-bold text-white"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                E-mail Direto
              </h3>
              <p
                className="mt-1 text-sm break-all"
                style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-dark-muted)' }}
              >
                {personalInfo.email}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 pt-5" style={{ borderTop: '1px solid #332b25' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-xs font-bold transition cursor-pointer"
                style={{
                  background: 'var(--terracota)',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <span>Enviar e-mail</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copiar e-mail"
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-xs font-semibold transition cursor-pointer"
                style={{
                  border: '1px solid #3d332c',
                  background: '#2b231e',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#362c26'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#2b231e'}
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
          <div
            className="reveal flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'var(--bg-dark-card)',
              border: '1px solid #2d2621',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <div>
              <div className="flex items-center justify-between">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: 'var(--verde)', color: '#ffffff' }}
                >
                  <LinkedinIcon size={22} />
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: 'Space Grotesk',
                    background: 'rgba(47, 74, 58, 0.35)',
                    color: '#B0D8C0',
                  }}
                >
                  Rede Profissional
                </span>
              </div>

              <h3
                className="mt-6 text-xl font-bold text-white"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                LinkedIn
              </h3>
              <p
                className="mt-1 text-sm"
                style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-dark-muted)' }}
              >
                linkedin.com/in/iarley-marques23
              </p>
            </div>

            <div className="mt-8 pt-5" style={{ borderTop: '1px solid #332b25' }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold transition cursor-pointer"
                style={{
                  background: '#2b231e',
                  border: '1px solid #3d332c',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--verde)'
                  e.currentTarget.style.borderColor = 'var(--verde)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#2b231e'
                  e.currentTarget.style.borderColor = '#3d332c'
                }}
              >
                <span>Conectar no LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div
            className="reveal flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'var(--bg-dark-card)',
              border: '1px solid #2d2621',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <div>
              <div className="flex items-center justify-between">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: '#362f29', color: '#ffffff' }}
                >
                  <GithubIcon size={22} />
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: 'Space Grotesk',
                    background: '#2b231e',
                    color: 'var(--ink-dark-muted)',
                  }}
                >
                  Código Aberto
                </span>
              </div>

              <h3
                className="mt-6 text-xl font-bold text-white"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                GitHub
              </h3>
              <p
                className="mt-1 text-sm"
                style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-dark-muted)' }}
              >
                github.com/iarleymarques55-design
              </p>
            </div>

            <div className="mt-8 pt-5" style={{ borderTop: '1px solid #332b25' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-bold transition cursor-pointer"
                style={{
                  background: '#2b231e',
                  border: '1px solid #3d332c',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.color = '#16120F'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#2b231e'
                  e.currentTarget.style.color = '#ffffff'
                }}
              >
                <span>Explorar Repositórios</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
