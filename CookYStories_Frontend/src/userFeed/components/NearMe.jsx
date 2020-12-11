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
import Button from '@material-ui/core/Button';
import React from 'react'

export const NearMe = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal d-block" : 'modal d-none';
    return (
      <div className={showHideClassName}>
        <div className="modal-container">
          {/* {children} */}
          <div className="button">
          <Button
            variant="contained"
            color="secondary"
            className='modal-close'
            onClick={handleClose}
            startIcon={ArrowBackIosOutlinedIcon}
            >
              Back
        </Button>
        </div>
        </div>
        
      </div>
    )
  }
  export default NearMe;