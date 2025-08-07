export interface Event {
  date: Date;
  title: string;
  description: string;
  type: 'competition' | 'training' | 'event';
}

// Événements basés sur le calendrier prévisionnel AJBB 2024-2025
export const events: Event[] = [
  // Janvier 2025
  { 
    date: new Date(2025, 0, 11), 
    title: "Tournoi Poussins/Benjamins", 
    description: "Compétition jeunes - Sauvian", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 0, 18), 
    title: "Tournoi Minimes/Cadets", 
    description: "Compétition - Thézan-lès-Béziers", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 0, 25), 
    title: "Championnat Départemental", 
    description: "Toutes catégories - Lieu à définir", 
    type: 'competition' 
  },

  // Février 2025
  { 
    date: new Date(2025, 1, 8), 
    title: "Tournoi Interclubs", 
    description: "Rencontre amicale entre clubs", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 1, 15), 
    title: "Stage Technique", 
    description: "Perfectionnement des techniques de base", 
    type: 'training' 
  },
  { 
    date: new Date(2025, 1, 22), 
    title: "Championnat Régional", 
    description: "Qualification pour l'interrégional", 
    type: 'competition' 
  },

  // Mars 2025
  { 
    date: new Date(2025, 2, 8), 
    title: "Tournoi de Printemps", 
    description: "Compétition toutes catégories", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 2, 15), 
    title: "Assemblée Générale", 
    description: "AG annuelle du club - 14h00", 
    type: 'event' 
  },
  { 
    date: new Date(2025, 2, 22), 
    title: "Stage Arbitrage", 
    description: "Formation des jeunes arbitres", 
    type: 'training' 
  },

  // Avril 2025
  { 
    date: new Date(2025, 3, 5), 
    title: "Championnat Interrégional", 
    description: "Sélection pour les championnats de France", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 3, 12), 
    title: "Journée Détection", 
    description: "Détection jeunes talents", 
    type: 'event' 
  },
  { 
    date: new Date(2025, 3, 26), 
    title: "Tournoi de Pâques", 
    description: "Compétition festive", 
    type: 'competition' 
  },

  // Mai 2025
  { 
    date: new Date(2025, 4, 10), 
    title: "Championnat de France", 
    description: "Représentation du club au niveau national", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 4, 17), 
    title: "Fête du Club", 
    description: "Remise des ceintures et pot de l'amitié", 
    type: 'event' 
  },
  { 
    date: new Date(2025, 4, 31), 
    title: "Tournoi de fin de saison", 
    description: "Dernière compétition de la saison", 
    type: 'competition' 
  },

  // Juin 2025
  { 
    date: new Date(2025, 5, 14), 
    title: "Stage d'été", 
    description: "Stage technique intensif", 
    type: 'training' 
  },
  { 
    date: new Date(2025, 5, 21), 
    title: "Démonstration publique", 
    description: "Présentation du judo en centre-ville", 
    type: 'event' 
  },

  // Septembre 2025 (nouvelle saison)
  { 
    date: new Date(2025, 8, 6), 
    title: "Reprise des entraînements", 
    description: "Début de la nouvelle saison 2025-2026", 
    type: 'event' 
  },
  { 
    date: new Date(2025, 8, 13), 
    title: "Journée Portes Ouvertes", 
    description: "Découverte du judo pour tous - 10h-17h", 
    type: 'event' 
  },
  { 
    date: new Date(2025, 8, 20), 
    title: "Clôture des inscriptions", 
    description: "Dernière semaine d'inscriptions", 
    type: 'event' 
  },

  // Octobre 2025
  { 
    date: new Date(2025, 9, 4), 
    title: "Premier tournoi de la saison", 
    description: "Compétition d'ouverture", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 9, 18), 
    title: "Championnat Départemental", 
    description: "Premier championnat de la nouvelle saison", 
    type: 'competition' 
  },

  // Novembre 2025
  { 
    date: new Date(2025, 10, 8), 
    title: "Tournoi d'automne", 
    description: "Compétition régionale", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 10, 22), 
    title: "Téléthon", 
    description: "Participation du club au Téléthon", 
    type: 'event' 
  },

  // Décembre 2025
  { 
    date: new Date(2025, 11, 6), 
    title: "Tournoi de Noël", 
    description: "Compétition festive de fin d'année", 
    type: 'competition' 
  },
  { 
    date: new Date(2025, 11, 13), 
    title: "Passage de grades", 
    description: "Examens pour les ceintures", 
    type: 'event' 
  },
  { 
    date: new Date(2025, 11, 20), 
    title: "Fête de Noël du club", 
    description: "Goûter de Noël pour tous les licenciés", 
    type: 'event' 
  }
];