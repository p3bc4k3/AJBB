import React, { useState } from 'react';
import { Calendar, ChevronDown, Smartphone, Globe, Download } from 'lucide-react';
import { Event } from '../../events';
import { generateGoogleCalendarUrl, downloadICSFile } from '../utils/calendar';

interface CalendarButtonsProps {
  event: Event;
  size?: 'sm' | 'md';
}

const CalendarButtons: React.FC<CalendarButtonsProps> = ({ event, size = 'md' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGoogleCalendar = () => {
    try {
      const url = generateGoogleCalendarUrl(event);
      console.log('Google Calendar URL:', url); // Debug
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
    } catch (error) {
      console.error('Erreur lors de la génération de l\'URL Google Calendar:', error);
      alert('Erreur lors de l\'ouverture de Google Calendar');
    }
  };

  const handleAppleCalendar = () => {
    try {
      console.log('Téléchargement ICS pour Apple Calendar'); // Debug
      downloadICSFile(event);
      setIsOpen(false);
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier ICS:', error);
      alert('Erreur lors du téléchargement du fichier calendrier');
    }
  };

  const handleOutlookCalendar = () => {
    try {
      console.log('Téléchargement ICS pour Outlook'); // Debug
      downloadICSFile(event);
      setIsOpen(false);
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier ICS:', error);
      alert('Erreur lors du téléchargement du fichier calendrier');
    }
  };

  const buttonSizeClasses = size === 'sm' 
    ? 'px-3 py-1.5 text-xs' 
    : 'px-4 py-2 text-sm';

  const iconSize = size === 'sm' ? 12 : 14;

  // Debug: afficher les informations de l'événement
  React.useEffect(() => {
    console.log('Event data:', {
      title: event.title,
      date: event.date,
      endDate: event.endDate,
      description: event.description,
      location: event.location
    });
  }, [event]);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 ${buttonSizeClasses} bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
      >
        <Calendar size={iconSize} />
        Ajouter au calendrier
        <ChevronDown size={iconSize} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Overlay pour fermer le menu */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu dropdown */}
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-20 overflow-hidden">
            <div className="py-2">
              <button
                onClick={handleGoogleCalendar}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Globe size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Google Calendar</div>
                  <div className="text-xs text-gray-500">Ouvrir dans le navigateur</div>
                </div>
              </button>

              <button
                onClick={handleAppleCalendar}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <Smartphone size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Apple Calendar</div>
                  <div className="text-xs text-gray-500">Télécharger fichier .ics</div>
                </div>
              </button>

              <button
                onClick={handleOutlookCalendar}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Download size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Outlook / Autres</div>
                  <div className="text-xs text-gray-500">Télécharger fichier .ics</div>
                </div>
              </button>
            </div>

            <div className="border-t border-gray-100 px-4 py-2">
              <p className="text-xs text-gray-500">
                💡 Le fichier .ics fonctionne avec la plupart des applications de calendrier
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarButtons;