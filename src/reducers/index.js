import { combineReducers } from 'redux';
import { loginUser } from './loginUser';
import contactInfo from './contactInfo';
import { assetsQueryForm } from './assetMgmt';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    loginUser,
    contactInfo,
    assetsQueryForm
});

export default rootReducer;