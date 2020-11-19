import {gql} from "apollo-boost"

// load feed of user
export const GET_FEED = gql`
query($username: String!) {
    loadFeed(username: $username) {
        id
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
        imageUrl
    }
}`

// // create post

// export const CREATE_POST = gql `

//         mutation ($byUsername: String!, $description: String!) {
//             addPost(input:{
//                 description: $description
//                 byUsername: $byUsername
//             }) 
//         }`


// // update post
export const UPDATE_POST = gql `
mutation ($post_id:String!, $description:String!, $byUsername:String!){
    updatePost(input: {
        id:$post_id
        description:$description
        byUsername:$byUsername
    }) {
        createdAt
        description
        byUser{
            username 
            firstName
            lastName
        }
        numLikes
        numComments
        likedByUsers{
            username
            firstName
            lastName
        }
        comments{
            commentText
            createdAt
            byUser{
                username
                firstName
                lastName
            }
        }
    }
}
`

// // delete post
// export const DELETE_POST = gql `
// mutation ($post_id:String!){
//     deletePost(id:"$post_id)
// }`


// // like unlike post
// export const LIKE_UNLIKE_POST = gql `
// mutation ($post_id:String!, $byUser:String! , $isLike:Boolean!){
//     likeUnlikePost(input:{
//         id: $post_id
//         byUsername:$byUser
//         isLike:$isLike
//     }) 
// }`

// // get post by id
// export const GET_POST_BY_ID = gql `
// query ($post_id:String!){
//     getPost(id:$post_id) {
//         createdAt
//         description
//         byUser{
//             username 
//             firstName
//             lastName
//         }
//         numLikes
//         numComments
//         likedByUsers{
//             username
//             firstName
//             lastName
//         }
//         comments{
//             commentText
//             createdAt
//             byUser{
//                 username
//                 firstName
//                 lastName
//             }
//         }
//     }
// }

// `

// // search posts
// export const SEARCH_POST_BY_QUERY = gql `
// query ($query:String!) {
//     searchPostsByQuery (query:$query) {
//         createdAt
//         description
//         byUser{
//             username 
//             firstName
//             lastName
//         }
//         numLikes
//         numComments
//         likedByUsers{
//             username
//             firstName
//             lastName
//         }
//         comments{
//             commentText
//             createdAt
//             byUser{
//                 username
//                 firstName
//                 lastName
//             }
//         }
//     }
// }`
