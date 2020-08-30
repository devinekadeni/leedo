import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { auth } from 'helpers/Firebase'

import LOGO from 'assets/leedo-logo.png'
import { StyledHeader, LeftNav, StyledButton, RightNav } from '../styles'

const Header: React.FC = () => {
  const history = useHistory()

  const onLogout = async () => {
    await auth.signOut()
    history.push('/')
  }

  return (
    <StyledHeader>
      <LeftNav>
        <NavLink to="/">
          <img src={LOGO} alt="logo_icon" />
        </NavLink>
        <NavLink to="/list">
          <StyledButton color="primary">List</StyledButton>
        </NavLink>
      </LeftNav>
      <RightNav>
        <StyledButton color="primary" onClick={onLogout}>
          Logout
        </StyledButton>
      </RightNav>
    </StyledHeader>
  )
}

export default Header
