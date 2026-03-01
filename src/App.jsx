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
      <div className="min-h-screen bg-white dark:bg-gray-950 animate-fade-in">
        <Navbar />
        <main>
          <Home />
          <CompetitiveProgramming />
          <Portfolio />
          <Skill />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}   