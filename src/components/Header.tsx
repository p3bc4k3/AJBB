import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'planning', 'calendrier', 'lieux', 'contact'];
      const scrollPos = window.pageYOffset + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPos >= top && scrollPos <= bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 text-yellow-600 font-bold text-xl">
            <img 
              src="/img/Logo.png" 
              alt="AJBB Logo" 
              className="w-8 h-8 object-contain"
            />
            <span>AJBB</span>
          </div>

          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${
            isMenuOpen 
              ? 'absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4 px-5 flex flex-col gap-4' 
              : 'hidden'
          } md:flex md:items-center md:gap-8 md:static md:bg-transparent md:border-0 md:p-0 md:flex-row`}>
            {[
              { id: 'accueil', label: 'Accueil' },
              { id: 'planning', label: 'Planning' },
              { id: 'calendrier', label: 'Calendrier' },
              { id: 'lieux', label: 'Lieux' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative font-medium transition-colors duration-300 py-2 ${
                  activeSection === id 
                    ? 'text-yellow-600' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {label}
                {activeSection === id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;