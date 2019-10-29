import * as ActionTypes from '../constant'
const initialState = {
    open: false,
    arrival: []
}
const modal = (state=initialState, action) => {
    switch(action.type){
        case ActionTypes.OPEN_MODAL:
            return { ...state, open: action.open }
        case ActionTypes.CLOSE_MODAL:
            console.log(action.open)
             return { ...state, open: action.open }
        case ActionTypes.GET_INITIAL_FLIGHTS:
            return { ...state, arrival: action.arrival}
        default:
            return state
    }
}
export default modal;