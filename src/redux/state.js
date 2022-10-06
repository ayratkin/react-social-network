import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const change_post_text = "CHANGE-POST-TEXT";
const add_post = "ADD-POST";
const change_message_text = "CHANGE-MESSAGE-TEXT";
const send_message = 'SEND-MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! It\'s my first post 🙌🏻', likeCount: 3},
                {id: 2, message: 'Welcome to my first social network', likeCount: 3},
                {id: 3, message: 'Wish me good luck in learning React technologies 😂', likeCount: 11},
                {id: 4, message: 'I almost forgot, subscribe: github.com/ayratkin 😁😁', likeCount: 14},
            ],
            
            postText: '',
        },
    
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);



    }
}

export const changePostTextActionCreator = (text) => {
    return {
        type: change_post_text,
        newText: text,
    }
}

export const addPostActionCreator = () => {
    return {
        type: add_post,
    }
}

export const changeMessageTextActionCreator = (text) => {
    return {
        type: change_message_text,
        newText: text,
    }
}

export const sendMessageActionCreator = () => {
    console.log('log1');
    return {
        type: send_message,
    }

}


export default store;