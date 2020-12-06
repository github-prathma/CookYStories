import React, {Component} from 'react';
import '../css/Sidebar.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VideocamIcon from '@material-ui/icons/Videocam'
import SidebarRow from './SidebarRow'
import { Grid } from '@material-ui/core';

export default class Sidebar extends Component {

    render() {
        return (
          <div className="sidebar">
           <Grid item xs={12} spacing={3}>
              <SidebarRow statusImage={<NearMeIcon />} title="Near Me" />
              <SidebarRow statusImage={<RestaurantIcon />} title="Restaurants" />
              <SidebarRow statusImage={<MenuBookIcon />} title="Menu" />
              <SidebarRow statusImage={<VideocamIcon />} title="Live Cooking" />
           </Grid>
              
            
            
          </div>
        );
    }
}

