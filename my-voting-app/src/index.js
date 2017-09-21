import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore} from 'redux';

import App from './App';

import myApp from './reducers';

import Results from './components/Results'

let store = createStore(myApp,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function render(){
    ReactDOM.render(
        <div className="container">
            <App store={store} />
            <Results store={store} />
        </div>
    , document.getElementById('root'));
}
store.subscribe(render);

render();