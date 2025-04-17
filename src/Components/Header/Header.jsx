import React from 'react';
import headerCSS from './Header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookingForm from '../BookingForm/BookingForm';
import 'swiper/css';
import { Autoplay, Parallax } from 'swiper/modules';
import slide1 from './../../assets/images/home-hotel1.png';
import slide2 from './../../assets/images/home-hotel2.png';
import slide3 from './../../assets/images/home-hotel3.jpg';

function Header() {
  return (
    <div className={headerCSS.header_wrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        parallax={true}
        className={headerCSS.swiper}
        autoplay={{ delay: 2500 }}
        speed={1500}
        modules={[Autoplay, Parallax]}
      >
        <div className={headerCSS.bookingFormContainer}>
          <BookingForm />
        </div>
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className={`${headerCSS.HeaderSlide}`}
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-300">Luxury Hotel & Restaurant</small>
              <h2 data-swiper-parallax="-400">
                Disfruta de tu mejor tiempo con una <br /> Experiencia de Lujo
              </h2>
              <p data-swiper-parallax="-600">
                Llama ahora <span>+34 000 000 000</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className={`${headerCSS.HeaderSlide}`}
            style={{ backgroundImage: `url(${slide2})` }}
          >
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-300">Luxury Hotel & Restaurant</small>
              <h2 data-swiper-parallax="-400">
                Disfruta de tu mejor tiempo con una <br /> Experiencia de Lujo
              </h2>
              <p data-swiper-parallax="-600">
                Llama ahora <span>+34 000 000 000</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className={`${headerCSS.HeaderSlide}`}
            style={{ backgroundImage: `url(${slide3})` }}
          >
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-300">Luxury Hotel & Restaurant</small>
              <h2 data-swiper-parallax="-400">
                Disfruta de tu mejor tiempo con una <br /> Experiencia de Lujo
              </h2>
              <p data-swiper-parallax="-600">
                Llama ahora <span>+34 000 000 000</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
