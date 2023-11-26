import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const AlbumList = () => {
    const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums", error);
      }
    };

    fetchAlbums();
  }, [userId]);

  return (
    <div>
      <h1>Список альбомів користувача</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <Link to={`/photos/${album.id}`}> Дивитись фото..</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
