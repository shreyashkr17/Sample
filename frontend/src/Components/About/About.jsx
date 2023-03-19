import React from 'react'
import "./about.css"

import GURU from "../../Assets/yogaHerbs.png"

const About = () => {
  return (
    <div className='aboutPage'>
      <div className="leftabt">
        <div className="abtpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda voluptate eaque aliquid iusto corporis commodi esse non, tempore sed. Sint, soluta repellat at libero, dolore quia tempora consectetur asperiores officia, quod doloremque laudantium possimus sed iure molestiae ut accusantium exercitationem itaque assumenda delectus ducimus. Atque incidunt accusamus placeat impedit.
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
