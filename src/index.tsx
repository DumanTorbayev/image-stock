import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './style/index.scss'
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename='/'>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
