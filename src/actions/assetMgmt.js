import { fetchGet, fetchPost } from '../api/fetch';


export const UPDATE_QUERY = 'UPDATE_QUERY';
export function updateQuery(query) {

    return {
        type: UPDATE_QUERY,
        payload: query
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




export const GET_ASSETS = 'GET_ASSETS';
export function getAssets(query) {

    return (dispatch, getState) => {
        fetchGet('api/asset/getAssets', query, (data) => {
            data && dispatch({
                type: GET_ASSETS,
                payload: data
            })
        })
    }

}


export const UPDATE_ASSET = 'UPDATE_ASSET';
export function updateAsset(item) {

    return {
        type: UPDATE_ASSET,
        payload: item
    }

}


export const DELETE_ASSET = 'DELETE_ASSET';
export function deleteAsset(id) {

    return {
        type: DELETE_ASSET,
        payload: id
    }

}
