import React from 'react'
import './poster.css'

import FloatImg from "../../Assets/yogaHerbs.png"

const Poster = () => {
  return (
    <div className='Poster'>
        <div className="poster_left">
            <div className="quotes_header">
                <h1>Learn To Live in Harmony with Nature.</h1>
            </div>
        </div>
        <div className="poster_right">
            <img src={FloatImg} alt="" className='floatImg' />
        </div>
    </div>
  )
}

export default Poster
