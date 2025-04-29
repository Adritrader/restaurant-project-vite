import React, { useState } from 'react';
import navCSS from './../Navbar/Nav.module.css';
import { FiMenu, FiX } from "react-icons/fi";
import { SiAltiumdesigner } from "react-icons/si";
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import BookingForm from '../BookingForm/BookingForm';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={navCSS.nav_wrapper}>
      {/* Main logo (always visible on large screens) */}
      <div className={navCSS.logo}>
        <a href="#">
          <span>
            <SiAltiumdesigner className={navCSS.logoIcon} />
            PURE LOUNGE HOTEL
          </span>
        </a>
      </div>

      {/* Static navbar for large screens */}
      <ul className={navCSS.desktop_menu}>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link to="/categorias">Categorías</Link></li>
        <li><Link to="/habitaciones">Habitaciones</Link></li>
        <li><Link to="/restaurante">Restaurante</Link></li>
        <li><Link to="/testimonios">Testiomonios</Link></li>
      </ul>

      {/* Hamburger button (visible only on small screens) */}
      <div className={navCSS.rightControls}>
      <button
  className={`${navCSS.menu_icon} ${isMenuOpen ? navCSS.hide : ''}`}
  onClick={toggleMenu}
  aria-label="Open menu"
>
  <FiMenu size={24} color="black" />
</button>

  <button
    className={navCSS.bookingButton}
    onClick={() => setIsBookingModalOpen(true)}
  >
    Reservar
  </button>
</div>


      {/* Responsive menu */}
      <div className={`${navCSS.menu_overlay} ${isMenuOpen ? navCSS.active : ''}`}>
        <div className={navCSS.menu_header}>
          <span className={navCSS.mobileLogo}>
            <SiAltiumdesigner className={navCSS.logoIcon} />
            PURE LOUNGE HOTEL
          </span>
          <button onClick={toggleMenu} className={navCSS.close_btn} aria-label="Close menu">
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

      <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
        <BookingForm />
      </Modal>
    </div>
  );
}

export default Nav;
