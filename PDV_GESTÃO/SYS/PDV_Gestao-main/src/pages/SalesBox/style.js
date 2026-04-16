import styled from 'styled-components'
import { color } from '../../globalStyle';


export const GridBox = styled.div`
    margin-top:4vh;
    display:grid;
    grid-template-columns: 1fr 1fr; 
    column-gap:8vw;
    overflow:auto;

    row-gap:6vh;
   
`
export const SaleBox = styled.div`
    border-left:${props => props.active ? `3px solid ${color.brand}` : '3px solid #D3384B'};
    padding:2.3vh;
    display:flex;
    justify-content:space-between;
    background:#FFF;
    -webkit-box-shadow: 0 0 40px rgb(8 21 66 / 15%);
    
    button {font-size:2rem;}
    color: ${props => props.active ? color.brand : '#D3384B'};
`
export const InfosBox = styled.div`
font-size:1.3rem;


`
export const NameBox = styled.p` 
    color:#000;
    margin-bottom:3vh;
`
export const MoneyBox = styled.p`

font-size:1.5rem;
    
`
