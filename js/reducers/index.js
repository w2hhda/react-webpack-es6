import {combineReducers} from 'redux'
import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../actions'

function category(state = {isFetching: false, categorise: [], language: 1}, action) {

    console.log("action log", action.type, action)

    switch (action.type) {
        case FETCH_REQUEST :
            return Object.assign({}, state, {
                isFetching: true,
                language: action.lang,
                version: action.version,
            })
        case FETCH_SUCCESS :
            return Object.assign({}, state, {
                categorise: action.categorise,
                isFetching: false,
                language: action.lang,
                version: action.version,
            })
        case FETCH_FAILURE :
            return Object.assign({}, state, {
                isFetching: false,
                language: action.lang,
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

