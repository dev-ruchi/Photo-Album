import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  const fetchAlbumData = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch tha data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchAlbumData();
  }, []);

  return (
    <div>
      <h1>Album</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <Link to={`/albums/${album.id}`}>
            <h3>{album.title}</h3>
            <p>{album.url}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
