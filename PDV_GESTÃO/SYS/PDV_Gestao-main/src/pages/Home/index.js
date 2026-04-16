import React,{useCallback, useContext, useEffect, useRef} from 'react'
import {KeyPressed} from '../../hooks/keyHooks'
import { ButtonSubmit, color } from '../../globalStyle';
import {ContainerSearchInput,ContainerInfo, ContainerInput,InputCode,ButtonAdd,ButtonSale,Searchs,ContainerSearch,Search,Keys,KeyButton,ActiveBarCode} from './style.js'
import InfoWrap from '../components/InfoWrap'
import TableProduct from '../components/TableProduct'
import ModalDiscount from '../components/Modal/ModalDiscount';
import ModalSearch from '../components/Modal/ModalSearch';
import { HomePageContext } from '../../contexts/HomePageContext';
import { DiscountTotalContext} from '../../contexts/DiscountTotalContext.js';
import { ModalTotalContext } from '../../contexts/ModalContext.js';
import { useNavigate, useParams } from 'react-router-dom';
import { Mask } from '../../utils/Mask';
import { useState } from 'react';
import {FlexContent} from '../../globalStyle'
import { useQuery } from 'react-query';
import api from '../../api';

const MenuComp = () => {
 
    const [barCode, setBarCode] = useState('');
    const [useBarCode,setUseBarCode] = useState(JSON.parse(localStorage.getItem('barCode')));
    const [searchedProducts,setSearchedProducts] = useState([]);
    const {total, dispatchTotal} = useContext(DiscountTotalContext);
    const {discount, setDiscount} = useContext(DiscountTotalContext);
    const {openModal, setOpenModal} = useContext(ModalTotalContext)
    const {products,dispatch} = useContext(HomePageContext);
    const [blur,setBlur] = useState();
    const [positionSearch,setPositionSearch] = useState(0)
    const [activeSaleBox,setActiveSaleBox] = useState()
    const searchRef = useRef();
    const navigate = useNavigate()
    const {id} = useParams()



    const {isLoading, data:allProducts} = useQuery(['all-products'],() => api.getProducts())
    const {isLoadingSalesBox,isSuccess, data:salesBox} =  useQuery(['sales-box'],() => api.getSalesBox())
    
    const handleUseBarCode = () => {
      localStorage.setItem('barCode',!useBarCode)
      setUseBarCode(!useBarCode)
    }

    useEffect(() => {
      // eslint-disable-next-line eqeqeq
      if (isSuccess) setActiveSaleBox(salesBox.filter((saleBox => saleBox.id == id))[0].nome)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSuccess])

    useEffect(() => {
    
      if (barCode === ''){
        setSearchedProducts([])
      }
      else{

      const filteredProducts = allProducts.filter(
        (item) =>
          item.nome.toLowerCase().startsWith(barCode.toLowerCase()) ||
          item.codigo_barras.toString().includes(barCode)
      )

      if (useBarCode) {
       
        console.log(filteredProducts)
        let foundId = filteredProducts.filter((filtered) => barCode === filtered.codigo_barras)[0]
       
        if (foundId){
          foundId = foundId.id.toString()
          addProduct(barCode)
        }}
      
      setSearchedProducts(filteredProducts)}
    }, [barCode])
    
 
  const addProduct = async (id) => {
        const data = allProducts.filter((item) => id === item.codigo_barras )[0]; 
        data.quantidade = 1;
        if (products.some(prod => prod.id === data.id)) {   
           addQuantity(data.id)
          } else {
            dispatch(
              {type:"ADD",
              payload:data
            })
            dispatchTotal({
              type:"ADD",
              payload:data.valor
            })
          }    

          setBarCode('')
  }


  const removeProduct = (id) => {
  
    dispatch(
      {type:"REMOVE",
      payload:{id}
    })
    products.map(prod => prod.id === id ?
      dispatchTotal({
        type:"MINUS",
        payload:prod.valor
      })
      :total
      )
  }

  const addQuantity = (id) => { 
     dispatch({
      type:"INCREMENT",
      payload:{id}
    })
    

    products.map(prod => prod.id === id ?
      dispatchTotal({
        type:"ADD",
        payload:prod.valor
      })
      :total
      )    
  }

  const setQtd = (id,qtd) => {
    dispatch({
      type:"SETQTD",
      payload:{id,qtd}
    })
  }
  
  
  const minusQuantity = (id) => {
    dispatch({
      type:"DECREMENT",
      payload:{id}
    })
    
  }
 

  const discountSet = (typeValue,value) => {
    
    if (typeValue === 'discountPercent' || typeValue === 'additionPercent') {
        value = value*total/100
    }
    switch(typeValue) {

      case "discountMoney":
      case "discountPercent":
        dispatchTotal({
          type:"INCREMENT",
          payload:(-value)
        })
        setDiscount((-value))
      break;

      case "additionMoney":
      case "additionPercent":
          value = value*total/100
          dispatchTotal({
            type:"INCREMENT",
            payload:(+value)
            
          })
          setDiscount((+value))
        break;

     
      default:
        break
      }
      setOpenModal(false)
    }
  
    const validateTotal = () => {
      return total === 0 ? true : false;
    }

    const clear = () => {
      dispatch({
        type:"CLEAR",
        
      })
    }

    const handleEnter = () => {
      addProduct(searchedProducts[positionSearch].codigo_barras)
      setPositionSearch(0)
    }
    
    KeyPressed(() => searchedProducts.length -1 !== positionSearch ? setPositionSearch(old => old+1) : null,'ArrowDown')
    KeyPressed(() => positionSearch !== 0 ? setPositionSearch(old => old-1) : null,'ArrowUp')
    KeyPressed(() => !useBarCode ? handleEnter() : null,'Enter')
    KeyPressed(() =>removeProduct((products.at(-1).id)),'F9')
    KeyPressed(() => addProduct(barCode),'F2')
    KeyPressed(() => setOpenModal('search'),'F7')
    KeyPressed(() => setOpenModal('discount'),'F6')
    KeyPressed(() => minusQuantity((products.at(-1).id)),'-')
    KeyPressed(() => addQuantity((products.at(-1).id)),'=')
    KeyPressed(() => !validateTotal() ? navigate(`/payments/${id}`) : null ,'F5')
    KeyPressed(() => clear(),'F12')
    KeyPressed(() => setOpenModal(false),'Escape')
    const handleAdd =  (id) =>{
      addProduct(id)
      setBlur(true)
    }


    return(
      
      <>  
      {isLoading || isLoadingSalesBox ? <div>
       Carregando
      </div>
      :
        <FlexContent>
          <ContainerSearchInput ref={searchRef}>
          <ActiveBarCode>
          <input checked={useBarCode} value={useBarCode} type="checkbox" onChange={()=>handleUseBarCode()}/><p>{useBarCode} &nbsp; Habilitar leitor de código de barras</p>
          </ActiveBarCode>
            <ContainerInput>
                <InputCode onFocus={() => setBlur(false)} value={barCode} autoFocus placeholder='Informe o código de barras ou nome' onChange={event => setBarCode(event.target.value)}/>
                <ButtonSubmit rightBorder medium onClick={() => addProduct(barCode)}>Adicionar Produto (F2)</ButtonSubmit>
            </ContainerInput>
            <Searchs>
            {!blur && !useBarCode &&
                <ContainerSearch>
                
                 {searchedProducts.map((search,index) => {
                 
                  return(
                    <Search key={search.id} active={index === positionSearch} onClick={()=>handleAdd(search.codigo_barras)}>{search.codigo_barras} - {search.nome}</Search>
                  )
                 })}
                </ContainerSearch>}
            </Searchs>
            </ContainerSearchInput>
            <TableProduct products={products} setQtd={setQtd} removeProduct={removeProduct} addQuantity={addQuantity} minusQuantity={minusQuantity}/>
     
        <ContainerInfo>
            <InfoWrap operator bgColor={'#000'} text={'Status'} value={activeSaleBox}/>
            <InfoWrap 
                      text={products.length === 1 ? 'Item' : "Itens"} value={products.length}/>
            <InfoWrap text={discount > 0 ? "Acréscimo" : "Desconto"} 
                      value={Mask.money(discount,true)} 
                      cursor={"true"}
                      bgColor={discount > 0 ? '#6cdd21' : '#e52929'}
                      />
            <InfoWrap bgColor={color.brand}
                      text="Total"
                      value={Mask.money(total)}/>
            <ButtonSale disabled={validateTotal()} onClick={() => navigate(`/payments/${id}`) }>Realizar pagamento (F5)</ButtonSale>
        </ContainerInfo>

        <Keys>
              <KeyButton bg={'#2E86C1'}>Desconto F6</KeyButton>
              <KeyButton bg={'#17A589'}>Aumentar último +</KeyButton>
              <KeyButton bg={'#76448A '}>Diminuir último -</KeyButton>
              <KeyButton bg={'#D68910'}>Alterar último F8</KeyButton>
              <KeyButton bg={'#E74C3C'}>Remover último F9</KeyButton>
              <KeyButton bg={'#8c335f'}>Remover tudo F12</KeyButton>
             
        </Keys>
      
    </FlexContent>}
        {openModal === "discount" && <ModalDiscount discountSet={discountSet} />}
        {openModal === "search"&&<ModalSearch  
        addProduct={addProduct} allProducts={allProducts} />}

      
        
    </>
  
  

  
    )
}


export default MenuComp;