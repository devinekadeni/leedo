import React from 'react'

import { Wrapper } from './styles'
import { Props } from './types'

const TaskCard: React.FC<Props> = ({ title, period, taskTotal, taskDone, onClick }) => {
  return (
    <Wrapper period={period} onClick={onClick}>
      <h5>{title}</h5>
      <div className="task-status-wrapper">
        <span className="task-period">{period}</span>
        <span className="task-progress">
          {taskDone} of {taskTotal} done
        </span>
      </div>
    </Wrapper>
  )
}

export default TaskCard
