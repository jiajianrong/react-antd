import initStateData from './initData';
import { FETCH_APARTMENT_LIST,
		RESET_APARTMENT_LIST,
    	FETCH_CITY_LIST,
		CUR_QUERY,
		CUR_CITY,
		CUR_TYPE,
		CUR_PRICE,
		CUR_PAGE } from '../actions/apartment';

export function apartmentList ( state = initStateData.apartmentList, action ) {

	switch (action.type) {

		case FETCH_APARTMENT_LIST:

			return action.payload;

		case RESET_APARTMENT_LIST:

			return action.payload;

		default:

			return state

	}	

}


export function cityList (state = initStateData.cityList, action) {

    switch (action.type) {

        case FETCH_CITY_LIST:

            return action.payload;

        default:

            return state

    }

}

export function curQuery ( state = initStateData.curQuery, action ) {

	switch (action.type) {

		case CUR_QUERY:

			return action.payload;

		default:

			return state

	}	

}

export function curCity ( state = initStateData.curCity, action ) {

	switch (action.type) {

		case CUR_CITY:

			return action.payload;

		default:

			return state

	}	

}

export function curType ( state = initStateData.curType, action ) {

	switch (action.type) {

		case CUR_TYPE:

			return action.payload;

		default:

			return state

	}	

}

export function curPrice ( state = initStateData.curPrice, action ) {

	switch (action.type) {

		case CUR_PRICE:

			return action.payload;

		default:

			return state

	}	

}

export function curPage ( state = initStateData.curPage, action ) {

	switch (action.type) {

		case CUR_PAGE:

			return action.payload;

		default:

			return state

	}	

}

