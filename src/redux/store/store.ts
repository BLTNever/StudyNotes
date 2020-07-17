import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '@redux/rootReducer'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

const middlewares = [
    thunkMiddleware,
    promiseMiddleware
];

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(...middlewares)
    ));


export default store
