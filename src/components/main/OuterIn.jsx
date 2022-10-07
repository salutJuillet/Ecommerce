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
const OuterIn = ({ outers, loading }) => {

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
                   outers.map(outer=>(
                       <Li key={outer.id}>
                           <div className="card-img">
                               <img src={"./pdimages/"+outer.image} alt={outer.title}></img>
                           </div>
                           <h3 className="card-title">{outer.title}</h3>
                           <p className="card-desc">{outer.desc}</p>
                           <div className="card-footer">
                                <p className="or-price"><del>{commas(outer.price)} 원</del></p>
                                <p className="sale-price">{commas(outer.price * outer.sale/10)} 원 ({outer.sale/10}% DC)</p>
                           </div>
                       </Li>
                   ))
               }
           </UL>
       </Container>
    </>
  )
}

export default OuterIn