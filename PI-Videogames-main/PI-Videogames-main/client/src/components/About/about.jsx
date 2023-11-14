import React from "react"
import './about.css'

function About() {
    return (
        <div className="about">
            <h1>About Videogames!</h1>
                <h4>This project use information and images from the {<a href="https://rawg.io/apidocs">RAWG</a>} API.</h4>
                <h4>Develop by Bruno Paveglio for an individual project for Henry Bootcamp.</h4>
            </div>
    );
}

export default About;
