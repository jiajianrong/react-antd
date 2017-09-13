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



export function assetsTable ( previousState=[], action ) {
    
    switch (action.type) {

        case GET_ASSETS:
            return action.payload

        default:
            return previousState
    }   

}