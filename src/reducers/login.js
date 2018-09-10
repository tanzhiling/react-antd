
//state
const initState = {
    info: {
        username: 'tzl',
        password: 123456
    }
}
//action
export const loginAction = {
    login(params) {
        return {
            type: 'LOGIN', params
        }
    }
}
//reducer
export const loginReducer = {
    login(state = initState, action) {
        return {
            ...state,
            info: action.params
        }
    },
}