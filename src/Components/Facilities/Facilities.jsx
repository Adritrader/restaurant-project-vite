import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import beach from '../../assets/images/beach.jpg';
import pool from '../../assets/images/pool.jpg';
import restaurantNight from '../../assets/images/restaurant-night.jpg';
import outside from '../../assets/images/outside.jpg';
import cabanas from '../../assets/images/cabañas.jpg';

import facilitiesCSS from './Facilities.module.css';

const Facilities = () => {
  const slides = [
    { src: beach, title: 'Playa Privada', desc: 'Relájate en nuestra playa exclusiva' },
    { src: pool, title: 'Piscina Infinity', desc: 'Vistas panorámicas y agua cristalina' },
    { src: restaurantNight, title: 'Restaurante Nocturno', desc: 'Gastronomía al aire libre' },
    { src: outside, title: 'Área Social', desc: 'Disfruta en comunidad bajo el sol' },
    { src: cabanas, title: 'Cabañas Premium', desc: 'Comodidad con estilo tropical' }
  ];

  return (
    <div className={`${facilitiesCSS.Facilities_container} section`}>
      <small className='section__Heading'>Instalaciones</small>
      <h2 className="section__Title">Descubre nuestras <span>Instalaciones</span></h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        effect="fade"
        className={facilitiesCSS.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={facilitiesCSS.slide}>
            <div className={facilitiesCSS.imageWrapper}>
              <img src={slide.src} alt={slide.title} className={facilitiesCSS.image} />
              <div className={facilitiesCSS.overlay}>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Facilities;
