import React from 'react';
import { Calendar, Phone } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  description?: string;
}

const CtaBanner = ({
  title = 'Envie de nous rejoindre ?',
  description = "Venez découvrir le judo à l'AJBB, quel que soit votre âge ou votre niveau.",
}: CtaBannerProps) => (
  <div className="mt-12 bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-600 text-center">
    <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="/inscription"
        className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
      >
        <Calendar size={20} />
        S'inscrire
      </a>
      <a
        href="tel:0645880184"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-600 font-semibold rounded-xl border-2 border-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
      >
        <Phone size={20} />
        Nous contacter
      </a>
    </div>
  </div>
);

export default CtaBanner;
