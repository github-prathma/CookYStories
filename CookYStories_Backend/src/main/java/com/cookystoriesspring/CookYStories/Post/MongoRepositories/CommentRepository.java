package com.cookystoriesspring.CookYStories.Post.MongoRepositories;
import com.cookystoriesspring.CookYStories.Post.Models.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface CommentRepository extends MongoRepository<Comment, String> {

}
