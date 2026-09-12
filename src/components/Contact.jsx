import { useState } from 'react'
import { Mail, Send, CheckCircle2, Copy, Check, MapPin, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Projeto Web / IA',
    message: '',
  })

  function handleCopyEmail() {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contato" className="relative scroll-mt-24 border-t border-slate-800/80 pt-24 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900/90 via-[#0d1424]/90 to-slate-950/90 p-8 shadow-2xl backdrop-blur-2xl sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Left Info Column */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400">
                  06 / Contato & Conexão
                </p>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Vamos criar algo incrível juntos?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-300">
                  Estou disponível para novas oportunidades de trabalho, projetos freelance e colaboração em produtos digitais inovadores que façam uso de desenvolvimento web moderno e IA.
                </p>

                {/* Direct Contact Links */}
                <div className="mt-8 space-y-4">
                  {/* Email with copy button */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 transition hover:border-cyan-500/40">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-cyan-300"
                    >
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Mail size={18} />
                      </div>
                      <span className="truncate">{personalInfo.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copiar e-mail"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white"
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

                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-sm font-medium text-slate-200 transition hover:border-indigo-500/40 hover:text-indigo-300"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-500/10 text-indigo-400">
                      <LinkedinIcon size={18} />
                    </div>
                    <span>linkedin.com/in/iarley-marques23</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:text-white"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-800 text-slate-300">
                      <GithubIcon size={18} />
                    </div>
                    <span>github.com/iarleymarques55-design</span>
                  </a>
                </div>
              </div>

              {/* Location indicator */}
              <div className="mt-8 flex items-center gap-2 font-mono text-xs text-slate-400">
                <MapPin size={14} className="text-cyan-400" />
                <span>{personalInfo.location} · Disponível para atuações remotas e presenciais</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="rounded-2xl border border-slate-800/90 bg-slate-950/70 p-6 backdrop-blur-xl sm:p-8">
              {formSubmitted ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white">Mensagem recebida!</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-300">
                    Obrigado pelo contato, <strong className="text-cyan-300">{formData.name || 'amigo(a)'}</strong>! Retornarei o mais breve possível no seu e-mail.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({ name: '', email: '', subject: 'Projeto Web / IA', message: '' })
                    }}
                    className="mt-6 rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-slate-800"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-cyan-400" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                      Envie uma mensagem direta
                    </span>
                  </div>

                  <div>
                    <label className="block mb-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      Seu Nome *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Ana Souza"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      Seu E-mail *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@empresa.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      Assunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    >
                      <option value="Projeto Web / IA">Projeto Web / IA</option>
                      <option value="Oportunidade Profissional">Oportunidade Profissional</option>
                      <option value="Consultoria / Freelance">Consultoria / Freelance</option>
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte um pouco sobre o projeto, ideia ou desafio..."
                      className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/30"
                  >
                    <Send size={16} />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

