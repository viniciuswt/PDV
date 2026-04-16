import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css'; 

const color = {
    brand:"#38D35C",
    background:"#F8F8F8",
    cancel:"#D3384B"
}

const margin = {
  vertical_2 : '10px'
}

const GlobalStyleBody = createGlobalStyle`

@font-face {
  font-family: "Leelawadee";   /*Can be any text*/
  src: local("Leelawadee"),
    url("/fonts/leelawad.ttf") format("truetype");
}

  html,*{
    font-family: Leelawadee, Helvetica, Sans-Serif;
  }
  body {
    background: ${color.background};
    padding:0;
    margin:0

  }
  p,button{
    font-weight:bold;
  }
  * {
  margin:0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

  button {
    cursor:pointer;
    background:none;
    border:none;
    
  }
`;
 


export const ButtonSubmit = styled.button`

  display: flex;
  flex:1;
  align-items: center;
  
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size:${props => props.small ? '12px' : props.medium ? '15px' : props.large ? '25px' : '15px'};
  color:  ${(props) => props.cancel ? color.brand : '#FFF'};
  border: ${(props) => props.cancel ? `1px solid ${color.brand};` : null}
  border-radius: ${(props) => props.rightBorder ? '3px 3px 0px 0px' : null};
  border-radius: ${(props) => (props.rounded ? '360px' : '4px')};
  
  background: ${(props) => props.cancel ? '#FFF' : color.brand};
  background: ${(props) => props.background};

  svg {
    font-size: 3vh;
    margin-right:5px;
  }

  &:disabled {
    opacity:0.6;
}
`
export const Input = styled.input`
flex-grow:1;
padding: 1vh 6px;
padding:${props => props.padding};
border: 2px solid rgba(0,0,0,0.3)!important;
border-radius:4px;
font-weight:normal;

`
export const FlexContent = styled.div`
  margin-top:40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  overflow:auto;
`

export const Select = styled.select`
font-weight:normal;
flex-grow:1;
border-radius:4px;
border: 2px solid rgba(0,0,0,0.3)`

export const Container = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    
`
export const FlexContainer = styled.div`
    display:flex;
    height:100vh;
`;

export {GlobalStyleBody,color,margin};