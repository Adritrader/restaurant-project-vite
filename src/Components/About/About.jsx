import React from 'react'
import aboutCSS from './About.module.css'
import about_img from '../../assets/images/about-img.png'

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>

  <div className={aboutCSS.about_img}>
    <img src={about_img} alt="about-img" />
  </div>

  <div className={aboutCSS.about_cards}>
    <small className='section__Heading'>Pure Lounge Hotel</small>
    <h2 className="section__Title">Donde el <span>relax</span> y el <span>lujo</span> se encuentran</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad at eum eaque eligendi quam temporibus, est suscipit. Quasi ab blanditiis voluptatum veritatis deserunt quidem quos placeat odio sapiente? Nihil?</p>

    <div className={aboutCSS.Cards}>
      <p>150+<span>Premios</span></p>
      <p>250k<span>Visitantes</span></p>
      <p>3000+<span>Eventos</span></p>
    </div>
  </div>

</div>
  )
}

export default About;