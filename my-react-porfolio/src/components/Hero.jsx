import React from "react";
import profilePhoto from " ../assets/Images/foto de perfil - neri carrera.jpg";
import "styles/Hero.css";

const Hero = () =>{
    return (
        <div className="background-portada">
            <div className="conteiner-tarjeta">
                <div className="portada-imagen2-tarjeta">
                 <div className="conteiner-imagen2-tarjeta">
                    <img src={profilePhoto} alt="Neri Carrera - Desarrollador Frontend" />
                 </div>
                 <div className="portada-info">
                    <p>
                        Soy un desarrollador web especializado en frontend, con experiencia en HTML, CSS, JavaScript, Typescript, y Bootstrap. 
                        He trabajado en proyectos como Daysport y Las Bravas, donde he desarrollado interfaces de usuario atractivas y funcionales. 
                        Además, utilizo SQL para la gestión de datos y GitHub para el control de versiones. 
                        Mi objetivo es seguir creciendo como desarrollador, explorando nuevas tecnologías y mejorando mis habilidades en backend con Node.js.

                    </p>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;