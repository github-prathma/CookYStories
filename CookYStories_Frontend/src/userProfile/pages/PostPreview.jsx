import React, { Component } from 'react'
import '../css/PostPreview.css'
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import TurnedInRoundedIcon from '@material-ui/icons/TurnedInRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Badge from '@material-ui/core/Badge';
import Gallery from '../components/Gallery'
import Follow from '../components/Follow';
import Following from '../components/Following'

export default class PostPreview extends Component {
  constructor(props) {
    super(props);
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
      <div className="outer-container">
        <div className="profileStates">
          <div className='statsData statsData--active' onClick={this.handleGalleryClick} >
          <Badge badgeContent={6} color="primary">
            <ViewComfyRoundedIcon/>
            </Badge>
          <h5>Recipes</h5>
          </div>
          <div className='statsData' onClick={this.handleFollowClick}>
          <Badge badgeContent={8} color="primary">
          <HowToRegIcon />
          </Badge>
          <h5>Followers</h5>
          </div>
          <div className='statsData' onClick={this.handleFollowingClick}>
          <Badge badgeContent={7} color="primary">
          <FavoriteRoundedIcon />
          </Badge>
            <h5>Following</h5>
          </div>
          <div className='statsData'>
          <TurnedInRoundedIcon />
          <h5>Saved</h5>
          </div>          
        </div>
          {this.state.showGalleryComponent ? <Gallery posts={this.props.posts}/> : null}
          {this.state.showFollowComponent ? <Follow followers={this.props.followers}/> : null}
          {this.state.showFollowingComponent ? <Following following={this.props.following}/> : null}  
        
              
      </div>
    )
  }
}
