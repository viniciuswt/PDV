import styled from 'styled-components';
import { color } from '../../../../globalStyle';


export const InputContainer = styled.div`
    display:flex;

    input {
        flex-grow:1;
        -webkit-box-shadow:0 0 40px rgb(8 21 66 / 15%);
        box-shadow: 0 0 40px rgb(8 21 66 / 15%);
    }
`

export const TableContainer = styled.div`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    flex-grow:1;
    overflow:auto; 
`;

export const TableSearchProduct = styled.table`
    width:100%;
   
    border-collapse:collapse; 
`;
export const RowHead = styled.tr`
    text-align:left;
    background:${color.brand};
    color:#FFF;
`;
export const ColumnHead = styled.th`
padding: 12px 15px;`;
export const RowBody = styled.tr`
    cursor:pointer;
    background: ${props => props.active ? "rgba(5, 211, 56,0.15)" : "#FFF"}; 
    color: ${props => props.active ? "green" : "#000"}; 
   
   
    &: last-of-type{
        border-bottom:2px solid ${color.brand};}

   

   
`;
export const ColumnBody = styled.td`
    padding: 12px 15px;
    border-bottom: thin solid #dddddd;
   
   
`;

