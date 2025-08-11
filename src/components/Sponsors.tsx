import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: 'Sponsor 1', logo: '/img/sponsor/sponsor1.png' },
    { name: 'Sponsor 2', logo: '/img/sponsor/sponsor2.png' },
    { name: 'Sponsor 3', logo: '/img/sponsor/sponsor3.png' },
    { name: 'Sponsor 4', logo: '/img/sponsor/sponsor4.png' },
    { name: 'Sponsor 5', logo: '/img/sponsor/sponsor5.png' },
    { name: 'Sponsor 6', logo: '/img/sponsor/sponsor6.png' },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4 text-gray-900">Nos partenaires</h2>
          <p className="text-lg text-gray-600">Ils nous soutiennent dans notre mission</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Fallback si l'image n'existe pas
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">${sponsor.name}</div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Vous souhaitez devenir partenaire ? 
            <a href="mailto:alliancejudobassinbiterrois@gmail.com" className="text-yellow-600 hover:text-black font-medium ml-1">
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;