# Guide de la Page Photos

## Vue d'ensemble

La page Photos a été ajoutée au site AJBB pour afficher des galeries photos organisées par albums. Le système détecte automatiquement les photos depuis le dossier `public/img/picture/`.

## Fonctionnalités

### 1. Détection automatique des albums
- Les albums sont automatiquement détectés en scannant les sous-dossiers de `public/img/picture/`
- Chaque sous-dossier = un album
- Aucune configuration manuelle nécessaire

### 2. Affichage des albums
- Page principale avec grille d'albums
- Image de couverture (première photo du dossier)
- Nom formaté automatiquement (ex: `Remise-de-grade-2025` → "Remise De Grade 2025")
- Nombre de photos par album

### 3. Galerie photo
- Clic sur un album pour voir toutes ses photos
- Grille responsive (2 colonnes mobile, 3 tablette, 4 desktop)
- Lazy loading des images pour performances optimales

### 4. Lightbox
- Clic sur une photo pour vue plein écran
- Navigation avec flèches ou clavier (←, →, Escape)
- Compteur de photos (ex: "3 / 15")
- Animations fluides

## Structure des fichiers

```
public/img/picture/
├── README.md                    # Documentation
├── Remise-de-grade-2025/       # Album 1
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
├── Stage-Toussaint-2025/       # Album 2
│   ├── photo1.jpg
│   └── ...
└── Noel-du-club-2025/          # Album 3
    ├── photo1.jpg
    └── ...
```

## Fichiers créés

### Pages et composants
- `src/pages/Photos.tsx` - Page principale
- `src/components/PhotoGallery.tsx` - Composant de galerie
- `src/components/Lightbox.tsx` - Composant lightbox

### Utilitaires
- `src/utils/albums.ts` - Logique de chargement des albums via Vite

### Modifications
- `src/App.tsx` - Ajout de la route `/photos`
- `src/components/Header.tsx` - Ajout du lien "Photos" dans la navigation
- `src/components/Footer.tsx` - Ajout du lien "Photos" dans le footer

## Comment ajouter des photos ?

### Méthode simple :
1. Créez un dossier dans `public/img/picture/` (ex: `Competition-2026`)
2. Ajoutez vos photos dans ce dossier
3. C'est tout ! L'album apparaît automatiquement

### Conventions de nommage :
- Utilisez des tirets pour séparer les mots
- Évitez espaces et accents dans les noms de dossiers
- Exemples valides :
  - `Tournoi-Regional-2026`
  - `Stage-Ete-2026`
  - `Photos-Entrainement-Fevrier`

### Formats supportés :
- JPG/JPEG
- PNG
- WebP

## Optimisation des performances

Le système inclut plusieurs optimisations :

1. **Lazy loading** - Les images se chargent uniquement quand elles deviennent visibles
2. **Tri automatique** - Les photos sont triées par nom de fichier
3. **Albums triés** - Les albums sont affichés du plus récent au plus ancien (par nom)

## Responsive Design

La page s'adapte automatiquement à tous les écrans :
- Mobile : 2 colonnes
- Tablette : 3 colonnes
- Desktop : 4 colonnes

## Navigation

La page Photos est accessible depuis :
- Header : lien "Photos"
- Footer : section Navigation
- URL directe : `/photos`

## Technologie utilisée

- **import.meta.glob** (Vite) - Détection automatique des images
- **React Hooks** - Gestion d'état
- **Tailwind CSS** - Styles et responsive
- **Lucide React** - Icônes

## Limitations

- Les images doivent être dans `public/img/picture/` (pas de sous-sous-dossiers)
- Le système ne gère pas les métadonnées EXIF (dates, géolocalisation)
- Pas de pagination (toutes les photos d'un album sont chargées)

## Conseils

1. **Nommez vos fichiers** de manière cohérente (ex: `photo-001.jpg`, `photo-002.jpg`)
2. **Optimisez vos images** avant de les ajouter (redimensionner, compresser)
3. **Créez des albums thématiques** plutôt que tout mettre dans un seul dossier
4. **Testez sur mobile** pour vous assurer que les images se chargent rapidement

## Exemple d'utilisation

1. Vous organisez une compétition en mars 2026
2. Créez le dossier : `public/img/picture/Competition-Mars-2026/`
3. Ajoutez vos photos dedans
4. Rafraîchissez la page `/photos`
5. L'album "Competition Mars 2026" apparaît automatiquement
