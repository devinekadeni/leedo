import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    row-gap: 16px;
  }
`
