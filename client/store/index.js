import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import frameworks from './frameworks'
import angularData from './angulardata'
import reactData from './reactdata'
import emberData from './emberdata'
import vueData from './vuedata'

const reducer = combineReducers({user, frameworks, angularData, reactData, emberData, vueData})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './vuedata'
export * from './emberdata'
export * from './reactdata'
export * from './angulardata'
export * from './user'
export * from './frameworks'
