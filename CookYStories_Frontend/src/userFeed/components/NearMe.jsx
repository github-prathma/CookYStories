import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../css/NearMe.css'
import { Search } from '@material-ui/icons';
 
const LocationPin = ({ text }) => (
    <div className="pin">
      <LocationOnIcon />
      <p className="pin-text" style={{fontSize: '1.2em'}}>{text}</p>
    </div>
  )
 
class NearMe extends Component {

  static defaultProps = {
    center: {
        lat: 19.222811,
        lng: 73.158463
    },
    zoom: 15
  };
 
  render() {
    let showHideClassName = this.props.showModal ? " modal d-block" : 'modal d-none';
    return (
      
      
      
      <div className = {showHideClassName} style={{height:'50vh', width:'70%'}}>
          <div className="modal-container">
            <div className="button">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.closeModal}
                    startIcon={<ArrowBackIosOutlinedIcon />}>
                </Button>
            </div>
            <GoogleMapReact
            bootstrapURLKeys={{ key:''}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <LocationPin
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Location"
            />
            {/* <SearchBox /> */}
            </GoogleMapReact>

        
      </div>
      </div>
      
    );
  }
}
 
export default NearMe;

