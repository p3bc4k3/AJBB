export interface Event {
  date: Date;
  title: string;
  description: string;
  type: 'competition' | 'training' | 'event';
}

export const events: Event[] = [
  // Octobre 2024
  {
    date: new Date(2024, 9, 5), // 5 octobre 2024
    title: "Stages arbitrage et commissaires sportifs",
    description: "Formation à Narbonne",
    type: 'training'
  },
  {
    date: new Date(2024, 9, 12), // 12 octobre 2024
    title: "Stages arbitrage et commissaires sportifs",
    description: "Formation à Mèze",
    type: 'training'
  },
  {
    date: new Date(2024, 9, 13), // 13 octobre 2024
    title: "Stage Benjamins-Minimes",
    description: "Stage à Thézan-lès-Béziers",
    type: 'training'
  },

  // Novembre 2024
  {
    date: new Date(2024, 10, 2), // 2 novembre 2024
    title: "Tournoi Régional Minimes du Gers",
    description: "Compétition à Auch",
    type: 'competition'
  },
  {
    date: new Date(2024, 10, 9), // 9 novembre 2024
    title: "UV1 KATA ET UV2 TECHNIQUE 1D & 2D",
    description: "Examens au Dojo de Narbonne",
    type: 'event'
  },
  {
    date: new Date(2024, 10, 10), // 10 novembre 2024
    title: "UV3 1D, 2D, 3D & 4D et UV4 3D & 4D",
    description: "Examens au Dojo de Narbonne",
    type: 'event'
  },
  {
    date: new Date(2024, 10, 16), // 16 novembre 2024
    title: "Tournoi label Régional Benjamins de l'Aude",
    description: "Compétition au Dojo de Narbonne",
    type: 'competition'
  },
  {
    date: new Date(2024, 10, 17), // 17 novembre 2024
    title: "Stage Occitanie de jujitsu",
    description: "Formation à Mèze",
    type: 'training'
  },
  {
    date: new Date(2024, 10, 24), // 24 novembre 2024
    title: "Compétitions Benjamins Minimes",
    description: "Compétition à Lavelanet",
    type: 'competition'
  },

  // Décembre 2024
  {
    date: new Date(2024, 11, 1), // 1er décembre 2024
    title: "Tournoi label A Minimes Moissac",
    description: "Compétition à Moissac",
    type: 'competition'
  },
  {
    date: new Date(2024, 11, 14), // 14 décembre 2024
    title: "Tournoi de Noël du Club",
    description: "Compétition à Villeneuve-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2024, 11, 14), // 14 décembre 2024
    title: "Passage de Grade Mi-Saison",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2024, 11, 15), // 15 décembre 2024
    title: "Papa Noël pour les Baby",
    description: "Événement à Thézan-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2024, 11, 15), // 15 décembre 2024
    title: "Championnat Occitanie ju jitsu - Ne waza",
    description: "Championnat au Dojo de Narbonne",
    type: 'competition'
  },
  {
    date: new Date(2024, 11, 21), // 21 décembre 2024
    title: "Tournoi label A Minimes de Toulouse",
    description: "Compétition à la Maison du judo Toulouse",
    type: 'competition'
  },
  {
    date: new Date(2024, 11, 22), // 22 décembre 2024
    title: "Stage Minimes de Toulouse (3 jours)",
    description: "Stage au CREPS Toulouse",
    type: 'training'
  },

  // Janvier 2025
  {
    date: new Date(2025, 0, 18), // 18 janvier 2025
    title: "Coupe Occitanie kata",
    description: "Compétition - lieu à préciser",
    type: 'competition'
  },
  {
    date: new Date(2025, 0, 19), // 19 janvier 2025
    title: "Raclette, Photos Club et Tombola",
    description: "Événement à Villeneuve-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2025, 0, 25), // 25 janvier 2025
    title: "Coupe de zone Minimes et Coupe de zone jeunes officiels Cadets",
    description: "Compétition dans 3 lieux (zones)",
    type: 'competition'
  },
  {
    date: new Date(2025, 0, 25), // 25 janvier 2025
    title: "Tournoi qualificatif championnat de France Ju jitsu- Ne waza",
    description: "Qualification au Dojo de Narbonne (à confirmer)",
    type: 'competition'
  },
  {
    date: new Date(2025, 0, 26), // 26 janvier 2025
    title: "Kagami Biraki",
    description: "Cérémonie traditionnelle - lieu à préciser",
    type: 'event'
  },
  {
    date: new Date(2025, 0, 26), // 26 janvier 2025
    title: "Tournoi qualificatif championnat de France Ju jitsu- Ne waza",
    description: "Qualification au Dojo de Narbonne (à confirmer)",
    type: 'competition'
  },

  // Février 2025
  {
    date: new Date(2025, 1, 9), // 9 février 2025
    title: "Stage Occitanie de jujitsu",
    description: "Formation - lieu à préciser",
    type: 'training'
  },
  {
    date: new Date(2025, 1, 16), // 16 février 2025
    title: "Coupe Occitanie minimes et Coupe Occitanie jeunes officiels cadets",
    description: "Compétition à la Maison du judo Toulouse",
    type: 'competition'
  },

  // Mars 2025
  {
    date: new Date(2025, 2, 15), // 15 mars 2025
    title: "Championnat de France seniors Jujitsu et Ne Waza",
    description: "Championnat national - lieu à préciser",
    type: 'competition'
  },
  {
    date: new Date(2025, 2, 16), // 16 mars 2025
    title: "Championnat de France seniors Jujitsu et Ne Waza",
    description: "Championnat national - lieu à préciser",
    type: 'competition'
  },
  {
    date: new Date(2025, 2, 22), // 22 mars 2025
    title: "UV1 KATA ET UV2 TECHNIQUE 1D, 2D, 3D & 4D",
    description: "Examens CD30",
    type: 'event'
  },
  {
    date: new Date(2025, 2, 22), // 22 mars 2025
    title: "Coupe de France minimes",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition'
  },
  {
    date: new Date(2025, 2, 23), // 23 mars 2025
    title: "UV3 1D, 2D & 3D et UV4 3D & 4D",
    description: "Examens CD30",
    type: 'event'
  },
  {
    date: new Date(2025, 2, 23), // 23 mars 2025
    title: "Coupe de France minimes",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition'
  },
  {
    date: new Date(2025, 2, 29), // 29 mars 2025
    title: "Critérium de Zone benjamins et coupe de Zone jeunes officiels minimes",
    description: "Compétition dans 3 lieux (zones)",
    type: 'competition'
  },
  {
    date: new Date(2025, 2, 29), // 29 mars 2025
    title: "Championnat de France Kata",
    description: "Championnat national - lieu à préciser",
    type: 'competition'
  },

  // Avril 2025
  {
    date: new Date(2025, 3, 5), // 5 avril 2025
    title: "Séance Parents-Enfants",
    description: "Activité familiale à Sauvian",
    type: 'event'
  },
  {
    date: new Date(2025, 3, 6), // 6 avril 2025
    title: "Séance Parents-Enfants",
    description: "Activité familiale à Villeneuve-Thézan",
    type: 'event'
  },
  {
    date: new Date(2025, 3, 19), // 19 avril 2025
    title: "Critérium Occitanie benjamins et coupe jeunes officiels minimes",
    description: "Compétition à Mèze",
    type: 'competition'
  },
  {
    date: new Date(2025, 3, 26), // 26 avril 2025
    title: "Passage de Grade anticipé",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2025, 3, 26), // 26 avril 2025
    title: "Stage de Pâques (2 jours)",
    description: "Stage à Villeneuve-lès-Béziers",
    type: 'training'
  },

  // Mai 2025
  {
    date: new Date(2025, 4, 10), // 10 mai 2025
    title: "Coupe de France minimes par équipes de département",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition'
  },
  {
    date: new Date(2025, 4, 11), // 11 mai 2025
    title: "Coupe de France minimes par équipes de département",
    description: "Compétition nationale - lieu à préciser",
    type: 'competition'
  },
  {
    date: new Date(2025, 4, 31), // 31 mai 2025
    title: "Journée Plage Ados",
    description: "Sortie à Valras",
    type: 'event'
  },

  // Juin 2025
  {
    date: new Date(2025, 5, 7), // 7 juin 2025
    title: "Passage de Grade",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2025, 5, 8), // 8 juin 2025
    title: "Passage de Grade",
    description: "Examens à Villeneuve-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2025, 5, 14), // 14 juin 2025
    title: "Fête de fin d'année",
    description: "Célébration à Villeneuve-lès-Béziers",
    type: 'event'
  },
  {
    date: new Date(2025, 5, 14), // 14 juin 2025
    title: "UV1 KATA ET UV2 TECHNIQUE 1D, 2D, 3D & 4D",
    description: "Examens à la Maison du judo Toulouse",
    type: 'event'
  },
  {
    date: new Date(2025, 5, 15), // 15 juin 2025
    title: "UV3 1D, 2D, 3D & 4D et UV4 3D & 4D",
    description: "Examens à la Maison du judo Toulouse",
    type: 'event'
  },

  // Juillet 2025
  {
    date: new Date(2025, 6, 5), // 5 juillet 2025
    title: "Summer Camp",
    description: "Camp d'été à Villeneuve-lès-Béziers",
    type: 'event'
  },

  // Septembre 2025
  {
    date: new Date(2025, 8, 6), // 6 septembre 2025
    title: "Reprise des entraînements",
    description: "Début de la nouvelle saison 2025-2026",
    type: 'event'
  },
  {
    date: new Date(2025, 8, 13), // 13 septembre 2025
    title: "Journée Portes Ouvertes",
    description: "Découverte du judo pour tous - 10h-17h",
    type: 'event'
  },
  {
    date: new Date(2025, 8, 20), // 20 septembre 2025
    title: "Clôture des inscriptions",
    description: "Dernière semaine d'inscriptions",
    type: 'event'
  }
];