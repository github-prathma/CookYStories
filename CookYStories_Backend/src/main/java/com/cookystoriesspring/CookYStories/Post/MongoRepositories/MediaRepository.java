package com.cookystoriesspring.CookYStories.Post.MongoRepositories;

import com.cookystoriesspring.CookYStories.Post.Models.Media;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MediaRepository extends MongoRepository<Media, String> {

}