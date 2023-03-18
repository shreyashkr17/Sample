import React from 'react'
import "./navbar.css";

import Poster from '../Poster/Poster';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../Assets/ayurLogo.png"

const Navbar = () => {
  return (
    <div className='NavPos'>
        <div className="Navbar">
          <div className="left_nav">
            <div className="image_cont">
              <img src={logo} alt="logo" className='logoHead' />
            </div>
            <div className="naam_cont">
              <h1 className='naam'>VEDICHEALS</h1>
            </div>
          </div>
          <div className="mid_nav">
            <div className="home">
              <a href="">HOME</a>
            </div>
            <div className="aboutUs">
              <a href="">ABOUT US</a>
            </div>
            <div className="Videos">
              <a href="">VIDEOS</a>
            </div>
            <div className="Search">
              <a href=""><SearchIcon /></a>
            </div>
          </div>
          <div className="right_nav">
              <div className="join_now_cont">
                <button className='join_btn'>JOIN NOW</button>
              </div>
          </div>
          <div className="ham_menu_cont">
            <div className="ham_menu">
              <MenuIcon className='menu'/>
            </div>
          </div>
        </div>
        <div className="poster">
          <Poster/>
        </div>
    </div>
  )
}

export default Navbar
