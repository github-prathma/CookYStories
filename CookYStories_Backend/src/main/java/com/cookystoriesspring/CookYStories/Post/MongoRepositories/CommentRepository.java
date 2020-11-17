package com.cookystoriesspring.CookYStories.Post.MongoRepositories;
import com.cookystoriesspring.CookYStories.Post.Models.Comment;
import com.cookystoriesspring.CookYStories.User.Models.User;
import org.checkerframework.checker.units.qual.C;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentRepository extends MongoRepository<Comment, String> {

    List<Comment> findCommentsByPostId(String postId);

    Comment findCommentById(String id);

    List<Comment> findByByUser_Username(String username);
}
