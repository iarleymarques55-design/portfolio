import { useEffect, useState } from 'react'
import { CodeXml, Menu, Moon, Sun, X } from 'lucide-react'
import { navigation, personalInfo } from '../data/portfolioData'
import { GithubIcon } from './Icons'

function temaAtual() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export default function Navbar() {
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState(navigation[0].href)
  const [tema, setTema] = useState(temaAtual)

  // Marca no menu a seção que está na tela
  useEffect(() => {
    const secoes = navigation
      .map(item => document.querySelector(item.href))
      .filter(Boolean)
    const obs = new IntersectionObserver(
      entradas => entradas.forEach(e => { if (e.isIntersecting) setAtivo(`#${e.target.id}`) }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    secoes.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  function trocarTema() {
    const novo = tema === 'dark' ? 'light' : 'dark'
    if (novo === 'light') document.documentElement.dataset.theme = 'light'
    else delete document.documentElement.dataset.theme
    try { localStorage.setItem('tema', novo) } catch { /* sem armazenamento: o tema vale só nesta visita */ }
    setTema(novo)
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#inicio" className="marca">
          <CodeXml size={28} strokeWidth={2.4} aria-hidden="true" />
          {personalInfo.name}
        </a>

        <nav aria-label="Principal">
          <ul className="nav-links">
            {navigation.map(item => (
              <li key={item.href}>
                <a href={item.href} className={ativo === item.href ? 'ativo' : undefined}
                   aria-current={ativo === item.href ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-acoes">
          <button type="button" className="icone-botao" onClick={trocarTema}
                  aria-label={tema === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}>
            {tema === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="nav-github" href={personalInfo.github} target="_blank" rel="noreferrer">
            <GithubIcon size={16} /> Ver no GitHub
          </a>
          <button type="button" className="icone-botao nav-menu" aria-expanded={aberto}
                  aria-controls="nav-gaveta" aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
                  onClick={() => setAberto(v => !v)}>
            {aberto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {aberto && (
        <div id="nav-gaveta" className="nav-gaveta">
          <ul>
            {navigation.map(item => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setAberto(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
