import React from 'react'
import './history.css';

import Kapha from "../../Assets/kapha.png";
import Pitta from "../../Assets/pitta.png";
import Vata from "../../Assets/vata.png";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const History = () => {
  return (
    <div className='History'>
      {/* For Left Side */}
      <div className="left_history">
        <div className="partLone">
            <img src={Kapha} alt="Kapha" className='Kapha' />
        </div>
        <div className="partLtwo">
            <img src={Pitta} alt="Pitta" className='Pitta' />
        </div>
        <div className="partLthree">
            <img src={Vata} alt="Vata" className='Vata' />
        </div>
      </div>

      {/* For Right Side */}
      <div className="right_history">
        <div className="history_Header">
            <h2>FORGOTTEN HISTORY</h2>
        </div>
        <div className="hst_para">
            Ayurveda has an angel old history since the 2nd Century BC. Ayurveda has its foundations laid by the ancient schools of Hindu Philosophical teachings named Vaisheshika and the school of logic named as Nyaya. It is also related to the manifestation framework, well known as Samkhya, and it was established in the same period when schools of Nyaya and Vaisheshika flourished.
        </div>
        <div className="rd_more">
            <div className="ele">
                <a href="">
                    Read More
                </a>
                <ChevronRightIcon className='right_arrow'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default History
