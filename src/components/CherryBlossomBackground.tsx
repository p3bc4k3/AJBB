import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  baseSpeedY: number;
  speedX: number;
  angle: number;
  spin: number;
  color: string;
}

const PETAL_COUNT = 45;

const randomPetalColor = () =>
  `rgba(255, ${Math.floor(Math.random() * 30) + 205}, ${Math.floor(Math.random() * 20) + 220}, ${(
    Math.random() * 0.2 + 0.18
  ).toFixed(2)})`;

// Fond décoratif discret (pétales de cerisier) : canvas fixe en arrière-plan,
// n'intercepte jamais les clics, tombe en continu (indépendamment du scroll),
// et se met en pause si l'onglet est masqué. Sous prefers-reduced-motion, la
// chute lente reste (mouvement doux, non gêné par le scroll) mais l'effet de
// parallaxe lié au scroll est désactivé.
const CherryBlossomBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;
    let animationFrameId = 0;
    let isTabVisible = document.visibilityState === 'visible';

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const randomPetal = (spawnAtRandomY: boolean): Petal => ({
      x: Math.random() * width,
      y: spawnAtRandomY ? Math.random() * height : -20,
      size: Math.random() * 5 + 4,
      baseSpeedY: Math.random() * 0.5 + 0.3,
      speedX: Math.random() * 1 - 0.5,
      angle: Math.random() * Math.PI * 2,
      spin: Math.random() * 0.02 - 0.01,
      color: randomPetalColor(),
    });

    const petals: Petal[] = Array.from({ length: PETAL_COUNT }, () => randomPetal(true));

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeed = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
      if (isTabVisible) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Chute continue et lente en toutes circonstances ; le scroll n'ajoute
      // qu'un léger effet de parallaxe (désactivé si l'utilisateur préfère
      // moins d'animations).
      const parallax = prefersReducedMotion ? 0 : scrollSpeed * 0.15;

      petals.forEach((petal) => {
        petal.y += petal.baseSpeedY + parallax;
        petal.x += petal.speedX + Math.sin(petal.angle) * 0.5;
        petal.angle += petal.spin;

        if (petal.y > height + 20 || petal.x > width + 20 || petal.x < -20) {
          Object.assign(petal, randomPetal(false));
        }

        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate(petal.angle);
        ctx.fillStyle = petal.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, petal.size, petal.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      scrollSpeed *= 0.95;
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none cherry-blossom-gradient" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full opacity-50" />
    </div>
  );
};

export default CherryBlossomBackground;
