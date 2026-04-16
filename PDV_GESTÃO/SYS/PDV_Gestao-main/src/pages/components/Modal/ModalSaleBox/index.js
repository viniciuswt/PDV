import {Title, TitleContainer} from '../style'
import {Form,InputContainer,Label,Grid, ContainerInput} from './style'
import { useContext, useState } from 'react';
import { ModalTotalContext } from '../../../../contexts/ModalContext.js';

import Base from '../index.js';
import { ButtonSubmit, Input } from '../../../../globalStyle';
import api from '../../../../api';
import { toast } from 'react-toastify';

const ModalUser = ({addSaleBox}) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const {setOpenModal} = useContext(ModalTotalContext)
    const [nameSaleBox, setNameSaleBox] = useState()
    const handleNewSaleBox = (name) => {
        addSaleBox({nome:capitalizeFirstLetter(name)})
        setOpenModal(null)
    }
   
    return (
        <Base width={'35%'} height={'30%'} setOpenModal ={setOpenModal}>
               
            <TitleContainer>
                <Title>Dados do usuário</Title>
            </TitleContainer>
            <Form>
            <ContainerInput>
            <Grid rows={'1fr'}>
                <InputContainer>
                    
                    <Label>Nome do caixa</Label>
                    <Input value={nameSaleBox} onChange={(e) => setNameSaleBox(e.target.value)} padding={0}></Input>
                </InputContainer>
               
                </Grid>
              
            </ContainerInput>

            <Grid rows={"100px 100px"}  style={{marginTop:'auto'}}>
                <ButtonSubmit height={'38px'} cancel>Cancelar</ButtonSubmit>
                <ButtonSubmit height={'38px'} onClick={() => handleNewSaleBox(nameSaleBox)}>Salvar</ButtonSubmit>
            </Grid></Form>
            </Base>

      
    );
  };
  export default ModalUser;