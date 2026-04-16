import styled from 'styled-components'
import { color } from '../../globalStyle';


export const ContainerMenu = styled.div`
`;

    

export const ContainerRadio = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0 5vh;
    margin-bottom:5vh;

` 

export const ContainerInfo = styled.div`
  
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1.5fr;
    column-gap:10px;
   
    align-items:stretch;
    
`

export const ContainerInput = styled.div`
    
    display:flex;
    height:60px;
    width:100%;
`


export const InputCode = styled.input`
    text-transform: uppercase;
    flex-grow:3;
    padding-left:80px;
    border-radius:5px 0 0 5px;
    -webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
    box-shadow: 0 0 40px rgb(8 21 66 / 15%);
    font-size:15px;
    border:none;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 15px;
    background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="%23000000" d="M4 5h4V3H4c-1.103 0-2 .897-2 2v4h2V5zm0 16h4v-2H4v-4H2v4c0 1.103.897 2 2 2zM20 3h-4v2h4v4h2V5c0-1.103-.897-2-2-2zm0 16h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4z M5 7h2v10H5zm9 0h1v10h-1zm-4 0h3v10h-3zM8 7h1v10H8zm8 0h3v10h-3z"></path></svg>');

    ::placeholder {
        font-weight: bold;
        text-transform: initial;
    }
    &:focus {
        outline: none;
    }

    
`

export const ButtonAdd = styled.button`
    border:none;
    background-color: ${color.brand};
    font-size: 15px;
    color: #FFF;
    flex-grow:0.5;
    border-radius:0 5px 5px 0;
    -webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
    box-shadow: 0 0 40px rgb(8 21 66 / 15%);
    border-left:none;
    text-align:center;


`


export const ButtonSale = styled.button`
    display:flex;
    background-color: ${color.brand};
    flex-direction:column;
    font-size:20px;
    align-items:center;
    justify-content:center;
    color:#FFF;
    -webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
    box-shadow: 0 0 40px rgb(8 21 66 / 15%);
    padding:15px;
    border-radius:5px;

    &:disabled {
        opacity:0.6;
    }
`

export const Searchs = styled.div`
position:relative;
z-index:3;


`

export const ContainerSearch =styled.div`
width:40%;
-webkit-box-shadow: 0px 3px 29px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 29px -10px rgba(0,0,0,0.75);
box-shadow: 0px 3px 29px -10px rgba(0,0,0,0.75);
background-color:#fff;
border-radius:5px;
position:absolute;
top:4px;
max-height:300px;`


export const Search = styled.p`
    padding:10px 1.4vw;
    font-weight:normal;
    text-transform:uppercase;
    &:hover {
        background:#f3f3f3;
    }
    background:${props => props.active ? '#f3f3f3' : null}
`
export const Keys = styled.div`
margin-top:2vh;
display:flex;
justify-content:center;
gap:10px;`

export const KeyButton = styled.button`
    
    border-radius:5px;
    color:#FFF;
    padding:10px;
    background:${props=>props.bg}

`
export const ActiveBarCode = styled.div`
    display:flex;
    font-size:0.8rem;
`
export const ContainerSearchInput = styled.div``