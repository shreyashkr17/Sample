import React from 'react'
import "./explore.css"
import Navbar from '../Navbar/navbar';

import Blog from "../../Assets/Blog.gif"
import videoPlayer from "../../Assets/videoPlayer.gif"
import Map from "../../Assets/map.gif"

const Explore = () => {
  return (
    <div className='Explore'>
        <Navbar/>
        <div className="explore_page">
            <div className="exp_poster">
                <div className="card1">
                    <div className="glass_card">
                        <img src={Blog} alt="" className='bloggif' />
                    </div>
                </div>
                <div className="card2">
                    <div className="glass_card">
                        <img src={videoPlayer} alt="" className='bloggif' />
                    </div>
                </div>
                <div className="card3">
                    <div className="glass_card">
                        <img src={Map} alt="" className='bloggif' />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Explore;