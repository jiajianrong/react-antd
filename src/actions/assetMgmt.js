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


export const GET_ASSET_NAMES = 'GET_ASSET_NAMES';
export function getAssetNames() {

    return (dispatch, getState) => {
        fetchGet('api/asset/getAssetNames', {}, (data) => {
            data && dispatch({
                type: GET_ASSET_NAMES,
                payload: data
            })
        })
    }

}


