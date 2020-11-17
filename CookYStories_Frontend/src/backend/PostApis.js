import {gql} from "apollo-boost"

export const GET_FEED = gql`
query LoadFeed($username: String!) {
    loadFeed(username: $username) {
        description
        createdAt
        byUser {
            username
            firstName
            lastName
        }
    }
}`

