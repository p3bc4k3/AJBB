import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Clock, AlertCircle, Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { events, Event } from '../../events';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  const getEventTypeForDay = (day: number) => {
    if (!day) return null;
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayEvents = events.filter(event => 
      event.date.toDateString() === dayDate.toDateString()
    );
    if (dayEvents.length === 0) return null;
    // Retourne le type du premier événement (ou on pourrait prioriser)
    return dayEvents[0].type;
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

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getTodayEvents = () => {
    const today = new Date();
    return events.filter(event => 
      event.date.toDateString() === today.toDateString()
    );
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

  const handleDayClick = (day: number) => {
    if (!day) return;
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
  };

  const getRegistrationStatus = (event: Event) => {
    if (!event.registrationDeadline) return false;
    const now = new Date();
    // Normaliser les dates à minuit pour une comparaison précise
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const deadline = new Date(event.registrationDeadline.getFullYear(), event.registrationDeadline.getMonth(), event.registrationDeadline.getDate());
    
    if (today > deadline) return 'closed';
    if (today.getTime() === deadline.getTime()) return 'lastDay';
    return 'open';
  };

  const getEventStatus = (event: Event) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const eventDate = new Date(event.date.getFullYear(), event.date.getMonth(), event.date.getDate());
    
    if (eventDate < today) return 'past';
    if (eventDate.getTime() === today.getTime()) return 'today';
    return 'future';
  };

  const handleRegistration = (event: Event) => {
    if (event.registrationUrl) {
      window.open(event.registrationUrl, '_blank');
    }
  };

  const renderRegistrationButton = (event: Event) => {
    if (!event.registrationDeadline || !event.registrationUrl) return null;
    
    const eventStatus = getEventStatus(event);
    
    // Masquer les inscriptions pour les événements d'aujourd'hui ou passés
    if (eventStatus === 'today' || eventStatus === 'past') return null;
    
    const status = getRegistrationStatus(event);
    
    if (status === 'closed') {
      return (
        <div className="flex items-center gap-2 text-red-600 text-sm mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
          <AlertCircle size={14} />
          <span className="font-medium">Inscriptions fermées</span>
        </div>
      );
    }
    
    if (status === 'lastDay') {
      return (
        <div className="mt-3">
          <div className="flex items-center gap-2 text-orange-700 text-sm mb-3 p-2 bg-orange-50 rounded-lg border border-orange-200">
            <AlertCircle size={12} />
            <span className="font-medium">⚠️ Dernier jour pour s'inscrire !</span>
          </div>
          <button
            onClick={() => handleRegistration(event)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <ExternalLink size={14} />
            S'inscrire
          </button>
        </div>
      );
    }
    
    return (
      <button
        onClick={() => handleRegistration(event)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg mt-3"
      >
        <ExternalLink size={14} />
        S'inscrire
      </button>
    );
  };

  const renderEventStatus = (event: Event) => {
    const eventStatus = getEventStatus(event);
    
    if (eventStatus === 'past') {
      return (
        <div className="flex items-center gap-2 text-gray-500 text-sm mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <Clock size={14} />
          <span className="font-medium">Événement terminé</span>
        </div>
      );
    }
    
    return null;
  };

  return (
    <section id="calendrier" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-gray-900">Calendrier</h2>
          <p className="text-lg text-gray-600">Événements à venir et dates importantes</p>
        </div>

        {/* Événements du jour - Version discrète */}
        {getTodayEvents().length > 0 && (
          <div className="mb-8 bg-yellow-50 rounded-xl p-6 shadow-sm border border-yellow-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                <CalendarIcon size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Aujourd'hui</h3>
                <p className="text-sm text-yellow-700">
                  {new Date().toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    day: 'numeric',
                    month: 'long'
                  })}
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              {getTodayEvents().map((event, index) => (
                <div key={index} className={`p-4 bg-white rounded-lg shadow-sm border-l-4 hover:shadow-md transition-all duration-200 ${
                  event.type === 'competition' ? 'border-red-500' : 
                  event.type === 'training' ? 'border-blue-500' : 
                  'border-yellow-600'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.type === 'competition' ? 'bg-red-100 text-red-700' : 
                          event.type === 'training' ? 'bg-blue-100 text-blue-700' : 
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {event.type === 'competition' ? 'Compétition' : 
                           event.type === 'training' ? 'Stage' : 
                           'Événement'}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        {event.category && (
                          <span className="flex items-center gap-1">
                            👥 {event.category}
                          </span>
                        )}
                        
                        {event.location && (
                          <a
                            href={event.locationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            <MapPin size={12} />
                            {event.location}
                          </a>
                        )}
                      </div>
                      
                      {event.registrationDeadline && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                            <Clock size={12} />
                            <span>
                              Inscription avant le {event.registrationDeadline.toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                          {renderRegistrationButton(event)}
                          {renderEventStatus(event)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
                  onClick={() => handleDayClick(day || 0)}
                  className={`aspect-square flex items-center justify-center border border-gray-200 relative cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    !day ? 'text-gray-300' : ''
                  } ${
                    isToday(day || 0) ? 'bg-yellow-600 text-white font-bold' : ''
                  } ${
                    selectedDate && day && selectedDate.toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString() 
                      ? 'ring-2 ring-yellow-600 bg-yellow-50' : ''
                  }`}
                >
                  {day}
                  {hasEvent(day || 0) && (
                    <div className={`absolute bottom-1 right-1 w-2 h-2 rounded-full ${
                      getEventTypeForDay(day || 0) === 'competition' ? 'bg-red-500' : 
                      getEventTypeForDay(day || 0) === 'training' ? 'bg-blue-500' : 
                      'bg-yellow-600'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {selectedDate ? (
              <>
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Événements du {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </h3>
                
                <div className="space-y-4 mb-8">
                  {getEventsForDate(selectedDate).length === 0 ? (
                    <p className="text-center text-gray-500 py-4">
                      Aucun événement prévu ce jour.
                    </p>
                  ) : (
                    getEventsForDate(selectedDate).map((event, index) => (
                      <div key={index} className={`p-6 bg-gray-50 rounded-lg border-l-4 ${
                        event.type === 'competition' ? 'border-red-500' : 
                        event.type === 'training' ? 'border-blue-500' : 
                        'border-yellow-600'
                      }`}>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{event.title}</h4>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              event.type === 'competition' ? 'bg-red-100 text-red-700' : 
                              event.type === 'training' ? 'bg-blue-100 text-blue-700' : 
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {event.type === 'competition' ? 'Compétition' : 
                               event.type === 'training' ? 'Stage' : 
                               'Événement'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                          {event.category && (
                            <p className="text-xs text-gray-500">Catégorie: {event.category}</p>
                          )}
                          
                          {event.location && (
                            <div className="mt-2">
                              <a
                                href={event.locationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
                              >
                                <MapPin size={12} />
                                {event.location}
                              </a>
                            </div>
                          )}
                          
                          {event.registrationDeadline && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                                <Clock size={12} />
                                <span>
                                  Inscription avant le {event.registrationDeadline.toLocaleDateString('fr-FR')}
                                </span>
                              </div>
                              {renderRegistrationButton(event)}
                              {renderEventStatus(event)}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <button
                  onClick={() => setSelectedDate(null)}
                  className="mb-6 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  ← Retour aux événements à venir
                </button>
              </>
            ) : (
              <h3 className="text-xl font-bold mb-6 text-gray-900">Événements à venir</h3>
            )}
            
            {!selectedDate && (
              <div className="space-y-4">
                {getUpcomingEvents().length === 0 ? (
                  <p className="text-center text-gray-500 py-8">
                    Aucun événement prévu dans les 30 prochains jours.
                  </p>
                ) : (
                  getUpcomingEvents().map((event, index) => (
                    <div key={index} className={`p-6 bg-gray-50 rounded-lg border-l-4 ${
                        event.type === 'competition' ? 'border-red-500' : 
                        event.type === 'training' ? 'border-blue-500' : 
                        'border-yellow-600'
                      }`}>
                      <div className="flex gap-4">
                        <div className="text-center min-w-[60px]">
                          <div className={`text-xl font-bold ${
                            event.type === 'competition' ? 'text-red-500' : 
                            event.type === 'training' ? 'text-blue-500' : 
                            'text-yellow-600'
                          }`}>
                            {event.date.getDate()}
                          </div>
                          <div className="text-xs text-gray-600 uppercase">
                            {monthNames[event.date.getMonth()].slice(0, 3)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{event.title}</h4>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              event.type === 'competition' ? 'bg-red-100 text-red-700' : 
                              event.type === 'training' ? 'bg-blue-100 text-blue-700' : 
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {event.type === 'competition' ? 'Compétition' : 
                               event.type === 'training' ? 'Stage' : 
                               'Événement'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                          {event.category && (
                            <p className="text-xs text-gray-500 mb-2">Catégorie: {event.category}</p>
                          )}
                          
                          {event.location && (
                            <div className="mb-2">
                              <a
                                href={event.locationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
                              >
                                <MapPin size={12} />
                                {event.location}
                              </a>
                            </div>
                          )}
                          
                          {event.registrationDeadline && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                                <Clock size={12} />
                                <span>
                                  Inscription avant le {event.registrationDeadline.toLocaleDateString('fr-FR')}
                                </span>
                              </div>
                              {renderRegistrationButton(event)}
                              {renderEventStatus(event)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Légende */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Légende</h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Compétitions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Stages</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              <span>Événements</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>📝 Notes :</strong> Les événements sont basés sur le calendrier prévisionnel. 
              Les dates et lieux peuvent être modifiés. <strong>Cliquez sur un jour</strong> pour voir les événements de cette date.
              Les inscriptions se font via le formulaire Google du club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;