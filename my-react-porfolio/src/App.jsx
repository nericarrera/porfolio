// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import "./App.css"; // Estilos generales

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <Skills />
      {/* Más componentes aquí (Education, Projects, Contact, Footer) */}
    </div>
  );
}

export default App;