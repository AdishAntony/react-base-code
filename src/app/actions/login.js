export const LOGIN_CHECK_START = 'LOGIN_CHECK_START';
export const LOGIN_CHECK_SUCCESS = 'LOGIN_CHECK_SUCCESS';
export const LOGIN_CHECK_FAILURE = 'LOGIN_CHECK_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

export const loginCheckStart = () => {
    return {
        type: LOGIN_CHECK_START
    };
};

export const loginCheckSuccess = res => {
    return {
        type: LOGIN_CHECK_SUCCESS,
        payload: res
    };
};

export const loginCheckFailure = (res, errorMessage) => {
    return {
        type: LOGIN_CHECK_FAILURE,
        payload: res,
        error: errorMessage
    };
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    };
};

export const logoutUser = () => {
    return dispatch => {
        Storage.clearAll();
        return dispatch(userLogout());
    };
};
