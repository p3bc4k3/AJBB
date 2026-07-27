import React from 'react';
import { Heart, ShieldCheck, Users, TrendingUp, Sparkles, Target, GraduationCap, Calendar, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const values = [
  {
    icon: Heart,
    title: 'Respect',
    description: "Du partenaire, de l'enseignant et des règles du judo, dès le plus jeune âge.",
  },
  {
    icon: ShieldCheck,
    title: 'Discipline',
    description: "Une pratique cadrée qui aide chacun à progresser à son rythme, en confiance.",
  },
  {
    icon: Users,
    title: 'Entraide',
    description: "Un esprit familial où débutants et confirmés s'entraînent et progressent ensemble.",
  },
  {
    icon: TrendingUp,
    title: 'Progression',
    description: "Un enseignement adapté à chaque catégorie d'âge, du loisir à la compétition.",
  },
  {
    icon: Sparkles,
    title: 'Inclusion',
    description: 'Un club ouvert à tous, quels que soient le niveau, l\'âge ou les objectifs de chacun.',
  },
];

const objectifs = [
  {
    title: 'Baby judo (dès 3 ans)',
    description: "Développer l'éveil corporel et la motricité par le jeu et la découverte du tatami.",
  },
  {
    title: 'Enfants',
    description: "Apprendre les techniques du judo tout en construisant la confiance en soi et l'esprit sportif.",
  },
  {
    title: 'Ados & Adultes',
    description: "Se perfectionner techniquement, pratiquer en loisir ou se préparer aux compétitions pour les volontaires.",
  },
];

const LeClub = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-5 py-12 pt-32">
        {/* Titre */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4 text-gray-900">Le Club</h1>
          <p className="text-lg text-gray-600">Notre histoire, nos valeurs et nos objectifs</p>
        </div>

        {/* Qui sommes-nous */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
            <p className="text-gray-900 font-semibold mb-4">
              Bienvenue à l'Alliance Judo Bassin Biterrois
            </p>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Notre club propose une pratique du judo ouverte à tous, que vous cherchiez à pratiquer
                en loisir ou à vous investir dans la compétition. Chacun trouve sa place, à son rythme
                et selon ses envies.
              </p>
              <p>
                Nous accueillons les enfants dès l'âge de 4 ans, et même dès 3 ans selon leurs
                habiletés motrices, pour une première découverte en douceur du tatami.
              </p>
              <p>
                Au-delà du sport, c'est avant tout un club à l'esprit familial, où la convivialité et
                l'entraide font partie des valeurs que l'on transmet à chaque judoka.
              </p>
              <p>
                Le club cultive aussi une réelle dynamique de mobilité : chaque saison, nos judokas
                participent à plusieurs déplacements — au moins quatre à cinq — pour des stages et
                entraînements dans d'autres clubs, l'occasion de progresser, de rencontrer d'autres
                pratiquants et de vivre le judo autrement.
              </p>
              <p>
                Tout au long de l'année, des animations et activités viennent rythmer la vie du club :
                le Noël des petits, la crêpe party, et bien d'autres moments à partager ensemble.
              </p>
              <p>
                Rejoignez-nous et venez découvrir le judo, sur les trois sites de l'Alliance Judo
                Bassin Biterrois : Sauvian, Villeneuve-lès-Béziers et Thézan-lès-Béziers !
              </p>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Nos valeurs</h2>
            <p className="text-gray-600">Les fondamentaux du judo que nous transmettons sur le tatami</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nos objectifs */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Nos objectifs</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {objectifs.map(({ title, description }) => (
                <div key={title} className="p-6 bg-gray-50 rounded-xl border-l-4 border-yellow-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Notre équipe</h2>
            <p className="text-gray-600">Un encadrement de qualité par des enseignants diplômés et passionnés</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Jean</h3>
              <p className="text-gray-600 mb-4">Enseignant</p>
              <a
                href="tel:0645880184"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone size={16} />
                06 45 88 01 84
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Lucie</h3>
              <p className="text-gray-600 mb-4">Enseignante</p>
              <a
                href="tel:0699550104"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone size={16} />
                06 99 55 01 04
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-yellow-50 rounded-2xl p-10 border-l-4 border-yellow-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Envie de nous rejoindre ?</h2>
            <p className="text-gray-600 mb-6">Venez découvrir le judo à l'AJBB, quel que soit votre âge ou votre niveau.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/planning"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} />
                Voir le planning
              </a>
              <a
                href="/inscription"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-600 font-semibold rounded-xl border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone size={20} />
                S'inscrire
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeClub;
