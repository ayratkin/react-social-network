import React from "react";

// Component styles
import style from "./Dialogs.module.scss";

// Other components
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage"

const Dialogs = (props) => {
    let dialogsItems = props.state.dialogs.map((dialog) => {
        return (<DialogItem id={dialog.id} name={dialog.name} />)
    })

    let messagesItems = props.state.messages.map((message) => {
        return (<Message messageText={message.message} />)
    })

    return (
        <>
            <div className={style.dialogs_page}>
                <div className={style.dialogs}>
                    <h3 className={style.dialogs_title}>
                        Dialogs:
                    </h3>
                    {dialogsItems}
                </div>
                <div className={style.messages}>
                    {messagesItems}
                    <AddMessage dispatch={props.dispatch}
                                messageText={props.state.messageText}/>
                </div>
            </div>
        </>
    )
}

export default Dialogs;