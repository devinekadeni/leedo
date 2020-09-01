import React from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import { Wrapper, StatusDropdown } from './styles'

interface Props {
  title: string
  status: number
  onChange: (e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => void
}

const SubTaskItem: React.FC<Props> = ({ title, status, onChange }) => {
  return (
    <Wrapper>
      <span>{title}</span>
      <StatusDropdown
        defaultValue={status}
        onChange={onChange}
        inputProps={{
          className: 'subtask-item',
        }}
      >
        <MenuItem value={0}>To Do</MenuItem>
        <MenuItem value={1}>Done</MenuItem>
      </StatusDropdown>
    </Wrapper>
  )
}

export default SubTaskItem
