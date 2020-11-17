package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserProfileRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@Component
@CrossOrigin(origins = "http://localhost:3000")
public class PostsGraphQLQueryController implements GraphQLQueryResolver {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    public Post getPost(String id) {
        return postRepository.findById(id).get();
    }

    public List<Post> getAllPostsForUser(String username) {
        return userProfileRepository.findByUsername(username).getPosts();
    }

    public List<Post> loadFeed(String username) {
        List<Post> result = new ArrayList<>();
        UserProfile userProfile = userProfileRepository.findByUsername(username);
        List<User> following = userProfile.getFollowing();
        for(User u: following) {
             result.addAll(userProfileRepository.findByUsername(u.getUsername()).getPosts());
        }
        return result;
    }
}
