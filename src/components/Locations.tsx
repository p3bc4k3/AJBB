import React, { useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import Lightbox from './Lightbox';

// Délai (ms) avant agrandissement : survol prolongé à la souris ou appui
// long au doigt sur mobile.
const ZOOM_PRESS_DELAY = 4000;

interface LocationPhoto {
  src: string;
  alt: string;
}

interface LocationInfo {
  name: string;
  address: string;
  googleMapsUrl: string;
  photos?: LocationPhoto[];
}

const Locations = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const pressTimer = useRef<number | null>(null);

  const clearPress = () => {
    if (pressTimer.current !== null) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  const startPress = (photos: LocationPhoto[], index: number) => {
    clearPress();
    pressTimer.current = window.setTimeout(() => {
      setLightbox({ images: photos.map((photo) => photo.src), index });
    }, ZOOM_PRESS_DELAY);
  };

  const locations: LocationInfo[] = [
    {
      name: "Villeneuve-lès-Béziers",
      address: "Chem. Saint-Michel\n34420 Villeneuve-lès-Béziers",
      googleMapsUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8"
    },
    {
      name: "Thézan-lès-Béziers",
      address: "Rue Antoine de Saint-Exupéry\n34490 Thézan-lès-Béziers",
      googleMapsUrl: "https://maps.app.goo.gl/43a6zSveVgwm777i9",
      photos: [
        {
          src: "/img/locations/thezan-les-beziers/dojo-thezan-les-beziers-exterieur.webp",
          alt: "Extérieur du dojo de judo de l'AJBB à Thézan-lès-Béziers"
        },
        {
          src: "/img/locations/thezan-les-beziers/dojo-thezan-les-beziers-tatami.webp",
          alt: "Tatami du dojo de judo de l'AJBB à Thézan-lès-Béziers"
        },
        {
          src: "/img/locations/thezan-les-beziers/dojo-thezan-les-beziers-entree.webp",
          alt: "Accueil et entrée du dojo de judo de l'AJBB à Thézan-lès-Béziers"
        }
      ]
    },
    {
      name: "Sauvian",
      address: "26 Rue des Tulipes\n34410 Sauvian",
      googleMapsUrl: "https://maps.app.goo.gl/3cPcEGXFb8XW63sVA"
    }
  ];

  return (
    <>
    <section id="lieux" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Nos lieux d'entraînement</h2>
          <p className="text-lg text-gray-600">Trois dojos pour vous accueillir</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{location.name}</h3>

              {location.photos && (
                <div className="grid grid-cols-3 gap-1.5 mb-6">
                  {location.photos.map((photo, photoIndex) => (
                    <img
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full aspect-square object-cover rounded-lg cursor-zoom-in select-none"
                      onMouseEnter={() => startPress(location.photos!, photoIndex)}
                      onMouseLeave={clearPress}
                      onTouchStart={() => startPress(location.photos!, photoIndex)}
                      onTouchEnd={clearPress}
                      onTouchCancel={clearPress}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  ))}
                </div>
              )}

              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {location.address}
              </p>
              
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
              >
                <Navigation size={16} />
                S'y rendre
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {lightbox && (
      <Lightbox
        images={lightbox.images}
        currentIndex={lightbox.index}
        onClose={() => setLightbox(null)}
        onNavigate={(navIndex) => setLightbox({ ...lightbox, index: navIndex })}
      />
    )}
    </>
  );
};

export default Locations;