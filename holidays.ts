export interface Holiday {
  name: string;
  startDate: Date;
  endDate: Date;
  zone: string;
  type: 'vacation' | 'break';
}

// Vacances scolaires 2024-2025 et 2025-2026 - Zone C (Académie de Montpellier - Béziers)
export const holidays: Holiday[] = [
  // Vacances de la Toussaint 2024
  {
    name: "Vacances de la Toussaint",
    startDate: new Date("2024-10-19"),
    endDate: new Date("2024-11-04"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances de Noël 2024-2025
  {
    name: "Vacances de Noël",
    startDate: new Date("2024-12-21"),
    endDate: new Date("2025-01-06"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances d'hiver 2025
  {
    name: "Vacances d'hiver",
    startDate: new Date("2025-02-15"),
    endDate: new Date("2025-03-03"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances de printemps 2025
  {
    name: "Vacances de printemps",
    startDate: new Date("2025-04-12"),
    endDate: new Date("2025-04-28"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances d'été 2025
  {
    name: "Vacances d'été",
    startDate: new Date("2025-07-05"),
    endDate: new Date("2025-09-01"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances de la Toussaint 2025
  {
    name: "Vacances de la Toussaint",
    startDate: new Date("2025-10-18"),
    endDate: new Date("2025-11-03"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances de Noël 2025-2026
  {
    name: "Vacances de Noël",
    startDate: new Date("2025-12-20"),
    endDate: new Date("2026-01-05"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances d'hiver 2026
  {
    name: "Vacances d'hiver",
    startDate: new Date("2026-02-14"),
    endDate: new Date("2026-03-02"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances de printemps 2026
  {
    name: "Vacances de printemps",
    startDate: new Date("2026-04-11"),
    endDate: new Date("2026-04-27"),
    zone: "C",
    type: "vacation"
  },
  
  // Vacances d'été 2026
  {
    name: "Vacances d'été",
    startDate: new Date("2026-07-04"),
    endDate: new Date("2026-09-01"),
    zone: "C",
    type: "vacation"
  }
];

// Fonction utilitaire pour vérifier si une date est en vacances
export const isHoliday = (date: Date): Holiday | null => {
  const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  for (const holiday of holidays) {
    const startDate = new Date(holiday.startDate.getFullYear(), holiday.startDate.getMonth(), holiday.startDate.getDate());
    const endDate = new Date(holiday.endDate.getFullYear(), holiday.endDate.getMonth(), holiday.endDate.getDate());
    
    if (targetDate >= startDate && targetDate <= endDate) {
      return holiday;
    }
  }
  
  return null;
};

// Fonction pour obtenir les vacances d'une période donnée
export const getHolidaysInRange = (startDate: Date, endDate: Date): Holiday[] => {
  return holidays.filter(holiday => {
    return (holiday.startDate <= endDate && holiday.endDate >= startDate);
  });
};