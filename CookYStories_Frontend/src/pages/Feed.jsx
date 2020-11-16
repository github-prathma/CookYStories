import React, { Component } from 'react'
import '../css/Feed.css'
import Post from '../components/Post'
import PostSend from '../components/PostSend'
import StoryReel from '../components/StoryReel'
import rushang from '../Images/rushang.PNG'
import Sidebar from '../components/Sidebar'
// import {GET_FEED as GET_FEED} from '../backend/PostApis.js'
// import { useQuery } from '@apollo/client'
import { useQuery } from 'react-apollo-hooks'
import { Query } from 'react-apollo'
import {gql} from "apollo-boost"

export const GET_FEED = gql`
query LoadFeed($username: String!) {
    loadFeed(username: $username) {
        description
        createdAt
        byUser {
            username
            firstName
            lastName
        }
    }
}`
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
    //     this.refresh()
    // }

    refresh() {
        // <Query query={GET_FEED} variables={{username: this.state.username}}>
        //     {
        //         ({loading, error, data}) => {
        //             this.setState ({
        //                 posts: data
        //             })
        //         }
        //     }

        // </Query>
        const {loading, error, data} = useQuery(GET_FEED, {
            variables: {
                username: this.state.username
            },
        })

        if (loading) {
            return <span>Loading....</span>
        }

        // return (
        //     console.log("jhdfhfdhd")
        // )

        /*

        return (
            <div>

            <Query query={GET_FEED} variables = {{username: this.state.username}}>
                {
                   ({data, loading}) => {
                        if (loading) {
                            return (
                                <span>Loading....</span>

                            )
                        }
                        return (
                            console.log("jhdfhfdhd")
                            // this.setState ({
                                
                            //     posts: data
                            // })
                        )
                   }
                }

            </Query>
            </div>

            
        )*/
        

    }

    render() {
        const {loading, error, data} = useQuery(GET_FEED, {
            variables: {
                username: this.state.username
            },
        })

        if (loading) {
            return <span>Loading....</span>
        }

        return (
            
            <div className="feed" id="feed-page">
                <StoryReel />
                {/* <Sidebar /> */}
                <div id="page-wrap">
                    <PostSend />
                    {
                        data.map (
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
