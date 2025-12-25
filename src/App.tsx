import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Facilities from './components/Facilities';
import PatientInfo from './components/PatientInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Team />
        <Facilities />
        <PatientInfo />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;