/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// package specific css imports
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import 'react-toastify/dist/ReactToastify.css';
// page specific css imports
import './assets/css/pagination.css';
import './assets/css/toaster.css';

import LoadingOverlay from 'react-loading-overlay';
import Spinner from './components/common/Spinner';

import Route from './Route';
import ErrorBoundary from './components/common/ErrorBoundary';
import { getToastContainer } from './components/common/Toaster';
import './config/i18n';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <LoadingOverlay
                    active={this.props.loading}
                    spinner={<Spinner show={this.props.loading} />}
                    text="">
                    <ErrorBoundary>
                        <Route />
                        {getToastContainer()}
                    </ErrorBoundary>
                </LoadingOverlay>
            </>
        );
    }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProp = state => ({});

export default withRouter(connect(mapStateToProp)(Main));
