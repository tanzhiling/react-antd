import {combineReducers} from 'redux-immutable'
import {loginReducer} from './login'
const RootReducer  = combineReducers({
    ...loginReducer
})
export default RootReducer