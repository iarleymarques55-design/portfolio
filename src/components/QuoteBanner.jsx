import { useEffect } from 'react'

export default function QuoteBanner() {
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
    <section
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ background: 'var(--terracota)' }}
    >
      {/* Decorative ambient gradient without blue */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle at 75% 30%, #ffffff 0%, transparent 70%)',
        }}
      />

      <div className="reveal mx-auto max-w-5xl px-6 text-center lg:px-10 relative z-10">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.18)',
            color: '#F4EFE8',
            fontFamily: 'Space Grotesk',
          }}
        >
          Filosofia & Prática
        </span>

        <h2
          className="leading-tight text-white"
          style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          “Gosto de construir coisas que <span className="italic" style={{ color: 'var(--areia)', fontWeight: 400 }}>resolvem problemas</span> de verdade.”
        </h2>

        <p
          className="mt-6 text-base sm:text-xl max-w-2xl mx-auto font-medium"
          style={{ fontFamily: 'Space Grotesk', color: '#F8EAE6', lineHeight: 1.6 }}
        >
          Engenharia de software com foco em usabilidade e impacto, unindo automações com IA, APIs assíncronas e interfaces modernas.
        </p>
      </div>
    </section>
  )
}
