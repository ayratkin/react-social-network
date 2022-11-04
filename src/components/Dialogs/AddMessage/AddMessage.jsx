// Libraries
import React from "react";

// Component styles
import style from "./AddMessage.module.css"

const AddMessage = (props) => {
    console.log(props)
    const myRef = React.createRef();

    // Печать текста с сохранением в state
    function changeMessage() {
        let text = myRef.current.value;
        props.changeMessageText(text);
    }

    // Отправка сообщения в state
    function sendMessage() {
        props.sendMessage();
    }

    return (
        <>
            <div className={style.new_message}>
                <textarea 
                    ref={myRef} 
                    placeholder="Write a post..." 
                    value={props.messageTe}
                    onChange={ changeMessage }>
                </textarea>
                <button onClick={ sendMessage }>Send message</button>
            </div>
        </>
    )
} 

export default AddMessage;