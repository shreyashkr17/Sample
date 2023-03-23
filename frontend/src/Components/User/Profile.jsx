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
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../../firebase'

function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, loading, isAuthenticated} = useSelector((state) => state.user)

    const logoutTrigger = async() => {
      dispatch(logoutUser());
      navigate("/login");
    }

    console.log(auth.currentUser);

    useEffect(()=>{
      if(!user){
        navigate("/login");
      }
        if(isAuthenticated === false || user === null){
          dispatch(logoutUser());
            navigate("/login");
        }
    },[isAuthenticated, navigate, dispatch, user])

  return (
    <>
        {loading ? <Loader/>: (
            <>
            <MetaData title={`${user.name}'s Profile`} />
            <Navbar/>
            <div className="profileContainer">
                <div>
                    <h1>My Profile</h1>
                    <img src={user.avatar} alt={user.name} />
                    <Link to = "/profile/update">Edit Profile</Link>
                    <button onClick={logoutTrigger}>LogOut</button>
                </div>
                <div>
                    <div>
                        <h4>Full Name</h4>
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <h4>Mobile No.</h4>
                        <p>{user.mobile}</p>
                    </div>
                    <div>
                        <h4>Joined On</h4>
                        <p>{String(user.createdAt).substring(0, 10)}</p>
                    </div>
                    {user.age && (
                        <div>
                          <h4>Age</h4>
                          <p>{user.age}</p>
                        </div>
                    )}
                    {user.gender && (
                        <div>
                          <h4>Gender</h4>
                          <p>{user.gender}</p>
                        </div>
                    )}
                    {user.dob &&(
                        <div>
                          <h4>Date of Birth</h4>
                          <p>{user.dob}</p>
                        </div>
                    )}
                    {user.country && user.state && user.city && (
                        <div>
                          <h4>Location</h4>
                          <p>{user.country}, {user.state}, {user.city}</p>  
                        </div>
                    )}
                </div>
            </div>
        </>
        )}
    </>
  )
}

export default Profile