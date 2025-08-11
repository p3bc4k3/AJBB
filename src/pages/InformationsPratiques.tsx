import React from 'react';
import { Users, Shirt, Clock, Phone, Mail, Lightbulb } from 'lucide-react';

const InformationsPratiques = () => {
  const sponsors = [
    { name: 'Partenaire 1', logo: '/img/sponsor/sponsor1.png' },
    { name: 'Partenaire 2', logo: '/img/sponsor/sponsor2.png' },
    { name: 'Partenaire 3', logo: '/img/sponsor/sponsor3.png' },
    { name: 'Partenaire 4', logo: '/img/sponsor/sponsor4.png' },
    { name: 'Partenaire 5', logo: '/img/sponsor/sponsor5.png' },
    { name: 'Partenaire 6', logo: '/img/sponsor/sponsor6.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/img/Logo.png" alt="AJBB Logo" className="w-8 h-8 object-contain" />
              <span className="text-yellow-600 font-bold text-xl">AJBB</span>
            </div>
            <a href="/" className="text-gray-600 hover:text-yellow-600 transition-colors duration-200">
              ← Retour au site
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-5 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-4 text-gray-900">Informations pratiques</h1>
          <p className="text-lg text-gray-600">Tout ce qu'il faut savoir pour pratiquer le judo à l'AJBB</p>
        </div>

        {/* Age Categories Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Catégories d'âge</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Baby */}
              <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👶</span>
                  <h3 className="text-xl font-bold text-orange-900">Baby</h3>
                </div>
                <p className="text-orange-800 font-semibold mb-2">Nés en 2020-2021</p>
                <p className="text-sm text-orange-700">Éveil corporel et motricité</p>
                <div className="mt-4 text-sm text-orange-600">
                  <p><strong>Durée :</strong> 45 minutes</p>
                  <p><strong>Objectif :</strong> Développement psychomoteur</p>
                </div>
              </div>

              {/* Pré-poussins */}
              <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🧒</span>
                  <h3 className="text-xl font-bold text-green-900">Pré-poussins</h3>
                </div>
                <p className="text-green-800 font-semibold mb-2">Nés en 2018-2019</p>
                <p className="text-sm text-green-700">Apprentissage des bases du judo</p>
                <div className="mt-4 text-sm text-green-600">
                  <p><strong>Durée :</strong> 1 heure</p>
                </div>
              </div>

              {/* Poussins 1 & 2 */}
              <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👦</span>
                  <h3 className="text-xl font-bold text-blue-900">Poussins</h3>
                </div>
                <div className="space-y-2 mb-2">
                  <p className="text-blue-800 font-semibold">Poussins 1 : Nés en 2017</p>
                  <p className="text-blue-800 font-semibold">Poussins 2 : Nés en 2016</p>
                </div>
                <p className="text-sm text-blue-700">Technique, confiance et perfectionnement</p>
                <div className="mt-4 text-sm text-blue-600">
                  <p><strong>Durée :</strong> 1 heure</p>
                </div>
              </div>

              {/* Benjamins */}
              <div className="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🥋</span>
                  <h3 className="text-xl font-bold text-yellow-900">Benjamins</h3>
                </div>
                <p className="text-yellow-800 font-semibold mb-2">Nés en 2014-2015</p>
                <p className="text-sm text-yellow-700">Techniques et compétitions officielles pour les volontaires</p>
                <div className="mt-4 text-sm text-yellow-600">
                  <p><strong>Durée :</strong> 1 heure</p>
                </div>
              </div>

              {/* Minimes+ */}
              <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500 md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-bold text-red-900">Minimes, Cadets, Juniors, Séniors et Vétérans</h3>
                </div>
                <p className="text-red-800 font-semibold mb-2">Nés en 2013 et avant</p>
                <p className="text-sm text-red-700">Technique, loisirs mais aussi préparation aux compétitions</p>
                <div className="mt-4 text-sm text-red-600">
                  <p><strong>Durée :</strong> 1h30</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Shirt className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Équipements nécessaires</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Judogi */}
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥋</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Judogi (Kimono)</h3>
                <p className="text-sm text-gray-600 mb-3">Tenue officielle obligatoire</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Couleur :</strong> Blanc uniquement</p>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">💡 Disponible avec nos partenaires</p>
                </div>
              </div>

              {/* Ceinture */}
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎗️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ceinture</h3>
                <p className="text-sm text-gray-600 mb-3">Ceinture blanche pour l'entraînement</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Entraînement :</strong> Ceinture blanche obligatoire</p>
                  <p><strong>Manifestations :</strong> Ceinture de grade</p>
                </div>
              </div>

              {/* Zori */}
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🩴</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Zori (Sandales)</h3>
                <p className="text-sm text-gray-600 mb-3">Obligatoires pour l'hygiène</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Usage :</strong> Hors tatami uniquement</p>
                  <p><strong>Hygiène :</strong> Obligatoires</p>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-xs text-orange-800">✅ Obligatoires</p>
                </div>
              </div>

              {/* Bouteille d'eau */}
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bouteille d'eau</h3>
                <p className="text-sm text-gray-600 mb-3">Indispensable pour l'hydratation</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Usage :</strong> À chaque entraînement</p>
                  <p><strong>Conseil :</strong> Marquée au nom de l'enfant</p>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">💡 Obligatoire</p>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-600">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Conseils pour débuter
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-800">
                <div>
                  <p className="mb-2"><strong>Pour les débutants :</strong></p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Commencer avec un survêtement pour les premiers cours</li>
                    <li>Attendre la fin des séances d'essais avant d'acheter le kimono</li>
                    <li>Vérifier la motivation avant l'investissement</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2"><strong>Entretien du matériel :</strong></p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Laver le judogi à 30° maximum après chaque utilisation</li>
                    <li>Séchage à l'air libre (éviter le sèche-linge)</li>
                    <li>Ranger proprement dans un sac de sport</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Horaires des dojos</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Villeneuve-lès-Béziers</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Lundi : 18h00 - 20h30</p>
                    <p>Mardi : 18h00 - 20h30</p>
                    <p>Jeudi : 18h00 - 20h30</p>
                    <p>Samedi : 10h30 - 12h15</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Thézan-lès-Béziers</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Lundi : 18h30 - 20h30</p>
                    <p>Samedi : 09h00 - 09h45</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Sauvian</h4>
                  <div className="text-sm text-gray-600">
                    <p>Vendredi : 17h30 - 19h15</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nous contacter</h3>
              </div>

              <div className="space-y-4">
                {/* Jean */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Jean</h4>
                      <p className="text-gray-600">Enseignant</p>
                    </div>
                    <a
                      href="tel:0645880184"
                      className="px-3 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors duration-200"
                    >
                      06 45 88 01 84
                    </a>
                  </div>
                </div>

                {/* Lucie */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lucie</h4>
                      <p className="text-gray-600">Enseignante</p>
                    </div>
                    <a
                      href="tel:0699550104"
                      className="px-3 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors duration-200"
                    >
                      06 99 55 01 04
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-sm break-all">alliancejudobassinbiterrois@gmail.com</p>
                    <button
                      onClick={() => window.location.href = 'mailto:alliancejudobassinbiterrois@gmail.com?subject=Contact depuis le site AJBB - Informations pratiques&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir des informations pratiques sur le club de judo AJBB.%0D%0A%0D%0ACordialement'}
                      className="px-3 py-1 bg-yellow-600 text-white text-xs rounded hover:bg-black transition-colors duration-200"
                    >
                      Écrire
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800">
                  <strong>📍 Rendez-vous :</strong> Venez nous rencontrer directement sur les lieux d'entraînement 
                  pour découvrir notre club et poser vos questions !
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 text-gray-900">Nos partenaires</h2>
            <p className="text-lg text-gray-600">Ils nous soutiennent dans notre mission</p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-2 text-yellow-600 font-bold text-xl mb-4">
            <img src="/img/Logo.png" alt="AJBB Logo" className="w-8 h-8 object-contain" />
            <span>AJBB</span>
          </div>
          <div className="mb-4">
            <a href="/#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2025 Alliance Judo Bassin Biterrois. Tous droits réservés.
          </p>
        </div>
      </footer>

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
    </div>
  );
};

export default InformationsPratiques;