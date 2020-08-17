import React from 'react'
import Button from '@material-ui/core/Button'

import { Wrapper } from './styles'

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <h1>
        &quot;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur&quot;
      </h1>
      <h3>
        &quot;There is no one who loves pain itself, who seeks after it and wants to have
        it, simply because it is pain...&quot;
      </h3>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Wrapper>
  )
}

export default HomePage
