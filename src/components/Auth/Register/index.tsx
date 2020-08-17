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

const Register: React.FC<Props> = ({ onClose }) => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <StyledDialog open onClose={onClose} PaperProps={{ className: 'paper-dialog' }}>
      <StyledDialogTitle>Register</StyledDialogTitle>
      <form onSubmit={onSubmit}>
        <StyledDialogContent>
          <TextField variant="outlined" label="Fullname" placeholder="Enter your name" />
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

export default Register
