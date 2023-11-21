import React from "react";
import "./About.css"

function About() {
    return (
        <div className="about">
            <h1>Videogames - Individual Project by VS!</h1>
            <div>
                <h4>The content of this project was built using: <a href="https://rawg.io/apidocs" className="link" target="_blank" rel="noopener noreferrer" >RAWG</a> API.</h4>
                <h4>My name is Valentin Scheuermann, Henry Student, and this project was developed for the individual project.</h4>

                {/* Botones de redes sociales */}
                <div className="social-buttons">
                    <a className="insta" href="https://www.instagram.com/valenscheuermann" target="_blank" rel="noopener noreferrer">
                        <img className="fotoredes" src={require('./images/instagram.png')} alt="Instagram" />
                    </a>
                
                    <a className="wsp" href="https://wa.me/5492216164153" target="_blank" rel="noopener noreferrer">
                        <img className="fotoredes" src={require('./images/whatsapp.png')} alt="Whatsapp" />
                    </a>

                    <a className="linke" href="https://www.linkedin.com/in/valentin-scheuermann-b85995246" target="_blank" rel="noopener noreferrer">
                        <img className="fotoredes" src={require('./images/linkedin.png')} alt="Linkedin" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
