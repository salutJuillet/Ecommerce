import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DressIn from './DressIn'

const Dress = () => {
  const [dresses, setDresses] = useState([]); 
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
      async function fetchData() {
          setLoading(true);
          const response = await axios.get('./json/dress.json');
          setDresses(response.data.slice(0, 10));
          setLoading(false);
      }
      fetchData();
  },[]);
  return (
    <>
      <h1 className="shopT-title">
         <Link to="/dress/dress">DRESS</Link>
      </h1>
      <DressIn dresses={dresses} loading={loading} />
    </>
  )
}

export default Dress