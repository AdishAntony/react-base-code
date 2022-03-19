import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pumpkin from '../../assets/images/pumpkin.png';
import Quality from '../../assets/images/quality.png';
import AboutUs from '../../assets/images/about-banner.png';

class About extends Component {
    componentDidMount() { }

    render() {
        return (
            <>
                About page
            </>
        );
    }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(About);
