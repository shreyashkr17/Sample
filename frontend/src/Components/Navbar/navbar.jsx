import React from 'react'
import "./navbar.css"
import logo from "../../Assets/ayurLogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import ProfileImage from '../User/ProfileImage';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {isAuthenticated} = useSelector((state) => state.user);

  return (
    <div className='Navbar'>
        <div className="leftnav">
            <img src={logo} alt="" className='logo' />
            <div className="Header">
                <h1>VEDICHEAL</h1>
            </div>
        </div>
        <div className="midnav">
              <div className="firstmid navli">
                <Link to="/" style={{ textDecoration: "none" , color: "rgb(255, 149, 0)"}}>
                  <h2>
                    HOME
                  </h2>
                </Link>
              </div>
              <div className="secondmid navli">
                <Link to="/explore" style={{ textDecoration: "none",color: "rgb(255, 149, 0)"}}>
                  <h2>EXPLORE</h2>
                </Link>
              </div>
              <div className="thirdmid navli">
                <Link to="/about" style={{ textDecoration: "none", color: "rgb(255, 149, 0)"}}>
                <h2>ABOUT US</h2>
                </Link>
              </div>
              <div className="fourthmid navli">
              <Link to="/about" style={{ textDecoration: "none", color: "rgb(255, 149, 0)"}}>
                <h2>CONTACT US</h2>
                </Link>
              </div>
        </div>
        <div className="rightnav">
          {isAuthenticated ? (<ProfileImage/>) : (
            <div className="btn_cont">
            <button className='btn'>
              <Link to="/login" style={{ textDecoration: "none" }}>
              JOIN NOW
              </Link>
            </button>
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
