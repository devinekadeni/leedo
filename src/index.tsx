import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const render = (Component: FunctionComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('🧙‍♂️')
  )
}

render(App)

// react hot loader
if (module.hot) {
  module.hot.accept('./App.tsx', () => {
    const NewAppComponent = require('./App').default
    render(NewAppComponent)
  })
}
