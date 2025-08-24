export interface CalendarEvent {
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
}

export const generateCalendarUrls = (event: CalendarEvent) => {
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const startDate = formatDate(event.startDate);
  const endDate = event.endDate ? formatDate(event.endDate) : formatDate(new Date(event.startDate.getTime() + 2 * 60 * 60 * 1000)); // 2h par défaut

  const encodedTitle = encodeURIComponent(event.title);
  const encodedDescription = encodeURIComponent(event.description);
  const encodedLocation = event.location ? encodeURIComponent(event.location) : '';

  return {
    google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startDate}/${endDate}&details=${encodedDescription}&location=${encodedLocation}`,
    outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodedTitle}&startdt=${startDate}&enddt=${endDate}&body=${encodedDescription}&location=${encodedLocation}`,
    yahoo: `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodedTitle}&st=${startDate}&et=${endDate}&desc=${encodedDescription}&in_loc=${encodedLocation}`,
    ics: generateICSFile(event, startDate, endDate)
  };
};

const generateICSFile = (event: CalendarEvent, startDate: string, endDate: string) => {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AJBB//Calendar Event//FR',
    'BEGIN:VEVENT',
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    event.location ? `LOCATION:${event.location}` : '',
    `UID:${Date.now()}@ajbb.fr`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(line => line !== '').join('\r\n');

  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
};

export const downloadICSFile = (event: CalendarEvent, filename?: string) => {
  const urls = generateCalendarUrls(event);
  const link = document.createElement('a');
  link.href = urls.ics;
  link.download = filename || `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};