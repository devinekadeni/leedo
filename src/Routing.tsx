import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from 'pages/Home'

const RoutingComponent: FunctionComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/*">
            <div>404 Not Found</div>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default RoutingComponent
