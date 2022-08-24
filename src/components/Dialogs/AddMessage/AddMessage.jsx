import React from "react";
import style from "./AddMessage.module.css"

const AddMessage = (props) => {
    const myRef = React.createRef();

    // Отправка сообщения в state
    function sendMessage() {
        let text = myRef.current.value;
        props.addMessage(text)
    }

    return (
        <>
            <div className={style.new_message}>
                <textarea ref={myRef} placeholder="Write a message..."></textarea>
                <button onClick={ sendMessage }>Send message</button>
            </div>
        </>
    )
} 

export default AddMessage;