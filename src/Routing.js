import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const RoutingComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>Home page</div>
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
