import { combineReducers } from 'redux';
import modal from './reducers/modal';
import login from './reducers/auth';

const rootReducer = combineReducers({
    modal,
    login,

})

export default rootReducer;