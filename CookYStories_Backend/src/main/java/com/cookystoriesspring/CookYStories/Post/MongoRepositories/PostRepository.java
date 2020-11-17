package com.cookystoriesspring.CookYStories.Post.MongoRepositories;
import com.cookystoriesspring.CookYStories.Post.Models.Post;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostRepository extends MongoRepository<Post, String> {
    Post findPostById(String id);

    List<Post> findByDescriptionContaining(String query);

}