import {gql} from "apollo-boost"

// signup
export const SIGN_UP = gql`
    
        mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!) {
            signUpUser(input:{
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
                username: $username
            }) 
        }
`

export const LOG_IN = gql`
        mutation ($username:String!, $password:String!) {
            login(auth : {
                username:$username
                password:$password
            }) {
                user
                password
                token
            }
        }
`

export const LOG_OUT = gql `
mutation ($username: String!) {
    logout(username: $username)
}
`