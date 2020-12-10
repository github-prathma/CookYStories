import {gql} from "apollo-boost"

export const LOAD_CHANNELS = gql`
query {
    getAllChannels {
        id
        channelName
        channelLink
        numVideos
        videos {
            id
            channel 
            views
            age
            title
            tags 
            link
            thumbnailUrl
        }
        
    }
}
`