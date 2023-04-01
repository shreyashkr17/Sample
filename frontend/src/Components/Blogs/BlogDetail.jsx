import { async } from '@firebase/util';
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
      <div>
        <h1>{data.heading}</h1>
        <p>{data.desc}</p>
        <img className="blogImg" src={data.image} alt="" />
      </div>
    </>
  )
}

export default BlogDetail