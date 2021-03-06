import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import "react-toastify/dist/ReactToastify.css";
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import store from './store'
import history from './history'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}> 
            <Route component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);


