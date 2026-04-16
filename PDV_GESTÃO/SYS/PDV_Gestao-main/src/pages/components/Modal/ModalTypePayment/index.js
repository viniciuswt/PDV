import {ContentModalPop,FlexButtonDiv} from './style'
import {FiAlertCircle} from 'react-icons/fi'
import Base from '../index'
import { ButtonSubmit, color } from '../../../../globalStyle';
import { useContext } from 'react';
import { ModalTotalContext } from '../../../../contexts/ModalContext';

const ModalUser = ({callback}) => {

    const {setOpenModal} = useContext(ModalTotalContext)
   
   
    return (
        <Base width={'30%'} height={'30%'} setOpenModal ={setOpenModal}>
               
               <ContentModalPop>
                    <FiAlertCircle/>
                    <h3>Adicionar a venda com nota fiscal?</h3>
                        <FlexButtonDiv>
                            <ButtonSubmit type='button'onClick={()=>callback(false)} background={color.cancel} width={'100%'}>Não</ButtonSubmit>
                            <ButtonSubmit type='button' onClick={()=>callback(true)} width={'100%'}>Sim</ButtonSubmit>
                        </FlexButtonDiv>
              </ContentModalPop>
              </Base>

      
    );
  };
  export default ModalUser;