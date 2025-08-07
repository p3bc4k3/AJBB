import React, { useState } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Utilisation de Formspree pour l'envoi d'emails gratuit
      const response = await fetch('https://formspree.io/f/xdkogkvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Nouveau message de ${formData.name} - AJBB`
        }),
      });

      if (response.ok) {
        alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par téléphone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Nous contacter</h2>
          <p className="text-lg text-gray-600">Rejoignez-nous pour découvrir le judo</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Téléphone</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Jean : 06 45 88 01 84</span>
                  <a
                    href="tel:0645880184"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-black transition-all duration-300"
                  >
                    <Phone size={14} />
                    J'appelle
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lucie : 06 99 55 01 04</span>
                  <a
                    href="tel:0699550104"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-black transition-all duration-300"
                  >
                    <Phone size={14} />
                    J'appelle
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">alliancejudobassinbiterrois@gmail.com</span>
                <a
                  href="mailto:alliancejudobassinbiterrois@gmail.com"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-black transition-all duration-300"
                >
                  <Mail size={14} />
                  J'envoie un mail
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2 text-gray-900">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2 text-gray-900">
                  Email
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

              <div>
                <label htmlFor="phone" className="block font-semibold mb-2 text-gray-900">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="category" className="block font-semibold mb-2 text-gray-900">
                  Catégorie d'âge
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
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
                <label htmlFor="message" className="block font-semibold mb-2 text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none transition-colors duration-200 resize-vertical"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;