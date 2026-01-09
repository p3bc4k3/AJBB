import React, { useState } from 'react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Album } from '../utils/albums';
import Lightbox from './Lightbox';

interface PhotoGalleryProps {
  album: Album;
  onBack: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ album, onBack }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="bg-yellow-600 text-white p-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={20} />
            Retour aux albums
          </button>
          <div className="flex items-center gap-3">
            <ImageIcon className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">{album.displayName}</h2>
              <p className="text-yellow-100 mt-1">
                {album.photos.length} photo{album.photos.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {album.photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-100"
              >
                <img
                  src={photo.src}
                  alt={photo.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={album.photos.map(p => p.src)}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </>
  );
};

export default PhotoGallery;
