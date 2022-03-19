import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import SidebarHeaderRoute from './auth/SidebarHeaderRoute';
import PublicRoute from './auth/PublicRoute';
import PlainRoute from './auth/PlainRoute';

import Login from './components/login/';
import NotFound from './components/common/NotFound';

class Route extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* Public Routes */}
                    <PublicRoute component={Login} path="/login" exact />

                    {/* Private Routes */}
                    <PlainRoute path="/" exact />
                    <PlainRoute component={NotFound} />
                </Switch>
            </>
        );
    }
}

export default Route;
