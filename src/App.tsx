import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/MUI-Theme'
import RoutingComponent from './Routing'
import { DialogCtxProvider } from 'context/DialogContext'
import { AuthCtxProvider } from 'context/AuthContext'

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AuthCtxProvider>
          <DialogCtxProvider>
            <RoutingComponent />
          </DialogCtxProvider>
        </AuthCtxProvider>
      </ThemeProvider>
    </>
  )
}

export default App
