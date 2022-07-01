import { combineReducers } from 'redux'
import getSingleUserDetailReducer from './singleUserDetails/reducer';
import getAllUserDetailReducer from './allUserDetails/reducer';

const rootReducer = combineReducers({
    getSingleUserDetail : getSingleUserDetailReducer,
    getAllUserDetail : getAllUserDetailReducer
})


export default rootReducer