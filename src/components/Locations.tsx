import React from 'react';
import { MapPin } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: "Villeneuve-lès-Béziers",
      address: "Chem. Saint-Michel\n34420 Villeneuve-lès-Béziers"
    },
    {
      name: "Thézan-lès-Béziers",
      address: "Rue Antoine De Saint Exupéry\n34490 Thézan-lès-Béziers"
    },
    {
      name: "Sauvian",
      address: "26 Rue des Tulipes\n34410 Sauvian"
    }
  ];

  return (
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
              
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {location.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;