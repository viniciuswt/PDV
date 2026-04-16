import {useContext, useState } from 'react'
import {ContainerMenu,ContainerLogo,ContainerItems,Button,MenuItem,ContentItem,SubMenu} from './style.js'
import logo from '../../../icons/logo-RGB-36.png'
import logoTiny from '../../../icons/logo-RGB-39.png'
import {FiGrid} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/Auth/AuthContext.js'
import { toast } from 'react-toastify'
import { ModalTotalContext } from '../../../contexts/ModalContext.js'



const Menu = ({MenuData,all}) => {
   
    const [openMenu, setOpenMenu] = useState(all);
    const [isHover, setIsHover] = useState(false)
    const navigate = useNavigate()
    const {user,signOut} = useContext(AuthContext)
    const {setOpenModal} = useContext(ModalTotalContext)
    
    const handleLink = (link,require,modal) => {
    if (require){
        if (user.admin) navigate(link)
        else {toast.error('Usuário não tem permissão')
        return;}}
    else
     
        link ? navigate(link) : modal ? setOpenModal(modal) : signOut()
        
    }
    

    return (
        <ContainerMenu openMenu={openMenu} isHover={isHover} onMouseOver={()=>setIsHover(true)} onMouseOut={()=>setIsHover(false)}>
           <ContainerLogo enabled={isHover || openMenu}>
          <img src={logo} alt="logo" className="logo" />
          <img src={logoTiny} alt="logo" className="logoTiny" />
          {(openMenu || isHover) && (
            !all &&
            <Button onClick={openMenu ? () => setOpenMenu(false) : () => setOpenMenu(true)}>
              <FiGrid />
            </Button>
          )}
        </ContainerLogo>
            <ContainerItems openMenu={openMenu} isHover={isHover}>
                <ul>
                    {MenuData.map((val, key) => {
                        return (
                            <MenuItem key={key}>
                                <ContentItem className={(val.subitems) ? '' : 'hover'}  active={val.link === '/home' ? true : false}>
                                    <div style={{display:'flex'}} onClick={()=>handleLink(val.link,val.require,val.modal)}>
                                    <span  className='icon'>{val.icon}</span> 
                                    {(openMenu || isHover) &&
                                    <span className='title'>{val.title}</span>}
                                    </div>
                                    {(openMenu || isHover) && 
                                    <>
                                   

                                    <SubMenu>
                                        {val.subitems &&
                                       val.subitems.map((v) => {
                                        return(
                                            <button onClick={() =>handleLink(v.link,v.require)} className='hover'>- {v.title}</button>
                                        )
                                       })

                                       }
                                    </SubMenu> </>}
                                </ContentItem>
                            </MenuItem>
                        )
                    })}

                </ul>
            </ContainerItems>
        </ContainerMenu>

    )
};
  export default Menu;