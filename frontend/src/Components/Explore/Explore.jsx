import React, { useEffect, useState } from "react";
import "./explore.css";
import Navbar from "../Navbar/navbar";

import { Link } from "react-router-dom";

import Blog from "../../Assets/Blog.gif";
import videoPlayer from "../../Assets/videoPlayer.gif";
import Map from "../../Assets/map.gif";

import Blogcards from "../Blogs/Blogcards";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Explore = () => {
  let blogs;
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    (async () => {
      blogs = await getDocs(collection(db, "Blogs"));
      const Data = [];
      blogs.docs.forEach((doc) => {
        const val = {
          id: doc.id,
          data: doc.data(),
        };
        Data.push(val);
      });
      setBlogsData(Data);
    })();
  }, [setBlogsData]);

  return (
    <>
      <Navbar />
      <div className="Explore">
        <div className="explore_page">
          <div className="exp_poster">
            <div className="card1">
              <div className="glass_card">
                <Link to="/blogs">
                  <img src={Blog} alt="" className="bloggif" />
                </Link>
              </div>
            </div>
            <div className="card2">
              <div className="glass_card">
                <Link to="#">
                  <img src={videoPlayer} alt="" className="bloggif" />
                </Link>
              </div>
            </div>

            <div className="card3">
              <div className="glass_card">
                <Link to={"/map"}>
                  <img src={Map} alt="" className="bloggif" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blogData">
          {blogsData.map((blog) => (
            //   console.log(blog.id),
            <Blogcards key={blog.id} blog={blog.data} blogId={blog.id} />
          ))}
        </div>
        {/* <Blogcards/> */}
      </div>
    </>
  );
};

export default Explore;
