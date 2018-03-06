import {combineReducers} from 'redux';
import userReducer from './user_reducer';

const allReducer = combineReducers({
    users:userReducer
})

export default allReducer;