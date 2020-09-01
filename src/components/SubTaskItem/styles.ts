import styled from 'styled-components'

import Select from '@material-ui/core/Select'
import { BASIC_COLOR } from 'styles/_colors'

export const Wrapper = styled.div`
  border: 1px solid ${BASIC_COLOR.lightGray};
  border-radius: 6px;
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;
`

export const StatusDropdown = styled(Select)`
  && {
    background-color: ${BASIC_COLOR.lightBlue};
    position: absolute;
    right: 16px;
    min-width: 80px;
    display: flex;
    align-items: center;
    border-radius: 6px;

    .subtask-item {
      color: #fff;
      padding: 8px 16px;
    }

    svg {
      color: #fff;
      top: unset;
      right: 4px;
    }

    &::after,
    &::before {
      display: none;
    }
  }
`
