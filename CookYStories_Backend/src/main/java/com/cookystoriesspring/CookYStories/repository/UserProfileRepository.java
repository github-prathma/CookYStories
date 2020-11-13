package com.cookystoriesspring.CookYStories.repository;

import com.cookystoriesspring.CookYStories.model.UserProfile;
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