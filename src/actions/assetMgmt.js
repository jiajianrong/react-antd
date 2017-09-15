import { fetchGet, fetchPost } from '../api/fetch';


export const GET_ASSETS = 'GET_ASSETS';
export function getAssets(body) {

    return (dispatch, getState) => {
        fetchGet('api/asset/getAssets', body, (data) => {
            data && dispatch({
                type: GET_ASSETS,
                payload: data
            })
        })
    }

}


export const UPDATE_QUERY = 'UPDATE_QUERY';
export function updateQuery(body) {

    return {
        type: UPDATE_QUERY,
        payload: body
    }

}


export const GET_ASYNC_NAMES = 'GET_ASYNC_NAMES';
export function getAsyncNames() {

    return (dispatch, getState) => {
        fetchGet('api/asset/getAsyncNames', {}, (data) => {
            data && dispatch({
                type: GET_ASYNC_NAMES,
                payload: data
            })
        })
    }

}


