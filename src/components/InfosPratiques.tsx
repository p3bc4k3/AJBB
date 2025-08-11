import React from 'react';
import { Euro, CreditCard, FileText, Users, Award, Clock, MapPin, Phone } from 'lucide-react';

const InfosPratiques = () => {
  const tarifs = [
    {
      category: "Baby (2020-2021)",
      price: "120€",
      description: "Cours d'éveil au judo pour les plus petits"
    },
    {
      category: "Pré-poussins à Benjamins (2014-2019)",
      price: "150€",
      description: "Formation complète aux techniques de judo"
    },
    {
      category: "Minimes + (2013 et avant)",
      price: "170€",
      description: "Perfectionnement et compétition"
    }
  ];

  const documents = [
    "Certificat médical de non contre-indication à la pratique du judo",
    "Fiche d'inscription complétée",
    "Photo d'identité récente",
    "Copie de l'assurance responsabilité civile",
    "Règlement de la cotisation annuelle"
  ];

  const equipements = [
    {
      item: "Judogi (kimono)",
      description: "Obligatoire - Disponible à l'achat au club",
      price: "À partir de 35€"
    },
    {
      item: "Ceinture",
      description: "Fournie selon le grade",
      price: "Inclus"
    },
    {
      item: "Zori (sandales)",
      description: "Recommandées pour l'hygiène",
      price: "15€"
    }
  ];

  return (
    <section id="infos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Infos pratiques</h2>
          <p className="text-lg text-gray-600">Tout ce qu'il faut savoir pour rejoindre l'AJBB</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Tarifs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Euro size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tarifs 2024-2025</h3>
            </div>

            <div className="space-y-4">
              {tarifs.map((tarif, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-600">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{tarif.category}</h4>
                    <span className="text-2xl font-bold text-yellow-600">{tarif.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{tarif.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard size={16} className="text-blue-600" />
                <h4 className="font-semibold text-blue-900">Modalités de paiement</h4>
              </div>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Paiement en 1, 2 ou 3 fois</li>
                <li>• Chèques, espèces ou virement</li>
                <li>• Chèques vacances acceptés</li>
                <li>• Réduction famille nombreuse : -10€ à partir du 2ème enfant</li>
              </ul>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Documents requis</h3>
            </div>

            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-green-600" />
                <h4 className="font-semibold text-green-900">Cours d'essai</h4>
              </div>
              <p className="text-sm text-green-800">
                Premier cours gratuit ! Venez découvrir notre ambiance et nos méthodes d'enseignement.
              </p>
            </div>
          </div>
        </div>

        {/* Équipements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Équipements</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {equipements.map((equip, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{equip.item}</h4>
                <p className="text-sm text-gray-600 mb-2">{equip.description}</p>
                <span className="text-yellow-600 font-bold">{equip.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
            <p className="text-sm text-yellow-800">
              <strong>💡 Conseil :</strong> Pour les débutants, nous recommandons d'attendre quelques cours 
              avant d'acheter l\'équipement pour s'assurer de la motivation de l\'enfant.
            </p>
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Horaires d'ouverture</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">Lundi</span>
                <span className="text-gray-600">18h00 - 20h30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">Mardi</span>
                <span className="text-gray-600">18h00 - 20h30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">Jeudi</span>
                <span className="text-gray-600">18h00 - 20h30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">Vendredi</span>
                <span className="text-gray-600">17h30 - 19h15</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Samedi</span>
                <span className="text-gray-600">09h00 - 12h15</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Contact rapide</h3>
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
        </div>

        {/* Note importante */}
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <MapPin size={20} />
            Inscription et renseignements
          </h4>
          <p className="text-blue-800 mb-4">
            Les inscriptions se font directement sur les lieux d'entraînement ou en nous contactant par téléphone. 
            N'hésitez pas à venir nous rencontrer lors des créneaux d'entraînement pour découvrir notre club !
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg">
              <h5 className="font-semibold text-blue-900">Villeneuve-lès-Béziers</h5>
              <p className="text-blue-700">Lundi, Mardi, Jeudi, Samedi</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <h5 className="font-semibold text-blue-900">Thézan-lès-Béziers</h5>
              <p className="text-blue-700">Lundi, Samedi</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <h5 className="font-semibold text-blue-900">Sauvian</h5>
              <p className="text-blue-700">Vendredi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfosPratiques;