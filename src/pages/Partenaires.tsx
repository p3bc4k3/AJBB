import React from 'react';
import { Handshake, ExternalLink, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sponsors } from '../data/sponsors';

const Partenaires = () => {
  return (
    <div className="min-h-screen bg-gray-50/85">
      <Header />

      <main className="max-w-6xl mx-auto px-5 py-12 pt-32">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-10 h-10 text-yellow-600" />
            <h1 className="text-4xl font-black text-gray-900">Nos partenaires</h1>
          </div>
          <p className="text-lg text-gray-600">Ils soutiennent l'Alliance Judo Bassin Biterrois</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="w-full sm:w-72 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-full h-24 flex items-center justify-center mb-6">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{sponsor.name}</h3>
              {sponsor.description && (
                <p className="text-sm text-gray-600 mb-4">{sponsor.description}</p>
              )}
              {sponsor.url && (
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-auto px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ExternalLink size={16} />
                  Voir la page
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="p-8 bg-yellow-50 rounded-2xl border-l-4 border-yellow-600 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Vous souhaitez devenir partenaire ?</h2>
          <p className="text-gray-600 mb-6">
            Soutenez le club et gagnez en visibilité auprès de nos adhérents et de leurs familles.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "mailto:alliancejudobassinbiterrois@gmail.com?subject=Demande de partenariat AJBB&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir des informations sur les possibilit%C3%A9s de partenariat avec l'Alliance Judo Bassin Biterrois.%0D%0A%0D%0ACordialement")
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Nous contacter
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partenaires;
