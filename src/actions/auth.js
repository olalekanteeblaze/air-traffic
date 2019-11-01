import * as ActionTypes from '../constant';

export const changeName = (name) => {
    return {
        type: ActionTypes.CHANGE_NAME,
        name,
    }
}
export const changePassword = (password) => {
    return {
        type: ActionTypes.CHANGE_PASSWORD,
        password,
    }
}

export const signInUser = (username, password) => {
    let auth = false
    if(username === 'demo' && password === 'demo'){
        auth = true
    }
    console.log(username, password)
    return {
        type: ActionTypes.AUTH_USER,
        auth
    }
}