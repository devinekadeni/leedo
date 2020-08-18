import React, { createContext, useState } from 'react'

interface AuthType {
  isOpen: boolean
  page: string
}

interface DialogType {
  Auth: AuthType
}

type ContextState = [DialogType, (state: DialogType) => void]

const initialState = {
  Auth: {
    isOpen: false,
    page: 'login',
  },
}

const DialogContext = createContext<ContextState>([initialState, () => null])

const DialogCtxProvider: React.FC = ({ children }) => {
  const [dialogData, setDialogData] = useState(initialState)

  return (
    <DialogContext.Provider value={[dialogData, setDialogData]}>
      {children}
    </DialogContext.Provider>
  )
}

export { DialogCtxProvider, DialogContext }
export default DialogContext
