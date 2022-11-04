// Libraries
import React from "react";

// Component styles
import style from "./Message.module.css";

const Message = (props) => {
    return (
        <>
            <div className={style.message}>
                <p>{props.messageText}</p>
            </div>
        </>
    )
}

export default Message;