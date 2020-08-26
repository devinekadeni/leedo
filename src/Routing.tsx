import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthContext from 'context/AuthContext'

import Header from 'components/Header'
import AuthDialog from 'components/Auth'
import ProtectedRoute from 'components/ProtectedRoute'
import HomePage from 'pages/Home'
import TaskListPage from 'pages/TaskList'
import UnauthorizedPage from 'pages/Unauthorized'

const RoutingComponent: React.FC = () => {
  const [authData] = useContext(AuthContext)

  return (
    <>
      <Router>
        <Header isLoggedIn={authData.isLoggedIn} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/list" component={TaskListPage} />
          <Route path="/unauthorized" component={UnauthorizedPage} />
          <Route path="/*" render={() => <div>404 Not Found</div>} />
        </Switch>
        {!authData.isLoggedIn && <AuthDialog />}
      </Router>
    </>
  )
}

export default RoutingComponent
