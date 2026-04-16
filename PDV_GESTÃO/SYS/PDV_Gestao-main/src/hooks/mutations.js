import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import api from "../api";
import { ModalTotalContext } from "../contexts/ModalContext";

export const useAddSaleBox = () => {
    const queryClient = useQueryClient()
    const {setOpenModal} = useContext(ModalTotalContext)
   
   return useMutation((data) =>  
   
   api.addSalesBox(data), {
   onMutate: (data) => {
     queryClient.cancelQueries('sales-box')
     queryClient.setQueryData('sales-box', old => [...old,data])
   },
   onSuccess:() => {
    toast.success("Caixa cadastrado com sucesso")
    setOpenModal(null);
   },
   onError: (err, newTodo, context) => {
    toast.error("Algo deu errado, estado revertido")
    queryClient.setQueryData(['sales-box'], context.previousTodos)
   },
   onSettled: () => {
    queryClient.refetchQueries('sales-box')
   }
   
 })
}
export const useDeleteSaleBox = () => {
  const {setOpenModal} = useContext(ModalTotalContext)
    const queryClient = useQueryClient()
   return useMutation((id) =>  
   api.deleteSalesBox(id), {
   onMutate: (id) => {
     queryClient.cancelQueries('sales-box')
     const previousTodos = queryClient.getQueryData(['sales-box'])
     queryClient.setQueryData('sales-box', old => old.filter((saleBox) => saleBox.id !== id))
   
     return { previousTodos }
   },
   
   onError: (err, newTodo, context) => {
    toast.error(err.error)
    
    queryClient.setQueryData(['sales-box'], context.previousTodos)
    
 
   },
   onSuccess: () => {
     toast.success("Caixa deletado com sucesso")
     setOpenModal(null);
   }
   
 })
}

export const useOpenSaleBox = () => {
  const {setOpenModal} = useContext(ModalTotalContext)
  const queryClient = useQueryClient()
  
 
 return useMutation((data) =>  
 
 api.openSalesBox(data), {
 onMutate: (data) => {
  queryClient.cancelQueries('sales-box')
  const previousTodos = queryClient.getQueryData(['sales-box'])
  queryClient.setQueryData('sales-box', old => old.map((item) => item.id === data.id ? {...item, dinheiro_atual:data.dinheiro_atual,status:!item.status}:item))
  return { previousTodos }
   
 },
 onSuccess:() => {
  toast.success("Caixa aberto com sucesso")
  setOpenModal(null);
 },
 onError: (err, newTodo, context) => {

  toast.error(err.error)
  queryClient.setQueryData(['sales-box'], context.previousTodos)
 
 },
 
})
}


export const useCloseSalesBox = () => {
  const {setOpenModal} = useContext(ModalTotalContext)
  const queryClient = useQueryClient()
 return useMutation((data) =>  
 api.closeSalesBox(data), {
 onMutate: (data) => {
  queryClient.cancelQueries('sales-box')
  const previousTodos = queryClient.getQueryData(['sales-box'])
  queryClient.setQueryData('sales-box', old => old.map((item) => item.id === data.id ? {...item, dinheiro_atual:data.dinheiro_atual,status:!item.status}:item))
  return { previousTodos }
   
   
  
 },
 onSuccess:() => {
  toast.success("Caixa fechado com sucesso")
  setOpenModal(null);
 },
 onError: (err, newTodo, context) => {
  toast.error(err.error)
  queryClient.setQueryData(['sales-box'], context.previousTodos)
  
  
 },
 
})
}

export const useReinforceSalesBox = () => {
  const {setOpenModal} = useContext(ModalTotalContext)
  const queryClient = useQueryClient()
 return useMutation((data) =>  
 api.reinforce(data), {
 onMutate: (data) => {
  queryClient.cancelQueries('sales-box')
  const previousTodos = queryClient.getQueryData(['sales-box'])
  queryClient.setQueryData('sales-box', old => old.map((item) => item.id === data.id ? {...item, dinheiro_atual:item.dinheiro_atual+data.dinheiro_atual}:item))
  return { previousTodos }
   

 },
 onSuccess:() => {
  toast.success("Caixa reforçado com sucesso")
  setOpenModal(null);
 },
 onError: (err, newTodo, context) => {
  toast.error(err.error)
  queryClient.setQueryData(['sales-box'], context.previousTodos)
  
  
 },
 
})
}

export const useSangriaSalesBox = () => {
  const {setOpenModal} = useContext(ModalTotalContext)
  const queryClient = useQueryClient()
 return useMutation((data) =>  
 api.sangria(data), {
 onMutate: (data) => {
  queryClient.cancelQueries('sales-box')
  const previousTodos = queryClient.getQueryData(['sales-box'])
  queryClient.setQueryData('sales-box', old => old.map((item) => item.id === data.id ? {...item, dinheiro_atual:item.dinheiro_atual-data.dinheiro_atual}:item))
  return { previousTodos }
   

 },
 onSuccess:() => {
  toast.success("Caixa com sangria realizada")
  setOpenModal(null);
 },
 onError: (err, newTodo, context) => {
  toast.error(err.error)
  queryClient.setQueryData(['sales-box'], context.previousTodos)
  
  
 },
 
})
}

export const useAddSale = () => {
    const queryClient = useQueryClient()
   return useMutation((data) =>  
   api.addSale(data), {
   onMutate: (data) => {
   
   },
   onSuccess:() => {
    toast.success("Venda realizada com sucesso")
    
   },
   onError: (err, newTodo, rollback) => {
    rollback();
    toast.error("Algo deu errado, estado revertido");
    
   },
   onSettled: () => {
    queryClient.refetchQueries('sales')
    queryClient.refetchQueries('sales-box')
    
    
   }
   
 })
}


export const useAddOperator = () => {
  const queryClient = useQueryClient()
  const {setOpenModal} = useContext(ModalTotalContext)
 
 return useMutation((data) =>  
 
 api.addOperator(data), {
 onMutate: (data) => {
   queryClient.cancelQueries('operators')
   queryClient.setQueryData('operators', old => [...old,data])
 },
 onSuccess:() => {
  toast.success("Usuário cadastrado com sucesso")
  setOpenModal(null);
 },
 onError: (err, newTodo, context) => {
  toast.error("Algo deu errado, estado revertido")
  queryClient.setQueryData(['operators'], context.previousTodos)
 },
 onSettled: () => {
  queryClient.refetchQueries('operators')
 }
 
})
}


export const useDeleteSale = () => {
  
  const {setOpenModal} = useContext(ModalTotalContext)
    const queryClient = useQueryClient()
   return useMutation((id) =>  
   api.deleteSale(id), {
   onMutate: (id) => {
     queryClient.cancelQueries('sales')
     const previousTodos = queryClient.getQueryData(['sales'])
     queryClient.setQueryData('sales', old => old.filter((sale) => sale.id !== id))
     return { previousTodos }
     
   },
   
   onError: (err, newTodo, context) => {
    toast.error(err.error)
    queryClient.setQueryData(['sales'], context.previousTodos)
    
   },
   onSuccess: () => {
     toast.success("Venda deletada com sucesso")
     setOpenModal(null);
   },
   onSettled: () => {
    queryClient.refetchQueries('sales-box')
   }
  
   
 })
}