import React from 'react';
import { useHistory } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  const history = useHistory();

  const handleIngresar = () => {
    // Redirige a la página principal (App.js)
    history.push('/App');
  };

  return (
    <div className="landing-container">
      <div className="blur-background">
        <h1>¡Bienvenidos a VideoGames!</h1>
        <button onClick={handleIngresar}>Ingresar</button>
      </div>
    </div>
  );
};

export default Landing;

