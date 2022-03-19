import { Component } from 'react';
import PropTypes from 'prop-types';
import { validateEmpty } from '../../utils/validate';

const defaultValidation = {
    email: {
        valid: true,
        message: ''
    },
    password: {
        valid: true,
        message: ''
    }
};

class forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validation: defaultValidation
        };
    }

    onChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    isValid = () => {
        const { isValid, validation } = validateEmpty({
            // Pass items to validate
            //id: this.state.id,
            email: this.state.email,
            password: this.state.password
        });
        this.setState({
            validation: {
                ...this.state.validation,
                ...validation
            }
        });

        return isValid;
    };

    getSubmissionData = () => {
        let { email, password } = { ...this.state };
        this.setState({
            email: '',
            password: ''
        });
        return {
            email,
            password
        };
    };

    render() {
        return (
            <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer body-tabs-shadow-btn">
                <div className="app-container">
                    <div className="h-100 bg-plum-plate bg-animation">
                        <div className="d-flex h-100 justify-content-center align-items-center">
                            <div className="col-md-8">
                                <div
                                    className="mx-auto mb-3"
                                    style={{
                                        height: '36px',
                                        width: '232px'
                                    }}>
                                </div>
                                <div className="app-main">
                                    <div className="app-main__outer">
                                        <span className="d-inline-block mb-2 mr-2">
                                            <h4 className="mt-2">Login</h4>
                                            <form>
                                                <label for="exampleEmail">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email here..."
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                    invalid={
                                                        !this.state.validation.email
                                                            .valid
                                                    }
                                                />
                                                {
                                                    this.state.validation.email
                                                        .message
                                                }
                                                <label for="exampleEmail">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.onChange}
                                                    invalid={
                                                        !this.state.validation
                                                            .password.valid
                                                    }
                                                />
                                                {
                                                    this.state.validation.password
                                                        .message
                                                }
                                                <button
                                                    className="mb-2 mr-2 btn-hover-shine btn btn-focus"
                                                    onClick={() => {
                                                        if (this.isValid()) {
                                                            this.props.onSubmit(
                                                                this.getSubmissionData()
                                                            );
                                                        }
                                                    }}>
                                                    Submit
                                                </button>
                                            </form>
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center text-white opacity-8 mt-3">
                                    Copyright © Koothur Vellattukara 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

forms.propTypes = {
    onSubmit: PropTypes.func
};

export default forms;
