import React, { Component } from 'react'
import '../css/Feed.css'
import Post from '../components/Post'
import PostSend from '../components/PostSend'
import StoryReel from '../components/StoryReel'
import rushang from '../../utils/Images/rushang.PNG'
import Sidebar from '../components/Sidebar'
import {GET_FEED} from '../../backend/FeedApis.js'
import { Query } from 'react-apollo'

import Card from '../../mainapp/WebScrapers/components/Card'
import AuthenticationService from '../../backend/AuthenticationService'



function LoadFeed(props) {
    
    return (
    <Query query={GET_FEED} variables={{username: props.username}}>
        {
            ({loading, error, data}) => {

                if (loading) {
                    return (
                        <span>loading....</span>
                    )
                }

                if (error) {
                    return (
                        <span>error....</span>
                    )
                }
                console.log(data)
                const posts = data.loadFeed
                
                return (

                    <div className="feed">
                    
                        <div>
                            
                            <PostSend />
                            {
                                
                                posts.map (
                                    
                                    post => <Post
                                    key={post.id}
                                    post_id = {post.id}
                                    profilePic={post.byUser.profileImageUrl}
                                    message={post.description}
                                    timestamp={post.createdAt}
                                    id={props.username}
                                    username={post.byUser.username}
                                    userData={post.byUser}
                                    image={post.imageUrl}
                                    createdAt={post.createdAt}
                                />
                                )
                            }
                        
                        </div>  
                    </div>              
                )
            }
        }
    </Query>
    )
}

export default class Feed extends Component {

    constructor(props) {
        super(props)
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);

        this.state =
            {
                //all posts
                username: props.match.params.name,
                posts: []
            }
        
    }

    modalOpen() {
        this.setState({ 
            showModal: true 
        });
    }
    
    modalClose() {
        this.setState({
            showModal: false
        });
    }

    onFieldChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.refresh) {
    //         return <LoadFeed username={AuthenticationService.getLoggedInUser()} />
    //         this.setState({refres:false})
    //     }
    //     return <LoadFeed username={AuthenticationService.getLoggedInUser()} />
    // }



    render() {

        return (
            <div className="outer-container">
                <div className="main">
                    <div className="col-sm-2">
                        <Sidebar />
                    </div>
                    <div className="col-sm">
                        <StoryReel />   
                    </div>
                    
                </div>

                <div>
                    <LoadFeed username={this.state.username}/>
                    
                </div>
            </div>
        )
    }
}

