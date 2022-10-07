import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CatContainer = styled.div`
    width:100%;
    padding:20px;
    background:#ededed;
    border-bottom:1px solid #ededed;
    position:absolute;
    z-index:1000;
    top:55px;
    left:0;
`
const Wrapper = styled.div`
   width: 1300px;
   max-width: 100%;
   margin-left:auto;
   margin-right:auto;
   display:flex;
   align-items: center;
   justify-content: space-between;
   text-align:center;
`
const Category = (props) => {
    const cat = props.category.map((m)=>(
        <li key={m.id}><Link to={`/${m.alink}/${m.alink}`} 
                className='main-nav'
                onClick={()=>{props.setShowCategory(false)}}   
             >{m.title}</Link>
            {
                m.subarray && <ul>
                    {
                        m.subarray.map((n) => {
                            return(
                                <li key={n.id}><a href={'/'+n.alink+'/'} key={n.id} className='sub-nav'>{n.title}</a></li>
                            )
                        })
                    }
                </ul>
            }
        </li>
    ));

  return (
      <CatContainer>
          <Wrapper>
             <ul className="category"> 
               {cat}
             </ul> 
          </Wrapper>
      </CatContainer>      
  )
}

export default Category