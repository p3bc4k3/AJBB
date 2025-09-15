import { Event } from '../../events';

export const generateGoogleCalendarUrl = (event: Event): string => {
  const startDate = event.date;
  const endDate = event.endDate || event.date;
  
  // Format: YYYYMMDDTHHMMSSZ pour Google Calendar
  const formatDate = (date: Date, isEndDate = false) => {
    const d = new Date(date);
    if (isEndDate && !event.endDate) {
      // Si pas de date de fin, ajouter 2 heures par défaut pour Google
      d.setHours(d.getHours() + 2);
    }
    // Assurer que la date est en UTC
    return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };

  const startFormatted = formatDate(startDate);
  const endFormatted = formatDate(endDate, true);
  
  const description = encodeURIComponent(
    `${event.description}${event.category ? `\n\nCatégorie: ${event.category}` : ''}${event.registrationUrl ? `\n\nInscription: ${event.registrationUrl}` : ''}`
  );
  
  const location = encodeURIComponent(event.location || '');
  const title = encodeURIComponent(event.title);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startFormatted}/${endFormatted}`,
    details: description,
    location: location,
    trp: 'false'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadICSFile = (event: Event) => {
  const startDate = event.date;
  const endDate = event.endDate || new Date(event.date.getTime() + 2 * 60 * 60 * 1000);
  
  // Format pour ICS: YYYYMMDDTHHMMSSZ
  const formatDate = (date: Date) => {
    // Créer une date en UTC pour éviter les problèmes de timezone
    const utcDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    return utcDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };

  const startFormatted = formatDate(startDate);
  const endFormatted = formatDate(endDate);
  const now = new Date();
  const timestamp = formatDate(now);
  
  // Échapper les caractères spéciaux pour ICS
  const escapeICS = (text: string) => {
    return text
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '');
  };

  const description = escapeICS(
    `${event.description}${event.category ? `\n\nCatégorie: ${event.category}` : ''}${event.registrationUrl ? `\n\nInscription: ${event.registrationUrl}` : ''}`
  );
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AJBB//Calendar//FR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${event.title.replace(/\s+/g, '-').toLowerCase()}-${startDate.getTime()}@ajbb.fr
DTSTART:${startFormatted}
DTEND:${endFormatted}
DTSTAMP:${timestamp}
SUMMARY:${escapeICS(event.title)}
DESCRIPTION:${description}
LOCATION:${escapeICS(event.location || '')}${event.locationUrl ? `\nURL:${event.locationUrl}` : ''}
STATUS:CONFIRMED
SEQUENCE:0
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};