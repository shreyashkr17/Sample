import React from 'react'
import "./about.css"

import GURU from "../../Assets/yogaHerbs.png"

const About = () => {

  return (
    <div className='aboutPage'>
      <div className="leftabt">
        <div className="abtpara">
        VedicHeal is a website that provides ayurvedic solutions for health and wellness needs. Ayurveda is a holistic system of medicine that originated in India and has been practiced for thousands of years. It is based on harmony between the mind, body, and spirit and uses natural methods such as herbs, diet, lifestyle, and therapies to prevent and treat diseases. VedicHeal's team of qualified and experienced ayurvedic professionals are committed to sharing their knowledge and expertise with you. VedicHeal is a platform where you can discover the wonders of Ayurveda and its impact on your life.
        </div>
      </div>
      <div className="rightabt">
          <div className="img_abt">
              <img src={GURU} alt="" className='guru_img' />
          </div>
      </div>
    </div>
  )
}

export default About
