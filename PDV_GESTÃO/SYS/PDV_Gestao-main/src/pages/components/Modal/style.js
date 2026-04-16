import styled from 'styled-components';
import { color } from '../../../globalStyle'

export const CloseBackContainer = styled.div`
  
display:flex;
justify-content:space-between;

`


export const BackgroundModal = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.60);
    z-index:4

`

export const ContainerModal = styled.div`
display:flex;
flex-direction:column;
background: #FFF;
border-radius:5px;
padding:20px;
width: ${props => props.width};
height:${props => props.height};

input {
    flex-grow:1;
    
    padding-left:12px;
    border-radius:5px;
    color:#000;
    border:none;
    height:40px;


    ::placeholder {
        font-size:13px;
        text-transform:initial;
    }
}
`


export const CloseContainer = styled.div`
  
    display:flex;
    justify-content:end;
`

export const ButtonExit = styled.button`
    font-size:25px;
    height:25px;
`

export const TitleContainer = styled.div``

export const Title = styled.p`
    font-size:20px;
    text-align:center;
    margin:0px 0px 30px 0px;
`


export const Button = styled.button`
   
    width:90px;
    flex:1;
    font-size:20xpx;
    background-color: ${props => props.color};
    color:#FFF;
    padding :10px;

    border-radius:5px;
    margin:3px;
  
`

export const ButtonBack = styled.button`
    font-size:25px;
    margin-right:auto;
`

export const TitleContainerPrice = styled.span`
    font-weight:100;
    font-size:15px;
`

export const TotalPrice = styled.span`
    font-size:35px;
    color:${color.brand}
`
export const ContainerTotal = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    
`

export const ButtonContainer = styled.div`
        display:flex;
        justify-content:space-between;
`;

