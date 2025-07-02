// src/components/Header.jsx
import React from "react";
import "./styles/Header.css"; // Tus estilos CSS

const Header = () => {
  return (
    <header className="header">
      <div className="header-iconos">
        <div className="header-iconos-ico">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/github.png" alt="GitHub" />
          </a>
          {/* Repite para los demás íconos */}
        </div>
      </div>
    </header>
  );
};

export default Header;