import React, { useEffect } from 'react';
import Menu from '../components/Menu';
import TopInfo from '../components/TopInfo';
import { FlexContent } from '../../globalStyle';
import {IoEnterOutline} from 'react-icons/io5'
import {GridBox,SaleBox,InfosBox,NameBox,MoneyBox} from './style'
import { useNavigate } from 'react-router-dom';

import { Mask } from '../../utils/Mask';
import { toast } from 'react-toastify';

import api from '../../api'
import { useQuery } from 'react-query';





const SalesBox = () => {


    const {isLoading,data:salesBox} = useQuery(['sales-box'],() => api.getSalesBox())
    useQuery('sales',()=>api.getSales())

   
    

  const navigate = useNavigate()
  

  const handleSaleBox = (id,status) => {
    if (status) navigate(`/home/${id}`)
    else toast.error("Caixa fechado")
  }

  if (isLoading) {
    return( 
    <div>Carregando</div>)
  }

    return(
      <>

       
       <FlexContent>
        <h1>Caixas disponíveis</h1>
        <GridBox>
            {salesBox.map((item) => {
              return(
              <SaleBox key={item.id} active={item.status}>
                <InfosBox >
                  <NameBox>{item.nome} {item.status ? '(Ativo)' : '(Fechado)'} </NameBox>
                  <MoneyBox>{Mask.money(item.dinheiro_atual)}</MoneyBox>
                </InfosBox>
                <button onClick={()=>handleSaleBox((item.id) ,item.status)}><IoEnterOutline/></button>
              </SaleBox>)
            })}
        </GridBox>
       </FlexContent>

       </>

  
    )
}


export default SalesBox;