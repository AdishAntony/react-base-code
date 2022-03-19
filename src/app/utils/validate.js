import { VALIDATE_EMPTY_MESSAGE } from './constants';

export const validateEmpty = (items, message = VALIDATE_EMPTY_MESSAGE) => {
    let isValid = true;
    let validation = {};
    const keys = Object.keys(items);

    keys.map(key => {
        if (items[key] == '') {
            isValid = false;
            validation = {
                ...validation,
                [key]: {
                    valid: false,
                    message: message
                }
            };
        } else {
            validation = {
                ...validation,
                [key]: {
                    valid: true,
                    message: ''
                }
            };
        }
    });

    return {
        isValid,
        validation
    };
};
