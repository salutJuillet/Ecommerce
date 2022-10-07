import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import BottomIn from './BottomIn'

const Bottom = () => {
  const [bottoms, setBottoms] = useState([]); 
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
      async function fetchData() {
          setLoading(true);
          const response = await axios.get('./json/bottom.json');
          setBottoms(response.data.slice(0, 10));
          setLoading(false);
      }
      fetchData();
  },[]);
  console.log(bottoms);
  return (
    <>
      <h1 className="shopT-title">
          <Link to="/bottom/bottom">BOTTOM</Link>
      </h1>
      <BottomIn bottoms={bottoms} loading={loading} />
    </>
  )
}

export default Bottom