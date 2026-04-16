import { GrFormClose } from 'react-icons/gr'
import { IoChevronBackOutline } from 'react-icons/io5'
import { BackgroundModal, CloseContainer, ButtonExit, ContainerModal, Title,ButtonBack } from './style'

const Base = ({ setOpenModal, children, width, height, back,noClose}) => {
  return (
    <BackgroundModal>
      <ContainerModal width={width} height={height}>
      
                 <CloseContainer>
                 {back && ( <ButtonBack onClick={() => setOpenModal("payments")}><IoChevronBackOutline/></ButtonBack>) }
                 {!noClose && 
                  <ButtonExit onClick={() => setOpenModal(false)}><GrFormClose> </GrFormClose></ButtonExit>}
          </CloseContainer>
       
    

        {children}
      </ContainerModal>
    </BackgroundModal>
  )
}
export default Base
