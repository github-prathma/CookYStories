package com.cookystoriesspring.CookYStories.Post.MongoRepositories;
import com.cookystoriesspring.CookYStories.Post.Models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
public interface PostRepository extends MongoRepository<Post, String> {
    Post findPostById(String id);
}