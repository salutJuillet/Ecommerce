import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import ListIn from './ListIn.jsx'
import Pagination from '../pagination/Pagination';
import axios from 'axios'

const Container = styled.div`
   width:1300px;
   margin:0 auto;
   padding-top: 50px;
   padding-bottom:30px;
`
const Titlebox = styled.div`
   width:60%;
   margin:0 auto;
   background:#ddd;
   padding:30px; 
   h1{
       padding:30px;
       background:#000;
       color:#fff;
       width:70%;
       margin:auto;
       text-align:center;
   }
`
const SortBar = styled.div`
   margin-bottom:40px;
   margin-top:40px;
   border-bottom:1px solid #999;
   display:flex;
   justify-content:flex-end;
   height:70px;
   table{
       width:40px;
       height:40px;
       margin-left:10px;
      td{
          margin:3px;
          background:#999;
      }
    }
`
const SelectBox = styled.div`
    margin-left:10px;
    padding-left:20px;
    height:40px;
    display:flex;
    align-items:center;
`
const List = () => {
  const [lists, setLists] = useState([]);  
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [col, setCol] = useState('col5');
  const [loading, setLoading] = useState(false);
  const offset = (page - 1) * limit;

  //파라미터
  const params = useParams();
  const title = params.para;

  useEffect(()=>{
    async function fetchData(){
        setLoading(true);
        const response = await axios.get(`../json/${title}.json`);
        setLists(response.data);
        setLoading(false);
    }
    fetchData();
  }, [title]);

  return (
    <Container>
       <Titlebox>
           <h1 style={{textTransform:'uppercase'}}>{title}</h1>
       </Titlebox>
       <SortBar>
           <a href="#" title="5개씩 보기" 
              onClick={(e) => { e.preventDefault(); setCol('col5') }}>
               <table className="box5sort">
                   <tbody>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   </tbody>
               </table>
           </a>
           <a href="#" title="4개씩 보기" onClick={(e) => { e.preventDefault(); setCol('col4') }}>
               <table className="box4sort">
                   <tbody>
                    <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                    </tr>
                    <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                    </tr>   
                    <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                    </tr>
                   </tbody>                
               </table>
           </a>
           <a href="#" alt="3개씩 보기" onClick={(e) => { e.preventDefault(); setCol('col3') }}>
               <table className="box3sort">
                   <tbody>
                    <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>   
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>   
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   </tbody>  
               </table>
           </a>
           <SelectBox>
               <select>
                   <option value="01">신상품순</option>
                   <option value="02">낮은 가격순</option>
                   <option value="03">높은 가격순</option>
                   <option value="04">인기순</option>
                   <option value="05">세일순</option>
               </select>
           </SelectBox>

       </SortBar>
       <p>총 {lists.length}개의 상품이 있습니다.</p>

       <ListIn lists={lists} offset={offset} limit={limit} col={col} />

       <Pagination total={lists.length} page={page} setPage={setPage} limit={limit} />
    </Container>
  )
}

export default List