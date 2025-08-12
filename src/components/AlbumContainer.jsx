function AlbumContainer({ albums }) {
  if (!albums || albums.length === 0) {
    return <div className="text-center text-gray-500">No albums found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 p-4 px-20">
      {albums.map((album, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow text-center overflow-hidden">
          <a href={album.url}>
            <img src={album.imgSrc} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default AlbumContainer;
