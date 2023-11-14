import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './videogamescards.css'; // Importa el archivo de estilos


const VideoGamesCards = () => {
  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/videogames');
        setVideogames(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Videogames</h2>
      <div className="videogames-container">
        {videogames.map((game) => (
          <div key={game.id} className="videogame-card">
            <img src={game.image} alt={game.name} />
        
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
            <p>Source: {game.source}</p>
            <p>Genres: {game.genres}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGamesCards;
