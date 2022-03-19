import { ADD_ENQUIRY_FAILURE, ADD_ENQUIRY_START, ADD_ENQUIRY_SUCCESS } from '../actions/homepage';

// Initial state
const initialState = {
    errorMessage: '',
    errorResponse: {},
    addLoading: false
};

export const homepageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ENQUIRY_START:
            return {
                ...state,
                addLoading: true
            };
        case ADD_ENQUIRY_SUCCESS:
            return {
                ...state,
                addLoading: false,
                addResponse: action.payload.response,
                errorMessage: '',
                errorResponse: ''
            };
        case ADD_ENQUIRY_FAILURE:
            return {
                ...state,
                addLoading: false,
                errorMessage: action.payload.errorMessage,
                errorResponse: action.payload.response
            };
    }
    return state;
};
