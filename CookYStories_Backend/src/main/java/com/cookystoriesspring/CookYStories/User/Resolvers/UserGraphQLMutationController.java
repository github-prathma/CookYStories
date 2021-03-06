package com.cookystoriesspring.CookYStories.User.Resolvers;


import com.cookystoriesspring.CookYStories.Post.Models.Comment;
import com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs.PostInput;
import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.CommentRepository;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs.FollowerRelationship;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs.ProfileInput;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserProfileRepository;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.event.EventRecodingLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@Slf4j
public class UserGraphQLMutationController implements GraphQLMutationResolver {

    Logger log = LoggerFactory.getLogger(UserGraphQLMutationController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    PostRepository postRepository;

    @Autowired
    CommentRepository commentRepository;


    @Transactional
    public Boolean signUpUser(User user) {

        User fetchedByUsername = userRepository.findByUsername(user.getUsername());
        User fetchedByEmail = userRepository.findByEmail(user.getEmail());

        if(fetchedByEmail!=null || fetchedByUsername!=null) {
            return false;
        }
        User createdUser = new User();
        createdUser.setFirstName(user.getFirstName());
        createdUser.setLastName(user.getLastName());
        createdUser.setEmail(user.getEmail());
        createdUser.setPassword(user.getPassword());
        createdUser.setUsername(user.getUsername());
        if(user.getBioDescription()!=null) { createdUser.setBioDescription(user.getBioDescription()); } else {createdUser.setBioDescription("");}
        if(user.getCity()!=null) { createdUser.setCity(user.getCity()); } else {createdUser.setCity("");}
        if(user.getCountry()!=null) {createdUser.setCountry(user.getCountry());} else {createdUser.setCountry("");}
        createdUser.setCreatedAt(new Date());
        User newUser = userRepository.insert(createdUser);

        User fetchedUser = userRepository.findByUsername(createdUser.getUsername());

        UserProfile userProfile = new UserProfile();
        userProfile.setBasicInfo(fetchedUser);
        userProfile.setFollowers(new ArrayList<>());
        userProfile.setFollowing(new ArrayList<>());
        userProfile.setNumFollowers(0);
        userProfile.setNumFollowing(0);
        userProfile.setNumPosts(0);
        userProfile.setPosts(new ArrayList<>());
        userProfile.setProfileImageUrl("");
        userProfile.setUsername(user.getUsername());

        UserProfile savedUserProfile = userProfileRepository.insert(userProfile);

        return true;
    }

    @Transactional
    public User updateUser(User user) {
        User fetchedUser = userRepository.findByUsername(user.getUsername());

        if (user.getBioDescription() != null && user.getBioDescription() != "") {
            fetchedUser.setBioDescription(user.getBioDescription());
        }
        if (user.getFirstName() != null && user.getFirstName() != "") {
            fetchedUser.setFirstName(user.getFirstName());
        }
        if (user.getLastName() != null && user.getLastName() != "") {
            fetchedUser.setLastName(user.getLastName());
        }
        if (user.getCity() != null && user.getCity() != "") {
            fetchedUser.setCity(user.getCity());
        }
        if (user.getCountry() != null && user.getCountry() != "") {
            fetchedUser.setCountry(user.getCountry());
        }
        if (user.getPassword() != null && user.getPassword() != "") {
            fetchedUser.setPassword(user.getPassword());
        }
        if (user.getProfileImageUrl() != null && user.getProfileImageUrl() != "") {
            fetchedUser.setProfileImageUrl(user.getProfileImageUrl());
        }

        User updatedUser = userRepository.save(fetchedUser);

        UserProfile fetchedUserProfile = userProfileRepository.findByUsername(user.getUsername());
        fetchedUserProfile.setUsername(updatedUser.getUsername());
        fetchedUserProfile.setProfileImageUrl(updatedUser.getProfileImageUrl());
        fetchedUserProfile.setBasicInfo(updatedUser);

        // followers set updated User info
        List<User> followers = new ArrayList<>();
        if(fetchedUserProfile.getFollowers()!=null && fetchedUserProfile.getFollowers().size()>0) {
            followers = fetchedUserProfile.getFollowers();
            for(User follower: followers) {
                UserProfile followerProfile = userProfileRepository.findByUsername(follower.getUsername());
                List<User> follower_following_list = new ArrayList<>();
                if(followerProfile.getFollowing()!=null && followerProfile.getFollowing().size()>0) {
                    follower_following_list = followerProfile.getFollowing();
                    int followingIndex = follower_following_list.indexOf(fetchedUser);
                    if(followingIndex!= -1) {
                        follower_following_list.set(followingIndex, updatedUser);
                        followerProfile.setFollowing(follower_following_list);
                        userProfileRepository.save(followerProfile);
                    }
                }
            }

        }

        // following set updated User info
        List<User> following = new ArrayList<>();
        if(fetchedUserProfile.getFollowing()!=null && fetchedUserProfile.getFollowing().size()>0) {
            following = fetchedUserProfile.getFollowing();
            for(User follows: following) {
                UserProfile followingProfile = userProfileRepository.findByUsername(follows.getUsername());
                List<User> following_followers_list = new ArrayList<>();
                if(followingProfile.getFollowers()!=null && followingProfile.getFollowers().size()>0) {
                    following_followers_list = followingProfile.getFollowers();
                    int followerIndex = following_followers_list.indexOf(fetchedUser);
                    if(followerIndex != -1) {
                        following_followers_list.set(followerIndex, updatedUser);
                        followingProfile.setFollowers(following_followers_list);
                        userProfileRepository.save(followingProfile);
                    }
                }
            }

        }


        List<Post> posts = new ArrayList<>();

        if (fetchedUserProfile.getPosts() == null || fetchedUserProfile.getPosts().size() == 0) {

        } else {
            posts = new ArrayList<>(List.copyOf(fetchedUserProfile.getPosts()));
        }

        for (Post post: posts) {
            post.setByUser(updatedUser);
            Post dbPost = postRepository.findPostById(post.getId());
            dbPost.setByUser(updatedUser);
            postRepository.save(dbPost);
        }
        fetchedUserProfile.setPosts(posts);
        userProfileRepository.save(fetchedUserProfile);

//        List<Comment> commentsByUser = new ArrayList<>();

        List<Comment> allComments = new ArrayList<>();

//        if (commentRepository.findByByUser_Username(updatedUser.getUsername()) == null || commentRepository.findByByUser_Username(updatedUser.getUsername()).size() == 0) {
//
//        } else {
//            commentsByUser = new ArrayList<>(List.copyOf(commentRepository.findByByUser_Username(updatedUser.getUsername())));
//        }

        if (commentRepository.findAll() == null || commentRepository.findAll().size() == 0) {

        } else {
            allComments = new ArrayList<>(List.copyOf(commentRepository.findAll()));
        }


        for(Comment comment: allComments) {
            if (!comment.getByUser().equals(updatedUser)) {
                continue;
            }
            log.debug("Comment updated "+comment.getCommentText());
            comment.setByUser(updatedUser);
            commentRepository.save(comment);

            Post postForComment = postRepository.findPostById(comment.getPostId());
            List<Comment> comments = new ArrayList<>();
            if(postForComment.getComments()!=null && postForComment.getComments().size()>0) {
                comments = postForComment.getComments();
            }
            int index = comments.indexOf(comment);
            comments.set(index, comment);
            postForComment.setComments(comments);
            Post updatedPost = postRepository.save(postForComment);


            UserProfile commentShownInUserProfile = userProfileRepository.findByUsername(postForComment.getByUser().getUsername());
            List<Post> allPosts = new ArrayList<>(List.copyOf(commentShownInUserProfile.getPosts()));
            int postIndex = allPosts.indexOf(postForComment);
            allPosts.set(postIndex, updatedPost);
            log.info("AllPosts post at Index = "+ allPosts.get(postIndex).toString());
            commentShownInUserProfile.setPosts(allPosts);
            log.info("Final Comment"+commentShownInUserProfile.getPosts().toString());
            userProfileRepository.save(commentShownInUserProfile);
        }



        return updatedUser;

    }

    public Boolean removeUser(String username) {
        userProfileRepository.delete(userProfileRepository.findByUsername(username));
        userRepository.delete(userRepository.findByUsername(username));
        return true;
    }

    @Transactional
    public UserProfile updateProfile(ProfileInput profileInput) {
        UserProfile user = userProfileRepository.findByUsername(profileInput.getUsername());

        user.setProfileImageUrl(profileInput.getProfileImageUrl());
        return userProfileRepository.save(user);
    }

    public UserProfile followUser(FollowerRelationship followerRelationship) {
        log.info("to follow: " + followerRelationship.getIsFollow());

        UserProfile loggedInUser = userProfileRepository.findByUsername(followerRelationship.getLoggedInUser());
        UserProfile toUser = userProfileRepository.findByUsername(followerRelationship.getToFollowUser());

        if (!followerRelationship.getIsFollow()) {
            // unfollow

            List<User> toUserFollowers = toUser.getFollowers();
            List<User> loggedInUserFollowings = loggedInUser.getFollowing();

            if(toUserFollowers.contains(loggedInUser.getBasicInfo()) && loggedInUserFollowings.contains(toUser.getBasicInfo())) {
                toUserFollowers.remove(loggedInUser.getBasicInfo());
                toUser.setNumFollowers(toUser.getNumFollowers()-1);
                loggedInUserFollowings.remove(toUser.getBasicInfo());
                loggedInUser.setNumFollowing(loggedInUser.getNumFollowing()-1);

                toUser.setFollowers(toUserFollowers);
                loggedInUser.setFollowing(loggedInUserFollowings);

                userProfileRepository.save(toUser);
                userProfileRepository.save(loggedInUser);

                toUser.setIsFollowed(false);
            } else {
                if(toUserFollowers.contains(loggedInUser.getBasicInfo()) && loggedInUserFollowings.contains(toUser.getBasicInfo())) {
                    toUser.setIsFollowed(false);

                } else {
                    toUser.setIsFollowed(true);

                }
            }
        } else {
            // Follow


            List<User> toUserFollowers = new ArrayList<>();
            List<User> loggedInUserFollowings = new ArrayList<>();

            if (toUser.getFollowers() != null) {
                toUserFollowers = new ArrayList<>(List.copyOf(toUser.getFollowers()));
            }

            if (loggedInUser.getFollowing() != null) {
                loggedInUserFollowings = new ArrayList<>(List.copyOf(loggedInUser.getFollowing()));
            }

            if(!toUserFollowers.contains(loggedInUser.getBasicInfo()) && !loggedInUserFollowings.contains(toUser.getBasicInfo())) {
                log.info("Following User "+toUser.getUsername()+" by User "+loggedInUser.getUsername());

                toUserFollowers.add(loggedInUser.getBasicInfo());
                toUser.setNumFollowers(toUser.getNumFollowers()+1);
                loggedInUserFollowings.add(toUser.getBasicInfo());
                loggedInUser.setNumFollowing(loggedInUser.getNumFollowing()+1);

                toUser.setFollowers(toUserFollowers);
                loggedInUser.setFollowing(loggedInUserFollowings);

                userProfileRepository.save(toUser);
                userProfileRepository.save(loggedInUser);

                toUser.setIsFollowed(true);
            } else {

                if (!toUserFollowers.contains(loggedInUser.getBasicInfo()) && !loggedInUserFollowings.contains(toUser.getBasicInfo())) {
                    toUser.setIsFollowed(true);
                } else {
                    toUser.setIsFollowed(false);
                }
            }

        }

        return toUser;
    }
}
