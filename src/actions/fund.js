import { fetchGet, fetchPost } from '../api/fetch';


export const FUND_UPDATE_QUERY_FORM = 'FUND_UPDATE_QUERY_FORM';
export function updateQuery(query) {

    return {
        type: FUND_UPDATE_QUERY_FORM,
        payload: query
    }

}




export const FUND_GET_ALL = 'FUND_GET_ALL';
export function getAll(query) {

    return (dispatch, getState) => {
        fetchGet('api/asset/getAssets', query, (data) => {
            data && dispatch({
                type: FUND_GET_ALL,
                payload: data
            })
        })
    }

}

