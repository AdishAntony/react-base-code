import { loginCheckStart, loginCheckSuccess, loginCheckFailure } from '../../actions/login';
import { COMMON_NETWORK_ERROR_MESSAGE, LOGIN_ERROR_MESSAGE } from '../../utils/constants';
import { LOGIN_CHECK } from '../../config/apiUrl';
import request from '../../utils/request';

/**
 * Tries to login the user
 * @returns
 */
export const checkLogin = params => {
    return dispatch => {
        dispatch(loginCheckStart());
        // Call API here
        request
            .post(LOGIN_CHECK, params)
            .then(response => {
                if (response.status == 200) {
                    if (response.data.message != '') {
                        return dispatch(
                            loginCheckSuccess({ response: response.data.data, redirect: true })
                        );
                    }
                }
                return dispatch(
                    loginCheckFailure({
                        response: {},
                        errorMessage: LOGIN_ERROR_MESSAGE,
                        errorResponse: { errorMessage: LOGIN_ERROR_MESSAGE }
                    })
                );
            })
            .catch(error => {
                console.log(error);
                return dispatch(
                    loginCheckFailure({
                        response: {},
                        errorMessage: COMMON_NETWORK_ERROR_MESSAGE,
                        errorResponse: { errorMessage: COMMON_NETWORK_ERROR_MESSAGE }
                    })
                );
            });
    };
};
