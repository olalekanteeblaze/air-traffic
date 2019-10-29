import * as ActionTypes from '../constant';
import Axios from 'axios';

const end = Math.round((new Date()).getTime() / 1000);
const begin = end - (60 * 10* 100)
console.log(begin, end)
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
        arrival: flights
    }
}
export const getInitialFlights = (icao) => {
    return(dispatch) => {
        Axios.get(`https://opensky-network.org/api/flights/arrival?airport=${icao}&begin=${begin}&end=${end}`)
        .then( res => {
            dispatch(initialFlights(res.data))
            console.log(res)
        })
        .catch( err => console.log(err))
    }
}
export const changeTime = (time) => {
    return{
        type: ActionTypes.CHANGE_TIME,
        end: time
    }
}
