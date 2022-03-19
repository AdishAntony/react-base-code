import { addEnquiryFailure, addEnquiryStart, addEnquirySuccess } from '../../actions/homepage';
import { COMMON_NETWORK_ERROR_MESSAGE, COMMON_API_SUCCESS_MESSAGE } from '../../utils/constants';
import {
    getAllSellerPopularsFailure,
    getAllSellerPopularsStart,
    getAllSellerPopularsSuccess,
    getBuyerPopularsFailure,
    getBuyerPopularsStart,
    getBuyerPopularsSuccess,
    getSellerPopularsFailure,
    getSellerPopularsStart,
    getSellerPopularsSuccess
} from '../../actions/popular';
import { BUYER_POPULAR, ENQUIRY, SELLER_POPULAR } from '../../config/apiUrl';
import request from '../../utils/request';
import { showToast } from '../common/Toaster';
import {
    TOAST_TYPE_SUCCESS,
    TOAST_TYPE_ERROR,
    ENQUIRY_ADD_SUCCESS_MESSAGE,
    ENQUIRY_ADD_FAILURE_MESSAGE
} from '../../utils/constants';

/**
 * Fetches enquiry data from API
 * @returns
 */

export const addEnquiry = item => {
    return dispatch => {
        dispatch(addEnquiryStart());
        // Call API here
        request
            .post(ENQUIRY, item)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        showToast(ENQUIRY_ADD_SUCCESS_MESSAGE, TOAST_TYPE_SUCCESS);
                        return dispatch(addEnquirySuccess(response));
                    } else {
                        showToast(response.data.message, TOAST_TYPE_ERROR);
                    }
                } else {
                    showToast(ENQUIRY_ADD_FAILURE_MESSAGE, TOAST_TYPE_ERROR);
                }
                return dispatch(
                    addEnquiryFailure({
                        data: [],
                        errorMessage: response.data.message,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                showToast(ENQUIRY_ADD_FAILURE_MESSAGE, TOAST_TYPE_ERROR);
                return dispatch(
                    addEnquiryFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

export const getBuyerPopulars = (params, itemType) => {
    // Fetch categories from api
    // if success
    return dispatch => {
        dispatch(getBuyerPopularsStart());
        // Call API here
        request
            .get(BUYER_POPULAR, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getBuyerPopularsSuccess({
                                response: response,
                                data: response.data.data.buyers,
                                query: response.data.data.query,
                                itemType: itemType
                            })
                        );
                    }
                }
                return dispatch(
                    getBuyerPopularsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch(
                    getBuyerPopularsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

export const getSellerPopulars = (params, itemType) => {
    // Fetch categories from api
    // if success
    return dispatch => {
        dispatch(getSellerPopularsStart());
        // Call API here
        request
            .get(SELLER_POPULAR, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getSellerPopularsSuccess({
                                response: response,
                                data: response.data.data.sellers,
                                query: response.data.data.query,
                                itemType: itemType
                            })
                        );
                    }
                }
                return dispatch(
                    getSellerPopularsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch(
                    getSellerPopularsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};

export const getAllSellerPopulars = (params, itemType) => {
    // Fetch categories from api
    // if success
    return dispatch => {
        dispatch(getAllSellerPopularsStart());
        // Call API here
        request
            .get(SELLER_POPULAR, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.data) {
                        return dispatch(
                            getAllSellerPopularsSuccess({
                                response: response,
                                data: response.data.data.sellers,
                                query: response.data.data.query,
                                itemType: itemType
                            })
                        );
                    }
                }
                return dispatch(
                    getAllSellerPopularsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch(
                    getAllSellerPopularsFailure({
                        data: [],
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};
