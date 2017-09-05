import { combineReducers } from 'redux';
import { homeRecommendList } from './home';
import contactInfo from './contactInfo';

//使用redux的combineReducers方法将所有reducer打包起来

import { apartmentList,
    curQuery,
    curCity,
    curType,
    curPrice,
    curPage,
    cityList} from './apartment';

const rootReducer = combineReducers({
    homeRecommendList,
    contactInfo,
    apartmentList,
    curQuery,
    curCity,
    curType,
    curPrice,
    curPage,
    cityList
});

export default rootReducer;