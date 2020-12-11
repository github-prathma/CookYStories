import React, {Component} from 'react'
import '../css/Card.css'
import BusinessIcon from '@material-ui/icons/Business';
import WebIcon from '@material-ui/icons/Web';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class RestaurantCard extends Component {

    render() {

        return (
            <div className="background">
            <div className="card" >
                <div className="card-top">
                    <BusinessIcon /> <span><h5><strong>{this.props.address}</strong></h5></span>
                    {this.props.name}
                    <hr/>
                </div>
                
                <div className="card-bottom">
                    
                    <PhoneIcon /> <strong>{this.props.telephone}</strong>
                    
                    <h5>Price: {this.props.price}</h5>
                    
                    
                    <Button
                    variant="contained"
                    color="primary"
                    href = {"http://" + this.props.website}
                    startIcon={<WebIcon />}>
                        Visit Online
                    </Button>
                </div>
                
            </div>
            </div>
        );
    }
}

export default RestaurantCard;