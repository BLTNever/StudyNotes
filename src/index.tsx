import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = document.getElementById('root')

const render = (Comp: React.SFC) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Comp />
            </BrowserRouter>
        </Provider>, root
    );
}

render(App)

// 模块热替换的 API
declare const module: any;

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextEntry = require('./App').default
        render(NextEntry)
    })
}

serviceWorker.unregister();
