import {BiHomeAlt,BiExit,BiSpreadsheet} from 'react-icons/bi'
import {MdAttachMoney,MdProductionQuantityLimits,MdOutlineSell} from 'react-icons/md'
import {TbDiscount2} from 'react-icons/tb'
import {AiOutlineInbox,AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import { VscGear } from 'react-icons/vsc'


export const MenuData  = [
    {
        title:"Dashboard",
        icon: <BiHomeAlt/>,
        link:'/',
    
    },
    {
        title:"Vendas realizadas",
        icon: <MdOutlineSell/>,
        link:'/sales',
      
    },
    {
        title:"Logs de operação",
        icon:<BiSpreadsheet/>,
        link:'/'
    },
    {
        title:"Configurações",
        icon: <VscGear/>,
    
        subitems:[{ title:"Usuários",link:'/users',require:true},{title:"Caixas",link:'/salesbox',require:true},{title:"Formas de pagamento",link:'/methods',require:true}]
    },
    {
        title:"Deslogar",
        icon: <BiExit/>,
    
      
    },
  
]