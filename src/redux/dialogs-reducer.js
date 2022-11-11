const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Kirill' },
        { id: 3, name: 'Alexandr' },
        { id: 4, name: 'Vova' },
    ],

    messages: [
        { id: 1, message: '- Hello, Tom!' },
        { id: 2, message: '- Hello, Martin, lovely day, isnt it?' },
        { id: 3, message: '- Absolutely wonderful - warm and clear. Whats the weather forecast for tomorrow? Do you know?' },
        { id: 4, message: '- Yes, it says it will be a bit cloudy in the morning. But the day will be bright and sunny.' },
        { id: 5, message: '- How nice. A perfect day for an outing. I promised my family a barbecue, you know.' },
        { id: 6, message: '- Great! I hope you’ll enjoy it.' },
    ],

    messageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.newText
            }
        case SEND_MESSAGE:
            let newMessageObj = {
                id: 0,
                message: state.messageText,
            }

            return {
                ...state, messages: [...state.messages, newMessageObj]
            }
        default:
            return state;
    }
}

export const changeMessageTextActionCreator = (text) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        newText: text,
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export default dialogsReducer;