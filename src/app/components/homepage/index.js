/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../layout/footer/';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Homepage
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    //commodityList: state.commodityReducer.commodityList
});

export default connect(mapStateToProps)(HomePage);
