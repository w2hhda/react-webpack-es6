import {combineReducers} from 'redux'
import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../actions'

function category(state = {isFetching: false, categorise: [], lang: 1}, action) {

    console.log("action log", action.type, action)

    switch (action.type) {
        case FETCH_REQUEST :
            return Object.assign({}, state, {
            })
        case FETCH_SUCCESS :
            return Object.assign({}, state, {
                categorise: action.categorise,
            })
        case FETCH_FAILURE :
            return Object.assign({}, state, {
                isFetching: false,
                lang: action.lang,
                version: action.version,
                exception: action.exception
            })
        default:
            return state
    }

}

const rootReducer = combineReducers({
    category
})

export default rootReducer;

