function AlbumContainer({ albums }) {
  if (!albums || albums.length === 0) {
    return <div className="text-center text-gray-500">No albums found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {albums.map((album, idx) => (
        <div key={idx} className="bg-white rounded shadow p-4 text-center">
          <img src={album.imgSrc} alt="" />
          <div className="text-lg font-semibold">{album.name}</div>
          <a href={album.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            Listen
          </a>
        </div>
      ))}
    </div>
  );
}

export default AlbumContainer;
