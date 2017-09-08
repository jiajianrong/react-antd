import { fetchGet } from '../api/fetch';


export const FETCH_LOGIN_USER_INFO = 'FETCH_LOGIN_USER_INFO';
export function fetchLoginUserInfo (url, body) {

	return (dispatch, getState) => {

		fetchGet(url, body, (data) => {

			if (data) {
				dispatch({
					type: FETCH_LOGIN_USER_INFO,
					payload: data
				})
			}

		})

	}

}
