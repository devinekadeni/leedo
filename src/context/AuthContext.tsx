import React, { createContext, useState } from 'react'

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
  const [authData, setAuthData] = useState(initialState)

  return (
    <AuthContext.Provider value={[authData, setAuthData]}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthCtxProvider, AuthContext }
export default AuthContext
