/**
 * Created by 58 on 2017/7/10.
 */

import { fetchGet,fetchPost } from '../api/fetch';

//异步拉取公寓列表数据
export const FETCH_APARTMENT_LIST = 'FETCH_APARTMENT_LIST';
export function fetchApartmentsList (url, body) {

    return (dispatch, getState) => {

        fetchPost(url, body, (data) => {

            if (data.dateList) {

                dispatch({

                    type: 'FETCH_APARTMENT_LIST',
                    payload: data

                })

            } else {}

        })

    }

}

export const RESET_APARTMENT_LIST = 'RESET_APARTMENT_LIST';
export function resetApartmentsList () {

    return {

        type: 'RESET_APARTMENT_LIST',
        payload: {

            dateList: [],
            recommendList: [],
            dateListCount: 0

        }

    }

}


//拉取城市信息
export const FETCH_CITY_LIST = 'FETCH_CITY_LIST';
export function fetchCityList (url, body) {

    return (dispatch, getState) => {

        fetchGet(url, body, (data) => {

            if (data.city_list && data.city_list.length > 0) {

                dispatch({

                    type: 'FETCH_CITY_LIST',
                    payload: data.city_list

                })

            } else {}

        })

    }

}
/*
 * 公寓列表页筛选信息持久化
 * curQuery
 * curCity
 * curType
 * curPrice
 * curPage
 */
export const CUR_QUERY = 'CUR_QUERY';
export const CUR_CITY = 'CUR_CITY';
export const CUR_TYPE = 'CUR_TYPE';
export const CUR_PRICE = 'CUR_PRICE';
export const CUR_PAGE = 'CUR_PAGE';
export function curQueryFun (payload) {

    return {

        type: 'CUR_QUERY',
        payload

    }

}
export function curCityFun (payload) {

    return {

        type: 'CUR_CITY',
        payload

    }

}
export function curTypeFun (payload) {

    return {

        type: 'CUR_TYPE',
        payload

    }

}
export function curPriceFun (payload) {

    return {

        type: 'CUR_PRICE',
        payload

    }

}
export function curPageFun (payload) {

    return {

        type: 'CUR_PAGE',
        payload

    }

}
//重制所有筛选
export const RESET_FILTER_CONDITION = 'RESET_FILTER_CONDITION';
export function resetFilterCondition () {

    return (dispatch, getState) => {

        dispatch(curQueryFun(''));
        dispatch(curCityFun(''));
        dispatch(curTypeFun([]));
        dispatch(curPriceFun(''));
        dispatch(curPageFun(1));
        dispatch(resetApartmentsList())

    }

}


