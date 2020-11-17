import React, { Component } from 'react'
import burger from '../slider_images/burgers.jpg'
import breakfast from '../slider_images/breakfast.jpg'
import hamburger from '../slider_images/hamburger.jpg'
import platter from '../slider_images/platter.jpg'
import sandwich from '../slider_images/sandwich.jpg'
import '../css/userprofile-css/Gallery.css'

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
          <img className="item" src={burger} />
          <img className="item" src={breakfast} />
          <img className="item" src={hamburger} />
          <img className="item" src={platter} />
          <img className="item" src={sandwich} />
          <img className="item" src={burger} />          
        </div>
    )
  }
}
