import styled from 'styled-components'
export const Tooltip = styled.div`
    position: relative;
    display: inline-block;

    span{
        visibility:hidden;
        width: 100px;
        font-size:10px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        
        /* Position the tooltip */
        position: absolute;
        z-index: 44;
        bottom: 100%;
        left: 50%;
        margin-left: -50px;
    }

    &:hover {
        span {
            visibility:visible;
        }
       
      }
`