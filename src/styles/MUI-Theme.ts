import { createMuiTheme } from '@material-ui/core/styles'
import { BASIC_COLOR } from 'styles/_colors'

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: 14,
    button: {
      fontSize: '1.4rem',
    },
  },
  palette: {
    primary: {
      main: BASIC_COLOR.mainPurple,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: '1.4rem',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.4rem',
      },
    },
  },
})

export default theme
