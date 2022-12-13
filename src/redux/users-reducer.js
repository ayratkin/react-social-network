const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const ENABLE_PRELOADER = "ENABLE_PRELOADER";
const DISABLE_PRELOADER = "DISABLE_PRELOADER";

let initialState = {
	users: [],
	usersCount: 25,
	pageSize: 5,
	selectedPage: 1,
	isLoading: true,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, isFollow: true}
					}
					return user;
				})
			};

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, isFollow: false}
					}
					return user;
				})
			};


		case SET_USERS:
			return {
				...state,
				users: action.users,
			}

		case SET_PAGE:
			return {
				...state,
				selectedPage: action.selectedPage
			}

		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				usersCount: action.totalCount
			}

		case ENABLE_PRELOADER:
			return {
				...state,
				isLoading: true
			}

		case DISABLE_PRELOADER:
			return {
				...state,
				isLoading: false
			}

		default:
			return state;
	}
}

export const followAC = (userId) => {
	return {
		type: FOLLOW,
		userId: userId
	}
}

export const unFollowAC = (userId) => {
	return {
		type: UNFOLLOW,
		userId: userId
	}
}

export const setUsersAC = (users) => {
	return {
		type: SET_USERS,
		users: users
	}
}

export const setPageAC = (selectedPage) => {
	return {
		type: SET_PAGE,
		selectedPage: selectedPage,
	}
}

export const setUsersTotalCountAC = (totalCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		totalCount,
	}
}

export const enablePreloader = () => {
	return {
		type: ENABLE_PRELOADER,
	}
}

export const disablePreloader = () => {
	return {
		type: DISABLE_PRELOADER,
	}
}

export default usersReducer;