import { createMuiTheme } from '@material-ui/core/styles'
import { BASIC_COLOR } from 'styles/_colors'

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
    button: {
      fontSize: '1.4rem',
    },
  },
  palette: {
    primary: {
      main: BASIC_COLOR.mainPurple,
    },
  },
})

export default theme
