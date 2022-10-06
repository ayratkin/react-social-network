// Libraries
import React from "react"

// Component styles
import style from "./AddPost.module.scss"

// Action creators
import {changePostTextActionCreator} from "../../../redux/state"
import {addPostActionCreator} from "../../../redux/state"


const AddPost = (props) => {
    const myRef = React.createRef();

    // Отправка сообщения в state
    // Привязан к событию onClick у компомента
    function sendPost() {
        props.dispatch(addPostActionCreator());
        myRef.current.value = '';
    }

    // Изменение значения postText в state при наборе текста 
    // Привязан к событию onChange у компомента
    function changeTextArea() {
        let text = myRef.current.value;
        props.dispatch(changePostTextActionCreator(text));
    }

    return (
        <>
            <div className={style.new_post}>
                <textarea ref={myRef}
                          placeholder="Share the news..." 
                          value={props.postText} 
                          onChange={changeTextArea}/>

                <button onClick={ sendPost }>Send post</button>
            </div>
        </>
    )
}

export default AddPost;