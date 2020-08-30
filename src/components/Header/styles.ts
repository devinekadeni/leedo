import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

export const LeftNav = styled.nav`
  flex: 1;
  display: grid;
  justify-content: flex-start;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(50px, auto));
  column-gap: 8px;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const StyledButton = styled(Button)`
  && {
    text-transform: none;
    font-weight: bold;
    font-size: 1.8rem;
  }
`

export const RightNav = styled.nav`
  flex: 1;
  display: grid;
  justify-content: flex-end;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(50px, auto));
  column-gap: 8px;

  a {
    text-decoration: none;
  }
`
