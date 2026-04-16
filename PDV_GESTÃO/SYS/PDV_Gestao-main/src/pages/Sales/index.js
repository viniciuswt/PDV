 
import React, { useState, useEffect, useContext } from 'react';
import { FlexContent } from '../../globalStyle';
import SalesTable from '../components/SalesTable';
import {Card,Overview,OverviewInfo,Hint} from './style'
import Header from '../components/Header';
import InfoWrap from '../components/InfoWrap';
import { Mask } from '../../utils/Mask';
import { useQuery, useQueryClient } from 'react-query';
import api from '../../api';
import ModalConfirmDelete from '../components/Modal/ModalConfirmDelete';
import { ModalTotalContext } from '../../contexts/ModalContext';
import { useDeleteSale } from '../../hooks/mutations';
export default function BasicFilterDemo() {
const [filteredData, setFilteredData] = useState([])
const [income,setIncome] = useState(0)
const [expense,setExpense] = useState(0)
const [total,setTotal] = useState(0)
const [clickedId,setClickedId] = useState()

const {openModal} = useContext(ModalTotalContext)


const {isLoading,data:sales} = useQuery('sales',()=>api.getSales())
const {isLoading:isLoadingTransactions,data:transactions} = useQuery('transactions',()=>api.getTransactions())
const {isLoading:isLoadingSalesBox,data:salesBox} = useQuery('sales-box', () => api.getSalesBox())
const {isLoading:isLoadingOperator,data:operators} = useQuery('operators',()=>api.getOperators())
const {mutate:deleteSale} = useDeleteSale()

const deleteSaleButton = () => {
  deleteSale(clickedId)
}


useEffect(() => {
  const total = filteredData.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const incomes = filteredData.filter(data => data.categoria !== "Sangria").reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

 
  setIncome(incomes)
  setTotal(total)
  setExpense(total-incomes)

},[filteredData])


if(isLoading || isLoadingOperator || isLoadingSalesBox || isLoadingTransactions) {
  return(
    <div>Loading</div>
  )
}
    return (
      <>
      <FlexContent>
       
        <Card>
            <Header title={'Movimentações e vendas'}/>
            <Overview>
            <Hint>Resumo</Hint>
            <OverviewInfo>
            <InfoWrap medium border text={'Entradas'} operator={false} value={Mask.money(income)} />
            <InfoWrap medium border text={'Saídas'} operator={false}  bgColor={'red'} value={Mask.money(expense)} />
            <InfoWrap medium border text={'Total'} operator={false} value={Mask.money(total)} />
            </OverviewInfo>
            </Overview>
           
          <SalesTable setClickedId={setClickedId} sales={sales} transactions={transactions} salesBox={salesBox} operators={operators} setFilteredData={setFilteredData}/>
        </Card>
        </FlexContent>

       {openModal === "deleteSale" && <ModalConfirmDelete callBack={deleteSaleButton} id={clickedId}/>}
        </>
    );
}
        