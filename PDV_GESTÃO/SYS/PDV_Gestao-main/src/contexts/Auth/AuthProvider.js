import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import api from  '../../api/'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  
  const storageData = localStorage.getItem('authToken')
  const {data, isLoading} = useQuery(['validate-user',storageData],() => api.validateToken(storageData),{onSuccess: (successData) =>
  successData.user ? setUser(successData.user) : null})
  
  


  const signIn = async (email, password) => {
    const data = await api.signIn(email, password)
    if (data.user && data.token) {
      setUser(data.user)
      setToken(data.token)
      return true
    }

    return false
  }

  const signOut = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('form')
    navigate('/')
  }

  const setToken = (token) => {
    localStorage.setItem('authToken', token)
  }
  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading,data }}>
      {children}
    </AuthContext.Provider>
  )
}
