import styled from 'styled-components'
import { color, margin } from '../../../../globalStyle'



export const ContentModalPop = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    font-weight:bold;

    p {
        font-weight:normal;
        
        text-align:center;
    }

    h3 {
        font-size:23px;
       
    }

    svg {
        color:${color.cancel};
        font-size:110px;
    }
`
export const FlexButtonDiv = styled.div`
    gap:20px;
    width:75%;
    height:40px;
    display:flex;
    
    
`