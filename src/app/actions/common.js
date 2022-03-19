export const GET_COUNTRIES_START = 'GET_COUNTRIES_START';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAILURE = 'GET_COUNTRIES_FAILURE';
export const GET_STATES_START = 'GET_STATES_START';
export const GET_STATES_SUCCESS = 'GET_STATES_SUCCESS';
export const GET_STATES_FAILURE = 'GET_STATES_FAILURE';
export const GET_DISTRICTS_START = 'GET_DISTRICTS_START';
export const GET_DISTRICTS_SUCCESS = 'GET_DISTRICTS_SUCCESS';
export const GET_DISTRICTS_FAILURE = 'GET_DISTRICTS_FAILURE';
export const GET_CITIES_START = 'GET_CITIES_START';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE';
export const GET_VARIETIES_START = 'GET_VARIETIES_START';
export const GET_VARIETIES_SUCCESS = 'GET_VARIETIES_SUCCESS';
export const GET_VARIETIES_FAILURE = 'GET_VARIETIES_FAILURE';

export const getCountriesStart = () => {
    return {
        type: GET_COUNTRIES_START
    };
};

export const getCountriesSuccess = res => {
    return {
        type: GET_COUNTRIES_SUCCESS,
        payload: res
    };
};

export const getCountriesFailure = (res, errorMessage) => {
    return {
        type: GET_COUNTRIES_FAILURE,
        payload: res,
        error: errorMessage
    };
};

export const getVarietiesStart = () => {
    return {
        type: GET_VARIETIES_START
    };
};

export const getVarietiesSuccess = res => {
    return {
        type: GET_VARIETIES_SUCCESS,
        payload: res
    };
};

export const getVarietiesFailure = (res, errorMessage) => {
    return {
        type: GET_VARIETIES_FAILURE,
        payload: res,
        error: errorMessage
    };
};

export const getStatesStart = () => {
    return {
        type: GET_STATES_START
    };
};

export const getStatesSuccess = res => {
    return {
        type: GET_STATES_SUCCESS,
        payload: res
    };
};

export const getStatesFailure = (res, errorMessage) => {
    return {
        type: GET_STATES_FAILURE,
        payload: res,
        error: errorMessage
    };
};

export const getDistrictsStart = () => {
    return {
        type: GET_DISTRICTS_START
    };
};

export const getDistrictsSuccess = res => {
    return {
        type: GET_DISTRICTS_SUCCESS,
        payload: res
    };
};

export const getDistrictsFailure = (res, errorMessage) => {
    return {
        type: GET_DISTRICTS_FAILURE,
        payload: res,
        error: errorMessage
    };
};

export const getCitiesStart = () => {
    return {
        type: GET_CITIES_START
    };
};

export const getCitiesSuccess = res => {
    return {
        type: GET_CITIES_SUCCESS,
        payload: res
    };
};

export const getCitiesFailure = (res, errorMessage) => {
    return {
        type: GET_CITIES_FAILURE,
        payload: res,
        error: errorMessage
    };
};
