import styled from 'styled-components'
import { color } from '../../globalStyle'


export const Title = styled.h2`
    padding: 1vh 0px;
`

export const InputsDiv = styled.div`
    display:grid;
    grid-template-columns: 2fr 1fr 1fr; 
    gap:20px;
    
`
export const MethodPayment = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:25px;
    height:100%;
`
export const Page = styled.div`
  `

export const Item = styled.div`
border-radius:3px;
-webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
box-shadow: 0 0 40px rgb(8 21 66 / 15%);
margin-bottom:20px;
`
export const InputDiv = styled.div`
    display:flex;
    flex-direction:column;
`
export const ContentDiv = styled.div`
    padding:18px;
    `

export const Label = styled.label`
    font-size:1.7vh;
    padding-bottom:2px;
`



export const AddDiv = styled.div`
    margin-top:2vh;
    display:grid;
    grid-template-columns: 1fr 0.8fr;
    align-items:center;

`
export const Total = styled.h3`
    font-size:17px;
    span {
        color:${color.brand};
        font-size:25px;
        margin-left:5px;
    }
`
export const ItemContent = styled.div`
    overflow:auto;
    padding:18px;
`

export const ItemHead = styled.div`
    display:grid;
    grid-template-columns: 2fr 2fr 1fr; 
    gap:20px;
    margin-bottom:10px;
`
export const ItemBody = styled.div`
    display:grid;
    gap:40px;
    grid-template-columns: 2fr 2fr 1fr; 
    gap:20px;

    p {
        margin:8px 0px;
    }

    p:nth-of-type(2) {
        color:${color.brand}
    }
    span {
        font-weight:normal;
    }

`

export const ItemTitle = styled.p``

export const Table = styled.table`
    border-spacing: 0px;
    width:100%;
    padding: 0px 1vw;
    padding-bottom:10px;
    th:last-of-type,td:last-of-type {
        text-align:end;
    }

`

export const THead = styled.tr`
 
   
    th {
        padding-bottom:2vh;
        text-align:start;
    }

`

export const Tbody = styled.tbody`
    td {
        padding:1vh 0px;
        color:#000;
    },
    
    td:nth-child(4),td:nth-child(5) {
        color:${color.brand};
    }
    td:first-of-type {
        font-weight:normal;
    },
   
`

export const Infos = styled.div`
    display:grid;
    column-gap: 10px;
    grid-template-columns:1fr 1fr 1fr 1fr;


`
export const Footer = styled.div`
    display:grid;
    width:100%;
    padding-right:1vw;
    background:#FFF;
    grid-template-columns: 4fr 1.35fr; 
`
export const ButtonItem = styled.button``
export const Buttons = styled.div`
    display:flex;
    justify-content:end;
    flex-grow:1;
    margin-left:2vw;
    align-items:center;
    column-gap:2vw;
    

  
`
