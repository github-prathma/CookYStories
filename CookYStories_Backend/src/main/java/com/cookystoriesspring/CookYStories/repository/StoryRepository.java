package com.cookystoriesspring.CookYStories.repository;
import com.cookystoriesspring.CookYStories.model.Story;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StoryRepository extends MongoRepository<Story, String> {

}
