/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../../actions/login';
import { isLogin } from '../../../utils';
import { withTranslation } from 'react-i18next';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    isLoggedIn = () => {
        return isLogin();
    };

    logoutUser = () => {
        this.props.dispatch(logoutUser());
    };

    render() {
        return (
            <>
                Sidebar
            </>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    t: PropTypes.func
});

//export default connect(mapStateToProps)(Sidebar);
export default connect(mapStateToProps)(withTranslation()(Sidebar));
