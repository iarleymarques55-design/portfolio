import { BrainCircuit, Code, Rocket, CheckCircle2, GraduationCap, Building2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400">
            01 / Trajetória & Perfil
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            Fundamentos sólidos, visão de produto e IA aplicada.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Main Narrative */}
          <div className="space-y-5 text-base leading-relaxed text-slate-300">
            <p>
              Minha paixão por tecnologia nasceu da vontade de entender como grandes produtos funcionam por baixo dos panos e transformar ideias em sistemas funcionais. Cursando o 3º ano do ensino técnico em Informática na <strong className="text-white">EEEP Edson Queiroz</strong>, construí uma base rigorosa em lógica de programação, orientação a objetos, banco de dados e arquitetura de software.
            </p>

            <p>
              Levo essa teoria diretamente para o campo prático: como <strong className="text-cyan-300">Estagiário de Desenvolvimento Full-Stack na Solar Coca-Cola</strong>, atuo criando interfaces dinâmicas com <span className="text-slate-100 font-medium">React e Tailwind CSS</span> e integrando serviços no back-end com <span className="text-slate-100 font-medium">Python e PostgreSQL</span>, mantendo o controle de versão rigoroso via Git e GitHub.
            </p>

            <p>
              Paralelamente, atuo como <strong className="text-indigo-300">Desenvolvedor Freelance</strong>, projetando e entregando soluções completas do zero ao deploy em nuvem (AWS e Railway). Minha rotina combina o melhor das ferramentas de inteligência artificial de última geração (<strong className="text-cyan-400">Claude Code</strong>, <strong className="text-indigo-400">Gemini</strong> e agentes automatizados com <strong className="text-sky-400">n8n</strong>) para acelerar a resolução de problemas complexos e aprender novas stacks com extrema velocidade.
            </p>

            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  <CheckCircle2 size={18} className="text-cyan-400" />
                  Pronto para colaborar em times inovadores e projetos ambiciosos
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards / Destaques Rápidos */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-md transition hover:border-cyan-500/40">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Vivência Profissional Ativa</h3>
                  <span className="text-xs text-slate-400">Solar Coca-Cola & Projetos Freelance</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Experiência em ambiente corporativo de grande porte e autonomia para desenvolver soluções ponta a ponta para clientes reais.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-md transition hover:border-indigo-500/40">
              <div className="flex items-center gap-3 text-indigo-400">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/10">
                  <BrainCircuit size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Engenharia Acelerada por IA</h3>
                  <span className="text-xs text-slate-400">Anthropic Claude, Groq & Agentes n8n</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Uso contínuo de IA tanto no fluxo de trabalho de engenharia quanto embarcada nos produtos: análise multimodal, OCR de redações e streaming SSE.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-md transition hover:border-sky-500/40">
              <div className="flex items-center gap-3 text-sky-400">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Educação Técnica & Constante</h3>
                  <span className="text-xs text-slate-400">EEEP Edson Queiroz + 11 Certificações</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Constante evolução através de formações na Alura, AWS, Google, DevClub e Hashtag Treinamentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

