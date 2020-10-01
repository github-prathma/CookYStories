import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './slider_images/breakfast.jpg'
import image2 from './slider_images/burgers.jpg'
import image3 from './slider_images/hamburger.jpg'
import image4 from './slider_images/platter.jpg'
import image5 from './slider_images/sandwich.jpg'
import './CookYStories.css'

class WelcomeHomePage extends Component {
    render() {
        return (
            <div>
                <AliceCarousel autoPlay dotsDisabled={true} autoPlayInterval="2000">
                    <img src={image1} className="sliderimg"/>
                    <img src={image2} className="sliderimg"/>
                    <img src={image3} className="sliderimg"/>
                    <img src={image4} className="sliderimg"/>
                    <img src={image5} className="sliderimg"/>
                </AliceCarousel>
            </div>
        );
    }
}

export default WelcomeHomePage;
