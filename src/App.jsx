import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skill from './components/Skill.jsx';
import CompetitiveProgramming from './components/CompetitiveProgramming.jsx';
import Experience from './components/Experience.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

/**
 * Main App component
 * @returns {JSX.Element} App component
 */
export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        <Home />
        <About />
        <CompetitiveProgramming />
        <Portfolio />
        <Skill />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}   