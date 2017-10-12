import { FUND_UPDATE_PAGINATION, FUND_UPDATE_QUERY_FORM, FUND_GET_TABLE, 
         FUND_UPDATE_TABLE_LOADING, FUND_RESET_PAGINATION } from '../actions/fund';

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



export function fund_table ( previousState=[], action ) {
    
    switch (action.type) {

        case FUND_GET_TABLE:
            return action.payload
        
        default:
            return previousState
    }   

}



export function fund_pagination ( previousState={pageSize:10, current: 1}, action ) {
    
    switch (action.type) {

        case FUND_UPDATE_PAGINATION:
            return { ...previousState, ...action.payload }
        
        case FUND_RESET_PAGINATION:
            return {pageSize:10, current: 1}
        
        default:
            return previousState
    }   

}




export function fund_table_loading ( previousState=false, action ) {
    
    switch (action.type) {

        case FUND_UPDATE_TABLE_LOADING:
            return action.payload
        
        default:
            return previousState
    }   

}