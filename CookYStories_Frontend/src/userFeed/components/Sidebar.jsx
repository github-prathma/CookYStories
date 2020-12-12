import React, {Component} from 'react';
import {useState} from 'react';
// import Modal from 'react-modal';
// import GoogleMapReact from 'google-map-react';
import '../css/Sidebar.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import SidebarRow from './SidebarRow'
import { Grid } from '@material-ui/core';
import Channels from './Channels'
import NearMe from './NearMe'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

class Sidebar extends Component {

  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.channelLink = this.channelLink.bind(this);

    this.state = {
      modal: false,
    };
  }

  static defaultProps = {
    center: {
      lat: 19.075983,
      lng: 72.877655
    },
    zoom: 15
  };

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({modal: false});
  };

  channelLink() {
    this.props.history.push('/channels');
  }

  restaurantLink() {
    this.props.history.push('/restaurants');
  }


    render() {
        return (
          <div className="sidebar">
           <Grid item xs={12} spacing={3}>

              <div className='sidebarRow'>
                <NearMeIcon />
                <h6 onClick={e => this.modalOpen(e)}>NEAR ME</h6>
                <NearMe showModal={this.state.modal} closeModal={e => this.modalClose(e)} />
              </div>
              <hr />
              <div className='sidebarRow' >
                <RestaurantIcon />
                <Typography onClick={e => this.restaurantLink(e)}>RESTAURANTS</Typography>
              </div>
              <hr/>
              <div className='sidebarRow'>
                <FeaturedPlayListIcon />
                <Typography onClick={e => this.channelLink(e)}>CHANNELS</Typography>
              </div>
           </Grid>
           
          </div>
        );
    }

    
}

export default withRouter(Sidebar);
