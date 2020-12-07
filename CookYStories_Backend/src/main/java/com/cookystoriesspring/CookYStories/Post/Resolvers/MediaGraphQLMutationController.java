package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs.MediaInput;
import com.cookystoriesspring.CookYStories.Post.Models.Media;
import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.MediaRepository;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserProfileRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
public class MediaGraphQLMutationController implements GraphQLMutationResolver {

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    public String uploadMedia(MediaInput file) {

        Media newMedia = new Media();

        String fileContentType = file.getContentType();
        newMedia.setType(fileContentType);

        byte[] fileContent = file.getContent();
        newMedia.setContent(fileContent);

        mediaRepository.insert(newMedia);

        Post post = postRepository.findById(file.getPostId()).orElse(null);

        if (post != null) {
            User byUser = post.getByUser();

            List<Media> postMedias = new ArrayList<>();

            if (post.getMedia() != null && post.getMedia().size() > 0) {
                postMedias = post.getMedia();
                postMedias.add(newMedia);
                postRepository.save(post);

                UserProfile postuser = userProfileRepository.findByUsername(byUser.getUsername());
                List<Post> allPosts = postuser.getPosts();
                int postIndex = allPosts.indexOf(post);
                if(postIndex!=-1) {
                    allPosts.set(postIndex, post);
                }
                userProfileRepository.save(postuser);
            }
        }



        return newMedia.getId();
    }

    public boolean deleteMedia(String mediaId) {

        Media media = mediaRepository.findById(mediaId).orElse(null);

        if (media != null) {
            String postId = media.getPostId();

            Post post = postRepository.findPostById(postId);
            User byUser = post.getByUser();
            List<Media> postmedias = post.getMedia();
            postmedias.remove(media);
            postRepository.save(post);

            UserProfile postuser = userProfileRepository.findByUsername(byUser.getUsername());
            List<Post> allPosts = postuser.getPosts();
            int postIndex = allPosts.indexOf(post);
            if(postIndex!=-1) {
                allPosts.set(postIndex, post);
            }
            userProfileRepository.save(postuser);

            mediaRepository.deleteById(mediaId);
            return true;
        }
        return false;
    }
}
