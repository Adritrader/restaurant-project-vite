import React from 'react'
import aboutCSS from './About.module.css'
import about_img from '../../assets/images/about-img.png'

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>
      <div className={aboutCSS.about_img}>
        <img src={about_img} alt="" />
      </div>

      <div className={aboutCSS.about_content}>

        <small>Pure Lounge Hotel</small>
        <h2 className="className section__Title">Hola es una <span>prueba</span> de texto </h2>

        <div className={aboutCSS.Cards}>
          <div className={aboutCSS.card}>

            <p>260+<span></span></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;