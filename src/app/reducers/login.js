import { LOGIN_CHECK_START, LOGIN_CHECK_SUCCESS, LOGIN_CHECK_FAILURE } from '../actions/login';

// Initial state
const initialState = {
    redirect: false,
    loading: false,
    errorMessage: '',
    errorResponse: {},
    response: {}
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_CHECK_START:
            return {
                ...state,
                loading: true,
                errorMessage: '',
                errorResponse: ''
            };

        case LOGIN_CHECK_SUCCESS:
            return {
                ...state,
                redirect: action.payload.redirect,
                response: action.payload.response,
                loading: false,
                errorMessage: '',
                errorResponse: ''
            };

        case LOGIN_CHECK_FAILURE:
            return {
                ...state,
                redirect: false,
                response: {},
                loading: false,
                errorMessage: action.payload.errorMessage,
                errorResponse: action.payload.response
            };
    }
    return state;
};
