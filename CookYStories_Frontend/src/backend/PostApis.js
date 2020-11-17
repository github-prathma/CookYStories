import {gql} from "apollo-boost"

export const GET_FEED = gql`
query($username: String!) {
    loadFeed(username: $username) {
        description
        createdAt
        byUser {
            username
            firstName
            lastName
        }
        numLikes
        numComments
        comments{
            commentText
            byUser{
                username
                firstName
                lastName
            }
        }
        likedByUsers{
            username
            firstName
            lastName
        }
    }
}`

