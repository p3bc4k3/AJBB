export interface Event {
  date: Date;
  title: string;
  description: string;
  type: 'competition' | 'training' | 'event';
  category?: string;
}

export const events: Event[] = [
  // Octobre 2024
  {
    date: new Date(2025, 10, 4),
    title: "Stages arbitrage et commissaires sportifs",
    description: "Formation à Narbonne",
    type: 'training',
    category: "Formation"
  },
  {
    date: new Date(2024, 9, 12),
    title: "Stages arbitrage et commissaires sportifs",
    description: "Formation à Mèze",
    type: 'training',
    category: "Formation"
  },
  {
    date: new Date(2024, 9, 13),
    title: "Stage Benjamins-Minimes",
    description: "Stage à Thézan-lès-Béziers",
    type: 'training',
    category: "Benjamins-Minimes"
  },

  // Novembre 2024
  {
    date: new Date(2024, 10, 2),
    title: "Tournoi Régional Minimes du Gers",
    description: "Compétition à Auch",
    type: 'competition',
    category: "Minimes"
  },
  {
    date: new Date(2024, 10, 9),
    title: "UV1 KATA ET UV2 TECHNIQUE 1D & 2D",
    description: "Examens au Dojo de Narbonne",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2024, 10, 10),
    title: "UV3 1D, 2D, 3D & 4D et UV4 3D & 4D",
    description: "Examens au Dojo de Narbonne",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2024, 10, 16),
    title: "Tournoi label Régional Benjamins de l'Aude",
    description: "Compétition au Dojo de Narbonne",
    type: 'competition',
    category: "Benjamins"
  },
  {
    date: new Date(2024, 10, 17),
    title: "Stage Occitanie de jujitsu",
    description: "Formation à Mèze",
    type: 'training',
    category: "Jujitsu"
  },
  {
    date: new Date(2024, 10, 24),
    title: "Compétitions Benjamins Minimes",
    description: "Compétition à Lavelanet",
    type: 'competition',
    category: "Benjamins-Minimes"
  },

  // Décembre 2024
  {
    date: new Date(2024, 11, 1),
    title: "Tournoi label A Minimes Moissac",
    description: "Compétition à Moissac",
    type: 'competition',
    category: "Minimes"
  },
  {
    date: new Date(2024, 11, 14),
    title: "Tournoi de Noël du Club",
    description: "Compétition à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Club"
  },
  {
    date: new Date(2024, 11, 14),
    title: "Passage de Grade Mi-Saison",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2024, 11, 15),
    title: "Papa Noël pour les Baby",
    description: "Événement à Thézan-lès-Béziers",
    type: 'event',
    category: "Baby"
  },
  {
    date: new Date(2024, 11, 15),
    title: "Championnat Occitanie ju jitsu - Ne waza",
    description: "Championnat au Dojo de Narbonne",
    type: 'competition',
    category: "Jujitsu"
  },
  {
    date: new Date(2024, 11, 21),
    title: "Tournoi label A Minimes de Toulouse",
    description: "Compétition à la Maison du judo Toulouse",
    type: 'competition',
    category: "Minimes"
  },
  {
    date: new Date(2024, 11, 22),
    title: "Stage Minimes de Toulouse (3 jours)",
    description: "Stage au CREPS Toulouse",
    type: 'training',
    category: "Minimes"
  },

  // Janvier 2025
  {
    date: new Date(2025, 0, 18),
    title: "Coupe Occitanie kata",
    description: "Compétition - lieu à préciser",
    type: 'competition',
    category: "Kata"
  },
  {
    date: new Date(2026, 0, 18),
    title: "Raclette, Photos Club et Tombola",
    description: "Événement à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Club"
  },
  {
    date: new Date(2025, 0, 25),
    title: "Coupe de zone Minimes et Coupe de zone jeunes officiels Cadets",
    description: "Compétition dans 3 lieux (zones)",
    type: 'competition',
    category: "Minimes-Cadets"
  },
  {
    date: new Date(2025, 0, 25),
    title: "Tournoi qualificatif championnat de France Ju jitsu- Ne waza",
    description: "Qualification au Dojo de Narbonne (à confirmer)",
    type: 'competition',
    category: "Jujitsu"
  },
  {
    date: new Date(2025, 0, 26),
    title: "Kagami Biraki",
    description: "Cérémonie traditionnelle - lieu à préciser",
    type: 'event',
    category: "Tradition"
  },
  {
    date: new Date(2025, 0, 26),
    title: "Tournoi qualificatif championnat de France Ju jitsu- Ne waza",
    description: "Qualification au Dojo de Narbonne (à confirmer)",
    type: 'competition',
    category: "Jujitsu"
  },

  // Février 2025
  {
    date: new Date(2025, 1, 9),
    title: "Stage Occitanie de jujitsu",
    description: "Formation - lieu à préciser",
    type: 'training',
    category: "Jujitsu"
  },
  {
    date: new Date(2025, 1, 16),
    title: "Coupe Occitanie minimes et Coupe Occitanie jeunes officiels cadets",
    description: "Compétition à la Maison du judo Toulouse",
    type: 'competition',
    category: "Minimes-Cadets"
  },

  // Mars 2025
  {
    date: new Date(2025, 2, 15),
    title: "Championnat de France seniors Jujitsu et Ne Waza",
    description: "Championnat national - lieu à préciser",
    type: 'competition',
    category: "Seniors"
  },
  {
    date: new Date(2025, 2, 16),
    title: "Championnat de France seniors Jujitsu et Ne Waza",
    description: "Championnat national - lieu à préciser",
    type: 'competition',
    category: "Seniors"
  },
  {
    date: new Date(2025, 2, 22),
    title: "UV1 KATA ET UV2 TECHNIQUE 1D, 2D, 3D & 4D",
    description: "Examens CD30",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2025, 2, 22),
    title: "Coupe de France minimes",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition',
    category: "Minimes"
  },
  {
    date: new Date(2025, 2, 23),
    title: "UV3 1D, 2D & 3D et UV4 3D & 4D",
    description: "Examens CD30",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2025, 2, 23),
    title: "Coupe de France minimes",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition',
    category: "Minimes"
  },
  {
    date: new Date(2025, 2, 29),
    title: "Critérium de Zone benjamins et coupe de Zone jeunes officiels minimes",
    description: "Compétition dans 3 lieux (zones)",
    type: 'competition',
    category: "Benjamins-Minimes"
  },
  {
    date: new Date(2025, 2, 29),
    title: "Championnat de France Kata",
    description: "Championnat national - lieu à préciser",
    type: 'competition',
    category: "Kata"
  },

  // Avril 2025
  {
    date: new Date(2025, 3, 5),
    title: "Séance Parents-Enfants",
    description: "Activité familiale à Sauvian",
    type: 'event',
    category: "Famille"
  },
  {
    date: new Date(2025, 3, 6),
    title: "Séance Parents-Enfants",
    description: "Activité familiale à Villeneuve-Thézan",
    type: 'event',
    category: "Famille"
  },
  {
    date: new Date(2025, 3, 19),
    title: "Critérium Occitanie benjamins et coupe jeunes officiels minimes",
    description: "Compétition à Mèze",
    type: 'competition',
    category: "Benjamins-Minimes"
  },
  {
    date: new Date(2025, 3, 26),
    title: "Passage de Grade anticipé",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2025, 3, 26),
    title: "Stage de Pâques (2 jours)",
    description: "Stage à Villeneuve-lès-Béziers",
    type: 'training',
    category: "Stage"
  },

  // Mai 2025
  {
    date: new Date(2025, 4, 10),
    title: "Coupe de France minimes par équipes de département",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition',
    category: "Minimes"
  },
  {
    date: new Date(2025, 4, 11),
    title: "Coupe de France minimes par équipes de département",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition',
    category: "Minimes"
  },
  {
    date: new Date(2025, 4, 31),
    title: "Journée Plage Ados",
    description: "Sortie à Valras",
    type: 'event',
    category: "Ados"
  },

  // Juin 2025
  {
    date: new Date(2025, 5, 7),
    title: "Passage de Grade",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2025, 5, 8),
    title: "Passage de Grade",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2025, 5, 14),
    title: "Fête de fin d'année",
    description: "Célébration à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Club"
  },
  {
    date: new Date(2025, 5, 14),
    title: "UV1 KATA ET UV2 TECHNIQUE 1D, 2D, 3D & 4D",
    description: "Examens à la Maison du judo Toulouse",
    type: 'event',
    category: "Examens"
  },
  {
    date: new Date(2025, 5, 15),
    title: "UV3 1D, 2D, 3D & 4D et UV4 3D & 4D",
    description: "Examens à la Maison du judo Toulouse",
    type: 'event',
    category: "Examens"
  },

  // Juillet 2025
  {
    date: new Date(2025, 6, 5),
    title: "Summer Camp",
    description: "Camp d'été à Villeneuve-lès-Béziers",
    type: 'event',
    category: "Club"
  },

  // Septembre 2025
  {
    date: new Date(2025, 8, 6),
    title: "Reprise des entraînements",
    description: "Début de la nouvelle saison 2025-2026",
    type: 'event',
    category: "Club"
  },
  {
    date: new Date(2025, 8, 13),
    title: "Journée Portes Ouvertes",
    description: "Découverte du judo pour tous - 10h-17h",
    type: 'event',
    category: "Club"
  },
  {
    date: new Date(2025, 8, 20),
    title: "Clôture des inscriptions",
    description: "Dernière semaine d'inscriptions",
    type: 'event',
    category: "Club"
  }
];