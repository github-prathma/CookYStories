package com.cookystoriesspring.CookYStories.Scarpers.Resolvers;

import com.cookystoriesspring.CookYStories.Scarpers.Models.Restaurant;
import com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories.RestaurantRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Component
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantsGraphQLQueryResolver implements GraphQLQueryResolver {

    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<Restaurant> getRestaurants() {
        return restaurantRepository.findAll();
    }
}
