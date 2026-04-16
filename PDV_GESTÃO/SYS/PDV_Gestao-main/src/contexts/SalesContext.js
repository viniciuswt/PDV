/*import { createContext,useEffect, useReducer, useContext } from "react";
import api from "../api";
import { AuthContext } from "./Auth/AuthContext";


export const SalesContext = createContext('');
export const SalesProvider = ({children}) => {
const { user } = useContext(AuthContext)
    

    useEffect(() => {
        if (user) {
              APIGet()}
      }, [user])
   
      
    const SalesReducer = (state,action) => {
      switch(action.type) {
        case "INITIAL":
            return action.payload
        case "ADD":
          return [...state, action.payload];

        case "REMOVE":
          return state.filter(item => item.id !== action.payload.id);

        default:
          return state
      }
    }
    const APIGet = async () => {
            
      const dataProducts = await api.getSales()         
    
      dispatch(
          {type:"INITIAL",
          payload:dataProducts
        }) 
    }
    
    const [sales,dispatch] = useReducer(SalesReducer,[])
  
    


   
  
    
    const values = {
        sales,
        dispatch,
        APIGet

    }
  
    

return(
    <SalesContext.Provider value={values}>
        {children}
    </SalesContext.Provider>
)
}
*/
