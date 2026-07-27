import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Newspaper } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoGallery from '../components/PhotoGallery';
import Videos from '../components/Videos';
import CtaBanner from '../components/CtaBanner';
import { loadAlbums, Album } from '../utils/albums';

const Photos = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'photos' | 'actualites'>('photos');

  useEffect(() => {
    try {
      const loadedAlbums = loadAlbums();
      setAlbums(loadedAlbums);
    } catch (error) {
      console.error('Erreur lors du chargement des albums:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (selectedAlbum) {
    return (
      <div className="min-h-screen bg-gray-50/70">
        <Header />
        <main className="max-w-6xl mx-auto px-5 py-12 pt-32">
          <PhotoGallery album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/70">
      <Header />
      <main className="max-w-6xl mx-auto px-5 py-12 pt-32">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-10 h-10 text-yellow-600" />
            <h1 className="text-4xl font-black text-gray-900">Photos & Actualités</h1>
          </div>
          <p className="text-lg text-gray-600">
            Revivez les meilleurs moments du club en images
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('photos')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'photos'
                ? 'bg-yellow-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ImageIcon size={18} />
            Photos
          </button>
          <button
            onClick={() => setActiveTab('actualites')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'actualites'
                ? 'bg-yellow-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Newspaper size={18} />
            Actualités
          </button>
        </div>

        {activeTab === 'actualites' ? (
          <>
            <Videos />
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <Newspaper size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Suivez-nous</h4>
                  <p className="text-blue-800 text-sm">
                    Retrouvez toute notre actualité sur{' '}
                    <a
                      href="https://www.facebook.com/groups/226073905995315"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold"
                    >
                      Facebook
                    </a>
                    , TikTok{' '}
                    <a
                      href="https://www.tiktok.com/@ajbb707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold"
                    >
                      @ajbb707
                    </a>{' '}
                    et Instagram{' '}
                    <a
                      href="https://www.instagram.com/alliance_judo_bassin_biterrois/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold"
                    >
                      @alliance_judo_bassin_biterrois
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
            <p className="mt-4 text-gray-600">Chargement des albums...</p>
          </div>
        ) : albums.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun album disponible</h3>
            <p className="text-gray-600">
              Les photos seront bientôt disponibles. Revenez plus tard pour découvrir nos albums.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div
                key={album.id}
                onClick={() => setSelectedAlbum(album)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={album.coverPhoto}
                    alt={album.displayName}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ImageIcon size={16} />
                      <span>{album.photos.length} photo{album.photos.length > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                    {album.displayName}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ImageIcon size={16} />
                    <span>{album.photos.length} photo{album.photos.length > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
            <div className="flex items-start gap-3">
              <Camera size={20} className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">À propos des photos</h4>
                <p className="text-blue-800 text-sm">
                  Retrouvez ici les photos des événements marquants du club : remises de grade,
                  stages, compétitions et moments conviviaux. Les albums sont régulièrement mis à jour.
                </p>
              </div>
            </div>
          </div>
        )}

        <CtaBanner
          title="Envie de vivre ces moments avec nous ?"
          description="Rejoignez l'AJBB et participez aux prochains entraînements, stages et événements du club."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Photos;
