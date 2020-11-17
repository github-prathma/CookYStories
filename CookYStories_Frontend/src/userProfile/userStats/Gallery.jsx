import React, { Component } from 'react'
import burger from '../../slider_images/burgers.jpg'
import breakfast from '../../slider_images/breakfast.jpg'
import hamburger from '../../slider_images/hamburger.jpg'
import platter from '../../slider_images/platter.jpg'
import sandwich from '../../slider_images/sandwich.jpg'
import '../../css/userprofile-css/Gallery.css'

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
          <img className="item" src={burger} alt="img" />
          <img className="item" src={breakfast} alt="img" />
          <img className="item" src={hamburger} alt="img" />
          <img className="item" src={platter} alt="img" />
          <img className="item" src={sandwich} alt="img" />
          <img className="item" src={burger} alt="img" />          
        </div>
    )
  }
}
