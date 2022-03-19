import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

import Login from '../components/login/';
import NotFound from '../components/common/NotFound';

const PlainRoute = () => {
    return (
        <Fragment>
            <div>
                <Switch>
                    {/* <PublicRoute component={Login} path="/login" exact /> */}

                    <Route component={NotFound} />
                </Switch>
            </div>
        </Fragment>
    );
};

export default PlainRoute;
