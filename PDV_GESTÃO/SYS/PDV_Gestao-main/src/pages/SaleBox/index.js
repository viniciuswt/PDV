import React, { useContext, useState } from 'react';
import { ButtonSubmit } from '../../globalStyle';
import {AiOutlineMinusCircle, AiOutlinePlusCircle,AiOutlineCloseSquare, AiOutlineInbox} from 'react-icons/ai'
import Header from '../components/Header';
import { FlexContent } from '../../globalStyle';
import { UserContainer,Action,TableUser, UserContent,StatusText } from './style';
import ModalSaleBox from '../components/Modal/ModalSaleBox'
import { ModalTotalContext } from '../../contexts/ModalContext';
import { Mask } from '../../utils/Mask';
import ModalOpenSaleBox from '../components/Modal/ModalOpenSaleBox';
import ModalCloseSaleBox from '../components/Modal/ModalCloseSaleBox';
import { useQuery } from 'react-query';
import api from '../../api';
import { useAddSaleBox, useCloseSalesBox, useDeleteSaleBox, useOpenSaleBox, useReinforceSalesBox, useSangriaSalesBox } from '../../hooks/mutations';
import ModalConfirmDelete from '../components/Modal/ModalConfirmDelete';
import { HiOutlineInboxArrowDown } from 'react-icons/hi2';

import  Tooltip  from '../components/ToolTip';


const UsersPage = () => {

  

  const {openModal,setOpenModal} = useContext(ModalTotalContext)
  const [idBox,setidBox] = useState()
  const {isLoading, data:salesBox} = useQuery(['sales-box'],() => api.getSalesBox())
 
 
    const {mutate:addSaleBox} = useAddSaleBox()
    const {mutate:deleteSaleBox} = useDeleteSaleBox()
    const {mutate:openSalesBox} = useOpenSaleBox()
    const {mutate:closeSalesBox} = useCloseSalesBox()
    const {mutate:reinforceSaleBox} = useReinforceSalesBox()
    const {mutate:sangriaSaleBox} = useSangriaSalesBox()

    const handleClick = (saleBox,modal) => {
      setidBox(saleBox)
      setOpenModal(modal);
    }
  
   
    
    if (isLoading) {
      return( 
      <div>Carregando</div>)
    }
    return(
      
      <>

       <FlexContent>
          <UserContainer>
            <Header title={"Lista de caixas"}/>
           <UserContent>
           <Action>
             
              <ButtonSubmit height={'38px'} onClick={() => setOpenModal('new_saleBox')}>Adicionar novo</ButtonSubmit>
           </Action>

           <TableUser>
                <thead>
                  <tr>
                    <th style={{width:'28%'}}>Status</th>
                    <th style={{width:'28%'}}>Nome do caixa</th>
                    <th style={{width:'28%'}}>Valor em caixa</th>
                    <th style={{width:'15%'}}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                  {salesBox.map((saleBox) => {
                
                    return (
                      <tr key={salesBox.id}>
                        <td><StatusText status={saleBox.status}>{saleBox.status ? 'Ativo' : 'Fechado'}</StatusText></td>
                        <td>{saleBox.nome}</td>
                        <td>{Mask.money(saleBox.dinheiro_atual)}</td>

                        <td className='actions'>
                      <Tooltip>
                        <span>Abrir caixa</span>
                        <button onClick={() => handleClick(saleBox,'open_saleBox')}>
                          <AiOutlineInbox/>
                        </button>
                      </Tooltip>  

                      <Tooltip>
                        <span>Fechar caixa</span>
                        <button onClick={() => handleClick(saleBox,'close_saleBox')}>
                          <HiOutlineInboxArrowDown/>
                        </button>
                      </Tooltip>  

                      <Tooltip>
                        <span>Sangria de caixa</span>
                        <button onClick={() => handleClick(saleBox,'noReinforce_saleBox')}>
                        <AiOutlineMinusCircle fill='red'/>
                        </button>
                      </Tooltip> 

                       <Tooltip>
                        <span>Reforço de caixa</span>
                        <button  onClick={() => handleClick(saleBox,'reinforce_saleBox')}>
                          <AiOutlinePlusCircle fill='green'/>
                        </button>
                      </Tooltip>   
                    
                      <Tooltip>
                        <span>Excluir caixa</span>
                        <button onClick={() => handleClick(saleBox,'delete')}>
                          <AiOutlineCloseSquare fill='red'/>
                        </button>
                      </Tooltip> 
                    
                     
                      </td>
      
                      </tr>
                    )
                  })}
                 
                  
                </tbody>
           </TableUser>
           </UserContent>
          </UserContainer>
       </FlexContent>


    {openModal === 'new_saleBox' && <ModalSaleBox addSaleBox={addSaleBox}/>}
    {openModal === 'open_saleBox' && <ModalOpenSaleBox callBack={openSalesBox} data={idBox}/>}
    {openModal === 'delete' && <ModalConfirmDelete callBack={() => deleteSaleBox(idBox.id)} />}
    {openModal === 'reinforce_saleBox' && <ModalOpenSaleBox reinforce callBack={reinforceSaleBox} data={idBox}/>}
    {openModal === 'noReinforce_saleBox' && <ModalOpenSaleBox noReinforce callBack={sangriaSaleBox} data={idBox}/>}
    {openModal === 'close_saleBox' && <ModalCloseSaleBox callBack={closeSalesBox} data={idBox}/>}
                
    </>
  
  
                
  
    )
}


export default UsersPage;