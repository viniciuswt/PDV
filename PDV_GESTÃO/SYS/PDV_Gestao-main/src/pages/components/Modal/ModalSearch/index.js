import {InputContainer,TableContainer, TableSearchProduct,RowHead,ColumnHead,RowBody,ColumnBody} from './style.js'
import {Button, TitleContainer, Title, ButtonContainer} from '../style'
import { useContext, useState } from 'react';
import { color } from '../../../../globalStyle.js';
import { HomePageContext } from '../../../../contexts/HomePageContext.js';
import { ModalTotalContext } from '../../../../contexts/ModalContext.js';
import { KeyPressed } from '../../../../hooks/keyHooks.js';
import Base from '../index.js';
import { useEffect } from 'react';
import { Mask } from '../../../../utils/Mask.js';

const ModalSearch = ({addProduct,allProducts}) => {
    const [selected,setSelected] = useState();
    const [barCode, setBarCode] = useState('');
    const [searchedProducts,setSearchedProducts] = useState([]);
    const {setOpenModal} = useContext(ModalTotalContext)

    useEffect(() => {
        setSearchedProducts(allProducts)
    }, [])

    useEffect(() => {
        const filteredProducts = allProducts.filter(
          (item) =>
            item.nome.toLowerCase().startsWith(barCode.toLowerCase()) ||
            item.id.toString().includes(barCode)
        )
        setSearchedProducts(filteredProducts)
      }, [barCode])
 

    const createNewProduct = (id) => {
        addProduct(id);
        setOpenModal(false)
    }


    KeyPressed(() => createNewProduct(selected),"Enter")
  
   
    return (
      <Base width={'50%'} height={'70%'}  setOpenModal ={setOpenModal}>
               
                <TitleContainer>
                    <Title>Localizar produto</Title>
                </TitleContainer>
               <TableContainer>
                    <TableSearchProduct>
                    <thead>
                    <RowHead style={{width:"100%"}}>
                        <ColumnHead style={{width:"25%"}}>Código</ColumnHead>
                        <ColumnHead style={{width:"45%"}}>Nome</ColumnHead>
                        <ColumnHead style={{width:"30%"}}>Valor</ColumnHead>
                    </RowHead>
                    </thead>

                    <tbody>
                    {
             searchedProducts.map((prod) => {
                return(
                    <RowBody key={prod.id} onClick={() => setSelected(prod.codigo_barras)} active={prod.codigo_barras === selected ? true : false}>
                    <ColumnBody>{prod.codigo_barras}</ColumnBody>
                    <ColumnBody>{prod.nome}</ColumnBody>
                    <ColumnBody>{Mask.money(prod.valor)}</ColumnBody>
                </RowBody>
                )})}
                    </tbody>
                    </TableSearchProduct>
               </TableContainer>
               <InputContainer>
                    <input autoFocus defaultValue={barCode} placeholder="Nome do produto" onChange={(event) => setBarCode(event.target.value)}/>
               </InputContainer>
               <ButtonContainer>
                    <Button color={'crimson'} onClick={() => setOpenModal(false)}>Cancelar (ESC)</Button>
                    <Button color={color.brand} onClick={() => createNewProduct(selected)}>Confirmar (ENTER)</Button>
               </ButtonContainer>

               </Base>

    );
  };
  export default ModalSearch;