import {BiHomeAlt,BiExit,BiMessageAltEdit} from 'react-icons/bi'
import {MdAttachMoney,MdProductionQuantityLimits,MdOutlineSell} from 'react-icons/md'
import {TbDiscount2} from 'react-icons/tb'
import {AiOutlineInbox,AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {HiOutlineInboxArrowDown} from 'react-icons/hi2'


export const MenuData  = [
    {
        title:"Home (F1)",
        icon: <BiHomeAlt/>,
        link:'/home',
    
    },
    {
        title:"Adicionar produto (F2)",
        icon: <AiOutlinePlusCircle/>,
        modal:'nothing'
     
    },
    {
        title:"Remover produto (F3)",
        icon: <AiOutlineMinusCircle/>,
        modal:'nothing'
       
    },
    {
        title:"Alterar valor (F4)",
        icon: <BiMessageAltEdit/>,
        modal:'nothing'
     
    },
    {
        title:"Pagamento (F5)",
        icon: <MdAttachMoney/>,
        link:'payments'
    },
    {
        title:"Desconto (F6)",
        icon: <TbDiscount2/>,
        modal:'discount'
    },
    {
        title:"Buscar produtos (F7)",
        icon: <MdProductionQuantityLimits/>,
        modal: 'search'

    },
   

    {
        title:"Sair (F11)",
        icon: <BiExit/>,
        link:'/'
    }
]