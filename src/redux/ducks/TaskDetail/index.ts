import { createReducer } from '../../utils'
import { TaskData, SubTaskData, Types } from './types'

export const INITIAL_STATE: TaskData = {
  title: '',
  subTasks: [],
  counter: 0,
}

const TaskDetailReducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_TASK_START]: (state) => ({
    ...state,
  }),
  [Types.FETCH_TASK_SUCCESS]: (state, action) => ({
    ...state,
    title: action.payload.title,
  }),
  [Types.FETCH_TASK_FAILED]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [Types.FETCH_SUBTASK_START]: (state) => ({
    ...state,
  }),
  [Types.FETCH_SUBTASK_SUCCESS]: (state, action) => ({
    ...state,
    subTasks: action.payload,
  }),
  [Types.FETCH_SUBTASK_FAILED]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
})

type actionType = {
  payload: any
  type: string
}

export const fetchTaskStart = (id: string): actionType => ({
  type: Types.FETCH_TASK_START,
  payload: { id },
})

export const fetchTaskSuccess = (data: { title: string }): actionType => ({
  type: Types.FETCH_TASK_SUCCESS,
  payload: data,
})

export const fetchTaskFailed = (errorData: unknown): actionType => ({
  type: Types.FETCH_TASK_FAILED,
  payload: errorData,
})

export const fetchSubTaskStart = (id: string): actionType => ({
  type: Types.FETCH_SUBTASK_START,
  payload: { id },
})

export const fetchSubTaskSuccess = (data: SubTaskData[]): actionType => ({
  type: Types.FETCH_SUBTASK_SUCCESS,
  payload: data,
})

export const fetchSubTaskFailed = (errorData: unknown): actionType => ({
  type: Types.FETCH_SUBTASK_FAILED,
  payload: errorData,
})

export default TaskDetailReducer
