package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserProfileRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.regex.Pattern;

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

    private class SortPostByDate implements Comparator<Post> {
        @Override
        public int compare(Post p1, Post p2) {
            if(p1.getCreatedAt().compareTo(p2.getCreatedAt()) > 0) {
                return -1;
            } else if(p1.getCreatedAt().compareTo(p2.getCreatedAt()) == 0) {
                return 0;
            } else {
                return 1;
            }
        }

    }
    public List<Post> loadFeed(String username) {
        List<Post> result = new ArrayList<>();
        UserProfile userProfile = userProfileRepository.findByUsername(username);
        List<User> following = userProfile.getFollowing();
        for(User u: following) {
             result.addAll(userProfileRepository.findByUsername(u.getUsername()).getPosts());
        }
        result.addAll(userProfile.getPosts());
        Collections.sort(result, new SortPostByDate());

        return result;
    }

    public List<Post> searchPostsByQuery(String query) {
        List<Post> allPosts = new ArrayList<>();
        List<Post> result = new ArrayList<>();
        allPosts = postRepository.findAll();

        for(Post post: allPosts) {
            boolean found = Pattern.compile(Pattern.quote(query), Pattern.CASE_INSENSITIVE).matcher(post.getDescription()).find();
            if(found){
                result.add(post);
            }
        }

        Collections.sort(result, new SortPostByDate());
        return result;
    }
}
