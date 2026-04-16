import {ContentContainer, FooterContainer} from './style.js'
import {Button, TitleContainer,Title} from '../style'
import { ButtonSubmit, color } from '../../../../globalStyle';
import { useContext, useState } from 'react';
import { ModalTotalContext } from '../../../../contexts/ModalContext.js';
import { KeyPressed } from '../../../../hooks/keyHooks.js';
import Base from '../index.js';
import { Mask } from '../../../../utils/Mask.js';
import { NoMask } from '../../../../utils/NoMask.js';

const Modal = ({discountSet}) => {
    const {setOpenModal} = useContext(ModalTotalContext)
    const [option, setOption] = useState("discountMoney");
    const [value, setValue] = useState(0);
    
    KeyPressed(() => discountSet(option,value),"Enter")

    const format = (value) => {
        console.log(option)
        return option === 'discountMoney' || option === 'additionMoney' ? Mask.money(value) : Mask.percent(value)
    }
    const removeFormat = (value) => {

        return option === 'discountMoney' || option === 'additionMoney' ? NoMask.revertMoney(value) : NoMask.reverseFormatPercent(value)
    }
    return (
        <Base width={'30%'} height={'45%'} setOpenModal ={setOpenModal}>
                <TitleContainer>
                    <Title>Desconto/Acréscimo</Title>
                </TitleContainer>

                <ContentContainer>
              
                    <select name="select" className='seletor' onChange={event => setOption(event.target.value)}>
                    <option value="discountMoney" defaultValue={option}>Desconto em dinheiro</option>
                    <option value="discountPercent">Desconto em percentual</option>
                    <option value="additionMoney">Acréscimo em dinheiro</option>
                    <option value="additionPercent">Acréscimo em percentual</option>
                    </select>
                    <input  placeholder='Insira o valor' value={value} onChange={e => setValue(format(e.target.value))} autoFocus/>


                </ContentContainer>

                <FooterContainer>
                    <ButtonSubmit small cancel onClick={() => setOpenModal(false)}>Sair</ButtonSubmit>
                    <ButtonSubmit small onClick={() => discountSet(option, removeFormat(value))} color={color.brand}>Confirmar</ButtonSubmit>
                </FooterContainer>
                </Base>
    );
  };
  export default Modal;