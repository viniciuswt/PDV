import { ProgressSpinner } from 'primereact/progressspinner';
import { useContext } from 'react'
import Login from '../../pages/Login'
import { AuthContext } from './AuthContext'

export const AuthRequire = ({ children }) => {
  const {isLoading,user} = useContext(AuthContext)

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ProgressSpinner size="6rem" />
      </div>
    )
  }
  if (user) {
    return children
  }
  return <Login />
}
