// Libraries
import React from "react";

// Component styles
import style from "./AddMessage.module.scss"

// Action creators
import {changeMessageTextActionCreator} from "../../../redux/state"
import {sendMessageActionCreator} from "../../../redux/state"


const AddMessage = (props) => {
    const myRef = React.createRef();


    // Печать текста с сохранением в state
    function changeMessage() {
        let text = myRef.current.value;
        props.dispatch(changeMessageTextActionCreator(text))
    }

    // Отправка сообщения в state
    function sendMessage() {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <>
            <div className={style.new_message}>
                <textarea 
                    ref={myRef} 
                    placeholder="Write a post..." 
                    value={props.messageTe}
                    onChange={changeMessage}>
                </textarea>
                <button onClick={ sendMessage }>Send message</button>
            </div>
        </>
    )
} 

export default AddMessage;