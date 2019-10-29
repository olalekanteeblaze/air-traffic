import * as ActionTypes from '../constant'
const initialState = {
    open: false,
    arrival: [],
    err: false,
    loading: true,
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
        case ActionTypes.HANDLE_ERROR:
            return{ ...state, err: action.err}
        case ActionTypes.STOP_LOADING:
            return { ...state, loading: action.loading}
        default:
            return state
    }
}
export default modal;