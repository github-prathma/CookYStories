import React, {Component} from 'react'
import '../css/userfeed-css/Sidebar.css'
import { Avatar } from '@material-ui/core'
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';
import src from '../Images/rushang.PNG'
import SidebarRow from './SidebarRow'


export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>                
                <SidebarRow Icon={NearMeIcon} title='Near me' />
                <SidebarRow Icon={MenuBookIcon} title='Ingredients' />
                <SidebarRow Icon={RestaurantIcon} title='Restaurants' />
                <SidebarRow Icon={MovieIcon} title='Channels' />
            </div>
        )
    }
}