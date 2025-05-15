import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonialCSS from './Testimonial.module.css';

const testimonials = [
  {
    quote: "¡Una experiencia increíble! Las habitaciones impecables y el personal muy atento.",
    author: "Juan P. y familia, México",
    rating: 5
  },
  {
    quote: "Definitivamente volveremos. Excelente ubicación y trato cordial.",
    author: "Laura M., Argentina",
    rating: 5
  },
  {
    quote: "Las vistas desde nuestra habitación eran espectaculares. Recomendado al 100%.",
    author: "Carlos D., Colombia",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className={`section ${testimonialCSS.testimonialsSection}`}>
      <small className="section__Heading">Testimonios</small>
      <h2 className="section__Title">Lo que dicen <span>nuestros huéspedes</span></h2>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={testimonialCSS.swiper}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        effect="fade"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={testimonialCSS.slide}>
            <div className={testimonialCSS.testimonialCard}>
              <div className={testimonialCSS.stars}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className={testimonialCSS.quote}>“{testimonial.quote}”</p>
              <p className={testimonialCSS.author}>— {testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
