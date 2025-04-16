import React from 'react'
import navCSS from './../Navbar/Nav.module.css'
import { FaBook } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";



function Nav() {
  return (

    <div className={navCSS.nav_wrapper}>
        <div className={navCSS.logo}>
            <a href="#"><span>PURE LOUNGE HOTEL</span></a>
        </div>

        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Habitaciones</a></li>
            <li><a href="#">Testimonios</a></li>
            <li><a href="#">Blogs</a></li>
        </ul>

        <div className={navCSS.nav_btns}>

            <button className={navCSS.btn}>Reserva <FaBook className='book-icon' /></button>
            
        </div>

        <FiMenu className='menu-icon' />


    </div>
  )
}

export default Nav;
