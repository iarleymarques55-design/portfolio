export const personalInfo = {
  name: "Iarley Marques",
  role: "Desenvolvedor web full stack",
  specialization: "Aplicações web e inteligência artificial aplicada",
  location: "Cascavel, Ceará, Brasil",
  bio: "Sou estudante de Informática, estagiário de desenvolvimento na Distribuidora Irmãos Barreiro, filiada à Solar Coca-Cola, e freelancer nas horas vagas. Gosto de construir aplicações com React, Python e FastAPI, e uso IA quando ela facilita de verdade — não só porque é tendência.",
  linkedin: "https://linkedin.com/in/iarley-marques23",
  github: "https://github.com/iarleymarques55-design",
  email: "iarleymarques028@gmail.com",
  // Preencha para mostrar o WhatsApp no contato, ex.: "(88) 9 9999-9999"
  whatsapp: "",
  // Caminho de um PDF em /public para mostrar o botão "Baixar currículo", ex.: "/curriculo.pdf"
  resume: "",
  statusText: "Disponível para projetos e oportunidades",
}

export const stats = [
  {
    value: "4",
    label: "Projetos em produção",
    detail: "Aplicações com deploy ativo, inclusive com IA",
  },
  {
    value: "11",
    label: "Certificações",
    detail: "Anthropic, AWS, Google, Alura e Hashtag",
  },
  {
    value: "2",
    label: "Experiências práticas",
    detail: "Solar Coca-Cola (estágio) e freelance",
  },
  {
    value: "Técnico",
    label: "em Informática",
    detail: "Formação técnica (2024 – 2026)",
  },
]

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Certificações", href: "#certificados" },
  { label: "Contato", href: "#contato" },
]

export const projects = [
  {
    id: "correnem",
    title: "CorrEnem",
    subtitle: "Corretor Inteligente de Redações ENEM com IA & Visão Computacional",
    period: "Jun/2026 – Ago/2026",
    category: "IA & Educação",
    status: "Em Produção",
    deploy: "https://correnem.up.railway.app",
    github: "https://github.com/iarleymarques55-design/CorrEnem",
  },
  {
    id: "agrobot",
    title: "AgroBot",
    subtitle: "Assistente Agronômico com IA Multimodal & Streaming em Tempo Real",
    period: "Mai/2026 – Jun/2026",
    category: "IA & Agrotech",
    status: "Em Produção",
    deploy: "https://agrobot.up.railway.app",
    github: "https://github.com/iarleymarques55-design",
  },
  {
    id: "bemcicatri",
    title: "BemCicatri",
    subtitle: "Sistema Clínico Offline-First para Tratamento de Úlceras Diabéticas",
    period: "2026",
    category: "Saúde & Offline-First",
    status: "Em Produção",
    deploy: "https://bemcicatri-2-production-37a0.up.railway.app",
    github: "https://github.com/iarleymarques55-design",
  },
  {
    id: "album",
    title: "Álbum de Figurinhas Virtual",
    subtitle: "Microsserviço RESTful Assíncrono com Validações & Concorrência",
    period: "Jul/2026",
    category: "Back-End & APIs",
    status: "Em Produção",
    deploy: "https://album-meu-production-cbec.up.railway.app",
    github: "https://github.com/iarleymarques55-design/album-meu",
  },
]

export const experiences = [
  {
    role: "Desenvolvedor web júnior full stack (estágio)",
    company: "Distribuidora Irmãos Barreiro (Solar Coca-Cola)",
    type: "Estágio",
    period: "Ago de 2026 – o momento",
    description: "Desenvolvimento de aplicações web com React e Tailwind no front-end e Python com PostgreSQL no back-end. Trabalho em equipe com Git, GitHub e entregas contínuas.",
  },
  {
    role: "Desenvolvedor web júnior full stack",
    company: "Freelance",
    type: "Autônomo",
    period: "Abr de 2026 – o momento",
    description: "Sistemas, páginas e ferramentas com IA para clientes: do desenho da solução ao deploy. Cobre front-end, back-end e publicação.",
  },
]

export const education = {
  degree: "Técnico em Informática",
  period: "Jan de 2024 – Dez de 2026",
  location: "Cascavel, Ceará",
  status: "Cursando",
  description: "Curso técnico integrado. Base sólida em desenvolvimento web, estruturas de dados, algoritmos, orientação a objetos, banco de dados, lógica de programação, espanhol e inglês.",
  highlights: [
    "Fundamentos de software e problemas reais",
    "Projetos que misturam hardware, software e redes",
    "Feiras de ciências e mostras de tecnologia",
  ],
}

export const certifications = [
  {
    id: "anthropic-claude",
    title: "Gerenciamento do Claude Code",
    issuer: "Anthropic",
    date: "Mai/2026",
    highlight: true,
  },
  {
    id: "anthropic-fluency",
    title: "Fluência e Gerenciamento de IA",
    issuer: "Anthropic",
    date: "Mai/2026",
    highlight: true,
  },
  {
    id: "hashtag-n8n",
    title: "Imersão de Agentes de IA n8n",
    issuer: "Hashtag Treinamentos",
    date: "Jul/2026",
    highlight: true,
  },
  {
    id: "alura-ai-arch",
    title: "Arquitetura Web com IA",
    issuer: "Alura",
    date: "Jul/2026",
    highlight: true,
  },
  {
    id: "devclub-ai",
    title: "Missão Programação com IA",
    issuer: "DevClub",
    date: "Jul/2026",
    highlight: false,
  },
  {
    id: "aws-cloud",
    title: "Programação em Nuvem",
    issuer: "Amazon Web Services (AWS)",
    date: "Abr/2026",
    highlight: true,
  },
  {
    id: "google-project-mgmt",
    title: "Gestão de Projetos",
    issuer: "Google",
    date: "Mai/2026",
    highlight: false,
  },
  {
    id: "hashtag-python",
    title: "Python",
    issuer: "Hashtag Treinamentos",
    date: "Mai/2026",
    highlight: false,
  },
  {
    id: "bradesco-prog",
    title: "Programação Básica",
    issuer: "Bradesco",
    date: "Abr/2026",
    highlight: false,
  },
  {
    id: "hashtag-excel",
    title: "Excel",
    issuer: "Hashtag Treinamentos",
    date: "Jul/2026",
    highlight: false,
  },
  {
    id: "efset-english",
    title: "Inglês Básico",
    issuer: "EF SET",
    date: "Jun/2026",
    highlight: false,
  },
]

// Abre a tela de "Escrever e-mail" do Gmail já com o destinatário preenchido.
// O mailto: depende de um programa de e-mail instalado e muitas vezes não abre nada.
export const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`
