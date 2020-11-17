package com.cookystoriesspring.CookYStories.User.MongoRepositories;

import com.cookystoriesspring.CookYStories.User.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public interface UserRepository extends MongoRepository<User, String> {
    @Transactional
    @Query("{ 'username' : ?0 }")
    public User findByUsername(String username);

    @Transactional
    @Query("{ 'email' : ?0 }")
    public User findByEmail(String email);

    public Boolean deleteUserByUsername(String username);
}
