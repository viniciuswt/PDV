import styled from 'styled-components'
import { color } from '../../globalStyle'

export const FullLogin = styled.div`
  display: flex;
  height: 100vh;
  width:100%;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  -webkit-box-shadow: 0 0 40px rgb(8 21 66 / 15%);
  padding: 4.5vh 3.5vh;
  justify-items: center;
`
export const Infos = styled.div`
  margin-bottom: 1.9vh;
`
export const Title = styled.p``
export const InputContainer = styled.div`
  color: #fff;
  display: flex;
  padding: 0.7vh 0;
`
export const NewUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vh;
  background-color: ${color.brand};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 15px;
`

export const Input = styled.input`
  font-weight: normal;
  background-color: rgb(237, 243, 247);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 0px;
  height: 4vh;
  border: none;
  flex-grow: 1;
  padding-left: 1vh;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`
export const LoginButton = styled.button`
  margin-top: 2vh;
  width: 50%;
  text-align: center;
  background-color: ${color.brand};
  border-radius: 4px;
  padding: 0.7vh;
  color: #fff;
`

export const NewPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const TextUser = styled.button`
  color: ${color.brand};
  font-weight: bolder;
  margin: 0.5vh;
  font-size: 11px;
`
