import React from "react";
import { Link } from 'react-router-dom';
// Component styles
import style from "./DialogItem.module.css"

const DialogItem = (props) => {
    let path = `/dialog/${props.id}`

    return (
        <div className={style.dialog}>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}

export default DialogItem;