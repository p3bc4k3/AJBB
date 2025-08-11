import React from 'react';
import { ExternalLink, Phone, Mail } from 'lucide-react';

const Inscription = () => {
  return (
    <section id="inscription" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Inscription</h2>
          <p className="text-lg text-gray-600">Rejoignez l'Alliance Judo Bassin Biterrois</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire Google */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-yellow-600 text-white p-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <ExternalLink size={24} />
                  Formulaire d'inscription
                </h3>
                <p className="text-yellow-100 mt-2">
                  Remplissez le formulaire ci-dessous pour inscrire votre enfant
                </p>
              </div>
              
              <div className="p-2">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfIQn1ekKqykoY0OJdVMF2XBmDnMinGi_SNDwplyneKZScYEA/viewform?embedded=true" 
                  width="100%" 
                  height="2369" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  className="w-full rounded-lg"
                >
                  Chargement…
                </iframe>
              </div>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-8">
            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Besoin d'aide ?</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Jean (Président)</h4>
                  <p className="text-gray-600">06 45 88 01 84</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Lucie (Secrétaire)</h4>
                  <p className="text-gray-600">06 99 55 01 04</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600 text-sm break-all">alliancejudobassinbiterrois@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Catégories d'âge */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Catégories d'âge</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900">Baby</h4>
                  <p className="text-sm text-orange-700">Nés en 2020-2021</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900">Pré-poussins</h4>
                  <p className="text-sm text-green-700">Nés en 2018-2019</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900">Poussins 1</h4>
                  <p className="text-sm text-blue-700">Nés en 2017</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-900">Poussins 2</h4>
                  <p className="text-sm text-purple-700">Nés en 2016</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-900">Benjamins</h4>
                  <p className="text-sm text-yellow-700">Nés en 2014-2015</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900">Minimes +</h4>
                  <p className="text-sm text-red-700">Nés en 2013 et avant</p>
                </div>
              </div>
            </div>

            {/* Cours d'essai */}
            <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-3">🥋 Cours d'essai gratuit</h4>
              <p className="text-green-800 text-sm">
                Votre enfant peut essayer gratuitement avant de s'inscrire ! 
                Contactez-nous pour organiser une séance découverte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inscription;