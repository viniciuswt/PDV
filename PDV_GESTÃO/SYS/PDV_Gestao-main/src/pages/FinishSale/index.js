import React, { useContext, useRef } from 'react'
import { FinishContent,IconContainer,Buttons } from './style';
import {BsCartCheck} from 'react-icons/bs'
import { ButtonSubmit } from '../../globalStyle';
import { useNavigate, useParams } from 'react-router-dom';
import {GoSync} from 'react-icons/go'
import {TbReceipt2} from 'react-icons/tb'
import {MdOutlineReceiptLong} from 'react-icons/md'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { HomePageContext } from '../../contexts/HomePageContext';
import { DiscountTotalContext } from '../../contexts/DiscountTotalContext';
import { Mask } from '../../utils/Mask';

const MenuComp = () => {

  const componentRef = useRef();
  const {dispatch,products} = useContext(HomePageContext)
  const {setDiscount} = useContext(DiscountTotalContext)
  const {id,status} = useParams()

 
pdfMake.vfs = pdfFonts.pdfMake.vfs;
var dataAtual = new Date();



const generatePDF = () => {
// Formate a data e hora no formato desejado
var dataFormatada = dataAtual.toLocaleString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

dataFormatada = dataFormatada.replace(" ", " às ");

  
  const documentDefinition = {
    pageSize: { width: 255, // 8,5 polegadas em pontos (72 pontos por polegada)
    height: 482, // 11 polegadas em pontos (72 pontos por polegada)
    unit: 'pt' // unidade de medida em pontos 
  },
    pageMargins: [20, 20, 20, 20],
    content: [
    
      
      { text: 'RECIBO DA COMPRA', style: 'header' },
  
      {
        layout:'noBorders',
        style:'subheader',
        table: {
       
        headerRows: 1,
        widths: [ '*', 'auto', 100, '*' ],
        
        body: [
          ['ITEM','COD','NOME DO PRODUTO','VALOR'],
          ...products.map((prod,index) => 
            [index+1,prod.codigo_barras,prod.nome,Mask.money(prod.valor)]
        )
         
        ]
      }},

      { text: dataFormatada ,style: 'total'},
      {text: `Emitido por: GESTAO DE PRECO`, style:'emissao'}
    ],
  
    styles: {
      products: {
        alignment:'left',
        fontSize: 8,
        margin: [0, 0, 0, 0]
      },
      header: {
        fontSize: 12,

        alignment: 'center',
        margin: [0, 0, 0, 0],
      
      },
      subheader: {
        alignment:'left',
        fontSize: 8,
        
        margin: [0, 20, 0, 0]
      },
      total: {
        fontSize: 8,
        alignment:'left',
      
        margin: [0, 20, 0, 0]
      },
      emissao:{
        fontSize: 8,
        alignment:'left',

      }
    }
  
  }

  pdfMake.createPdf(documentDefinition).open();}
  

 
const navigate = useNavigate()

const handleNew = () => {
  dispatch(
    {type:"CLEAR",
   
  })
  setDiscount(0)
  navigate(`/home/${id}`)
}
 

    return(
     

     
      <FinishContent >
          
        
      <IconContainer>
        <BsCartCheck/>
      </IconContainer>
      <h1>Venda concluída</h1>
      <Buttons  ref={componentRef}>
      {status === 's' &&
        <ButtonSubmit background={"#8ca2e7"} width={'15vw'} onClick={generatePDF}><TbReceipt2/>Imprimir recibo</ButtonSubmit>}
        {status === 't' &&
        <ButtonSubmit background={"#b57edc"} width={'15vw'}><MdOutlineReceiptLong/>Imprimir nota fiscal</ButtonSubmit>}
       
        <ButtonSubmit background={"#17A589"} width={'15vw'} onClick={()=>handleNew()}><GoSync/> Nova venda</ButtonSubmit>
      </Buttons>
      
    </FinishContent>

  
    )
}


export default MenuComp;