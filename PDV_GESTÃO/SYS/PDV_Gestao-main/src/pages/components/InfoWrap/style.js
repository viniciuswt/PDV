import styled from 'styled-components';
import { color } from '../../../globalStyle';

export const ContainerInfo = styled.div`
    display:flex;
    flex-direction:column;
    
    width:${props => props.width};
    align-items:center;
    justify-content:center;
    cursor:  ${props => props.cursor ? "pointer" : "default"};
    border: ${props => props.border ? "1px solid rgba(0,0,0,0.1);" : null}
    -webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
    box-shadow: 0 0 40px rgb(8 21 66 / 15%);
    padding: ${props => props.medium ? "13px;" : "15px"};
   
    background-color:${props => props.bgC === '#FFF' ? color.brand : '#FFF'};
    border-radius:5px;
    
`

export const Text = styled.p`
    font-weight:normal;
    margin: 0;
    font-size:19px;
    color:${props => props.colorText === '#FFF' ? '#FFF' : '#000'};
    
`

export const Value = styled.p`
    display:flex;
    align-items:center;
    margin:0;
    font-size: ${props => props.medium ? '21px' : '27px'};
    color: ${color.brand};
    color: ${props => props.bgColor};
    span {
        display:flex;
        padding-right:0.2vw;
        align-self:center;
    }

    svg {
        font-size:20px;
        color:#00ff3b;
    }
`