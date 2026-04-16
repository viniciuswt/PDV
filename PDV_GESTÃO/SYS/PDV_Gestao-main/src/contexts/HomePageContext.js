import { createContext,useState,useEffect, useReducer, useContext } from "react";
import api from "../api";
import { AuthContext } from "./Auth/AuthContext";


export const HomePageContext = createContext('');
export const HomePageProvider = ({children}) => {
    
    const [barCode, setBarCode] = useState("");
    const [allProducts,setAllProducts] = useState([])
    const [searchedProducts, setSearchedProducts] = useState([]);
    const {user} = useContext(AuthContext)
    const productReducer = (state,action) => {
      switch(action.type) {
        case "ADD":
          return [...state, action.payload];

        case "REMOVE":
          return state.filter(item => item.id !== action.payload.id);
        
        case "CLEAR":
          return [];

        case "INCREMENT":
         
          return state.map(prod => prod.id === action.payload.id ? { ...prod, quantidade: prod.quantidade + 1 } : prod)
        
        case "SETQTD":
         
          return state.map(prod => prod.id === action.payload.id ? { ...prod, quantidade: action.payload.qtd } : prod)
          
          
        case "DECREMENT":
        return state.filter(prod => (prod.id === action.payload.id ? prod.quantidade > 1 : true)).map(prod =>
        prod.id === action.payload.id ? { ...prod, quantidade: prod.quantidade - 1 } : prod
        );
        default:
          return state
      }
    }
    const [products,dispatch] = useReducer(productReducer,[])
  
  
   

  

   
  
    
    const values = {
        barCode,
        setBarCode,
        searchedProducts,
        setSearchedProducts,
        products,
        allProducts,
        dispatch,
  

    }
  
    

return(
    <HomePageContext.Provider value={values}>
        {children}
    </HomePageContext.Provider>
)
}
