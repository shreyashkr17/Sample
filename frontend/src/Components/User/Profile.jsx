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
// import userMale from "../../Assets/userMale.png"
import DefaultImg from "../../Assets/yogaHerbs.png"

function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, loading, isAuthenticated} = useSelector((state) => state.user)

    const logoutTrigger = async() => {
      dispatch(logoutUser());
      navigate("/login");
    }

    useEffect(()=>{
      if(user && user.avatar === null){
        user.avatar = DefaultImg;
      }
    },[navigate, user])

  return (
    <>
        {loading ? <Loader/>: (
            <>
            <MetaData title={`${user.name}'s Profile`} />
            <Navbar/>
            <div className="profileContainer">
                <div className="profile_inner">
                  <div className="top_profile">
                    <div className="top_profile_container">
                      <h1>MY PROFILE</h1>
                    </div>
                  </div>
                  <div className="down_profile">
                    <div className="left_profile">
                      <div className="left_profile_container">
                        <div className="profile_img">
                          <img src={user.avatar} alt={user.name} className="userImg" />
                        </div>
                        <div className="profile_func_btn">
                          {/* <h3>{user.name}</h3> */}
                          <Link to = "/profile/update" className='edit_profile'>
                            <button>EDIT PROFILE</button>
                          </Link>
                          <button className='logOutbtn' onClick={logoutTrigger}>LOG OUT</button>
                        </div>
                      </div>
                    </div>
                    <div className="right_profile">
                      <div className="right_profile_container">
                        <div className="section1">
                          <div className="name_label">
                            <label className="nameLabel">Name :</label>
                          </div>
                          <div className="nameUser">
                            <h5 className='headNameUser'>{user.name}</h5>
                          </div>
                        </div>
                        <div className="section1">
                          <div className="email_label">
                            <label>Email : </label>
                          </div>
                          <div className="emailName">
                            <h5 className='emailUser'>{user.email}</h5>
                          </div>
                        </div>
                        <div className="section1">
                          {user.mobile && (
                            <>
                              <div className="Phonelabel">
                                <label className='labelUser'>Phone No. :</label>
                              </div>
                              <div className='numberUser'>
                                <h5 className='number'>{user.mobile}</h5>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="section1">
                            <div className="left_section1">
                                {user.age && (
                                  <>
                                    <div className="Agelabel">
                                      <label className="ageLabelUser">Age :</label>
                                    </div>
                                    <div className="ageUser">
                                      <h5 className="age">{user.age}</h5>
                                    </div>
                                  </>
                                )}
                            </div>
                            <div className="right_section1">
                                {user.gender && (
                                  <>
                                    <div className="Genderlabel">
                                      <label className="genderLabelUser">Gender :</label>
                                    </div>
                                    <div className="genderUser">
                                      <h5 className="gender">{user.gender}</h5>
                                    </div>
                                  </>
                                )}
                            </div>
                        </div>
                        <div className="section1">
                          {user.dob && (
                            <>
                              <div className="dobLabel">
                                <label className="dobLabelUser">Date Of Birth :</label>
                              </div>
                              <div className="dobUser">
                                <h5 className="dob">{user.dob}</h5>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="section1">
                            {(user.country || user.state || user.city) && (
                              <>
                                <div className="locationLabel">
                                  <label className="locationLabelUser">Location :</label>
                                </div>
                                <div className="locationUser">
                                  <h5 className="location">
                                    {user.city && user.city + ", "}
                                    {user.state && user.state + ", "}
                                    {user.country && user.country}
                                  </h5>
                                </div>
                              </>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
            </div>
            </>
        )}
    </>
  )
}

export default Profile


{/* <div>
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
                    {user.mobile && (<div>
                        <h4>Mobile No.</h4>
                        <p>{user.mobile}</p>
                    </div>)}
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
                </div> */}