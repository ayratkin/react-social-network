const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {

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
        
        default:
            return state;
    }

}

export default profileReducer;