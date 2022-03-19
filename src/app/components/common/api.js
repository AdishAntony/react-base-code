import {
    getCommoditiesStart,
    getCommoditiesSuccess,
    getCommoditiesFailure
} from '../../actions/commodity';
import {
    getCountriesFailure,
    getCountriesStart,
    getCountriesSuccess,
    getStatesFailure,
    getStatesStart,
    getStatesSuccess,
    getDistrictsFailure,
    getDistrictsStart,
    getDistrictsSuccess,
    getCitiesFailure,
    getCitiesStart,
    getCitiesSuccess,
    getVarietiesStart,
    getVarietiesSuccess,
    getVarietiesFailure
} from '../../actions/common';
import {
    COMMON_NETWORK_ERROR_MESSAGE,
    COMMON_API_SUCCESS_MESSAGE,
    TOAST_TYPE_ERROR
} from '../../utils/constants';
import { COMMODITY, COUNTRY, STATE, DISTRICT, CITY, VARIETY } from '../../config/apiUrl';
import request from '../../utils/request';
import { showToast } from '../common/Toaster';

/**
 * Fetches market data from API
 * @returns
 */
export const getCommodities = params => {
    // Fetch markets from api
    // if success
    return dispatch => {
        dispatch(getCommoditiesStart());
        // Call API here
        request
            .get(COMMODITY.getCommodity, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getCommoditiesSuccess({
                                response: response,
                                data: response.data.data.commodities,
                                query: response.data.data.query
                            })
                        );
                    }
                }
                return dispatch(
                    getCommoditiesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch(
                    getCommoditiesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

/**
 * Fetches country data from API
 * @returns
 */
export const getCountries = params => {
    // Fetch countries from api
    // if success
    return dispatch => {
        dispatch(getCountriesStart());
        // Call API here
        request
            .get(COUNTRY, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getCountriesSuccess({
                                response: response,
                                data: response.data.data.countries,
                                query: response.data.data.query
                            })
                        );
                    }
                }
                return dispatch(
                    getCountriesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                showToast(COMMON_NETWORK_ERROR_MESSAGE, TOAST_TYPE_ERROR);
                return dispatch(
                    getCountriesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

/**
 * Fetches state data from API
 * @returns
 */
export const getStates = params => {
    // Fetch states from api
    // if success
    return dispatch => {
        dispatch(getStatesStart());
        // Call API here
        request
            .get(STATE, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getStatesSuccess({
                                response: response,
                                data: response.data.data.states,
                                query: response.data.data.query
                            })
                        );
                    }
                }
                return dispatch(
                    getStatesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                showToast(COMMON_NETWORK_ERROR_MESSAGE, TOAST_TYPE_ERROR);
                return dispatch(
                    getStatesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

/**
 * Fetches district data from API
 * @returns
 */
export const getDistricts = params => {
    // Fetch districts from api
    // if success
    return dispatch => {
        dispatch(getDistrictsStart());
        // Call API here
        request
            .get(DISTRICT, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getDistrictsSuccess({
                                response: response,
                                data: response.data.data.districts,
                                query: response.data.data.query
                            })
                        );
                    }
                }
                return dispatch(
                    getDistrictsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                showToast(COMMON_NETWORK_ERROR_MESSAGE, TOAST_TYPE_ERROR);
                return dispatch(
                    getDistrictsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

/**
 * Fetches city data from API
 * @returns
 */
export const getCities = params => {
    // Fetch cities from api
    // if success
    return dispatch => {
        dispatch(getCitiesStart());
        // Call API here
        request
            .get(CITY, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getCitiesSuccess({
                                response: response,
                                data: response.data.data.cities,
                                query: response.data.data.query
                            })
                        );
                    }
                }
                return dispatch(
                    getCitiesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                showToast(COMMON_NETWORK_ERROR_MESSAGE, TOAST_TYPE_ERROR);
                return dispatch(
                    getCitiesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

/**
 * Fetches variety data from API
 * @returns
 */
export const getVarieties = params => {
    // Fetch variety from api
    // if success
    return dispatch => {
        dispatch(getVarietiesStart());
        // Call API here
        request
            .get(VARIETY.getVariety, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getVarietiesSuccess({
                                response: response,
                                data: response.data.data.varieties,
                                query: response.data.data.query
                            })
                        );
                    }
                }
                return dispatch(
                    getVarietiesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch(
                    getCommoditiesFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};
