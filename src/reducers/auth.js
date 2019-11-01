import * as ActionTypes from '../constant';

const initialState = {
    auth: false,
    name: 'demo',
    password: 'demo'
}
const login = (state=initialState, action) => {
    switch(action.type){
        case ActionTypes.AUTH_USER:
            return { ...state, auth: action.auth}
        case ActionTypes.CHANGE_NAME:
            return { ...state, name: action.name }
        case ActionTypes.CHANGE_PASSWORD:
            return { ...state, password: action.password }
        default:
            return state
    }
}

export default login;