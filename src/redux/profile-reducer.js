const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_POST = "ADD-POST";
const LIKE_POST = "LIKE-POST";

let initialState = {
	posts: [
		{id: 1, message: "Hi! It's my first post 🙌🏻", likeCount: 0, isLiked: false},
		{id: 2, message: "Welcome to my first social network", likeCount: 0, isLiked: false},
		{id: 3, message: "Wish me good luck in learning React technologies 😂", likeCount: 1, isLiked: false},
		{id: 4, message: "I almost forgot, subscribe: github.com/ayratkin 😁😁", likeCount: 9, isLiked: false},
	],

	postText: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPostObj = {
				id: 0,
				message: state.postText,
				likeCount: 0,
			};

			return {
				...state,
				posts: [...state.posts, newPostObj]
			}

		}
		case CHANGE_POST_TEXT:
			return {
				...state,
				postText: action.newText,
			};

		case LIKE_POST:
			return {
				...state,
				posts: state.posts.map(post => {
					if (action.postId === post.id) {
						if (post.isLiked) {
							return {
								...post,
								likeCount: post.likeCount - 1,
								isLiked: false
							}
						} else {
							return {
								...post,
								likeCount: post.likeCount + 1,
								isLiked: true
							}
						}
					}
					return post
				})
			}

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
		postId: postId,
	};
};

export default profileReducer;
