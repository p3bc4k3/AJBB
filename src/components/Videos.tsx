import React, { useEffect } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { videos } from '../data/videos';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const TIKTOK_EMBED_SRC = 'https://www.tiktok.com/embed.js';
const INSTAGRAM_EMBED_SRC = 'https://www.instagram.com/embed.js';

const getTikTokVideoId = (url: string) => url.split('/video/')[1]?.split(/[?#]/)[0] ?? '';

const reloadTikTokScript = () => {
  document.querySelectorAll(`script[src="${TIKTOK_EMBED_SRC}"]`).forEach((el) => el.remove());
  const script = document.createElement('script');
  script.src = TIKTOK_EMBED_SRC;
  script.async = true;
  document.body.appendChild(script);
};

const loadInstagramScript = () => {
  if (document.querySelector(`script[src="${INSTAGRAM_EMBED_SRC}"]`)) return;
  const script = document.createElement('script');
  script.src = INSTAGRAM_EMBED_SRC;
  script.async = true;
  document.body.appendChild(script);
};

const Videos = () => {
  const tiktokVideos = videos.filter((video) => video.platform === 'tiktok');
  const instagramVideos = videos.filter((video) => video.platform === 'instagram');
  const facebookPosts = videos.filter((video) => video.platform === 'facebook');

  useEffect(() => {
    if (tiktokVideos.length > 0) {
      reloadTikTokScript();
    }

    if (instagramVideos.length === 0) return;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    loadInstagramScript();
    const interval = setInterval(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-16">
      {tiktokVideos.length > 0 && (
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" className="text-gray-900">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900">TikTok</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {tiktokVideos.map((video) => (
              <blockquote
                key={video.url}
                className="tiktok-embed"
                cite={video.url}
                data-video-id={getTikTokVideoId(video.url)}
                style={{ maxWidth: '325px', minWidth: '260px' }}
              >
                <section />
              </blockquote>
            ))}
          </div>
        </div>
      )}

      {instagramVideos.length > 0 && (
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Instagram size={22} className="text-gray-900" />
            <h3 className="text-xl font-bold text-gray-900">Instagram</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {instagramVideos.map((video) => (
              <blockquote
                key={video.url}
                className="instagram-media"
                data-instgrm-permalink={video.url}
                data-instgrm-version="14"
                style={{ width: '100%', maxWidth: '340px' }}
              />
            ))}
          </div>
        </div>
      )}

      {facebookPosts.length > 0 && (
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Facebook size={22} className="text-gray-900" />
            <h3 className="text-xl font-bold text-gray-900">Facebook</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {facebookPosts.map((post) => (
              <div key={post.url} className="w-full max-w-[500px] overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(post.url)}&show_text=true&width=500`}
                  width="500"
                  height="600"
                  style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '500px' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={`Publication Facebook ${post.url}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
