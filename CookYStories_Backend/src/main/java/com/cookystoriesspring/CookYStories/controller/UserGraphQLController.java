package com.cookystoriesspring.CookYStories.controller;

import com.cookystoriesspring.CookYStories.model.User;
import com.cookystoriesspring.CookYStories.repository.UserRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;


@Component
public class UserGraphQLController implements GraphQLQueryResolver {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/{username}")
    public User getUser(@PathVariable("username") String username) {
        logger.info("Fetching user: "+username);
        return userRepository.findByUsername(username);
    }

}
