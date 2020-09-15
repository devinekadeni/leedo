interface Handlers {
  [key: string]: (state: State, action: Action) => State
}

interface Action {
  type: string
  payload: any
}

interface State {
  [key: string]: unknown
}

function createReducer(initialState: { [key: string]: any }, handlers: Handlers) {
  return function reducer(state = initialState, action: Action): any {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export { createReducer }
