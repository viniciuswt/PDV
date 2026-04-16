import React, { useContext, useRef } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiKey } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {
  FullLogin,
  LoginContainer,
  LoginButton,
  InputContainer,
  Input,
  IconInput,
  Infos,
  NewPassword,
  NewUser,
  TextUser,
} from './style'
import logo from '../../icons/logo-RGB-36.png'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { validateEmail } from '../../utils/validateEmail'

const Login = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const ref = useRef()
  const handleLogin = async (e) => {
    e.preventDefault()
    const login = ref.current
    const email = login.name.value
    const password = login.password.value
    try {
      if (!email || !password) {
        throw Error('Preencha os campos')
      }
      
      validateEmail(email)

      const isLogged = await auth.signIn(email, password)

      if (isLogged) {
        navigate('/')
      } else {
        throw new Error('Usuário não homologado')
      }
    } catch (e) {
      if (e.message === 'Usuário não homologado') {
        toast.error(e.message)
      } else {
        toast.warn(e.message)
      }
    }
  }
  return (
    <FullLogin>
      <LoginContainer ref={ref} onSubmit={handleLogin}>
        <Infos>
          <img src={logo} width="170px" alt="logo" />
        </Infos>

        <InputContainer>
          <IconInput>
            <BsFillPersonFill />
          </IconInput>

          <Input name="name" placeholder="Nome da empresa ou email" />
        </InputContainer>
        <InputContainer>
          <IconInput>
            <HiKey />
          </IconInput>
          <Input name="password" placeholder="Senha" />
        </InputContainer>
        <NewPassword>
          <TextUser>Recuperar senha</TextUser>
        </NewPassword>

        <NewUser>
          <LoginButton type="submit">Entrar</LoginButton>
          <TextUser>Novo usuário | Cadastre-se</TextUser>
        </NewUser>
      </LoginContainer>
    </FullLogin>
  )
}

export default Login
