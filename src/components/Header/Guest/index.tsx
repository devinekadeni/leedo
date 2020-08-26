import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from 'assets/leedo-logo.png'
import DialogContext from 'context/DialogContext'
import { StyledHeader, LeftNav, StyledButton, RightNav } from '../styles'

const Header: React.FC = () => {
  const [, setDialog] = useContext(DialogContext)

  const onOpenDialog = (type: string) => () => {
    setDialog({ Auth: { isOpen: true, page: type } })
  }

  return (
    <StyledHeader>
      <LeftNav>
        <NavLink to="/">
          <img src={LOGO} alt="logo_icon" />
        </NavLink>
      </LeftNav>
      <RightNav>
        <StyledButton color="primary" onClick={onOpenDialog('login')}>
          Login
        </StyledButton>
        <StyledButton color="primary" onClick={onOpenDialog('register')}>
          Register
        </StyledButton>
      </RightNav>
    </StyledHeader>
  )
}

export default Header
