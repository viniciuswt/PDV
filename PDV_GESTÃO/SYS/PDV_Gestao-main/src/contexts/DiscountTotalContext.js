import { createContext,useContext,useEffect,useReducer,useState } from "react";
import { HomePageContext } from "./HomePageContext";


export const DiscountTotalContext = createContext();


export const DiscountTotalProvider = ({children}) => {
    const {products} = useContext(HomePageContext)
    const [discount, setDiscount] = useState(0.00);
    const [total0, setTotal0] = useState()
    const totalReducer = (state,action) => {
        switch(action.type) {
          case "ADD":
            return action.payload   
        case "INCREMENT":
            return total0 + (+action.payload)  
          case "DECREMENT":
            return state-action.payload
          default:
            return state
        }
      }

      const [total, dispatchTotal] =  useReducer(totalReducer,0)
  
    


    useEffect(() => {
        let sum = 0
        products.map((prod) => (sum+=(prod.valor*prod.quantidade)))
        dispatchTotal({type:"ADD",payload:sum})
        setTotal0(sum)
        
    },[products])
    
    
    const values = {
        discount,setDiscount,
        total,dispatchTotal
    }
  
    

return(
    <DiscountTotalContext.Provider value={values}>
        {children}
    </DiscountTotalContext.Provider>
)
}
