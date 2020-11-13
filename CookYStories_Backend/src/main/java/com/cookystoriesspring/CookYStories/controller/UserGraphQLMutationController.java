package com.cookystoriesspring.CookYStories.controller;

import com.cookystoriesspring.CookYStories.model.User;
import com.cookystoriesspring.CookYStories.model.UserProfile;
import com.cookystoriesspring.CookYStories.model.inputs.UserInput;
import com.cookystoriesspring.CookYStories.repository.UserProfileRepository;
import com.cookystoriesspring.CookYStories.repository.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import okhttp3.internal.tls.OkHostnameVerifier;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.ArrayList;

@Component
public class UserGraphQLMutationController implements GraphQLMutationResolver {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserProfileRepository userProfileRepository;


    @Transactional
    public Boolean addUser(User user) {
        User newUser = userRepository.insert(user);
        logger.info("New User: {} {} {}", newUser.getUsername(), newUser.getFirstName(), newUser.getLastName());
        logger.info("Searching for user: "+user.getUsername());
        User fetchedUser = userRepository.findByUsername(user.getUsername());
        UserProfile userProfile = new UserProfile();
        userProfile.setBasicInfo(fetchedUser);
        userProfile.setFollowers(new ArrayList<>());
        userProfile.setFollowing(new ArrayList<>());
        userProfile.setLikedComments(new ArrayList<>());
        userProfile.setLikedPosts(new ArrayList<>());
        userProfile.setNumFollowers(0);
        userProfile.setNumFollowing(0);
        userProfile.setNumPosts(0);
        userProfile.setPosts(new ArrayList<>());
        userProfile.setProfileImageUrl("");
        userProfile.setUsername(user.getUsername());

        UserProfile savedUserProfile = userProfileRepository.insert(userProfile);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{username}").buildAndExpand(newUser.getUsername()).toUri();
        ResponseEntity obj = ResponseEntity.created(uri).build();
        return obj.hasBody();
    }

    @Transactional
    public User updateUser(User user) {
        User fetchedUser = userRepository.findByUsername(user.getUsername());
        fetchedUser.setBioDescription(user.getBioDescription());
        fetchedUser.setFirstName(user.getFirstName());
        fetchedUser.setLastName(user.getLastName());

        return userRepository.save(fetchedUser);
    }

    @Transactional
    public Boolean addUserProfile(String username) {
        logger.info("Searching for user: "+username);
        User user = userRepository.findByUsername(username);
        UserProfile userProfile = new UserProfile();
        userProfile.setBasicInfo(user);
        userProfile.setFollowers(new ArrayList<>());
        userProfile.setFollowing(new ArrayList<>());
        userProfile.setLikedComments(new ArrayList<>());
        userProfile.setLikedPosts(new ArrayList<>());
        userProfile.setNumFollowers(0);
        userProfile.setNumFollowing(0);
        userProfile.setNumPosts(0);
        userProfile.setPosts(new ArrayList<>());
        userProfile.setProfileImageUrl("");
        userProfile.setUsername(username);

        UserProfile savedUserProfile = userProfileRepository.insert(userProfile);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/users/{username}").buildAndExpand(savedUserProfile.getUsername()).toUri();
        ResponseEntity obj = ResponseEntity.created(uri).build();
        return obj.getStatusCode().equals("200");
    }
}
