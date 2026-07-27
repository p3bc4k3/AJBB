import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

type DropdownItem = { label: string; to: string } | { label: string; onClick: () => void };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [openDropdown, setOpenDropdown] = useState<'club' | 'pratiquer' | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

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
    if (location.pathname === '/le-club') {
      setActiveSection('le-club');
      return;
    }
    if (location.pathname === '/partenaires') {
      setActiveSection('partenaires');
      return;
    }
    if (location.pathname === '/quiz') {
      setActiveSection('quiz');
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    setOpenDropdown(null);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const clubItems: DropdownItem[] = [
    { label: 'Le Club', to: '/le-club' },
    { label: 'Partenaires', to: '/partenaires' },
  ];

  const pratiquerItems: DropdownItem[] = [
    { label: 'Nos lieux', onClick: () => scrollToSection('lieux') },
    { label: 'Planning', to: '/planning' },
    { label: 'Calendrier', to: '/calendrier' },
    { label: 'Infos pratiques', to: '/informations-pratiques' },
    { label: 'Quiz Judo', to: '/quiz' },
  ];

  const isClubActive = activeSection === 'le-club' || activeSection === 'partenaires';
  const isPratiquerActive = ['planning', 'calendrier', 'lieux', 'informations-pratiques', 'quiz'].includes(activeSection);

  const renderDropdown = (
    key: 'club' | 'pratiquer',
    label: string,
    items: DropdownItem[],
    isActive: boolean
  ) => (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
        className={`flex items-center justify-center md:justify-start gap-1 w-full font-medium transition-colors duration-300 py-2 ${
          isActive ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'
        }`}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${openDropdown === key ? 'rotate-180' : ''}`}
        />
        {isActive && (
          <div className="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
        )}
      </button>

      {openDropdown === key && (
        <div className="md:absolute md:top-full md:left-0 md:mt-1 bg-gray-50 md:bg-white rounded-lg md:shadow-lg md:border md:border-gray-200 md:min-w-[200px] md:py-2 md:z-50 flex flex-col items-stretch">
          {items.map((item) =>
            'to' in item ? (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenus}
                className="px-4 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 text-center md:text-left transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={item.onClick}
                className="px-4 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 text-center md:text-left transition-colors duration-200"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );

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

          <div
            ref={navRef}
            className={`${
              isMenuOpen
                ? 'absolute top-full left-0 right-0 bg-white border-t border-gray-200 py-4 px-5 flex flex-col gap-4'
                : 'hidden'
            } md:flex md:items-center md:gap-8 md:static md:bg-transparent md:border-0 md:p-0 md:flex-row`}
          >
            <button
              onClick={() => scrollToSection('accueil')}
              className={`relative font-medium transition-colors duration-300 py-2 ${
                activeSection === 'accueil'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Accueil
              {activeSection === 'accueil' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
              )}
            </button>

            {renderDropdown('club', 'Le Club', clubItems, isClubActive)}
            {renderDropdown('pratiquer', 'Pratiquer', pratiquerItems, isPratiquerActive)}

            <Link
              to="/photos"
              onClick={closeMenus}
              className={`relative font-medium transition-colors duration-300 py-2 text-center md:text-left ${
                activeSection === 'photos'
                  ? 'text-yellow-600'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              Photos & Actualités
              {activeSection === 'photos' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-full" />
              )}
            </Link>

            <Link
              to="/inscription"
              onClick={closeMenus}
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
