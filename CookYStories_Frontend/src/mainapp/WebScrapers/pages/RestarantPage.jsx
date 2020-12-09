import React, { Component } from 'react'
import Sidebar from '../../../userFeed/components/Sidebar'
import {LOAD_RESTAURANTS} from '../../../backend/WebScraperApis'
import { Query } from 'react-apollo'
import RestaurantCard from '../components/Card'

function LoadRestaurants() {
    return( 
        <Query query={LOAD_RESTAURANTS}>
            {
            ({loading, error, data}) => {

                if (loading) {
                    return (
                        <span>loading....</span>
                    )
                }

                if (error) {
                    return (
                        <span>error....</span>
                    )
                }
                console.log(data)

                const restaurants = data.getRestaurants
                return (
                    <div className="restaurants" >
                        <div >
                            {
                                restaurants.map (
                                    restaurant => 
                                    <RestaurantCard 
                                    key = {restaurant.id}
                                    name = {restaurant.name}
                                    address = {restaurant.address}
                                    website = {restaurant.website}
                                    price = {restaurant.price} 
                                    telephone = {restaurant.telephone}
                                    />
                                )
                            }
                        </div>
                        
                    </div>
                );
            }
        }
        </Query>
    );
}

export default class RestaurantPage extends Component {

    constructor() {
        super()
        this.state = {
            restaurants : []
        }
    }

    render() {
        return (
            <div className="outer_container">
                {/* <div className="SicebarArea">
                    <Sidebar />
                </div> */}
                <div className="mainContent">
                    <LoadRestaurants />
                </div>
            </div>
        )
    }
}