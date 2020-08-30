import React, { useRef, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { addDataByCollection } from 'helpers/Firebase'
import DB from 'constants/db'
import AuthContext from 'context/AuthContext'

import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import { Wrapper } from './styles'

interface FormData {
  title: string
  recurringTime: string
}

const AddTask: React.FC = () => {
  const history = useHistory()
  const [authData] = useContext(AuthContext)
  const { handleSubmit, register, setValue, errors } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [labelWidth, setLabelWidth] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const inputLabel = useRef<HTMLLabelElement>(null)

  React.useEffect(() => {
    setLabelWidth(inputLabel?.current?.offsetWidth || 0)

    register('title', {
      required: 'Required',
      minLength: { value: 10, message: 'Minimum 10 character' },
    })
    register('recurringTime', { required: 'Required' })
  }, [register])

  const onSubmit = async (data: FormData) => {
    const { recurringTime, title } = data

    setErrorMessage('')
    setIsSubmitting(true)
    try {
      const payload = {
        period: recurringTime,
        taskDone: 0,
        taskTotal: 0,
        title,
        userId: authData.id,
      }
      await addDataByCollection(DB.TASK, payload)
      history.push('/task')
    } catch (error) {
      setErrorMessage(error)
      setIsSubmitting(false)
    }
  }

  return (
    <Wrapper>
      <h1>Create New Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
        <TextField
          variant="outlined"
          label="Task Title"
          type="title"
          placeholder="Task title"
          onChange={(e) => setValue('title', e.target.value)}
          error={'title' in errors}
          helperText={errors.title?.message}
        />
        <FormControl variant="outlined" error={'recurringTime' in errors}>
          <InputLabel ref={inputLabel} id="recurring-time">
            Recurring Time
          </InputLabel>
          <Select
            labelId="recurring-time"
            labelWidth={labelWidth}
            onChange={(e) => setValue('recurringTime', e.target.value)}
            defaultValue=""
          >
            <MenuItem value="daily">Repeat daily</MenuItem>
            <MenuItem value="monthly">Repeat monthly</MenuItem>
            <MenuItem value="yearly">Repeat yearly</MenuItem>
            <MenuItem value="custom">Custom</MenuItem>
          </Select>
          <FormHelperText>{errors.recurringTime?.message}</FormHelperText>
        </FormControl>
        <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Wrapper>
  )
}

export default AddTask
