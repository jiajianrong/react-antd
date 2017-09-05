import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise';
import reducers from '../reducers/index';

/**
 * 统计middleware
 * 功能：
 * 	控制台打印触发的action
 *  控制台打印触发的action是否为异步action（dispatching a function）	
 *  控制台打印即将改变的 新state 此时state还未改变
 */
// eslint-disable-next-line
const logger = store => next => action => {
	if(typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

/**
 * middleware队列
 * 排序有要求：
 *  thunk置底 
 * thunk的作用：
 *  根据传入的action类型，来实现异步action
 *  if (typeof action === 'function') {
 *    return action(dispatch, getState, extraArgument);
 *  }
 */

let middlewares = [
	// logger,
	thunk
];

/**
 * 通过redux的compose函数 将store.dispatch和middlewares进行currying化来实现外倒内调用
 *             ----> --->   
 * 新dispatch = logger(thunk(store.dispatch))
 */
let createAppStore = applyMiddleware(...middlewares)(createStore);

let store = createAppStore(reducers/*, {}*/);

export default store;