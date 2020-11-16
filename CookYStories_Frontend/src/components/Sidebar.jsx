import React, {Component} from 'react';
import '../css/Sidebar.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieIcon from '@material-ui/icons/Movie';


export default class Sidebar extends Component {

    render() {
        return (
          
            <div id="side-bar">
              <NearMeIcon></NearMeIcon>
              <RestaurantIcon></RestaurantIcon>
              <MenuBookIcon></MenuBookIcon>
              <MovieIcon></MovieIcon>
            </div>
          
        );
    }
}
