import {gql} from "apollo-boost"

// signup
const SIGN_UP = gql`
    
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

const LOG_IN

const LOG_OUT