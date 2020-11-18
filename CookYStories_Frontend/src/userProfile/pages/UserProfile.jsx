import React, { Component } from 'react'
import '../css/Profile.css'
import PostPreview from './PostPreview'
import ProfileHeader from './ProfileHeader'

export default class UserProfile extends Component {
  render() {
    return (
      <div className="profilePage">
        <ProfileHeader />
        <PostPreview />
      </div>
    )
  }
}
