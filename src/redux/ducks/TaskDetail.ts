interface TaskData {
  title: string
}

interface TaskState {
  data: TaskData
}

interface Action {
  type: string
}

export const INITIAL_STATE: TaskState = {
  data: {
    title: '',
  },
}

const TaskDetailReducer = (state = INITIAL_STATE, action: Action): TaskState => {
  switch (action?.type) {
    default:
      return state
  }
}

export default TaskDetailReducer
