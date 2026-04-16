import styled from 'styled-components';



export const ContainerInput  = styled.div`
   display:grid;
   row-gap:25px;

`

export const InputContainer = styled.div`
   display:flex;
   flex-direction:column;
   height:60px;
   
`
export const Form = styled.form`
    display:flex;
    flex-direction:column;
    height:100%;
`
export const Grid = styled.div`
display:grid;
gap:15px;
height:${props => props.height};
grid-template-columns:1fr 1fr;
grid-template-columns: ${props => props.rows};
    `
export const Label = styled.label`
   padding-bottom:3px;
   font-weight:normal;
   font-size:14px;
`