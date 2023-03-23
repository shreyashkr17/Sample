import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "./ProfileImage.css";

function ProfileImage() {

    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/profile");
    }

  return (
    <div className='imageContainer' onClick={goToProfile}>
        <img src={user.avatar} alt={user.displayName} />
    </div>
  )
}

export default ProfileImage