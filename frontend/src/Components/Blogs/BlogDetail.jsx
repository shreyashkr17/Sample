import { async } from '@firebase/util';
import Navbar from "../Navbar/navbar"
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import "./BlogDetail.css"

function BlogDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const blogs = await getDocs(collection(db, "Blogs"));
      blogs.docs.map((doc) => {
        if(doc.id === id){
          setData(doc.data());
        }
      })
    })();
  }, [])

  return (
    <>
      <Navbar/>
      <div className="BlogDetailsContainer">
        <div className="BlogDetailPart">
          <div className="BlogPart1">
            <h1 className='BlogPart1Heading'>{data.heading}</h1>
          </div>
          <div className="BlogPart2">
            <div className="BlogPartImage">
              <img src={data.image} alt="" className='BlogImage' />
            </div>
          </div>
          <div className="BlogPart3">
            <div className="BlogPartDesc">
              <p>{data.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail

{/* <h1>{data.heading}</h1>
        <p>{data.desc}</p>
        <img className='blogImage' src={data.image} alt="" /> */}