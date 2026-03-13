import Accomplishments from "./components/Accomplishments";
import Achievements from "./components/Achievements";
import Biography from "./components/Biography";
import CareerSummary from "./components/CareerSummary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Philosophy from "./components/Philosophy";
import Projects from "./components/Projects";
import References from "./components/References";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="bg-background text-slate-100 min-h-screen">
      <Navbar/>
      <Hero />
      <CareerSummary />
      <Philosophy/>
      <Biography/>
      <Skills />
      <Accomplishments />
      <Projects />
      <Achievements/>
      <References/>
    </div>
  )
}

export default App
