package com.cookystoriesspring.CookYStories.Authentication.MongoRepositories;

import com.cookystoriesspring.CookYStories.Authentication.Models.AuthenticationModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import javax.transaction.Transactional;

public interface AuthenticationRepository extends MongoRepository<AuthenticationModel, String> {
    @Transactional
    @Query("{ 'username' : ?0 }")
    AuthenticationModel findByUsername(String username);
}
