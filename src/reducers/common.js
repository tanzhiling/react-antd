
//state
const initState = {
    loading:false
}
//action
export const commonAction = {
    updateLoading(params) {
        
        return {
            type: 'LOADING', params
        }
    }
}
//reducer
export const commonReducer = {
    loading(state = initState, action) {
        console.log(action)
        return {
            ...state,
            loading: action.params||state.loading
        }
    },
}