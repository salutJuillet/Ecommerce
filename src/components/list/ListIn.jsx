import React from 'react'
import { Link } from 'react-router-dom'

function commas(num){
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}  

const ListIn = ({lists, offset, limit, col}) => {
  return (
    <div className="listCont">
      {
         lists.slice(offset, offset + limit).map((data)=>(
            
            <div key={data.id} className={col}>
               <div className="imgBox">
                   <img src={"../../pdimages/"+data.image} alt={data.title} />
               </div>
               <h3>{data.title}</h3>
               <span className="nprice">{commas(data.price * (1-data.sale/10))}원</span>
               <span className="oprice"><del>{commas(data.price)}원</del></span>
               <div className="prmode">
               {
                  (data.new)?<span className="new">NEW</span>:null
               }
               {
                  (data.event)?<span className="event">EVENT</span>:null
               }
               {
                  (data.sale)?<span className="sale">↓{data.sale/10}%</span>:null
               }
               </div>
            </div>
         ))
      }

    </div>
  )
}

export default ListIn