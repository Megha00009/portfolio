import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Mail, Sun, Moon } from 'lucide-react';
import { resumeData } from './data/resumeData';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import InsideMyStack from './sections/InsideMyStack';
import HowIBuild from './sections/HowIBuild';
import Integrations from './sections/Integrations';
import Education from './sections/Education';
import Activities from './sections/Activities';
import Contact from './sections/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const themeButton = (
    <button
      type="button"
      onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="theme-toggle"
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'is-scrolled backdrop-blur-md py-4 border-b border-border-muted' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white font-bold text-xl tracking-tighter"
        >
          MV<span className="text-accent-blue">.</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-accent-blue transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeData.personalInfo.resumeUrl}
            className="px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
          >
            <FileText size={16} /> Resume
          </a>
          {themeButton}
        </div>

        <button aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg border-b border-border-muted overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-accent-blue transition-colors text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumeData.personalInfo.resumeUrl}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent-blue text-white font-bold"
              >
                <FileText size={18} /> Resume
              </a>
              <div className="flex justify-center">{themeButton}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-border-muted bg-dark-bg">
    <div className="container mx-auto px-6 text-center">
      <p className="text-white font-bold mb-2">{resumeData.personalInfo.name}</p>
      <p className="text-gray-500 text-sm mb-6">{resumeData.personalInfo.title}</p>
      <div className="flex justify-center gap-6 mb-8">
        <a href={`mailto:${resumeData.personalInfo.email}`} aria-label="Email Megha" className="text-gray-500 hover:text-accent-blue transition-colors"><Mail size={20} /></a>
        <a href={resumeData.personalInfo.linkedIn} aria-label="LinkedIn profile" className="text-gray-500 hover:text-accent-blue transition-colors"><span className="font-bold">in</span></a>
      </div>
      <p className="text-gray-600 text-xs">
        © 2026 {resumeData.personalInfo.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen selection:bg-accent-blue selection:text-white theme-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <InsideMyStack />
        <HowIBuild />
        <Integrations />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
