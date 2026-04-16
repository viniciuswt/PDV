import React, { useContext, useState } from 'react';
import { ButtonSubmit, Input } from '../../globalStyle';
import {IoIosClose} from 'react-icons/io'
import Header from '../components/Header';
import { FlexContent } from '../../globalStyle';
import { UserContainer,Action,TableUser, UserContent } from './style';
import ModalUser from '../components/Modal/ModalUser';
import { ModalTotalContext } from '../../contexts/ModalContext';

import { useQuery } from 'react-query';
import api from '../../api';
import { AiOutlineCloseSquare } from 'react-icons/ai';




const MethodsPage = () => {


  const {openModal} = useContext(ModalTotalContext)
  const {isLoading,data:methods} = useQuery('methods', () => api.getMethods())
  if (isLoading) {
    return(<div>Carregando</div>)
  }


    return(
      <>
       <FlexContent>
          <UserContainer>
            <Header title={"Formas de pagamento"}/>
           <UserContent>
           <Action>
              <Input placeholder='Informe o tipo de pagamento'></Input>
              <ButtonSubmit>Adicionar</ButtonSubmit>
           </Action>

           <TableUser>
                <thead>
                  <tr>
                    <th style={{width:'90%'}}>Formas de pagamento</th>
                    <th style={{width:'10%'}}>Ação</th>
                    </tr>
                </thead>

                <tbody>
                   {methods.map((method) => {
                    return(
                      <tr key={method.id}>
                      <td>{method.nome} </td>
                    
                      <td>  <button>
                          <AiOutlineCloseSquare fill='red'/>
                        </button> </td>
                    </tr>
                    )
                   })}
                 
                </tbody>
           </TableUser>
           </UserContent>
          </UserContainer>
       </FlexContent>

   {openModal === 'new_method' && <ModalUser/>}
   
    </>
  
  

  
    )
}


export default MethodsPage;