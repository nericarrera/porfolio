import React from "react";
import "./styles/Skills.css";

import htmlIcon from "../assets/skill/html.png";
import cssIcon from "../assets/skill/css-3.png";
import jsIcon from "../assets/skill/javascript.png";
import sqlIcon from "../assets/skill/sql-logo.png";
import phpIcon from "../assets/skill/php.png";
import githubIcon from "../assets/skill/github.png";

const Skills = () => {
    const skillsData = [
        {name: "HTML", icon: htmlIcon, level: "avanzado"},
        {name: "CSS", icon: cssIcon, level: "avanzado"},
        {name: "JavaScript", icon: jsIcon, level: "Basico"},
        {name: "SQL", icon: sqlIcon, level: "Basico"},
        {name: "PHP", icon: phpIcon, level: "Basico"},
        {name: "GitHub", icon: githubIcon, level: "Basico"}
    ];

    return (
        <div><div className="conteiner-skills" id="skills">
            <div className="conteiner-skills-titulo">
                <div className="skills-titulo">
                    <p>Skills</p>
                </div>
            </div>
        </div><div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="presentacion-tarjeta-skills">
                        <div className="tarjeta-img">
                            <img src="{skill.icon}" alt="{skill.name}" />
                        </div>
                        <div className="tarjeta-videogame">
                            <img src="../assets/icono/juego(1).png" alt="Icono juego" />
                            <img src="../assets/icono/sonsola-de-video.png" alt="Icono Consola" />

                        </div>
                        <div className="tarjeta-descripcion">
                            <button><h1>{skill.level}</h1></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;