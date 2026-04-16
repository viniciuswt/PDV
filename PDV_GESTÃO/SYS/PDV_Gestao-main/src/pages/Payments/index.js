import React, { useContext, useEffect, useState } from 'react'
import {InputsDiv, InputDiv,Label,MethodPayment,Page,Total,AddDiv,ContentDiv,Buttons,Item,ItemHead,ItemTitle,ItemContent,ItemBody,Table,THead,Tbody,Footer,Infos,ButtonItem} from './style'
import { FlexContent } from '../../globalStyle';
import Header from '../components/Header';
import { ButtonSubmit,Input,Select } from '../../globalStyle';
import InfoWrap from '../components/InfoWrap';
import {AiOutlineEdit,AiOutlineClose} from 'react-icons/ai'
import { HomePageContext } from '../../contexts/HomePageContext';
import { DiscountTotalContext } from '../../contexts/DiscountTotalContext';
import { Mask } from '../../utils/Mask';
import {NoMask} from '../../utils/NoMask'
import { useNavigate, useParams } from 'react-router-dom';
import ModalTypePayments from '../components/Modal/ModalTypePayment';
import { useAddSale } from '../../hooks/mutations';
import api from '../../api';
import { useQuery } from 'react-query';


const Payments = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {products} = useContext(HomePageContext)
    const {total} = useContext(DiscountTotalContext);
    const [methods,setMethods] = useState([])
    const [count,setCount] = useState(1)
    const {mutate:addSale} = useAddSale()
    const [method,setMethod] = useState({
        parcelas:Mask.onlyDigits(1),
        valor:Mask.money(total),
    })
    const {isLoading,isSuccess,data:dataMethods} = useQuery('methods', () => api.getMethods())

  useEffect(() => {
    if(isSuccess) setMethod(old => (Object.assign({},old,dataMethods[0])))
  },[dataMethods])
  
    useEffect(() => {
        setMethod(old => ({...old,count:count}))
    },[count])

    const [paidOut,setPaidOut] = useState(0)

    const [openModal,setOpenModal] =useState(false)
    
    const handleAdd = () => { 
         
        const methodFormated = Object.assign({},method)
        methodFormated.valor = NoMask.revertMoney(method.valor)
        console.log(methodFormated)

        setMethods(old => [...old,methodFormated])
        setPaidOut(paidOut+NoMask.revertMoney(methodFormated.valor))
        setCount(count+1)}

    const handleRemove = (id,value) => {
        setMethods(methods.filter(item => item.count !==id));
        setPaidOut(paidOut-NoMask.revertMoney(value)) }
        
    const handleBack = () => { 
        navigate(-1)
    }

    
    const validate = () => {
     
        return NoMask.revertMoney(Mask.money(total-paidOut)) <= 0 ? true : false
    }

    const callback =async (status) => {
    
      
        let link;
        if (status)
            link = 't'
        else
            link = 's'
        
        const JSON = {
            id_caixa:id,
            itens:products,
            metodos:methods,
            comNota:status
        }

        addSale(JSON)
        navigate(`/finish/${id}/${link}`) 
    }

  

    if (isLoading) {
        return <div>Loading</div> 
    }

    return(
      <>  
        <FlexContent>           
            <MethodPayment>
           
            <Page>
                <Item>
                    <Header title={"Pedido"}/>
                    <ContentDiv>
                        <Table>
                            <thead>
                            <THead>
                                <th style={{width:"13%"}}>N</th>
                                <th style={{width:"30%"}}>Nome</th>
                                <th style={{width:"17%"}}>Qtd</th>
                                <th style={{width:"20%"}}>Valor unitário</th>
                                <th style={{width:"20%"}}>Valor total</th>
                                
                            </THead>
                            </thead>
                            <Tbody>
                                
                             {products.map((prod,i) => {
                                return(
                                    <tr key={prod.id}>
                                    <td>{++i}</td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.quantidade} UN</td>
                                    <td>{Mask.money(parseFloat(prod.valor))}</td>
                                    <td>{Mask.money(prod.valor*prod.quantidade)}</td>
                                
                                </tr>
                                )
                             })}
                            </Tbody>
                        </Table>
                    </ContentDiv>
                </Item>
            </Page>
            <Page>
            <Item>
            <Header title={"Confirmação de pagamento"}/>
            <ContentDiv>
            <InputsDiv>
                <InputDiv>
                    <Label>Forma de pagamento</Label>
                    <Select onChange={(e)=>setMethod(old => (Object.assign({},old,JSON.parse(e.target.value))))}>
                       {dataMethods.map((method) =>
                       <option key={method.id} value={JSON.stringify(method)}>{method.nome}</option>
                       )}
                    </Select>
                </InputDiv>
                <InputDiv>
                    <Label>Valor recebido</Label>
                    <Input value={method.valor} onChange={(e)=>setMethod( old => ({...old,valor:Mask.money(e.target.value)}))} />
                </InputDiv>

                <InputDiv>
                    <Label>Parcelas</Label>
                    <Input onChange={(e) => setMethod(old => ({...old,parcelas:e.target.value}))} value={method.parcelas}/>
                </InputDiv>
            </InputsDiv>
               <AddDiv>
                <Total>A pagar: <span>{Mask.money(total-paidOut)}</span> </Total>
                <ButtonSubmit height={'40px'} onClick={() => handleAdd()}>ADICIONAR (F2)</ButtonSubmit>
               </AddDiv>
               </ContentDiv>

               </Item>
             <Item>
                {methods.length !== 0 &&
                <ItemContent>
                <ItemHead>
                    <ItemTitle>Forma de pagamento</ItemTitle>
                    <ItemTitle>Valor</ItemTitle>
                    <ItemTitle>Ação</ItemTitle>
                </ItemHead>
                
               {methods.map(methodI => {
                return(
                    <ItemBody key={methodI.id}>
                    <ItemTitle>{methodI.nome} <span>{methodI.parcelas}x</span></ItemTitle>
                    <ItemTitle>{Mask.money(methodI.valor)}</ItemTitle>
                    <ItemTitle><AiOutlineEdit/> <ButtonItem onClick={() => handleRemove(methodI.count,methodI.valor)}><AiOutlineClose/></ButtonItem></ItemTitle>
              </ItemBody> 
                )
               })}
                </ItemContent>}
             </Item>
            </Page>

            </MethodPayment>
     

    <Footer>
     <Infos>
        <InfoWrap bgColor={'#000'} operator text={'Operador'} value={'Caixa 01'}/>
        <InfoWrap text="Pagamento" value={Mask.money(paidOut)}/> 
        <InfoWrap text="Troco" value={Mask.money(paidOut - total)}/> 
        <InfoWrap bgColor={'#FFF'} text="Total" value={Mask.money(total)}/> 
     </Infos>
     <Buttons>
        <ButtonSubmit cancel height={'43px'} onClick={() => handleBack()}>Cancelar (F1)</ButtonSubmit>
        <ButtonSubmit height={'43px'} disabled={!validate()} onClick={()=>setOpenModal(true)}>Finalizar (F3)</ButtonSubmit>  
     </Buttons>
     </Footer>
    
          
         
      
    </FlexContent>
   
    {openModal && <ModalTypePayments callback={callback}/>}
    </>
  

  

  
    )
}


export default Payments;