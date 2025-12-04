import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App
