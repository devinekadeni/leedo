import styled from 'styled-components'
import { BASIC_COLOR } from 'styles/_colors'

export const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`

export const TaskWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 24rem));
  grid-template-rows: minmax(140px, auto);
  gap: 30px;
`

export const NewTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 24rem;
  width: 100%;
  background-color: ${BASIC_COLOR.lightGray};
  color: #fff;
  font-weight: bold;
  border-radius: 6px;
  font-size: 1.6rem;
  opacity: 1;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  h5 {
    margin: 0;
  }
`
