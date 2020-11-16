import React, { Component } from 'react'
import '../css/userprofile-css/PostPreview.css'
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import TurnedInRoundedIcon from '@material-ui/icons/TurnedInRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Gallery from './Gallery'

export default class PostPreview extends Component {
  render() {
    return (
      <div>
        <div className="profileStates">
          <div className='statsData statsData--active'>
          <ViewComfyRoundedIcon />
          <h5>Recipes</h5>
          </div>
          <div className='statsData'>
          <HowToRegIcon />
          <h5>Followers</h5>
          </div>
          <div className='statsData'>
          <FavoriteRoundedIcon />
          <h5>Following</h5>
          </div>
          <div className='statsData'>
          <TurnedInRoundedIcon />
          <h5>Saved</h5>
          </div>          
        </div>
        <Gallery />
        
      </div>
    )
  }
}
