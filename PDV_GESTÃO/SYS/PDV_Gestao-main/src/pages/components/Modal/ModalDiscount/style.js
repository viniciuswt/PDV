import styled from 'styled-components'

export const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px 0px;
    
    .seletor {
        height:40px;
        border:none;
        border-radius:5px;
        background-color:#FFF;
        padding:0px 12px;
        -webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
        box-shadow: 0 0 40px rgb(8 21 66 / 15%);
    }
    input {margin: 20px 0px 30px 0px;
        -webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
        box-shadow: 0 0 40px rgb(8 21 66 / 15%);}

  
`


export const FooterContainer = styled.div`
    display:flex;
    justify-content:center;
    height:40px;
    gap:5px;
    width:100%;

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


