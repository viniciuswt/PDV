import { BsCashCoin, BsCreditCard } from 'react-icons/bs';
import { BiCreditCardAlt } from 'react-icons/bi';
import { MdOutlinePayments } from 'react-icons/md';
import {ReactComponent as Pix} from '../../../../icons/pix.svg'

export const MethodsData  = [
    {
        title:"Dinheiro",
        icon: <BsCashCoin/>,
        link:'/money-payment'
    },
    {
        title:"Cartão de crédito",
        icon: <BsCreditCard/>,
        link:'/card-payment'
    },
  
    {
        title:"Cartão de débito",
        icon: <BiCreditCardAlt/>,
        link:'/'
    },
    {
        title:"Pix",
        icon: <Pix/>,
        link:'/'
    },
    {
        title:"Outros",
        icon: <MdOutlinePayments/>,
        link:'/'
    },
]