import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const middlwareEnhancer = applyMiddleware()
const composedEnhancer = composeWithDevTools(middlwareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store