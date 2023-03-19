import React from 'react'
import "./navbar.css"

// Image Importation
import logo from "../../Assets/ayurLogo.png"

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="leftnav">
            <img src={logo} alt="" className='logo' />
            <div className="Header">
                <h1>VEDICHEAL</h1>
            </div>
        </div>
        <div className="midnav">
              <div className="firstmid">
                <h2>HOME</h2>
              </div>
              <div className="secondmid">
                <h2>EXPLORE</h2>
              </div>
              <div className="thirdmid">
                <h2>ABOUT US</h2>
              </div>
              <div className="fourthmid">
                <h2>CONTACT</h2>
              </div>
        </div>
        <div className="rightnav">
          <div className="btn_cont">
            <button className='btn'>JOIN NOW</button>
          </div>
        </div>
        <div className="hamburger">
          <div className="menucont">
            <MenuIcon className='menu' fontSize='large'/>
          </div>
        </div>
    </div>
  )
}

export default Navbar
