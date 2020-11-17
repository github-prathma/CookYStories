import React, { Component } from 'react'
import '../css/Feed.css'
import Post from '../components/Post'
import PostSend from '../components/PostSend'
import StoryReel from '../components/StoryReel'
import rushang from '../Images/rushang.PNG'
import Sidebar from '../components/Sidebar'
import {GET_FEED} from '../backend/PostApis.js'
// import { useQuery } from 'react-apollo-hooks'
import { Query } from 'react-apollo'


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

                    <div className="feed" id="feed-page">
                    <StoryReel />
                    {/* <Sidebar /> */}
                    <div id="page-wrap">
                        <PostSend />
                        {
                            posts.map (
                                post => <Post
                                profilePic={rushang}
                                message={post.description}
                                timestamp={post.createdAt}
                                username={post.byUser.username}
                                image='https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg'
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

        this.state =
            {
                //all posts
                username: 'maitreyastark',
                posts: []
            }
        
    }


    // componentDidMount() {
    //     // this.refresh()
    //     return (
    //         <div>
    //             <LoadFeed/>
    //         </div>
    //     )
    // }

    // refresh() {
        // return <LoadFeed/>
    // }

    render() {

        return (
            <div>
            <div className="main">
                <Sidebar />
                <div className="story-reel">
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