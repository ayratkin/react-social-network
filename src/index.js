// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// App components 
import App from './App';
// import store from './redux/store';
import store from './redux/redux-store';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Provider store={store}>
            <App state={state}
                dispatch={store.dispatch.bind(store)}/>
        </Provider>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});