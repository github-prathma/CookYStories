package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Media;
import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs.LikedPostInput;
import com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs.PostInput;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserProfileRepository;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Component
public class PostsGraphQLMutationController implements GraphQLMutationResolver {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    public Boolean addPost(PostInput postInput) {
        Post post = new Post();

        UserProfile byUserProfile = userProfileRepository.findByUsername(postInput.getByUsername());
        log.info(byUserProfile.getUsername());
//
        List<Post> posts = byUserProfile.getPosts();
        User byUser = userRepository.findByUsername(postInput.getByUsername());

        log.info(byUser.getFirstName());

        byUserProfile.setBasicInfo(byUser);

        post.setByUser(byUser);

        post.setNumComments(0);
        post.setNumLikes(0);
        post.setCreatedAt(new Date());
        if (postInput.getMedia() != null) {
            List<String> media = postInput.getMedia();
            List<Media> postsMedia = new ArrayList<>();
            for (String m: media) {
                Media md = new Media();
                md.setType(m);
                postsMedia.add(md);
            }
            post.setMedia(postsMedia);
        }

        post.setDescription(postInput.getDescription());
        post.setShareUrl("");

        posts.add(post);
        userProfileRepository.save(byUserProfile);
        postRepository.insert(post);

        return true;
    }

    public Post updatePost(PostInput post) {
        Post oldPost = postRepository.findPostById(post.getId());
        oldPost.setDescription(post.getDescription());
        List<String> media = post.getMedia();
        List<Media> postsMedia = new ArrayList<>();
        for (String m: media) {
            Media md = new Media();
            md.setType(m);
            postsMedia.add(md);
        }
        oldPost.setMedia(postsMedia);
        postRepository.save(oldPost);
        return oldPost;
    }

    public Boolean likeUnlikePost(LikedPostInput post) {
        Post oldPost = postRepository.findPostById(post.getId());
        String byusername = post.getByUsername();
        List<User> likedByUsers = oldPost.getLikedByUsers();

        if (post.getIsLiked() == true) {
            boolean userFound = false;
            for (User user: likedByUsers) {
                if (user.getUsername() == byusername) {
                    userFound = true;
                    break;
                }
            }

            if (userFound == false) {
                oldPost.setNumLikes(oldPost.getNumLikes()+1);
                likedByUsers.add(userRepository.findByUsername(byusername));
            }
        } else {
            boolean userFound = false;
            for (User user: likedByUsers) {
                if (user.getUsername() == byusername) {
                    userFound = true;
                    break;
                }
            }

            if (userFound == true) {
                oldPost.setNumLikes(oldPost.getNumLikes() - 1);
                likedByUsers.remove(userRepository.findByUsername(byusername));
            }
        }
        postRepository.save(oldPost);

        return !post.getIsLiked();
    }

    public Boolean deletePost(String id) {
        postRepository.delete(postRepository.findPostById(id));
        return true;
    }



}
