import React from 'react';
import  { render } from 'react-dom';

// Import Components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Router

import {Router,Route,IndexRoute,browserHistory} from 'react-router'

import {Provider} from 'react-redux';
import store, {history} from './store';

// import CSS
import css from './styles/style.styl'

const router = (
    <Provider store ={store}>
        <Router history ={history} >
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>

            </Route>
        </Router>
    </Provider>
)

render(
    router, document.getElementById('root')
)