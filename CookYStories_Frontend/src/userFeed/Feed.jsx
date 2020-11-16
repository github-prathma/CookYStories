import React, { Component } from 'react'
import '../css/userfeed-css/Feed.css'
import Post from './Post'
import PostSend from './PostSend'
import StoryReel from './StoryReel'
import rushang from '../Images/rushang.PNG'


export default class Feed extends Component {
    render() {
        return (
            <div className="feed">
                <StoryReel />
                <PostSend />
                
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
        )
    }
}
