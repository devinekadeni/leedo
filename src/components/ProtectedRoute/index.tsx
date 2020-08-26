import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthContext from 'context/AuthContext'

interface Props {
  component: React.FC
  [key: string]: unknown
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const [authData] = useContext(AuthContext)

  if (!authData.isLoggedIn) {
    return <Redirect to="/unauthorized" push />
  }

  return <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
}

export default ProtectedRoute
