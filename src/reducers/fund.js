import { FUND_GET_ALL, FUND_UPDATE_QUERY_FORM } from '../actions/fund';

/**
 * previousState 为 
 * store.getState().queryForm
 */
export function fund_query_form ( previousState={}, action ) {

	switch (action.type) {

		case FUND_UPDATE_QUERY_FORM:
			return action.payload

		default:
			return previousState
	}	

}



export function fund_list ( previousState=[], action ) {
    
    switch (action.type) {

        case FUND_GET_ALL:
            return action.payload
        
        default:
            return previousState
    }   

}

