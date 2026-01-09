export interface Photo {
  src: string;
  name: string;
  albumName: string;
}

export interface Album {
  id: string;
  name: string;
  displayName: string;
  photos: Photo[];
  coverPhoto: string;
}

const formatAlbumName = (folderName: string): string => {
  return folderName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const loadAlbums = (): Album[] => {
  const imageModules = import.meta.glob('/public/img/picture/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

  const albumsMap = new Map<string, Photo[]>();

  Object.entries(imageModules).forEach(([path, url]) => {
    const match = path.match(/\/picture\/([^\/]+)\/(.+)\.(jpg|jpeg|png|webp)$/);
    if (match) {
      const [, albumFolder, fileName] = match;

      if (!albumsMap.has(albumFolder)) {
        albumsMap.set(albumFolder, []);
      }

      albumsMap.get(albumFolder)?.push({
        src: path.replace('/public', ''),
        name: fileName,
        albumName: albumFolder
      });
    }
  });

  const albums: Album[] = [];
  albumsMap.forEach((photos, albumId) => {
    if (photos.length > 0) {
      albums.push({
        id: albumId,
        name: albumId,
        displayName: formatAlbumName(albumId),
        photos: photos.sort((a, b) => a.name.localeCompare(b.name)),
        coverPhoto: photos[0].src
      });
    }
  });

  return albums.sort((a, b) => b.name.localeCompare(a.name));
};
