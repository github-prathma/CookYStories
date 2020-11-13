package com.cookystoriesspring.CookYStories.repository;

import com.cookystoriesspring.CookYStories.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public interface UserRepository extends MongoRepository<User, String> {
    @Transactional
    @Query("{ 'username' : ?0 }")
    public User findByUsername(String username);

    public Boolean deleteUserByUsername(String username);
}
