import {Title, TitleContainer} from '../style'
import {Form,InputContainer,Label,Grid,Item, ContainerInput,WarningContainer,Result,TitleSection} from './style'
import { useContext, useState } from 'react';
import { ModalTotalContext } from '../../../../contexts/ModalContext.js';

import Base from '../index.js';
import { ButtonSubmit, Input } from '../../../../globalStyle';
import { Message } from 'primereact/message';
import InfoWrap from '../../InfoWrap';
import { Mask } from '../../../../utils/Mask';
import { NoMask } from '../../../../utils/NoMask';

const ModalOpenSaleBox = ({reinforce,noReinforce,data,callBack}) => {

    const {setOpenModal} = useContext(ModalTotalContext)
    const date = new Date();
    const [value,setValue] = useState(Mask.money(data.dinheiro_atual))

    const handleSave = () => {
        const JSON = {
            id:data.id,
            dinheiro_atual:NoMask.revertMoney(value),
        }
        callBack(JSON)
    }

    return (
        <Base width={'650px'} height={'70%'} setOpenModal ={setOpenModal} noClose>

        {!noReinforce && !reinforce &&
        <WarningContainer>
            <Message style={{display:'Flex'}} severity="warn" text="Atenção! Para iniciar as vendas é necessário realizar a abertura do caixa." />
        </WarningContainer>}
            <TitleContainer>
                <Title>{reinforce ? 'Reforço de caixa' : noReinforce ? 'Sangria de caixa' : 'Abertura de caixa'} </Title>
            </TitleContainer>
            <Form>
            <ContainerInput>
                <Grid rows = {'1fr 1fr 1fr'}>
                    <Item>
                        <Label>Operador</Label>
                        <Result>victorsantoschagas@gmail.com</Result>
                    </Item>

                    <Item>
                        <Label>Caixa</Label>
                        <Result>{data.nome}</Result>
                    </Item>

                    <Item>
                        <Label>Data de operação</Label>
                        <Result>{date.toLocaleString().slice(0,-3)}</Result>
                    </Item>
                </Grid>
                
                <Grid rows={'1.4fr 1fr'}>
                    <InputContainer>
                        <Label>Valor {reinforce ? 'do reforço' : noReinforce ? 'da sangria' : 'da abertura'}</Label>
                        <Input value={value} disabled={!reinforce && !noReinforce} onChange={(e)=> setValue(Mask.money(e.target.value))}></Input>
                    </InputContainer>

                    <InfoWrap border width={'100%'}  text="Valor em caixa" value={Mask.money(data.dinheiro_atual)}/> 

                </Grid>
                <TitleSection>Confirmação {reinforce ? 'do reforço' : noReinforce ? 'da sangria' : 'da abertura'}</TitleSection>
                <Grid rows={'1.4fr 1fr'}>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input></Input>
                    </InputContainer>

                    <InputContainer>
                        <Label>Senha</Label>
                        <Input></Input>
                    </InputContainer>

                 

                </Grid>

          
            </ContainerInput>

            <Grid rows={"100px 100px"} style={{marginTop:'auto'}}>
                <ButtonSubmit height={'38px'} onClick={() => setOpenModal(null)} cancel>Cancelar</ButtonSubmit>
                <ButtonSubmit height={'38px'}  onClick={() => handleSave()}>Salvar</ButtonSubmit>
            </Grid></Form>
            </Base>

      
    );
  };
  export default ModalOpenSaleBox;