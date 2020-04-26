const defaultState = {
    userLoggedIn: false,
    userName: 'semih',
    userAge: 18
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN': 
            return {
                ...state,
                userName: action.payload.userName
            }
        default:
            return state;
    }
}

export default loginReducer