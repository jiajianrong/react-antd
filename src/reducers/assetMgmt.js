import { GET_ASSETS, UPDATE_QUERY } from '../actions/assetMgmt';

/**
 * previousState 为 
 * store.getState().assetMgmt
 */
export function assetsQueryForm ( previousState={}, action ) {

	switch (action.type) {

		case UPDATE_QUERY:
			return action.payload

		default:
			return previousState
	}	

}
