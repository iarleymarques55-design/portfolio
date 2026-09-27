import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased">
      {/* Background Grid & Ambient Lighting */}
      <div className="portfolio-grid pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60" />
      <div className="ambient-glow -top-40 left-1/4 h-[500px] w-[500px] bg-amber-500/10" />
      <div className="ambient-glow top-[35%] -right-20 h-[600px] w-[600px] bg-sky-500/10" />
      <div className="ambient-glow top-[70%] -left-20 h-[600px] w-[600px] bg-indigo-500/10" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
