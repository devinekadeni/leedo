import React from 'react'

import Member from './Member'
import Guest from './Guest'

interface Props {
  isLoggedIn: boolean
}

const Header: React.FC<Props> = ({ isLoggedIn }) => {
  return isLoggedIn ? <Member /> : <Guest />
}

export default Header
