import {gql} from "apollo-boost"

// signup
export const SIGN_UP = gql`
    
        mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!, $city: String, $country: String, $bioDescription: String) {
            signUpUser(input:{
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
                username: $username
                city: $city
                country: $country
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

// const LOG_OUT = gql ``