//import initStateData from './initData';
import { FETCH_HOME_RECOMMEND_LIST } from '../actions/home';

/**
 * 处理首页推荐列表
 * previousState 为 
 * store.getState().homeRecommendList
 */
export function homeRecommendList ( previousState=[], action ) {

	switch (action.type) {

		case FETCH_HOME_RECOMMEND_LIST:

			return action.payload

		default:

			return previousState

	}	

}
