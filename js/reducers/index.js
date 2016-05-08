import { combineReducers } from 'redux'
import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from '../actions'

function category(state = {isFetching:false, categorise:[], lang:1}, action) {

    console.log("action log", action.type)

    switch (action.type) {
        case FETCH_REQUEST :
            return Object.assign({}, state, {
                isFetching: true,
                lang : action.lang,
                version : action.version
            })
        case FETCH_SUCCESS :

            const nextState = Object.assign({}, state, {
                isFetching: false,
                categorise: action.categorise,
                lang : action.lang,
                version : action.version
            });
            return action
        case FETCH_FAILURE :
            return Object.assign({}, state, {
                isFetching: false,
                lang : action.lang,
                version : action.version,
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

