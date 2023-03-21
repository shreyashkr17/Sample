import React, { useState } from "react";
import "./Register.css";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../Assets/icons/google-oauth.png";
import Facebook from "../../Assets/icons/fb-oauth.png";
import Github from "../../Assets/icons/github-oauth.png";
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { authWithFacebook, authWithGitHub, authWithGoogle, clearErrors, loadUser, registerUser } from "../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MetaData";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const [avatar, setAvatar] = useState("https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png");

    const dispatch = useDispatch();
    const {loading, error, isAuthenticated} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const alert = useAlert();

  const submitHandler = async(e) => {
    e.preventDefault();
    if(password !== confirmPassword){
        alert.error("Passwords do not match");
    }
    else{
        dispatch(registerUser(name, email, password));
        if(!isAuthenticated){
          alert.info("You are already registered. Please login");
        }
    }
  };

  const signInWithGoogle = async() => {
      dispatch(authWithGoogle());
  };

  const signInWithFacebook = async() => {
    dispatch(authWithFacebook());  
  };

  const signInWithGithub = async() => {
    dispatch(authWithGitHub());
  };

  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    // const Reader = new FileReader();
    // Reader.readAsDataURL(file);
    // Reader.onload = () => {
    //   if (Reader.readyState === 2) {
    //     setAvatar(Reader.result);
    //   }
    // };
  };

//   const redirect = "/"
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(isAuthenticated){
          navigate("/")
          alert.success("Successfully Registered");
        }
    }, [dispatch, error, alert, navigate, isAuthenticated])

  return (
    <>
    <MetaData title={"Register - VedicHeal"}/>
    <div className="register">
      <form className="registerForm" onSubmit={submitHandler}>
        <Typography className="register_header">
          <h1>Register</h1>
        </Typography>
        {/* <Avatar src={avatar} alt="User" sx={{ height: "10vmax", width: "10vmax" }} ></Avatar> */}
        {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
        <input
          className="registerInputs"
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="registerInputs"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="registerInputs"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="registerInputs"
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Link to="/login" className="sub-part">
          <Typography>Already have a Account? Login Now</Typography>
        </Link>
        <button className="loginButton" type="submit">
          <Typography>Sign Up</Typography>
        </button>
        <p className="divider">
          <span className="divider-line"></span>
          <span style={{ color: "white" }}>OR</span>
          <span className="divider-line"></span>
        </p>
        <div className="authButtons">
          <li onClick={signInWithGoogle}>
              <img src={Google} alt="Google" />
          </li>
          <li onClick={signInWithFacebook}>
              <img src={Facebook} alt="Facebook" />
          </li>
          <li onClick={signInWithGithub}>
              <img src={Github} alt="Github" />
          </li>
        </div>
      </form>
    </div>
    </>
  );
}

export default Register;
