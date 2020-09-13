import { takeLatest, put, call, all } from 'redux-saga/effects'
import { Types } from '../ducks/TaskDetail/types'
import {
  fetchTaskSuccess,
  fetchTaskFailed,
  fetchSubTaskSuccess,
  fetchSubTaskFailed,
} from '../ducks/TaskDetail'
import { getDataByCollection, Operator, getDataById } from 'helpers/Firebase'
import DB from 'constants/db'

type action = {
  payload: any
  type: string
}

function* fetchTask(action: action) {
  const { id } = action.payload

  try {
    const resTask: any = yield call(getDataById, DB.TASK, id)
    yield put(fetchTaskSuccess({ title: resTask.title }))
  } catch (error) {
    yield put(fetchTaskFailed(error))
  }
}

function* fetchSubTask(action: action) {
  const { id } = action.payload

  try {
    const resSubTask = yield call(getDataByCollection, DB.SUB_TASK, {
      field: 'taskId',
      operator: Operator['=='],
      value: id,
    })
    yield put(fetchSubTaskSuccess(resSubTask))
  } catch (error) {
    yield put(fetchSubTaskFailed(error))
  }
}

function* watchFetchTask() {
  yield takeLatest(Types.FETCH_TASK_START, fetchTask)
}

function* watchFetchSubTask() {
  yield takeLatest(Types.FETCH_SUBTASK_START, fetchSubTask)
}

export default function* TaskDetailSagas(): Generator {
  yield all([call(watchFetchTask), call(watchFetchSubTask)])
}
