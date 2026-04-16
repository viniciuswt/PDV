import styled from 'styled-components';


export const WarningContainer = styled.div`
   margin-bottom:20px;
   span {
   font-size:14px!important;
   text-align-center;
   }
`
export const ContainerInput  = styled.div`
   display:grid;
   row-gap:25px;

`
export const Item = styled.div``

export const InputContainer = styled.div`
   display:flex;
   flex-direction:column;
   height:60px;
   
`
export const Form = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`
export const Grid = styled.div`
display:grid;
gap:15px;
grid-template-columns:1fr 1fr;
grid-template-columns: ${props => props.rows};
    `
export const Label = styled.label`
   padding-bottom:3px;
   font-size:14px;
`

export const Result = styled.p`
   font-weight:normal;
   padding-top:1vh;
`
export const TitleSection = styled.h4`
   padding-top:2vh;
   border-top:1px solid rgba(0,0,0,0.3)
`