import React, { useState } from 'react'
import Navbar from '../Navbar/navbar';
import About from '../About/About';
import Footer from "../Footer/Footer"
import "./home.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Home = () => {

    const [path, setPath] = useState("/register");

    // const handleRedirection = (e) => {
    //     e.preventDefault();
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
                setPath("/search");
              // ...
            } else {
              // User is signed out
              setPath("/register");
              // ...
            }
        });    
    // }

  return (
    <div>
        <Navbar/>
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
  )
}

export default Home
