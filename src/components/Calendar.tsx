import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  date: Date;
  title: string;
  description: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const events: Event[] = [
    { date: new Date(2025, 1, 8), title: "Compétition Départementale Minimes", description: "Championnat départemental - Catégorie Minimes" },
    { date: new Date(2025, 1, 15), title: "Compétition Départementale Cadets", description: "Championnat départemental - Catégorie Cadets" },
    { date: new Date(2025, 1, 22), title: "Compétition Départementale Juniors", description: "Championnat départemental - Catégorie Juniors" },
    { date: new Date(2025, 2, 1), title: "Compétition Départementale Seniors", description: "Championnat départemental - Catégorie Seniors" },
    { date: new Date(2025, 2, 8), title: "Compétition Régionale Minimes", description: "Championnat régional - Catégorie Minimes" },
    { date: new Date(2025, 2, 15), title: "Compétition Régionale Cadets", description: "Championnat régional - Catégorie Cadets" },
    { date: new Date(2025, 2, 22), title: "Compétition Régionale Juniors", description: "Championnat régional - Catégorie Juniors" },
    { date: new Date(2025, 2, 29), title: "Compétition Régionale Seniors", description: "Championnat régional - Catégorie Seniors" },
    { date: new Date(2025, 3, 5), title: "Compétition Interrégionale Minimes", description: "Championnat interrégional - Catégorie Minimes" },
    { date: new Date(2025, 3, 12), title: "Compétition Interrégionale Cadets", description: "Championnat interrégional - Catégorie Cadets" },
    { date: new Date(2025, 3, 19), title: "Compétition Interrégionale Juniors", description: "Championnat interrégional - Catégorie Juniors" },
    { date: new Date(2025, 3, 26), title: "Compétition Interrégionale Seniors", description: "Championnat interrégional - Catégorie Seniors" },
    { date: new Date(2025, 4, 3), title: "Championnat de France Minimes", description: "Championnat de France - Catégorie Minimes" },
    { date: new Date(2025, 4, 10), title: "Championnat de France Cadets", description: "Championnat de France - Catégorie Cadets" },
    { date: new Date(2025, 4, 17), title: "Championnat de France Juniors", description: "Championnat de France - Catégorie Juniors" },
    { date: new Date(2025, 4, 24), title: "Championnat de France Seniors", description: "Championnat de France - Catégorie Seniors" }
  ];

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const dayHeaders = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0

    const days = [];
    
    // Empty cells for previous month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const hasEvent = (day: number) => {
    if (!day) return false;
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return events.some(event => 
      event.date.toDateString() === dayDate.toDateString()
    );
  };

  const isToday = (day: number) => {
    if (!day) return false;
    const today = new Date();
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return dayDate.toDateString() === today.toDateString();
  };

  const getUpcomingEvents = () => {
    const now = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000));
    
    return events
      .filter(event => event.date >= now && event.date <= thirtyDaysFromNow)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <section id="calendrier" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Calendrier</h2>
          <p className="text-lg text-gray-600">Événements à venir et dates importantes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-yellow-600 text-white p-6 flex items-center justify-between">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <h3 className="text-xl font-bold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7">
              {dayHeaders.map(day => (
                <div key={day} className="bg-gray-100 p-4 text-center font-semibold text-gray-600 text-sm">
                  {day}
                </div>
              ))}
              
              {getDaysInMonth().map((day, index) => (
                <div
                  key={index}
                  className={`aspect-square flex items-center justify-center border border-gray-200 relative cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    !day ? 'text-gray-300' : ''
                  } ${
                    isToday(day || 0) ? 'bg-yellow-600 text-white font-bold' : ''
                  }`}
                >
                  {day}
                  {hasEvent(day || 0) && (
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Événements à venir</h3>
            
            <div className="space-y-4">
              {getUpcomingEvents().length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  Aucun événement prévu dans les 30 prochains jours.
                </p>
              ) : (
                getUpcomingEvents().map((event, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-600">
                    <div className="text-center min-w-[60px]">
                      <div className="text-xl font-bold text-yellow-600">
                        {event.date.getDate()}
                      </div>
                      <div className="text-xs text-gray-600 uppercase">
                        {monthNames[event.date.getMonth()].slice(0, 3)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;