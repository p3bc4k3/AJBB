import React, { useState } from 'react';
import { UserPlus, Phone, Mail, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childBirthDate: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    category: '',
    location: '',
    medicalCertificate: false,
    insurance: false,
    regulations: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi - remplacer par votre endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setFormData({
        childName: '',
        childBirthDate: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        category: '',
        location: '',
        medicalCertificate: false,
        insurance: false,
        regulations: false,
        message: ''
      });
    } catch (error) {
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return formData.childName && 
           formData.childBirthDate && 
           formData.parentName && 
           formData.email && 
           formData.phone && 
           formData.category && 
           formData.location &&
           formData.medicalCertificate &&
           formData.insurance &&
           formData.regulations;
  };

  if (submitted) {
    return (
      <section id="inscription" className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Inscription envoyée !</h2>
            <p className="text-lg text-gray-600 mb-8">
              Merci pour votre demande d'inscription. Nous vous contacterons dans les plus brefs délais 
              pour finaliser l'inscription et vous donner toutes les informations pratiques.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">Prochaines étapes :</h3>
              <ul className="text-blue-800 text-left space-y-2">
                <li>• Nous vous contacterons sous 48h</li>
                <li>• Préparation des documents requis</li>
                <li>• Premier cours d'essai gratuit</li>
                <li>• Finalisation de l'inscription</li>
              </ul>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300"
            >
              Nouvelle inscription
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscription" className="py-20">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Inscription</h2>
          <p className="text-lg text-gray-600">Rejoignez l'Alliance Judo Bassin Biterrois</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations de l'enfant */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <UserPlus size={24} className="text-yellow-600" />
                Informations de l'enfant
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childName" className="block font-semibold mb-2 text-gray-900">
                    Nom et prénom de l'enfant *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="childBirthDate" className="block font-semibold mb-2 text-gray-900">
                    Date de naissance *
                  </label>
                  <input
                    type="date"
                    id="childBirthDate"
                    name="childBirthDate"
                    value={formData.childBirthDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="category" className="block font-semibold mb-2 text-gray-900">
                    Catégorie d'âge *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Sélectionner une catégorie</option>
                    <option value="baby">Baby (2020-2021)</option>
                    <option value="pre-poussins">Pré-poussins (2018-2019)</option>
                    <option value="poussins1">Poussins 1 (2017)</option>
                    <option value="poussins2">Poussins 2 (2016)</option>
                    <option value="benjamins">Benjamins (2014-2015)</option>
                    <option value="minimes">Minimes + (2013 et avant)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block font-semibold mb-2 text-gray-900">
                    Lieu d'entraînement souhaité *
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Sélectionner un lieu</option>
                    <option value="villeneuve">Villeneuve-lès-Béziers</option>
                    <option value="thezan">Thézan-lès-Béziers</option>
                    <option value="sauvian">Sauvian</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Informations du parent */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Mail size={24} className="text-yellow-600" />
                Informations du responsable légal
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block font-semibold mb-2 text-gray-900">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2 text-gray-900">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="block font-semibold mb-2 text-gray-900">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="address" className="block font-semibold mb-2 text-gray-900">
                  Adresse complète
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Documents et confirmations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText size={24} className="text-yellow-600" />
                Documents et confirmations
              </h3>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                  <input
                    type="checkbox"
                    name="medicalCertificate"
                    checked={formData.medicalCertificate}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-yellow-600 border-2 border-gray-300 rounded focus:ring-yellow-600"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">Certificat médical *</span>
                    <p className="text-sm text-gray-600">
                      Je m'engage à fournir un certificat médical de non contre-indication à la pratique du judo
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                  <input
                    type="checkbox"
                    name="insurance"
                    checked={formData.insurance}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-yellow-600 border-2 border-gray-300 rounded focus:ring-yellow-600"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">Assurance responsabilité civile *</span>
                    <p className="text-sm text-gray-600">
                      Je confirme disposer d'une assurance responsabilité civile couvrant la pratique du judo
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                  <input
                    type="checkbox"
                    name="regulations"
                    checked={formData.regulations}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-yellow-600 border-2 border-gray-300 rounded focus:ring-yellow-600"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">Règlement intérieur *</span>
                    <p className="text-sm text-gray-600">
                      J'accepte le règlement intérieur du club et les conditions d'inscription
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-semibold mb-2 text-gray-900">
                Message ou questions particulières
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Informations complémentaires, questions, besoins spécifiques..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Validation */}
            {!isFormValid() && (
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center gap-2 text-orange-800">
                  <AlertCircle size={20} />
                  <span className="font-semibold">Formulaire incomplet</span>
                </div>
                <p className="text-sm text-orange-700 mt-1">
                  Veuillez remplir tous les champs obligatoires (*) et cocher toutes les confirmations requises.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !isFormValid()}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <UserPlus size={20} />
                  Envoyer la demande d'inscription
                </>
              )}
            </button>
          </form>

          {/* Informations complémentaires */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Phone size={20} />
              Besoin d'aide ?
            </h4>
            <p className="text-blue-800 mb-3">
              Pour toute question concernant l'inscription, n'hésitez pas à nous contacter :
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Jean (Président) :</strong> 06 45 88 01 84
              </div>
              <div>
                <strong>Lucie (Secrétaire) :</strong> 06 99 55 01 04
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inscription;