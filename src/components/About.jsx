import { BrainCircuit, GraduationCap, Building2, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 border-t border-slate-800/80 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">
            <Sparkles size={13} />
            <span>01 / TRAJETÓRIA & FOCO</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Da formação técnica à construção de produtos reais.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Main Story */}
          <div className="space-y-5 text-base leading-relaxed text-slate-300">
            <p>
              Comecei no desenvolvimento com o propósito de desvendar a engenharia por trás dos sistemas web e transformar ideias em aplicações funcionais de alta performance. Cursando o 3º ano do <strong className="font-semibold text-white">Técnico em Informática</strong>, construí uma base sólida em lógica, estruturas de dados, orientação a objetos, bancos relacionais e arquitetura de software.
            </p>

            <p>
              Atualmente, sou <strong className="font-semibold text-white">estagiário de desenvolvimento de software na Distribuidora Irmãos Barreiro (filiada à Solar Coca-Cola)</strong>, atuando no ecossistema corporativo com criação de interfaces ágeis em React e Tailwind CSS, microsserviços em Python e PostgreSQL, além de versionamento e CI/CD com Git e GitHub.
            </p>

            <p>
              Como <strong className="font-semibold text-white">desenvolvedor freelance</strong>, entrego projetos de ponta a ponta — do levantamento de requisitos ao deploy em nuvem (AWS e Railway). Integro fluxos com Inteligência Artificial (modelos LLM, visão computacional, OCR e automações com n8n) para potencializar a produtividade e agregar valor direto ao usuário final.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 transition-all duration-200 hover:border-slate-700">
              <div className="flex items-center gap-3.5">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 bg-slate-800 text-amber-400">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">Experiência Corporativa & Freelance</h3>
                  <span className="font-mono text-xs text-slate-400">Distribuidora Irmãos Barreiro (Solar Coca-Cola) & Freelance</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Desenvolvimento full stack prático, atuando desde a experiência de interface até a arquitetura de dados e deploy conteinerizado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 transition-all duration-200 hover:border-slate-700">
              <div className="flex items-center gap-3.5">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 bg-slate-800 text-sky-400">
                  <BrainCircuit size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">Engenharia com IA Integrada</h3>
                  <span className="font-mono text-xs text-slate-400">LLMs, Visão Computacional & n8n</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Aplicação de IA multimodal, pipelines de OCR para textos manuscritos e streaming em tempo real com Groq e modelos de linguagem.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 transition-all duration-200 hover:border-slate-700">
              <div className="flex items-center gap-3.5">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 bg-slate-800 text-emerald-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">Formação & Aprendizado Contínuo</h3>
                  <span className="font-mono text-xs text-slate-400">Técnico em Informática · 11 Certificações</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Cursos e certificações reconhecidas por Anthropic (Claude), AWS, Google, Alura e Hashtag Treinamentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
