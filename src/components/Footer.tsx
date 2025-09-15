import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isInfosPage = location.pathname === '/informations-pratiques';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Si on n'est pas sur la page d'accueil, rediriger vers l'accueil avec l'ancre
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
  };

  const sponsors = [
    { name: 'Partenaire 1', logo: '/img/sponsor/sponsor1.png' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Sponsors - identique à la page d'accueil */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-white">Nos partenaires</h3>
            <p className="text-gray-400">Ils nous soutiennent dans notre mission</p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* Première série de logos */}
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[150px] h-20 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-gray-400 text-sm">${sponsor.name}</div>`;
                      }
                    }}
                  />
                </div>
              ))}
              {/* Duplication pour effet continu */}
              {sponsors.map((sponsor, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center justify-center min-w-[150px] h-20 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-gray-400 text-sm">${sponsor.name}</div>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Vous souhaitez devenir partenaire ? 
              <button
                onClick={() => window.location.href = 'mailto:alliancejudobassinbiterrois@gmail.com?subject=Demande de partenariat AJBB&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir des informations sur les possibilités de partenariat avec l\'Alliance Judo Bassin Biterrois.%0D%0A%0D%0ACordialement'}
                className="text-yellow-600 hover:text-yellow-400 font-medium ml-1 underline cursor-pointer transition-colors duration-200"
              >
                Contactez-nous
              </button>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-yellow-600 font-bold text-xl mb-4">
              <img 
                src="/img/Logo.png" 
                alt="AJBB Logo" 
                className="w-8 h-8 object-contain"
              />
              <span>AJBB</span>
            </div>
            <p className="text-gray-400">Club affilié à la Fédération Française de Judo</p>
          </div>

          {/* Navigation - Affichée sur toutes les pages sauf inscription */}
          {!location.pathname.includes('/inscription') && !isInfosPage && (
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'lieux', label: 'Nos lieux' },
                { id: 'contact', label: 'Contact' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/planning"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Planning
                </a>
              </li>
              <li>
                <a
                  href="/calendrier"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Calendrier
                </a>
              </li>
              <li>
                <a
                  href="/informations-pratiques"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Infos pratiques
                </a>
              </li>
              <li>
                <a
                  href="/inscription"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Inscription
                </a>
              </li>
            </ul>
          </div>
          )}

          {/* Navigation spéciale pour la page Infos pratiques */}
          {isInfosPage && (
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/#lieux"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Nos lieux
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/planning"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Planning
                </a>
              </li>
              <li>
                <a
                  href="/calendrier"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Calendrier
                </a>
              </li>
              <li>
                <span className="text-yellow-600 font-medium">
                  Infos pratiques
                </span>
              </li>
              <li>
                <a
                  href="/inscription"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Inscription
                </a>
              </li>
            </ul>
          </div>
          )}
          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/groups/226073905995315"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/alliance_judo_bassin_biterrois/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Alliance Judo Bassin Biterrois. Tous droits réservés.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default Footer;