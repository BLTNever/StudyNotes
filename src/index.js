import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import Routes from './routes'
import './index.less'
import DevTools from './client/devTools'
import configureStore from './client/store/configureStore'

const history = createHistory()

const store = configureStore()

/* eslint-disable */
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                {Routes}
                {/* {ENABLE_DEVTOOLS ? <DevTools /> : ''} */}
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
)
