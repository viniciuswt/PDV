import styled from 'styled-components';

export const CloseBackContainer = styled.div`
  
display:flex;
justify-content:space-between;
`
export const ValueContainer = styled.div`
    display:flex;
    flex-direction:column;
   
    justify-items:center;
    margin:40px 0px;
    input {
        font-size:20px;
        margin:0;
        width:100%;
        height:60px;
        
    }
`
export const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    flex: 1;
    div {
     
        width:100%;
        p {
            color:#000;
        }
    }
    margin:20px 0px;
`

export const ValueTitle = styled.span`
    padding:2px;
    font-weight:100;
    font-size:14px;
`