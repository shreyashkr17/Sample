import React, { useState } from 'react'
import "./Register.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Google from "../../Assets/icons/google-oauth.png";
import Facebook from "../../Assets/icons/fb-oauth.png";
import Github from "../../Assets/icons/github-oauth.png";
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../../Actions/User';
// import { useEffect } from 'react';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png");
  const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const {loading, error} = useSelector((state) => state.user);

  const submitHandler = (e) => {
    // e.preventDefault();
    // dispatch(registerUser(name, email, password, avatar))
  }

  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    // const Reader = new FileReader();
    // Reader.readAsDataURL(file);

    // Reader.onload = () => {
    //   if (Reader.readyState === 2) {
    //     setAvatar(Reader.result);
    //   }
    // };

  }

//   useEffect(() => {
//     if(error){
//       alert.error(error);
//       dispatch({type: "clearErrors"});
//     }
//   }, [dispatch, error, alert]);
  

  return (
    <div className='register'>
      <form className='registerForm' onSubmit={submitHandler}>
        <Typography variant='h3' style={{ padding: "2vmax" }} >VedicHeal</Typography>
        {/* <Avatar src={avatar} alt="User" sx={{ height: "10vmax", width: "10vmax" }} ></Avatar> */}
        {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
        <input className='registerInputs' type="text" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)} />
        <input className='registerInputs' type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='registerInputs' type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to="/login">
          <Typography>Already have a Account? Login Now</Typography>
        </Link>
        <button className="loginButton" type="submit">
            <Typography>Sign Up</Typography>
        </button>
        <p className="divider">
            <span className="divider-line"></span>
            OR
            <span className="divider-line"></span>
        </p>
        <div className="authButtons">
            <li>
                <a href="google.com">
                    <img src={Google} alt="Google" />
                </a>
            </li>
            <li>
                <a href="facebook.com">
                    <img src={Facebook} alt="Facebook" />
                </a>
            </li>
            <li>
                <a href="github.com">
                    <img src={Github} alt="Github" />
                </a>
            </li>
        </div>
      </form>
    </div>
  )
}

export default Register