import React, { useState } from 'react';
import { Calendar, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { generateCalendarUrls, downloadICSFile, CalendarEvent } from '../utils/calendar';

interface CalendarButtonProps {
  event: CalendarEvent;
  size?: 'sm' | 'md';
  className?: string;
}

const CalendarButton: React.FC<CalendarButtonProps> = ({ 
  event, 
  size = 'md',
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const urls = generateCalendarUrls(event);

  const handleCalendarClick = (url: string) => {
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleICSDownload = () => {
    downloadICSFile(event);
    setIsOpen(false);
  };

  const buttonSize = size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-4 py-2';
  const iconSize = size === 'sm' ? 14 : 16;

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 ${buttonSize} bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
      >
        <Calendar size={iconSize} />
        <span>Ajouter au calendrier</span>
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
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
            <div className="py-2">
              <button
                onClick={() => handleCalendarClick(urls.google)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200"
              >
                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Google Calendar</div>
                  <div className="text-xs text-gray-500">Ouvrir dans Google Calendar</div>
                </div>
                <ExternalLink size={12} className="text-gray-400 ml-auto" />
              </button>

              <button
                onClick={() => handleCalendarClick(urls.outlook)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200"
              >
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">O</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Outlook</div>
                  <div className="text-xs text-gray-500">Ouvrir dans Outlook</div>
                </div>
                <ExternalLink size={12} className="text-gray-400 ml-auto" />
              </button>

              <button
                onClick={() => handleCalendarClick(urls.yahoo)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200"
              >
                <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Yahoo Calendar</div>
                  <div className="text-xs text-gray-500">Ouvrir dans Yahoo</div>
                </div>
                <ExternalLink size={12} className="text-gray-400 ml-auto" />
              </button>

              <div className="border-t border-gray-100 my-1"></div>

              <button
                onClick={handleICSDownload}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200"
              >
                <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                  <Download size={12} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Télécharger (.ics)</div>
                  <div className="text-xs text-gray-500">Compatible avec tous les calendriers</div>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarButton;