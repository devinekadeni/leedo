import styled from 'styled-components'
import { BASIC_COLOR } from 'styles/_colors'
import { StyledWrapper, BgColor } from './types'

const bgColor: BgColor = {
  daily: BASIC_COLOR.mainPurple,
  monthly: BASIC_COLOR.pink,
  yearly: BASIC_COLOR.lightBlue,
  custom: BASIC_COLOR.green,
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  max-width: 24rem;
  width: 100%;
  background-color: ${(props: StyledWrapper) => bgColor[props.period]};
  color: #fff;
  font-weight: bold;
  border-radius: 6px;
  opacity: 1;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  h5 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 0 20px;
    font-size: 1.6rem;
  }

  .task-period {
    align-self: flex-end;
    text-transform: capitalize;
  }

  .task-progress {
    align-self: flex-end;
  }
`
