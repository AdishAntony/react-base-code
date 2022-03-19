import React from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import {
    TOAST_TYPE_ERROR,
    TOAST_TYPE_INFO,
    TOAST_TYPE_SUCCESS,
    TOAST_TYPE_WARNING
} from '../../utils/constants';

export const showToast = (message, type) => {
    switch (type) {
        case TOAST_TYPE_SUCCESS:
            toast(message, { type: toast.TYPE.SUCCESS });
            break;
        case TOAST_TYPE_ERROR:
            toast(message, { type: toast.TYPE.ERROR });
            break;
        case TOAST_TYPE_WARNING:
            toast(message, { type: toast.TYPE.WARNING });
            break;
        case TOAST_TYPE_INFO:
            toast(message, { type: toast.TYPE.INFO });
            break;
        default:
            //default:
            toast(message, { type: toast.TYPE.DEFAULT });
            break;
    }
};

export const getToastContainer = () => {
    return (
        <ToastContainer
            limit={5}
            transition={Zoom}
            style={{ width: '50%' }}
            position={toast.POSITION.TOP_RIGHT}
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick={false}
        />
    );
};
