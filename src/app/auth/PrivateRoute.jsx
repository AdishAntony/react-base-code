import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (isLogin() ? <Component {...props} /> : <Redirect to="/login" />)} />
    );
};

export default PrivateRoute;
