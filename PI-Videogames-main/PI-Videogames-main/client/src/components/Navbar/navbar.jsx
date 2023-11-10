// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={require('../Assets/icocojoystick.jpg')} alt="Logo" />
      </div>
      <Link to="/app" className="nav-link">
        Home
      </Link>
      {/* Agrega más enlaces según sea necesario */}
    </div>
  );
};

export default Navbar;
