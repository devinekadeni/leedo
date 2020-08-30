import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Close } from '@styled-icons/material/Close'

import { registerByEmail } from 'helpers/Firebase'

import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  ButtonWrapper,
} from '../styles'

import { Props, FormData } from './types'

const Register: React.FC<Props> = ({ onClose }) => {
  const history = useHistory()
  const { handleSubmit, register, setValue, errors } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    register('fullname', { required: 'Required' })
    register('email', { required: 'Required' })
    register('password', {
      required: 'Required',
      minLength: { value: 6, message: 'Minimum 6 character' },
      pattern: {
        value: /(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z|0-9|!-/|:-?@|[-`|{-~]+){6,}/g,
        message: 'Password must contain at least one letter and one number',
      },
    })
  }, [register])

  const onSubmit = async (data: FormData) => {
    setErrorMessage('')
    setIsSubmitting(true)
    const { fullname, email, password } = data

    try {
      await registerByEmail(email, password, fullname)
      onClose()
      history.push('/task')
    } catch (error) {
      setIsSubmitting(false)
      setErrorMessage(error.message)
    }
  }

  return (
    <StyledDialog open onClose={onClose} PaperProps={{ className: 'paper-dialog' }}>
      <StyledDialogTitle>
        Register
        <Close size={24} className="ic-close" onClick={onClose} />
      </StyledDialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledDialogContent>
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
          <TextField
            variant="outlined"
            label="Fullname"
            placeholder="Enter your name"
            onChange={(e) => setValue('fullname', e.target.value)}
            error={errors.fullname}
            helperText={errors.fullname?.message}
          />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setValue('email', e.target.value)}
            error={errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setValue('password', e.target.value)}
            error={errors.password}
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

export default Register
