import React, { Component } from 'react'
import VideoCard from './VideoCard';

import '../css/Channels.css'

class ChannelCard extends Component {

    constructor(props) {
        super()
        
    }
    render() {
        return (
            <div classname="channel_main">
                <div className="channel_title">
                    <h3>{this.props.channelName}</h3>
                    <a href = {this.props.channelLink} >Go to Channel</a>
                </div>
                <div className="videoGallery full">
                    {
                        this.props.videos.map (
                            video => 
                            <VideoCard 
                                key = {video.id}
                                views = {video.views}
                                age = {video.age}
                                thumbnailUrl = {video.thumbnailUrl}
                                title = {video.title}
                            />
                        )
                    }

                </div>
            </div>
        );
    }
}

export default ChannelCard;