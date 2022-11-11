// Libraries
import React from "react"
import { connect } from "react-redux"

// Component styles
import style from "./AddPost.module.css"

// Action creators
import {changePostTextActionCreator} from "../../../redux/profile-reducer"
import {addPostActionCreator} from "../../../redux/profile-reducer"


const AddPost = (props) => {

    const myRef = React.createRef();

    // Создание нового поста
    function sendPost() {
        props.dispatch(addPostActionCreator());
        myRef.current.value = '';
    }

    // Печать текста поста
    function changeTextArea() {
        let text = myRef.current.value;
        props.dispatch(changePostTextActionCreator(text));
    }

    // Создание нового поста по нажатию на Enter
    const pressEnter = (e) => {
        if (e.keyCode == 13) {
            sendPost();
            // props.postText = '';
        }
    }

    return (
        <>
            <div className={style.new_post}>
                <textarea ref={myRef}
                          placeholder="Share the news..." 
                          value={props.postText} 
                          onChange={changeTextArea}
                          onKeyDown={pressEnter}/>

                <button onClick={ sendPost }>Send post</button>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(addPostActionCreator());
        },

        changeTextArea: (text) => {
            dispatch(changePostTextActionCreator(text))
        }

    }
}

export default connect(mapDispatchToProps)(AddPost);