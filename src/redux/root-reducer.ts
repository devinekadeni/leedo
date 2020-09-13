import { combineReducers } from 'redux'
import TaskDetail from './ducks/TaskDetail'

const rootReducer = combineReducers({
  TaskDetail,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
