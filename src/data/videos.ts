export interface VideoItem {
  platform: 'tiktok' | 'instagram' | 'facebook';
  url: string;
}

export const videos: VideoItem[] = [
  { platform: 'tiktok', url: 'https://www.tiktok.com/@ajbb707/video/7562133979218922774' },
  { platform: 'tiktok', url: 'https://www.tiktok.com/@ajbb707/video/7600865521931930883' },
  { platform: 'instagram', url: 'https://www.instagram.com/p/DakOltFNjWR/' },
  { platform: 'instagram', url: 'https://www.instagram.com/p/DZpG8A-NpJV/' },
  // Ajouter ici les liens de publications Facebook publiques à mettre en avant :
  // { platform: 'facebook', url: 'https://www.facebook.com/.../posts/...' },
];
