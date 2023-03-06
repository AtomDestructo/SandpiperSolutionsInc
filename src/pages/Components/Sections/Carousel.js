import React, { Component } from 'react';

export class DemoCarousel extends Component {
    render() {
        return (
			<div class="container">
			<div class="carousel">
				<div class="carousel__face"><span>This is something</span></div>
				<div class="carousel__face"><span>Very special</span></div>
				<div class="carousel__face"><span>Special is the key</span></div>
				<div class="carousel__face"><span>For you</span></div>
				<div class="carousel__face"><span>Just give it</span></div>
				<div class="carousel__face"><span>A try</span></div>
				<div class="carousel__face"><span>And see</span></div>
				<div class="carousel__face"><span>How IT Works</span></div>
				<div class="carousel__face"><span>Woow</span></div>
			</div>
			</div>
        );
    }
}

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>