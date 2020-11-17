import React, { Component } from 'react'
import '../css/userprofile-css/Profile.css'
import PostPreview from './PostPreview'
import ProfileHeader from './ProfileHeader'

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <PostPreview />
      </div>
    )
  }
}
