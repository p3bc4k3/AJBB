import React from 'react';
import { Gift, FileText, Users, Download, ExternalLink } from 'lucide-react';

const Inscription = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <h1 className="text-4xl font-black mb-4 text-gray-900">Inscription</h1>
          <p className="text-lg text-gray-600">Rejoignez l'Alliance Judo Bassin Biterrois en quelques étapes simples</p>
        </div>

        {/* Registration Steps */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comment s'inscrire ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cours d'essai</h3>
                <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Gift className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-green-900">GRATUIT</span>
                  </div>
                  <p className="text-sm text-green-800 mb-3">
                    <strong>1 à 2 cours d'essai offerts</strong> pour découvrir notre club et nos méthodes d'enseignement.
                  </p>
                  <div className="space-y-2 text-xs text-green-700">
                    <p>✅ Aucun engagement</p>
                    <p>✅ Matériel prêté</p>
                    <p>✅ Encadrement professionnel</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800">
                    💡 <strong>Conseil :</strong> Venez avec une tenue de sport confortable
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Documents</h3>
                <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <FileText className="w-6 h-6 text-orange-600" />
                    <span className="font-bold text-orange-900">À FOURNIR</span>
                  </div>
                  <div className="space-y-3 text-sm text-orange-800">
                    <div className="p-2 bg-white rounded border">
                      <p className="font-semibold">📋 Formulaire d'inscription</p>
                      <p className="text-xs">à remplir ci-dessous</p>
                    </div>
                    <div className="p-2 bg-white rounded border">
                      <p className="font-semibold">🏥 Certificat médical ou attestation de santé</p>
                      <p className="text-xs">Certificat médical obligatoire pour la 1ere année</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <a
                          href="/pdf/certificat_medical_judo_vierge.pdf"
                          download="certificat_medical_judo_vierge.pdf"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors duration-200"
                        >
                          <Download className="w-3 h-3" />
                          Certificat médical vierge
                        </a>
                        <a
                          href="/pdf/Attestation_QS.pdf"
                          download="Attestation_QS.pdf"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors duration-200"
                        >
                          <Download className="w-3 h-3" />
                          Attestation QS
                        </a>
                        <a
                          href="https://forms.gle/CommXuNH1c7CRvg76"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700 transition-colors duration-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Déposer mon certificat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tarifs</h3>
                <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="font-bold text-blue-900">NOUS RENCONTRER</span>
                  </div>
                  <p className="text-sm text-blue-800 mb-3">
                    Pour connaître les <strong>tarifs selon l'âge</strong> et les <strong>modalités de paiement</strong>
                  </p>
                  <div className="space-y-2 text-xs text-blue-700">
                    <p>💬 Venez nous voir sur les dojos</p>
                    <p>📞 Contactez-nous par téléphone</p>
                    <p>💳 Paiement possible en plusieurs fois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Upload Banner */}
        <div className="mb-8 flex flex-col sm:flex-row items-center gap-4 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-xl">
          <div className="flex-1">
            <p className="font-bold text-orange-900">🏥 Dépôt du certificat médical</p>
            <p className="text-sm text-orange-700">Certificat déjà signé par votre médecin ? Déposez-le en ligne avant de remplir le formulaire.</p>
          </div>
          <a
            href="https://forms.gle/CommXuNH1c7CRvg76"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Déposer mon certificat
          </a>
        </div>

        {/* Google Form */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-yellow-600 text-white p-6">
              <div className="flex items-center gap-3">
                <ExternalLink className="w-6 h-6" />
                <div>
                  <h2 className="text-xl font-bold">Formulaire d'inscription</h2>
                  <p className="text-yellow-100 mt-1">Le formulaire d'inscription se trouve ci-dessous</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe3ejz0FISN1J5opwlvy9gJX8VSNuc-sAB6Vock195AmvTpQQ/viewform?embedded=true"
                width="100%"
                height="2791"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full rounded-lg"
                title="Formulaire d'inscription AJBB"
              >
                Chargement du formulaire...
              </iframe>
            </div>
          </div>
        </section>

        {/* Image Rights Authorization Reminder */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">📸</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Autorisation droit à l'image{' '}
                <span className="text-sm font-normal text-gray-500">(spécifique réseaux sociaux)</span>
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Dans le cadre de nos publications sur les réseaux sociaux, merci de compléter et de nous retourner l'autorisation droit à l'image.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1XU1zho_r0yfQkuUz74zt6IRtTpMQiec7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Télécharger l'autorisation (PDF)
              </a>
              <a
                href="https://forms.gle/K9BencjPaYP1KWf77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5" />
                Déposer le formulaire signé
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
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
    </div>
  );
};

export default Inscription;