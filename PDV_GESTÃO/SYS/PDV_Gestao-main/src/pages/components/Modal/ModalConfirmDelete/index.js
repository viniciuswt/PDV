import {ContentModalPop,FlexButtonDiv} from './style'
import {IoCloseCircleOutline} from 'react-icons/io5'
import Base from '../index'
import { ButtonSubmit, color } from '../../../../globalStyle';
import { useContext } from 'react';
import { ModalTotalContext } from '../../../../contexts/ModalContext';

const ModalConfirmDelete = ({callBack}) => {

    const {setOpenModal} = useContext(ModalTotalContext)
   
   
    return (
        <Base width={'380px'} height={'350px'} setOpenModal ={setOpenModal}>
               
               <ContentModalPop>
                    <IoCloseCircleOutline/>
                    <h3>Você tem certeza?</h3>
                    <p>Você realmente quer deletar? Esse processo não pode ser desfeito</p>
                    
                        <FlexButtonDiv>
                            <ButtonSubmit type='button'background={color.cancel} width={'100%'} onClick={()=>setOpenModal(null)}>Não</ButtonSubmit>
                            <ButtonSubmit type='button'  onClick={() => callBack()} width={'100%'}>Sim</ButtonSubmit>
                        </FlexButtonDiv>
              </ContentModalPop>
              </Base>

      
    );
  };
  export default ModalConfirmDelete;