package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Comment;
import com.cookystoriesspring.CookYStories.Post.Models.GraphQLInputs.CommentInput;
import com.cookystoriesspring.CookYStories.Post.Models.Post;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.CommentRepository;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.PostRepository;
import com.cookystoriesspring.CookYStories.User.Models.User;
import com.cookystoriesspring.CookYStories.User.Models.UserProfile;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserProfileRepository;
import com.cookystoriesspring.CookYStories.User.MongoRepositories.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@Slf4j

public class CommentsGraphQLMutationController implements GraphQLMutationResolver {

    Logger log = LoggerFactory.getLogger(CommentsGraphQLMutationController.class);

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    private Boolean isValidModel(CommentInput commentInput) {
        if (commentInput.getByUsername() == null || commentInput.getByUsername().equals("")) {
            return false;
        }
        if (commentInput.getDescription() == null || commentInput.getDescription().equals("")) {
            return false;
        }
        if (commentInput.getPostId() == null || commentInput.getPostId().equals("")) {
            return false;
        }
        return true;
    }

    public Boolean addComment(CommentInput commentInput) {
        if (isValidModel(commentInput)) {

            Comment comment = new Comment();

            comment.setPostId(commentInput.getPostId());
            comment.setCommentText(commentInput.getDescription());

            User byUser = userRepository.findByUsername(commentInput.getByUsername());
            comment.setByUser(byUser);

            comment.setCreatedAt(new Date());

            comment.setNumLikes(0);

            Comment createdComment = commentRepository.insert(comment);

            comment.setId(createdComment.getId());

            Post post = postRepository.findPostById(commentInput.getPostId());
            post.setNumComments(post.getNumComments()+1);

            if (post.getComments() == null || post.getComments().size() == 0) {
                List<Comment> postComments = new ArrayList<>();
                postComments.add(comment);
                post.setComments(postComments);
            } else {
                post.getComments().add(comment);
                post.setComments(post.getComments());

            }

            UserProfile postedByProfile = userProfileRepository.findByUsername(post.getByUser().getUsername());

            List<Post> allPosts = postedByProfile.getPosts();

            if (allPosts.contains(post)) {
                int index = allPosts.indexOf(post);
                allPosts.set(index, post);
            }

            postedByProfile.setPosts(allPosts);

            userProfileRepository.save(postedByProfile);
            postRepository.save(post);
            return true;
        }
        return false;
    }

    public Comment updateComment(CommentInput commentInput) {
        Comment comment = commentRepository.findCommentById(commentInput.getId());
        comment.setCommentText(commentInput.getDescription());

        Post post = postRepository.findPostById(commentInput.getPostId());


        if (post.getComments() == null || post.getComments().size() == 0) {
            return null;
        } else {
            List<Comment> comments = post.getComments();

            int index = -1;
            for (Comment postComment : comments ) {
                if (postComment.getId().equals(commentInput.getId())) {
                    index = comments.indexOf(postComment);
                    break;
                }
            }
            if (index != -1) {
                comments.set(index, comment);
            }
        }

        UserProfile postedByProfile = userProfileRepository.findByUsername(post.getByUser().getUsername());

        List<Post> allPosts = postedByProfile.getPosts();

        if (allPosts.contains(post)) {
            int index = allPosts.indexOf(post);
            allPosts.set(index, post);
        }

        postedByProfile.setPosts(allPosts);

        userProfileRepository.save(postedByProfile);
        commentRepository.save(comment);
        postRepository.save(post);


        return comment;
    }

    public Boolean deleteComment(String commentId) {
        Comment comment = commentRepository.findCommentById(commentId);
        if (comment != null) {

            Post post = postRepository.findPostById(comment.getPostId());

            if (post.getComments() == null || post.getComments().size() == 0) {
                return false;
            } else {
                List<Comment> postComments = post.getComments();

                if (postComments.contains(comment)) {
                    postComments.remove(comment);
                    post.setComments(postComments);
                    post.setNumComments(post.getNumComments()-1);
                    postRepository.save(post);

                }

                UserProfile userProfile = userProfileRepository.findByUsername(post.getByUser().getUsername());

                List<Post> userPosts = userProfile.getPosts();

                if (userPosts.contains(post)) {
                    int index = userPosts.indexOf(post);
                    userPosts.set(index, post);
                }

                userProfileRepository.save(userProfile);

            }



            commentRepository.delete(comment);
            return true;
        }
        return false;
    }
}
