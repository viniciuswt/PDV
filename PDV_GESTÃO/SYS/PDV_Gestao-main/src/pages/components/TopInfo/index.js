import { BiFullscreen, BiHelpCircle } from 'react-icons/bi'
import { VscGear } from 'react-icons/vsc'
import { useContext, useState } from 'react'
import { TbZoomMoney } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import Profile from '../../../icons/profile.jpg'
import {
  ContainerInitial,
  Title,
  ContainerNav,
  ButtonFunction,
  ProfileDiv,
  AccountTitle,
  Config,
  TitleConfig,
  ListItems,
  Item,
} from './style'
import { AuthContext } from '../../../contexts/Auth/AuthContext'
import { KeyPressed } from '../../../hooks/keyHooks'
const TopInfo = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

  const [fullscreen,setFullScreen] = useState(false)

  const [over, setOver] = useState(null)

  

const handleFullscreen = (flag) => {
  setFullScreen(flag)
  window.setFullscreen.fullscreen(flag)

}

KeyPressed(() => handleFullscreen(false),'Escape')
  return (
    <ContainerInitial>
      <ContainerNav>
        <ButtonFunction>
          <BiFullscreen className="iconFunc" onClick={() =>handleFullscreen(fullscreen ? false : true)} />
        </ButtonFunction>
        <ButtonFunction>
          <BiHelpCircle className="iconFunc" />
        </ButtonFunction>
        <ButtonFunction onMouseLeave={() => setOver(null)} onMouseOver={() => setOver('config')}>
          <VscGear className="iconFunc" />
        </ButtonFunction>
      </ContainerNav>
      <img src={Profile} alt="profile" />
      <ProfileDiv>
        <Title>{user.nome} <span>(Loja x)</span></Title>
        <AccountTitle>Conta do usúario</AccountTitle>
      </ProfileDiv>

      <Config over={over}>
        <TitleConfig>Configuração</TitleConfig>
        <ListItems>
          <Item onClick={() => navigate('/expenses')}>
            <TbZoomMoney />
            Definição de despesas
          </Item>
        </ListItems>
      </Config>
    </ContainerInitial>
  )
}
export default TopInfo
