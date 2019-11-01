import * as ActionTypes from '../constant'
const initialState = {
    open: false,
    arrival: [],
    err: false,
    loading: true,
    begin: 3600 * 30,
    city: 'CYXU',
}
const modal = (state=initialState, action) => {
    switch(action.type){
        case ActionTypes.OPEN_MODAL:
            return { ...state, open: action.open }
        case ActionTypes.CLOSE_MODAL:
             return { ...state, open: action.open }
        case ActionTypes.GET_INITIAL_FLIGHTS:
            return { ...state, arrival: action.arrival}
        case ActionTypes.HANDLE_ERROR:
            return{ ...state, err: action.err}
        case ActionTypes.STOP_LOADING:
            return { ...state, loading: action.loading}
        case ActionTypes.START_LOADING:
            return { ...state, loading: action.loading, err: action.err, arrival: action.arrival}
        case ActionTypes.CHANGE_TIME:
            return { ...state, begin: action.begin}
        case ActionTypes.CHANGE_CITY:
            return { ...state, city: action.city}
        default:
            return state
    }
}
export default modal;