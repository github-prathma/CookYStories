package com.cookystoriesspring.CookYStories.Post.Resolvers;

import com.cookystoriesspring.CookYStories.Post.Models.Comment;
import com.cookystoriesspring.CookYStories.Post.MongoRepositories.CommentRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CommentsGraphQLQueryController implements GraphQLQueryResolver {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getComments(String postId) {
        return commentRepository.findCommentsByPostId(postId);
    }
}
