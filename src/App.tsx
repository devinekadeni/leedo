import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/MUI-Theme'
import RoutingComponent from './Routing'
import { DialogCtxProvider } from 'context/DialogContext'

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <DialogCtxProvider>
          <RoutingComponent />
        </DialogCtxProvider>
      </ThemeProvider>
    </>
  )
}

export default App
