import {gql} from "apollo-boost"

// get profile
export const GET_USER_PROFILE = gql `
query ($loggedInUser:String!, $toFollowUser:String!) {
    getUserProfile(input:{loggedInUser:$loggedInUser toFollowUser:$toFollowUser}){
        username
        profileImageUrl
        isFollowed
        basicInfo{
            firstName
            lastName
            city
            country
            bioDescription
        }
        numPosts
        numFollowers
        numFollowing
        posts{
            description
            createdAt
            byUser {
                username
                firstName
                lastName
                profileImageUrl
            }
            numLikes
            numComments
            comments{
                commentText
                createdAt
                byUser{
                    username
                    firstName
                    lastName
                    profileImageUrl
                }
            }
            likedByUsers{
                username
                firstName
                lastName
                profileImageUrl
            }
        }
        
        followers {
            username
            firstName
            lastName
            city
            country
            profileImageUrl
        }
        following{
            username
            firstName
            lastName
            city
            country
            profileImageUrl
        }
    }
}
`

// //report profile
// export const REPORT_USER_PROFILE = gql `
// mutation ($reportedUser:String!, $reportedBy:String!){
//     reportUser(input:{
//         username:$reportedUser
//         reportedBy:$reportedBy
//     })
// }`

// edit profile
export const UPDATE_USER_INFO = gql 
    `mutation ($username: String, $firstName: String, $lastName: String, $city: String, $country: String, $bio: String, $profileImageUrl: String) {
                updateUser(input:{
                    firstName:$firstName
                    lastName:$lastName
                    username:$username
                    bioDescription:$bio
                    city:$city
                    country:$country
                    profileImageUrl:$profileImageUrl
                }) {
                    firstName
                    lastName
                    bioDescription
                    username
                    city
                    country
                    profileImageUrl
                }
            }`


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

