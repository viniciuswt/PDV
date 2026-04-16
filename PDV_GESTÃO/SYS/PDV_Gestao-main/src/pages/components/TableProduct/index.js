import {ContainerTable, ProductTable, TableHead, TableBody, Button,InputQuantity,QuantityButton} from './style.js'
import {BsTrash} from 'react-icons/bs'
import {CiSquareMinus,CiSquarePlus} from 'react-icons/ci'
import { useState } from 'react';
import { Mask } from '../../../utils/Mask.js';

const TableProduct = ({products,removeProduct,addQuantity,minusQuantity,setQtd}) => {
 
    return (
    <ContainerTable>
        <ProductTable>
          <thead>
            <TableHead>
                <th style={{width:"10%"}}>N°</th>
                <th style={{width:"30%"}}>Nome do produto</th>
                <th style={{width:"20%"}}><Button></Button>Quantidade</th>
                <th style={{width:"10%"}}>Valor unitário</th>
                <th style={{width:"20%"}}>Valor total</th>
                <th style={{width:"10%"}}></th>
    
            </TableHead>
            </thead>
       <tbody>
       {products.map((val, i) => {
                        return (
                           <TableBody key={i}>
                              <td>{++i}</td>
                              <td>{val.nome}</td>
                              <td className='quantityDiv'>
                                <QuantityButton onClick={() => minusQuantity(val.id)}><CiSquareMinus/></QuantityButton>
                                <InputQuantity onChange={(e) => setQtd(val.id,(+e.target.value))} value={val.quantidade}/>
                                <QuantityButton onClick={() => addQuantity(val.id)}><CiSquarePlus/></QuantityButton>
                              </td>
                              <td>{Mask.money(parseFloat(val.valor))}</td>
                              <td>{Mask.money(val.valor*val.quantidade)}</td>
                              <td><Button onClick={() => removeProduct(val.id)}> <BsTrash/> </Button></td>
                           </TableBody>
                        )
                    })}
        
        </tbody>
      </ProductTable>
    </ContainerTable>
  
    );
  };
  export default TableProduct;

