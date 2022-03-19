/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                Header
            </>
        );
    }
}

const mapStateToProps = state => ({
    t: PropTypes.func,
    isLoggedIn: state.loginReducer.isLoggedIn,
});

export default connect(mapStateToProps)(withRouter(withTranslation()(Header)));
