import axios from 'axios';
import { API_REQUEST_TIMEOUT } from './constants';
import Storage from './Storage';

const axiosInstance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
        'content-type': 'application/json',
        'Cache-Control': 'max-age=0'
    },
    timeout: API_REQUEST_TIMEOUT // Wait for 5 seconds
});

const requestHandler = request => {
    request.headers.Authorization = `Bearer ${Storage.getToken()}`;

    return request;
};

const responseHandler = response => {
    if (response.status === 401) {
        Storage.clearAll();
    }
    return response;
};

const errorHandler = error => {
    if (error.response != undefined) {
        if (error.response.status === 401 && Storage.getToken()) {
            Storage.clearAll();
        }
    }
    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
    request => requestHandler(request),
    error => errorHandler(error)
);

axiosInstance.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error)
);

export default axiosInstance;
