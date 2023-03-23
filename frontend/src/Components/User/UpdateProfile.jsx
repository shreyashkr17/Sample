import React, { useState, useEffect } from "react";
import "./UpdateProfile.css";
import Loader from "../layouts/Loader/Loader";
import MetaData from "../layouts/MetaData";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessibilityRoundedIcon from "@mui/icons-material/AccessibilityRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import Face from "@mui/icons-material/Face";
import Public from "@mui/icons-material/Public";
// import DtPicker from 'react-calendar-datetime-picker'
import Phone from "@mui/icons-material/Phone";
import TransferWithinAStation from "@mui/icons-material/TransferWithinAStation";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";

import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  loadUser,
  updateProfileData,
} from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstant";

function UpdateProfile() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [mobile, setMobile] = useState("");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = {
      name: name,
      email: email,
      avatar: avatar,
      age: age,
      gender: sex,
      city: city,
      state: state,
      country: country,
      dob: date,
      mobile: mobile,
    };
    dispatch(updateProfileData(myForm, user.uid));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar);
      setAge(user.age);
      setSex(user.gender);
      setCountry(user.country);
      setState(user.state);
      setCity(user.city);
      setDate(user.dob);
      setMobile(user.mobile);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      (async () => {
        await dispatch(loadUser(user.uid));
      })();
      navigate("/profile");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    } else {
      console.log(isUpdated);
    }
  }, [dispatch, error, alert, navigate, user, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Update Profile" />
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>
              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={updateProfileSubmit}
              >
                <div className="updateProfileName">
                  <Face />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <Phone />
                  <input
                    type="tel"
                    name="telphone"
                    placeholder="Contact Number"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    maxlength="12"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <AccessibilityRoundedIcon />
                  <input
                    type="string"
                    placeholder="Age"
                    required
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <WcRoundedIcon />
                  <select
                    type="string"
                    placeholder="Gender"
                    required
                    name="gender"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <Public />
                  <select
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Country</option>
                    {Country &&
                      Country.getAllCountries().map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                {country && (
                  <div>
                    <HomeWorkOutlinedIcon />
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">State</option>
                      {State &&
                        State.getStatesOfCountry(country).map((item) => (
                          <option key={item.name} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                {state && (
                  <div>
                    <LocationCityOutlinedIcon />
                    <input
                      type="string"
                      placeholder="City"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                )}

                <div className="updateProfileEmail">
                  <AccessibilityRoundedIcon />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    required
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div id="updateProfileImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default UpdateProfile;
