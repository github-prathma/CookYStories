import React, { Component } from 'react'
import '../css/userprofile-css/PostPreview.css'
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import TurnedInRoundedIcon from '@material-ui/icons/TurnedInRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Gallery from './userStats/Gallery'
import Follow from './userStats/Follow';
import Following from './userStats/Following'

export default class PostPreview extends Component {
  constructor() {
    super();
    this.state = {
      showGalleryComponent: true,
      showFollowComponent: false,
      showFollowingComponent: false
    };
    this.handleGalleryClick = this.handleGalleryClick.bind(this);
    this.handleFollowClick = this.handleFollowClick.bind(this);
    this.handleFollowingClick = this.handleFollowingClick.bind(this);

  }

  handleGalleryClick() { 
    this.setState({
      showGalleryComponent: true,
      showFollowComponent: false,
      showFollowingComponent: false
    })
  };
  handleFollowClick() { 
    this.setState({
      showGalleryComponent: false,
      showFollowComponent: true,
      showFollowingComponent: false
    })
  };
  handleFollowingClick() { 
    this.setState({
      showGalleryComponent: false,
      showFollowComponent: false,
      showFollowingComponent: true
    })
  };


  render() {
    return (
      <div>
        <div className="profileStates">
          <div className='statsData statsData--active' onClick={this.handleGalleryClick} >
            <ViewComfyRoundedIcon/>
          <h5>Recipes</h5>
          </div>
          <div className='statsData' onClick={this.handleFollowClick}>
          <HowToRegIcon />
          <h5>Followers</h5>
          </div>
          <div className='statsData' onClick={this.handleFollowingClick}>
          <FavoriteRoundedIcon />
            <h5>Following</h5>
          </div>
          <div className='statsData'>
          <TurnedInRoundedIcon />
          <h5>Saved</h5>
          </div>          
        </div>
        {this.state.showGalleryComponent ? <Gallery /> : null}
        {this.state.showFollowComponent ? <Follow /> : null}
        {this.state.showFollowingComponent ? <Following /> : null}        
      </div>
    )
  }
}
