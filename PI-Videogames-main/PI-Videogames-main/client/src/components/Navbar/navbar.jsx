// Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';




function Navbar() {

  const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
    }

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={require('../Assets/fotojoystick.png')} alt="Logo" />
        </Link>
      </div>
      <Link to="/App" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <div className="searchbar">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search videogame..."
                    type="text"
                    ></input>
                    <NavLink to={`/results/${name}`}>
                        <button name="name" type="submit"> Go! </button>
                    </NavLink>
                </form>
        </div>
    </div>
  );
}

export default Navbar;
