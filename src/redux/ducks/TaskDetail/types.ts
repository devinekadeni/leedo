export interface TaskData {
  title: string
  subTasks: SubTaskData[]
  counter: number
  error?: any
}

export interface SubTaskData {
  id?: string
  title?: string
  status?: number
}

export interface Action {
  type: string
  payload?: any
}

export const Types = {
  FETCH_TASK_START: 'FETCH_TASK_START',
  FETCH_TASK_SUCCESS: 'FETCH_TASK_SUCCESS',
  FETCH_TASK_FAILED: 'FETCH_TASK_FAILED',
  FETCH_SUBTASK_START: 'FETCH_SUBTASK_START',
  FETCH_SUBTASK_SUCCESS: 'FETCH_SUBTASK_SUCCESS',
  FETCH_SUBTASK_FAILED: 'FETCH_SUBTASK_FAILED',
}
