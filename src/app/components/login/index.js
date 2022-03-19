import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Session from "../../utils/Session";
import { checkLogin } from "./api";
import Form from "./Forms";
import { showToast } from '../common/Toaster';
import {
    COMMON_LOGIN_FAILED_MESSAGE,
    TOAST_TYPE_ERROR,
} from '../../utils/constants';

class Login extends Component {
    onSubmit = (data) => {
        this.props.dispatch(checkLogin(data));
    };

    loginSuccess = () => {
        if (this.props.response != undefined && this.props.response.token != undefined && this.props.response.token != "") {
            // set token to local storage
            Session.setToken(this.props.response.token);
            Session.setUser({ ...this.props.response.user, role: "" });
            Session.setRole(this.props.response.user.role);
            // redirect to dashboard
            this.props.history.push("/");
        } else {
            showToast(COMMON_LOGIN_FAILED_MESSAGE, TOAST_TYPE_ERROR);
        }
    };

    render() {
        if (this.props.redirect == true) {
            this.loginSuccess();
        }
        return (
            <Fragment>
                <Form
                    onSubmit={this.onSubmit}
                    loading={this.props.loading}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    redirect: state.loginReducer.redirect,
    loading: state.loginReducer.loading,
    response: state.loginReducer.response,
    errorMessage: state.loginReducer.errorMessage,
});

export default connect(mapStateToProps)(Login);
