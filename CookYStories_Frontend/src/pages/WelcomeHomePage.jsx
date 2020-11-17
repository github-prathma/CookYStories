import React, { Component } from 'react';
import images from '../images'
import '../css/CookStories.css'
import {Paper} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

class WelcomeHomePage extends Component {
    render() {
        var items = [
            {
                img: images.image1
            },
            {
                img: images.image2
            },
            {
                img: images.image3
            },
            {
                img: images.image4
            }
            
        ]
        return (
            
                <div className="row">
                    <div className="leftColumn">
                        <Carousel className="welcomeSlider" width="100%" autoPlay={true} interval={3500} animation="slide" navButtonsAlwaysVisible={true} fullHeightHover={true}>
                            {
                                items.map( (item, i) => <Item key={i} item={item}/>)
                            }
                        </Carousel>
                    </div>
                     
                    <div className="rightColumn">
                        <h2> Welcome to CookYStories!! </h2>
                        <h4 className="subtitle"> Cook your delicious stories and share with us..</h4>

                    </div>
                </div>

                
        );
    }
}

function Item(props) {
    return (
        <Paper>
            <img className="d-block w-100"  src={props.item.img} alt=""/>
        </Paper>
    )
}

export default WelcomeHomePage;
