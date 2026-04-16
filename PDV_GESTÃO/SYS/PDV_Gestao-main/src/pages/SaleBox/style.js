import styled from 'styled-components'
import { color } from '../../globalStyle'

export const UserContainer = styled.div`

-webkit-box-shadow: 0 0 40px rgb(8 21 66 / 15%);`

export const UserContent = styled.div`
padding:0px 2vh;
padding-bottom:2vh;
`

export const Action = styled.div`
    padding: 2vh 0px;
   
    display:flex;
  
    align-items:center;
    width:220px;
 
    

    
`
export const TableUser = styled.table`

border-bottom: thin solid #dddddd;
border-collapse: collapse;
width:100%;


thead{border-bottom: thin solid #dddddd;}
th {text-align:start;text-transform:uppercase;}
svg {
display:flex;
align-items:center;
font-size:20px;
}
th,td { padding: 13px 8px;}


tr {
    border-bottom: 0.5px solid #dddddd;
    .actions {
        display:flex;
        button {
            padding:0px 2px;
        }
    }
}

`
export const StatusText = styled.span`
&:before {
    margin-right:4px;
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius:360px;
    top: 0;
    background:  ${props=>props.status ? `radial-gradient(circle,  ${color.brand} 0%, transparent 100%)`: `radial-gradient(circle,  ${color.cancel} 0%, transparent 100%)`};
`
export const Title = styled.h3`
font-size:20px;
`
export const Tooltip = styled.div`
    position: relative;
    display: inline-block;

    span{
        visibility:hidden;
        width: 100px;
        font-size:10px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        
        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -50px;
    }

    &:hover {
        span {
            visibility:visible;
        }
       
      }
`