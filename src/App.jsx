import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skill from './components/Skill.jsx';


export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Contact />
      <Footer />
    </div>

  )
}   