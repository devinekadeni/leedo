import React from 'react'

import { Wrapper } from './styles'
import { Props } from './types'

const TaskCard: React.FC<Props> = ({ title, period, taskTotal, taskDone }) => {
  return (
    <Wrapper period={period}>
      <h5>{title}</h5>
      <span className="task-period">{period}</span>
      <span className="task-progress">
        {taskDone} of {taskTotal} done
      </span>
    </Wrapper>
  )
}

export default TaskCard
