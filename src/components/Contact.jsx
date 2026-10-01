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
    <section id="contato" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Main Editorial Container */}
        <div
          className="reveal rounded-3xl p-8 sm:p-14 lg:p-18"
          style={{
            background: 'var(--bg-warm)',
            border: '1px solid #e2dad0',
          }}
        >
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
            >
              Vamos conversar
            </p>

            <h2
              className="mt-3 leading-tight"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}
            >
              Tem um projeto em mente ou uma oportunidade?
            </h2>
            
            <p
              className="mt-5 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)' }}
            >
              Estou disponível para <strong style={{ color: 'var(--ink)' }}>vagas de estágio, posições júnior</strong> e <strong style={{ color: 'var(--ink)' }}>projetos freelance</strong> em desenvolvimento full stack e aplicações inteligentes com IA.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* E-mail Card */}
            <div
              className="group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#ffffff',
                border: '1.5px solid var(--accent)',
                boxShadow: '0 8px 30px -10px rgba(184, 80, 52, 0.08)',
              }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                  >
                    <Mail size={22} />
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: 'Space Grotesk',
                      background: 'var(--accent-light)',
                      color: 'var(--accent)',
                    }}
                  >
                    Principal canal
                  </span>
                </div>

                <h3
                  className="mt-5 text-lg font-bold"
                  style={{ fontFamily: 'Space Grotesk', color: 'var(--ink)' }}
                >
                  E-mail Direto
                </h3>
                <p
                  className="mt-1 text-xs break-all"
                  style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)' }}
                >
                  {personalInfo.email}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 pt-4" style={{ borderTop: '1px solid #eee8e0' }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold transition"
                  style={{
                    background: 'var(--accent)',
                    color: '#ffffff',
                    fontFamily: 'Space Grotesk',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent)'}
                >
                  <span>Enviar mensagem</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copiar e-mail"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold transition cursor-pointer"
                  style={{
                    border: '1px solid #d9d2c7',
                    background: '#faf8f5',
                    color: 'var(--ink)',
                    fontFamily: 'Space Grotesk',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#eee8df'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#faf8f5'}
                >
                  {copied ? (
                    <>
                      <Check size={14} style={{ color: '#166534' }} />
                      <span style={{ color: '#166534' }}>Copiado!</span>
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
              className="group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#ffffff',
                border: '1px solid #e4ddd4',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: '#eef4fb', color: '#1d5b96' }}
                  >
                    <LinkedinIcon size={20} />
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: 'Space Grotesk',
                      background: '#eef4fb',
                      color: '#1d5b96',
                    }}
                  >
                    Rede profissional
                  </span>
                </div>

                <h3
                  className="mt-5 text-lg font-bold"
                  style={{ fontFamily: 'Space Grotesk', color: 'var(--ink)' }}
                >
                  LinkedIn
                </h3>
                <p
                  className="mt-1 text-xs"
                  style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)' }}
                >
                  linkedin.com/in/iarley-marques23
                </p>
              </div>

              <div className="mt-8 pt-4" style={{ borderTop: '1px solid #eee8e0' }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition"
                  style={{
                    background: '#faf8f5',
                    border: '1px solid #d9d2c7',
                    color: 'var(--ink)',
                    fontFamily: 'Space Grotesk',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1d5b96'
                    e.currentTarget.style.borderColor = '#1d5b96'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#faf8f5'
                    e.currentTarget.style.borderColor = '#d9d2c7'
                    e.currentTarget.style.color = 'var(--ink)'
                  }}
                >
                  <span>Conectar no LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div
              className="group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#ffffff',
                border: '1px solid #e4ddd4',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
              }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: '#f0ece6', color: 'var(--ink)' }}
                  >
                    <GithubIcon size={20} />
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: 'Space Grotesk',
                      background: '#f0ece6',
                      color: 'var(--ink)',
                    }}
                  >
                    Código aberto
                  </span>
                </div>

                <h3
                  className="mt-5 text-lg font-bold"
                  style={{ fontFamily: 'Space Grotesk', color: 'var(--ink)' }}
                >
                  GitHub
                </h3>
                <p
                  className="mt-1 text-xs"
                  style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)' }}
                >
                  github.com/iarleymarques55-design
                </p>
              </div>

              <div className="mt-8 pt-4" style={{ borderTop: '1px solid #eee8e0' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition"
                  style={{
                    background: '#faf8f5',
                    border: '1px solid #d9d2c7',
                    color: 'var(--ink)',
                    fontFamily: 'Space Grotesk',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--ink)'
                    e.currentTarget.style.borderColor = 'var(--ink)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#faf8f5'
                    e.currentTarget.style.borderColor = '#d9d2c7'
                    e.currentTarget.style.color = 'var(--ink)'
                  }}
                >
                  <span>Explorar Repositórios</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
