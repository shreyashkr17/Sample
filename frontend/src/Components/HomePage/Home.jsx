import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/navbar';
import About from '../About/About';
import Footer from "../Footer/Footer"
import "./home.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MetaData from '../layouts/MetaData';

const Home = () => {

    const [path, setPath] = useState("/register");
    const {user} = useSelector((state) => state.user);

    useEffect(() => {
      if(user){
        setPath("/search");
      }
      else{
        setPath("/register");
      }
    }, [user, setPath])
    

  return (
    <>
    <MetaData title='VedicHeal' />
    <Navbar/>
    <div>
        <div className="homepage">
            <div className="container_upper">
                <div className="tag">
                    <h2>Where Ancient Wisdom Meets Modern Wellness</h2>
                </div>
            </div>
            <Link to={path}>
                <div className="search_box">
                    <h2>GET REMEDIES</h2>  
                </div>
            </Link>
        </div>
        <About/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
