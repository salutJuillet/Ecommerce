import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:1300px;
    margin:40px auto 30px;
    height:auto;
`
const UL = styled.ul`
    margin-left:-15px;
    margin-right:-15px;
    padding:0;
    display:flex;
    flex-flow: row wrap;
    list-style-type:none;
`
const Li = styled.li`
    flex: 20%;
    padding:15px;
`
const Card = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const DressIn = ({ dresses, loading }) => {

  function commas(num){
      return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }  

  return (
    <>
    {
        loading && 
         <div> 로딩중 ... </div>
    }
       <Container>
           <UL>
               {
                   dresses.map(dr => (
                       <Li key={dr.id}>
                           <div className="card-img">
                               <img src={"./pdimages/"+dr.image} alt={dr.title}></img>
                           </div>
                           <h3 className="card-title">{dr.title}</h3>
                           <p className="card-desc">{dr.desc}</p>
                           <div className="card-footer">
                                <p className="or-price"><del>{commas(dr.price)} 원</del></p>
                                <p className="sale-price">{commas(dr.price * dr.sale/10)} 원 ({dr.sale/10}% DC)</p>
                           </div>
                       </Li>
                   ))
               }
           </UL>
       </Container>
    </>
  )
}

export default DressIn