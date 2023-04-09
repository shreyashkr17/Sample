import React from 'react'
import "./aboutpage.css"
import Navbar from "../Navbar/navbar"
import AboutUsDetail from './AbouUsDetail'
import Downloads from './Downloads'
import Footer from "../Footer/Footer"

// import images for poster from Assets

import Poster1 from "../../Assets/1.png"
import Poster2 from "../../Assets/2.png"
import Poster3 from "../../Assets/3.png"
import Poster4 from "../../Assets/4.png"
import Poster5 from "../../Assets/5.png"
import Poster6 from "../../Assets/6.png"
import Poster7 from "../../Assets/7.png"
import MetaData from '../layouts/MetaData'


const Aboutpage = () => {
  return (
    <>
    <MetaData title="About Us - VedicHeal" />
    <div className='aboutpage'>
      <Navbar/>
      <div className="abtPosterCont">
        <div className="upperabtPoster">
            <span className="h11"><h1>Discover The Natural Healing Power of</h1></span>
            <span className="h12"><h1>Ayurvedic Medicine</h1></span>
        </div>
        <div className="downabtPoster">
            <div className="abtPoster3">
                <div className="abt1">
                    <img src={Poster5} className='Poster5' alt="" />
                </div>
            </div>
            <div className="abtPoster2">
                <div className="abt2">
                    <div className="abt21">
                        <img src={Poster2} className="Poster2" alt="" />
                    </div>
                    <div className="abt22">
                        <img src={Poster4} className="Poster4" alt="" />
                    </div>
                </div>
            </div>
            <div className="abtPoster1">
                <img src={Poster7} className="Poster7" alt="" />
            </div>
            <div className="abtPoster2">
                <div className="abt2">
                    <div className="abt21">
                        <img src={Poster6} className="Poster6" alt="" />
                    </div>
                    <div className="abt22">
                        <img src={Poster1} className="Poster1" alt="" />
                    </div>
                </div>
            </div>
            <div className="abtPoster3">
                <div className="abt1">
                    <img src={Poster3} className="Poster3" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
    <AboutUsDetail/>
    <Downloads/>
    {/* <Footer/> */}
    </>
  )
}

export default Aboutpage
