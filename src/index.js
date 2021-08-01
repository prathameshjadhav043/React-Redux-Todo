import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux'
import { saveState } from './localStore'
import store from './localStore'


store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

