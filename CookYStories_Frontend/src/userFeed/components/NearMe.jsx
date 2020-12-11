// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//     const showHideClassName = show ? " modal d-block" : 'modal d-none';
//   render() {
//     return (
//         <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 19.075983,
//             lng: 72.877655
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBEFspxaaFdg-dhYys7Bg9y2MaH6ixh83E'
// })(MapContainer);  
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
import '../css/NearMe.css'
 
const LocationPin = ({ text }) => (
    <div className="pin">
      <LocationOnIcon className="pin-icon" />
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
            <div className="button">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.closeModal}
                    startIcon={<ArrowBackIosOutlinedIcon />}>
                </Button>
            </div>
            {/* <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyDoxkud2W9Wu0BUct0PW_1lpWeKfHjRdtQ'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <LocationPin
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Location"
            />
            
            
            
                  
            </GoogleMapReact>
             */}
        
      </div>
      
      
    );
  }
}
 
export default NearMe;

