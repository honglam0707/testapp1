import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import Myreducer from './reducers/reducer'
const middleware = [thunk];
const initialState = {};
const store = createStore(
    Myreducer,
	initialState,
	compose(
        applyMiddleware (...middleware),
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
		  ? a => a
		  : window.__REDUX_DEVTOOLS_EXTENSION__ &&
			  window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>
				, document.getElementById('root')
			);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
