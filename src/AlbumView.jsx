import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const AlbumView = () => {
  const { id } = useParams();

  const [photos, setPhotos] = useState([]);
  const fetchPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch tha data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="container">
      {photos.map((photo) => (
        <div className="card" key={`photo-${photo.id}`}>
          <img className="card-img" src={photo.url} alt={photo.title} />
          <p className="card-title">{photo.title}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AlbumView;
