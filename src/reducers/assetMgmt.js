import { GET_ASSETS, UPDATE_QUERY, GET_ASSET_NAMES } from '../actions/assetMgmt';

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



export function assetNames ( previousState=[], action ) {
    
    switch (action.type) {

        case GET_ASSET_NAMES:
            return action.payload

        default:
            return previousState
    }   

}