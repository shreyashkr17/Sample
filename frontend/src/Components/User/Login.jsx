import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Google from "../../Assets/icons/google-oauth.png";
import Facebook from "../../Assets/icons/fb-oauth.png";
import Github from "../../Assets/icons/github-oauth.png";

// import { loginUser } from "../../Actions/User";
// import { useAlert } from "react-alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const alert = useAlert();

//   const {error} = useSelector((state) => state.user);
//   const {message} = useSelector((state) => state.like);

  const loginHandler = (e) => {
    // e.preventDefault();
    // dispatch(loginUser(email, password));
  };
  
//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch({ type: "clearErrors" });
//     }
//     if (message) {
//       alert.success(message);
//       dispatch({ type: "clearMessage" });
//     }
    
//   }, [dispatch, error, alert, message]);

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography className="login_header" variant="h3">
          <h1>VedicHeal</h1>
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
        <Link to="/forgot/password">
          <Typography>Forgot Password?</Typography>
        </Link>
        <button className="loginButton" type="submit">
            <Typography>Login</Typography>
        </button>
        <Link to="/register">
          <Typography>New User?</Typography>
        </Link>
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
  );
}

export default Login;
