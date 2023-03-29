import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./Components/Search/Search";
import Home from "./Components/HomePage/Home";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Profile from "./Components/User/Profile";
import Explore from "./Components/Explore/Explore";
import Map from "./Components/Map/Map";
import UpdateProfile from "./Components/User/UpdateProfile";
import Blog from "./Components/Blogs/Blogcards";
import DiseaseDetail from "./Components/DiseaseDetail/DiseaseDetail";
import { useSelector } from "react-redux";
import BlogDetail from "./Components/Blogs/BlogDetail";

function App() {
  const { disease } = useSelector((state) => state.diseases);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {disease ? (
          <Route path="/disease/:id" element={<DiseaseDetail />} />
        ) : (
          <Route path="/search" element={<Search />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update" element={<UpdateProfile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/map" element={<Map />} />
        <Route path="/blog/:id" element={<BlogDetail/>} />
        {/* <Route path="#blogs" element={<Blog/>} /> */}
        {/* <Route path="/blogs" element={<Blog/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
