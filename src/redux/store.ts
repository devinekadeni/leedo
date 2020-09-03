import { createStore, compose } from 'redux'

import rootReducer from './root-reducer'

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnchancers = process.env.NODE_ENV !== 'production' ? devCompose : compose

const store = createStore(rootReducer, composeEnchancers())

export default store
