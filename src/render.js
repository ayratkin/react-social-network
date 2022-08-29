import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage} from './redux/state';
import {addPost} from './redux/state';

let render = (state) => {
    ReactDOM.render(
        <App state={state} 
             addMessage={addMessage}
             addPost={addPost} />,
        document.getElementById('root')
    )
    
}

export default render;