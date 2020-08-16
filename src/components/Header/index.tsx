import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from 'assets/leedo-logo.png'
import { StyledHeader, LeftNav, StyledButton, RightNav } from './styles'

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <LeftNav>
        <NavLink to="/">
          <img src={LOGO} alt="logo_icon" />
        </NavLink>
      </LeftNav>
      <RightNav>
        <NavLink to="/login">
          <StyledButton color="primary">Login</StyledButton>
        </NavLink>
        <NavLink to="/register">
          <StyledButton color="primary">Register</StyledButton>
        </NavLink>
      </RightNav>
    </StyledHeader>
  )
}

export default Header
