import React, { useContext, useState } from 'react';
import { ButtonSubmit } from '../../globalStyle';
import {IoIosClose} from 'react-icons/io'
import Header from '../components/Header';
import { FlexContent } from '../../globalStyle';
import { UserContainer,Action,TableUser, UserContent } from './style';
import ModalUser from '../components/Modal/ModalUser';
import { ModalTotalContext } from '../../contexts/ModalContext';
import { useQuery } from 'react-query';
import api from '../../api';
import { AiOutlineCloseSquare } from 'react-icons/ai';




const OperatorsPage = () => {


  const {openModal,setOpenModal} = useContext(ModalTotalContext)
  const {isLoading,data:operators} = useQuery('operators', () => api.getOperators())
  if (isLoading) {
    return(<div>Carregando</div>)
  }

    return(
      <>
       <FlexContent>
          <UserContainer>
            <Header title={"Usuários"}/>
           <UserContent>
           <Action>
              <ButtonSubmit  height={'38px'} onClick={() => setOpenModal('new_user')}>Adicionar novos usuários</ButtonSubmit>
           </Action>

           <TableUser>
            <thead>
                <tr>
                    <th style={{width:'30%'}}>Usuário</th>
                    <th style={{width:'35%'}}>Email</th>
                    <th style={{width:'30%'}}>Tipo</th>
                    <th style={{width:'5%'}}>Ação</th>
                </tr>
                </thead>
                <tbody>
                   {operators.map((operator) => {
                    return(
                      <tr key={operator.id}>
                      <td>{operator.nome} </td>
                      <td>{operator.email} </td>
                      <td>{operator.admin ? 'Administrador' : 'Operador'} </td>
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

   {openModal === 'new_user' && <ModalUser/>}
   
    </>
  
  

  
    )
}


export default OperatorsPage;