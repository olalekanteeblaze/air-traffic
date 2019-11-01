import * as ActionTypes from '../constant';
import Axios from 'axios';

const end = Math.round((new Date()).getTime() / 1000);
// const begin = end - (60 * 10* 600)
// console.log(begin, end)
export const openModal = () => {
    return {
        type: ActionTypes.OPEN_MODAL,
        open: true 
    }
}
export const closeModal = () => {
    console.log("clicked")
    return {
        type: ActionTypes.CLOSE_MODAL,
        open: false,
        display: 'none',
    }
}
const initialFlights = (flights) => {
    return {
        type: ActionTypes.GET_INITIAL_FLIGHTS,
        arrival: flights,
        loading: true,
        err: false
    }
}
export const stopLoading = () => {
    return {
        type: ActionTypes.STOP_LOADING,
        loading: false,
    }
}
export const startLoading = () => {
    return {
        type: ActionTypes.START_LOADING,
        loading: true,
        err: false,
        arrival: []
    }
}
export const getInitialFlights = (icao, begin) => {
    console.log(begin)
    return(dispatch) => {
        dispatch(startLoading())
        Axios.get(`https://opensky-network.org/api/flights/arrival?airport=${icao}&begin=${begin}&end=${end}`)
        .then( res => {
            dispatch(initialFlights(res.data))
            console.log(res)
        })
        .catch( err => dispatch(handleError()))
        .finally(() =>  dispatch(stopLoading()))
    }
}
export const changeTime = (time) => {
    console.log(time)
    return{
        type: ActionTypes.CHANGE_TIME,
        begin: time
    }
}
export const handleError = () => {
    return{
        type: ActionTypes.HANDLE_ERROR,
        err: true,
    }
    
}
export const changeCity = (city) => {
    return{
        type: ActionTypes.CHANGE_CITY,
        city,
        loading: true
    }
}
