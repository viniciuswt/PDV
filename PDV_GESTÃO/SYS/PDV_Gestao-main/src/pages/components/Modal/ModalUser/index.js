import {Title, TitleContainer} from '../style'
import {Form,InputContainer,Label,Grid, ContainerInput} from './style'
import { useContext } from 'react';
import { ModalTotalContext } from '../../../../contexts/ModalContext.js';

import Base from '../index.js';
import { ButtonSubmit, Input, Select } from '../../../../globalStyle';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { validateEmail } from '../../../../utils/validateEmail';
import { useAddOperator } from '../../../../hooks/mutations';


const ModalUser = () => {

    const {setOpenModal} = useContext(ModalTotalContext)
    const ref = useRef()
    const {mutate:addOperator} = useAddOperator()

    const submit = (e) => {
        e.preventDefault()
        const field = ref.current
        const name = field.name.value
        const email = field.email.value
        const password = field.password.value
        const confirmPassword = field.confirmPassword.value
        const typeUser = field.typeUser.value
        
        try{
        
        if (!name || !email || !password || !confirmPassword) 
            throw Error("Preencha os campos")
        if (password !== confirmPassword) {
            throw Error("Senhas diferentes")
        }
       validateEmail(email)
    
        const user = {
            name,
            email,
            password,
            confirmPassword,
            admin:typeUser
        }
        addOperator(user)
        
    
    
    }
       catch(e) {
            toast.warn(e.message)   
       }
    }

   
    return (
        <Base width={'55%'} height={'55%'} setOpenModal ={setOpenModal}>
               
            <TitleContainer>
                <Title>Dados do usuário</Title>
            </TitleContainer>
            <Form ref={ref} onSubmit={submit}>
            <ContainerInput>
            <Grid rows={'0.7fr 1fr'}>
                <InputContainer>
                    
                    <Label>Nome do usuário</Label>
                    <Input padding={0} name="name"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Email</Label>
                    <Input padding={0} name="email"></Input>
                </InputContainer>
                </Grid>
                <Grid>
                <InputContainer>
                    <Label>Senha</Label>
                    <Input padding={0} name="password"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Confirmar senha</Label>
                    <Input padding={0} name="confirmPassword"></Input>
                </InputContainer>
                </Grid>

                <Grid rows={'40%'}>
                <InputContainer>
                    <Label>Tipo de pessoa</Label>
                    <Select height={'40px'} name='typeUser'>
                        <option value="0">Operador</option>
                        <option value="1"> Administrador</option>
                       
                        
                    </Select>
                </InputContainer>
                </Grid>

              
            </ContainerInput>

            <Grid rows={"100px 100px"} style={{marginTop:'auto'}} height={'48px'}>
                <ButtonSubmit cancel>Cancelar</ButtonSubmit>
                <ButtonSubmit type='submit'>Salvar</ButtonSubmit>
            </Grid></Form>
            </Base>

      
    );
  };
  export default ModalUser;