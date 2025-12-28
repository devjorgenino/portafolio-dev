import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./layout/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Update document title based on language
    const updateTitle = () => {
      const language = localStorage.getItem('language') || 'es';
      const title = language === 'es' ? 'Jorge Niño - Portafolio' : 'Jorge Niño - Portfolio';
      document.title = title;
    };

    updateTitle();

    // Listen for language changes
    const handleLanguageChange = () => {
      updateTitle();
    };

    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
