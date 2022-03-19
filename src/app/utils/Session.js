/**
 * Avoid updating this file
 * For saving data in localstorage or anything else, use Storage.js
 */

import { SESSION_KEY_TOKEN } from './constants';

export const setToken = value => {
    localStorage.setItem(SESSION_KEY_TOKEN, value);
};
export const getToken = () => {
    return localStorage.getItem(SESSION_KEY_TOKEN);
};
export const clearAll = () => {
    localStorage.clear();
};

const Session = {
    setToken,
    getToken,
    clearAll
};

export default Session;
