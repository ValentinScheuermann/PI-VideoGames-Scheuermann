import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"


export default function LandingPage() {

  return (
    <div className="background">
      <div className="title" >
        <h2>Welcome to Videogames</h2>
        <Link to="/home">
          <button type="submit">Let`s go!</button>
        </Link>
      </div>
      
    </div>
  );
}


