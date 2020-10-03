import React, { Component } from 'react';
import images from '../images'
import './CookYStories.css'
import Grid from '@material-ui/core/Grid';
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
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
            // {
            //     img: images.image5
            // }
        ]
        return (
            <div>
                
                <div className="row">
                    {/* <Grid item xs = {6}> */}
                    <div className="leftColumn">
                        <Carousel className="welcomeSlider" width="100%" autoPlay={true} interval={3500} animation="slide" navButtonsAlwaysVisible={true} fullHeightHover={true}>
                            {
                                items.map( (item, i) => <Item key={i} item={item}/>)
                            }
                        </Carousel>
                    </div>
                       
                    {/* </Grid> */}
                    {/* <Grid className="moto" item xs = {6}> */}
                    <div className="rightColumn">
                        <h2> Welcome to CookYStories!! </h2>
                        <h4> Cook your delicious stories and share with us and make our mouth watery :D..</h4>

                    </div>
                    {/* </Grid> */}
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
