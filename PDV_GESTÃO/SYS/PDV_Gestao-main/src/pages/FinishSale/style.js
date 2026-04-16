import styled from 'styled-components'
import { color } from '../../globalStyle';


export const FinishContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;

h1 {
    color:${color.brand};
    font-size:4vw;
}


`

export const IconContainer = styled.div`
svg{
    font-size:17vw;
    color:${color.brand};
}`
export const Buttons = styled.div`
    margin-top:10vh;
    display:flex;
    gap:10px;
    height:40px;
`