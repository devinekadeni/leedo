import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnchancers = process.env.NODE_ENV !== 'production' ? devCompose : compose

const store = createStore(rootReducer, composeEnchancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store
