export interface Sponsor {
  name: string;
  logo: string;
  url: string;
  description?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Racing Auto-École',
    logo: '/img/sponsor/sponsor1.png',
    url: '',
  },
  {
    name: 'La Galère - Bar Glacier Cocktail Valras-Plage',
    logo: '/img/sponsor/sponsor-la-galere.png',
    url: 'https://www.facebook.com/lagalereplage/?locale=fr_FR',
  },
];
