import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
} from '../styles'
import { Props } from './types'

const onSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault()
}

const Login: React.FC<Props> = ({ onClose }) => {
  return (
    <StyledDialog open onClose={onClose} PaperProps={{ className: 'paper-dialog' }}>
      <StyledDialogTitle>Login</StyledDialogTitle>
      <form onSubmit={onSubmit}>
        <StyledDialogContent>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </StyledDialogContent>
        <StyledDialogActions>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </StyledDialogActions>
      </form>
    </StyledDialog>
  )
}

export default Login
