import { combineReducers } from 'redux';
import { loginUser } from './loginUser';
import * as assetMgmt from './assetMgmt';
import * as fund from './fund';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    loginUser,
    ...assetMgmt,
    ...fund
});

export default rootReducer;