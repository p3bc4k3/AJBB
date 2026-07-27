import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  baseSpeedY: number;
  speedY: number;
  speedX: number;
  angle: number;
  spin: number;
  color: string;
}

const PETAL_COUNT = 32;
const HEADER_HEIGHT_OFFSET = 0;

const randomPetalColor = () =>
  `rgba(255, ${Math.floor(Math.random() * 50) + 140}, ${Math.floor(Math.random() * 40) + 180}, ${(
    Math.random() * 0.35 + 0.45
  ).toFixed(2)})`;

// Fond décoratif discret (pétales de cerisier) : canvas fixe en arrière-plan,
// n'intercepte jamais les clics et se met en pause si l'onglet est masqué ou
// si l'utilisateur a demandé moins d'animations (prefers-reduced-motion).
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
      y: spawnAtRandomY
        ? Math.random() * height
        : scrollSpeed >= 0
          ? -20 - HEADER_HEIGHT_OFFSET
          : height + 20,
      size: Math.random() * 8 + 6,
      baseSpeedY: Math.random() * 0.7 + 0.35,
      speedY: 0,
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

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.angle);
      ctx.fillStyle = petal.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, petal.size, petal.size / 1.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawStaticFrame = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach(drawPetal);
    };

    const animate = () => {
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.speedY = petal.baseSpeedY + scrollSpeed * 0.15;
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.angle) * 0.5;
        petal.angle += petal.spin;

        if (petal.y > height + 20 || petal.y < -20 || petal.x > width + 20 || petal.x < -20) {
          Object.assign(petal, randomPetal(false));
        }

        drawPetal(petal);
      });

      scrollSpeed *= 0.95;
      animationFrameId = requestAnimationFrame(animate);
    };

    // Sous prefers-reduced-motion, on affiche les pétales figés (pas de rAF)
    // plutôt que de masquer totalement l'effet.
    const handleResize = prefersReducedMotion
      ? () => {
          resize();
          drawStaticFrame();
        }
      : resize;

    resize();
    window.addEventListener('resize', handleResize);

    if (prefersReducedMotion) {
      drawStaticFrame();
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('visibilitychange', handleVisibilityChange);
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none cherry-blossom-gradient" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full opacity-70" />
    </div>
  );
};

export default CherryBlossomBackground;
