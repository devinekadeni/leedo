import React, { FunctionComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/MUI-Theme'
import RoutingComponent from './Routing'

const App: FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RoutingComponent />
      </ThemeProvider>
    </>
  )
}

export default App
