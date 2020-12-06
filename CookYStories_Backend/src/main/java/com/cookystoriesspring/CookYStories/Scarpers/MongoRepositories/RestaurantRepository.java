package com.cookystoriesspring.CookYStories.Scarpers.MongoRepositories;

import com.cookystoriesspring.CookYStories.Scarpers.Models.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
    public List<Restaurant> findAll();
}
