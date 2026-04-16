import styled from 'styled-components'


export const UserContainer = styled.div`

-webkit-box-shadow: 0 0 40px rgb(8 21 66 / 15%);`

export const UserContent = styled.div`
padding:0px 2vh;
padding-bottom:2vh;
`

export const Action = styled.div`

    padding: 2vh 0px;
    display:grid;
    gap:10px;
    grid-template-columns: 20%;

    
`
export const TableUser = styled.table`
border-bottom: thin solid #dddddd;
border-collapse: collapse;
width:100%;


thead{border-bottom: thin solid #dddddd;}
th {text-align:start;text-transform:uppercase;}
svg {
display:flex;
align-items:center;
font-size:20px;
}
th,td { padding: 13px 8px;}


tr {
    border-bottom: 0.5px solid #dddddd;
    .actions {
       
        display:flex;
         
        button {
            padding:0px 2px;
        }
    }
}


`