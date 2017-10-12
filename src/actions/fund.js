import { fetchGet, fetchPost } from '../api/fetch';

// 更新查询条件
export const FUND_UPDATE_QUERY_FORM = 'FUND_UPDATE_QUERY_FORM';
export function updateQuery(query) {

    return {
        type: FUND_UPDATE_QUERY_FORM,
        payload: query
    }

}



// 更新分页信息
export const FUND_UPDATE_PAGINATION = 'FUND_UPDATE_PAGINATION';
export function updatePagination(pager) {

    return {
        type: FUND_UPDATE_PAGINATION,
        payload: pager
    }

}



export const FUND_RESET_PAGINATION = 'FUND_RESET_PAGINATION';
export function resetPagination() {

    return {
        type: FUND_RESET_PAGINATION,
        payload: null
    }

}



// 获取table数据
export const FUND_GET_TABLE = 'FUND_GET_TABLE';
export function getTable(query) {

    return (dispatch, getState) => {
        
        dispatch({
            type: FUND_UPDATE_TABLE_LOADING,
            payload: true
        })
        
        fetchGet('api/fund/getFunds', query, (data) => {
            data && dispatch({
                type: FUND_GET_TABLE,
                payload: data.list
            })
            
            data && dispatch({
                type: FUND_UPDATE_PAGINATION,
                payload: { total: data.total }
            })
            
            dispatch({
                type: FUND_UPDATE_TABLE_LOADING,
                payload: false
            })
        })
    }

}




// 更新loading状态
export const FUND_UPDATE_TABLE_LOADING = 'FUND_UPDATE_TABLE_LOADING';
export function updateTableLoading(isLoading) {

    return {
        type: FUND_UPDATE_TABLE_LOADING,
        payload: isLoading
    }

}