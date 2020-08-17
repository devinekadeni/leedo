import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from 'components/Header'
import AuthDialog from 'components/Auth'
import HomePage from 'pages/Home'

const RoutingComponent: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/*">
            <div>404 Not Found</div>
          </Route>
        </Switch>
        <AuthDialog />
      </Router>
    </>
  )
}

export default RoutingComponent
