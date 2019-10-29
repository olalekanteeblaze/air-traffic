import { combineReducers } from 'redux';
import modal from './reducers/modal';
// import department from './modules/reducers/departments';
// import product from './modules/reducers/products';
// import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    modal,
    // category,
    // department,
    // product,
})

export default rootReducer;