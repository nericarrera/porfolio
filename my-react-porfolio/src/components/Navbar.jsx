import React, {useState} from "react";
import { BiTextRight, Bix } from "react-icons/bi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="logo">
                <p>Developer.NC</p>
            </div>

            <BUTTON onClick={() => setIsOpen(true)} className="abrir-menu">
<BiTextRight />
            </BUTTON>

            <div className={`navmenu ${isOpen ? "show" : ""}`}>
            <button onClick={() => setIsOpen(false)} className="cerrar-menu">
                <Bix />
            </button>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre Mi</a></li>
                    <li><a href="#projects">Projectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;