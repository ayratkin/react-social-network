const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_POST = "ADD-POST";
const LIKE_POST = "LIKE-POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi! It's my first post 🙌🏻" },
    { id: 2, message: "Welcome to my first social network" },
    { id: 3, message: "Wish me good luck in learning React technologies 😂" },
    { id: 4, message: "I almost forgot, subscribe: github.com/ayratkin 😁😁" },
  ],

  postText: "",
  likeCount: 0,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostObj = {
        id: 0,
        message: state.postText,
        likeCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPostObj);
      return stateCopy;
    }
    case CHANGE_POST_TEXT:
      return {
        ...state,
        postText: action.newText,
      };

    case LIKE_POST:
      return {
        ...state,
        likeCount: state.likeCount + 1,
      };

    default:
      return state;
  }
};

export const changePostTextActionCreator = (text) => {
  return {
    type: CHANGE_POST_TEXT,
    newText: text,
  };
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const likePostActionCreator = (postId) => {
  return {
    type: LIKE_POST,
  };
};

export default profileReducer;
