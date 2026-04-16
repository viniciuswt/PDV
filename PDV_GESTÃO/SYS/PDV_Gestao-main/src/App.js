import React, { useState } from 'react'
import { DiscountTotalProvider } from './contexts/DiscountTotalContext';
import { HomePageProvider } from './contexts/HomePageContext';
import {FlexContainer, GlobalStyleBody} from './globalStyle';
import { toast, ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Payments from './pages/Payments'
import FinishSale from './pages/FinishSale'
import Users from './pages/Operators'
import Base from './BaseLayout'
import BaseInitial from './BaseInitialLayout'
import SaleBox from './pages/SaleBox';
import Sales from './pages/Sales';
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ModalTotalProvider } from './contexts/ModalContext';
import { AuthProvider } from './contexts/Auth/AuthProvider';

import 'react-toastify/dist/ReactToastify.css'
import SalesBox from './pages/SalesBox';

import { AuthRequire } from './contexts/Auth/AuthRequire';
import Methods from './pages/Methods';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import { KeyPressed } from './hooks/keyHooks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      staleTime:Infinity
    },
  },
})


const App = () => {
  const func = () => {
    const value = localStorage.getItem('lock');
    const newValue = value ?  !JSON.parse(value) : false;
    localStorage.setItem('lock', newValue)
    window.dispatchEvent(new Event('storage'))
  }

  const [openMenu, setOpenMenu] = useState(false)
 
  KeyPressed(() => func(),'NumLock' )
  return(
      <>
      <QueryClientProvider client={queryClient}>
      <GlobalStyleBody/>
     
    
    <FlexContainer>
      <HashRouter>
      <AuthProvider>
      <HomePageProvider>
      <DiscountTotalProvider>
      <ModalTotalProvider>

        <Routes>
       
          <Route element={<AuthRequire><BaseInitial/></AuthRequire>}>
            <Route path='/' element={<SalesBox/>}></Route>
            <Route path='/salesbox' element={<SaleBox/>}></Route>
            <Route path='/methods' element={<Methods/>}></Route>
            <Route path='/users' element={<Users/>}/>
            <Route path='/sales' element={<Sales/>}/>
          </Route>
          <Route  element={<AuthRequire><Base openMenu={openMenu} setOpenMenu={setOpenMenu}/></AuthRequire>}>
            <Route path='/home/:id' element={<Home/>}/>
            <Route path='/payments/:id' element={<Payments/>}></Route>
            <Route path='/finish/:id/:status' element={<FinishSale/>}></Route>
          
           </Route>
        </Routes>
        </ModalTotalProvider>
     </DiscountTotalProvider>
      </HomePageProvider>
     
        </AuthProvider>
      </HashRouter>
    </FlexContainer>
    <ToastContainer autoClose={1500} position={toast.POSITION.TOP_RIGHT} />
  <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    
      </>
    )
}
export default App