import React from 'react'
import { Add } from '@styled-icons/material/Add'

import TaskCard from 'components/TaskCard'

import { Wrapper, TaskWrapper, NewTaskWrapper } from './styles'

// TODO: will be replaced with firebase data
const DUMMY_DATA = [
  {
    id: 1,
    period: 'daily',
    title:
      'test todo yg banyak banget semoga ini cukup banyak ya ternyata masih kurang banyak boi',
    taskDone: 2,
    taskTotal: 10,
  },
  {
    id: 2,
    period: 'monthly',
    title:
      'test todo yg banyak banget semoga ini cukup banyak ya ternyata masih kurang banyak boi',
    taskDone: 2,
    taskTotal: 10,
  },
  {
    id: 3,
    period: 'yearly',
    title:
      'test todo yg banyak banget semoga ini cukup banyak ya ternyata masih kurang banyak boi',
    taskDone: 2,
    taskTotal: 10,
  },
  {
    id: 4,
    period: 'yearly',
    title:
      'test todo yg banyak banget semoga ini cukup banyak ya ternyata masih kurang banyak boi',
    taskDone: 2,
    taskTotal: 10,
  },
  {
    id: 5,
    period: 'custom',
    title:
      'test todo yg banyak banget semoga ini cukup banyak ya ternyata masih kurang banyak boi',
    taskDone: 2,
    taskTotal: 10,
  },
  {
    id: 6,
    period: 'custom',
    title:
      'test todo yg banyak banget semoga ini cukup banyak ya ternyata masih kurang banyak boi',
    taskDone: 2,
    taskTotal: 10,
  },
]

const TaskList: React.FC = () => {
  return (
    <Wrapper>
      <h1>Task List</h1>
      <TaskWrapper>
        <NewTaskWrapper>
          <Add size={24} className="ic-add" />
          <h5>Create new task</h5>
        </NewTaskWrapper>
        {DUMMY_DATA.map((task) => {
          return (
            <TaskCard
              key={task.id}
              period={task.period}
              title={task.title}
              taskDone={task.taskDone}
              taskTotal={task.taskTotal}
            />
          )
        })}
      </TaskWrapper>
    </Wrapper>
  )
}

export default TaskList
