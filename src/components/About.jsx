import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="sobre" className="relative w-full scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* — Layout: label + text left, photo right-ish */}
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:gap-24 items-center">

          {/* Left: story */}
          <div className="reveal">

            {/* Small label — no badge, just text */}
            <p
              className="mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
            >
              Sobre mim
            </p>

            {/* Big serif headline */}
            <h2
              className="leading-tight"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}
            >
              Da formação técnica à <span className="italic" style={{ color: 'var(--accent)', fontWeight: 400 }}>construção de produtos reais</span>.
            </h2>

            {/* Text body */}
            <div
              className="mt-8 space-y-5"
              style={{ fontFamily: 'Space Grotesk', fontSize: '1.05rem', color: 'var(--ink-muted)', lineHeight: 1.8 }}
            >
              <p>
                Comecei no desenvolvimento com o propósito de desvendar a engenharia por trás dos sistemas web e transformar ideias em aplicações funcionais. Cursando o 3º ano do <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Técnico em Informática</strong>, construí base sólida em lógica, estruturas de dados, orientação a objetos, bancos relacionais e arquitetura de software.
              </p>
              <p>
                Sou <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>estagiário de desenvolvimento na Distribuidora Irmãos Barreiro (Solar Coca-Cola)</strong>, criando interfaces com React e Tailwind, microsserviços em Python e PostgreSQL, e versionamento com Git e GitHub.
              </p>
              <p>
                Como <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>freelancer</strong>, entrego projetos de ponta a ponta, integrando IA (LLMs, OCR, visão computacional, n8n) para potencializar a produtividade e gerar valor real para o usuário.
              </p>
            </div>
          </div>

          {/* Right: editorial pull quote in a colored block */}
          <div className="reveal" style={{ animationDelay: '150ms' }}>
            <div
              className="relative rounded-3xl p-10"
              style={{ background: 'var(--sage-light)' }}
            >
              <p
                className="editorial-quote"
                style={{ color: 'var(--sage)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                “Engenharia não é acumular frameworks, mas projetar arquiteturas resilientes que entregam valor palpável no dia a dia.”
              </p>
              <div
                className="mt-8 flex items-center gap-3"
                style={{ borderTop: '1px solid rgba(58,107,82,0.25)', paddingTop: '1.5rem' }}
              >
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: 'var(--sage)', color: '#fff', fontFamily: 'Fraunces' }}
                >
                  IM
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--sage)', fontFamily: 'Space Grotesk' }}>Iarley Marques</p>
                  <p className="text-xs" style={{ color: 'rgba(58,107,82,0.7)', fontFamily: 'Space Grotesk' }}>Desenvolvedor Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-24 section-rule" />
    </section>
  )
}
