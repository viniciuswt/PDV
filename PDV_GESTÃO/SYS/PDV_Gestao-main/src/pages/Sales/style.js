import styled from 'styled-components'


export const OverviewInfo = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap:10px;

`

export const Hint = styled.p`
    padding-bottom:5px;
`
export const Overview = styled.div`

margin:10px;`

export const Card = styled.div`
-webkit-box-shadow: 0 0 40px rgb(8 21 66 / 15%);

background:#FFF;
.gap {
    display:flex;
    gap:10px;
}

`

export const UserContainer = styled.div`


-webkit-box-shadow: 0px 3px 29px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 29px -10px rgba(0,0,0,0.75);
box-shadow: 0px 3px 29px -10px rgba(0,0,0,0.75);`

export const UserContent = styled.div`
padding:0px 2vh;
padding-bottom:2vh;
`

export const Action = styled.div`
    
    padding: 2vh 0px;
    display:grid;
    gap:10px;
    box-sizing: border-box;
    grid-template-columns: 35% 15%;

    
`
export const TableUser = styled.table`
width:50%;
border: thin solid #dddddd;
border-collapse: collapse;
thead{
       border-bottom: thin solid #dddddd;
}
th {
    text-align:start;
    padding:10px 8px;
    
   
}
td {
    font-weight:normal;
    padding: 10px 8px;
  
     svg {
        display:flex;
        align-items:center;
        fill:red;
        font-size:20px;
     }

    
},
tr {
    border-bottom: 0.5px solid #dddddd;
}

`