const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        { id: 1,
          isFollow: true,
          fullName: 'Ivan M.',
          status: 'Better to die standing than to live on your knees 👆🏻👆🏻 ',
          country: "Russia" },
        { id: 2,
          isFollow: true,
          fullName: 'Svetlana D.',
          status: 'Quit... be jealous... suffer... fall in love... But never humiliate yourself!',
          country: "Belarus" },
        { id: 3,
          isFollow: false,
          fullName: 'Andrew l.',
          status: 'A girl should believe in you more than you do yourself.',
          country: "Ukraine" },
        { id: 4,
          isFollow: false,
          fullName: 'Marat K.',
          status: 'If you do - do not be afraid, if you are afraid - do not do it, but you did it - do not regret it.',
          country: "Kazakhstan" },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, isFollow: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, isFollow: false}
                    }
                    return user;
                })
            };

        default:
            return state;

    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollowAC = () => {
    return {
        type: UNFOLLOW,
    }
}

export default usersReducer;

