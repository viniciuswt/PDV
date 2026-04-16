import styled from 'styled-components'
import { color } from '../../../globalStyle';


export const ContainerTable = styled.div`
margin: 2vh 0px;
flex: 1 1 0%;
background-color: rgb(255, 255, 255);
box-shadow: rgb(8 21 66 / 15%) 0px 0px 40px;
overflow: auto;
`

export const ProductTable = styled.table`
    text-align:justify;
    width:100%;
    padding:15px 40px;
    td {
        padding:8px 0px;
    }
    tr:nth-of-type(1) {
       td {
        padding-top:20px;
       }
    }
`;
export const TableHead = styled.tr`
   
    font-size:14px;
    th {
        position: sticky;
        top: 0;
        background:#FFF;
        
    }
    th:nth-of-type(5) {
        text-align:end;
    }
   
    
`;
export const TableBody = styled.tr`
   
    font-size:22px;
  

  
    td:nth-of-type(4),td:nth-of-type(5) {
        color:${color.brand};
        font-weight:bold;
    }

    td:nth-of-type(5),  td:nth-of-type(6) {
        text-align:end;
    }
    .quantityDiv {
        display:flex;
        align-items:center;
      
    }
 `;

 export const InputQuantity = styled.input`
    height:22px;
    width:31px;
    font-size:18px;
    padding:0;
    border-radius:5px;
    text-align:center;
 
 `;


 export const QuantityButton = styled.button`
    font-size:29px;
    height:30px;
    display:flex;
    align-items:center;
`
 export const Button = styled.button`
    font-size:22px;
 `