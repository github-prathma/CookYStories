package com.cookystoriesspring.CookYStories.controller;

import com.cookystoriesspring.CookYStories.model.Post;
import com.cookystoriesspring.CookYStories.model.User;
import com.cookystoriesspring.CookYStories.model.UserProfile;
import com.cookystoriesspring.CookYStories.repository.UserProfileRepository;
import com.cookystoriesspring.CookYStories.repository.UserRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@Component
public class UserGraphQLQueryController implements GraphQLQueryResolver {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    public UserProfile getUserProfile(String username) {
        return userProfileRepository.findByUsername(username);
    }

    public List<User> getFollowers(String username) {
        UserProfile user = userProfileRepository.findByUsername(username);
        return user.getFollowers();
    }

    public List<User> getFollowing(String username) {
        UserProfile user = userProfileRepository.findByUsername(username);
        return user.getFollowing();
    }

    public List<Post> getPosts(String username) {
        UserProfile user = userProfileRepository.findByUsername(username);
        return user.getPosts();
    }


}
