/**
 * sakura.js — Effet de pétales de fleurs de cerisier en overlay.
 *
 * Fichier autonome, sans dépendance : à inclure une seule fois avec
 * <script src="/sakura.js" defer></script>
 *
 * Structure du fichier :
 *   1. Options (réglages à modifier soi-même)
 *   2. Classe Petal (une pétale : position, forme, mouvement)
 *   3. Gestion du vent global
 *   4. Boucle de rendu (mise à jour + dessin)
 *   5. Initialisation
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------
  // 1. OPTIONS — à régler soi-même, aucune autre valeur du fichier n'a
  //    besoin d'être touchée pour ajuster l'effet.
  // ---------------------------------------------------------------------
  const OPTIONS = {
    // Densité : nombre de pétales par px² de viewport. Environ 1 pétale
    // pour 50 000 px² donne ~35-45 pétales sur un écran desktop 1080p
    // (1920×1080). Diminuer ce nombre = plus de pétales.
    petalsPerPx2: 1 / 50000,

    // Nombre maximum de pétales, quelle que soit la taille de l'écran.
    // Le canvas étant maintenant en overlay (au-dessus du contenu), c'est
    // le premier réglage à baisser si l'effet paraît trop chargé.
    maxPetals: 60,

    // En dessous de cette largeur (px), on considère qu'on est sur mobile.
    mobileBreakpoint: 768,

    // Sur mobile, on garde environ 60% du nombre de pétales (soit ~40% de moins).
    mobileDensityFactor: 0.6,

    // Taille des pétales, en pixels (avant mise à l'échelle par le zoom navigateur).
    minSize: 8,
    maxSize: 18,

    // Opacité de chaque pétale (avant dégradé interne). Volontairement basse
    // car le canvas passe désormais devant le texte.
    minOpacity: 0.3,
    maxOpacity: 0.6,

    // Multiplicateur global appliqué à TOUTES les opacités (pétales, y
    // compris l'atténuation de profil). 1 = valeurs ci-dessus inchangées.
    // Réglage à toucher en premier pour tout atténuer/renforcer d'un coup
    // sans changer minOpacity/maxOpacity.
    globalOpacity: 1,

    // Durée (en secondes) pour qu'une pétale traverse tout l'écran en tombant.
    // Une valeur haute = chute plus lente/apaisante.
    minFallDuration: 10,
    maxFallDuration: 20,

    // Palette de rose, du plus soutenu (base de la pétale) au plus pâle (pointe).
    // Modifier ces couleurs change l'ambiance globale (plus vif / plus pastel).
    palette: {
      baseStrong: '#F8B3C9', // base la plus soutenue (grandes pétales, premier plan)
      baseSoft: '#FFC0D3', // base plus douce (petites pétales, arrière-plan)
      tipStrong: '#FFD7E4', // pointe pour les grandes pétales
      tipSoft: '#FFE9F0', // pointe pour les petites pétales (quasi blanc rosé)
    },

    // Vent : amplitude du balancement horizontal global (px/s) et vitesse
    // à laquelle le vent "de fond" évolue dans le temps.
    windAmplitude: 18,
    windEvolutionSpeed: 0.15,

    // Rafales occasionnelles : intervalle moyen (secondes) entre deux
    // rafales, et force additionnelle max qu'elles peuvent ajouter au vent.
    gustAverageInterval: 9,
    gustMaxStrength: 14,

    // Léger flou sur les petites pétales (profondeur de champ). Maintenu actif
    // volontairement : ça évite que les pétales au premier plan ne paraissent
    // "collées" au texte en dessous.
    enableDepthBlur: true,

    // Couleur de base pour l'ombre légère derrière chaque pétale (0 = désactivée).
    // Laisser à 0 pour un rendu totalement plat/discret.
    shadowBlur: 0,
  };

  // ---------------------------------------------------------------------
  // Mise en place du canvas (styles injectés, pas de fichier CSS séparé)
  // ---------------------------------------------------------------------
  const canvas = document.createElement('canvas');
  canvas.id = 'sakura-canvas';
  document.body.appendChild(canvas);

  // Injecté en dernier enfant de <head> (donc après le CSS de Tailwind dans
  // l'ordre du DOM) + !important sur les 3 propriétés qui comptent, pour
  // garantir que rien ne peut repasser par-dessus par accident.
  const style = document.createElement('style');
  style.textContent = `
    #sakura-canvas {
      position: fixed !important;
      inset: 0;
      width: 100vw;
      /* 100% (pas 100vh) : sur mobile, 100vh inclut la zone sous la barre
         d'URL du navigateur et décale le canvas. En position fixed, 100%
         se calcule sur le viewport visuel réel, comme window.innerHeight. */
      height: 100%;
      /* Le canvas est au-dessus de TOUT le contenu (header, menu, lightbox
         compris) pour rester visible malgré les fonds opaques des sections.
         pointer-events: none garantit qu'il n'intercepte jamais un clic :
         voir la vérification dans la réponse qui accompagne ce fichier. */
      pointer-events: none !important;
      z-index: 2147483000 !important;
    }
  `;
  document.head.appendChild(style);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // ---------------------------------------------------------------------
  // 2. CLASSE PETAL — une pétale : sa géométrie, sa couleur, son mouvement
  // ---------------------------------------------------------------------

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  class Petal {
    constructor(viewport, spawnAnywhere) {
      this.reset(viewport, spawnAnywhere);
    }

    // (Ré)initialise la pétale avec de nouveaux paramètres aléatoires.
    // spawnAnywhere = true au chargement (réparties sur toute la hauteur),
    // false lors d'un recyclage (réapparaît en haut).
    reset(viewport, spawnAnywhere) {
      this.x = randomBetween(0, viewport.width);
      this.y = spawnAnywhere ? randomBetween(0, viewport.height) : randomBetween(-40, -10);

      this.size = randomBetween(OPTIONS.minSize, OPTIONS.maxSize);

      // Les petites pétales (plus "loin") sont plus pâles et plus transparentes.
      const depth = (this.size - OPTIONS.minSize) / (OPTIONS.maxSize - OPTIONS.minSize); // 0 = petite/loin, 1 = grande/proche
      this.depth = depth;
      this.opacity = OPTIONS.minOpacity + depth * (OPTIONS.maxOpacity - OPTIONS.minOpacity);

      // Vitesse de chute : traverse l'écran en [minFallDuration, maxFallDuration] s.
      const fallDuration = randomBetween(OPTIONS.minFallDuration, OPTIONS.maxFallDuration);
      this.fallSpeed = viewport.height / fallDuration; // px/s

      // Sensibilité individuelle au vent global (variété entre pétales).
      this.windSensitivity = randomBetween(0.5, 1.5);

      // Balancement horizontal : deux ondes sinusoïdales combinées, de
      // fréquences/amplitudes différentes, pour éviter toute répétition.
      this.swayFreq1 = randomBetween(0.4, 0.8);
      this.swayAmp1 = randomBetween(10, 22);
      this.swayPhase1 = randomBetween(0, Math.PI * 2);
      this.swayFreq2 = randomBetween(1.1, 1.9);
      this.swayAmp2 = randomBetween(4, 10);
      this.swayPhase2 = randomBetween(0, Math.PI * 2);
      this.swayTime = randomBetween(0, 100); // déphasage temporel initial

      // Rotation "à plat" (orientation générale de la pétale dans le plan).
      this.tilt = randomBetween(0, Math.PI * 2);
      this.tiltSpeed = randomBetween(-0.6, 0.6);

      // Rotation "3D" simulée : fait varier la largeur affichée via cos(),
      // donnant l'impression que la pétale se retourne sur son axe.
      this.flip = randomBetween(0, Math.PI * 2);
      this.flipSpeed = randomBetween(0.5, 1.4) * (Math.random() < 0.5 ? -1 : 1);

      // Couleurs interpolées selon la profondeur (grande/proche vs petite/loin).
      this.colorBase = depth > 0.5 ? OPTIONS.palette.baseStrong : OPTIONS.palette.baseSoft;
      this.colorTip = depth > 0.5 ? OPTIONS.palette.tipStrong : OPTIONS.palette.tipSoft;
    }

    // Sort-elle de l'écran (bas ou côtés) ?
    isOffscreen(viewport) {
      return (
        this.y > viewport.height + 40 ||
        this.x < -40 ||
        this.x > viewport.width + 40
      );
    }

    update(dt, viewport, wind) {
      this.swayTime += dt;

      const sway =
        Math.sin(this.swayTime * this.swayFreq1 + this.swayPhase1) * this.swayAmp1 +
        Math.sin(this.swayTime * this.swayFreq2 + this.swayPhase2) * this.swayAmp2;

      // Déplacement horizontal = balancement propre + part du vent global.
      this.x += (sway * dt) / 2 + wind * this.windSensitivity * dt;

      // Chute verticale (lente, constante, indépendante du frame rate).
      this.y += this.fallSpeed * dt;

      this.tilt += this.tiltSpeed * dt;
      this.flip += this.flipSpeed * dt;

      if (this.isOffscreen(viewport)) {
        this.reset(viewport, false);
      }
    }

    draw(ctx) {
      const scaleX = Math.cos(this.flip); // simule le retournement 3D
      const absScaleX = Math.abs(scaleX);

      // Pétale quasiment de profil : inutile de la dessiner (gain de perf).
      if (absScaleX < 0.05) return;

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.tilt);
      ctx.scale(scaleX, 1);
      // globalOpacity multiplie tout : c'est LE réglage à toucher pour
      // atténuer/renforcer l'effet en un seul endroit.
      ctx.globalAlpha = this.opacity * (0.5 + 0.5 * absScaleX) * OPTIONS.globalOpacity;

      if (OPTIONS.enableDepthBlur && this.depth < 0.35) {
        ctx.filter = 'blur(0.6px)';
      }

      drawPetalShape(ctx, this.size, this.colorBase, this.colorTip);

      ctx.filter = 'none';
      ctx.restore();
    }
  }

  // Dessine la forme d'une pétale de sakura centrée en (0,0), pointant vers
  // le haut : base étroite, corps arrondi, légère échancrure en cœur à la
  // pointe. Dégradé de la base (soutenue) vers la pointe (pâle/translucide).
  function drawPetalShape(ctx, length, colorBase, colorTip) {
    const halfW = length * 0.42;

    const gradient = ctx.createLinearGradient(0, 0, 0, -length);
    gradient.addColorStop(0, colorBase);
    gradient.addColorStop(1, colorTip);

    ctx.beginPath();
    ctx.moveTo(0, 0); // base étroite (point d'attache)
    // Côté droit : élargissement vers le corps arrondi puis vers le lobe droit de la pointe
    ctx.bezierCurveTo(
      halfW * 0.9, -length * 0.18,
      halfW, -length * 0.6,
      halfW * 0.32, -length * 0.94
    );
    // Petite échancrure en cœur au sommet
    ctx.quadraticCurveTo(0, -length * 0.82, -halfW * 0.32, -length * 0.94);
    // Côté gauche (symétrique), retour vers la base
    ctx.bezierCurveTo(
      -halfW, -length * 0.6,
      -halfW * 0.9, -length * 0.18,
      0, 0
    );
    ctx.closePath();

    ctx.fillStyle = gradient;
    ctx.fill();
  }

  // ---------------------------------------------------------------------
  // 3. GESTION DU VENT GLOBAL
  // ---------------------------------------------------------------------
  // Vent de fond : combinaison de sinusoïdes lentes de fréquences
  // différentes (pseudo-bruit de Perlin, sans dépendance externe), auquel
  // s'ajoutent d'occasionnelles rafales douces (jamais de à-coup brutal).

  const wind = {
    time: 0,
    gustCurrent: 0,
    gustTarget: 0,
    nextGustAt: randomBetween(OPTIONS.gustAverageInterval * 0.5, OPTIONS.gustAverageInterval * 1.5),
  };

  function updateWind(dt) {
    wind.time += dt;

    // Vent de fond doux, jamais nul, évoluant lentement.
    const base =
      Math.sin(wind.time * OPTIONS.windEvolutionSpeed) * 0.6 +
      Math.sin(wind.time * OPTIONS.windEvolutionSpeed * 2.3 + 1.7) * 0.4;

    // Déclenche une nouvelle rafale de temps en temps, avec une intensité aléatoire.
    wind.nextGustAt -= dt;
    if (wind.nextGustAt <= 0) {
      wind.gustTarget = randomBetween(-OPTIONS.gustMaxStrength, OPTIONS.gustMaxStrength);
      wind.nextGustAt = randomBetween(
        OPTIONS.gustAverageInterval * 0.5,
        OPTIONS.gustAverageInterval * 1.5
      );
    }

    // Interpolation douce vers l'intensité cible : jamais de saut brutal.
    wind.gustCurrent += (wind.gustTarget - wind.gustCurrent) * Math.min(dt * 0.5, 1);

    return base * OPTIONS.windAmplitude + wind.gustCurrent;
  }

  // ---------------------------------------------------------------------
  // 4. BOUCLE DE RENDU
  // ---------------------------------------------------------------------

  const viewport = { width: window.innerWidth, height: window.innerHeight };
  let petals = [];
  let animationFrameId = null;
  let lastTimestamp = null;

  function computePetalCount() {
    const area = viewport.width * viewport.height;
    let count = Math.round(area * OPTIONS.petalsPerPx2);
    if (viewport.width < OPTIONS.mobileBreakpoint) {
      count = Math.round(count * OPTIONS.mobileDensityFactor);
    }
    return Math.min(count, OPTIONS.maxPetals);
  }

  function resize() {
    viewport.width = window.innerWidth;
    viewport.height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = viewport.width * dpr;
    canvas.height = viewport.height * dpr;
    canvas.style.width = viewport.width + 'px';
    canvas.style.height = viewport.height + 'px';
    // On réinitialise la matrice puis on met à l'échelle du devicePixelRatio :
    // tout le reste du code dessine ensuite en pixels CSS "normaux".
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Ajuste le nombre de pétales si besoin (redimensionnement de fenêtre,
    // rotation d'écran mobile) sans tout recréer.
    const targetCount = computePetalCount();
    if (targetCount > petals.length) {
      for (let i = petals.length; i < targetCount; i++) {
        petals.push(new Petal(viewport, true));
      }
    } else if (targetCount < petals.length) {
      petals.length = targetCount;
    }
  }

  // Debounce (~150ms) : une rotation d'écran mobile déclenche plusieurs
  // événements resize rapprochés — on ne recalcule qu'une fois la taille
  // stabilisée, pas à chaque événement.
  let resizeTimeoutId = null;
  function debouncedResize() {
    if (resizeTimeoutId !== null) {
      clearTimeout(resizeTimeoutId);
    }
    resizeTimeoutId = setTimeout(resize, 150);
  }

  function render(timestamp) {
    if (lastTimestamp === null) lastTimestamp = timestamp;
    // Delta time en secondes, plafonné pour éviter un saut énorme si l'onglet
    // reprend la main après une longue pause.
    const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
    lastTimestamp = timestamp;

    const currentWind = updateWind(dt);

    ctx.clearRect(0, 0, viewport.width, viewport.height);

    for (let i = 0; i < petals.length; i++) {
      petals[i].update(dt, viewport, currentWind);
      petals[i].draw(ctx);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  function start() {
    lastTimestamp = null;
    animationFrameId = requestAnimationFrame(render);
  }

  function stop() {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  // Pause complète quand l'onglet est masqué (économie CPU/batterie).
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  window.addEventListener('resize', debouncedResize);

  // ---------------------------------------------------------------------
  // 5. INITIALISATION
  // ---------------------------------------------------------------------
  resize(); // calcule la taille du canvas ET crée les pétales manquantes

  // Réparties sur toute la hauteur de l'écran dès le chargement (pas
  // toutes en haut) : déjà géré par `new Petal(viewport, true)` dans resize().

  start();

  // TEMPORAIRE — diagnostic à retirer une fois le rendu confirmé dans le
  // navigateur (demandé pour valider que le script tourne bien et que le
  // z-index appliqué est le bon).
  console.log(
    '[sakura.js] pétales créées :', petals.length,
    '| z-index effectif du canvas :', window.getComputedStyle(canvas).zIndex
  );
})();
