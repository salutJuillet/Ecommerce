import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import TopIn from './TopIn'

const Top = () => {
  const [tops, setTops] = useState([]); 
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
      async function fetchData() {
          setLoading(true);
          const response = await axios.get('./json/top.json');
          setTops(response.data.slice(0, 10));
          setLoading(false);
      }
      fetchData();
  },[]);
  console.log(tops);
  return (
    <>
      <h1 className="shopT-title">
         <Link to="/top/top">TOP</Link>
      </h1>
      <TopIn tops={tops} loading={loading} />
    </>
  )
}

export default Top