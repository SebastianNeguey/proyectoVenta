import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Importamos los estilos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <h1 className="logo">Mi Web</h1>

        {/* Botón del menú hamburguesa */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
          ☰
        </button>

        {/* Menú en pantallas grandes */}
        <ul className="menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
        </ul>
      </div>

      {/* Menú desplegable en móviles */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>Sobre Nosotros</Link></li>
        </ul>
      </div>
    </nav>
  );
}