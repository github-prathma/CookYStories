import React, { Component } from 'react'
import burger from '../../utils/slider_images/burgers.jpg'
import breakfast from '../../utils/slider_images/breakfast.jpg'
import hamburger from '../../utils/slider_images/hamburger.jpg'
import platter from '../../utils/slider_images/platter.jpg'
import sandwich from '../../utils/slider_images/sandwich.jpg'
import '../css/Gallery.css'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state={
      posts : this.props.posts
    }
  }

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
