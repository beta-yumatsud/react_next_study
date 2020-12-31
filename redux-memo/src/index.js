import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import MemoStore, { memoReducer } from './memo/Store'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";

// Redux Persist
const persistConfig = {
    key: 'memo',
    storage: storage,
    blacklist: ['message', 'mode', 'fdata'],
    whitelist: ['data']
}

const persistedReducer = persistReducer(persistConfig, memoReducer)

let store = createStore(persistedReducer)
let pstore = persistStore(store)

ReactDOM.render(
    <Provider store={MemoStore}>
        <PersistGate loading={<p>loading...</p>} persistor={pstore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default pstore;
