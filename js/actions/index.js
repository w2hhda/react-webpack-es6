import fetch from 'isomorphic-fetch'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'


/**
 * 请求数据
 * @param lang
 * @param version
 * @returns {{type: string, lang: *, version: *}}
 */
export function requestCategory(lang, version) {

    return {
        type: FETCH_REQUEST,
        lang: lang,
        version: version
    };
}

/***
 * 数据请求成功
 * @param lang
 * @param version
 * @param categories
 * @returns {{type: string, lang: *, version: *, categories: *}}
 */
export function requestSuccess(lang, version, categories) {

    return {
        type: FETCH_SUCCESS,
        lang: lang,
        version: version,
        categories: categories
    }
}

/**
 * 数据请求失败
 * @param lang
 * @param version
 * @param e
 * @returns {{type: string, lang: *, version: *, exception: *}}
 */
export function requestFailure(lang, version, e) {
    return {
        type: FETCH_FAILURE,
        lang: lang,
        version: version,
        exception: e
    }
}

export function fetchCategory(params) {
    return dispatch => {
        return dispatch(fetchs(params))
    }
}

function fetchs(params) {
    return dispatch => {
        dispatch(requestCategory(params.lang, params.version))
        return fetch(`../../json/data1.json`)
            .then(response => response.json())
            .then(json => {
                console.log("fetchCategory, json", json)
                dispatch(requestSuccess(params.lang, params.version, json))
            })
            .catch(e => {
                console.log("fetchCategory, error", e)
                dispatch(requestFailure(params.lang, params.version, e))
            })
    }

}

