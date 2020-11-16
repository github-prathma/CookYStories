package com.cookystoriesspring.CookYStories.User.MongoRepositories;

import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public interface UserProfileRepository extends MongoRepository<UserProfile, String> {
    @Transactional
    @Query("{ 'username' : ?0 }")
    public UserProfile findByUsername(String username);
}