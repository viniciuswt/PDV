import styled from 'styled-components'
import '@fontsource/roboto'
import { color } from '../../../globalStyle'

export const ContainerMenu = styled.div`
  z-index: 2;
  min-width: ${(props) => (props.openMenu || props.isHover ? '250px' : '90px')};
  height: 100vh;
  background: #fff;
  -webkit-box-shadow: 0 0 21px 0 rgb(89 102 122 / 10%);
  box-shadow: 0 0 21px 0 rgb(89 102 122 / 10%);

  .hover:hover {

      color: ${color.brand};
    
  }
`

export const ContainerLogo = styled.div`
  -webkit-box-shadow: -9px 0 20px rgb(89 102 122 / 10%);
  box-shadow: -9px 0 20px rgb(89 102 122 / 10%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;

  

  img {
    height: 3.7vw;
  }

  .logo {
    display: ${(props) => (props.enabled ? 'block' : 'none')};
  }

  .logoTiny {
    display: ${(props) => (props.enabled ? 'none' : 'block')};
  }
`

export const ContainerItems = styled.div`
  justify-content: ${(props) => (props.openMenu || props.isHover ? 'flex-start' : 'center')};
  display: flex;

  padding-top: 10px;
  ul {
    list-style-type: none;
    padding: 0px 20px;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 19px;
  height: 19px;
`

export const MenuItem = styled.li`
  margin-bottom: 13px;
`

export const ContentItem = styled.button`

  white-space: nowrap;
  color: ${(props) => (props.active ? color.brand : '#2c323f')};
  letter-spacing: 0.7px;


  span {
   
    font-weight: 600;
    align-self: flex-end;
    font-size: 19px;
    vertical-align: middle;
    display: inline-block;
  }

  .icon {
    height: 22px;
  }

  .title {
    height: 19px;
    vertical-align: middle;
    font-weight: 600;
    font-size: 14px;
    padding-left: 10px;
  }
`

export const SubMenu = styled.div`
display:flex;
flex-direction:column;
button {
  
  padding-top:0.9vh;
  padding-left:20px;
  align-self:flex-start;
  font-size:12px;
 
}
`