import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from 'assets/leedo-logo.png'
import DialogContext from 'context/DialogContext'
import { StyledHeader, LeftNav, StyledButton, RightNav } from './styles'

const Header: React.FC = () => {
  const [, setDialog] = useContext(DialogContext)

  return (
    <StyledHeader>
      <LeftNav>
        <NavLink to="/">
          <img src={LOGO} alt="logo_icon" />
        </NavLink>
      </LeftNav>
      <RightNav>
        <NavLink
          to="/login"
          onClick={() => {
            setDialog({ Auth: { isOpen: true, page: 'login' } })
          }}
        >
          <StyledButton color="primary">Login</StyledButton>
        </NavLink>
        <NavLink
          to="/register"
          onClick={() => {
            setDialog({ Auth: { isOpen: true, page: 'register' } })
          }}
        >
          <StyledButton color="primary">Register</StyledButton>
        </NavLink>
      </RightNav>
    </StyledHeader>
  )
}

export default Header
