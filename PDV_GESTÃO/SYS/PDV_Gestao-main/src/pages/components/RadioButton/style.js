import styled from 'styled-components';
import { color } from '../../../globalStyle';

export const Label = styled.label`
  span {
    display:flex;
    align-items:center;
  }
`

export const Radio = styled.input.attrs({
    type: "radio",
  })
  `
  margin:0;
  
  display: none;

  +*::before  {
    content: "";
    display: inline-block;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.2rem;
    border-color: gray;  
    width: 25px;
    height: 25px;

    
  }

  &:checked + *::before {
    background: radial-gradient(${color.brand} 0%, ${color.brand} 40%, transparent 50%, transparent);
    border-color: ${color.brand};
  
  }
  
  }
  `

