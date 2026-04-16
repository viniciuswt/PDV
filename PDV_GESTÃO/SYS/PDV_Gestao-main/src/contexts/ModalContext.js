import { createContext,useState } from "react";


export const ModalTotalContext = createContext();


export const ModalTotalProvider = ({children}) => {
    
    const [openModal, setOpenModal] = useState(false);
    const values = {
        openModal, setOpenModal
    }
return(
    <ModalTotalContext.Provider value={values}>
        {children}
    </ModalTotalContext.Provider>
)
}
