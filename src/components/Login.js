import React from 'react'
import { Button, Input } from '../UI/Form'
import { css, jsx } from '@emotion/core'
/** @jsx jsx */

const Login = () => {
  return (
    <div
      css={css`
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
      `}
    >
      <form>
        <Input type="text" />
        <Input type="password" />
        <Button href="#">Iniciar sesion</Button>
      </form>
    </div>
  )
}

export default Login
