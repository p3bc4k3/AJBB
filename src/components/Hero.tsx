import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
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
    <section id="accueil" className="mt-20 min-h-screen flex items-center py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                <img src="/img/Logo.png" alt="AJBB" className="w-4 h-4 object-contain" />
                <span>Club de Judo</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <span>👶</span>
                <span>De 3 à 99 ans</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                <span>🎯</span>
                <span>Loisirs</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                <span>🏆</span>
                <span>Compétitions</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <span>📍</span>
                <span>Bassin Biterrois</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                <span>👨‍🏫</span>
                <span>Profs diplômés</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                <span>👨‍👩‍👧‍👦</span>
                <span>Esprit familial</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                <span>🥋</span>
                <span>Tous niveaux</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
              Alliance Judo<br />
              <span className="text-yellow-600">Bassin Biterrois</span>
            </h1>
            
            <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4">
              <p>Rejoignez l'Alliance Judo Bassin Biterrois !</p>
              <p>Plongez dans l'univers du judo, un art martial alliant respect, discipline et dépassement de soi, dans une ambiance à la fois familiale et dynamique.</p>
              
              <div className="space-y-2">
                <p>🏅 Cours accessibles dès 3 ans jusqu'à l'âge adulte</p>
                <p>👨‍👩‍👧‍👦 Pour tous les niveaux : débutants, loisirs ou compétiteurs</p>
                <p>🥋 Encadrement de qualité par des enseignants diplômés et passionnés</p>
                <p>🤝 Valeurs fortes : entraide, respect, progression et inclusion</p>
              </div>
              
              <p>Que vous cherchiez une activité physique, un cadre éducatif ou un défi personnel, l'AJBB vous accompagne sur le tatami avec bienveillance et professionnalisme.</p>
              <p>📍 Présent à Villeneuve-lès-Béziers, Sauvian et Thézan-lès-Béziers</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('planning')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} />
                Voir le planning
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-600 font-semibold rounded-xl border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone size={20} />
                Nous contacter
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/img/judo.jpg"
              alt="Pratique du judo - AJBB"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;