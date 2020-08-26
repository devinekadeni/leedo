import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Close } from '@styled-icons/material/Close'

import { loginByEmail } from 'helpers/Firebase'

import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  ButtonWrapper,
} from '../styles'
import { Props, FormData } from './types'

const Login: React.FC<Props> = ({ onClose }) => {
  const { handleSubmit, register, setValue, errors } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    register('email', { required: 'Required' })
    register('password', { required: 'Required' })
  }, [register])

  const onSubmit = async (data: FormData) => {
    setErrorMessage('')
    setIsSubmitting(true)
    const { email, password } = data

    try {
      await loginByEmail(email, password)
    } catch (error) {
      setIsSubmitting(false)
      setErrorMessage(error.message)
    }
  }

  return (
    <StyledDialog open onClose={onClose} PaperProps={{ className: 'paper-dialog' }}>
      <StyledDialogTitle>
        Login
        <Close size={24} className="ic-close" onClick={onClose} />
      </StyledDialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledDialogContent>
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setValue('email', e.target.value)}
            error={'email' in errors}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setValue('password', e.target.value)}
            error={'password' in errors}
            helperText={errors.password?.message}
          />
        </StyledDialogContent>
        <StyledDialogActions>
          <ButtonWrapper>
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
            {isSubmitting && (
              <CircularProgress size={20} thickness={5} className="btn-loading" />
            )}
          </ButtonWrapper>
        </StyledDialogActions>
      </form>
    </StyledDialog>
  )
}

export default Login
