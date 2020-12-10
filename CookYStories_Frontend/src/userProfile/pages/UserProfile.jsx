import React, { Component } from 'react'
import '../css/Profile.css'
import PostPreview from './PostPreview'
import ProfileHeader from './ProfileHeader'
import {Query} from 'react-apollo'
import {GET_USER_PROFILE} from '../../backend/UserProfileApis'
import AuthenticationService from '../../backend/AuthenticationService'

function LoadProfile(props) {
  return (
    <Query query={GET_USER_PROFILE} variables={{loggedInUser:AuthenticationService.getLoggedInUser(), toFollowUser:props.username}}>
        { 
          ({loading, error, data}) => 
            {
              if(loading) {
                return(
                <span>Loading ... </span>
                )
              }
              if(error) {
                return(
                <span>Error ... </span> 
                )
              }

              console.log(data)
              const profile = data.getUserProfile

              if (profile.profileImageUrl != null && profile.profileImageUrl != "") {
                AuthenticationService.setProfileImage(profile.profileImageUrl);
              }

              if(data) {
                return (
                  <div>
                    <div></div>
                    
                    <div className="profilePage" style = {{height:"100vh"}}>
                      <ProfileHeader username={profile.username} 
                        firstName={profile.basicInfo.firstName} lastName={profile.basicInfo.lastName} 
                        city={profile.basicInfo.city} country={profile.basicInfo.country} bio={profile.basicInfo.bioDescription}
                        profileImageUrl={profile.profileImageUrl}
                        />
                      <PostPreview username={profile.username} 
                        firstName={profile.basicInfo.firstName} lastName={profile.basicInfo.lastName}
                        city={profile.basicInfo.city} country={profile.basicInfo.country}
                        profileImageUrl={profile.profileImageUrl}
                        followers={profile.followers} following={profile.following} posts={profile.posts} 
                        numFollowers={profile.numFollowers} numFollowing={profile.numFollowing} numPosts={profile.numPosts}/>
                    </div>
                  </div>
                  )
              }
                
            }
        } 
      </Query>

  )
} 


export default class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.match.params.name,
    }
  }
  render() {
    return (
      <LoadProfile username={this.state.username}/>    
    )
  }
}
