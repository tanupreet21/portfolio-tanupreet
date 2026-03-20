import About from "./components/About";
import Accomplishments from "./components/Accomplishments";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import References from "./components/References";
import Skills from "./components/Skills";
import Footer from "./components/footer";

function App() {

  return (
    <div className="bg-background text-slate-100 min-h-screen">
      <Navbar/>
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Accomplishments />
      <Education/>
      <Achievements/>
      <References/>
      <Footer />
    </div>
  )
}

export default App
