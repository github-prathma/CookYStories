import React, {Component} from 'react';
import '../css/Sidebar.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';
import SidebarRow from './SidebarRow'

export default class Sidebar extends Component {

    render() {
        return (
          <div className="sidebar">
            <SidebarRow statusImage={<NearMeIcon />} title="Near Me" />
            <SidebarRow statusImage={<RestaurantIcon />} title="Restaurants" />
            <SidebarRow statusImage={<MenuBookIcon />} title="Menu" />
            <SidebarRow statusImage={<MovieIcon />} title="Movies" />

          </div>
        );
    }
}


