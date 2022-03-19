import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Facebook,
    Instagram,
    Twitter,
    LogoFooter
} from '../../../utils/Svg';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
                Footer
            </>
        );
    }
}

Footer.propTypes = {
    t: PropTypes.func
};

export default withTranslation()(Footer);
