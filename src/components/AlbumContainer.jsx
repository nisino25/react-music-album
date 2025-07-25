function AlbumContainer({ albums }) {
  if (!albums || albums.length === 0) {
    return <div className="text-center text-gray-500">No albums found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {albums.map((album, idx) => (
        <div key={idx} className="bg-white rounded shadow p-4 text-center">
          <a href={album.url}>
            <img src={album.imgSrc} alt="" />
            <div className="text-lg font-semibold text-grey">{album.name}</div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default AlbumContainer;
