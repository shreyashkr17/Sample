import React from 'react'
import Navbar from '../Navbar/navbar';
import About from '../About/About';
import Footer from "../Footer/Footer"
import "./home.css";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="homepage">
            <div className="container_upper">
                <div className="tag">
                    <h2>Where Ancient Wisdom Meets Modern Wellness</h2>
                </div>
            </div>
            <div className="search_box">
                <h2>GET REMEDIES</h2>  
            </div>
        </div>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home
