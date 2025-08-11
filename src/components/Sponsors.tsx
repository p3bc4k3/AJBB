import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: 'Partenaire 1', logo: '/img/sponsor/sponsor1.png' },
    { name: 'Partenaire 2', logo: '/img/sponsor/sponsor2.png' },
    { name: 'Partenaire 3', logo: '/img/sponsor/sponsor3.png' },
    { name: 'Partenaire 4', logo: '/img/sponsor/sponsor4.png' },
    { name: 'Partenaire 5', logo: '/img/sponsor/sponsor5.png' },
    { name: 'Partenaire 6', logo: '/img/sponsor/sponsor6.png' },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4 text-gray-900">Nos partenaires</h2>
          <p className="text-lg text-gray-600">Ils nous soutiennent dans notre mission</p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {/* Première série de logos */}
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
                      parent.innerHTML = `<div class="text-gray-500 text-sm">${sponsor.name}</div>`;
                    }
                  }}
                />
              </div>
            ))}
            {/* Duplication pour effet continu */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center min-w-[150px] h-20 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
                      parent.innerHTML = `<div class="text-gray-500 text-sm">${sponsor.name}</div>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Vous souhaitez devenir partenaire ? 
            <button
              onClick={() => window.location.href = 'mailto:alliancejudobassinbiterrois@gmail.com?subject=Demande de partenariat AJBB&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir des informations sur les possibilités de partenariat avec l\'Alliance Judo Bassin Biterrois.%0D%0A%0D%0ACordialement'}
              className="text-yellow-600 hover:text-black font-medium ml-1 underline cursor-pointer"
            >
              Contactez-nous
            </button>
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
    </section>
  );
};

export default Sponsors;