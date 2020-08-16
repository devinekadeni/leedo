import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    max-width: 800px;
    text-align: center;
  }

  & > h3 {
    max-width: 600px;
    text-align: center;
  }
`
