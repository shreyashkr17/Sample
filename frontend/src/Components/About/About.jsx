import React from 'react'
import "./about.css"

import GURU from "../../Assets/yogaHerbs.png"

const About = () => {
  return (
    <div className='aboutPage'>
      <div className="leftabt">
        <div className="abtpara">
        Our website is a platform dedicated to providing alternative home remedies for various diseases, along with information on Ayurvedic institutions and hospitals across the country. We also share insightful blogs on the latest researches on diseases to help users stay informed about Ayurvedic medicine. Our mission is to promote natural health and wellness through the use of Ayurvedic remedies and to provide reliable information to our users.
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
