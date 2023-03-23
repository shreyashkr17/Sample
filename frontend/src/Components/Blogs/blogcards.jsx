import React from 'react'
import Navbar from "../Navbar/navbar"
import "./blogcards.css"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const blogcards = () => {
  return (
    <div id='blogs'>
        {/* <Navbar/> */}
        <div className="blogsupdate">
            <div className="blogcard1">
                <div className="blog_topic_one_liner">
                    <h1>ALL ABOUT AYURVEDA</h1>
                </div>
                <div className="right_arr">
                    <KeyboardDoubleArrowRightIcon fontSize='large' className='rightdir'/>
                </div>
            </div>
            <div className="blogcard1">
                <div className="blog_topic_two_liner">
                    <h1>Does turmeric relieve inflammatory condition? All about other element for relieves in inflammatory condition.</h1>
                </div>
                <div className="right_arr">
                    <KeyboardDoubleArrowRightIcon fontSize='large' className='rightdir'/>
                </div>
            </div>
            <div className="blogcard1">
                <div className="blog_topic_one_liner">
                    <h1>Ayurvedic Medicine for diabetic mellitus.</h1>
                </div>
                <div className="right_arr">
                    <KeyboardDoubleArrowRightIcon fontSize='large' className='rightdir'/>
                </div>
            </div>
            <div className="blogcard1">
                <div className="blog_topic_one_liner">
                    <h1>Cancer and Its cure relationship with Ayurveda.</h1>
                </div>
                <div className="right_arr">
                    <KeyboardDoubleArrowRightIcon fontSize='large' className='rightdir'/>
                </div>
            </div>
            <div className="blogcard1">
                <div className="blog_topic_one_liner">
                    <h1>Ulcer and its relation with Ayurveda cure sites.</h1>
                </div>
                <div className="right_arr">
                    <KeyboardDoubleArrowRightIcon fontSize='large' className='rightdir'/>
                </div>
            </div>
            <div className="blogcard1">
                <div className="blog_topic_two_liner">
                    <h1>Alternative to Glucosamine and celecoxib in the treatment of symptomatic knee osteoarthritis: a randomized, double-blind, controlled equivalence Drug Trial.</h1>
                </div>
                <div className="right_arr">
                    <KeyboardDoubleArrowRightIcon fontSize='large' className='rightdir'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default blogcards
