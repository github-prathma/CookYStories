import React, { Component } from 'react'
import VideoCard from './VideoCard';
import Button from '@material-ui/core/Button';
import '../css/Channels.css'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core'

class ChannelCard extends Component {

    constructor(props) {
        super()
        
    }
    render() {
        return (
            <div className="outer-background">
                <div classname="channel-main">
                    <div className="channel-title">
                        <a href = {this.props.channelLink}><strong>{this.props.channelName}</strong></a>
                    </div>
                    
                    <div className="videoGallery">
                        <Grid container direction="row">
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
                        </Grid>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ChannelCard;