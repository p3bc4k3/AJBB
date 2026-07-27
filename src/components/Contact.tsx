import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Contact</h2>
          <p className="text-lg text-gray-600">Nous sommes là pour répondre à vos questions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Jean */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={24} className="text-white" />
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

          {/* Lucie */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={24} className="text-white" />
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

          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
            <p className="text-gray-600 mb-4 text-sm break-all">alliancejudobassinbiterrois@gmail.com</p>
            
            <button
              onClick={() => window.location.href = 'mailto:alliancejudobassinbiterrois@gmail.com?subject=Contact depuis le site AJBB&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir des informations sur le club de judo AJBB.%0D%0A%0D%0ACordialement'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={16} />
              Écrire un email
            </button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Venez nous rencontrer</h4>
              <p className="text-blue-800 text-sm">
                Le plus simple est de venir directement sur les lieux d'entraînement. 
                Nos enseignants seront ravis de vous accueillir et de répondre à toutes vos questions !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;