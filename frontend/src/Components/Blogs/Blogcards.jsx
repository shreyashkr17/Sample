import React from 'react'
import Navbar from "../Navbar/navbar"
import "./blogcards.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';

const Blogcards = ({blog, blogId}) => {
  return (
    <Link id='blogs' to={`/blog/${blogId}`} style={{textDecoration: "none"}}>
        {/* <h1>{blog?.heading}</h1> */}
        {/* <Navbar/> */}
        <div className="blogsupdate">
            <div className="blogcard1">
                <div className="blog_topic_one_liner">
                    <h1>{blog?.heading}</h1>
                </div>
                <div className="right_arr">
                    <KeyboardDoubleArrowRightIcon fontSize='large' className='rightdir'/>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Blogcards
