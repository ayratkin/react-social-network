const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    if (action.type === CHANGE_MESSAGE_TEXT) {
        console.log('change message text reducer work');
        
        state.messageText = action.newText;
    } else if (action.type === SEND_MESSAGE) {
        let newMessageObj = {
            id: 0,
            message: state.messageText,
        }

        state.messages.push(newMessageObj)
    }

    return state;
}

export default dialogsReducer;