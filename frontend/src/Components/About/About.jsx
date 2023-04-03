import React from 'react'
import "./about.css"

import GURU from "../../Assets/yogaHerbs.png"

const About = () => {

  return (
    <div className='aboutPage'>
      <div className="leftabt">
        <div className="abtpara">
        VedicHeal is a website that provides ayurvedic solutions for your health and wellness needs. Ayurveda is a holistic system of medicine that originated in India and has been practiced for thousands of years. It is based on the concept of harmony between the mind, body, and spirit, and uses natural methods such as herbs, diet, lifestyle, and therapies to prevent and treat diseases. On our website, you can access a variety of products and services that cater to your specific health conditions and preferences. You can also gain valuable insights into the fundamentals and advantages of Ayurveda through our informative resources. Our team comprises of qualified and experienced ayurvedic professionals who are committed to sharing their knowledge and expertise with you. They are always available to answer your questions and assist you on your path towards optimal health and happiness. We welcome you to explore our website and join our community of natural healers. VedicHeal is more than just a website; it is a platform where you can discover the wonders of Ayurveda and its impact on your life. 🙏
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
