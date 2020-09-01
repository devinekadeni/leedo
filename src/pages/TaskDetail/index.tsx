/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  getDataByCollection,
  Operator,
  getDataById,
  addDataByCollection,
  updateDataById,
} from 'helpers/Firebase'
import DB from 'constants/db'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SubTaskItem from 'components/SubTaskItem'
import { Wrapper, StyledForm, SubTaskWrapper } from './styles'

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
  const [taskData, setTaskData] = useState<TaskData | undefined>(undefined)
  const [subTaskData, setSubTaskData] = useState<SubTaskData[]>([])
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    async function fetchTaskData() {
      try {
        const resTask = await getDataById(DB.TASK, id)
        const resSubTask = await getDataByCollection(DB.SUB_TASK, {
          field: 'taskId',
          operator: Operator['=='],
          value: id,
        })

        setTaskData(resTask)
        setSubTaskData(resSubTask)
      } catch (error) {
        console.error('ERROR Fetching task detail data', error)
      }
    }

    fetchTaskData()
  }, [id])

  const addNewSubTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const payload = { status: 0, title: target.newSubTask.value, taskId: id }

    const res = await addDataByCollection(DB.SUB_TASK, payload)
    setSubTaskData((data) => [...data, { ...payload, id: res.id }])
    setIsAdding(false)
  }

  const updateSubTask = (subTaskId: string, status: number) => {
    try {
      updateDataById(DB.SUB_TASK, subTaskId, { status })
    } catch (error) {
      console.error('ERROR Updating subtask', error)
    }
  }

  return (
    <Wrapper>
      <h1>{taskData?.title || ''}</h1>
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
          subTaskData.map((task) => {
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
