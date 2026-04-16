import styled from 'styled-components'
import { color } from '../../../globalStyle'

export const ContainerNav = styled.div``

export const ContainerInitial = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px;
  background-color: #fcfcfc;
  -webkit-box-shadow: 0 0 20px rgb(89 102 122 / 10%);
  box-shadow: 0 0 20px rgb(89 102 122 / 10%);
  font-size: 13px;
  img {
    width: 30px;
    border-radius: 10px;
  }
`
export const ButtonFunction = styled.button`
  cursor: pointer;
  margin-right: 5px;
  align-items: center;
  padding: 4px;
  font-size: 22px;
  .iconFunc {
    font-size: 20px;
    display: flex;
    padding: 1px;
    margin: 0 auto;
  }
`

export const AccountTitle = styled.p`
  font-family: 'Roboto';
  color: rgba(43, 43, 43, 0.7);
  font-size: 10px;
`
export const Title = styled.p`
  font-weight: bold;
`

export const ListItems = styled.ul`
  list-style-type: none;
  padding: 5px;
`

export const TitleConfig = styled.p`
  font-size: 15px;
  padding: 5px;
  font-weight: 600;
  border-bottom: 1px solid ${color.brand};
`

export const Item = styled.li`
  display: flex;
  cursor: pointer;
  font-weight: 600;
  align-items: center;
  padding: 5px;
  svg {
    margin-right: 10px;
    font-size: 20px;
  }
`

export const ProfileDiv = styled.div`
    margin-left:12px;
    margin-right: 2vw;
   
    }
`

export const Config = styled.div`
  background: #fff;
  display: ${(props) => (props.over === 'config' ? 'block' : 'none')};
  -webkit-box-shadow: 0 0 40px rgb(8 21 66 / 15%);
  box-shadow: 0 0 40px rgb(8 21 66 / 15%);
  position: absolute;
  top: 33px;
  right: 150px;
  width: 200px;
  border-radius: 5px;

  &:hover {
    display: block;
  }
`
