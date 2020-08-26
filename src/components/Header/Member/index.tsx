import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import AuthContext from 'context/AuthContext'
import { auth } from 'helpers/Firebase'

import LOGO from 'assets/leedo-logo.png'
import { StyledHeader, LeftNav, StyledButton, RightNav } from '../styles'

const Header: React.FC = () => {
  const [, setAuthData] = useContext(AuthContext)

  const onLogout = async () => {
    await auth.signOut()
    setAuthData({ displayName: '', email: '', id: '', isLoggedIn: false })
  }

  return (
    <StyledHeader>
      <LeftNav>
        <NavLink to="/">
          <img src={LOGO} alt="logo_icon" />
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
