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
                return (
                    // console.log("hi testing api")

                    <div className="feed" id="feed-page">
                    <StoryReel />
                    {/* <Sidebar /> */}
                    <div id="page-wrap">
                        <PostSend />
                        {
                            this.state.posts.map (
                                post => <Post
                                profilePic={rushang}
                                message={post.description}
                                timestamp={post.createdAt}
                                username={post.byUser.username}
                                image='https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg'
                            />
                            )

                        }
                    
                    {/* <Post 
                        profilePic={rushang}
                        message='This is Message'
                        timestamp='This is for TimeStamp'
                        username='rushang2413'
                        image='https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg'
                    />
                    <Post 
                        profilePic={rushang}
                        message='This is Message'
                        timestamp='This is for TimeStamp'
                        username='rushang2413'
                    /> */}
                    </div>  
                    </div>              
                )
            }
        }
    </Query>

    // const {loading, error, data} = useQuery(GET_FEED, {
    //     variables: {
    //         username: props.username
    //     },
    // })

    // if (loading) {
    //     return <span>Loading....</span>
    // }

    // return (
    //     console.log(data)
    // )
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

            <div>
                <LoadFeed username={this.state.username}/>
            </div>
            {/* <div className="feed" id="feed-page">
                <StoryReel />
                 <Sidebar /> 
                <div id="page-wrap">
                    <PostSend />
                    {
                        this.state.posts.map (
                            post => <Post
                            profilePic={rushang}
                            message={post.description}
                            timestamp={post.createdAt}
                            username={post.byUser.username}
                            image='https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg'
                            />
                        )

                    }
                    
                     <Post 
                        profilePic={rushang}
                        message='This is Message'
                        timestamp='This is for TimeStamp'
                        username='rushang2413'
                        image='https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg'
                    />
                    <Post 
                        profilePic={rushang}
                        message='This is Message'
                        timestamp='This is for TimeStamp'
                        username='rushang2413'
                    /> 
                </div>
            </div>    */}
            </div>

        )
    }
}