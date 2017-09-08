import { GET_LOGIN_USER } from '../actions/loginUser';

/**
 * previousState 为 
 * store.getState().loginUser
 */
export function loginUser ( previousState={}, action ) {

	switch (action.type) {

		case GET_LOGIN_USER:
			return action.payload

		default:
			return previousState
	}	

}
