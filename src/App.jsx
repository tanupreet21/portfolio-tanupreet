import About from "./components/About";
import Accomplishments from "./components/Accomplishments";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import References from "./components/References";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="bg-background text-slate-100 min-h-screen">
      <Navbar/>
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Accomplishments />
      <Achievements/>
      <References/>
    </div>
  )
}

export default App
