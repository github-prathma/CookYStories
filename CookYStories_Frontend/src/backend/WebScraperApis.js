import {gql} from "apollo-boost"

export const LOAD_RESTAURANTS = gql`
query {
    getRestaurants{
        id
        name
        telephone
        address
        price
        website
    }
}
`