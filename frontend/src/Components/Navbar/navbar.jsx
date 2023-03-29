import React from 'react'
import "./navbar.css"

// Image Importation
import logo from "../../Assets/ayurLogo.png"

import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import ProfileImage from '../User/ProfileImage';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {isAuthenticated} = useSelector((state) => state.user);
  console.log(isAuthenticated);

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
                <Link to="/">
                  <h2>HOME</h2>
                </Link>
              </div>
              <div className="secondmid">
                <Link to="/explore">
                  <h2>EXPLORE</h2>
                </Link>
              </div>
              <div className="thirdmid">
                <Link to="/aboutpage">
                  <h2>ABOUT US</h2>
                </Link>
              </div>
              <div className="fourthmid">
                <Link to="#">
                  <h2>CONTACT</h2>
                </Link>
              </div>
        </div>
        <div className="rightnav">
          {isAuthenticated ? (<ProfileImage/>) : (
            <div className="btn_cont">
            <button className='btn'>JOIN NOW</button>
          </div>
          )}
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
