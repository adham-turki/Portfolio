import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import { CertificationsSection } from './components/certifications-section.jsx';

function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Navigation />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div id="certifications">
          <CertificationsSection />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
