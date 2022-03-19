export const ADD_ENQUIRY_START = 'ADD_ENQUIRY_START';
export const ADD_ENQUIRY_SUCCESS = 'ADD_ENQUIRY_SUCCESS';
export const ADD_ENQUIRY_FAILURE = 'ADD_ENQUIRY_FAILURE';

export const addEnquiryStart = () => {
    return {
        type: ADD_ENQUIRY_START
    };
};

export const addEnquirySuccess = res => {
    return {
        type: ADD_ENQUIRY_SUCCESS,
        payload: res
    };
};

export const addEnquiryFailure = (res, errorMessage) => {
    return {
        type: ADD_ENQUIRY_FAILURE,
        payload: res,
        error: errorMessage
    };
};
