import {ContainerTotal,TitleContainerPrice,TotalPrice, ButtonContainer, Button} from '../style'
import {ValueContainer, ValueTitle,InfoContainer} from './style'
import { useContext } from 'react';
import { ModalTotalContext } from '../../../../contexts/ModalContext.js';
import { DiscountTotalContext } from '../../../../contexts/DiscountTotalContext';
import InfoWrap from '../../InfoWrap/index.js';
import { color } from '../../../../globalStyle.js';
import { useState } from 'react';
import Base from '../index.js';



const MoneyPayments = () => {

    const {setOpenModal} = useContext(ModalTotalContext)
    const {total} = useContext(DiscountTotalContext)
    const [change,setChange] = useState(total)

    const validateChange = (e) => {
        console.log(e)
        if (isNaN(e) || (e==="")) {
            setChange(0)
       }
       else{
     
       let text = e;
       text=text.replace(',','.');
       text =  parseFloat(text);
       setChange(text)
       }
      

    }
   
    return (
      <Base  width={'25%'} height={'55%'} setOpenModal ={setOpenModal} back>

            <ContainerTotal> 
                <TitleContainerPrice>Total a pagar</TitleContainerPrice>
                <TotalPrice>R$ ${total.toFixed(2)}</TotalPrice>
            </ContainerTotal>

               
               <ValueContainer>
                    <ValueTitle>Valor dado pelo cliente</ValueTitle>
                    <input  type="number" defaultValue={total.toFixed(2)} onChange={event => validateChange(event.target.value)}  autoFocus/>
               </ValueContainer>
        
               <InfoContainer>
                 <InfoWrap  text="Troco" value={"R$ "+(change-total).toFixed(2)}/>
               </InfoContainer>

               <ButtonContainer>
                    <Button color={color.brand} onClick={()=>setOpenModal("Dinheiro")}>Finalizar venda (ENTER)</Button>
            </ButtonContainer>

        </Base>

        
    );
  };
  export default MoneyPayments;