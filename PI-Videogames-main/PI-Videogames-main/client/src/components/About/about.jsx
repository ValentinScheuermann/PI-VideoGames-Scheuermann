import React from "react";
import "./About.css"

function About() {
    return (
        <div className="about">
            <h1>Videogames - Individual Project by VS!</h1>
            <div>
                <h4>The content of this project was built using: <a href="https://rawg.io/apidocs">RAWG</a> API.</h4>
                <h4>My name is Valentin Scheuermann, Henry Student, and this project was developed for the individual project.</h4>

                {/* Botones de redes sociales */}
                <div className="social-buttons">
                    <a href="https://www.instagram.com/valenscheuermann" target="_blank" rel="noopener noreferrer">
                    <img  src={require('./images/instagram.png')} alt="Instagram" />
                    
                    
                
                    <a href="https://wa.me/5492216164153" target="_blank" rel="noopener noreferrer">
                    <img  src={require('./images/whatsapp.png')} alt="Whatsapp" />
                    </a>
                    <a href="https://www.linkedin.com/in/valentin-scheuermann-b85995246" target="_blank" rel="noopener noreferrer">
                    <img  src={require('./images/linkedin.png')} alt="Linkedin" />
                    </a>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
