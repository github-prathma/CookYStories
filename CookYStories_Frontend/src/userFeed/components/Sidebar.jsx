import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../css/Sidebar.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VideocamIcon from '@material-ui/icons/Videocam';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import SidebarRow from './SidebarRow'
import { Grid } from '@material-ui/core';
import Channels from './Channels'
import NearMe from './NearMe'

export default class Sidebar extends Component {

    render() {
        return (
          <div className="sidebar">
           <Grid item xs={12} spacing={3}>

              <SidebarRow statusImage={<NearMeIcon />} title="NEAR ME" /> {onclick = <NearMe />}
              <hr />
              <SidebarRow statusImage={<RestaurantIcon />} title="RESTAURANTS" />
              <hr />
              <SidebarRow statusImage={<FeaturedPlayListIcon />} title="CHANNELS" /> 
              <Channels statusImage={<KitchenIcon />} title="Gordon Ramsay" /> 
              <Channels statusImage={<KitchenIcon />} title="Chef Ranveer" /> 
              <Channels statusImage={<KitchenIcon />} title="Your Food Lab" /> 
              <Channels statusImage={<KitchenIcon />} title="Kabita's Kitchen" /> 
              <Channels statusImage={<KitchenIcon />} title="Hebbar's Kitchen" /> 
              
              {/* <SidebarRow statusImage={<VideocamIcon />} title="Live Cooking" /> */}
           </Grid>
           
          </div>
        );
    }
}


