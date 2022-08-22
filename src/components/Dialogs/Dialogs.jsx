import React from "react";
// Component styles
import style from "./Dialogs.module.css";
// Other components
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

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
                </div>
            </div>
        </>
    )
}

export default Dialogs;