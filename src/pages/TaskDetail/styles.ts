import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`

export const SubTaskWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;
`
