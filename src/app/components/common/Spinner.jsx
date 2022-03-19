import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spinner extends Component {
    render() {
        return (
            <>
                <div className="lds-default" hidden={!this.props.show}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </>
        );
    }
}

Spinner.propTypes = {
    show: PropTypes.bool
};

export default Spinner;

// Loader types :-
// Audio	<Loader type="Audio" color="#00BFFF" height={80} width={80} />
// Ball-Triangle	<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
// Bars	<Loader type="Bars" color="#00BFFF" height={80} width={80} />
// Circles	<Loader type="Circles" color="#00BFFF" height={80} width={80}/>
// Grid	<Loader type="Grid" color="#00BFFF" height={80} width={80} />
// Hearts	<Loader type="Hearts" color="#00BFFF" height={80} width={80} />
// Oval	<Loader type="Oval" color="#00BFFF" height={80} width={80} />
// Puff	<Loader type="Puff" color="#00BFFF" height={80} width={80} />
// Rings	<Loader type="Rings" color="#00BFFF" height={80} width={80} />
// TailSpin	<Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
// ThreeDots	<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />

// Loader propTypes available :-
// visible	String or boolean	false	Show/ Hide the loader as required.
// type	    String	"Audio"	Type of spinner you want to display. View the type in Types of Spinner section.
// height	Number	80	Height prop define the height of the svg spinner. Default height is 80px.
// width	Number	80	Width prop define the width of the spinner.
// color	String	"Blue"	color prop is for adding color to the spinner
// secondaryColor	String	"Grey"	secondaryColor prop for now is available on Plane and MutatingDots loaders
// timeout	Number	0	Duration in milliseconds after which spinner is disabled
// radius	Number	value varies	Set radius if the loader has a circle element in it
