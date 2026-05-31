import React, { useState } from 'react';
import { MapPin, Clock, Filter } from 'lucide-react';

interface Session {
  day: string;
  time: string;
  location: string;
}

interface Category {
  category: string;
  year: string;
  birthYearMin: number;
  birthYearMax: number;
  sessions: Session[];
  color: string;
}

const Planning = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'category' | 'day' | 'location'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedBirthYear, setSelectedBirthYear] = useState<string>('all');

  const trainingSchedule: Category[] = [
    {
      category: "Baby",
      year: "2021-2022 (2023 sur essai)",
      birthYearMin: 2021,
      birthYearMax: 2023,
      sessions: [
        { day: "Vendredi", time: "17h45-18h15", location: "Sauvian" },
        { day: "Samedi", time: "09h00-09h45", location: "Thézan-lès-Béziers" },
        { day: "Samedi", time: "10h30-11h15", location: "Villeneuve-lès-Béziers" }
      ],
      color: "#f59e0b"
    },
    {
      category: "Enfants",
      year: "2015 à 2020",
      birthYearMin: 2015,
      birthYearMax: 2020,
      sessions: [
        { day: "Lundi", time: "17h30-18h30", location: "Thézan-lès-Béziers" },
        { day: "Mardi", time: "18h00-19h00", location: "Villeneuve-lès-Béziers" },
        { day: "Jeudi", time: "18h00-19h00", location: "Villeneuve-lès-Béziers" },
        { day: "Vendredi", time: "18h30-19h30", location: "Sauvian" },
        { day: "Samedi", time: "11h15-12h15", location: "Villeneuve-lès-Béziers" }
      ],
      color: "#10b981"
    },
    {
      category: "Ados & Adultes",
      year: "2014 et avant",
      birthYearMin: 1990,
      birthYearMax: 2014,
      sessions: [
        { day: "Mardi", time: "19h00-20h30", location: "Villeneuve-lès-Béziers" },
        { day: "Jeudi", time: "19h00-20h30", location: "Villeneuve-lès-Béziers" }
      ],
      color: "#dc2626"
    }
  ];

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const locations = ['Villeneuve-lès-Béziers', 'Thézan-lès-Béziers', 'Sauvian'];

  // Années explicites 2015→2023 (Baby + Enfants), puis une entrée groupée pour Ados & Adultes
  const explicitYears = Array.from(
    { length: trainingSchedule[0].birthYearMax - trainingSchedule[1].birthYearMin + 1 },
    (_, i) => trainingSchedule[0].birthYearMax - i
  );

  const categoryMatchesBirthYear = (category: Category) => {
    if (selectedBirthYear === 'all') return true;
    if (selectedBirthYear === 'lte-2014') return category.category === 'Ados & Adultes';
    const y = parseInt(selectedBirthYear);
    return y >= category.birthYearMin && y <= category.birthYearMax;
  };

  const getFilteredData = () => {
    return trainingSchedule.map(category => ({
      ...category,
      sessions: category.sessions.filter(session => {
        if (!categoryMatchesBirthYear(category)) return false;
        if (selectedCategory !== 'all' && category.category !== selectedCategory) return false;
        if (selectedDay !== 'all' && session.day !== selectedDay) return false;
        if (selectedLocation !== 'all' && session.location !== selectedLocation) return false;
        return true;
      })
    })).filter(category => category.sessions.length > 0);
  };

  const getSessionsByFilter = () => {
    const allSessions = trainingSchedule.flatMap(category =>
      category.sessions.map(session => ({
        ...session,
        category: category.category,
        year: category.year,
        color: category.color,
        birthYearMin: category.birthYearMin,
        birthYearMax: category.birthYearMax,
      }))
    );

    let filtered = allSessions;

    if (selectedBirthYear !== 'all') {
      if (selectedBirthYear === 'lte-2014') {
        filtered = filtered.filter(s => s.category === 'Ados & Adultes');
      } else {
        const y = parseInt(selectedBirthYear);
        filtered = filtered.filter(s => y >= s.birthYearMin && y <= s.birthYearMax);
      }
    }
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(session => session.category === selectedCategory);
    }
    if (selectedDay !== 'all') {
      filtered = filtered.filter(session => session.day === selectedDay);
    }
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(session => session.location === selectedLocation);
    }

    if (activeFilter === 'day') {
      const grouped = days.reduce((acc, day) => {
        acc[day] = filtered.filter(session => session.day === day);
        return acc;
      }, {} as Record<string, typeof filtered>);
      return grouped;
    }

    if (activeFilter === 'location') {
      const grouped = locations.reduce((acc, location) => {
        acc[location] = filtered.filter(session => session.location === location);
        return acc;
      }, {} as Record<string, typeof filtered>);
      return grouped;
    }

    return filtered;
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedDay('all');
    setSelectedLocation('all');
    setSelectedBirthYear('all');
    setActiveFilter('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedDay !== 'all' || selectedLocation !== 'all' || selectedBirthYear !== 'all';

  return (
    <section id="planning" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Planning des entraînements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez tous nos cours organisés par catégorie d'âge, jour ou lieu
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={20} className="text-yellow-600" />
            <h3 className="text-lg font-bold text-gray-900">Filtrer le planning</h3>
          </div>

          {/* Boutons de vue */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Vue par catégories
            </button>
            <button
              onClick={() => setActiveFilter('day')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === 'day'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Vue par jours
            </button>
            <button
              onClick={() => setActiveFilter('location')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === 'location'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Vue par dojos
            </button>
          </div>

          {/* Filtres spécifiques */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Année de naissance</label>
              <select
                value={selectedBirthYear}
                onChange={(e) => {
                  setSelectedBirthYear(e.target.value);
                  setSelectedCategory('all');
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="all">Toutes les années</option>
                {explicitYears.map(y => (
                  <option key={y} value={String(y)}>{y === 2023 ? '2023 *' : y}</option>
                ))}
                <option value="lte-2014">2014 et avant</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">* Nés en 2023 : sous réserve d'un essai concluant</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedBirthYear('all');
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="all">Toutes les catégories</option>
                {trainingSchedule.map(category => (
                  <option key={category.category} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Jour</label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="all">Tous les jours</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dojo</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="all">Tous les dojos</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-4">
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>

        {/* Affichage des résultats */}
        {(activeFilter === 'all' || activeFilter === 'category') && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredData().map((category, index) => (
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
        )}

        {activeFilter === 'day' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(getSessionsByFilter() as Record<string, any[]>).map(([day, sessions]) => (
              sessions.length > 0 && (
                <div key={day} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-2">{day}</h3>
                  <div className="space-y-4">
                    {sessions.map((session, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border-l-4"
                        style={{
                          backgroundColor: `${session.color}10`,
                          borderLeftColor: session.color
                        }}
                      >
                        <div className="font-semibold text-gray-900 mb-1">{session.category}</div>
                        <div className="text-sm text-gray-600 mb-1">{session.time}</div>
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <MapPin size={12} />
                          {session.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {activeFilter === 'location' && (
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(getSessionsByFilter() as Record<string, any[]>).map(([location, sessions]) => (
              sessions.length > 0 && (
                <div key={location} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin size={20} className="text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900">{location}</h3>
                  </div>
                  <div className="space-y-4">
                    {sessions.map((session, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border-l-4"
                        style={{
                          backgroundColor: `${session.color}10`,
                          borderLeftColor: session.color
                        }}
                      >
                        <div className="font-semibold text-gray-900 mb-1">{session.category}</div>
                        <div className="text-sm text-gray-600 mb-1">{session.day} - {session.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {((activeFilter !== 'all' && Object.keys(getSessionsByFilter()).length === 0) ||
          (activeFilter === 'all' && getFilteredData().length === 0)) && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">Aucun cours trouvé avec ces filtres</div>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300"
            >
              Voir tous les cours
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Planning;
