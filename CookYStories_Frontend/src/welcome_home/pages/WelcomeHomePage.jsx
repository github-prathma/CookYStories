import React, { Component } from 'react';
import images from '../../utils/images'
import '../../mainapp/css/CookStories.css'
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
                img: images.image6
            }
            
        ]
        return (
            
                <div className="row" style = {{height:"100vh"}}>
                    <div className="leftColumn" style = {{height:"100vh"}}>
                        <Carousel className="welcomeSlider" autoPlay={true} interval={3500} animation="slide" navButtonsAlwaysVisible={true} fullHeightHover={true}>
                            {
                                items.map( (item, i) => <Item className="carouselItem" key={i} item={item}/>)
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
