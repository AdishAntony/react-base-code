import {
    GET_COUNTRIES_FAILURE,
    GET_COUNTRIES_START,
    GET_COUNTRIES_SUCCESS,
    GET_STATES_FAILURE,
    GET_STATES_START,
    GET_STATES_SUCCESS,
    GET_DISTRICTS_FAILURE,
    GET_DISTRICTS_START,
    GET_DISTRICTS_SUCCESS,
    GET_CITIES_FAILURE,
    GET_CITIES_START,
    GET_CITIES_SUCCESS,
    GET_VARIETIES_START,
    GET_VARIETIES_SUCCESS,
    GET_VARIETIES_FAILURE
} from '../actions/common';

// Initial state
const initialState = {
    countryList: [],
    stateList: [],
    districtList: [],
    cityList: [],
    loading: false,
    errorMessage: '',
    errorResponse: {},
    query: {},
    countryLoading: false,
    stateLoading: false,
    districtLoading: false,
    cityLoading: false,
    varietyLoading: false,
    varietyList: []
};

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_START:
            return {
                ...state,
                countryLoading: true,
                errorMessage: '',
                errorResponse: ''
            };

        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countryList: action.payload.data,
                countryLoading: false,
                errorMessage: '',
                errorResponse: '',
                query: action.payload.query
            };

        case GET_COUNTRIES_FAILURE:
            return {
                ...state,
                countryLoading: false,
                errorMessage: action.payload.errorMessage,
                errorResponse: action.payload.response,
                query: {}
            };
        case GET_STATES_START:
            return {
                ...state,
                stateLoading: true,
                errorMessage: '',
                errorResponse: ''
            };

        case GET_STATES_SUCCESS:
            return {
                ...state,
                stateList: action.payload.data,
                stateLoading: false,
                errorMessage: '',
                errorResponse: '',
                query: action.payload.query
            };

        case GET_STATES_FAILURE:
            return {
                ...state,
                stateLoading: false,
                errorMessage: action.payload.errorMessage,
                errorResponse: action.payload.response,
                query: {}
            };
        case GET_DISTRICTS_START:
            return {
                ...state,
                districtLoading: true,
                errorMessage: '',
                errorResponse: ''
            };

        case GET_DISTRICTS_SUCCESS:
            return {
                ...state,
                districtList: action.payload.data,
                districtLoading: false,
                errorMessage: '',
                errorResponse: '',
                query: action.payload.query
            };

        case GET_DISTRICTS_FAILURE:
            return {
                ...state,
                districtLoading: false,
                errorMessage: action.payload.errorMessage,
                errorResponse: action.payload.response,
                query: {}
            };
        case GET_CITIES_START:
            return {
                ...state,
                cityLoading: true,
                errorMessage: '',
                errorResponse: ''
            };

        case GET_CITIES_SUCCESS:
            return {
                ...state,
                cityList: action.payload.data,
                cityLoading: false,
                errorMessage: '',
                errorResponse: '',
                query: action.payload.query
            };

        case GET_CITIES_FAILURE:
            return {
                ...state,
                cityLoading: false,
                errorMessage: action.payload.errorMessage,
                errorResponse: action.payload.response,
                query: {}
            };

        case GET_VARIETIES_START:
            return {
                ...state,
                varietyLoading: true,
                errorMessage: '',
                errorResponse: ''
            };

        case GET_VARIETIES_SUCCESS:
            return {
                ...state,
                varietyList: action.payload.data,
                varietyLoading: false,
                errorMessage: '',
                errorResponse: '',
                query: action.payload.query
            };

        case GET_VARIETIES_FAILURE:
            return {
                ...state,
                varietyLoading: false,
                errorMessage: action.payload.errorMessage,
                errorResponse: action.payload.response,
                query: {}
            };
    }
    return state;
};
