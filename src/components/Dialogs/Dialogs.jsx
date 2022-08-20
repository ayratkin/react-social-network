import React from "react";
import { Link } from 'react-router-dom';

// Component styles
import style from "./Dialogs.module.css"

// Имя человека, с которым ведется диалог
const DialogsItem = (props) => {
    let path = `/dialog/${props.id}`

    return (
        <div className={style.dialog}>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}

// Сообщение
const Message = (props) => {
    return (
        <>
            <div className={style.message}>
                <p>{props.messageText}</p>
            </div>
        </>
    )
}

let dialogsData = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Kirill' },
    { id: 3, name: 'Alexandr' },
    { id: 4, name: 'Vova' },
]

let dialogsItems = dialogsData.map((dialog) => {
    return (<DialogsItem id={dialog.id} name={dialog.name} />)
})

const Dialogs = (props) => {

    let messagesItems = props.messagesData.map((message) => {
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