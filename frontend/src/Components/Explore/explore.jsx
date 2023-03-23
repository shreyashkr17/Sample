import React from 'react'
import "./explore.css"
import Navbar from '../Navbar/navbar';

import {Link} from "react-router-dom";

import Blog from "../../Assets/Blog.gif"
import videoPlayer from "../../Assets/videoPlayer.gif"
import Map from "../../Assets/map.gif"

import Blogcards from '../Blogs/blogcards';

const Explore = () => {
  return (
    <div className='Explore'>
        <Navbar/>
        <div className="explore_page">
            <div className="exp_poster">
                <div className="card1">
                    <div className="glass_card">
                        <a href="#blogs">
                            <img src={Blog} alt="" className='bloggif' />
                        </a>
                    </div>
                </div>
                <div className="card2">
                    <div className="glass_card">
                        <Link to="#">
                            <img src={videoPlayer} alt="" className='bloggif' />
                        </Link>
                    </div>
                </div>
                
                <div className="card3">
                    <div className="glass_card">
                        <Link to={"/map"}>
                            <img src={Map} alt="" className='bloggif' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Blogcards/>
    </div>
  )
}

export default Explore;