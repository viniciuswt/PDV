import { useContext } from 'react';
import { ModalTotalContext } from '../../../contexts/ModalContext.js';
import {ContainerInfo,Text,Value} from './style.js'
import {GiPlainCircle} from 'react-icons/gi'

const InfoWrap = ({text, value, cursor,border, bgColor,operator,width,medium}) => {
   const {setOpenModal} = useContext(ModalTotalContext)

    return (
       <ContainerInfo medium={medium} width={width} border={border} bgC={bgColor} cursor={cursor} onClick={cursor ? ()=>setOpenModal('discount') : null  }>
            <Value medium={medium} bgColor={bgColor}> {operator && <span><GiPlainCircle/></span> } <span> {value}</span></Value>
            <Text colorText={bgColor}>{text}</Text>
       </ContainerInfo>
    );
  };
  export default InfoWrap;