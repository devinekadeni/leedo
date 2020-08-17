import React, { lazy, Suspense, useContext } from 'react'
const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))

import DialogContext from 'context/DialogContext'

const Auth: React.FC = () => {
  const [dialogData, setDialogData] = useContext(DialogContext)
  const { isOpen, page } = dialogData.Auth

  const onClose = () => {
    setDialogData({ Auth: { isOpen: false, page } })
  }

  if (!isOpen) {
    return null
  }

  return (
    <Suspense fallback="Loading...">
      {page === 'login' && <Login onClose={onClose} />}
      {page === 'register' && <Register onClose={onClose} />}
    </Suspense>
  )
}

export default Auth
