import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../firebase";
// import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Google from "../../Assets/icons/google-oauth.png";
import Facebook from "../../Assets/icons/fb-oauth.png";
import Github from "../../Assets/icons/github-oauth.png";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { authWithFacebook, authWithGitHub, authWithGoogle, clearErrors, loginUser } from "../../actions/userAction";
import MetaData from "../layouts/MetaData";

// import { loginUser } from "../../Actions/User";
// import { useAlert } from "react-alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();

    const {error, loading, isAuthenticated} = useSelector((state) => state.user);
  //   const {message} = useSelector((state) => state.like);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
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

    useEffect(() => {
        if(error){
            alert.error("Incorrect Email or Password");
            dispatch(clearErrors());
        }
        if(isAuthenticated){
          navigate("/");
          alert.success("Login Successful");
        }
    }, [dispatch, error, alert, navigate, isAuthenticated])

  return (
    <>
    <MetaData title={"Login - VedicHeal"}/>
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography className="login_header" variant="h3">
          <h1>Login</h1>
        </Typography>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgot/password" className="sub-part">
          <Typography>Forgot Password?</Typography>
        </Link>
        <button className="loginButton" type="submit">
          <Typography>Login</Typography>
        </button>
        <Link to="/register" className="sub-part">
          <Typography>New User?</Typography>
        </Link>
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

export default Login;
