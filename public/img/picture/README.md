# Structure des Albums Photos

Ce dossier contient les albums photos du club AJBB.

## Organisation

Chaque sous-dossier représente un album qui sera automatiquement détecté et affiché sur la page Photos.

### Albums existants :

- `Remise-de-grade-2025/` - Photos de la remise de grade 2025
- `Stage-Toussaint-2025/` - Photos du stage de la Toussaint 2025
- `Noel-du-club-2025/` - Photos de la fête de Noël du club 2025

## Comment ajouter un nouvel album ?

1. Créez un nouveau dossier dans `public/img/picture/`
2. Nommez-le en utilisant des tirets (ex: `Tournoi-Beziers-2026`)
3. Ajoutez vos photos (formats acceptés : .jpg, .jpeg, .png, .webp)
4. L'album apparaîtra automatiquement sur la page Photos

## Conventions de nommage

- Utilisez des tirets `-` pour séparer les mots
- Évitez les espaces et caractères spéciaux
- Exemple : `Stage-Printemps-2026`, `Competition-Regionale-2026`

Le nom sera automatiquement formaté pour l'affichage :
- `Remise-de-grade-2025` → "Remise De Grade 2025"
- `Stage-Toussaint-2025` → "Stage Toussaint 2025"

## Formats d'images supportés

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)

## Optimisation

Pour de meilleures performances :
- Redimensionnez les photos à une largeur max de 1920px
- Compressez les images pour réduire la taille des fichiers
- Les photos sont chargées en lazy loading automatiquement
