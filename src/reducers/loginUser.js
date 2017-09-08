import { FETCH_LOGIN_USER_INFO } from '../actions/loginUser';

/**
 * 处理首页推荐列表
 * previousState 为 
 * store.getState().loginUser
 */
export function homeRecommendList ( previousState=[], action ) {

	switch (action.type) {

		case FETCH_HOME_RECOMMEND_LIST:

			return action.payload

		default:

			return previousState

	}	

}
