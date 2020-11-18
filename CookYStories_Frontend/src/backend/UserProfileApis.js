import {gql} from "apollo-boost"

// //get profile
// export const GET_USER_PROFILE = gql `
// query ($loggedInUser:String!, $toLookUser:String!) {
//     getUserProfile(input:{loggedInUser:$loggedInUser toFollowUser:$toLookUser}){
//         username
//         basicInfo{
//             firstName
//             lastName
//             city
//             country
//             bioDescription
//         }
//         numPosts
//         numFollowers
//         numFollowing
//         posts{
//             description
//             createdAt
//             byUser {
//                 username
//                 firstName
//                 lastName
//             }
//             numLikes
//             numComments
//             comments{
//                 commentText
//                 createdAt
//                 byUser{
//                     username
//                     firstName
//                     lastName
//                 }
//             }
//             likedByUsers{
//                 username
//                 firstName
//                 lastName
//             }
//         }
        
//         followers {
//             username
//             firstName
//             lastName
//         }
//         following{
//             username
//             firstName
//             lastName
//         }
//     }
// }
// `

// //report profile
// export const REPORT_USER_PROFILE = gql `
// mutation ($reportedUser:String!, $reportedBy:String!){
//     reportUser(input:{
//         username:$reportedUser
//         reportedBy:$reportedBy
//     })
// }`

// // edit profile


// //get all posts of userprofile
// export const GET_ALL_POSTS_FOR_USER = gql `
// query ($username:String!) {
//     getPosts(username:$username) {
//         description
//         createdAt
//         byUser {
//             username
//             firstName
//             lastName
//         }
//         numLikes
//         numComments
//         comments{
//             commentText
//             createdAt
//             byUser{
//                 username
//                 firstName
//                 lastName
//             }
//         }
//         likedByUsers{
//             username
//             firstName
//             lastName
//         }
//     }
// }`
