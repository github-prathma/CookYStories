import {gql} from "apollo-boost"

// load feed of user
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

// create post

const CREATE_POST = gql `

        mutation ($byUsername: String!, $description: String!) {
            addPost(input:{
                description: $description
                byUsername: $byUsername
            }) 
        }`


// update post

// delete post

// like unlike post

// get post by id

// search posts