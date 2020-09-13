/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, call } from 'redux-saga/effects'
import TaskDetailSagas from './sagas/TaskDetailSaga'

export default function* rootSaga() {
  yield all([call(TaskDetailSagas)])
}
