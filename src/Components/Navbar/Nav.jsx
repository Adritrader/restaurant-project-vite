import React, { useState } from 'react';
import navCSS from './../Navbar/Nav.module.css';
import { FiMenu, FiX } from "react-icons/fi";
import { SiAltiumdesigner } from "react-icons/si";
import { Link } from 'react-router-dom';

<Link to="/">Inicio</Link>


function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={navCSS.nav_wrapper}>
      {/* Logo principal (siempre visible en pantallas grandes) */}
      <div className={navCSS.logo}>
        <a href="#">
          <span>
            <SiAltiumdesigner className={navCSS.logoIcon} />
            PURE LOUNGE HOTEL
          </span>
        </a>
      </div>

      {/* Navbar estático para pantallas grandes */}
      <ul className={navCSS.desktop_menu}>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link to="/categorias">Categorías</Link></li>
        <li><Link to="/habitaciones">Habitaciones</Link></li>
        <li><Link to="/restaurante">Restaurante</Link></li>
        <li><Link to="/testimonios">Testiomonios</Link></li>
      </ul>

      {/* Botón hamburguesa (visible solo en pantallas pequeñas) */}
      <button
        className={`${navCSS.menu_icon} ${isMenuOpen ? navCSS.hideDesktopElements : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <FiMenu size={24} color="black" />
      </button>

      {/* Menú responsive */}
      <div className={`${navCSS.menu_overlay} ${isMenuOpen ? navCSS.active : ''}`}>
        <div className={navCSS.menu_header}>
          <span className={navCSS.mobileLogo}>
            <SiAltiumdesigner className={navCSS.logoIcon} />
            PURE LOUNGE HOTEL
          </span>
          <button onClick={toggleMenu} className={navCSS.close_btn} aria-label="Cerrar menú">
            <FiX size={24} color="black" />
          </button>
        </div>
        <ul>
          <li><a href="#" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#" onClick={closeMenu}>Sobre Nosotros</a></li>
          <li><a href="#" onClick={closeMenu}>Categorías</a></li>
          <li><a href="#" onClick={closeMenu}>Habitaciones</a></li>
          <li><a href="#" onClick={closeMenu}>Testimonios</a></li>
          <li><a href="#" onClick={closeMenu}>Blogs</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;