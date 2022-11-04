const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_POST = "ADD-POST";
const LIKE_POST = "LIKE-POST";

let initialState = {
    posts: [
        {id: 1, message: 'Hi! It\'s my first post 🙌🏻', likeCount: 3},
        {id: 2, message: 'Welcome to my first social network', likeCount: 3},
        {id: 3, message: 'Wish me good luck in learning React technologies 😂', likeCount: 11},
        {id: 4, message: 'I almost forgot, subscribe: github.com/ayratkin 😁😁', likeCount: 14},
    ],
    
    postText: '',
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:

            let newPostObj = {
                id: 0,
                message: state.postText,
                likeCount: 0
            }
        
            state.posts.push(newPostObj);
            return state;

        case CHANGE_POST_TEXT:
            state.postText = action.newText;
            return state;

        case LIKE_POST:
            state.posts[action.postId - 1].likeCount += 1;
            return state;
        
        default:
            return state;
    }
}

export const changePostTextActionCreator = (text) => {
    return {
        type: CHANGE_POST_TEXT,
        newText: text,
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const likePostActionCreator = (postId) => {
    return {
        type: LIKE_POST,
        postId: postId,
    }
}


export default profileReducer;