import React from 'react';
import footerCSS from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={`section ${footerCSS.footerSection}`}>
      <div className={footerCSS.footerContainer}>
        <div className={footerCSS.footerLogo}>
          <h2>Pure Lounge Hotel</h2>
          <p>Tu escapada de lujo en Dénia. Experiencias inolvidables junto al mar.</p>
        </div>

        <div className={footerCSS.footerLinks}>
          <h3>Enlaces útiles</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Habitaciones</a></li>
            <li><a href="#">Restaurante</a></li>
            <li><a href="#">Reservas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className={footerCSS.footerContact}>
          <h3>Contacto</h3>
          <p><FaMapMarkerAlt /> Calle Ficticia 123, Dénia</p>
          <p><FaPhoneAlt /> +34 600 000 000</p>
          <p><FaEnvelope /> info@pureloungehotel.com</p>
        </div>

        <div className={footerCSS.footerSocial}>
          <h3>Síguenos</h3>
          <div className={footerCSS.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className={footerCSS.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Pure Lounge Hotel. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
