import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import OuterIn from './OuterIn'

const Outer = () => {
  const [outers, setOuters] = useState([]); 
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
      async function fetchData() {
          setLoading(true);
          const response = await axios.get('./json/outer.json');
          setOuters(response.data.slice(0, 10));
          setLoading(false);
      }
      fetchData();
  },[]);
  console.log(outers);
  return (
    <>
      <h1 className="shopT-title">
         <Link to="/outer/outer">OUTER</Link>
      </h1>
      <OuterIn outers={outers} loading={loading} />
    </>
  )
}

export default Outer