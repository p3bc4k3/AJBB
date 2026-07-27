export const SITE_URL = 'https://ajbb.sharejudo.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/img/main/judo.jpg`;

export interface SeoEntry {
  title: string;
  description: string;
  image?: string;
}

export const SEO_DEFAULT: SeoEntry = {
  title: 'Alliance Judo Bassin Biterrois (AJBB) - Club de judo à Villeneuve-lès-Béziers, Sauvian, Thézan',
  description:
    "Club de judo pour tous les âges (dès 3 ans) à Villeneuve-lès-Béziers, Sauvian et Thézan-lès-Béziers, près de Béziers. Cours loisirs et compétition, ambiance familiale, affilié à la FFJDA.",
};

export const SEO_ROUTES: Record<string, SeoEntry> = {
  '/': SEO_DEFAULT,
  '/planning': {
    title: 'Planning & horaires des cours de judo - AJBB',
    description:
      "Consultez les horaires des cours de judo de l'Alliance Judo Bassin Biterrois à Villeneuve-lès-Béziers, Sauvian et Thézan-lès-Béziers, pour tous les âges.",
  },
  '/calendrier': {
    title: 'Calendrier du club - AJBB Judo',
    description:
      "Retrouvez le calendrier des entraînements et événements de l'Alliance Judo Bassin Biterrois.",
  },
  '/photos': {
    title: 'Photos - Vie du club - AJBB Judo',
    description:
      "Albums photos des entraînements, stages et événements de l'Alliance Judo Bassin Biterrois.",
  },
  '/informations-pratiques': {
    title: "Informations pratiques - Catégories d'âge, tenue, tarifs - AJBB Judo",
    description:
      "Catégories d'âge, tenue, contacts des enseignants et infos pratiques pour pratiquer le judo à l'Alliance Judo Bassin Biterrois.",
  },
  '/inscription': {
    title: 'Inscription - Rejoignez le club de judo AJBB',
    description:
      "Comment s'inscrire à l'Alliance Judo Bassin Biterrois : pièces à fournir, tarifs et démarches d'inscription.",
  },
  '/quiz': {
    title: 'Quiz Judo - Testez vos connaissances - AJBB',
    description: "Un quiz ludique sur la culture judo proposé par l'Alliance Judo Bassin Biterrois.",
  },
};
