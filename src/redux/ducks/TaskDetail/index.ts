import { TaskData, SubTaskData, Action, Types } from './types'

export const INITIAL_STATE: TaskData = {
  title: '',
  subTasks: [],
  counter: 0,
}

const TaskDetailReducer = (state = INITIAL_STATE, action: Action): TaskData => {
  switch (action?.type) {
    case Types.FETCH_TASK_START:
      return { ...state }
    case Types.FETCH_TASK_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
      }
    case Types.FETCH_TASK_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    case Types.FETCH_SUBTASK_START:
      return { ...state }
    case Types.FETCH_SUBTASK_SUCCESS:
      return {
        ...state,
        subTasks: action.payload,
      }
    case Types.FETCH_SUBTASK_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

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
