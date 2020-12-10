import React, { Component } from 'react'

import {LOAD_CHANNELS} from '../../../backend/ChannelsApis'
import { Query } from 'react-apollo'
import ChannelCard from '../components/ChannelCard'

function LoadChannels () {
    return (
        <Query query = {LOAD_CHANNELS}>
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
                    const channels = data.getAllChannels

                    return (
                        <div className="main_Channel">
                            {
                                channels.map(
                                    channel => <ChannelCard 
                                        key = {channel.id}
                                        channelName = {channel.channelName}
                                        channelLink = {channel.channelLink}
                                        videos = {channel.videos}
                                    />
                                )
                            }
                        </div>
                    );
                }
            }
        </Query>
    );
}

class ChannelPage extends Component {
    render() {
        return (
            <div classNam="channel_outer_container" >
                <div className = "main">
                    <LoadChannels />
                </div>
            </div>
        );
    }
}

export default ChannelPage;