import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ConfigStore from './reducers/Store';
import {Provider} from 'react-redux';

const store=ConfigStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
