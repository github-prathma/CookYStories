import { Card } from '@material-ui/core';
import React, {Component} from 'react'
import '../css/Card.css'

class RestaurantCard extends Component {

    render() {

        return (
            <div className="card" >
                <div className="card_top">
                    <h3>{this.props.name}</h3>
                </div>
                
                <div className="card_bottom">
                    <p><h4><strong>Address: </strong>{this.props.address}</h4></p>
                    <p><h4><strong>Website: </strong>{this.props.website}</h4></p>
                    <p><h4><strong>Telephone: </strong>{this.props.telephone}</h4></p>
                    <p><h4><strong>Price: </strong>{this.props.price}</h4></p>
                </div>
                
            </div>
        );
    }
}

export default RestaurantCard;