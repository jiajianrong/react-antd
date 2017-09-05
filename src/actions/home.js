import { fetchGet } from '../api/fetch';

//异步推荐公寓列表数据
export const FETCH_HOME_RECOMMEND_LIST = 'FETCH_HOME_RECOMMEND_LIST';
export function fetchRecommendList (url, body) {

	return (dispatch, getState) => {

		fetchGet(url, body, (data) => {

			if (data.promotion_list && data.promotion_list.length > 0) {

				dispatch({

					type: FETCH_HOME_RECOMMEND_LIST,
					payload: data.promotion_list

				})

			} else {}

		})

	}

}
