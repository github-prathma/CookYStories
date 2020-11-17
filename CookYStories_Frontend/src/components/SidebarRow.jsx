import { Avatar, Icon } from '@material-ui/core'
import React, {Component} from 'react'
import '../css/SidebarRow.css'
import src from '../Images/rushang.PNG'
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';

export default class SidebarRow extends Component {
    render() {
        return (
            <div className='sidebarRow'>
                {this.props.statusImage}
                <h6>{this.props.title}</h6>
                
                
            </div>
        )
    }
}
