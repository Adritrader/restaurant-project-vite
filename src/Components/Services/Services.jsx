import React from 'react'
import ServicesCSS from '../Services/Services.module.css'
import { RiHotelLine, RiHotelBedLine, RiGobletLine } from "react-icons/ri";
import { TbMassage } from "react-icons/tb";


function Services() {
  return (
    <div className={`${ServicesCSS.Service_wrapper} section`}>
        <small className="section__Heading">Instalaciones</small>
        <h2 className="section__Title">Nuestros mejores <span>Servicios</span></h2>

        <div className={ServicesCSS.Service_cards}>
            <div className={ServicesCSS.Service_card}>
                <RiHotelLine size={42} color='goldenrod'/>
                <h3>Instalaciones Básicas</h3>
                <p>Recepción</p>
                <p>Servicio Habitaciones</p>
                <p>Wifi</p>
                <p>Parking</p>
            </div>
            <div className={ServicesCSS.Service_card}>
                <RiHotelBedLine size={42} color='goldenrod'/>
                <h3>Comodidades Habitación</h3>
                <p>Camas cómoda</p>
                <p>Piscina y jacuzzi</p>
                <p>Hamacas</p>
                <p>TV</p>
                <p>Mini-Bar</p>
            </div>
            <div className={ServicesCSS.Service_card}>
                <RiGobletLine size={42} color='goldenrod'/>
                <h3>Restauración</h3>
                <p>Restaurante & Café</p>
                <p>Bar & Lounge</p>
                <p>Chill out terrace bar</p>
            </div>
            <div className={ServicesCSS.Service_card}>
                <TbMassage size={42} color='goldenrod'/>
                <h3>Servicios de Lujo</h3>
                <p>Habitaciones personalizadas</p>
                <p>Recovery Wellness</p>
                <p>Spa & Sauna</p>
                <p>Gym</p>
            </div>
        </div>



    </div>
  )
}

export default Services
