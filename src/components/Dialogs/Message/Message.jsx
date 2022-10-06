// Libraries
import React from "react";

// Component styles
import style from "./Message.module.scss";

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