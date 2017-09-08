import { fetchGet } from '../api/fetch';


export const GET_LOGIN_USER = 'GET_LOGIN_USER';
export function getLoginUser() {

    return (dispatch, getState) => {
        fetchGet('api/getLoginUser', {/* body */}, (data) => {
            data && dispatch({
                type: GET_LOGIN_USER,
                payload: data
            })
        })
    }

}





