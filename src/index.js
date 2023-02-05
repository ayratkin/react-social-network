// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// App components 
import App from './App';
// import store from './redux/store';
import store from './redux/redux-store';


let rerenderEntireTree = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store.getState());
