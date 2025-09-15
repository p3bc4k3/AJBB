export interface Event {
  date: Date;
  endDate?: Date;
  title: string;
  description: string;
  type: 'competition' | 'training' | 'event';
  category?: string;
  registrationDeadline?: Date;
  registrationUrl?: string;
  location?: string;
  locationUrl?: string;
}

export const events: Event[] = [
  {
    date: new Date("2025-10-12"),
    title: "Stages arbitrage et commissaires sportifs",
    description: "Stages arbitrage et commissaires sportifs - Mèze",
    type: "training",
    category: "Minimes+",
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
    registrationUrl: "https://forms.gle/csvt92TntrqzGhQu7", // URL de l'inscription
    registrationDeadline: new Date("2025-09-30"), // date limite d'inscription
  },
  {
    date: new Date("2025-10-11"),
    title: "Stage Benjamins-Minimes à Thézan-lès-Béziers",
    description: "Stage Benjamins-Minimes à Thézan-lès-Béziers",
    type: "training",
    category: "Benjamins - Minimes",
    location: "Rue Antoine de Saint-Exupéry, 34490 Thézan-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/43a6zSveVgwm777i9",
    registrationUrl: "https://forms.gle/gpExLiTAdMQ8dy1u8", // URL de l'inscription
    registrationDeadline: new Date("2025-09-30"), // date limite d'inscription
  },
  {
    title: "Stage Benjamins",
    date: new Date("2025-10-18"), // date ou date de début
    endDate: new Date("2025-10-20"), // date de fin si plusieurs jours
    // registrationDeadline: new Date("2025-08-12"), // date limite d'inscription
    description: "Stage départemental compétiteurs",
    type: "training", // compétitions, stages ou évènements général
    category: "Benjamins", // publics concernés
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
  },
  {
    title: "Stage Minimes Cadets Juniors",
    date: new Date("2025-10-20"), // date ou date de début
    endDate: new Date("2025-10-22"), // date de fin si plusieurs jours
    // registrationDeadline: new Date("2025-08-12"), // date limite d'inscription
    description: "Stage départemental compétiteurs",
    type: "training", // compétitions, stages ou évènements général
    category: "Minimes+", // publics concernés
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
  },
  {
    title: "Stage Toussaint",
    date: new Date("2025-10-25"), // date ou date de début
    endDate: new Date("2025-10-26"), // date de fin si plusieurs jours
    description: "Stage Toussaint pour les enfants né entre 2017 et 2013",
    type: "training", // compétitions, stages ou évènements général
    category: "Minimes+", // publics concernés
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://www.helloasso.com/associations/harmonie-sport/evenements/stage-de-toussaint-2025-judo-ajbb", // URL de l'inscription
    registrationDeadline: new Date("2025-10-22"), // date limite d'inscription
  },
  {
    date: new Date("2025-11-01"),
    title: "Tournoi Régional Minimes du Gers",
    description: "Tournoi Régional Minimes du Gers",
    type: "competition",
    category: "Minimes",
    location: "Auch"
  },
  {
    date: new Date("2025-11-0S"),
    title: "Stage départemental kata et Ju Jitsu",
    description: "Journée de stage départementale de Kata",
    type: "training",
    category: "Minimes+",
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
  },
  {
    date: new Date("2025-11-08"),
    title: "UV1 KATA ET UV2 TECHNIQUE 1D & 2D",
    description: "UV1 KATA ET UV2 TECHNIQUE 1D & 2D - Dojo de Narbonne",
    type: "event",
    category: "Autre",
    location: "R1 Av. de la Naiade, 11100 Narbonne",
    locationUrl: "https://maps.app.goo.gl/VhC3ozm9KMM5nRrk9"
  },
  {
    date: new Date("2025-11-09"),
    title: "SHO DAN",
    description: "UV3 1D, 2D, 3D & 4D et UV4 3D & 4D ",
    type: "event",
    category: "Autre",
    location: "R1 Av. de la Naiade, 11100 Narbonne",
    locationUrl: "https://maps.app.goo.gl/VhC3ozm9KMM5nRrk9"
  },
  {
    date: new Date("2025-11-15"),
    title: "Critérium 1er district Hérault benjamins",
    description: "Championnat pour les benjamins qui font beaucoup de compétitions (niveau indispensable)",
    type: "competition",
    category: "Benjamins",
    location: "18B Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/RRADUKUoXfEDa7Ko9"
  },
  {
    date: new Date("2025-11-16"),
    title: "Stage Occitanie de jujitsu",
    description: "Stage Occitanie de jujitsu - Mèze",
    type: "training",
    category: "Ju Jitsu",
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
  },
  {
    date: new Date("2025-11-30"),
    title: "Tournoi label A Minimes Moissac",
    description: "Tournoi label A Minimes Moissac - Moissac",
    type: "competition",
    category: "Minimes",
    location: "Moissac"
  },
  {
    date: new Date("2025-12-06"),
    title: "Tournoi de Noël du Club",
    description: "Tournoi de Noël du Club - Villeneuve-lès-Béziers",
    type: "competition",
    category: "Club",location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://forms.gle/K8U7c7xA6WpYAds28", // URL de l'inscription
    registrationDeadline: new Date("2025-11-23"), // date limite d'inscription
  },
  {
    date: new Date("2025-12-13"),
    title: "Critérium 2ème  district Hérault benjamins",
    description: "Championnat pour les benjamins qui font beaucoup de compétitions (niveau indispensable)",
    type: "competition",
    category: "Benjamins",
    location: "18B Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/RRADUKUoXfEDa7Ko9"
  },
  {
    date: new Date("2025-12-06"),
    title: "Passage de Grade Mi-Saison",
    description: "Passage de Grade Mi-Saison - Villeneuve-lès-Béziers",
    type: "event",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://forms.gle/j2ef7i6py2jPiLRY7", // URL de l'inscription
    registrationDeadline: new Date("2025-11-23"), // date limite d'inscription
  },
  {
    date: new Date("2025-12-06"),
    title: "Papa Noël pour les Baby",
    description: "Papa Noël pour les Baby - Villeneuve-lès-Béziers",
    type: "event",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://forms.gle/trdWjpw5cyy9ovtg7", // URL de l'inscription
    registrationDeadline: new Date("2025-11-23"), // date limite d'inscription
  },
  {
    date: new Date("2025-12-14"),
    title: "Championnat Occitanie ju jitsu - Ne waza",
    description: "Championnat Occitanie ju jitsu - Ne waza - Dojo de Narbonne",
    type: "competition",
    category: "Ju Jitsu",
    location: "R1 Av. de la Naiade, 11100 Narbonne",
    locationUrl: "https://maps.app.goo.gl/VhC3ozm9KMM5nRrk9"
  },
  {
    date: new Date("2025-12-20"),
    title: "Tournoi label A Minimes de Toulouse",
    description: "Tournoi label A Minimes de Toulouse - Maison du judo Toulouse",
    type: "competition",
    category: "Minimes",
    location: "Chem. Cassaing, 31500 Toulouse",
    locationUrl: "https://maps.app.goo.gl/YZSwbWm7g3esaqbu6"
  },
  {
    date: new Date("2025-12-21"),
    endDate: new Date("2025-12-23"),
    title: "Stage Minimes de Toulouse",
    description: "Stage Minimes de Toulouse (3 jours) - CREPS Toulouse",
    type: "training",
    category: "Minimes",
    location: "Chem. Cassaing, 31500 Toulouse",
    locationUrl: "https://maps.app.goo.gl/YZSwbWm7g3esaqbu6"
  },
  {
    date: new Date("2026-01-17"),
    title: "Coupe Occitanie kata",
    description: "Coupe Occitanie kata",
    type: "competition",
    category: "Minimes",
    location: "Chem. Cassaing, 31500 Toulouse",
    locationUrl: "https://maps.app.goo.gl/YZSwbWm7g3esaqbu6"
  },
  {
    date: new Date("2026-01-18"),
    title: "Raclette, Photos Club et Tombola",
    description: "Raclette, Photos Club et Tombola - Villeneuve-lès-Béziers",
    type: "event",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8"
  },
  {
    date: new Date("2026-01-24"),
    title: "Coupe de zone Minimes et Coupe de zone jeunes officiels Cadets",
    description: "Coupe de zone Minimes et Coupe de zone jeunes officiels Cadets",
    type: "competition",
    category: "Minimes et Arbitrage Cadets",
    location: "Palais Des Sports Beziers Méditerranée", 
    locationUrl: "https://maps.app.goo.gl/vW1CRsQ4YifQsczT6"
  },
  {
    date: new Date("2026-01-24"),
    endDate: new Date("2026-01-25"),
    title: "Tournoi qualificatif championnat de France Ju jitsu- Ne waza",
    description: "Tournoi qualificatif championnat de France Ju jitsu- Ne waza",
    type: "competition",
    category: "Ju Jitsu",
    location: "Narbonne (à confirmer)",

  },
  {
    date: new Date("2026-01-24"),
    title: "Kagami Biraki",
    description: "Kagami Biraki",
    type: "event",
    category: "Autre",
    location: "Palais Des Sports Beziers Méditerranée", 
    locationUrl: "https://maps.app.goo.gl/vW1CRsQ4YifQsczT6"
  },
  {
    date: new Date("2026-01-24"),
    title: " Critériums benjamins et coupe jeunes officiels minimes",
    description: "Zones Méditerranée benjamins et coupe jeunes officiels minimes - Mèze",
    type: "competition",
    category: "Minimes",
    location: "Palais Des Sports Beziers Méditerranée", 
    locationUrl: "https://maps.app.goo.gl/vW1CRsQ4YifQsczT6"
  },
  {
    date: new Date("2026-02-15"),
    title: "Coupe Occitanie minimes et Coupe Occitanie jeunes officiels cadets",
    description: "Coupe Occitanie minimes et Coupe Occitanie jeunes officiels cadets - Maison du judo Toulouse",
    type: "competition",
    category: "Minimes - Arbitrage Cadet",
    location: "Chem. Cassaing, 31500 Toulouse",
    locationUrl: "https://maps.app.goo.gl/YZSwbWm7g3esaqbu6"
  },
  {
    title: "Stage Benjamins",
    date: new Date("2026-02-21"), // date ou date de début
    endDate: new Date("2026-02-23"), // date de fin si plusieurs jours
    // registrationDeadline: new Date("2025-08-12"), // date limite d'inscription
    description: "Stage départemental compétiteurs",
    type: "training", // compétitions, stages ou évènements général
    category: "Benjamins", // publics concernés
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
  },
  {
    title: "Stage Minimes Cadets Juniors",
    date: new Date("2026-02-23"), // date ou date de début
    endDate: new Date("2026-02-25"), // date de fin si plusieurs jours
    // registrationDeadline: new Date("2025-08-12"), // date limite d'inscription
    description: "Stage départemental compétiteurs",
    type: "training", // compétitions, stages ou évènements général
    category: "Minimes+", // publics concernés
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
  },
  {
    date: new Date("2026-03-14"),
    endDate: new Date("2026-03-15"),
    title: "Championnnat de France seniors Jjitsu et Ne Waza",
    description: "Championnnat de France seniors Jjitsu et Ne Waza",
    type: "event",
    category: "Ju Jitsu",
    location: "Lormont (à préciser)"
  },
  {
    date: new Date("2026-03-21"),
    title: "UV1 KATA ET UV2 TECHNIQUE 1D, 2D, 3D & 4D",
    description: "UV1 KATA ET UV2 TECHNIQUE 1D, 2D, 3D & 4D - CD30",
    type: "event",
    category: "Autre",
    location: "Vauvert"
  },
  {
    date: new Date("2026-03-22"),
    title: "UV3 1D au 3eme Dans",
    description: "Shiai - CD30",
    type: "event",
    category: "Autre",
    location: "Vauvert"
  },
  {
    date: new Date("2026-03-21"),
    endDate: new Date("2026-03-22"),
    title: "Coupe de France minimes",
    description: "Coupe de France minimes",
    type: "competition",
    category: "Minimes",
    location: "Villebon-sur-Yvette",
    locationUrl: "https://maps.app.goo.gl/zMFWc7k84ghmWgjQ8"
  },
  {
    date: new Date("2026-03-28"),
    title: "Zone Méditerranée Benjamins",
    description: "Zone benjamins et coupe de Zone jeunes officiels minimes",
    type: "competition",
    category: "Benjamins - Arbitrage Minimes",
    location: "Marvejols"
  },
  {
    date: new Date("2026-04-03"),
    title: "Séance Parents-Enfants",
    description: "Séance Parents-Enfants - Sauvian",
    type: "event",
    category: "Club",
    location: "26 Rue des Tulipes, 34410 Sauvian", 
    locationUrl: "https://maps.app.goo.gl/3cPcEGXFb8XW63sVA" 

  },
  {
    date: new Date("2026-04-04"),
    title: "Séance Parents-Enfants",
    description: "Séance Parents-Enfants - Villeneuve-Thezan",
    type: "event",
    category: "Club"
  },
  {
    date: new Date("2026-04-12"),
    title: "Open Kata",
    description: "Tournoi de Kata",
    type: "event",
    category: "Benjamins et +",
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",
  },
  {
    date: new Date("2026-04-18"),
    title: " Occitanie benjamins et coupe jeunes officiels minimes",
    description: "Région Occitanie benjamins et coupe jeunes officiels minimes - Mèze",
    type: "competition",
    category: "Minimes",
    location: "18B Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/RRADUKUoXfEDa7Ko9"
  },
  {
    date: new Date("2026-04-25"),
    title: "Passage de Grade anticipé - DATE A CONFIRMER",
    description: "Passage de Grade anticipé - Villeneuve-lès-Béziers",
    type: "event",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationDeadline: new Date("2026-04-22"),
    registrationUrl: "https://forms.gle/6BEwRAzCKSUUyxDL7"
  },
  {
    date: new Date("2026-04-25"),
    endDate: new Date("2026-04-26"), // date de fin si plusieurs jours
    title: "Stage de paques (2 jours) DATE A CONFIRMER",
    description: "Stage de paques (2 jours) - Villeneuve-lès-Béziers",
    type: "training",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://www.helloasso.com/associations/harmonie-sport/evenements/stage-de-paques-2025-judo-ajbb", // URL de l'inscription
    registrationDeadline: new Date("2026-04-22"),
    
  },
  {
    date: new Date("2026-05-09"),
    endDate: new Date("2026-05-10"),
    title: "Coupe de France minimes par équipes de département",
    description: "Coupe de France minimes par équipes de département - A préciser",
    type: "competition",
    category: "Minimes",
    location: "Villebon sur Yvette"
  },
  {
    date: new Date("2026-05-30"),
    title: "Journée Plage Ados",
    description: "Journée Plage Ados - Valras",
    type: "event",
    category: "Club",
    location: "2 Bd Jean Moulin, 34350 Valras-Plage", 
    locationUrl: "https://maps.app.goo.gl/fb15FKAJu2sJUjwc6",
    registrationUrl: "https://forms.gle/gCCvsHEpjwvF7Kku8", // URL de l'inscription
    registrationDeadline: new Date("2026-05-16"), // date limite d'inscription
  },
  {
    date: new Date("2026-06-06"),
    endDate: new Date("2026-06-07"),
    title: "Passage de Grade",
    description: "Passage de Grade - Villeneuve-lès-Béziers",
    type: "event",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://forms.gle/W7iMMvLckgqyxCXm7", // URL de l'inscription
    registrationDeadline: new Date("2026-05-23"), // date limite d'inscription
  },
  {
    date: new Date("2026-06-13"),
    title: "Fete de fin d'année",
    description: "Fete de fin d'année - Villeneuve-lès-Béziers",
    type: "event",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://forms.gle/hiydtkeMiqYYgWcq6", // URL de l'inscription
    registrationDeadline: new Date("2026-05-31"), // date limite d'inscription
  },
  {
    date: new Date("2026-06-14"),
    title: "UV3 1D, 2D, 3D & 4D et UV4 3D & 4D",
    description: "UV3 1D, 2D, 3D & 4D et UV4 3D & 4D - Maison du judo Toulouse",
    type: "event",
    category: "Autre",
    location: "Chem. Cassaing, 31500 Toulouse",
    locationUrl: "https://maps.app.goo.gl/YZSwbWm7g3esaqbu6"
  },
  {
    date: new Date("2026-07-04"),
    endDate: new Date("2026-07-05"),
    title: "Summer Camp - DATE A CONFIRMER",
    description: "Summer Camp - Villeneuve-lès-Béziers",
    type: "event",
    category: "Club",
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8",
    registrationUrl: "https://www.helloasso.com/associations/harmonie-sport/evenements/summer-camp-judo-2026-ajbb",
    registrationDeadline: new Date("2026-06-29")
  },
  // Événements d'août et septembre 2025
  {
    date: new Date(2025, 8, 8), // 8 septembre 2025
    endDate: new Date(2025, 8, 14), // 14 septembre 2025
    title: "Reprise des cours",
    description: "Reprise des entraînements pour toutes les catégories - Semaine du 8 au 14 septembre",
    type: "event",
    category: "Club"
  },
/*
  {
    title: "Vital Sports",
    date: new Date("2026-01-24"), // date ou date de début
    endDate: new Date("2026-01-25"), // date de fin si plusieurs jours
    registrationDeadline: new Date("2025-08-12"), // date limite d'inscription
    description: "Vital Sports - Villeneuve-lès-Béziers",
    type: "event", // compétitions, stages ou évènements général
    category: "Club", // publics concernés
    registrationUrl: "https://forms.gle/9YLWAFgPpC72NYP29", // URL de l'inscription
    location: "Rue Antoine de Saint-Exupéry, 34490 Thézan-lès-Béziers", // adresse indiqué sur le site web
    locationUrl: "https://maps.app.goo.gl/43a6zSveVgwm777i9" //URL du point google maps
  },
*/
];

