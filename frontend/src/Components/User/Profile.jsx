import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../layouts/Loader/Loader'
import MetaData from '../layouts/MetaData'
import { useNavigate } from 'react-router-dom'
import "./Profile.css";
import { logoutUser } from '../../actions/userAction'
import Navbar from '../Navbar/navbar'

function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, loading, isAuthenticated} = useSelector((state) => state.user)

    const logoutTrigger = async() => {
      dispatch(logoutUser());
      navigate("/login");
    }

    useEffect(()=>{
      if(!user){
        navigate("/login");
      }
        if(isAuthenticated === false || user === null){
          dispatch(logoutUser());
            navigate("/login");
        }
    },[isAuthenticated, navigate, dispatch, logoutUser])

  return (
    <>
        {loading ? <Loader/>: (
            <>
            <MetaData title={`${user ? user.displayName : "none"}'s Profile`} />
            <Navbar/>
            <div className="profileContainer">
                <div>
                    <h1>My Profile</h1>
                    <img src={user.photoURL} alt={user.displayName} />
                    <Link to = "/me/update">Edit Profile</Link>
                    <button onClick={logoutTrigger}>LogOut</button>
                </div>
                <div>
                    <div>
                        <h4>Full Name</h4>
                        <p>{user.displayName}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <h4>Joined On</h4>
                        <p>{String(user.createdAt).substring(0, 10)}</p>
                    </div>
                    <div>
                        <Link to="/orders">My Orders</Link>
                        <Link to="/password/update">Change Password</Link>
                    </div>
                </div>
            </div>
        </>
        )}
    </>
  )
}

export default Profile