// Libraries
import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {changeMessageTextActionCreator, sendMessageActionCreator} from '../../../redux/dialogs-reducer'

// Component styles
import style from "./AddMessage.module.css"

const AddMessage = (props) => {

	// state
	const message = useSelector(state => {
		const message = state.dialogsPage.messageText
		return message
	})

	// dispatch
	const dispatch = useDispatch()

	const myRef = React.createRef();

	// Печать текста с сохранением в state
	function changeMessage() {
		let text = myRef.current.value;
		dispatch(changeMessageTextActionCreator(text));
	}

	// Отправка сообщения в state
	function sendMessage() {
		dispatch(sendMessageActionCreator())
	}

	// Создание нового поста по нажатию на Enter
	const pressEnter = (e) => {
		if (e.keyCode == 13) {
			sendMessage();
			// props.postText = '';
		}
	}

	return (<>
		<div className={style.new_message}>
                <textarea
	                ref={myRef}
	                placeholder="Write a post..."
	                value={message}
	                onChange={changeMessage}
	                onKeyDown={pressEnter}/>
			<button onClick={sendMessage}>Send message</button>
		</div>
	</>)
}

export default AddMessage;