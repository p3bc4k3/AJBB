import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface Session {
  day: string;
  time: string;
  location: string;
}

interface Category {
  category: string;
  year: string;
  sessions: Session[];
  color: string;
}

const Planning = () => {
  const trainingSchedule: Category[] = [
    {
      category: "Baby",
      year: "2020-2021",
      sessions: [
        { day: "Vendredi", time: "17h30-18h15", location: "Sauvian" },
        { day: "Samedi", time: "09h00-09h45", location: "Thézan" },
        { day: "Samedi", time: "10h30-11h15", location: "Villeneuve" }
      ],
      color: "#f59e0b"
    },
    {
      category: "Pré-poussins",
      year: "2018-2019",
      sessions: [
        { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
        { day: "Lundi", time: "18h00-19h00", location: "Villeneuve" },
        { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" },
        { day: "Samedi", time: "11h15-12h15", location: "Villeneuve" }
      ],
      color: "#10b981"
    },
    {
      category: "Poussins 1",
      year: "2017",
      sessions: [
        { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
        { day: "Lundi", time: "18h00-19h00", location: "Villeneuve" },
        { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" },
        { day: "Samedi", time: "11h15-12h15", location: "Villeneuve" }
      ],
      color: "#3b82f6"
    },
    {
      category: "Poussins 2",
      year: "2016",
      sessions: [
        { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
        { day: "Mardi", time: "18h00-19h00", location: "Villeneuve" },
        { day: "Jeudi", time: "18h00-19h00", location: "Villeneuve" },
        { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" }
      ],
      color: "#8b5cf6"
    },
    {
      category: "Benjamins",
      year: "2014-2015",
      sessions: [
        { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
        { day: "Mardi", time: "18h00-19h00", location: "Villeneuve" },
        { day: "Jeudi", time: "18h00-19h00", location: "Villeneuve" },
        { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" }
      ],
      color: "#f97316"
    },
    {
      category: "Minimes +",
      year: "2013 et avant",
      sessions: [
        { day: "Lundi", time: "19h30-20h30", location: "Thézan" },
        { day: "Mardi", time: "19h00-20h30", location: "Villeneuve" },
        { day: "Jeudi", time: "19h00-20h30", location: "Villeneuve" }
      ],
      color: "#dc2626"
    }
  ];

  return (
    <section id="planning" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Planning des entraînements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez tous nos cours organisés par catégorie d'âge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingSchedule.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: category.color }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4"
                style={{ backgroundColor: category.color }}
              >
                {category.category}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900">{category.category}</h3>
              <p className="text-gray-600 mb-6 text-sm">Année de naissance : {category.year}</p>
              
              <div className="space-y-3">
                {category.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 hover:bg-gray-100 transition-colors duration-200"
                    style={{ borderLeftColor: category.color }}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold mb-1" style={{ color: category.color }}>
                      <Clock size={14} />
                      {session.day}
                    </div>
                    <div className="font-medium text-gray-900 mb-1">{session.time}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <MapPin size={12} />
                      {session.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planning;