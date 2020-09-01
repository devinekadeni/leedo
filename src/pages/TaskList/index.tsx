import React, { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Add } from '@styled-icons/material/Add'

import AuthContext from 'context/AuthContext'
import { getDataByCollection, Operator } from 'helpers/Firebase'
import DB from 'constants/db'

import TaskCard from 'components/TaskCard'

import { Wrapper, TaskWrapper, NewTaskWrapper } from './styles'

interface Tasks {
  id?: string
  period?: string
  title?: string
  taskDone?: number
  taskTotal?: number
}

const TaskList: React.FC = () => {
  const history = useHistory()
  const [authData] = useContext(AuthContext)
  const [tasks, setTasks] = useState<Tasks[]>([])

  useEffect(() => {
    async function fetchTaskList() {
      const res = await getDataByCollection(DB.TASK, {
        field: 'userId',
        operator: Operator['=='],
        value: authData.id,
      })
      setTasks(res)
    }

    if (authData.id) {
      try {
        fetchTaskList()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching task list', error)
      }
    }
  }, [authData])

  const createTask = () => history.push('/add-task')
  const onCardClick = (id: string) => history.push(`/task/${id}`)

  return (
    <Wrapper>
      <h1>Task List</h1>
      <TaskWrapper>
        <NewTaskWrapper onClick={createTask}>
          <Add size={24} className="ic-add" />
          <h5>Create new task</h5>
        </NewTaskWrapper>
        {tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <TaskCard
                key={task.id}
                period={task.period || ''}
                title={task.title || ''}
                taskDone={task.taskDone || 0}
                taskTotal={task.taskTotal || 0}
                onClick={() => onCardClick(task.id || '')}
              />
            )
          })}
      </TaskWrapper>
    </Wrapper>
  )
}

export default TaskList
