import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/planning') {
      setActiveSection('planning');
      return;
    }
    if (location.pathname === '/calendrier') {
      setActiveSection('calendrier');
      return;
    }
    if (location.pathname === '/photos') {
      setActiveSection('photos');
      return;
    }
    if (location.pathname === '/informations-pratiques') {
      setActiveSection('informations-pratiques');
      return;
    }
    if (location.pathname === '/') {
      setActiveSection('accueil');
    }

    const handleScroll = () => {
      // Ne faire le scroll tracking que sur la page d'accueil
      if (location.pathname !== '/') return;
      
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

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, rediriger vers l'accueil
    if (location.pathname !== '/') {
      if (sectionId === 'accueil') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${sectionId}`;
      }
      return;
    }
    
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
              { id: 'lieux', label: 'Lieux' },
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
            
            <Link
              to="/planning"
              className={`relative font-medium transition-colors duration-300 py-2 text-center md:text-left ${
                activeSection === 'planning'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Planning
              {activeSection === 'planning' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
              )}
            </Link>

            <Link
              to="/calendrier"
              className={`relative font-medium transition-colors duration-300 py-2 text-center md:text-left ${
                activeSection === 'calendrier'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Calendrier
              {activeSection === 'calendrier' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
              )}
            </Link>

            <Link
              to="/photos"
              className={`relative font-medium transition-colors duration-300 py-2 text-center md:text-left ${
                activeSection === 'photos'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Photos
              {activeSection === 'photos' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
              )}
            </Link>

            <Link
              to="/informations-pratiques"
              className="relative font-medium transition-colors duration-300 py-2 text-gray-700 hover:text-yellow-600 text-center md:text-left"
            >
              Infos pratiques
            </Link>

            <Link
              to="/inscription"
              className="relative font-medium transition-all duration-300 py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-black transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center"
            >
              Inscription
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;