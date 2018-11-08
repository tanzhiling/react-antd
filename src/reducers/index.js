import {combineReducers} from 'redux-immutable'
import {loginReducer} from './login'
import {commonReducer} from './common'
const RootReducer  = combineReducers({
    ...loginReducer,
    ...commonReducer
})
export default RootReducer