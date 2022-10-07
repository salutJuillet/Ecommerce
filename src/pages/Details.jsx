import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   width:1300px;
   margin:0 auto;
   padding-top: 50px;
   padding-bottom:30px;
   display:flex;
`
const Col40 = styled.div`
  flex:0 0 40%;
  max-width:40%;
`
const Col50 = styled.div`
  flex:0 0 50%;
  max-width:50%;
  border:1px solid #ddd;
`
const Col10 = styled.div`
  flex:0 0 10%;
  max-width:10%;
  background:#eee;
`
const BigThumbnail = styled.div`
  border:1px solid #ddd;
  padding:10px;
  margin-bottom:5px;
`
const SmallThumbnail = styled.div`
  display:flex;
  align-items:center;
  padding:10px;
  border:1px solid #ddd;
`
const ItemInfo = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
`

const Details = () => {
  return (
    <Container>
      <Col40>
        <BigThumbnail>
          <img src="" alt="" />
        </BigThumbnail>
        <SmallThumbnail>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </SmallThumbnail>
      </Col40>
      <Col50>
        <form method="post">
          <ItemInfo>
            <li><label>할인가</label> <p>99999원</p></li>
            <li><label>판매가</label> <del><p>199999원</p></del></li>
            <li><label>적립금</label> <p>5%</p></li>
            <li>
              <label>옵션</label> 
              <select>
                <option></option>
              </select>
            </li>
            <li>
              <label>옵션</label> 
              <select>
                <option></option>
              </select>
            </li>
          </ItemInfo>
        </form>
      </Col50>
      <Col10>col10</Col10>
    </Container>
  )
}

export default Details