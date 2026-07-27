import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_ROUTES, SEO_DEFAULT, SITE_URL, DEFAULT_OG_IMAGE } from '../config/seo';

const setMetaByName = (name: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setMetaByProperty = (property: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

// Met à jour title/description/canonical/OG/Twitter à chaque changement de route,
// pour que chaque page du site (SPA) ait ses propres métadonnées SEO et de partage.
const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const entry = SEO_ROUTES[location.pathname] ?? SEO_DEFAULT;
    const url = `${SITE_URL}${location.pathname}`;
    const image = entry.image ?? DEFAULT_OG_IMAGE;

    document.title = entry.title;
    setMetaByName('description', entry.description);
    setCanonical(url);

    setMetaByProperty('og:title', entry.title);
    setMetaByProperty('og:description', entry.description);
    setMetaByProperty('og:url', url);
    setMetaByProperty('og:image', image);
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:site_name', 'Alliance Judo Bassin Biterrois');
    setMetaByProperty('og:locale', 'fr_FR');

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', entry.title);
    setMetaByName('twitter:description', entry.description);
    setMetaByName('twitter:image', image);
  }, [location.pathname]);

  return null;
};

export default SeoManager;
