# Iarley Marques · Portfólio

> Desenvolvedor web full stack · React · Node.js · Python · FastAPI · PostgreSQL · IA · AWS

Este é o portfólio pessoal de **Iarley Marques**, desenvolvedor web full stack de Cascavel, Ceará. Ele trabalha com aplicações web e com inteligência artificial aplicada. O site reúne os projetos em produção, as habilidades técnicas, a experiência profissional, a formação, as certificações e os canais de contato.

---

## Sumário

1. [Sobre mim](#sobre-mim)
2. [Números em destaque](#números-em-destaque)
3. [Projetos](#projetos)
4. [Habilidades](#habilidades)
5. [Experiência](#experiência)
6. [Formação](#formação)
7. [Certificações](#certificações)
8. [Contato](#contato)
9. [Sobre o site](#sobre-o-site)
10. [Como rodar localmente](#como-rodar-localmente)

---

## Sobre mim

Sou estudante de Informática, estagiário de desenvolvimento na **Distribuidora Irmãos Barreiro**, filiada à **Solar Coca-Cola**, e faço trabalhos como freelancer nas horas vagas. Gosto de construir aplicações com React, Python e FastAPI. Uso IA quando ela facilita de verdade, e não só porque é tendência.

| | |
|---|---|
| **Função** | Desenvolvedor web full stack |
| **Especialização** | Aplicações web e inteligência artificial aplicada |
| **Localização** | Cascavel, Ceará, Brasil |
| **Status** | ✅ Disponível para projetos e oportunidades |

---

## Números em destaque

| Número | O que representa | Detalhe |
|:---:|---|---|
| **4** | Projetos em produção | Aplicações com deploy ativo, inclusive com IA |
| **11** | Certificações | Anthropic, AWS, Google, Alura e Hashtag |
| **2** | Experiências práticas | Solar Coca-Cola (estágio) e freelance |
| **Técnico** | em Informática | Formação técnica (2024 – 2026) |

---

## Projetos

### 01 · CorrEnem
**Corretor inteligente de redações do ENEM com IA e visão computacional**

`IA & Educação` · `Em produção` · Jun/2026 – Ago/2026

Plataforma web que corrige automaticamente redações no padrão oficial do ENEM. Ela analisa o texto em segundos, dá notas de 0 a 200 em cada uma das 5 competências do exame e aponta os desvios gramaticais, com sugestões de estrutura.

**Problema resolvido:** obter uma correção detalhada de redação de treino para o ENEM costuma ser demorado e caro.

| Métrica | Valor |
|---|---|
| Precisão avaliativa | 5 competências |
| Tempo de análise | < 3 segundos |
| Pipeline OCR | Texto manuscrito |

**Destaques**
- Avaliação nas 5 competências oficiais do ENEM, com justificativa pedagógica para cada uma
- OCR integrado para transcrever fotos de folhas de redação escritas à mão
- API assíncrona de alta performance em FastAPI, com SQLAlchemy e PostgreSQL
- Autenticação segura via OAuth 2.0 e deploy em contêiner no Railway

**Stack:** React 19 · Vite · Tailwind CSS · Python · FastAPI · PostgreSQL · SQLAlchemy · Groq / Llama SDK · OAuth 2.0 · Railway

🔗 [Ver online](https://correnem.up.railway.app) · [Código no GitHub](https://github.com/iarleymarques55-design/CorrEnem)

---

### 02 · AgroBot
**Assistente agronômico com IA multimodal e streaming em tempo real**

`IA & Agrotech` · `Em produção` · Mai/2026 – Jun/2026

Assistente inteligente para produtores rurais e agrônomos. Responde a consultas agronômicas em tempo real via streaming SSE e analisa fotos de lavouras e solos para diagnosticar pragas e recomendar adubação.

**Problema resolvido:** no campo, orientações agronômicas técnicas e diagnósticos de lavoura demoram a chegar.

| Métrica | Valor |
|---|---|
| Streaming | SSE instantâneo |
| Processamento | Visão multimodal |
| Infraestrutura | AWS + Railway |

**Destaques**
- Chat interativo com respostas instantâneas via Server-Sent Events (SSE)
- Módulo de visão computacional que detecta anomalias em fotos de plantios e solos
- Geração automática de relatórios técnicos sobre irrigação, sustentabilidade e manejo
- Banco de dados relacional PostgreSQL na AWS, com alta disponibilidade

**Stack:** Node.js · JavaScript · PostgreSQL · Groq API (IA) · AWS · Railway · HTML5 · CSS3 · SSE

🔗 [Ver online](https://agrobot.up.railway.app) · [GitHub](https://github.com/iarleymarques55-design)

---

### 03 · BemCicatri
**Sistema clínico offline-first para tratamento de úlceras diabéticas**

`Saúde & Offline-First` · `Em produção` · 2026

Software médico para acompanhar o tratamento de feridas e de pés diabéticos e a evolução de cada caso. Funciona sem internet, então profissionais de saúde conseguem registrar em campo as avaliações na escala de Wagner e os valores de HbA1c.

**Problema resolvido:** visitas domiciliares muitas vezes não têm conexão, e o acompanhamento de feridas precisa seguir um padrão.

| Métrica | Valor |
|---|---|
| Disponibilidade | 100% offline-first |
| Protocolo | Escala de Wagner e HbA1c |
| Segurança | JWT + bcrypt |

**Destaques**
- Arquitetura offline-first com sincronização bidirecional via IndexedDB e LocalStorage
- Simulador clínico baseado na escala internacional de Wagner e no controle glicêmico (HbA1c)
- Gráficos interativos da evolução da cicatrização e projeção do tempo de recuperação
- Autenticação com Google OAuth e JWT, e senhas criptografadas com bcrypt

**Stack:** Node.js · Express · PostgreSQL (AWS) · IndexedDB · LocalStorage · JWT · Google OAuth · SSE · bcrypt · Railway

🔗 [Ver online](https://bemcicatri-2-production-37a0.up.railway.app) · [GitHub](https://github.com/iarleymarques55-design)

---

### 04 · Álbum de Figurinhas Virtual
**Microsserviço RESTful assíncrono com validações e controle de concorrência**

`Back-end & APIs` · `Em produção` · `Imersão Alura` · Jul/2026

Serviço de back-end moderno, pensado para alta concorrência e modelagem relacional. Abre pacotes, faz trocas em tempo real e controla figurinhas repetidas, com validações rigorosas via Pydantic e FastAPI.

**Problema resolvido:** gerenciar com eficiência as transações de colecionáveis virtuais e as requisições simultâneas.

| Métrica | Valor |
|---|---|
| Arquitetura | FastAPI assíncrono |
| Validação | Schemas Pydantic |
| Deploy | Docker / Railway |

**Destaques**
- Endpoints assíncronos de baixa latência, construídos com FastAPI e Uvicorn
- Modelagem de dados relacional com integridade referencial e índices otimizados
- Middlewares próprios para validar payload, headers e CORS
- Containerização e deploy contínuo no Railway

**Stack:** Python · FastAPI · Uvicorn · Railway · APIs RESTful · Middlewares

🔗 [Ver online](https://album-meu-production-cbec.up.railway.app) · [Código no GitHub](https://github.com/iarleymarques55-design/album-meu)

---

## Habilidades

### 🎨 Front-end · *Interface*
Interfaces responsivas com React, HTML semântico e Tailwind CSS.

| Tecnologia | Nível |
|---|---|
| React 19 | Avançado |
| Tailwind CSS | Avançado |
| JavaScript (ES6+) | Avançado |
| HTML5 e CSS3 | Avançado |
| Vite | Intermediário |
| Layout responsivo | Avançado |

### ⚙️ Back-end e APIs · *Servidor*
APIs REST, serviços assíncronos e dados em tempo real.

| Tecnologia | Nível |
|---|---|
| Python | Avançado |
| FastAPI e Uvicorn | Avançado |
| Node.js e Express | Intermediário |
| APIs REST | Avançado |
| SQLAlchemy | Intermediário |
| SSE | Intermediário |

### ☁️ Dados e nuvem · *Infraestrutura*
PostgreSQL, persistência local e publicação em nuvem.

| Tecnologia | Nível |
|---|---|
| PostgreSQL | Avançado |
| AWS | Intermediário |
| Railway | Avançado |
| IndexedDB e LocalStorage | Avançado |
| Git e GitHub | Avançado |
| JWT, OAuth 2.0, bcrypt | Avançado |

### 🤖 Inteligência artificial · *IA*
LLMs dentro do produto e no fluxo de desenvolvimento.

| Tecnologia | Nível |
|---|---|
| Groq API e Llama SDK | Avançado |
| Claude Code (Anthropic) | Avançado |
| Google Gemini | Avançado |
| Agentes e n8n | Intermediário |
| OCR e visão multimodal | Intermediário |
| Prompts e RAG | Intermediário |

---

## Experiência

### Desenvolvedor web júnior full stack (estágio)
**Distribuidora Irmãos Barreiro (Solar Coca-Cola)** · Estágio · Cascavel, CE
*Ago de 2026 – atual*

Desenvolvo aplicações web com React e Tailwind no front-end e Python com PostgreSQL no back-end. Trabalho em equipe com Git e GitHub, com entregas contínuas.

`React` `Tailwind CSS` `HTML5 e CSS3` `JavaScript` `Python` `PostgreSQL` `Git/GitHub`

### Desenvolvedor web júnior full stack
**Freelance** · Autônomo · Remoto
*Abr de 2026 – atual*

Crio sistemas, páginas e ferramentas com IA para clientes, do desenho da solução ao deploy, cobrindo front-end, back-end e publicação.

`Full stack` `Node.js` `FastAPI` `React` `Groq / IA` `AWS` `Railway`

---

## Formação

### Técnico em Informática
Cascavel, Ceará · *Jan de 2024 – Dez de 2026* · **Cursando**

Curso técnico integrado, com base sólida em desenvolvimento web, estruturas de dados, algoritmos, orientação a objetos, banco de dados e lógica de programação, além de espanhol e inglês.

- Fundamentos de software aplicados a problemas reais
- Projetos que combinam hardware, software e redes
- Participação em feiras de ciências e mostras de tecnologia

---

## Certificações

São 11 certificações; as marcadas com ⭐ são destaque.

| | Certificação | Emissor | Data | Área |
|:---:|---|---|---|---|
| ⭐ | Gerenciamento do Claude Code | Anthropic | Mai/2026 | IA |
| ⭐ | Fluência e Gerenciamento de IA | Anthropic | Mai/2026 | IA |
| ⭐ | Imersão de Agentes de IA n8n | Hashtag Treinamentos | Jul/2026 | IA |
| ⭐ | Arquitetura Web com IA | Alura | Jul/2026 | IA |
| | Missão Programação com IA | DevClub | Jul/2026 | IA |
| ⭐ | Programação em Nuvem | Amazon Web Services (AWS) | Abr/2026 | Cloud |
| | Gestão de Projetos | Google | Mai/2026 | Gestão |
| | Python | Hashtag Treinamentos | Mai/2026 | Dev |
| | Programação Básica | Bradesco | Abr/2026 | Dev |
| | Excel | Hashtag Treinamentos | Jul/2026 | Gestão |
| | Inglês Básico | EF SET | Jun/2026 | Geral |

---

## Contato

Disponível para projetos, freelas e oportunidades. Vamos conversar!

| Canal | Link |
|---|---|
| 📧 E-mail | [iarleymarques028@gmail.com](mailto:iarleymarques028@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/iarley-marques23](https://linkedin.com/in/iarley-marques23) |
| 🐙 GitHub | [github.com/iarleymarques55-design](https://github.com/iarleymarques55-design) |
| 📍 Localização | Cascavel, Ceará, Brasil |

---

## Sobre o site

### Seções
O site tem uma página única com navegação por âncoras:

| Seção | Âncora | Conteúdo |
|---|---|---|
| Hero | — | Nome, função, chamada principal e números em destaque |
| Sobre | `#sobre` | História, foto e bio |
| Projetos | `#projetos` | Os 4 projetos, com métricas, destaques, stack e links |
| Habilidades | `#habilidades` | 4 categorias de habilidades com nível |
| Experiência | `#experiencia` | Estágio, freelance e formação |
| Certificados | `#certificados` | As 11 certificações |
| Contato | `#contato` | E-mail, LinkedIn e GitHub |

### Identidade visual
O estilo é editorial, com fundo off-white, tipografia serifada e acentos em tons terrosos.

**Tipografia**
- **Fraunces** (serifada): títulos e destaques
- **Space Grotesk** (sans-serif): textos e interface
- **JetBrains Mono** (monoespaçada): detalhes técnicos e rótulos

**Paleta de cores**

| Token | Cor | Uso |
|---|---|---|
| `--creme` | `#F4EFE8` | Fundo principal |
| `--areia` | `#E9DFCB` | Fundo secundário |
| `--tinta` | `#16120F` | Texto principal e fundos escuros |
| `--texto-suave` | `#4A4038` | Texto secundário |
| `--terracota` | `#C8553D` | Cor de destaque |
| `--azul` | `#1F3A9E` | Cor de apoio |
| `--verde` | `#2F4A3A` | Cor de apoio |

### Tecnologias do site
- **React 19**: interface em componentes
- **Vite**: build e servidor de desenvolvimento
- **Tailwind CSS** (via `@tailwindcss/vite`): estilização
- **Lucide React**: ícones
- Animações de entrada no scroll com `IntersectionObserver`

### Estrutura do projeto
```
PORTFOLIO/
├── index.html               # HTML base, fontes e metadados
├── package.json
├── vite.config.js
├── public/                  # Imagens (foto, mockups dos projetos) e favicon
└── src/
    ├── main.jsx             # Ponto de entrada
    ├── App.jsx              # Monta todas as seções
    ├── index.css            # Tokens de cor, fontes e estilos globais
    ├── data/
    │   └── portfolioData.js # Todo o conteúdo do site (textos, projetos, skills…)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Certifications.jsx
        ├── QuoteBanner.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── Icons.jsx
```

> 💡 Para atualizar o conteúdo do site, edite apenas `src/data/portfolioData.js`. Os componentes leem tudo desse arquivo.

---

## Como rodar localmente

**Pré-requisito:** Node.js 18 ou superior.

```bash
# instalar as dependências
npm install

# servidor de desenvolvimento
npm run dev

# gerar a versão de produção (pasta dist/)
npm run build

# pré-visualizar a versão de produção
npm run preview
```

---

<p align="center"><b>Iarley Marques</b> · Desenvolvedor Full Stack & IA · Cascavel, CE</p>