/*

Mèze adresse
    location: "18B Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/RRADUKUoXfEDa7Ko9"

Mèze Dojo Taurus
    location: "9 Rue de la Méditerranée, 34140 Mèze",
    locationUrl: "https://maps.app.goo.gl/zWyY26x6sba5BWqK6",

Narbonne Adresse
    location: "R1 Av. de la Naiade, 11100 Narbonne",
    locationUrl: "https://maps.app.goo.gl/VhC3ozm9KMM5nRrk9" //URL du point google maps

Villeneuve adresse
    location: "Chem. Saint-Michel, 34420 Villeneuve-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/P5oGn9KirN87yKZW8" 

Sauvian adresse
    location: "26 Rue des Tulipes, 34410 Sauvian", 
    locationUrl: "https://maps.app.goo.gl/3cPcEGXFb8XW63sVA" 

Thezan adresse
    location: "Rue Antoine de Saint-Exupéry, 34490 Thézan-lès-Béziers", 
    locationUrl: "https://maps.app.goo.gl/43a6zSveVgwm777i9"

Toulouse adresse 
    location: "Chem. Cassaing, 31500 Toulouse",
    locationUrl: "https://maps.app.goo.gl/YZSwbWm7g3esaqbu6"

Villebon-sur-Yvette
    location: "Le Grand Dôme, Villebon-sur-Yvette",
    locationUrl: "https://maps.app.goo.gl/zMFWc7k84ghmWgjQ8
*/