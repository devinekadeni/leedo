/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTaskStart, fetchSubTaskStart } from 'reduxpath/ducks/TaskDetail'
import { addDataByCollection, updateDataById } from 'helpers/Firebase'
import DB from 'constants/db'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SubTaskItem from 'components/SubTaskItem'
import { Wrapper, StyledForm, SubTaskWrapper } from './styles'
import { RootState } from 'reduxpath/root-reducer'

interface Params {
  id: string
}

interface TaskData {
  title?: string
}

interface SubTaskData {
  id?: string
  title?: string
  status?: number
}

const TaskDetail: React.FC = () => {
  const { id }: Params = useParams()
  const [isAdding, setIsAdding] = useState(false)
  const dispatch = useDispatch()
  const taskTitle = useSelector((state: RootState) => state.TaskDetail.title)
  const subTaskData = useSelector((state: RootState) => state.TaskDetail.subTasks)

  useEffect(() => {
    dispatch(fetchTaskStart(id))
    dispatch(fetchSubTaskStart(id))
  }, [id, dispatch])

  const addNewSubTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const payload = { status: 0, title: target.newSubTask.value, taskId: id }

    await addDataByCollection(DB.SUB_TASK, payload)
    dispatch(fetchSubTaskStart(id)) // TODO: should modify the redux from response above
    setIsAdding(false)
  }

  const updateSubTask = (subTaskId: string, status: number) => {
    try {
      updateDataById(DB.SUB_TASK, subTaskId, { status })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('ERROR Updating subtask', error)
    }
  }

  return (
    <Wrapper>
      <h1>{taskTitle}</h1>
      <h5>Task List</h5>
      <SubTaskWrapper>
        <Button
          color="primary"
          fullWidth
          style={{ justifyContent: 'left', textTransform: 'capitalize' }}
          onClick={() => {
            setIsAdding(true)
          }}
        >
          + Add new Task...
        </Button>
        {isAdding && (
          <StyledForm onSubmit={addNewSubTask}>
            <TextField name="newSubTask" variant="outlined" fullWidth autoFocus />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ position: 'absolute', right: '16px' }}
            >
              Add
            </Button>
          </StyledForm>
        )}
        {subTaskData.length > 0 &&
          subTaskData.map((task: SubTaskData) => {
            return (
              <SubTaskItem
                key={task.id}
                title={task.title || ''}
                status={task.status || 0}
                onChange={(e) => {
                  updateSubTask(task.id || '', Number(e.target.value))
                }}
              />
            )
          })}
      </SubTaskWrapper>
    </Wrapper>
  )
}

export default TaskDetail
