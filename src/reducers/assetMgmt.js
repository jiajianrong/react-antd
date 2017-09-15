import { GET_ASSETS, UPDATE_ASSET, UPDATE_QUERY, GET_ASYNC_NAMES } from '../actions/assetMgmt';

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
        
        case UPDATE_ASSET:
            return previousState.map(item =>
                (item.id === action.payload.id)
                    ? {...item, ...action.payload}
                    : item
            )

        default:
            return previousState
    }   

}



export function assetNames ( previousState=[], action ) {
    
    switch (action.type) {

        case GET_ASYNC_NAMES:
            return action.payload

        default:
            return previousState
    }   

}