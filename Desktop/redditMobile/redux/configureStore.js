import { compose, createStore, applyMiddleware } from 'redux'
// persistence
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
// middlewares
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
// reducers
import rootReducer from './reducer/index'

const config = { key: 'root', storage, debug: true }

const middleware = [thunk]
middleware.push(createLogger())

const reducers = persistCombineReducers(config, rootReducer)
const enhancers = [ applyMiddleware(...middleware) ]
const persistConfig = { enhancers }
const store = createStore(reducers, undefined, compose(...enhancers))
const persistor = persistStore(store, persistConfig, () => {})
const configureStore = () => ({ persistor, store })


export default configureStore
