import React from 'react'
import headerCSS from './../Header/Header.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {Autoplay, Parallax} from 'swiper/modules'

function Header(){
  return (
    <div className={headerCSS.header_wrapper}>
        <Swiper slidesPerView={1} spaceBetween={0} loop={true} parallax={true} className={headerCSS.swiper} autoplay={{delay: 2500,}} speed={1500} modules={[Autoplay , Parallax]}>
            <SwiperSlide>
                <div className={`${headerCSS.HeaderSlide} ${headerCSS.slide1}`}>
                    <div className={headerCSS.content}>
                        <small data-swiper-parallax="-300">Luxury Hotel & Restaurant</small>
                        <h2 data-swiper-parallax="-400">Disfruta de tu mejor tiempo con una <br/> Experiencia de Lujo</h2>
                        <p data-swiper-parallax="-600">Llama ahora <span>+34 000 000 000</span></p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${headerCSS.HeaderSlide} ${headerCSS.slide2}`}>
                    <div className={headerCSS.content}>
                        <small data-swiper-parallax="-300">Luxury Hotel & Restaurant</small>
                        <h2 data-swiper-parallax="-400">Disfruta de tu mejor tiempo con una <br/> Experiencia de Lujo</h2>
                        <p data-swiper-parallax="-600">Llama ahora <span>+34 000 000 000</span></p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${headerCSS.HeaderSlide} ${headerCSS.slide3}`}>
                    <div className={headerCSS.content}>
                        <small data-swiper-parallax="-300">Luxury Hotel & Restaurant</small>
                        <h2 data-swiper-parallax="-400">Disfruta de tu mejor tiempo con una <br/> Experiencia de Lujo</h2>
                        <p data-swiper-parallax="-600">Llama ahora <span>+34 000 000 000</span></p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>



    </div>
  )
}

export default Header;
