import { SESSION_KEY_TOKEN, SESSION_KEY_USER } from './constants';

export const setToken = value => {
    localStorage.setItem(SESSION_KEY_TOKEN, value);
};
export const getToken = () => {
    return localStorage.getItem(SESSION_KEY_TOKEN);
};

// ----------- User -------------
export const setUser = value => {
    //localStorage.setItem(SESSION_KEY_USER, JSON.stringify(value));
    let oldUserDetails = getUser();
    localStorage.setItem(SESSION_KEY_USER, JSON.stringify({...oldUserDetails, ...value}));
};

export const getUser = () => {
    let userDetails = JSON.parse(localStorage.getItem(SESSION_KEY_USER));
    if(userDetails){
        if(userDetails.userId == undefined || userDetails.userId == '' || userDetails.userId == null){
            userDetails.userId = 0;
        }
    }
    return userDetails;
    //return JSON.parse(localStorage.getItem(SESSION_KEY_USER));
};

export const clearAll = () => {
    localStorage.clear();
};

const Storage = {
    setToken,
    getToken,
    setUser,
    getUser,
    clearAll
};

export default Storage;
