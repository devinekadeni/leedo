import React, { createContext, useState, useEffect } from 'react'
import { auth } from 'helpers/Firebase'

const IS_LOGGED_IN = 'IS_LOGGED_IN'

interface AuthType {
  displayName: string
  email: string
  id: string
  isLoggedIn: boolean
}

type ContextState = [AuthType, (state: AuthType) => void]

const initialState = {
  displayName: '',
  email: '',
  id: '',
  isLoggedIn: false,
}

const AuthContext = createContext<ContextState>([initialState, () => null])

const AuthCtxProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState({
    displayName: '',
    email: '',
    id: '',
    isLoggedIn: !!localStorage.getItem(IS_LOGGED_IN),
  })

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthData({
        displayName: user?.displayName || '',
        email: user?.email || '',
        id: user?.uid || '',
        isLoggedIn: !!user,
      })

      if (user) {
        localStorage.setItem(IS_LOGGED_IN, 'true')
      } else {
        localStorage.removeItem(IS_LOGGED_IN)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={[authData, setAuthData]}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthCtxProvider, AuthContext }
export default AuthContext
