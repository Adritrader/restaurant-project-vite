import React from 'react'
import headerCSS from './../Header/Header.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

function Header(){
  return (
    <div className={headerCSS.header_wrapper}>
        <Swiper className={headerCSS.swiper}>
            <SwiperSlide>
                <div className={`${headerCSS.HeaderSlide} ${headerCSS.slide1}`}>
                    <div className={headerCSS.content}>
                        <small>Luxury Hotel & Restaurant</small>
                        <h2>Enjoy your dream time with <br/> Luxury Experience</h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${headerCSS.HeaderSlide} ${headerCSS.slide2}`}>
                    <div className={headerCSS.content}>
                        <small>Luxury Hotel & Restaurant</small>
                        <h2>Enjoy your dream time with <br/> Luxury Experience</h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${headerCSS.HeaderSlide} ${headerCSS.slide3}`}>
                    <div className={headerCSS.content}>
                        <small>Luxury Hotel & Restaurant</small>
                        <h2>Enjoy your dream time with <br/> Luxury Experience</h2>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>



    </div>
  )
}

export default Header;
