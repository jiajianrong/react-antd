import { fetchGet } from '../api/fetch';


export const GET_ASSETS = 'GET_ASSETS';
export function getAssets(body) {

    return (dispatch, getState) => {
        return fetchGet('api/asset/getAssets', body, (data) => {
            return dispatch({
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


