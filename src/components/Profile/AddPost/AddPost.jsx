import React from "react"
import style from "./AddPost.module.css"

const AddPost = (props) => {

    const myRef = React.createRef();

    // Отправка сообщения в state
    function sendPost() {
        let text = myRef.current.value;
        props.addPost(text)
    }

    return (
        <>
            <div className={style.new_post}>
                <textarea ref={myRef} placeholder="Share the news..."></textarea>
                <button onClick={ sendPost }>Send post</button>
            </div>
        </>
    )
}

export default AddPost;