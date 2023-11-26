import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PhotoList = () => {
     const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos", error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <div>
      <h1>Фото з альбому</h1>
      <ul className="photos">
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
