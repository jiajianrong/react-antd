import { combineReducers } from 'redux';
import { loginUser } from './loginUser';
import contactInfo from './contactInfo';
import * as assetMgmt from './assetMgmt';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    loginUser,
    contactInfo,
    ...assetMgmt
});

export default rootReducer;