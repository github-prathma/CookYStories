import React, {Component} from 'react';
import {useState} from 'react';
import Modal from 'react-modal';
import GoogleMapReact from 'google-map-react';
import '../css/Sidebar.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import SidebarRow from './SidebarRow'
import { Grid } from '@material-ui/core';
import Channels from './Channels'
import NearMe from './NearMe'
import Button from '@material-ui/core/Button';
import '../css/SidebarRow.css'


// const [modalIsOpen,setIsOpen] = React.useState(false);
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);

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


  // handleChange(e) {
  //   // const target = e.target;
  //   // const name = target.name;
  //   // const value = target.value;

  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  // handleSubmit(e) {
  //   // const { first_name, last_name, user_name, city, country, bio } = this.state;
  //   this.setState({ name: this.state.modalInputName });
  //   this.modalClose();
  // }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modal: false
    });
  }


    render() {
        return (
          <div className="sidebar">
           <Grid item xs={12} spacing={3}>

              <div className='sidebarRow' onClick={e => this.modalOpen(e)}>
                <NearMeIcon />
                <h6>NEAR ME</h6>
                <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
                <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
                </Modal>
                
                <hr />
              </div>

              <div className='sidebarRow'>
                <RestaurantIcon />
                <h6>RESTAURANTS</h6>
                <hr/>
              </div>

              <div className='sidebarRow'>
                <FeaturedPlayListIcon />
                <h6>CHANNELS</h6>
              </div>

              <Channels statusImage={<KitchenIcon />} title="Gordon Ramsay" /> 
              <Channels statusImage={<KitchenIcon />} title="Chef Ranveer" /> 
              <Channels statusImage={<KitchenIcon />} title="Your Food Lab" /> 
              <Channels statusImage={<KitchenIcon />} title="Kabita's Kitchen" /> 
              <Channels statusImage={<KitchenIcon />} title="Hebbar's Kitchen" /> 
              
           </Grid>
           
          </div>
        );
    }

    linkClicked = () => {
      this.props.history.push('/signup');
    }
}


