import React from 'react'
import './slideNavbar.css'
import { Link } from 'react-router-dom'

function SlideNabar() {

  return (
    <div className='slideNavbar'>
        <div className="content1">
            <Link to="/">
                <span>HOME</span>
            </Link>
        </div>
        <div className="content1">
            <Link to="/explore">
                <span>EXPLORE</span>
            </Link>
        </div>
        <div className="content1">
            <Link to="/about">
                <span>ABOUT US</span>
            </Link>
        </div>
        <div className="content1">
            <Link>
                <span>GET REMEDIES</span>
            </Link>
        </div>
    </div>
  )
}

export default SlideNabar
