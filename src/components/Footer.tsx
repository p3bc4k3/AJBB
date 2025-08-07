import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
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
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-5">
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

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'planning', label: 'Planning' },
                { id: 'calendrier', label: 'Calendrier' },
                { id: 'lieux', label: 'Nos lieux' },
                { id: 'contact', label: 'Contact' }
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
            </ul>
          </div>

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
    </footer>
  );
};

export default Footer;