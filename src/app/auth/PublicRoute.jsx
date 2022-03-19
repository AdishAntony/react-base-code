import React from 'react';
import {
    Route
    // Redirect
} from 'react-router-dom';
//import { isLogin } from '../utils';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        //<Route {...rest} render={props => (isLogin() ? <Redirect to="/" /> : <Component {...props} />)} />
        <Route {...rest} render={props => <Component {...props} />} />
    );
};

export default PublicRoute;
